# BRIEF — Update Project 15 Visit Bantaragung (read-only)

## Permintaan user (asli)
User ingin website pribadi (`D:\Riset Pribadi\LatestPortfolioWebsite`, Astro 5 + Tailwind, live di https://aldyardnsyh.my.id)
diperbarui untuk proyek **Visit Bantaragung** (`/project/15`, tampil di `/all-projects`):
- Entri lama (id `15` di `src/data/project_details.json`) hanya mendeskripsikan **frontend landing page**.
- Kenyataannya repo https://github.com/aldyardnsyh/VisitBantaragung (166 commit, Next.js 16 App Router + React 19 + TS + Tailwind 4)
  sekarang adalah **platform all-in-one**: landing page publik + **CMS Dasbor Konten** (Git-based, per-save = 1 commit, auto rebuild,
  tanpa database) + **Chatbot Bantaragung Guide** (RAG end-to-end: BM25 + fuzzy entity + query expansion ~190 entri, reranker,
  fallback LLM chain + health tracking, guardrail anti-halusinasi & anti-jailbreak ID/EN/Jawa, degradasi deterministik jujur,
  9 suite uji regresi tanpa kuota LLM).
- Sumber kebenaran konten: README repo VisitBantaragung + halaman live https://aldyardnsyh.my.id/project/15
  (versi lama) + https://visitbantaragung.com/ (produk live).

## Ruang lingkup
- HANYA ubah entri proyek id `15` (Visit Bantaragung) di website portfolio.
- Field yang boleh disentuh: `role`, `timeline`, `overview`, `challenge`, `result`, `technologies_grouped` (baru),
  `statistics` (baru, opsional), `gallery` (tambah item, opsional dengan aset gambar baru di `public/images/portofolio/web/`).
- JANGAN ubah: id, name (kecuali disepakati), category, urutan tampil (`src/lib/projects.ts`), entri proyek lain,
  template `src/pages/project/[id].astro` dan `src/pages/all-projects.astro` (kecuali architect menyetujui perubahan template).
- Bahasa konten: Inggris (mengikuti entri lain). Konsisten dengan tone portfolio.

## Batasan
- Anti-stuck berlaku: tidak ada build/test per langkah; satu verifikasi di akhir (P5).
- Dilarang dev server/watcher. Timeout wajib tiap shell. Retry maks 2x.
- Tidak ada kredensial yang dibutuhkan.
