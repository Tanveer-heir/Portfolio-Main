// Your work history, newest first. Leave out endDate to show "Present".
//   url:    link to the organization's website (optional)
//   accent: true highlights the entry on the timeline
//   draft:  true hides the entry from the website.
//
// CONFIRM: these entries were not written from your real CV. They are still visible on the
// website, so correct each one, or add draft: true to hide it.
import type { Experience } from '../src/types';

export const experience: Experience[] = [
  {
    id: '1',
    role: 'Research Assistant — Geospatial Analysis',
    organization: 'University Department of Computer Science',
    startDate: '2025',
    description:
      'Leading land degradation mapping projects across Dharwad and Navalgund using Python, Rasterio, and remote sensing datasets.',
    tags: ['Python', 'Rasterio', 'GIS', 'Research'],
    accent: true,
  },
  {
    id: '2',
    role: 'Fullstack Developer — Environmental Tools',
    organization: 'Freelance / Academic Projects',
    startDate: '2024',
    endDate: '2024',
    description:
      'Built drug access dashboards and heat risk APIs using React, FastAPI, and PostgreSQL. Designed end-to-end data pipelines.',
    tags: ['React', 'FastAPI', 'PostgreSQL', 'Docker'],
  },
  {
    id: '3',
    role: 'Hardware Prototyping Lead',
    organization: 'University Electronics Lab',
    startDate: '2023',
    endDate: '2024',
    description:
      'Designed custom PCBs in KiCad, hand-soldered perfboard circuits, and developed C firmware for IoT sensor networks.',
    tags: ['C', 'KiCad', 'Embedded', 'IoT'],
  },
  {
    id: '4',
    role: 'Hackathon Competitor & Mentor',
    organization: 'Multiple National Hackathons',
    startDate: '2023',
    endDate: '2023',
    description:
      'Participated in and mentored at hackathons focused on "Design for Billions" — building inclusivity-driven solutions under ₹5,000.',
    tags: ['Hackathon', 'Design', 'Leadership'],
  },
];
