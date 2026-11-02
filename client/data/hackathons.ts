// Your hackathons.
//   image:   a picture in data/images/hackathons, for example 'images/hackathons/heathack.jpg'
//   url:     the event or write-up page (the "View Details" button)
//   demoUrl: link to the working project (the "Live Demo" button)
//   repoUrl: link to public source code (the "Source" button)
//   award:   leave it out if you did not win an award
//   draft:   true hides the entry from the website.
//
// CONFIRM: these entries were not written from your real records. They are still visible on the
// website, so correct each one (especially the awards), or add draft: true to hide it.
import type { Hackathon } from '../src/types';

export const hackathons: Hackathon[] = [
  {
    id: '1',
    name: 'Design for Billions',
    theme: 'Inclusivity-driven design for underserved populations',
    projectTitle: 'AccessRx — Pharmaceutical Access Mapper',
    description:
      'Built a geo-aware tool in 24 hours to map drug availability deserts using public health data. Budget: ₹3,500.',
    date: 'Jan 2025',
    duration: '24 hours',
    award: '🏆 1st Place',
    budget: '₹3,500',
    tags: ['React', 'FastAPI', 'GeoJSON', 'Inclusivity'],
  },
  {
    id: '2',
    name: 'HeatHack 2024',
    theme: 'Climate resilience in urban environments',
    projectTitle: 'ThermalShield — Building Heat Risk Analyzer',
    description:
      'Developed a REST API and dashboard calculating thermal risk indices from raster weather data. Budget: ₹4,200.',
    date: 'Sep 2024',
    duration: '24 hours',
    award: '🥈 Runner Up',
    budget: '₹4,200',
    tags: ['Python', 'Rasterio', 'API', 'Climate'],
  },
  {
    id: '3',
    name: 'MakeHack 2024',
    theme: 'Hardware prototyping for rural connectivity',
    projectTitle: 'SoilPulse — IoT Soil Monitor',
    description:
      'Hand-soldered a sensor network on perfboards with custom C firmware for real-time soil moisture readings. Budget: ₹4,800.',
    date: 'Mar 2024',
    duration: '24 hours',
    budget: '₹4,800',
    tags: ['C', 'PCB', 'IoT', 'Embedded'],
  },
];
