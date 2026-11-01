export const education = {
  start: '2022',
  end: '2026',
  degree: 'B.Tech Computer Science & Artificial Intelligence',
  institution: 'Indraprastha Institute of Information Technology Delhi (IIIT-D)',
  cgpa: 'CGPA: 8.8 / 10.0',
  honor: "Dean's Merit List",
  notes: [
    'Relevant Coursework: Operating Systems, GPU Computing, Deep Learning, Distributed Systems, Computer Networks.',
    'Teaching Assistant: Mentored 120+ undergraduates in Systems Programming with GDB & Valgrind.',
  ],
};

export const experience = [
  {
    tag: 'Open Source Fellow',
    highlight: true,
    period: '2024',
    title: 'GSoC Contributor @ Wagtail CMS',
    description:
      'Google Summer of Code: Refactored asynchronous worker queue hooks and image renditions pipeline, reducing database lock contention by 34% across high-traffic multi-tenant sites.',
  },
  {
    tag: 'Hackathons',
    period: '2023 - 24',
    title: 'HackIIIT Winner & SIH Finalist',
    description:
      'Awarded 1st place at HackIIIT for creating an on-device OCR scanner with offline edge inference under 50MB runtime memory footprint.',
  },
  {
    tag: 'Teaching & Community',
    period: '2023 - Pres',
    title: 'Systems Programming Workshops',
    description:
      'Peer Tutor @ IIIT Delhi: Mentored 120+ undergraduates in pointer arithmetic, memory alignment, POSIX threads concurrency, and assembly level debugging with GDB.',
  },
];
