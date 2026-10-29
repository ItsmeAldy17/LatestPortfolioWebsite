# ARCHITECTURE — Update Project 15 Visit Bantaragung (P1 Feasibility Pre-check)

- **Phase:** P1 (pre-check, before build)
- **Author:** v4-architect
- **Date:** 2026-10-25
- **Inputs:** `docs/BRIEF.md`, `docs/SPEC.md` (238 lines, v1.0), `docs/DECISIONS.md` (ASSUMPTION-001…006), `src/data/project_details.json` (id 15, lines 702–723), `src/pages/project/[id].astro` (171 lines), `src/pages/all-projects.astro`, `src/lib/projects.ts`, `package.json` (Astro 5, static build)
- **Verdict: FEASIBLE** — content-only change, no template/order/code changes required. Blocking = false.

---

## 1. Stack & components touched

| Layer | Technology | Touched? | Notes |
|---|---|---|---|
| Site generator | Astro 5 (static SSG, `getStaticPaths` per project) | No | `package.json`: `astro ^5.6.1`, `@astrojs/tailwind`, `@astrojs/sitemap`. Build output is fully static; no server runtime. |
| Styling | Tailwind CSS 3.4 (via `@astrojs/tailwind`) | No | Template classes already handle all sections. |
| Data store | `src/data/project_details.json` (single JSON array, no DB) | **Yes — object `id "15"` only** | Allowed sub-fields: `role`, `timeline` (unchanged value), `overview`, `challenge`, `result`, `technologies_grouped` (new), `statistics` (new), `gallery` (item 1 preserved; items 2+ only with real assets). |
| Render contract | `src/pages/project/[id].astro` | No | Verified lines 19–20, 99–129, 131–146: `statistics` and `technologies_grouped` render via `Object.entries(p.xxx ?? {})` — optional chaining means missing fields are safe AND newly added fields render automatically. `sections` array (lines 56–60) filters falsy bodies, so rewrites need no template edit. |
| Listing | `src/pages/all-projects.astro` | No | Line 44 renders `{p.role}` from the same JSON object; role rename propagates automatically. Listing order comes from `orderedProjects()`, untouched. |
| Ordering | `src/lib/projects.ts` | No | `WEB_AFTER_ML = ['21','19','15']` hardcodes position independent of file order or content; a content-only edit cannot move entry 15. |
| SEO/schema | JSON-LD `CreativeWork` in `[id].astro` lines 24–54 | No (data-driven) | `description: p.overview`, `keywords: techGroups.flatMap(...).join(', ')` — both derived from the edited fields. Only constraint: no unescaped characters that break JSON-LD (quotes, `</script>`). SPEC NFR-04 covers this; QA TC-10 verifies. |

**Untouched by design:** `id`, `name`, `category` (`Web`), `status`, `github_link`, `demo_link`, `card_image_src` of entry 15; all other entries; all templates; ordering module.

## 2. Data flow (JSON → template, end-to-end)

```
project_details.json ──import──▶ [id].astro getStaticPaths() ──props──▶ page render
        │                              │
        │                              ├─ meta row:        p.role, p.timeline (line 70-71)
        │                              ├─ editorial:       p.overview/challenge/result → sections[] (lines 56-60, 91-97)
        │                              ├─ Key Statistics:  Object.entries(p.statistics ?? {}) → grid-cols-2 / lg:grid-cols-4 (lines 99-111)
        │                              ├─ Technologies:    Object.entries(p.technologies_grouped ?? {}) → pills (lines 113-129)
        │                              ├─ Gallery:         p.gallery[] → md:grid-cols-2 cards (lines 131-146)
        │                              └─ JSON-LD:         overview → description, tech groups → keywords (lines 29, 33)
        │
        └────────────▶ all-projects.astro (via orderedProjects) ──▶ card: p.role (line 44), position fixed by WEB_AFTER_ML
```

