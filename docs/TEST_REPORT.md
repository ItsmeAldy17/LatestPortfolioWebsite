# TEST REPORT — Update Project 15 Visit Bantaragung (P5 Verification)

- **Phase:** P5 (satu-satunya verifikasi penuh, per aturan anti-stuck — satu pass)
- **Author:** v4-qa
- **Date:** 2026-10-26
- **Inputs:** `docs/BRIEF.md`, `docs/SPEC.md` (§6 + TC-01…TC-11), `docs/ARCHITECTURE.md` (§9 P3b final),
  `src/data/project_details.json` (id 15, lines 702–764), `[id].astro`, `all-projects.astro`, `src/lib/projects.ts`
- **Verdict: SEMUA TC LULUS (11/11, 100%). blocking = false. Nol bug ticket.**

---

## 1. Ringkasan hasil per test case

| TC | Cakupan (traces to) | Hasil | Bukti |
|----|---------------------|-------|-------|
| TC-01 | Role exact `Full-Stack AI Engineer` (US-01) | ✅ PASS | JSON `role` exact; string ada di `dist/project/15/index.html` DAN `dist/all-projects/index.html`. Kontrak render: `[id].astro:70` dan `all-projects.astro:44` membaca `p.role` dari objek JSON yang sama (single source; F-04: propagasi ke related-block adalah perilaku benar) |
| TC-02 | Overview: keyword landing+CMS+RAG+Next.js+React, 60–110 kata (US-02) | ✅ PASS | 88 kata (dalam rentang); 5/5 keyword hadir. Catatan: hitungan independen 88 vs 91 yang tertulis di SPEC §6 — perbedaan metode hitung token (`16 + React`, `1-commit`), keduanya dalam rentang AC, bukan bug |
| TC-03 | Challenge: ≥2 tema hard-part, 30–80 kata (US-03) | ✅ PASS | 54 kata; 3/3 tema hadir (DB-less CMS, grounded/no-hallucination, fast unified site) |
| TC-04 | Result: domain + commit-per-save + degradasi jujur, 30–80 kata (US-04) | ✅ PASS | 47 kata; `visitbantaragung.com`, `1-commit-per-save`, `deterministic` hadir |
| TC-05 | 3 grup tech, item exact, tipe JSON valid (US-05) | ✅ PASS | `Platform` 5 + `Content & CMS` 4 + `AI / RAG` 6 item, karakter-identik vs SPEC §6; object-of-string-arrays, non-empty, tanpa duplikat intra-grup |
| TC-06 | Statistics key/value exact + defensible (US-06) | ✅ PASS | Exact: `Commits Shipped=166`, `Knowledge Entries=~190 ID-EN`, `Regression Suites=9`, `CMS Saves=1 commit per save` |
| TC-07 | Claim-by-claim vs BRIEF (NFR-01) | ✅ PASS | Nol kontradiksi vs brief; 3 gap "brief-diam" tercatat di §2 (semua dari sumber kebenaran README/live yang disahkan brief line 12) |
| TC-08 | Diff scope hanya id 15; ordering stabil (US-07) | ✅ PASS | `git diff --stat`: 1 file modified (`project_details.json`, +49/−8); untracked = `docs/` kerja + 3 JPEG baru. `projects.ts`/`[id].astro`/`all-projects.astro` tak tersentuh. Hunk diff hanya field id 15 yang diotorisasi |
| TC-09 | JSON parse + tipe schema (NFR-02) | ✅ PASS | `json.load` OK, 22 entri; `statistics` object, `technologies_grouped` object-of-arrays, `gallery` array |
| TC-10 | Build hijau + render + JSON-LD (NFR-03/04) | ✅ PASS | `npm run build` sukses (34 pages, 11.52s). `dist/project/15` + `dist/all-projects` ada dan mengandung string kunci. JSON-LD `@graph` 5 node valid; `CreativeWork.description` = overview, `keywords` memuat `BM25 Retrieval`. Nol `"` / `</script>` di payload (F-03 clear) |
| TC-11 | Galeri: 3 gambar load, screenshot asli (FR-09, kini Must) | ✅ PASS | 3 file ada, ukuran >0 (1.04MB / 844KB / 44KB). Verifikasi visual §3: Home = hero beranda; Chatbot = jawaban tiket + sitasi + entity card; CMS = tabel koleksi berita. Tidak ada yang rusak/blank |

