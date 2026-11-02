// Your hobby builds.
//   image:      a picture in data/images/hobbies, for example 'images/hobbies/perfboard.jpg'
//   category:   'build', 'experiment', 'craft' or 'exploration'
//   difficulty: 'beginner', 'intermediate', 'advanced' or 'expert'
//   draft:      true hides the entry from the website.
//
// CONFIRM: these entries were not written from your real builds. They are still visible on the
// website, so correct each one and add a photo, or add draft: true to hide it.
import type { Hobby } from '../src/types';

export const hobbies: Hobby[] = [
  {
    id: '1',
    title: 'Custom Perfboard — "T.S." Initials',
    description:
      'Hand-soldered LED perfboard circuit displaying initials using through-hole components and custom wire routing. A weekend build combining precision soldering with artistic layout.',
    category: 'build',
    tags: ['Soldering', 'Perfboard', 'LED', 'Through-hole'],
    materials: ['Perfboard', '22AWG solid core wire', '5mm LEDs', '220Ω resistors', 'Solder'],
    difficulty: 'intermediate',
    buildTime: 'Weekend build',
  },
  {
    id: '2',
    title: 'Physics Concept Experiments',
    description:
      'Desktop experiments visualizing electromagnetic induction, resonance, and wave interference using salvaged components and DIY measurement rigs.',
    category: 'experiment',
    tags: ['Physics', 'Electromagnetics', 'DIY Lab'],
    materials: ['Salvaged motors', 'Neodymium magnets', 'Copper wire', 'Breadboard'],
    difficulty: 'advanced',
    buildTime: 'Ongoing',
  },
  {
    id: '3',
    title: 'Mechanical Assembly Projects',
    description:
      'Precision mechanical builds including custom enclosures, gear systems, and 3D-printed fixtures for sensor mounting in field deployments.',
    category: 'craft',
    tags: ['Mechanical', '3D Print', 'Precision', 'Assembly'],
    materials: ['PLA/PETG filament', 'Aluminum extrusion', 'M3 hardware', 'Bearings'],
    difficulty: 'advanced',
    buildTime: '3-day project',
  },
  {
    id: '4',
    title: 'Signal Processing Breadboard',
    description:
      'Audio frequency filter chain built on breadboard — low-pass, band-pass, and notch filter stages with op-amp active topology.',
    category: 'build',
    tags: ['Op-Amp', 'Filters', 'Analog', 'Audio'],
    materials: ['TL072 op-amps', 'Ceramic capacitors', 'Metal film resistors', 'Breadboard'],
    difficulty: 'expert',
    buildTime: 'Weekend build',
  },
];