**Key architectural facts (verified by reading code, not docs):**
1. **Additive fields are backward-compatible.** Both `statistics` and `technologies_grouped` use `?? {}` fallbacks; precedent exists — sibling entry id 16 already ships both fields (lines 737+), proving the template handles them in production today.
2. **Edit is position-stable.** `orderedProjects()` maps explicit ID arrays; content edits cannot reorder. Entry 15 stays 3rd in the Web group (`21 → 19 → 15`).
3. **Single source of truth.** Detail page, listing card, "More projects" related block (line 159: `{r.role}`), and JSON-LD all read the same JSON object — one edit propagates to four surfaces with zero template work.
4. **Static build, zero runtime risk.** No API, no DB, no SSR, no env vars, no secrets. Worst-case failure mode of a bad edit is a build-time JSON parse error or a visually long paragraph — both caught by QA TC-09/TC-10 at P5, not in production silently.

## 3. Analyst's key questions — answered

### Q1: Is a content-only change (no template/order edits) feasible?
**Yes — confirmed FEASIBLE.** Every Must requirement (FR-01…FR-08, FR-10) maps to a field the template already consumes:
- `role`/`timeline` → meta row (line 70–71).
- `overview`/`challenge`/`result` → `sections[]` (lines 56–60), rendered as single `text-xl` paragraphs — hence the SPEC word-count ranges (60–110 / 30–80) are editorial fit constraints, not technical ones.
- `technologies_grouped` → pills section (lines 113–129), proven by id 16 precedent.
- `statistics` (4 items) → `lg:grid-cols-4` cards (line 102) — exactly 4 items fills the row with no wrap; this is why SPEC R-02 caps at 4.
- Gallery item 1 preserved → cover-reuse `<img>` keeps working; no new asset pipeline needed for Must scope.

No template, ordering, routing, or dependency change is required. The only build-phase risk is JSON validity (comma/quote discipline in a 1081-line file) — mitigated by editing only lines 705, 712–714 + inserting two new keys, and verified once at P5 (TC-09).

### Q2: Role title — "Full-Stack AI Engineer" vs alternatives?
**Confirmed: `Full-Stack AI Engineer`.** Decision recorded as ADR-001 below. Summary of the ruling:
- `Frontend Developer` (current) is factually false — the shipped system includes a Git-based CMS backend pipeline and an end-to-end RAG system.
- `Full-Stack Developer` understates the AI/RAG half (BM25 + fuzzy + expansion + rerank + LLM fallback + trilingual guardrails + 9 regression suites), which is ~1 of 3 subsystems.
- `Full-Stack ML Engineer` (used by sibling entry id 17) implies model training/fine-tuning, which did not happen here — reusing it would create a false equivalence between two entries and confuse technical reviewers comparing them.
- `Full-Stack AI Engineer` precisely covers application-level AI systems work (retrieval, guardrails, LLM orchestration) without claiming ML training. Owner retains final veto (ASSUMPTION-001); if vetoed, fallback is `Full-Stack Developer` (one-string change, zero architectural impact).

## 4. Risks & findings (classified)

| ID | Severity | Finding | Mitigation / owner |
|---|---|---|---|
| F-01 | **risk** | JSON edit hazard: `project_details.json` is a 1081-line single file; a misplaced comma/quote breaks the whole static build. | Owner: build lane. Mitigate: minimal diff (one object only), single P5 parse check (TC-09). No action in P1. |
| F-02 | **risk** | Overclaim drift: SPEC statistics (`166`, `~190`, `9`, `1 commit per save`) describe the *product* build, not measured portfolio outcomes; a reader could misread them as performance metrics. | Owner: QA (TC-07 claim-by-claim check vs brief). Template labels mitigate partially ("Key Statistics" is neutral). Accepted. |
| F-03 | **risk** | JSON-LD escaping: overview/tech strings containing `"` or `</script>` would break the schema block (Astro serializes via `schema` prop). | Owner: QA (TC-10). SPEC payload contains no such characters; verify at P5. Accepted. |
| F-04 | **improvement** | Related-block staleness (non-blocking): `[id].astro` line 159 shows `{r.role}` for related projects — after the rename, entry 15 will show the new role on *other* pages' related blocks. This is correct behavior, flagged only so QA is not surprised. | Owner: QA (note in TC-01 scope). No change needed. |
| F-05 | **improvement** | Gallery Could-scope (FR-09) needs real CMS/chatbot screenshots under `public/images/portofolio/web/`; none exist in-repo (ASSUMPTION-004). | Owner: designer lane *if* pursued; default is ship without (SPEC R-03). No P1 action. |

