# Sorter + Selected Work Spec

## 1. Sorter all-projects (`src/pages/all-projects.astro`)

### Struktur kontrol
- Baris kontrol di atas grid, di bawah `PageHeader`:
  - Grup filter kategori: pill buttons `All` + satu pill per kategori unik dari JSON (`DE`, `IoT`, `ML`, `Mobile`, `PM`, `QA`, `Web`). Urutan alfabetis, label tanpa em dash.
  - Sort toggle: dua tombol segmented `Newest` / `Oldest`. Default aktif `Newest`.
- Setiap kartu grid diberi atribut: `data-category="{p.category}"` dan `data-timeline="{p.timeline}"`. Tambah `data-sort-key` saat render bila ingin hindari parse di klien (opsional, direkomendasikan).

### Perilaku default
- Saat halaman dimuat: filter `All` aktif, sort `Newest` aktif. Urutan DOM awal sudah newest-first (server render mengikuti `orderedProjects` yang diperbarui atau sort klien dijalankan sekali saat init).
- Klik pill kategori: set pill aktif, sembunyikan kartu yang kategorinya tidak cocok via class `hidden`. Hitung jumlah tampil dan tampilkan di label kecil misal `Showing X of N`.
- Klik sort toggle: susun ulang node kartu di dalam grid container berdasarkan kunci sort. Filter kategori tetap berlaku sesudah reorder.
- Tanpa dependensi: JS inline `<script>` di bawah grid, `querySelectorAll`, `addEventListener`, `appendChild` untuk reorder. Tanpa fetch, tanpa lib.

### Logika sort (timeline parse)
Fungsi `sortKey(timeline: string) -> [year, month]`:
1. Ambil semua kemunculan tahun 4 digit (`\d{4}`); tahun = kemunculan TERAKHIR. Bila tidak ada tahun, tahun = 0 (kartu durasi seperti `6 months`, `3 months`, `1 month`, `2 weeks`, `1 week` jatuh ke paling lama).
2. Ambil semua nama bulan EN penuh/singkat (`january|february|...|december|jan|feb|...|dec`, case-insensitive); bulan = kemunculan TERAKHIR yang dipetakan ke 1-12. Bila tidak ada bulan, bulan = 0.
3. Contoh:
   - `October 2026` jadi (2026, 10).
   - `September 2026` jadi (2026, 9).
   - `September - October 2026` jadi (2026, 10).
   - `2026` jadi (2026, 0).
   - `December 2025 - February 2026` jadi (2026, 2).
   - `September 2025 - January 2026` jadi (2026, 1).
   - `2025` jadi (2025, 0).
   - `6 months` / `1 week` jadi (0, 0).
4. `Newest` = urut turun (tahun lalu bulan), `Oldest` = urut naik. Tie-break stabil: pertahankan urutan DOM awal.
5. Label tombol dan pill dilarang mengandung em dash. Gunakan hyphen `-` bila perlu.

## 2. Selected Work (`src/components/Projects.astro`)

### Perubahan
- Ganti `const featured = projects.slice(0, 6)` menjadi daftar eksplisit:
```ts
const FEATURED_IDS = ['22', '20', '17', '26', '24', '25', '15', '19'];
const byId = new Map(projects.map((p) => [p.id, p]));
const featured = FEATURED_IDS.map((id) => byId.get(id)).filter((p) => p !== undefined);
```
- Fallback: bila id hilang dari JSON, `filter` melewatinya (tidak render placeholder, tidak error). Jumlah tampil = jumlah id yang cocok.
- Nomor urut `01` sampai `08` mengikuti urutan array di atas, bukan urutan `orderedProjects`.

### Daftar 8 proyek + alasan urutan
| # | ID | Nama | Timeline | Alasan urutan |
|---|----|------|----------|---------------|
| 1 | 22 | Intelligent Document Assistant (RAG) | October 2026 | Flagship RAG terbaru, identitas ML engineer |
| 2 | 20 | Smart Document Scanner and OCR Service | September - October 2026 | OCR service terbaru, pasangan kuat RAG |
| 3 | 17 | Shale Shaker Cutting Monitoring Web | 2026 | Thesis web migration, jembatan ML ke Web |
| 4 | 26 | RigDaily Daily Drilling Report System | 2026 | Produk Web 2026, domain drilling lanjutan |
| 5 | 24 | ShelfOpsRetail Operations Platform | 2026 | Produk Web 2026, variasi domain retail ops |
| 6 | 25 | DataLoom Data Operator Workspace | October 2026 | Bukti DE terbaru, satu-satunya DE di daftar |
| 7 | 15 | Visit Bantaragung Tourism Platform | December 2025 - February 2026 | Web range date, domain pariwisata |
| 8 | 19 | LolosCV ATS Resume Builder | September 2026 | Web tool populer, penutup yang dikenal luas |

## 3. File yang diubah orkestrator
1. `src/components/Projects.astro`: ganti slice dengan `FEATURED_IDS` + lookup `byId` + filter. Tidak ada perubahan visual selain jumlah 8 baris.
2. `src/pages/all-projects.astro`: tambah blok kontrol filter + sort, atribut `data-category` / `data-timeline` per kartu, `<script>` inline untuk filter dan reorder.
3. Opsional `src/lib/projects.ts`: bila ingin server render default newest-first global, tambah helper `sortKey` yang sama dan pakai untuk `orderedProjects`. Tidak wajib bila sort klien dijalankan saat init.

## 4. Acceptance
- [ ] Home Selected Work tampil tepat 8 baris berurutan 22, 20, 17, 26, 24, 25, 15, 19.
- [ ] ID hilang dilewati tanpa error dan tanpa lubang nomor.
- [ ] all-projects default: filter All aktif, sort Newest aktif, kartu terbaru di atas.
- [ ] Pill tiap kategori memfilter benar; counter `Showing X of N` akurat.
- [ ] Toggle Oldest membalik urutan; toggle Newest mengembalikan.
- [ ] 0 em dash di label kontrol dan tombol.
- [ ] Tanpa dependensi baru; tanpa ubah file selain 3 file di atas.
