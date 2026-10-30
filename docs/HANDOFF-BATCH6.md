# HANDOFF — Batch Tambah/Update 6 Proyek Portfolio

> Dibuat: 2026-10-30 · Repo: `D:\Riset Pribadi\LatestPortfolioWebsite` (Astro 5 + Tailwind, build statis)
> Sesi sebelumnya selesai: entry 15 (Visit Bantaragung, rewrite teks + galeri 3) dan entry 22 (RAG, galeri 6 menu). Commit lokal: `467975e`, `54df614`. **Belum di-push.**
> Server lokal terakhir jalan di `http://127.0.0.1:4321/` (python http.server dari `dist/`, detached). Cek dulu `Get-NetTCPConnection -LocalPort 4321` sebelum start baru.

## 1. GOALS (definisi selesai)

- [ ] G1. Enam repo di bawah terwakili akurat di `/all-projects` + halaman detail, gaya konsisten dengan entri lain (Inggris, tanpa em dash, klaim didukung README).
- [ ] G2. Setiap entri punya galeri yang menampilkan fitur/menu inti (bukan cover saja), cover tidak diubah kecuali diminta.
- [ ] G3. Link benar: repo selalu ada; demo_link hanya jika live URL terverifikasi; MyRouter mengarah ke repo + link release desktop bila ada.
- [ ] G4. Satu `npm run build` hijau di akhir (34+ halaman), 0 em dash di `dist/`, commit per proyek (no push kecuali diminta).

## 2. KONTEKS PENTING DARI SESI SEBELUMNYA

- Entri lama id **15** dan **22** sudah selesai — JANGAN disentuh lagi kecuali regresi.
- Urutan tampil diatur `src/lib/projects.ts` (kategori ML → Web → IoT → DE → Mobile → PM/QA). Entri baru harus didaftarkan di konstanta yang sesuai + komentarnya.
- Template: `src/pages/project/[id].astro` (hero pakai `card_image_src`, galeri grid 2 kolom `aspect-video object-cover`), `src/pages/all-projects.astro` (card pakai `card_image_src`).
- Aturan aset: screenshot non-16:9 WAJIB di-crop 16:9 deterministik (lebih lebar → potong lebar tengah; lebih tinggi → potong tinggi dari ATAS). Lihat `docs/DECISIONS.md` DECISION-004.
- Copywriting: antislop R-02 — em dash U+2014 DILARANG TOTAL di teks render. Cek via `[System.IO.File]::ReadAllText` + hitung `[char]0x2014`.
- Anti-stuck: tidak ada dev server/watcher; build sekali di akhir per batch; timeout wajib; retry maks 2x.
- `docs/BRIEF-BATCH6.md` (untracked) ada di repo — baca dulu, mungkin berisi catatan user.

## 3. PLAN PER PROYEK

### P1. PasFotoIn — UPDATE entry 21 (sudah ada)
- Sumber: https://github.com/aldyardnsyh/PasFotoIn · Live: https://www.pasfotoin.web.id/ (About repo; entri lama masih `pasfotoin.vercel.app` — verifikasi & ganti jika live baru valid).
- README punya `docs/screenshots/`: 01-beranda, 02-beranda-lengkap, 03-editor-rasio, 04-editor-preset-dokumen-kpt, 05-editor-latar, 06-editor-sesuaikan, 07-editor-ekspor, 08-dialog-ekspor, 09-tentang, 10/11/12 mobile.
- Kerja: unduh kandidat, pilih 4–6 (Beranda, Editor Rasio, Latar, Sesuaikan, Ekspor, +1 mobile opsional), crop 16:9, ganti `gallery` saja. Cover + teks + demo (setelah verifikasi URL) sesuai kebutuhan.
- Bukti klaim dari README: Next.js 16.4 static, ONNX WASM di Web Worker (65s→30s), preset cm Indonesia, A4 300 DPI, privasi on-device, Vitest + Playwright.

