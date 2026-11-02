// Your skills, grouped into categories.
//   level: 'beginner', 'intermediate', 'advanced' or 'expert'. Controls the small colored dot.
//   warm:  true shows the skill in orange instead of blue
//
// CONFIRM: this list was not written from your CV. Remove anything you would not want to be
// asked about in an interview.
import type { SkillCategory } from '../src/types';

export const skills: SkillCategory[] = [
  {
    name: 'Languages',
    icon: '⌘',
    skills: [
      { name: 'Python', level: 'expert' },
      { name: 'C', level: 'advanced' },
      { name: 'TypeScript', level: 'advanced' },
      { name: 'JavaScript', level: 'advanced' },
      { name: 'SQL', level: 'intermediate' },
      { name: 'Rust', level: 'beginner' },
    ],
  },
  {
    name: 'Frameworks & Libraries',
    icon: '◈',
    skills: [
      { name: 'React', level: 'advanced' },
      { name: 'FastAPI', level: 'expert' },
      { name: 'Node.js', level: 'intermediate' },
      { name: 'Framer Motion', level: 'intermediate' },
      { name: 'GeoPandas', level: 'advanced' },
      { name: 'Rasterio', level: 'expert' },
    ],
  },
  {
    name: 'Tools & Platforms',
    icon: '⚙',
    skills: [
      { name: 'Git', level: 'expert' },
      { name: 'Docker', level: 'intermediate' },
      { name: 'QGIS', level: 'advanced' },
      { name: 'KiCad', level: 'advanced' },
      { name: 'VS Code', level: 'expert' },
      { name: 'Linux', level: 'advanced' },
    ],
  },
  {
    name: 'Hardware & Electronics',
    icon: '⚡',
    skills: [
      { name: 'Soldering', level: 'advanced', warm: true },
      { name: 'PCB Design', level: 'advanced', warm: true },
      { name: 'Embedded Systems', level: 'intermediate', warm: true },
      { name: 'Mechanical Eng.', level: 'intermediate', warm: true },
      { name: 'Oscilloscope', level: 'intermediate', warm: true },
      { name: 'Perfboard Builds', level: 'expert', warm: true },
    ],
  },
];
