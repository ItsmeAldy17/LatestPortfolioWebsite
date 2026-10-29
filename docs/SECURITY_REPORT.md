# SECURITY_REPORT — P5 Verification: Entry 15 Visit Bantaragung (teks + galeri P3b)

- **Phase:** P5 · **Author:** v4-security · **Date:** 2026-10-25
- **Scope:** 3 screenshot baru (`public/images/portofolio/web/VisitBantaragung-*.jpeg`) + delta JSON `src/data/project_details.json` lines 702–764 + risiko F-03 `docs/ARCHITECTURE.md`
- **Verdict: CLEAR — 0 Critical, 0 High, 0 Medium, 0 Low.** blocking = false.
- **Catatan metode:** review exposure visual (vision) + inspeksi raw JSON; TIDAK ADA scan dependency / pentest / dev server (di luar scope, sesuai brief).

## 1. Threat model ringan

| Elemen | Status |
|---|---|
| Aset | Situs portfolio statis (Astro 5 SSG); satu objek JSON; 3 file JPEG publik |
| Aktor | Pengunjung publik, kontributor repo, hotlinker gambar |
| Trust boundary | Tidak ada backend/auth/sesi/env — tidak ada boundary kredensial |
| Attack surface | Defacement via push ke repo; hotlink gambar; typo-squat link demo/GitHub |

## 2. Hasil review screenshot (vision langsung)

### 2.1 VisitBantaragung-Home.jpeg — CLEAR
Landing publik: nav, hero, statistik kunjungan, CTA "Pesan WA" (tanpa nomor terlihat). Nol kredensial, nol token, nol PII.

### 2.2 VisitBantaragung-Chatbot-Guide.jpeg — CLEAR (1 catatan INFO, pre-existing)
Panel chatbot menampilkan jawaban grounded (harga + sitasi + entity card) dan baris "Chat pengelola via WhatsApp +62 813-2442-7327". Nomor ini adalah **kontak publik resmi desa yang sudah terpampang di README publik repo VisitBantaragung** — exposure pre-existing, bukan kebocoran baru dari perubahan ini. Tidak ada API key, system prompt, atau data lintas-user terlihat.

### 2.3 VisitBantaragung-CMS-Collections.jpeg — CLEAR (2 catatan INFO, pre-existing/generik)
- Label "admin / Administrator" + avatar "AD" adalah **akun demo generik CMS**, bukan PII sungguhan (tanpa nama asli, email, atau hash kredensial terlihat).
- Kolom SLUG berisi ID konten bentuk `ba-<digits>` — **bukan secret/token** (tidak ada API key, password, env, session token, atau URL ber-token di layar).
- Tidak ada error verbose, stack trace, atau secret di tabel/notifikasi/search.

## 3. JSON escaping + JSON-LD injection (F-03) — CLEAR

- Inspeksi raw lines 702–764: file memakai **karakter normal** — tidak ada pola entity-encoding berlebih seperti `&#x27;` pada string baru. Apostrof/tanda baca Inggris tampil apa adanya.
- Seluruh string baru (role/overview/challenge/result/statistics/technologies_grouped/3 judul + deskripsi galeri) **tidak mengandung `"` maupun `</script>`**. Karakter yang hadir (`. , + / ~ ( ) —`) aman untuk blok JSON-LD `CreativeWork` di `[id].astro`.
- Risiko F-03 ARCHITECTURE.md §9.4: **CLEAR by inspection**, konfirmasi final menyatu dengan QA TC-10.

## 4. Attack surface & mitigasi yang sudah ada

| Permukaan | Mitigasi eksisting |
|---|---|
| Defacement via repo | Review PR + `git diff` scope check (QA TC-08); konten statis, mudah revert |
| Hotlink / reuse gambar | Aset publik portofolio; risiko sebatas bandwidth, bukan kebocoran |
| Link demo/GitHub | URL publik resmi (`visitbantaragung.com`, repo publik); tanpa kredensial |
| Supply chain / runtime | N/A — tidak ada backend, auth, env var, atau secret di scope ini |

## 5. Temuan

**Nihil.** Tidak ada ticket SEC dibuka (0 Critical/High → tidak ada owner/re-test yang diperlukan).

## 6. Area teruji & aman

1. Home.jpeg — nol secret/PII.
2. Chatbot-Guide.jpeg — hanya kontak publik pre-existing; nol secret.
3. CMS-Collections.jpeg — akun demo generik + slug ID konten; nol secret.
4. JSON lines 702–764 — escaping normal, bebas `"`/`</script>`.
5. F-03 JSON-LD — clear.

## 7. Area tidak diuji

Scan dependency, pentest aktif, dan dev-server render — eksplisit di luar scope brief P5 ini.
