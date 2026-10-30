# PasFotoIn Entry 21 Payload (UPDATE)

Target: `src/data/project_details.json` entry id 21. Do not edit repo files. Orchestrator applies this payload.

## demo_link

Current JSON value `https://pasfotoin.vercel.app` is stale. README has no vercel URL. Live verified URL:

```
https://www.pasfotoin.web.id/
```

Status: webfetch returned full homepage text (hero, shortcuts, steps, footer v1.0.0). Site is live. Use the URL above as `demo_link`.

## gallery (replace existing 1-item gallery)

Cover `card_image_src` unchanged: `/images/portofolio/web/Cover-PasFotoIn.png`.

```json
"gallery": [
  {
    "id": 1,
    "title": "Homepage Dropzone",
    "description": "Landing doubles as workspace: drag a photo, paste with Ctrl V, or jump in with one click document shortcuts.",
    "src": "/images/portofolio/web-development/pasfotoin-01.jpg"
  },
  {
    "id": 2,
    "title": "Ratio and Document Presets",
    "description": "Editor canvas with Ratio tab: general ratios, Indonesian centimeter sizes, ICAO sizes, plus Fill and Fit placement modes.",
    "src": "/images/portofolio/web-development/pasfotoin-02.jpg"
  },
  {
    "id": 3,
    "title": "Background and Subject Cutout",
    "description": "Background tab: official red blue white studio colors, gradients, blur, plus on device segmentation in three quality tiers.",
    "src": "/images/portofolio/web-development/pasfotoin-03.jpg"
  },
  {
    "id": 4,
    "title": "Adjust with Histogram and Levels",
    "description": "Adjust tab: six sliders, 256 bin light and RGB histogram, draggable levels, Auto Levels, and detail enhancement.",
    "src": "/images/portofolio/web-development/pasfotoin-04.jpg"
  },
  {
    "id": 5,
    "title": "Export Tab",
    "description": "Export tab: PNG JPEG WebP at quality 40 to 100, preset or custom pixels, 300 or 600 DPI, size estimate, and batch ZIP.",
    "src": "/images/portofolio/web-development/pasfotoin-05.jpg"
  },
  {
    "id": 6,
    "title": "Export Dialog",
    "description": "Export dialog with per file settings, clipboard copy, batch ZIP progress with cancel, and EXIF stripped output.",
    "src": "/images/portofolio/web-development/pasfotoin-06.jpg"
  }
]
```

File mapping (temp crop -> dest):
- `crop16x9_01-beranda.png` -> `pasfotoin-01.jpg`
- `crop16x9_03-editor-rasio.png` -> `pasfotoin-02.jpg`
- `crop16x9_05-editor-latar.png` -> `pasfotoin-03.jpg`
- `crop16x9_06-editor-sesuaikan.png` -> `pasfotoin-04.jpg`
- `crop16x9_07-editor-ekspor.png` -> `pasfotoin-05.jpg`
- `crop16x9_08-dialog-ekspor.png` -> `pasfotoin-06.jpg`

Temp dir: `C:\Users\aldya\AppData\Local\Temp\opencode\pasfotoin\`. Orchestrator converts to JPG into `public/images/portofolio/web-development/`.

## Assets (source, dimensions, crop)

All sources from `https://raw.githubusercontent.com/aldyardnsyh/PasFotoIn/main/docs/screenshots/`. All originals 2880x1800 (ratio 1.60, taller than 16:9). Per DECISION-004: taller source cuts height from TOP. Crop box (0, 0, 2880, 1620). Result 2880x1620.

| # | Source URL | Original | Crop | Result |
|---|---|---|---|---|
| 1 | .../01-beranda.png | 2880x1800 | height from top, 180 px removed from bottom | 2880x1620 |
| 2 | .../03-editor-rasio.png | 2880x1800 | height from top, 180 px removed from bottom | 2880x1620 |
| 3 | .../05-editor-latar.png | 2880x1800 | height from top, 180 px removed from bottom | 2880x1620 |
| 4 | .../06-editor-sesuaikan.png | 2880x1800 | height from top, 180 px removed from bottom | 2880x1620 |
| 5 | .../07-editor-ekspor.png | 2880x1800 | height from top, 180 px removed from bottom | 2880x1620 |
| 6 | .../08-dialog-ekspor.png | 2880x1800 | height from top, 180 px removed from bottom | 2880x1620 |

Dropped: `11-editor-mobile.png` (68808 bytes, mobile layout duplicates editor coverage; 6 desktop shots already span the full flow).

## Evidence per fact (README quotes)

- "Semua proses berjalan di perangkat pengguna. Tidak ada unggahan, tidak ada server, tidak ada akun." -> supports gallery intro and item 1 description (on device, no upload).
- "Halaman pertama adalah area kerja, bukan halaman pemasaran." + "Tarik file ke halaman atau klik Pilih foto. Bisa juga tempel dari clipboard dengan Ctrl + V." -> supports item 1.
- "Preset rasio umum (1:1 sampai 21:9), dokumen Indonesia dalam sentimeter, ukuran internasional ICAO 9303" + "Mode penempatan: Isi dan Muat" -> supports item 2.
- "Warna latar resmi Indonesia: Merah #D32F2F, Biru #0B57D0, Putih, dan Abu Studio." + "model segmentasi di perangkat dengan tiga tingkat kualitas (42 MB, 84 MB, 168 MB)" -> supports item 3.
- "Enam slider: eksposur, kontras, sorotan, bayangan, saturasi, suhu." + "Histogram 256 bin dengan mode Cahaya dan RGB." + "Levels yang bisa digeser langsung di grafik" -> supports item 4.
- "Format PNG, JPEG, dan WebP dengan kualitas 40 sampai 100." + "Pemilih 300 DPI atau 600 DPI" + "Batch ZIP dengan progress dan tombol batalkan." -> supports item 5.
- "Salin ke clipboard sebagai PNG." + "Metadata EXIF tidak ikut diekspor." -> supports item 6.
- "Lembar cetak A4 pada 300 DPI, berisi puluhan salinan dengan garis potong" -> kept in overview/result, no gallery item needed.

## Checks

- English text only in JSON above. No em dash character present (verified: search U+2014 returns zero).
- DECISION-004 crop rule applied: top anchored height cut.
- No repo file modified. No build or dev server run. Crops live in temp only.