**No blockers.** No `blocker`-severity finding: there is no missing component, no unwired data flow, no required dependency, no template gap, no environment/credential need.

**Deviations from SPEC:** none. P1 accepts SPEC §§1–14 as written, including the normative content payload (§6) and test plan (TC-01…TC-11).

**Over-engineering check:** none proposed, none needed. Explicitly rejected: template edits, new components, new routes, image-pipeline work, CMS/RAG re-implementation, eval reproduction — all correctly Won't-scoped in SPEC §11.

## 5. NFR review (simplest technology that satisfies)

| NFR | Assessment |
|---|---|
| Content integrity (NFR-01) | Process control (TC-07), not architecture. No new tech needed. ✅ |
| Schema validity (NFR-02) | JSON types already proven by id 16 precedent. ✅ |
| Rendering (NFR-03) | Template grids handle 4 stats + 3 tech groups + 1 gallery item within existing breakpoints. ✅ |
| SEO/schema (NFR-04) | Data-driven JSON-LD; constraint is character hygiene only. ✅ |
| Consistency (NFR-05) | Editorial concern; EN-only payload provided verbatim. ✅ |
| Build hygiene (NFR-06) | No code/config/env changes at all; static SSG has nothing to provision. ✅ |

**Operational review:** deploy = existing Astro static build pipeline (unchanged); monitoring/logging/backup — not applicable (static portfolio, no runtime); environments dev/staging/prod — unchanged (single static target); config strategy — none needed (no env vars). Cost: zero incremental.

## 6. ADR (short — single decision this phase)

### ADR-001: Ship entry-15 update as content-only JSON edit; role = "Full-Stack AI Engineer"
- **Date:** 2026-10-25 · **Status:** accepted · **Deciders:** v4-architect (P1 pre-check; owner holds veto on role wording per ASSUMPTION-001)
- **Context:** Entry 15 describes only a frontend landing page, but the shipped VisitBantaragung system spans three surfaces (Next.js landing, Git-based CMS backend pipeline, end-to-end RAG chatbot). Template `[id].astro` already renders all needed sections generically (`?? {}` fallbacks; id 16 precedent). Scope is locked to one JSON object; no template/order edits allowed without architect approval.
- **Decision:** (1) Implement Must scope as a content-only edit to the `id "15"` object in `src/data/project_details.json` (rewrite `role`/`overview`/`challenge`/`result`, add `technologies_grouped` + `statistics`, preserve gallery item 1). (2) Set `role` to exactly `Full-Stack AI Engineer`.
- **Alternatives considered:**
  - *Template edit to add bespoke sections* — Pros: richer layout. Cons: violates scope lock, adds regression surface for zero Must-requirement gain. Rejected: template already covers every Must field.
  - *Role = `Full-Stack Developer`* — Pros: safe, generic. Cons: erases the AI/RAG half that motivates BG-02; undersells vs evidence. Rejected.
  - *Role = `Full-Stack ML Engineer`* — Pros: consistent with id 17. Cons: implies model training that did not occur; creates false equivalence between entries. Rejected.
  - *Role stays `Frontend Developer`* — Pros: zero change. Cons: factually false against the brief. Rejected.
- **Consequences:** Positive — smallest possible diff (one object, ~10 lines), zero build-pipeline risk, role truthfully positions full-stack + AI ownership, single edit propagates to detail/listing/related/JSON-LD. Negative — statistics may be misread as performance metrics (mitigated by TC-07); role wording needs owner sign-off (fallback is a one-string swap). Risks — JSON syntax error breaking static build (mitigated by TC-09 at P5).

