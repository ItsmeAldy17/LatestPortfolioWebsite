# Gallery Fill: PasFotoIn (id 21) dan LolosCV (id 19)

## 1. PasFotoIn (id 21): TIDAK PERLU TAMBAH

Galeri sudah penuh 6 item dan keenam file src terverifikasi ADA di `public/images/portofolio/web/`:

1. `PasFotoIn-Home.jpg` ADA
2. `PasFotoIn-Ratio.jpg` ADA
3. `PasFotoIn-Background.jpg` ADA
4. `PasFotoIn-Adjust.jpg` ADA
5. `PasFotoIn-Export.jpg` ADA
6. `PasFotoIn-ExportDialog.jpg` ADA

Kesimpulan: tidak ada file hilang. Bila user melihat galeri kosong atau lama, itu cache browser atau build lama, bukan data hilang. Saran: hard refresh (Ctrl+Shift+R).

## 2. LolosCV (id 19): galeri perlu diisi (saat ini 1 cover saja)

### 2.1 Temuan repo

- README benar ada di `https://github.com/aldyardnsyh/Lolos-CV` (catatan: nama repo memakai strip `Lolos-CV`, bukan `LolosCV`; URL tanpa strip 404 di main maupun master).
- Folder `public/` di repo hanya berisi `pdf.worker.min.mjs`. Tidak ada screenshot, mockup, atau aset gambar apapun di repo.
- Akibatnya: tidak ada file untuk diunduh, dipilih 4-6 terbaik, atau di-crop 16:9 via PIL. Langkah unduh dan crop dilewati karena sumbernya tidak ada, bukan karena dilewati.
- Live URL valid: `https://loloscvats.web.id` merespons dan memuat aplikasi penuh (hero, fitur builder, job analyzer, 4 template, ATS score, export PDF, harga gratis, leaderboard Saweria).

### 2.2 Bukti klaim README (dikutip dari README Lolos-CV)

- Alur kerja: tempel link lowongan, AI bedah persyaratan, generate contoh CV, edit di template builder, cek skor ATS, export PDF.
- 4 template: ATS Classic, ATS + Foto, Creative, Modern Minimal.
- Dua bahasa: Indonesia dan Inggris, sekali klik.
- Import CV lama via upload PDF, data diekstrak otomatis.
- Export PDF mode 1 halaman (dipadatkan otomatis) atau 2 halaman, hasil sama persis dengan pratinjau.
- BYOK AI: OpenAI, Anthropic, DeepSeek, Gemini, Groq, dan lainnya, key tersimpan hanya di browser.
- Leaderboard donatur terupdate otomatis dari Saweria.
- Pengembang: PogungSoftwareHouseTeam (PSHT).

### 2.3 Objek JSON gallery baru LolosCV (Inggris, tanpa em dash)

Salin array ini menggantikan `gallery` entry id 19. Item 1 memakai cover yang sudah ada. Item 2 sampai 5 memakai file hasil capture manual dari live site (lihat 2.4), karena repo tidak menyediakan screenshot.

```json
[
  {
    "id": 1,
    "title": "Platform Cover",
    "description": "LolosCV: build a CV that answers the job posting.",
    "src": "/images/portofolio/web/Cover-Lolos-CV.png"
  },
  {
    "id": 2,
    "title": "Job Posting Analyzer",
    "description": "Paste a LinkedIn, JobStreet, or Glints URL and AI breaks the requirements into critical, important, and nice to have points.",
    "src": "/images/portofolio/web/LolosCV-JobAnalyzer.jpg"
  },
  {
    "id": 3,
    "title": "Template Builder",
    "description": "Four ATS readable templates with reorderable and hideable sections, bilingual output, and live preview.",
    "src": "/images/portofolio/web/LolosCV-Builder.jpg"
  },
  {
    "id": 4,
    "title": "ATS Score Check",
    "description": "Concrete score with keyword matching and actionable fixes mapped to each requirement point.",
    "src": "/images/portofolio/web/LolosCV-ATSScore.jpg"
  },
  {
    "id": 5,
    "title": "PDF Export",
    "description": "Pixel accurate export that auto fits one page or two, identical to the on screen preview.",
    "src": "/images/portofolio/web/LolosCV-Export.jpg"
  }
]
```

### 2.4 Daftar aset

| File | Status |
|---|---|
| `Cover-Lolos-CV.png` | Sudah ada di `public/images/portofolio/web/` |
| `LolosCV-JobAnalyzer.jpg` | BELUM ADA, capture manual dari live site bagian Analisis Lowongan, crop 16:9 |
| `LolosCV-Builder.jpg` | BELUM ADA, capture manual dari live site bagian Buat CV, crop 16:9 |
| `LolosCV-ATSScore.jpg` | BELUM ADA, capture manual dari live site bagian Optimasi Skor ATS, crop 16:9 |
| `LolosCV-Export.jpg` | BELUM ADA, capture manual dari live site bagian Export PDF, crop 16:9 |

Cara isi: buka `https://loloscvats.web.id` di desktop 1280x720, screenshot tiap section, simpan sebagai JPG ke `public/images/portofolio/web/` dengan nama di atas. Tidak ada file di `C:\Users\aldya\AppData\Local\Temp\opencode\lolos\` karena repo tidak menyediakan sumber gambar.
