# DataLoom Payload - Entry 25

## Entry JSON

```json
{
    "id": "25",
    "name": "DataLoom Data Operator Workspace",
    "role": "Full-Stack Data Engineer",
    "timeline": "October 2026",
    "status": "Done",
    "github_link": "https://github.com/aldyardnsyh/DataLoom",
    "demo_link": "https://www.dataloom.web.id/",
    "card_image_src": "/images/portofolio/de/DataLoom-Landing.png",
    "category": "DE",
    "overview": "Data operator workspace to build, run, and monitor end to end pipelines. Raw data lands in Bronze, is cleaned deterministically into Silver, passes a four rule quality gate, and is promoted to Gold only when fit for use. Every rejected row lands in Quarantine with a reason code, agents only propose while humans approve, and validation rules plus project thresholds are readable in the data contract page.",
    "challenge": "Guaranteeing that bad data never reaches reports: rejected rows need recorded reasons instead of silent drops, promotion needs deterministic reconciliation instead of model opinion, and rule changes need versioning plus human approval instead of silent formula edits.",
    "result": "Shipped a live platform at dataloom.web.id with a demo mode that runs fully in the browser: guided setup, DAG canvas, run monitor with gate checklist, quarantine with reason codes, data contract, agent approval workspace, read only text to SQL, and usage billing. Verified per README: web typecheck and lint pass with 25 of 25 pages built, 320 backend unit tests pass, and a 58 step browser suite passes with zero console errors.",
    "statistics": {
        "Backend unit tests": "320 passed, 0 failed",
        "Browser suite": "58 steps passed, zero console errors",
        "Web build": "25 of 25 pages, typecheck and lint pass",
        "Screenshots": "33 demo captures in docs/screenshots"
    },
    "technologies_grouped": {
        "Frontend": [
            "Next.js 15",
            "React 19",
            "TypeScript",
            "Tailwind CSS",
            "React Flow",
            "Recharts"
        ],
        "Backend": [
            "FastAPI",
            "SQLAlchemy 2",
            "Pydantic v2",
            "Polars",
            "DuckDB",
            "Redis Streams"
        ],
        "Agents": [
            "LangGraph",
            "sqlglot guard",
            "Pydantic output"
        ],
        "Data": [
            "Postgres",
            "Redis 7",
            "S3-compatible storage"
        ],
        "Quality": [
            "pytest",
            "Playwright"
        ],
        "Deployment": [
            "Docker Compose",
            "Caddy",
            "Prometheus"
        ]
    },
    "gallery": [
        {
            "id": 1,
            "title": "Landing",
            "description": "Public landing: quality gates, quarantine, reconciliation, and data contract as the product promise.",
            "src": "/images/portofolio/de/DataLoom-Landing.png"
        },
        {
            "id": 2,
            "title": "Dashboard",
            "description": "24 hour summary, pipeline health, and latest runs across three demo projects.",
            "src": "/images/portofolio/de/DataLoom-Dashboard.png"
        },
        {
            "id": 3,
            "title": "Pipeline Canvas",
            "description": "Source, validate, clean, transform, aggregate, and sink nodes with deterministic validation.",
            "src": "/images/portofolio/de/DataLoom-Pipeline-Canvas.png"
        },
        {
            "id": 4,
            "title": "Run Monitor",
            "description": "Node timeline, rows in and out, quarantine counts, gate checklist, and live logs.",
            "src": "/images/portofolio/de/DataLoom-Run-Detail.png"
        },
        {
            "id": 5,
            "title": "Quarantine and Reconciliation",
            "description": "Rejected rows with reason codes, ratio against project threshold, and reconciliation status.",
            "src": "/images/portofolio/de/DataLoom-Quarantine.png"
        },
        {
            "id": 6,
            "title": "Data Contract",
            "description": "Project policy, four gate rules, and per pipeline row validation rules with enforcement links.",
            "src": "/images/portofolio/de/DataLoom-Data-Contract.png"
        }
    ]
}
```

## Assets

Source: `https://github.com/aldyardnsyh/DataLoom/tree/main/docs/screenshots`, all 1440x900 desktop captures from the same demo QA suite. Crop rule per DECISION-004: wider than 16:9 is center cropped on width, taller is top anchored. All seven staged files are already 1440x900 so crop yields 1440x810.

Temp dir: `C:\Users\aldya\AppData\Local\Temp\opencode\dataloom\`

| Temp file | Target public path |
|---|---|
| 01-landing.png | /images/portofolio/de/DataLoom-Landing.png |
| 02-dashboard.png | /images/portofolio/de/DataLoom-Dashboard.png |
| 07-pipeline-canvas.png | /images/portofolio/de/DataLoom-Pipeline-Canvas.png |
| 10-run-detail.png | /images/portofolio/de/DataLoom-Run-Detail.png |
| 11-data-quarantine.png | /images/portofolio/de/DataLoom-Quarantine.png |
| 12-data-contract.png | /images/portofolio/de/DataLoom-Data-Contract.png |
| 13-agents.png | spare, agent workspace proof |

Selected 6 of 7 for gallery. Card image uses Landing. Agent screenshot kept as spare evidence, not in gallery.

## Claim evidence (README quotes)

1. Quarantine with reason: "Setiap baris yang gagal validasi masuk karantina dengan `_reason_code`, bukan dibuang diam-diam."
2. Four deterministic gates: "Empat aturan dievaluasi kode, bukan opini model: skema valid, rasio karantina di bawah ambang, rekonsiliasi baris Silver dan Gold, dan tidak ada usulan agent yang menunggu keputusan."
3. Printed contract: "Aturan validasi dan ambang proyek dibaca di `/data-contract`, bukan tersembunyi di kepala seseorang."
4. Verification block: "Backend: `pytest tests/unit` 320 passed, 0 failed", "Demo visual: suite browser 58/58 langkah lulus, `assert_no_console_errors` pass, 33 screenshot di `docs/screenshots/`", "Web: `npm run typecheck` exit 0, `npm run lint` exit 0, `npm run build` compile + 25/25 halaman sukses."
5. Limits stated: "Tidak ada streaming sub-detik. Ini batch dan mikro-batch, bukan Kafka." and "Angka performa dan akurasi tidak diklaim sampai diukur di lingkungan nyata."
6. Gallery source: "Galeri lengkap 27 tangkapan layar ada di `docs/GALLERY.md`" and GALLERY.md lists 33 captures desktop plus mobile.

## Live check

https://www.dataloom.web.id/ fetched live: renders Indonesian landing with gate checklist, quarantine pillar, and demo CTA. Valid.
