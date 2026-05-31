// Blog "Highlights" — liputan media tentang Aldy Ardiansyah dari Program Studi
// TRPL Sekolah Vokasi UGM (trpl.sv.ugm.ac.id). Ditulis ulang secara faktual
// dengan menonjolkan keterlibatan Aldy. Setiap entri menghasilkan satu halaman
// statis ber-schema BlogPosting untuk SEO + GEO.

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] };

export interface Highlight {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  dateDisplay: string;
  category: string;
  role: string;
  team?: string[];
  tags: string[];
  coverImage: string | null;
  sourceName: string;
  sourceUrl: string;
  content: Block[];
}

export const highlights: Highlight[] = [
  {
    slug: 'juara-2-hackathon-elevaite-indonesia-2025',
    title: 'Runner-Up at Hackathon elevAIte Indonesia 2025',
    description:
      'Aldy Ardiansyah and team "Utusan Sultan X" won 2nd place at Hackathon elevAIte Indonesia 2025, organized by Microsoft, Kemkominfo, and elevAIte Hub.',
    date: '2025-06-21',
    dateDisplay: 'June 21, 2025',
    category: 'Award',
    role: 'AI Developer',
    team: ['Aldy Ardiansyah', 'Yodhimas Geffananda', 'Mahendra Yuda Pradana'],
    tags: ['Artificial Intelligence', 'Hackathon', 'Microsoft', 'National Competition'],
    coverImage: '/images/highlights/juara-2-hackathon-elevaite-indonesia-2025.jpg',
    sourceName: 'TRPL SV UGM',
    sourceUrl:
      'https://trpl.sv.ugm.ac.id/2025/06/21/tim-trpl-ugm-raih-juara-2-hackathon-elevaite-2025/',
    content: [
      {
        type: 'p',
        text: 'Team "Utusan Sultan X" — consisting of Aldy Ardiansyah, Yodhimas Geffananda, and Mahendra Yuda Pradana from the Software Engineering Technology (TRPL) program at the Vocational School of Universitas Gadjah Mada — secured 2nd place at Hackathon elevAIte Indonesia 2025, a national-scale competition organized by Microsoft, Kemkominfo Digital, the Biji-Biji Initiative, and elevAIte Hub.',
      },
      {
        type: 'p',
        text: 'The online competition challenged young innovators across Indonesia to build Artificial Intelligence solutions that address local challenges with national impact. Running from April to May 2025, participants received exclusive mentoring from AI experts, soft-skill training, and opportunities to expand their professional networks.',
      },
      {
        type: 'h2',
        text: 'Impact and Recognition',
      },
      {
        type: 'p',
        text: 'The team built an AI-based solution judged for its applicable impact and high sustainability. Beyond technical capability, the achievement reflected strong collaboration, communication, and social vision. The innovation directly supports SDG 9 (Industry, Innovation, and Infrastructure) and SDG 4 (Quality Education).',
      },
    ],
  },
  {
    slug: 'computer-vision-migas-sv-ugm-pdu',
    title: 'Computer Vision Research for the Oil & Gas Industry (SV UGM × PDU)',
    description:
      'Aldy Ardiansyah collaborated with SV UGM and PT Parama Data Unit to develop a real-time computer vision system that automatically analyzes drilling cuttings in the oil and gas industry.',
    date: '2025-10-28',
    dateDisplay: 'October 28, 2025',
    category: 'Research',
    role: 'Machine Learning Engineer / Researcher',
    team: ['Dr. Eng. Ir. Ganjar Alfian, S.T., M.Eng.', 'Aldy Ardiansyah'],
    tags: ['Computer Vision', 'Research', 'Oil & Gas', 'Deep Learning'],
    coverImage: '/images/highlights/computer-vision-migas-sv-ugm-pdu.jpg',
    sourceName: 'TRPL SV UGM',
    sourceUrl:
      'https://trpl.sv.ugm.ac.id/2025/10/28/kolaborasi-sv-ugm-dan-pdu-kembangkan-teknologi-computer-vision-untuk-analisis-cutting-di-industri-migas/',
    content: [
      {
        type: 'p',
        text: 'The Department of Electrical and Information Engineering (TEDI) at the Vocational School of UGM, in collaboration with PT Parama Data Unit (PDU), developed computer vision technology to analyze drilling cuttings in the oil and gas industry. Monitoring cuttings — the rock material produced during drilling — provides critical information about subsurface rock characteristics that was previously done manually, slowly, and with risk of human error.',
      },
      {
        type: 'p',
        text: 'The computer vision system analyzes the percentage of cuttings automatically and in real time from CCTV footage in the shale shaker area. The algorithm detects and quantifies the distributed rock areas during drilling, producing rock-composition visualizations and trend graphs that support operational decision-making.',
      },
      {
        type: 'h2',
        text: 'Aldy\u2019s Contribution',
      },
      {
        type: 'p',
        text: 'The research involved Dr. Eng. Ir. Ganjar Alfian, S.T., M.Eng. and Aldy Ardiansyah from the D4 Software Engineering Technology (TRPL) program, together with Lalu Hendra Permana Setiawan and Irfan Saputra from PT Parama Data Unit. The collaboration demonstrated that computer vision is viable for adoption as part of digital transformation in the energy and drilling sector, supporting SDG 9: Industry, Innovation, and Infrastructure.',
      },
    ],
  },
  {
    slug: 'krti-2025-technology-development',
    title: 'Indonesian Flying Robot Contest (KRTI) 2025 — UGM Overall Champion',
    description:
      'Aldy Ardiansyah represented UGM in the Technology Development division at the Indonesian Flying Robot Contest (KRTI) 2025, where UGM became the overall champion.',
    date: '2025-10-23',
    dateDisplay: 'October 23, 2025',
    category: 'Competition',
    role: 'Technology Development — Software Programmer',
    team: [
      'Aldy Ardiansyah',
      'Aditya Lucky Zulkarnaen',
      "Daffa' Abiyyu Dzulfiqar",
      'Safwan Ramadhan Arfian',
    ],
    tags: ['UAV', 'Robotics', 'Computer Vision', 'National Competition'],
    coverImage: '/images/highlights/krti-2025-technology-development.jpg',
    sourceName: 'TRPL SV UGM',
    sourceUrl:
      'https://trpl.sv.ugm.ac.id/2025/10/23/mahasiswa-trpl-sv-ugm-berpartisipasi-di-kontes-robot-terbang-indonesia-krti-2025/',
    content: [
      {
        type: 'p',
        text: 'Students from the Software Engineering Technology (TRPL) program at the Vocational School of Universitas Gadjah Mada took part in the Indonesian Flying Robot Contest (KRTI) 2025, held on 12\u201323 October 2025 at Sultan Sjahrir Air Base, Padang, in partnership with Universitas Andalas as host.',
      },
      {
        type: 'p',
        text: 'The TRPL delegation within the UGM team competed in the Technology Development division, including Aldy Ardiansyah (TRPL 2022), Aditya Lucky Zulkarnaen, Daffa\u2019 Abiyyu Dzulfiqar, and Safwan Ramadhan Arfian (TRPL 2024).',
      },
      {
        type: 'h2',
        text: 'UGM Named Overall Champion',
      },
      {
        type: 'p',
        text: 'Universitas Gadjah Mada was named the overall champion (Juara Umum) of KRTI 2025, reaffirming UGM\u2019s excellence and consistency in technology and robotics innovation. The participation reflects a commitment to developing student competencies in intelligent systems, control systems, and cross-disciplinary collaboration, aligned with SDG 4, SDG 9, and SDG 17.',
      },
    ],
  },
  {
    slug: 'mbkm-advisor-lauren-machine-learning-engineer',
    title: 'International MBKM Internship as ML Engineer at Advisor Lauren',
    description:
      'Aldy Ardiansyah joined an international MBKM internship at Advisor Lauren as a Machine Learning Engineer, working on a Woori Bank financial app and a large-scale computer vision dataset for wind turbine blade damage detection.',
    date: '2026-05-06',
    dateDisplay: 'May 6, 2026',
    category: 'Experience',
    role: 'Machine Learning Engineer',
    team: [
      'Aldy Ardiansyah (ML Engineer)',
      'Alif Rizqullah Ma\u2019ruf (Frontend)',
      'Wildan Dzaky Ramadhani (Backend)',
      'Charizza Thunjung Sukmana Putra (UI/UX)',
      'Maria Azalea Nareswari (UI/UX)',
    ],
    tags: ['Machine Learning', 'Computer Vision', 'FastAPI', 'International'],
    coverImage: '/images/highlights/mbkm-advisor-lauren-machine-learning-engineer.jpeg',
    sourceName: 'TRPL SV UGM',
    sourceUrl:
      'https://trpl.sv.ugm.ac.id/2026/05/06/mahasiswa-trpl-tingkatkan-kompetensi-melalui-proyek-teknologi-di-advisor-lauren/',
    content: [
      {
        type: 'p',
        text: 'As part of the Merdeka Belajar Kampus Merdeka (MBKM) program, Aldy Ardiansyah undertook an international internship at Advisor Lauren from 8 September 2025 to 31 January 2026, serving as a Machine Learning Engineer alongside a cross-functional team of frontend, backend, and UI/UX developers.',
      },
      {
        type: 'p',
        text: 'The team contributed to the development of a Woori Bank financial application, focused on improving the interface as well as frontend and backend development. The stack included Next.js and TypeScript on the frontend, and Python with FastAPI and Apache Airflow on the backend. The platform presents stock information, trending news, and sectoral thematic analysis for the United States and Korean markets.',
      },
      {
        type: 'h2',
        text: 'Large-Scale Computer Vision Project',
      },
      {
        type: 'p',
        text: 'Beyond app development, Aldy worked on a machine learning project focused on building a large-scale dataset for wind turbine blade damage analysis using computer vision. The project spanned dataset design, annotation, and quality evaluation, targeting 100,000 images across 14 damage classes to support an automated detection system.',
      },
      {
        type: 'p',
        text: 'The experience provided comprehensive exposure to AI-based system development and data processing, while strengthening critical thinking, precision, and cross-cultural communication — supporting SDG 4, SDG 8, and SDG 9.',
      },
    ],
  },
  {
    slug: 'juara-2-peoples-choice-samsung-innovation-campus-2023-2024',
    title: 'Runner-Up & People\u2019s Choice Award at Samsung Innovation Campus 2023/2024',
    description:
      'Aldy Ardiansyah won 2nd place and the People\u2019s Choice Award at Samsung Innovation Campus Batch 5 2023/2024 for MotoRescue, an IoT and AI-based motorcycle accident detection solution.',
    date: '2024-10-17',
    dateDisplay: 'October 17, 2024',
    category: 'Award',
    role: 'IoT & AI Developer',
    team: ['Aldy Ardiansyah', 'Yogi Pradana Isdiyanto'],
    tags: ['IoT', 'Artificial Intelligence', 'Samsung', 'National Competition'],
    coverImage: '/images/highlights/juara-2-peoples-choice-samsung-innovation-campus-2023-2024.png',
    sourceName: 'TRPL SV UGM',
    sourceUrl:
      'https://trpl.sv.ugm.ac.id/2024/10/17/mahasiswa-trpl-ugm-raih-juara-2-dan-peoples-choice-award-di-samsung-innovation-campus-2023-2024/',
    content: [
      {
        type: 'p',
        text: 'A UGM team from the Software Engineering Technology (TRPL) program won 2nd place and the People\u2019s Choice Award in the university category at Samsung Innovation Campus (SIC) Batch 5 2023/2024. The team — Aldy Ardiansyah (class of 2022) and Yogi Pradana Isdiyanto (class of 2023) — developed an innovative project called MotoRescue.',
      },
      {
        type: 'p',
        text: 'MotoRescue is an IoT and Artificial Intelligence-based solution designed to automatically detect motorcycle accidents and ensure a rapid response from hospital emergency services. The project was warmly received by judges and fellow participants, earning it the People\u2019s Choice Award as the crowd favorite.',
      },
      {
        type: 'h2',
        text: 'About the Program',
      },
      {
        type: 'p',
        text: 'Samsung Innovation Campus Batch 5 was a blended-learning education program delivered online, covering intensive training in coding & programming, IoT, and AI. Participants were challenged to build AI-driven products that solve everyday problems. The program was supported by the Ministry of Education, Culture, Research and Technology and the Ministry of Religious Affairs of Indonesia. Out of thousands of participants, only the most outstanding innovations addressing social, educational, environmental, and renewable-energy issues won awards.',
      },
    ],
  },
];

export const getHighlight = (slug: string) => highlights.find((h) => h.slug === slug);