## 7. Completeness checklist (per role DoD)
- [x] Repo structure reviewed (`src/data`, `src/pages/project`, `src/lib`, `public/images/portofolio/web`).
- [x] Environment strategy: unchanged (static SSG, no new env).
- [x] Config strategy: none needed (no secrets/vars).
- [x] Logging/monitoring: N/A (static site).
- [x] Deploy plan: existing Astro build; single P5 verification (no per-step builds per anti-stuck).
- [x] Verdict issued, zero open blockers, ADR complete.

---

## Handoff §2.4

```yaml
from: v4-architect
to: v4-designer
phase: P1
type: deliverable
refs:
  - docs/BRIEF.md
  - docs/SPEC.md
  - docs/DECISIONS.md
  - docs/ARCHITECTURE.md
  - src/data/project_details.json (lines 702-723, untouched this phase)
  - src/pages/project/[id].astro (render contract, verified)
  - src/lib/projects.ts (ordering, verified unchanged)
summary: "Verdict FEASIBLE: entry-15 update ships as content-only JSON edit with zero template/order changes; template fallbacks and id-16 precedent prove statistics and tech-group rendering; role confirmed as Full-Stack AI Engineer (ADR-001)."
evidence:
  - D:\Riset Pribadi\LatestPortfolioWebsite\docs\ARCHITECTURE.md
blocking: false
needs:
  - "Designer: only needed if FR-09 gallery expansion pursued (real CMS/chatbot screenshots); otherwise no design input required — pass through to build"
```

---

## 8. P4 Post-Build Review (post-build, after P3 content edit)

- **Phase:** P4 (review, read-only — no build/test/dev-server executed)
- **Author:** v4-architect
- **Date:** 2026-10-25
- **Inputs read:** `docs/SPEC.md` §6 (normative payload) + §8 R-01 + TC-01…TC-11, `docs/ARCHITECTURE.md` §§1–7 (P1, ADR-001, F-01…F-05), `src/data/project_details.json` lines 680–789 (edited object id 15 at lines 702–752 + neighbours id 14 tail / id 16 head), `docs/DECISIONS.md` (ASSUMPTION-001…006)
- **Verdict P4: FEASIBLE** — implementation matches SPEC §6 verbatim; zero Must deviations; no blockers. Blocking = false. Single verification deferred to P5 (QA TC-01…TC-10).

### 8.1 Verbatim check vs SPEC §6 — PASS (6/6)

| # | Field | SPEC §6 source | JSON (id 15) | Result |
|---|---|---|---|---|
| 1 | `role` | `Full-Stack AI Engineer` (§6 line 107, §8 R-01) | line 705 exact | ✅ PASS |
| 2 | `overview` | 91-word text (§6 line 112) | line 712, character-identical incl. em-dashes, `Next.js 16 + React 19`, `Kampung Herbal B2H`, `BDB`, `BIC`, `Leaflet`, `BM25`, `Indonesian, English, and Javanese` | ✅ PASS |
| 3 | `challenge` | 58-word text (§6 line 115) | line 713, character-identical incl. `—` em-dash, `degrades honestly`, `resists jailbreaks` | ✅ PASS |
| 4 | `result` | 61-word text (§6 line 118) | line 714, character-identical incl. `visitbantaragung.com`, `1-commit-per-save`, `~190 knowledge entries`, `9 regression suites` | ✅ PASS |
| 5 | `technologies_grouped` | 3 groups / 15 items (§6 lines 122–126) | lines 721–743: `Platform` 5 items, `Content & CMS` 4 items, `AI / RAG` 6 items, exact strings, no intra-group duplicates, all non-empty | ✅ PASS |
| 6 | `statistics` | 4 key/values (§6 lines 131–136) | lines 715–720: `Commits Shipped: 166`, `Knowledge Entries: ~190 ID-EN`, `Regression Suites: 9`, `CMS Saves: 1 commit per save` — exact keys and values | ✅ PASS |

Word-count ranges (AC-US-02b/03b/04b: 60–110 / 30–80 / 30–80) are satisfied per SPEC-stated counts (91/58/61); independent recount is QA TC-02…TC-04 at P5.

