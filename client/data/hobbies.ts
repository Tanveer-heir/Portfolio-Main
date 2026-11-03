// Your builds and outreach projects.
//   image:      a picture in data/images/hobbies, for example 'images/hobbies/perfboard.jpg'
//   category:   'build', 'experiment', 'craft', 'exploration' or 'reading'
//   difficulty: optional 'beginner', 'intermediate', 'advanced' or 'expert'
//   draft:      true hides the entry from the website.
import type { Hobby } from '../src/types';

export const hobbies: Hobby[] = [
  {
    id: '1',
    title: 'Project Blind Spot',
    image: 'images/hobbies/project-blind-spot.svg',
    description:
      'Co-developed a low-cost Braille printer using an XY plotter and solenoid, reducing sign cost 25×. Led the coding and research, and placed 1st among 40+ teams.',
    category: 'build',
    tags: ['Braille', 'Accessibility', 'Hardware'],
    materials: ['XY plotter', 'Solenoid'],
  },
  {
    id: '2',
    title: 'Manga, Manhwa & Donghua',
    image: 'images/hobbies/manga-and-donghua.svg',
    description: 'Outside research and building, I enjoy manga, manhwa and Chinese donghua. A few series I have enjoyed are below.',
    category: 'reading',
    tags: [
      'Black Clover',
      'Jujutsu Kaisen',
      'Tomodachi Game',
      'Hunter x Hunter',
      'Wistoria: Wand and Sword',
      'Overgeared',
      'A Wild Last Boss Appeared!',
      'A Will Eternal',
    ],
    materials: [],
  },
];
