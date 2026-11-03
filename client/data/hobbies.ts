// Your builds and outreach projects.
//   image:      a picture in data/images/hobbies, for example 'images/hobbies/perfboard.jpg'
//   category:   'build', 'experiment', 'craft' or 'exploration'
//   difficulty: optional 'beginner', 'intermediate', 'advanced' or 'expert'
//   draft:      true hides the entry from the website.
import type { Hobby } from '../src/types';

export const hobbies: Hobby[] = [
  {
    id: '1',
    title: 'Project Blind Spot',
    description:
      'Co-developed a low-cost Braille printer using an XY plotter and solenoid, reducing sign cost 25×. Led the coding and research, and placed 1st among 40+ teams.',
    category: 'build',
    tags: ['Braille', 'Accessibility', 'Hardware'],
    materials: ['XY plotter', 'Solenoid'],
  },
];
