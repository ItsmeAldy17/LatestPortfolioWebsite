import raw from '../data/project_details.json';

type Project = (typeof raw)[number];

// Dashboard order: ML projects first, newest first. Ranks are explicit so the
// ML-engineer identity never depends on file position. 22 = RAG assistant and
// 20 = OCR service (both late 2026), 17 = 2026 thesis web migration,
// 1 = industry deployment, rest by recency of evidence.
const ML_NEWEST_FIRST = ['22', '20', '17', '18', '1', '3', '2', '4', '7'];

// IoT second, newest first: BAS dashboard (2025), SleepSense, football tracker.
const IOT_AFTER_ML = ['16', '8', '9'];

// Web third, newest first: PasFotoIn (Oct 2026), then LolosCV (Sep 2026).
const WEB_AFTER_IOT = ['21', '19'];

export function orderedProjects(list: Project[] = raw as Project[]): Project[] {
  const byId = new Map(list.map((p) => [p.id, p]));
  const pick = (ids: string[]) =>
    ids.map((id) => byId.get(id)).filter((p): p is Project => Boolean(p));
  const head = [...pick(ML_NEWEST_FIRST), ...pick(IOT_AFTER_ML), ...pick(WEB_AFTER_IOT)];
  const seen = new Set(head.map((p) => p.id));
  return [...head, ...list.filter((p) => !seen.has(p.id))];
}
