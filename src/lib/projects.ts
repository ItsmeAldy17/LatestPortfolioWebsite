import raw from '../data/project_details.json';

type Project = (typeof raw)[number];

// Dashboard order: ML projects first, newest first. Ranks are explicit so the
// ML-engineer identity never depends on file position. 17 = 2026 thesis web
// migration, 1 = industry deployment, rest by recency of evidence.
const ML_NEWEST_FIRST = ['17', '18', '1', '3', '2', '4', '7'];

// IoT second, newest first: BAS dashboard (2025), SleepSense, football tracker.
const IOT_AFTER_ML = ['16', '8', '9'];

export function orderedProjects(list: Project[] = raw as Project[]): Project[] {
  const byId = new Map(list.map((p) => [p.id, p]));
  const pick = (ids: string[]) =>
    ids.map((id) => byId.get(id)).filter((p): p is Project => Boolean(p));
  const head = [...pick(ML_NEWEST_FIRST), ...pick(IOT_AFTER_ML)];
  const seen = new Set(head.map((p) => p.id));
  return [...head, ...list.filter((p) => !seen.has(p.id))];
}
