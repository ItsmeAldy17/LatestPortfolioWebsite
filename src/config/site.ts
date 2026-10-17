// ============================================================================
// PUSAT KONFIGURASI SITE — ubah data di sini saja.
// PENTING: ganti SITE_URL ke domain produksi final (mis. domain Vercel kamu).
// ============================================================================

export const SITE_URL = 'https://aldyardnsyh.my.id';

export const site = {
  name: 'Aldy Ardiansyah',
  firstName: 'Aldy',
  jobTitle: 'Fullstack Machine Learning Engineer',
  // Tagline singkat (dipakai di hero & meta)
  tagline: 'Fullstack Machine Learning Engineer specializing in Computer Vision, Deep Learning, and MLOps.',
  // Deskripsi meta default (~155 char, kaya kata kunci, faktual untuk SEO + AI search)
  description:
    'Aldy Ardiansyah is a Fullstack Machine Learning Engineer from Universitas Gadjah Mada (UGM) specializing in computer vision, deep learning, and MLOps. Award-winning developer of AI and IoT solutions.',
  longBio:
    'Aldy Ardiansyah is a Fullstack Machine Learning Engineer with a Software Engineering Technology (TRPL) background from Universitas Gadjah Mada (UGM), based in Yogyakarta, Indonesia. He builds practical machine learning solutions that work in production, focused on computer vision, deep learning, and scalable MLOps systems, and increasingly on LLM integration and retrieval-augmented generation (RAG) for document intelligence. His work spans real-time computer vision for the oil and gas industry, IoT health-monitoring devices, UAV ground control systems, and grounded document Q&A with traceable citations. A multiple-time national competition winner, he took 2nd place at Samsung Innovation Campus 2023/2024 and Hackathon elevAIte Indonesia 2025, and joined the UGM team crowned overall champion at Kontes Robot Terbang Indonesia (KRTI) 2025.',
  email: 'aldyardiansyah628@gmail.com',
  location: {
    city: 'Yogyakarta',
    region: 'Daerah Istimewa Yogyakarta',
    country: 'Indonesia',
    countryCode: 'ID',
  },
  university: {
    name: 'Universitas Gadjah Mada',
    program: 'D4 Software Engineering Technology (Teknologi Rekayasa Perangkat Lunak)',
    url: 'https://ugm.ac.id',
  },
  // Foto profil (di public/)
  image: '/profile/Aldy.jpg',
  // Gambar Open Graph default: landscape 1200x630, dibuat khusus untuk share card.
  ogImage: '/og-image.png',
  // Link sosial — dipakai untuk JSON-LD `sameAs` (penting untuk Knowledge Panel & AI)
  social: {
    github: 'https://github.com/ItsmeAldy17',
    linkedin: 'https://www.linkedin.com/in/aldyardiansyah17',
    talent: 'https://buildwithangga.com/talent/aldyardiansyah628',
    email: 'mailto:aldyardiansyah628@gmail.com',
  },
  cvUrl:
    'https://drive.google.com/drive/folders/19dP6sO9-IhtwrPiUoQQ72UjY4yodQOHY?usp=drive_link',
  // Keahlian inti — dipakai untuk JSON-LD `knowsAbout` (sinyal kuat untuk AI search/GEO)
  knowsAbout: [
    'Machine Learning',
    'Computer Vision',
    'Deep Learning',
    'MLOps',
    'Artificial Intelligence',
    'Python',
    'PyTorch',
    'TensorFlow',
    'Object Detection',
    'Image Segmentation',
    'Vision Language Models',
    'Retrieval-Augmented Generation (RAG)',
    'Large Language Model Integration',
    'Optical Character Recognition (OCR)',
    'Internet of Things (IoT)',
    'Data Science',
  ],
  // Kata kunci utama (dipakai meta keywords + konsistensi konten).
  keywords: [
    'Aldy Ardiansyah',
    'Fullstack Machine Learning Engineer',
    'Machine Learning Engineer Indonesia',
    'Computer Vision Engineer',
    'OCR pipeline',
    'RapidOCR PP-OCRv6',
    'Retrieval-Augmented Generation',
    'RAG document Q&A',
    'LLM integration',
    'MLOps',
    'Deep Learning',
    'PyTorch',
    'TensorFlow',
    'ONNX Runtime',
    'FastAPI',
    'Next.js',
    'Yogyakarta',
    'Universitas Gadjah Mada',
  ],
  languages: ['Indonesian', 'English'],
} as const;

