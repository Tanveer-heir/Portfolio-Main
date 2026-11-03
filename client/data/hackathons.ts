// Your hackathons and honors.
//   image:   a picture in data/images/hackathons, for example 'images/hackathons/heathack.jpg'
//   url:     the event or write-up page (the "View Details" button)
//   demoUrl: link to the working project (the "Live Demo" button)
//   repoUrl: link to public source code (the "Source" button)
//   award:   leave it out if you did not win an award
//   draft:   true hides the entry from the website.
import type { Hackathon } from '../src/types';

export const hackathons: Hackathon[] = [
  {
    id: '1',
    name: 'Hack for Impact',
    theme: 'The Global Innovation Challenge · UWA × Venture UWA × Indo-Australian Chamber of Commerce',
    projectTitle: 'Agriculture Hackathon Track',
    description: 'Won the Agriculture Hackathon track as 1 of 110 selected from 1,500+ applicants.',
    date: '2026',
    award: '🏆 Winner',
    tags: ['Agriculture', 'Innovation'],
  },
  {
    id: '2',
    name: 'De-Code the District: GOBS Hackathon',
    theme: 'FEED 2026 · AEEE',
    projectTitle: 'Building-Level Heat-Risk Tool',
    description: 'Placed 1st among 40+ national teams with a building-level heat-risk tool.',
    date: '2026',
    award: '🏆 1st Prize',
    tags: ['Heat Risk', 'Geospatial'],
  },
  {
    id: '3',
    name: 'RESCOMM 2025',
    theme: 'Research Communication Conclave · Ashoka University',
    projectTitle: 'Selected Participant',
    description: 'Selected to participate in the Research Communication Conclave at Ashoka University.',
    date: '2025',
    tags: ['Science Communication'],
  },
];