### 8.2 Preserve check — PASS (with one noted proof limitation)

Preserved fields verified present and plausible in lines 703–711: `id "15"`, `name "Visit Bantaragung Tourism Platform"`, `timeline "December 2025 - February 2026"` (unchanged value per FR-07), `status "Done"`, `github_link "https://github.com/aldyardnsyh/VisitBantaragung"`, `demo_link "https://visitbantaragung.com/"`, `card_image_src "/images/portofolio/web/Cover-Visit-Bantaragung.png"`, `category "Web"`. Changed-as-expected fields (`role`, `overview`, `challenge`, `result` rewritten; `statistics` + `technologies_grouped` added) differ from the stale P0-described baseline exactly as SPEC mandates — that is the intended diff, not collateral damage.

Gallery item 1 (lines 744–751): single item, `title "Platform Cover"`, cover-reuse `src`, no items 2+ added — consistent with FR-08 (preserve) and SPEC R-03 (FR-09 Could not pursued, TC-11 N/A). Limitation honestly noted: byte-identical proof against the pre-edit revision requires `git diff`, which is a shell operation forbidden to this lane; structural evidence (single item, cover-reuse src, no new asset paths) shows no tampering. Definitive diff-scope proof is QA TC-08 at P5.

### 8.3 Scope check — PASS

- Neighbour id 14 (Tokopedia QA entry, tail lines 680–701, closes cleanly at 701) and neighbour id 16 (BAS Dashboard, opens at 753) are structurally intact around the edited object (702–752); no cross-object edit visible.
- Within id 15, only SPEC-allowed sub-fields differ; `id/name/category/status/links/card_image_src` untouched; no gallery expansion, no new asset references.
- No template/order edit is observable from this lane's read surface (JSON structure unchanged in shape; ordering is code-driven per P1 §2 finding 2). Binding confirmation that `projects.ts` / `[id].astro` / `all-projects.astro` are unmodified is QA TC-08 (`git diff` file list) at P5.

### 8.4 Risk status (P1 F-01…F-05 → P4)

| ID | P1 severity | P4 status |
|---|---|---|
| F-01 JSON syntax | risk | **Held, not discharged.** Edited region (702–752) is visually well-formed (balanced braces/brackets, comma/quote discipline correct on inspection). Definitive proof = file parse at P5 TC-09. No action for build lane (work complete). |
| F-02 overclaim | risk | **Accepted, carried to QA.** Statistics are verbatim SPEC §6 (descriptive of the product build per ASSUMPTION-003, not measured outcomes). Truthfulness gate = TC-07 claim-by-claim vs brief at P5. |
| F-03 escaping (`"` / `</script>`) | risk | **Clear by inspection.** None of the six touched payloads contains a double-quote or `</script>` sequence (checked lines 705, 712–714, 715–742). Characters present (`. , + / ~ ( ) —`) are JSON-LD-safe. Confirm at TC-10. |
| F-04 related block | improvement | **Noted, no action.** Rename propagates via single-source JSON to related blocks on other pages — correct behaviour; QA briefed so TC-01 scope is not surprised. |
| F-05 gallery Could-scope | improvement | **Closed as not-pursued.** Single gallery item retained; no placeholder/stock imagery introduced. TC-11 N/A. |

Minor observation (non-finding): `technologies_grouped["AI / RAG"]` contains `Guardrails ID/EN/Jawa` with endonym `Jawa` while NFR-05 asks English-only — this string is verbatim SPEC §6 normative payload, therefore accepted as specified; QA to confirm it reads as a language tag, not a language leak.

### 8.5 Deviations from SPEC (Must list)

**None.** Zero Must deviations, zero Should deviations (`statistics` shipped, 4 items per R-02), Could explicitly declined per R-03. No over-engineering introduced (no template/component/route/image-pipeline work). ADR-001 stands without amendment; no new ADR required (no new decision taken in P3 beyond executing the payload).

### 8.6 P4 exit

