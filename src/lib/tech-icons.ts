// Single source of truth for how a technology name becomes a badge:
// which brand mark to show, what label to print, and what to fall back to.
//
// Every file listed here exists in /public/icons. A name that has no file is
// deliberately NOT mapped: it renders an honest monogram instead of a broken
// image or a borrowed logo. Add a real mark only when the asset ships.

type Icon = { file: string; ext: 'svg' | 'png' };

// Keys are normalised names (see normTech below), not display names.
const ICONS: Record<string, Icon> = {
  // Languages and runtimes
  python: { file: 'Python', ext: 'svg' },
  typescript: { file: 'TypeScript', ext: 'svg' },
  'node.js': { file: 'Node.js', ext: 'svg' },
  kotlin: { file: 'Kotlin', ext: 'png' },
  'c++': { file: 'C Plus Plus', ext: 'png' },
  'c++17': { file: 'C Plus Plus', ext: 'png' },

  // ML, CV, OCR
  pytorch: { file: 'Pytorch', ext: 'svg' },
  tensorflow: { file: 'Tensorflow', ext: 'svg' },
  'tensorflow lite': { file: 'Tensorflow', ext: 'svg' },
  onnx: { file: 'ONNX', ext: 'svg' },
  'onnx runtime': { file: 'ONNX', ext: 'svg' },
  'onnx runtime web': { file: 'ONNX', ext: 'svg' },
  keras: { file: 'Keras', ext: 'svg' },
  'scikit learn': { file: 'Scikit-learn', ext: 'svg' },
  opencv: { file: 'OpenCV', ext: 'svg' },
  detectron2: { file: 'Detectron2', ext: 'png' },
  coco: { file: 'COCO', ext: 'png' },
  numpy: { file: 'NumPy', ext: 'svg' },
  pandas: { file: 'Pandas', ext: 'svg' },
  matplotlib: { file: 'Matplotlib', ext: 'png' },
  seaborn: { file: 'Seaborn', ext: 'png' },
  rapidocr: { file: 'RapidOCR', ext: 'png' },
  'rapidocr pp ocrv6': { file: 'RapidOCR', ext: 'png' },
  paddleocr: { file: 'PaddleOCR', ext: 'svg' },
  tesseract: { file: 'Tesseract', ext: 'png' },
  rag: { file: 'RAG', ext: 'png' },
  llm: { file: 'LLM-Integration', ext: 'png' },
  'llm fallback chain': { file: 'LLM-Integration', ext: 'png' },

  // Web, backend, data
  fastapi: { file: 'FastAPI', ext: 'svg' },
  flask: { file: 'Flask', ext: 'png' },
  laravel: { file: 'Laravel', ext: 'png' },
  'next.js': { file: 'Next.js', ext: 'svg' },
  react: { file: 'React', ext: 'svg' },
  'react js': { file: 'React', ext: 'svg' },
  'tailwind css': { file: 'TailwindCSS', ext: 'svg' },
  tailwindcss: { file: 'TailwindCSS', ext: 'svg' },
  bootstrap: { file: 'Bootstrap', ext: 'png' },
  streamlit: { file: 'Streamlit', ext: 'png' },
  pyqt5: { file: 'PyQt5', ext: 'png' },
  swagger: { file: 'Swagger', ext: 'png' },
  'socket.io': { file: 'Socket.io', ext: 'png' },
  postgres: { file: 'PostgresSQL', ext: 'svg' },
  postgresql: { file: 'PostgresSQL', ext: 'svg' },
  postgressql: { file: 'PostgresSQL', ext: 'svg' },
  mysql: { file: 'MySQL', ext: 'svg' },
  mongodb: { file: 'MongoDB', ext: 'svg' },
  sqlite: { file: 'SQLite', ext: 'svg' },
  chromadb: { file: 'ChromaDB', ext: 'png' },
  excel: { file: 'Excel', ext: 'png' },
  grafana: { file: 'Grafana', ext: 'png' },
  mqtt: { file: 'Mqtt', ext: 'png' },
  arduino: { file: 'Arduino', ext: 'png' },
  'sd card': { file: 'SD Card', ext: 'png' },

  // LLM providers and serving
  groq: { file: 'Groq', ext: 'png' },
  ollama: { file: 'Ollama', ext: 'svg' },
  'ollama fallback': { file: 'Ollama', ext: 'svg' },

  // Platform, infra, tooling
  docker: { file: 'Docker', ext: 'svg' },
  'docker compose': { file: 'Docker', ext: 'svg' },
  git: { file: 'Git', ext: 'svg' },
  linux: { file: 'Linux', ext: 'svg' },
  vercel: { file: 'Vercel', ext: 'svg' },
  railway: { file: 'Railway', ext: 'svg' },
  render: { file: 'Render', ext: 'png' },
  supabase: { file: 'Supabase', ext: 'png' },
  firebase: { file: 'Firebase', ext: 'png' },
  maven: { file: 'Apache Maven', ext: 'png' },
  'apache maven': { file: 'Apache Maven', ext: 'png' },
  'android studio': { file: 'Android Studio', ext: 'png' },
  'google cloud': { file: 'Google Cloud', ext: 'png' },
  'google cloud console': { file: 'Google Cloud', ext: 'png' },
  'google maps': { file: 'Gmaps', ext: 'png' },
  'azure sql db': { file: 'AzureSQLDatabase', ext: 'png' },

  // Collaboration and quality
  figma: { file: 'Figma', ext: 'png' },
  trello: { file: 'Trello', ext: 'png' },
  selenium: { file: 'Selenium', ext: 'png' },
  cucumber: { file: 'Cucumber', ext: 'png' },
  telegram: { file: 'Telegram', ext: 'png' },
  'telegram api': { file: 'Telegram', ext: 'png' },
};

// Display-name overrides. JSON already carries good labels, so this stays small.
const LABELS: Record<string, string> = {
  llm: 'LLM Integration',
  tailwindcss: 'Tailwind CSS',
  postgressql: 'PostgreSQL',
};

// "Next.js 16" and "Next.js" resolve to the same mark. The version is only
// stripped when it is a separate token, so "PP-OCRv6" keeps its identity.
export const normTech = (name: string) =>
  name
    .toLowerCase()
    .trim()
    .replace(/\s+\d[\w.+-]*$/, '')
    .replace(/[^a-z0-9+#.]+/g, ' ')
    .trim();

export type Tech = {
  name: string;
  label: string;
  icon: string | null;
  mono: string;
};

// Two initials at most, so a monogram never reads as a fake brand mark.
const monogramOf = (label: string) =>
  label
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();

export function techMeta(name: string): Tech {
  const raw = name.trim();
  const key = normTech(raw);
  const icon = ICONS[key];
  const label = LABELS[key] ?? raw;
  return {
    name: raw,
    label,
    icon: icon ? `/icons/${encodeURIComponent(icon.file)}.${icon.ext}` : null,
    mono: monogramOf(label),
  };
}

// Flatten technologies_grouped into one ordered, de-duplicated stack.
export function techStack(groups: Record<string, string[]> | undefined): Tech[] {
  const seen = new Set<string>();
  const stack: Tech[] = [];
  for (const techs of Object.values(groups ?? {})) {
    for (const name of techs) {
      const meta = techMeta(name);
      if (seen.has(meta.name)) continue;
      seen.add(meta.name);
      stack.push(meta);
    }
  }
  return stack;
}