**Pass rate: 11/11 (100%). Must 100% lulus. Nol bug Critical/High terbuka (nol ticket sama sekali).**

---

## 2. TC-07 claim-by-claim (setiap fakta vs BRIEF)

| # | Klaim di entri | Status vs brief |
|---|---|---|
| 1 | 166 commits | ✅ brief line 7 |
| 2 | Stack Next.js 16 / React 19 / TS / Tailwind 4 | ✅ brief line 7 |
| 3 | Git-based CMS, per-save = 1 commit, auto rebuild, tanpa database | ✅ brief line 8 |
| 4 | RAG: BM25 + fuzzy entity + query expansion ~190 entri, reranker | ✅ brief lines 8–9 |
| 5 | Fallback LLM chain + health tracking | ✅ brief line 9 |
| 6 | Guardrail anti-halusinasi & anti-jailbreak ID/EN/Jawa | ✅ brief lines 9–10 |
| 7 | Degradasi deterministik jujur | ✅ brief line 10 |
| 8 | 9 suite regresi tanpa kuota LLM | ✅ brief line 11 |
| 9 | Fitur B2H (Kampung Herbal), BDB (branding/homestay+UMKM→MSMEs), BIC info center, Leaflet map | ✅ brief AC-US-02c (MSMEs/UMKM dan Javanese/Jawa adalah terjemahan nama yang sah) |
| 10 | Caption galeri: "refusing to invent…" / "managed without a database" | ✅ parafrase SPEC §6+§9, bukan klaim baru |
| G-1 | Nama tim "KKN-PPM UGM Simfoni Sindangwangi", "Majalengka" | ⚠️ GAP — brief-diam, tetapi dari README/live (sumber kebenaran sah per brief line 12). Bukan kontradiksi → bukan bug |
| G-2 | Detail "schema validation, browser-compressed media, AI news sync stage gate, chunking overlap, dedup reranker" | ⚠️ GAP — brief-diam, didukung SPEC §9 + R-01, dari README. Bukan bug |
| G-3 | "Desa Wisata" di teks Inggris; `Guardrails ID/EN/Jawa` | ✅ DITERIMA — proper noun resmi + language tag (konfirmasi P4 F-03/NFR-05) |

---

## 3. TC-11 verifikasi visual ketiga gambar (vision-capable read)

- **VisitBantaragung-Home.jpeg** (1.044.736 B): hero beranda — navbar (Beranda/Berita/Wisata/Kampung Herbal/Peta Digital/Galeri/Tentang + "Pesan WA"), headline "Selamat Datang di Desa Wisata Bantaragung", CTA Jelajahi Wisata/Berita Terbaru, strip statistik kunjungan, tombol "Tanya Bantaragung". ✅ bukan blank/rusak
- **VisitBantaragung-Chatbot-Guide.jpeg** (843.641 B): panel "Bantaragung Guide" menjawab "Berapa tiket Curug Cipeuteuy?" dengan harga grounded + sitasi [1] + entity card (Curug Cipeuteuy, Glamping) + CTA WhatsApp. ✅ sesuai caption "grounded prices, citations"
- **VisitBantaragung-CMS-Collections.jpeg** (44.105 B): dasbor konten — sidebar koleksi (Berita, Artikel KKN, Destinasi Wisata, Katalog Herbal, Homestay, UMKM, Lokasi Peta, Pustaka Gambar, Pengaturan) + tabel Berita (113 entri, kolom judul/slug/tanggal). ✅ sesuai caption "Git-based content dashboard"
- Observasi non-QA (diteruskan ke security, bukan ticket): screenshot CMS berbahasa Indonesia dan memuat label "admin/Administrator"; screenshot chatbot memuat nomor WhatsApp bisnis publik (+62 813-2442-7327). Tidak terlihat secret/PII dari sisi QA.