- [x] Verbatim check 6/6 PASS against SPEC §6
- [x] Preserve check PASS (id/name/timeline/status/links/card_image_src/category + gallery item 1 structurally intact)
- [x] Scope check PASS (neighbours intact, no observable cross-object or template/order change)
- [x] F-01…F-04 statused; F-05 closed; no new risks raised
- [x] Zero open blockers; verdict P4 **FEASIBLE**, blocking = false
- [ ] Definitive `git diff` scope + JSON parse + render/SEO proof → P5 QA (TC-01…TC-10), the single verification pass per anti-stuck rules

---

## Handoff §2.4 (P4 → P5)

```yaml
from: v4-architect
to: v4-qa
phase: P4
type: approval
refs:
  - docs/SPEC.md
  - docs/ARCHITECTURE.md
  - docs/DECISIONS.md
  - src/data/project_details.json (lines 702-752, P3 edit under review)
summary: "P4 review PASS: id-15 payload verbatim vs SPEC §6 (6/6), preserved fields and neighbours intact, F-03 clear by inspection, zero Must deviations; verdict FEASIBLE with single P5 verification pending."
evidence:
  - D:\Riset Pribadi\LatestPortfolioWebsite\docs\ARCHITECTURE.md
blocking: false
needs:
  - "P5 verify TC-01…TC-10 (role/overview/challenge/result/statistics/tech-groups render, TC-07 claim check, TC-08 git-diff scope, TC-09 JSON parse, TC-10 mobile/desktop + JSON-LD); TC-11 N/A"
```

---

## 9. P4 Review — Gallery Change (P3b)

- **Phase:** P4 review pasca-build, mencakup P3 teks + P3b galeri (read-only — tanpa build/test/dev-server)
- **Author:** v4-architect
- **Date:** 2026-10-25
- **Inputs read:** `docs/SPEC.md` §6 + §8 + TC-01…TC-11, `docs/ARCHITECTURE.md` §§1–8 (P1 + P4 P3, dibaca agar tidak duplikat), `src/data/project_details.json` lines 702–764 (objek id 15 lines 702–764 + kepala id 16 sebagai pembatas), `docs/DECISIONS.md` (ASSUMPTION-004 SUPERSEDED), `src/pages/project/[id].astro` lines 83–146 (hero + gallery), glob `public/images/portofolio/web/VisitBantaragung-*.jpeg`
- **Konteks perubahan:** Change request owner menaikkan FR-09 dari Could menjadi Must (ASSUMPTION-004 SUPERSEDED, P3b 2026-10-25): galeri 3 screenshot fitur asli dari README repo VisitBantaragung, `card_image_src` = Home.jpeg, cover lama dilepas dari JSON (file fisik dipertahankan, reversible). Section §8 (P4 P3) tetap berlaku untuk teks; section ini hanya menilai delta P3b + verifikasi ulang teks.
- **Verdict P4 final: FEASIBLE** — teks tetap verbatim SPEC §6, galeri 3 item valid dan terdukung brief, scope bersih, nol deviasi Must. Blocking = false.

### 9.1 Verifikasi ulang verbatim teks vs SPEC §6 — PASS (6/6, tidak berubah oleh P3b)

| # | Field | SPEC §6 | JSON id 15 | Hasil |
|---|---|---|---|---|
| 1 | `role` | `Full-Stack AI Engineer` (§6 + §8 R-01) | line 705 exact | ✅ PASS |
| 2 | `overview` | 91 kata (§6) | line 712, karakter-identik (em-dash, `Next.js 16 + React 19`, `Kampung Herbal B2H`, `BDB`, `BIC`, `Leaflet`, `BM25`, `Indonesian, English, and Javanese`) | ✅ PASS |
| 3 | `challenge` | 58 kata (§6) | line 713, karakter-identik (`degrades honestly`, `resists jailbreaks`, em-dash) | ✅ PASS |
| 4 | `result` | 61 kata (§6) | line 714, karakter-identik (`visitbantaragung.com`, `1-commit-per-save`, `~190 knowledge entries`, `9 regression suites`) | ✅ PASS |
| 5 | `technologies_grouped` | 3 grup / 15 item (§6) | lines 721–743: `Platform` 5, `Content & CMS` 4, `AI / RAG` 6, string exact, tanpa duplikat intra-grup | ✅ PASS |
| 6 | `statistics` | 4 key/value (§6) | lines 715–720 exact (`166`, `~190 ID-EN`, `9`, `1 commit per save`) | ✅ PASS |

