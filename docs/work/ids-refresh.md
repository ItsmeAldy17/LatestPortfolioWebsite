# IDS Refresh Diff: Entry 22 vs README (master, 2026-10-30)

Source README: https://github.com/aldyardnsyh/IntelligenceDocumentSystem (branch master; main returns 404)
Entry: id 22 Intelligent Document Assistant (RAG) in src/data/project_details.json

## Verdict: CHANGED, 3 fields need update

Gallery: KEEP 6 menus. README shows Login plus Beranda, Chat, Dokumen, Analitik, Pengaturan, Tentang. Login is an auth gate, not a product menu, so the 6 entry gallery items still map 1 to 1.

## Field diffs

### 1. result: backend test count 434 vs 534
Old: "434 backend tests at 83% coverage, 46 Playwright scenarios, 21 end-to-end checks"
New: "534 backend tests at 83% coverage, 59 Playwright scenarios, 21 end-to-end checks"
README quote: badge "pytest-534_passed", "Playwright-59_specs", and table "Test backend | python -m pytest | 434 test, coverage 83%" is stale vs badge; badge plus "59 skenario Playwright" in Uji browser otomatis section is newer. Also "Kualitas dan pengujian" table still says 434 test and 46 skenario, so README itself is internally inconsistent, but the badge and prose (534 / 59) are the latest claimed numbers.
Action: update result to 534 tests and 59 Playwright scenarios if backend confirms.

### 2. statistics.Backend tests: 434 vs 534
Old: "434 tests, 83% coverage"
New: "534 tests, 83% coverage"
README quote: "pytest-534_passed" badge and "python -m pytest # 534 test, coverage gate 70%"
Action: change to "534 tests, 83% coverage".

### 3. statistics.Browser scenarios: 46 vs 59
Old: "46 Playwright specs"
New: "59 Playwright specs"
README quote: "Playwright-59_specs" badge and "59 skenario Playwright yang mencakup login, sesi yang bertahan melewati perpindahan halaman, unggah tiga format berkas..."
Note: README structure section still says "frontend/e2e/ 46 skenario Playwright", another internal inconsistency. Badge plus prose (59) is the newer claim.
Action: change to "59 Playwright specs".

## No change

- overview: upload PDF TXT Markdown, Indonesian Q&A, clickable citations, refusal, labelled general knowledge. Matches README intro and Cara kerjanya.
- challenge: no citation without context, threshold 0.82 with irrelevant scoring 0.72-0.81, per-document session scope, multilingual embedding for Indonesian. Matches README "Tiga aturan" plus "Ambang 0.82, bukan 0.5 | Diukur untuk model ini: teks tidak relevan pun berskor 0.72 sampai 0.81" and "multilingual-e5-small, bukan model Inggris".
- statistics.Embedding model: entry "multilingual-e5-small" vs README "intfloat/multilingual-e5-small". Same model, short name only. No change needed.
- statistics.Similarity threshold: entry "0.82, measured not guessed" vs README "default 0,82, minimum 0,75" and "Ambang 0.82, bukan 0.5". Match.
- technologies_grouped: FastAPI, Python, SQLite, ChromaDB, multilingual-e5-small, Hybrid retrieval, Groq, Ollama fallback, Next.js, React, TypeScript, Tailwind CSS, pytest, Playwright, RAGAS, Docker, Caddy, AWS EC2. All present in README badges, stack, and structure sections. No change.
- E2E checks 21: entry result "21 end-to-end checks" matches README "python -m scripts.e2e_check | 21 pemeriksaan". No change.
- RAGAS evaluation dataset with must-refuse questions scored strictly: matches README "Dataset berisi 11 pertanyaan: 8 harus terjawab benar, 3 harus dijawab tidak ditemukan". No change.
- Links: github_link and demo_link unchanged. No new repo URL or demo URL in README.