---

## 4. TC-08 detail diff + preserve check

- `git diff --stat`: `src/data/project_details.json | 57 ++... 49 insertions, 8 deletions` — satu-satunya file modified.
- `git status --short`: `M src/data/project_details.json`, `?? docs/`, `??` 3 JPEG baru — tepat sesuai ekspektasi (JSON + 3 gambar + docs kerja).
- Hunk diff id 15: `role` Frontend Developer → Full-Stack AI Engineer; `card_image_src` Cover → Home.jpeg; `overview/challenge/result` stale → payload SPEC §6; `statistics` + `technologies_grouped` ditambahkan; galeri 1 → 3 item.
- Preserve: `id`, `name`, `category=Web`, `status`, `github_link`, `demo_link`, `timeline=December 2025 - February 2026` tidak berubah.
- **Perubahan galeri item 1 + card_image_src adalah change request owner yang sah** (FR-09 Could→Must, ASSUMPTION-004 SUPERSEDED, ARCHITECTURE §9) — bukan collateral damage. File cover lama masih ada di disk (reversible).
- Ordering: `WEB_AFTER_ML = ['21','19','15']` tak tersentuh → posisi entry 15 stabil (ke-3 grup Web).

---

## 5. Bug ticket

**Nol ticket.** Tidak ada bug Critical/High/Medium/Low yang reproducible. Tidak ada duplikat untuk dicek (tidak ada tracker ticket di repo).

---

## 6. Batasan verifikasi (dinyatakan jujur)

1. Tanpa dev server / browser manual / screenshot render — sesuai brief QA ini: untuk static content change, verifikasi file + build output + baca gambar dinilai cukup.
2. Cek visual mobile/desktop halaman render tidak dilakukan di browser; substitusinya: kontrak template dibaca langsung (grid `lg:grid-cols-4` terisi tepat 4 stat; 3 grup tech = pola pills; galeri 3 item pada `md:grid-cols-2` menghasilkan layout 2+1 yang dinyatakan dapat diterima di P4) + build sukses tanpa error.
3. Perbedaan hitungan kata independen vs SPEC §6 (overview 88 vs 91, challenge 54 vs 58, result 47 vs 61) — semua dalam rentang AC; metode split-whitespace QA didokumentasikan di §1.

---

## Handoff §2.4

```yaml
from: v4-qa
to: agentic-v4
phase: P5
type: deliverable
refs:
  - docs/TEST_REPORT.md
  - docs/SPEC.md
  - docs/ARCHITECTURE.md
  - src/data/project_details.json (lines 702-764)
  - dist/project/15/index.html
  - dist/all-projects/index.html
  - public/images/portofolio/web/VisitBantaragung-Home.jpeg
  - public/images/portofolio/web/VisitBantaragung-Chatbot-Guide.jpeg
  - public/images/portofolio/web/VisitBantaragung-CMS-Collections.jpeg
summary: "P5 QA 11/11 PASS (100%): konten id-15 verbatim dan truthful vs brief, diff scope bersih satu file, build hijau 34 pages, JSON-LD valid, 3 screenshot galeri terverifikasi visual; nol bug ticket."
evidence:
  - D:\Riset Pribadi\LatestPortfolioWebsite\docs\TEST_REPORT.md
blocking: false
needs:
  - "Release gate: bersih untuk rilis, tidak ada fix owner yang dibutuhkan"
```

---

## P6 Re-verify (em dash fix)

Scope: re-verify antislop R-02 fix on entry id `15` (`src/data/project_details.json`) plus regression check. No dev server used. Build run once.

### Hasil per kriteria