Rentang word-count (60–110 / 30–80 / 30–80) terpenuhi per count SPEC (91/58/61); recount independen = QA TC-02…TC-04 di P5.

### 9.2 Galeri P3b — PASS (3/3 + aset ada)

| Item | `title` / `src` (JSON) | Aset di disk | Hasil |
|---|---|---|---|
| 1 | `Homepage` → `/images/portofolio/web/VisitBantaragung-Home.jpeg` (line 749) | `VisitBantaragung-Home.jpeg` ✅ ada (glob) | ✅ PASS |
| 2 | `Bantaragung Guide Chatbot` → `/images/portofolio/web/VisitBantaragung-Chatbot-Guide.jpeg` (line 755) | `VisitBantaragung-Chatbot-Guide.jpeg` ✅ ada (glob) | ✅ PASS |
| 3 | `CMS Content Collections` → `/images/portofolio/web/VisitBantaragung-CMS-Collections.jpeg` (line 761) | `VisitBantaragung-CMS-Collections.jpeg` ✅ ada (glob) | ✅ PASS |

- Tepat 3 item (`id` 1,2,3 berurutan, tidak ada item 4+).
- `card_image_src` (line 710) = `/images/portofolio/web/VisitBantaragung-Home.jpeg` = Home.jpeg ✅ sesuai change request.
- Cover lama (`Cover-Visit-Bantaragung.png`) sudah dilepas dari JSON: nol referensi di objek id 15 (baik `card_image_src` maupun `gallery[].src`) ✅. File fisik dipertahankan di luar JSON sehingga reversible (per DECISIONS).
- Kesesuaian pilihan aset vs DECISIONS: item 2 = varian chatbot-answer (grounded + sitasi), item 3 = varian cms-berita (koleksi konten) — sesuai catatan seleksi ASSUMPTION-004 (menolak chatbot-open dan cms-dashboard berbadge "Gagal") ✅.
- Render: galeri memakai `md:grid-cols-2` (lines 131–146) sehingga 3 item menghasilkan layout 2+1 — **dinyatakan dapat diterima** (tidak ada baris menggantung yang merusak; figure ketiga tampil full-kiri satu kolom, konsisten dengan pola gallery 2-item di sibling id 16/17/18).

### 9.3 Scope — PASS

- Objek id 15 (lines 702–764) tertutup rapi (`},` di 764); kepala id 16 (lines 765+) utuh — tidak ada edit lintas-objek yang terlihat.
- Di dalam id 15, delta vs baseline P4-§8 hanyalah yang diotorisasi change request: `card_image_src` Cover→Home, `gallery` 1→3 item dengan judul/deskripsi/src baru. Teks + `statistics` + `technologies_grouped` + `id/name/timeline/status/links/category` tidak bergeser di luar itu.
- Template/order tak tersentuh pada permukaan baca lane ini (bentuk JSON tidak berubah secara struktural; ordering code-driven per §2). Konfirmasi mengikat via `git diff` file-list = QA TC-08 di P5.

### 9.4 Risiko — status final