### P2. MyRouter — ENTRI BARU (id 23)
- Sumber: https://github.com/aldyardnsyh/MyRouter · **Tanpa live web** (aplikasi desktop).
- Kerja: baca README repo (stack, fitur, cara jalan), buat entri id `23` kategori Web/ML? (tentukan dari isi repo; kemungkinan Web tooling atau IoT networking — putuskan saat baca). `demo_link`: null ATAU URL release desktop GitHub (`.../releases`) bila ada rilis — cek tab Releases. `github_link` wajib ke repo.
- Galeri: screenshot dari README bila ada; bila tidak ada, galeri boleh 1 item memakai cover yang dibuat dari tampilan aplikasi (catat sebagai asumsi) — JANGAN mockup palsu.
- Daftarkan id 23 di `projects.ts` + komentar.

### P3. ShelfOpsRetail — ENTRI BARU (id 24)
- Sumber: https://github.com/aldyardnsyh/ShelfOpsRetail
- Kerja: baca README (domain retail ops, stack, fitur inti, live URL bila ada), buat entri id `24`, kategori sesuai isi (kemungkinan Web atau ML), galeri 3–6 screenshot fitur dari README (crop 16:9), daftarkan di `projects.ts`.

### P4. IntelligenceDocumentSystem — REFRESH entry 22 (sudah ada, galeri 6 menu selesai)
- User bilang "diperbaharui ada yang baru, coba sesuaikan lagi".
- Kerja: bandingkan README terkini vs entri 22 (overview/challenge/result/statistics/technologies_grouped). Update hanya yang berubah (angka, fitur baru, URL). Galeri 6 menu dipertahankan kecuali ada menu baru.
- Perhatian: `demo_link` sudah `https://rag-ids.web.id` (commit 54df614).

### P5. DataLoom — ENTRI BARU (id 25)
- Sumber: https://github.com/aldyardnsyh/DataLoom
- Kerja: sama pola P3. Kategori kemungkinan DE (data) — cek isi repo dulu.

### P6. RigDaily — ENTRI BARU (id 26)
- Sumber: https://github.com/aldyardnsyh/RigDaily
- Kerja: sama pola P3. Kategori kemungkinan Web/Mobile — cek isi repo dulu.

## 4. TODO LIST (urutan eksekusi)

```
[ ] T0. Baca docs/BRIEF-BATCH6.md + git log/status; pastikan working tree bersih
[ ] T1. P1 PasFotoIn: unduh screenshot → pilih → crop 16:9 → update gallery (+demo URL jika valid) → verifikasi
[ ] T2. P2 MyRouter: baca README → cek Releases → buat entry 23 → galeri → daftarkan projects.ts
[ ] T3. P3 ShelfOpsRetail: baca README → buat entry 24 → galeri → daftarkan projects.ts
[ ] T4. P4 IDS refresh: diff README vs entry 22 → update seperlunya
[ ] T5. P5 DataLoom: baca README → buat entry 25 → galeri → daftarkan projects.ts
[ ] T6. P6 RigDaily: baca README → buat entry 26 → galeri → daftarkan projects.ts
[ ] T7. QA final: 1x npm run build → cek 0 em dash dist → cek tiap /project/23..26 + /all-projects render
[ ] T8. Commit per proyek (6 commit, no push) + update docs/STATE.json → released
```

Aturan eksekusi: kerjakan T1→T6 berurutan (satu entri selesai sebelum lanjut); T7 sekali di akhir; T8 commit per proyek. Setiap klaim angka/fitur wajib ada di README sumber (catat yang tidak ada sebagai asumsi di DECISIONS.md, bukan di-copy).

## 5. PROMPT SIAP-PAKAI UNTUK SESI BARU

> Lanjutkan batch portfolio di `D:\Riset Pribadi\LatestPortfolioWebsite`.
> Baca `docs/HANDOFF-BATCH6.md` sampai selesai, lalu kerjakan TODO T0→T8 berurutan.
> Orkestrasi via protokol Agentic v4 (P0 SPEC singkat per entri boleh digabung satu SPEC batch, P3 build, P5 verify sekali, P7 release).
> Lane yang dipakai: frontend (JSON), illustrator (crop 16:9 deterministik), qa (build+verifikasi), designer hanya bila butuh keputusan visual.
> Batasan tetap: tanpa em dash (R-02), tanpa dev server, commit per proyek tanpa push, server lokal 4321 biarkan user yang kontrol.
> Mulai dari T0 dan laporkan status tiap TODO selesai.