| # | Kriteria | Target | Aktual | Status |
|---|---|---|---|---|
| 1 | Em dash U+2014 di `project_details.json` | 0 | 0 | PASS |
| 1b | En dash U+2013 di `project_details.json` | catat | 0 | PASS |
| 2 | JSON parse + jumlah entri | valid, 22 | valid, 22 | PASS |
| 3 | Word count `challenge` | 30-80 | 55 | PASS |
| 3b | Word count `overview` | 60-110 | 88 | PASS |
| 3c | Word count `result` | 30-80 | 47 | PASS |
| 4 | Field inti id/name/timeline/status/github_link/demo_link/card_image_src | sama | sama, keyset identik dengan entri lain (15 key) | PASS |
| 4b | `gallery` | 3 item | 3 item, id [1,2,3] | PASS |
| 4c | `statistics` | 4 item | 4 key object | PASS |
| 4d | `technologies_grouped` | 3 grup | 3 key object (Platform, Content & CMS, AI / RAG) | PASS |
| 5 | `npm run build` | exit 0 | exit 0, 34 pages, 11.91s | PASS |
| 5b | Em dash di `dist/project/15/index.html` | 0 | 1 (global JSON-LD, lihat temuan) | PASS (konten) |
| 5c | Em dash di `dist/all-projects/index.html` | 0 | 1 (global JSON-LD, lihat temuan) | PASS (konten) |
| 6 | `Full-Stack AI Engineer` di dist | ada | ada | PASS |
| 6b | `VisitBantaragung-Chatbot-Guide.jpeg` di dist | ada | ada | PASS |
| 6c | Teks challenge baru di dist | ada | ada, verbatim `... into one fast site ...` | PASS |

### Evidence

- Scan em dash: `[System.IO.File]::ReadAllText` + hitung `[char]0x2014`. `project_details.json` len 57085, em dash 0, en dash 0. Versi committed (`git show HEAD:`) juga 0, jadi fix tidak masuk regresi dan diff hanya menambah kualitas.
- `git status --porcelain` menunjukkan hanya `src/data/project_details.json` yang modified (49 tambah, 8 hapus). File gambar galeri tetap untracked seperti sebelumnya.
- Node parse: `entries=22`, `same_keyset=true` vs entri id 1.
- Build log: `EXIT=0 ELAPSED=95.1s`, `[build] 34 page(s) built`, `[build] Complete!`.
- Substring kunci di `dist/project/15/index.html`: `Full-Stack AI Engineer => True`, `VisitBantaragung-Chatbot-Guide.jpeg => True`, `VisitBantaragung-Home.jpeg => True`, `VisitBantaragung-CMS-Collections.jpeg => True`, `into one fast site => True`.
- Catatan string kunci: brief menulis `in one fast site`, sedangkan teks asli adalah `into one fast site`. Pengecekan literal `in one fast site` bernilai False karena kata dasarnya `into`, bukan `in`. Kalimat lengkap challenge terverifikasi ada verbatim di dist, jadi ini salah tulis di brief, bukan defect.

### Temuan terpisah (di luar scope fix, bukan regresi)

1 em dash per halaman berasal dari metadata JSON-LD global, bukan dari entri 15:
- `src/lib/schema.ts:42` menghasilkan `"name":"Aldy Ardiansyah [U+2014] Portfolio"`.
- Terverifikasi via konteks byte: `...{"@id":"...#website",...,"name":"Aldy Ardiansyah ` + U+2014 + ` Portfolio",...`.
- File ini tidak disentuh oleh fix (bukan bagian `git status`), dan em dash sudah ada di commit sebelumnya. Jadi tidak memblokir rilis entri 15.
- Sebaran em dash di `src/` yang belum di-fix: `src/config/site.ts` 4 (semua komentar, tidak render), `src/data/highlights.ts` 10, `src/lib/schema.ts` 3 (2 render ke JSON-LD), `src/pages/highlights/index.astro` 1. Total 18. Hanya 1 yang muncul di HTML entri 15 dan all-projects, yaitu dari `schema.ts:42`.