| ID | Status P3b |
|---|---|
| F-01 syntax JSON | **Diterima, teralihkan ke bukti P3b.** Region edit (702–764) tampak well-formed (brace/bracket seimbang, disiplin koma/quote benar). Parse check P3b diterima sebagai bukti; konfirmasi definitif tetap di P5 TC-09. |
| F-03 escaping | **Clear by inspection.** Seluruh payload tersentuh (role/overview/challenge/result/statistics/tech/groups + 3 judul/deskripsi galeri baru) tidak mengandung `"` maupun `</script>`. Karakter hadir (`. , + / ~ ( ) —`) aman untuk JSON-LD. Konfirmasi di TC-10. |
| F-02 overclaim (teks + caption galeri baru) | **Diterima, diteruskan ke QA TC-07.** Caption item 2 "refusing to invent what is not in village records" didukung SPEC §9 (honest degradation: "says it does not know when retrieval finds nothing… never an invented address"). Caption item 3 "managed without a database" didukung SPEC §6 (overview "with zero database", challenge "with no database to operate") dan arsitektur Git-based CMS. Bukan klaim baru — parafrase dari payload normatif. |
| Hero 16/9 object-cover vs screenshot landscape | **Dapat diterima, dinyatakan.** Hero (`aspect-[16/9] object-cover`, lines 85–86) dan tile galeri (`aspect-video object-cover`, line 137) akan meng-crop tepi screenshot landscape. Ini perilaku template yang sudah ada (berlaku untuk semua entry), bukan regresi P3b; komposisi screenshot fitur tetap terbaca setelah crop. |
| TC-11 (galeri kondisional) | **Kini APPLICABLE** (FR-09 naik ke Must). Cakupan P5: ketiga gambar load dari path publik, tanpa 404. |

### 9.5 Deviasi vs SPEC (daftar Must)

**Nol deviasi Must terbuka.** Satu-satunya penyimpangan dari SPEC v1.0 adalah yang diotorisasi change request owner dan dicatat di DECISIONS:
- (D-01, approved) FR-09 Could→Must; galeri 1→3 item + `card_image_src` Cover→Home + cover lama dilepas dari JSON. Bukan pelanggaran — melainkan implementasi change request tercatat (ASSUMPTION-004 SUPERSEDED).
- Di luar D-01: nol deviasi Must, nol deviasi Should (`statistics` tetap 4 item per R-02). Tidak ada over-engineering (tanpa edit template/komponen/route/pipeline gambar).

### 9.6 P4 exit (final)

- [x] Verbatim teks 6/6 PASS vs SPEC §6
- [x] Galeri tepat 3 item, src menunjuk file yang ada, card_image_src = Home.jpeg, cover lama dilepas dari JSON
- [x] Scope PASS (hanya objek id 15; template/order tak tersentuh pada permukaan baca)
- [x] Risiko F-01/F-02/F-03 statused; hero-crop dan layout 2+1 dinyatakan dapat diterima
- [x] Verdict P4 final **FEASIBLE**, nol blocker terbuka, ADR-001 berdiri tanpa amandemen (tidak ada keputusan arsitektur baru di P3b)
- [ ] Verifikasi tunggal P5: QA TC-01…TC-10 + cek 3 gambar load (TC-11 kini applicable); Security cek exposure screenshot CMS publik

---

## Handoff §2.4 (P4 → P5, final — teks P3 + galeri P3b)

```yaml
from: v4-architect
to: [v4-qa, v4-security]
phase: P4
type: approval
refs:
  - docs/SPEC.md
  - docs/ARCHITECTURE.md
  - docs/DECISIONS.md
  - src/data/project_details.json (lines 702-764, P3+P3b under review)
  - src/pages/project/[id].astro (lines 83-87 hero card_image_src, lines 131-146 gallery md:grid-cols-2)
  - public/images/portofolio/web/VisitBantaragung-Home.jpeg
  - public/images/portofolio/web/VisitBantaragung-Chatbot-Guide.jpeg
  - public/images/portofolio/web/VisitBantaragung-CMS-Collections.jpeg
summary: "P4 final PASS: teks id-15 verbatim SPEC §6 (6/6), galeri tepat 3 item dengan aset terkonfirmasi ada, card_image_src Home.jpeg, scope bersih; verdict FEASIBLE tanpa deviasi Must."
evidence:
  - D:\Riset Pribadi\LatestPortfolioWebsite\docs\ARCHITECTURE.md
blocking: false
needs:
  - "P5 QA TC-01…TC-10 + cek 3 gambar load (TC-11 kini applicable); Security cek exposure — screenshot CMS publik dari README, pastikan tak ada secret/PII terlihat"
```
