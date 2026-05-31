// ============================================================================
// PUSAT KONFIGURASI SITE — ubah data di sini saja.
// PENTING: ganti SITE_URL ke domain produksi final (mis. domain Vercel kamu).
// ============================================================================

export const SITE_URL = 'https://aldyardnsyh.my.id';

export const site = {
  name: 'Aldy Ardiansyah',
  firstName: 'Aldy',
  jobTitle: 'Machine Learning Engineer',
  // Tagline singkat (dipakai di hero & meta)
  tagline: 'Machine Learning Engineer specializing in Computer Vision, Deep Learning, and MLOps.',
  // Deskripsi meta default (~155 char, kaya kata kunci, faktual untuk SEO + AI search)
  description:
    'Aldy Ardiansyah is a Machine Learning Engineer from Universitas Gadjah Mada (UGM) specializing in computer vision, deep learning, and MLOps. Award-winning developer of AI and IoT solutions.',
  longBio:
    'Aldy Ardiansyah is a Machine Learning Engineer and final-year Software Engineering Technology (TRPL) student at the Vocational School of Universitas Gadjah Mada (UGM), Yogyakarta, Indonesia. He builds impactful, AI-powered solutions with a focus on computer vision, deep learning, and scalable MLOps systems. His work spans real-time computer vision for the oil & gas industry, IoT health-monitoring devices, and UAV ground control systems. He is a multiple-time national competition winner, including 2nd place at Samsung Innovation Campus 2023/2024 and the Hackathon elevAIte Indonesia 2025.',
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
  // Gambar Open Graph default (1200x630 ideal). Pakai foto profil sebagai fallback.
  ogImage: '/profile/Aldy.jpg',
  // Link sosial — dipakai untuk JSON-LD `sameAs` (penting untuk Knowledge Panel & AI)
  social: {
    github: 'https://github.com/ItsmeAldy17',
    linkedin: 'https://www.linkedin.com/in/aldyardiansyah17',
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
    'Internet of Things (IoT)',
    'Data Science',
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
    a: 'Aldy Ardiansyah is a Machine Learning Engineer from Universitas Gadjah Mada (UGM) in Yogyakarta, Indonesia, specializing in computer vision, deep learning, and MLOps. He has won multiple national AI and innovation competitions.',
  },
  {
    q: 'What does Aldy Ardiansyah specialize in?',
    a: 'He specializes in computer vision, deep learning, and MLOps, building AI-powered solutions such as real-time object detection systems, IoT health-monitoring devices, and UAV ground control stations using Python, PyTorch, and TensorFlow.',
  },
  {
    q: 'What are Aldy Ardiansyah\u2019s notable achievements?',
    a: 'He won 2nd place and the People\u2019s Choice Award at Samsung Innovation Campus 2023/2024, 2nd place at Hackathon elevAIte Indonesia 2025, and was part of the UGM team that became overall champion at the Indonesian Flying Robot Contest (KRTI) 2025.',
  },
  {
    q: 'How can I contact Aldy Ardiansyah?',
    a: 'You can reach Aldy Ardiansyah via email at aldyardiansyah628@gmail.com or connect through his GitHub and LinkedIn profiles linked on this portfolio.',
  },
];

// Helper: bikin URL absolut dari path relatif (untuk OG, canonical, sitemap).
export function absoluteUrl(path = '/') {
  return new URL(path, SITE_URL).href;
}
