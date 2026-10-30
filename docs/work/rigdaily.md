# RigDaily — Entry 26 Payload (NEW)

Target: append to `src/data/project_details.json` as id "26".
Assets: place cropped 16:9 files from `C:\Users\aldya\AppData\Local\Temp\opencode\rigdaily\` to `public/images/portofolio/web/` with names below. Cover reuses Dashboard crop.
Live: VALID (https://rigdaily.web.id/ loads, demo at /login?demo=1). README branch: master (main returns 404).
Desktop: Electron NSIS x64 .exe offline-first noted in result and technologies.

## Entry JSON

```json
{
    "id": "26",
    "name": "RigDaily Daily Drilling Report System",
    "role": "Full-Stack Developer",
    "timeline": "2026",
    "status": "Done",
    "github_link": "https://github.com/aldyardnsyh/RigDaily",
    "demo_link": "https://rigdaily.web.id/",
    "card_image_src": "/images/portofolio/web/RigDaily-Menu-Dashboard.png",
    "category": "Web",
    "overview": "Daily well operations reporting that connects rig and office in one controlled report flow: DDR, 24 hour time breakdown, NPT, cost and AFE, billing, personnel, marine, safety, and rig to office sync. Runs as a Next.js web app for the office and an offline-first Electron desktop .exe with local SQLite for the rig, syncing through an outbox when the network returns. Seven roles from Rig Clerk to Administrator have server-checked permissions, and every approved report locks with a numbered amendment trail.",
    "challenge": "Keeping one report consistent across two disconnected environments: the 1,440 minute day must validate with no gaps and no overlaps before submission, depth must never move backward, and rig submissions must never overwrite an office-approved final but land in a manual conflict queue. Seven roles share one dataset, so every permission is checked on the server rather than hidden in the menu.",
    "result": "Delivered a live platform at rigdaily.web.id with a public landing plus demo mode covering 7 roles, a five-stage report flow from Draft to Locked with audit log and PDF distribution, and a desktop NSIS x64 .exe that writes to on-device SQLite first and syncs via outbox. Covered by 360 Vitest unit tests plus Playwright end-to-end suites.",
    "statistics": {
        "Time validation": "1,440 minutes per day, no gaps",
        "Roles": "7 with server-checked permissions",
        "Unit tests": "360 Vitest tests",
        "Desktop": "Electron NSIS x64 .exe, SQLite local"
    },
    "technologies_grouped": {
        "Frontend": [
            "Next.js 14",
            "React 18",
            "TypeScript",
            "Tailwind CSS 3"
        ],
        "Backend": [
            "PostgreSQL",
            "Drizzle ORM",
            "Zod",
            "pdfkit"
        ],
        "Desktop": [
            "Electron 31",
            "better-sqlite3",
            "NSIS x64 installer"
        ],
        "Auth": [
            "Cookie session",
            "JWT jose"
        ],
        "Quality": [
            "Vitest",
            "Playwright"
        ],
        "Deployment": [
            "Vercel"
        ]
    },
    "gallery": [
        {
            "id": 1,
            "title": "Login",
            "description": "Office login with demo mode entry covering all 7 roles.",
            "src": "/images/portofolio/web/RigDaily-Menu-Login.png"
        },
        {
            "id": 2,
            "title": "Dashboard",
            "description": "Office overview of rigs, reports, and pending approvals.",
            "src": "/images/portofolio/web/RigDaily-Menu-Dashboard.png"
        },
        {
            "id": 3,
            "title": "DDR Form",
            "description": "Daily drilling report form following rig work order from well header to next-day plan.",
            "src": "/images/portofolio/web/RigDaily-Menu-DDR.png"
        },
        {
            "id": 4,
            "title": "Time Breakdown",
            "description": "24 hour breakdown validated to exactly 1,440 minutes with IADC and NPT codes.",
            "src": "/images/portofolio/web/RigDaily-Menu-TimeBreakdown.png"
        },
        {
            "id": 5,
            "title": "Cost and AFE",
            "description": "Daily and cumulative cost tracked against AFE usage per well.",
            "src": "/images/portofolio/web/RigDaily-Menu-Cost.png"
        },
        {
            "id": 6,
            "title": "Sync Center",
            "description": "Outbox queue showing rig to office sync state with conflict handling.",
            "src": "/images/portofolio/web/RigDaily-Menu-SyncCenter.png"
        }
    ]
}
```

## Assets (temp, cropped 16:9 top-anchored per DECISION-004, 1430x804)

- `C:\Users\aldya\AppData\Local\Temp\opencode\rigdaily\RigDaily-Menu-Login.png` (from 01-login.png)
- `C:\Users\aldya\AppData\Local\Temp\opencode\rigdaily\RigDaily-Menu-Dashboard.png` (from 02-dashboard.png, also cover)
- `C:\Users\aldya\AppData\Local\Temp\opencode\rigdaily\RigDaily-Menu-DDR.png` (from 03-ddr.png)
- `C:\Users\aldya\AppData\Local\Temp\opencode\rigdaily\RigDaily-Menu-TimeBreakdown.png` (from 04-time-breakdown.png)
- `C:\Users\aldya\AppData\Local\Temp\opencode\rigdaily\RigDaily-Menu-Cost.png` (from 15-cost.png)
- `C:\Users\aldya\AppData\Local\Temp\opencode\rigdaily\RigDaily-Menu-SyncCenter.png` (from 19-sync-center.png)
- Raw downloads kept in same temp dir: 01, 02, 03, 04, 15, 16, 19, 20. Billing (16) and Admin (20) downloaded but not selected.

## Claim evidence (README master + live site)

- "DDR, time breakdown 24 jam, NPT, biaya dan AFE, billing, personel, marine, safety, sinkronisasi rig ke kantor" -> overview modules, gallery DDR/TimeBreakdown/Cost/SyncCenter.
- "Next.js App Router 14.2.35, React 18.3.1, TypeScript 5.5.4" -> technologies Frontend.
- "PostgreSQL + Drizzle ORM, PGlite demo, SQLite better-sqlite3 desktop" -> technologies Backend and Desktop.
- "Electron 31.7.7, electron-builder NSIS x64, RigDaily-Internal-0.1.0-x64.exe" -> statistics Desktop, result.
- "Zod 3.25.76, Tailwind 3.4.7, pdfkit 0.15.2, jose 5.10.0" -> technologies Backend/Frontend/Auth.
- "Vitest 360 test, Playwright + browser-qa" -> result and Quality.
- "Vercel web, www.rigdaily.web.id" -> Deployment, demo_link.
- Live site: "1.440 menit per hari divalidasi penuh", "7 peran", "Web di kantor, .exe di rig", five-stage flow Draft to Terkunci, audit log, outbox sync -> overview, challenge, result, statistics.
- License: PSHT proprietary, no em dash used in payload.
