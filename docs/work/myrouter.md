# MyRouter Entry Payload (id 23)

## Entry JSON

```json
{
    "id": "23",
    "name": "MyRouter AI Routing Gateway",
    "role": "Full-Stack Developer",
    "timeline": "2026",
    "status": "Done",
    "github_link": "https://github.com/aldyardnsyh/MyRouter",
    "demo_link": null,
    "release_link": "https://github.com/aldyardnsyh/MyRouter/releases/latest",
    "card_image_src": "/images/portofolio/web/Cover-MyRouter.png",
    "category": "Web",
    "overview": "Self-hosted AI routing gateway: one OpenAI-compatible endpoint for many upstream providers (OpenAI, Anthropic, Gemini, DeepSeek, any OpenAI-compatible gateway) with automatic fallback, per-key access limits, and a dashboard. Ships as a single Go binary with the React console embedded and SQLite storage, so there are no external services to operate.",
    "challenge": "Giving every client one stable base URL while upstreams fail in different ways: rate limits, timeouts, 5xx, network errors, and billing cutoffs each need their own fallback trigger, per-key and per-route guard policies must hold under concurrency, and cost accounting has to stay honest against official catalog prices instead of inventing numbers.",
    "result": "Delivered a working gateway with virtual model aliases backed by ordered primary to fallback chains, server-side skills injected as system context on every request, live observability with per-request traces, and reproducible demo screenshots generated through the public admin API by seed scripts rather than mocked UI state.",
    "statistics": {
        "Upstream protocols": "OpenAI, Anthropic, Gemini wire formats",
        "Release": "v0.1.10",
        "Storage": "Embedded SQLite, no external services",
        "Verification": "go test plus npm typecheck"
    },
    "technologies_grouped": {
        "Backend": [
            "Go 1.23+",
            "SQLite"
        ],
        "Frontend": [
            "React 18",
            "TypeScript 5.6",
            "Tailwind CSS 3.4"
        ],
        "AI / Gateway": [
            "OpenAI-compatible endpoint",
            "Fallback chains",
            "Server-side skills",
            "models.dev catalog pricing"
        ],
        "Quality": [
            "go test",
            "npm typecheck",
            "E2E API harness",
            "Secret scan scripts"
        ],
        "Deployment": [
            "Single binary",
            "Docker",
            "Windows tray app"
        ]
    },
    "gallery": [
        {
            "id": 1,
            "title": "Dashboard",
            "description": "Live routing, provider health, throughput chart with 24h to 30d ranges, and recent activity.",
            "src": "/images/portofolio/web/MyRouter-Dashboard.png"
        },
        {
            "id": 2,
            "title": "Providers",
            "description": "Upstream endpoints, credentials, health, and per-provider tabs for overview, models, and guard policy.",
            "src": "/images/portofolio/web/MyRouter-Providers.png"
        },
        {
            "id": 3,
            "title": "Routes",
            "description": "Virtual model aliases with ordered primary to fallback chains and per-category triggers.",
            "src": "/images/portofolio/web/MyRouter-Routes.png"
        },
        {
            "id": 4,
            "title": "Guard",
            "description": "RPM and TPM caps, daily and monthly token limits, concurrency, IP and device limits with auto-blocking.",
            "src": "/images/portofolio/web/MyRouter-Guard.png"
        },
        {
            "id": 5,
            "title": "Skills",
            "description": "Built-in and custom skills with bindings plus a knowledge drawer for stored items.",
            "src": "/images/portofolio/web/MyRouter-Skills.png"
        },
        {
            "id": 6,
            "title": "Test Lab",
            "description": "Playground for sending real prompts through a route and seeing which provider and model answered.",
            "src": "/images/portofolio/web/MyRouter-Playground.png"
        }
    ]
}
```

## Aset (crop 16:9 di temp, belum disalin ke repo)

Sumber: `https://raw.githubusercontent.com/aldyardnsyh/MyRouter/main/assets/screenshots/`, semua 2160x1350, crop tinggi dari ATAS per DECISION-004 menjadi 2160x1215:

| File temp | Ukuran crop | Tujuan di repo (disarankan) |
|---|---|---|
| `C:\Users\aldya\AppData\Local\Temp\opencode\myrouter\dashboard-16x9.png` | 2160x1215 | `public/images/portofolio/web/MyRouter-Dashboard.png` |
| `C:\Users\aldya\AppData\Local\Temp\opencode\myrouter\providers-16x9.png` | 2160x1215 | `public/images/portofolio/web/MyRouter-Providers.png` |
| `C:\Users\aldya\AppData\Local\Temp\opencode\myrouter\routes-16x9.png` | 2160x1215 | `public/images/portofolio/web/MyRouter-Routes.png` |
| `C:\Users\aldya\AppData\Local\Temp\opencode\myrouter\guard-16x9.png` | 2160x1215 | `public/images/portofolio/web/MyRouter-Guard.png` |
| `C:\Users\aldya\AppData\Local\Temp\opencode\myrouter\skills-16x9.png` | 2160x1215 | `public/images/portofolio/web/MyRouter-Skills.png` |
| `C:\Users\aldya\AppData\Local\Temp\opencode\myrouter\playground-16x9.png` | 2160x1215 | `public/images/portofolio/web/MyRouter-Playground.png` |

Cover `Cover-MyRouter.png` belum ada dan perlu dibuat dari dashboard crop atau screenshot baru saat integrasi.

## Bukti klaim per fakta (dari README main)

1. Tagline "One endpoint. Every model." dan "Self-hosted AI routing gateway: a single OpenAI-compatible endpoint for many upstream providers, with automatic fallback, per-key access limits, and a dashboard. Ships as one binary with the web UI embedded." mendukung overview.
2. Tabel Features: providers "OpenAI, Anthropic, Gemini, DeepSeek and any OpenAI-compatible gateway behind a single /v1 base URL" mendukung statistics upstream protocols.
3. Tabel Features: routes "Virtual model aliases with an ordered primary to fallback chain and per-category triggers (429, timeout, 5xx, network, billing)" mendukung result dan gallery Routes.
4. Tabel Features: skills "Server-side context injected automatically" plus section Skills (global bindings, built-ins xerj, ai-memory, chat-knowledge, vision, memory, core) mendukung result dan gallery Skills.
5. Tabel Features: guard "RPM/TPM, daily and monthly token caps, concurrency, IP and device limits, auto-blocking, per-key and per-route policies" mendukung challenge dan gallery Guard.
6. Tabel Features: observability "Live routing map, hourly/daily charts, per-request trace with every attempt, token and cost accounting from official catalog prices" mendukung gallery Dashboard.
7. Tabel Features: single binary "Go server with the React console embedded; SQLite storage, no external services" mendukung statistics storage.
8. Badges: Go 1.23+, React 18, TypeScript 5.6, Tailwind 3.4, SQLite embedded, Windows/Linux/macOS, plus section Test (`go test ./...`, `cd web && npm run typecheck`) mendukung technologies_grouped dan statistics verification.
9. Section Screenshots: "Every screen is captured from a real instance (tests/seed_demo.py builds the demo state through the public admin API, so nothing is mocked in the UI)" mendukung result.
10. Section Test Lab / playground (`playground.png`) plus "Use Test Lab to send a real prompt through a route" mendukung gallery Test Lab.
11. Rilis: badge release dan tautan download `releases/latest` ada; halaman releases/latest ter-fetch dan memuat "Release v0.1.10", jadi `release_link` diisi dan statistics Release "v0.1.10".
12. Desktop app Windows (tray, `-no-tray`, installer shortcut) dan section Docker mendukung technologies_grouped Deployment.