Rekomendasi: buka ticket antislop R-02 terpisah untuk `schema.ts`, `highlights.ts`, dan `highlights/index.astro`. Jangan campur dengan fix entri 15 yang sudah hijau.

### Verdict

PASS. Semua exit criteria P6 terpenuhi tanpa regresi. `blocking: false`.

```yaml
from: qa
to: agentic-v4
phase: P6
type: deliverable
refs:
  - docs/TEST_REPORT.md
  - src/data/project_details.json
  - dist/project/15/index.html
  - dist/all-projects/index.html
  - src/lib/schema.ts
summary: "Fix em dash entri id 15 terverifikasi bersih: 0 em dash dan 0 en dash di project_details.json, JSON valid 22 entri, word count challenge 55 / overview 88 / result 47 semua dalam rentang, build exit 0 dengan 34 pages. Tanpa regresi: seluruh field inti, galeri 3 item, statistics 4 key, technologies_grouped 3 grup tetap utuh dan keyset identik dengan entri lain. Sisa 1 em dash per halaman berasal dari JSON-LD global src/lib/schema.ts:42 yang tidak dimodifikasi fix ini, dicatat sebagai temuan terpisah dan tidak memblokir."
evidence:
  - D:\Riset Pribadi\LatestPortfolioWebsite\docs\TEST_REPORT.md (section P6 Re-verify)
  - project_details.json: em dash 0, en dash 0, 22 entri
  - build log: EXIT=0, 34 pages
blocking: false
needs:
  - "Ticket antislop R-02 terpisah untuk src/lib/schema.ts, src/data/highlights.ts, src/pages/highlights/index.astro (di luar scope entri 15)"
  - "Lanjut ke release gate untuk entri 15"
```

## P6 Final Gate (em dash = 0)

Tanggal: 2026-10-29. Verifikasi bahwa seluruh U+2014 sudah hilang dari `src/` dan dari HTML yang dirender, tanpa regresi konten. Build dijalankan sekali lewat `safe_exec.py`, tanpa dev server.

### Ringkasan hasil

| # | Kriteria | Target | Hasil | Status |
|---|---|---|---|---|
| 1 | `npm run build` via safe_exec (timeout 300s) | exit 0 | EXIT=0, 34 page, 14.8s | PASS |
| 2 | Em dash di `dist/**/*.html` | 0 file, 0 char | 34 file dipindai, 0 char, 0 file | PASS |
| 3 | Em dash di `src/` (.ts/.astro/.json) | 0 | 37 file dipindai, 0 char | PASS |
| 4 | Judul halaman pakai titik dua / pipe | 4/4 | 4/4 pakai pipe, 0 em dash | PASS |
| 5 | Konten entri 15 tidak regresi | baseline | 55 kata, frasa kunci ada, galeri 3, statistics 4, tech group 3 | PASS |
| 6 | Highlights line 46/80/197 terbaca wajar | 3/3 | 3/3 utuh setelah em dash jadi koma/titik | PASS |

### Evidence build

- `RUN=npm run build`, `EXIT=0`, `ELAPSED=14.8s`.
- `[build] 34 page(s) built in 7.49s`, `[build] Complete!`.
- `LOG=C:\Users\aldya\AppData\Local\Temp\opencode-safe-exec\20261029-083301-npm-run-build.log`.

### Evidence scan em dash (U+2014)

Metode: enumerasi file, baca penuh dengan `[System.IO.File]::ReadAllText`, hitung regex `[char]0x2014`. Tidak memakai `Select-String` per baris agar karakter di atribut/JSON inline tetap terhitung.

| Scope | File dipindai | Total U+2014 | File terdampak |
|---|---|---|---|
| `dist/` rekursif, `*.html` | 34 | 0 | 0 |
| `src/` rekursif, `.ts/.astro/.json` | 37 | 0 | 0 |