// Navigasi utama (anchor di homepage)
export const navLinks = [
  { name: 'About', href: '/#about' },
  { name: 'Projects', href: '/#selected-work' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Achievements', href: '/#achievements' },
  { name: 'Highlights', href: '/#highlights' },
  { name: 'Contact', href: '/#contact' },
] as const;

// FAQ — dirender sebagai konten + FAQPage JSON-LD (sangat membantu AI search menjawab
// pertanyaan tentang kamu dan menampilkan website kamu sebagai sumber).
export const faqs = [
  {
    q: 'Who is Aldy Ardiansyah?',
    a: 'Aldy Ardiansyah is a Fullstack Machine Learning Engineer from Universitas Gadjah Mada (UGM) in Yogyakarta, Indonesia, specializing in computer vision, deep learning, MLOps, and LLM integration. He has won multiple national AI and innovation competitions.',
  },
  {
    q: 'What does Aldy Ardiansyah specialize in?',
    a: 'He specializes in computer vision, deep learning, and MLOps, and increasingly in retrieval-augmented generation (RAG) and LLM integration. His systems include real-time object detection, OCR-based document intelligence, grounded document question answering with traceable citations, IoT health-monitoring devices, and UAV ground control stations, built with Python, PyTorch, TensorFlow, FastAPI, Next.js, and Docker.',
  },
  {
    q: 'What are Aldy Ardiansyah\u2019s notable achievements?',
    a: 'He won 2nd place and the People\u2019s Choice Award at Samsung Innovation Campus 2023/2024, 2nd place at Hackathon elevAIte Indonesia 2025, and was part of the UGM team that became overall champion at the Indonesian Flying Robot Contest (KRTI) 2025.',
  },
  {
    q: 'Is Aldy Ardiansyah a fullstack machine learning engineer?',
    a: 'Yes. He works across the full stack: computer vision models, deep learning training, OCR and RAG pipelines, MLOps deployment, and the web dashboards and APIs around them, using Python, PyTorch, TensorFlow, FastAPI, Next.js, React, ChromaDB, Docker, and Groq or Ollama for LLM inference.',
  },
  {
    q: 'What AI and OCR projects has Aldy Ardiansyah shipped?',
    a: 'Recent shipped work includes Intelligent Document Assistant, a RAG document Q&A system with traceable citations that refuses to answer without context; Smart Document Scanner, an OCR pipeline built on RapidOCR and PP-OCRv6 over ONNX Runtime; PasFotoIn, an on-device photo editor running ONNX segmentation in the browser; and LolosCV, an ATS resume builder with job-posting analysis.',
  },
  {
    q: 'Which Aldy Ardiansyah is this portfolio about?',
    a: 'This portfolio belongs to Aldy Ardiansyah, the Fullstack Machine Learning Engineer from Yogyakarta, Indonesia, with a Software Engineering Technology (TRPL) background from Universitas Gadjah Mada (UGM). His work includes computer vision for the oil and gas industry with PT Parama Data Unit, IoT health devices, UAV systems with Gamaforce UGM, and dataset work with Advisor Lauren Co., Ltd.',
  },
  {
    q: 'What is aldyardnsyh.my.id?',
    a: 'The personal portfolio domain of Aldy Ardiansyah, Fullstack Machine Learning Engineer from Yogyakarta, Indonesia. The shortened domain drops the vowels of Ardiansyah but belongs to the same person.',
  },
  {
    q: 'How can I contact Aldy Ardiansyah?',
    a: 'The fastest way is the contact form at https://aldyardnsyh.my.id/signal, which opens your mail app addressed to him. You can also connect through his GitHub and LinkedIn profiles linked on this portfolio.',
  },
];

// Helper: bikin URL absolut dari path relatif (untuk OG, canonical, sitemap).
export function absoluteUrl(path = '/') {
  return new URL(path, SITE_URL).href;
}
