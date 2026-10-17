import raw from '../data/project_details.json';

type Project = (typeof raw)[number];

// Kerja urutan dashboard: kategori per bidang, tiap kategori terbaru dulu.
// Ranks eksplisit supaya identitas ML-engineer tidak bergantung posisi file.
// Urutan kategori: ML -> Web -> IoT -> DE -> Mobile -> sisanya (PM, QA).

// ML, terbaru dulu: 22 = RAG assistant (Oct 2026), 20 = OCR service
// (Sep-Oct 2026), 17 = thesis web migration (2026), 18 = dataset lead
// (Sep 2025-Jan 2026), 1 = industry deployment, lalu model-era projects.
const ML_NEWEST_FIRST = ['22', '20', '17', '18', '1', '3', '2', '4', '7'];

// Web, terbaru dulu: 21 = PasFotoIn (Oct 2026), 19 = LolosCV (Sep 2026),
// 15 = Visit Bantaragung (Dec 2025-Feb 2026).
const WEB_AFTER_ML = ['21', '19', '15'];

// IoT, terbaru dulu: 16 = BAS dashboard (2025), 8 = SleepSense, 9 = tracker.
const IOT_AFTER_WEB = ['16', '8', '9'];

// DE, terbaru dulu: 6 = AI Sentiment Hub, 5 = Forex dashboard.
const DE_AFTER_IOT = ['6', '5'];

// Mobile: 10 = BIN-GO.
const MOBILE_AFTER_DE = ['10'];

// Sisanya (PM, QA), terbaru dulu: BroMo v2 -> v1, lalu Tokopedia -> BWA.
const REST_AFTER_MOBILE = ['12', '11', '14', '13'];

const GROUPED = [
  ML_NEWEST_FIRST,
  WEB_AFTER_ML,
  IOT_AFTER_WEB,
  DE_AFTER_IOT,
  MOBILE_AFTER_DE,
  REST_AFTER_MOBILE,
];

export function orderedProjects(list: Project[] = raw as Project[]): Project[] {
  const byId = new Map(list.map((p) => [p.id, p]));
  const pick = (ids: string[]) =>
    ids.map((id) => byId.get(id)).filter((p): p is Project => Boolean(p));
  const head = GROUPED.flatMap((ids) => pick(ids));
  const seen = new Set(head.map((p) => p.id));
  return [...head, ...list.filter((p) => !seen.has(p.id))];
}
