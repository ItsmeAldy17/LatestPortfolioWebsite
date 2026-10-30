# ShelfOpsRetail — Payload Entry 24

## Entry JSON (id 24)

```json
{
    "id": "24",
    "name": "ShelfOpsRetail Operations Platform",
    "role": "Full-Stack Developer",
    "timeline": "2026",
    "status": "Done",
    "github_link": "https://github.com/aldyardnsyh/ShelfOpsRetail",
    "demo_link": "https://shelfopsretail.web.id",
    "card_image_src": "/images/portofolio/web/Cover-ShelfOpsRetail.png",
    "category": "Web",
    "overview": "Retail operations OS that turns CCTV and shelf photos into actionable numbers: stable-ID visitor tracking, per-zone dwell, empty-shelf detection, price mismatch, stock and mutations, procurement, tasks, reports, and a Copilot that answers from SOP and store data with citations. Built as a full Docker stack: Next.js web, Go gateway and worker, Python AI services over gRPC, PostgreSQL 16 with pgvector, fronted by Caddy on a VPS.",
    "challenge": "Unifying five layers (capture, understand, record, act, learn) into one readable system: CCTV and photo ingest, visitor and shelf detection, stock and price book records, alerts with SLA tasks, and a cited Copilot, all behind one domain with session cookies and a production guard that refuses to boot on mock AI providers.",
    "result": "Shipped a healthy production stack with green healthz and readyz, passing end-to-end smoke tests (login, document upload, chat, audit to finalize, PO, idempotent GRN, IDOR guard), Playwright browser E2E on landing plus demo login flow, and a static demo mode that runs the web without any backend from gateway-shaped fixtures.",
    "statistics": {
        "Stack services": "Caddy, web, gateway, Postgres, ai-rag, ai-vision",
        "Smoke tests": "Login, chat, audit finalize, PO, GRN, IDOR guard",
        "Browser E2E": "Playwright landing desktop plus mobile",
        "Demo modes": "Backend demo session plus static fixtures"
    },
    "technologies_grouped": {
        "Frontend": [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Radix UI",
            "Recharts"
        ],
        "Backend": [
            "Go",
            "chi",
            "pgx",
            "OpenAPI 3.1",
            "Protocol Buffers",
            "gRPC"
        ],
        "AI": [
            "Python",
            "FastAPI",
            "ONNX Runtime",
            "RAG hybrid pgvector plus tsvector"
        ],
        "Data": [
            "PostgreSQL 16",
            "pgvector"
        ],
        "Deployment": [
            "Docker Compose",
            "Caddy",
            "GitHub Actions"
        ]
    },
    "gallery": [
        {
            "id": 1,
            "title": "Store Summary",
            "description": "Operational overview with visitor counts, empty shelves, and active cameras for the demo store.",
            "src": "/images/portofolio/web/ShelfOpsRetail-Dashboard.png"
        },
        {
            "id": 2,
            "title": "Inventory",
            "description": "Per-store and per-location stock balances with inbound and outbound mutation history.",
            "src": "/images/portofolio/web/ShelfOpsRetail-Inventory.png"
        },
        {
            "id": 3,
            "title": "Procurement",
            "description": "Purchase orders and goods receipts that add stock with an idempotent mutation trail.",
            "src": "/images/portofolio/web/ShelfOpsRetail-Purchasing.png"
        },
        {
            "id": 4,
            "title": "Shelf Monitoring",
            "description": "Shelf photo audit flow from session to finalize, auto-creating alerts and tasks.",
            "src": "/images/portofolio/web/ShelfOpsRetail-Audit.png"
        },
        {
            "id": 5,
            "title": "Tasks",
            "description": "Follow-up queue where OOS and price alerts become owned tasks with deadlines.",
            "src": "/images/portofolio/web/ShelfOpsRetail-Tasks.png"
        },
        {
            "id": 6,
            "title": "Copilot with Citations",
            "description": "Store-grounded Q&A over SOP and live data with sources and a daily cost cap.",
            "src": "/images/portofolio/web/ShelfOpsRetail-Copilot.png"
        }
    ]
}
```

## Aset

- Sumber: `https://github.com/aldyardnsyh/ShelfOpsRetail` branch `master`, folder `assets/screenshots/01-landing.png` s/d `08-copilot.png`.
- Unduhan mentah di `C:\Users\aldya\AppData\Local\Temp\opencode\shelfops\` (8 file, 1440x900, 16:10).
- Crop 16:9 deterministik di `C:\Users\aldya\AppData\Local\Temp\opencode\shelfops\crop16x9\` (8 file, 1440x810, top-crop per DECISION-004: sumber lebih tinggi dipotong dari ATAS).
- Dipilih 6 untuk galeri: 03-dashboard, 04-inventory, 05-purchasing, 06-audit, 07-tasks, 08-copilot. Dibuang: 01-landing (dipakai sebagai cover), 02-login (form login generik, nilai portfolio rendah).
- Target repo: `public/images/portofolio/web/ShelfOpsRetail-{Dashboard,Inventory,Purchasing,Audit,Tasks,Copilot}.png` + `Cover-ShelfOpsRetail.png` dari 01-landing crop.

## Bukti klaim README (branch master)

- "Satu sistem operasi toko: CCTV dan foto rak diubah menjadi angka" — tagline README.
- "Stack Docker (Caddy + web + gateway + Postgres + ai-rag + ai-vision), Berjalan sehat, healthz/readyz hijau" — tabel status kesiapan produksi.
- "Smoke test end-to-end, Lulus: login, upload dokumen, chat, audit-finalize, PO, GRN (+idempoten), guard IDOR" — tabel status.
- "Gateway menolak boot bila provider AI masih tiruan, kecuali ALLOW_MOCK_PROVIDERS=true" — guard produksi.
- "E2E browser, Playwright: landing (desktop+mobile) + alur login demo" — tabel status.
- "NEXT_PUBLIC_DEMO_MODE=1 menjalankan web tanpa backend memakai fixture" — data demo.
- "Hak cipta 2026 PogungSoftwareHouseTeam (PSHT)" — lisensi.
- Live https://shelfopsretail.web.id terverifikasi via webfetch: landing "Toko Anda berbicara setiap hari", demo store "Gerai uoi Malang", modul Kamera dan Zona, Peringatan, Pengunjung, Copilot. Demo_link valid.
