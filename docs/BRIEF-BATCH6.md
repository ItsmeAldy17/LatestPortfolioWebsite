# BRIEF — Batch 6 Project Portfolio (read-only)

## Permintaan owner
Tambahkan/perbarui 6 project di website portfolio (`D:\Riset Pribadi\LatestPortfolioWebsite`, Astro 5 statis, live https://aldyardnsyh.my.id),
mengikuti gaya website yang sudah ada (entri 15 Visit Bantaragung & 22 IDS sebagai pola: role/overview/challenge/result/statistics/technologies_grouped/gallery).

## Tugas per project (SATU sub-agent = SATU project, JANGAN campur)
1. **PasFotoIn** — UPDATE entry id `21` (sudah ada). Galeri: screenshot fitur dari README (editor rasio/latar/sesuaikan/ekspor/beranda/tentang). COVER JANGAN DIUBAH (user: cover sudah bagus). Live: https://www.pasfotoin.web.id/ (demo_link kemungkinan sudah ada, verifikasi).
2. **MyRouter** — ENTRI BARU (id `23`). Aplikasi desktop (Go + React console, tray app Windows, tanpa web live). demo_link TETAP null (mengarah ke repo). Tambahkan link release desktop: https://github.com/aldyardnsyh/MyRouter/releases/latest. Screenshot dari `assets/screenshots/` (dashboard, providers, routes, guard, skills, playground, dsb).
3. **ShelfOpsRetail** — ENTRI BARU (id `24`). Live: https://shelfopsretail.web.id. Screenshot 8 file `01-landing` … `08-copilot` (sudah 16:10, crop ringan).
4. **IntelligenceDocumentSystem** — REFRESH entry id `22` (sudah ada, galeri 6 menu selesai). Cek apakah README ada update baru yang belum tercermin (bandingkan klaim entry vs README terbaru). Hanya ubah jika ada fakta baru yang terverifikasi.
5. **DataLoom** — ENTRI BARU (id `25`). Live: https://www.dataloom.web.id/. Screenshot dari `docs/screenshots/` (landing, dashboard, quarantine, contract, agents + galeri lengkap 27 di docs/GALLERY.md bila perlu).
6. **RigDaily** — ENTRI BARU (id `26`). Live: https://rigdaily.web.id/ (+ desktop .exe NSIS). Screenshot 21 file di `docs/screenshots/` (login, dashboard, DDR, time breakdown, cost, billing, sync center, admin, dsb).

## Aturan global (mengikat semua sub-agent)
- Bahasa konten Inggris. Tanpa em dash (antislop R-02). Tanpa buzzword (R-16). Klaim harus didukung README (R-36, R-17).
- Crop 16:9 deterministik: sumber lebih lebar → potong lebar terpusat; sumber lebih tinggi → potong tinggi dari ATAS. Aset ke `public/images/portofolio/<kategori>/` dengan nama jelas.
- JANGAN ubah: entry lain, `src/lib/projects.ts` (orkestrator yang update urutan), template astro, file lain.
- JANGAN jalankan npm build/dev/test. Verifikasi: JSON parse + hitung em dash = 0 + aset ada.
- Setiap sub-agent MENULIS payload-nya ke `docs/work/<project>.md` (bukan langsung ke JSON): berisi objek JSON entry lengkap + daftar aset + bukti klaim (sumber README per fakta). Orkestrator yang mengintegrasikan semuanya sekaligus.
- Cover untuk entri BARU: pilih screenshot terbaik sebagai card_image_src (dashboard/landing), atau buat dari screenshot (tanpa image-gen).
- Kategori: ikuti pola existing ("Machine Learning", "Web Development", dst). Timeline dari README/commits (jujur, tulis "October 2026" bila tak pasti → catat asumsi).