Tidak ada sisa em dash, jadi tabel per file kosong.

### Judul halaman (dibaca dari `dist`)

| File | `<title>` |
|---|---|
| `dist/index.html` | Aldy Ardiansyah \| Fullstack Machine Learning Engineer |
| `dist/project/15/index.html` | Visit Bantaragung Tourism Platform \| Aldy Ardiansyah |
| `dist/all-projects/index.html` | All Projects \| Aldy Ardiansyah |
| `dist/highlights/index.html` | Highlights &amp; Press \| Aldy Ardiansyah (render: Highlights & Press) |

### Regression content entri 15

| Field | Baseline | Hasil | Status |
|---|---|---|---|
| challenge word count | 55 | 55 | PASS |
| frasa `resists jailbreaks` | ada | ada (src dan dist) | PASS |
| gallery | 3 item | 3 item, 3 nama file unik | PASS |
| statistics | 4 key | Commits Shipped, Knowledge Entries, Regression Suites, CMS Saves | PASS |
| technologies_grouped | 3 grup | Platform, Content & CMS, AI / RAG | PASS |
| string `into one fast site` | ada | ada di dist | PASS |

Catatan: hitungan `P15_GALLERY_IMGS=8` adalah kemunculan nama file di atribut `src`/`srcset`, bukan jumlah item. Jumlah item sebenarnya 3, sesuai array `gallery` di JSON dan 3 nama file unik.

### Highlights copy (setelah em dash jadi koma/titik)

- L46: `Team "Utusan Sultan X", consisting of ... secured 2nd place at Hackathon elevAIte Indonesia 2025, a national-scale competition ...` utuh, dan frasa kuncinya terverifikasi juga di `dist/highlights/index.html`.
- L80: `The Department of Electrical and Information Engineering (TEDI) ... developed computer vision technology to analyze drilling cuttings in the oil and gas industry ...` utuh.
- L197: `A UGM team ... won 2nd place and the People's Choice Award in the university category at Samsung Innovation Campus (SIC) Batch 5 2023/2024 ...` utuh. Apostrof memakai escape `\u2019`, bukan em dash.
- `dist/highlights/index.html`: 0 em dash, memuat `Hackathon elevAIte Indonesia 2025`, `PT Parama Data Unit`, `MotoRescue`.

### Verdict

PASS. 0 em dash di seluruh output yang dirender dan di `src/`, judul halaman konsisten memakai pipe, tidak ada regresi konten. `blocking: false`.

```yaml
from: qa
to: agentic-v4
phase: P6
type: deliverable
refs:
  - docs/TEST_REPORT.md
  - src/data/project_details.json
  - src/data/highlights.ts
  - dist/index.html
  - dist/project/15/index.html
  - dist/all-projects/index.html
  - dist/highlights/index.html
summary: "Build bersih sekali jalan (EXIT=0, 34 page, 14.8s) dan scan penuh menemukan 0 em dash di 34 file HTML dist maupun 37 file src (.ts/.astro/.json). Keempat judul halaman memakai pipe tanpa em dash, dan entri 15 tidak regresi: challenge tetap 55 kata dengan frasa resists jailbreaks, galeri 3 item, statistics 4 key, technologies_grouped 3 grup, serta teks highlights line 46/80/197 utuh dan terbaca wajar. Final gate hijau, blocking false."
evidence:
  - "build: EXIT=0, 34 page(s) built, ELAPSED=14.8s, LOG=.../20261029-083301-npm-run-build.log"
  - "dist scan: HTML_FILES=34, TOTAL_EMDASH=0, AFFECTED_FILES=0"
  - "src scan: SRC_FILES=37, SRC_EMDASH=0"
  - "titles: index | project/15 | all-projects | highlights, semua pipe, 0 em dash"
  - "entry 15: challenge 55 kata, resists jailbreaks=true, gallery=3, statistics=4, tech_groups=3"
blocking: false
needs:
  - "Lanjut ke P7 release gate"
```