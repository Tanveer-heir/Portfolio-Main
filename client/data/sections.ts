// The heading and sentence at the top of each section. Numbers (01, 02...) are added automatically.
import type { SectionText } from '../src/types';

export const sections: Record<string, SectionText> = {
  about: {
    title: 'About Me',
    subtitle: 'A student who bridges the gap between software programming and physical engineering.',
  },
  projects: {
    title: 'Projects',
    subtitle: 'From code architecture and APIs to geographic data visualizations and physical builds.',
  },
  research: {
    title: 'Research Papers',
    subtitle: 'Work in geospatial analysis, embedded systems, and applied computer science.',
  },
  experience: {
    title: 'Experience',
    subtitle: 'A timeline of professional, academic, and volunteer roles.',
  },
  hackathons: {
    title: 'Hackathons',
    subtitle: '24-hour sprints, building for the community and themes that prioritize inclusivity.',
  },
  articles: {
    title: 'Articles',
    subtitle: 'Technical writing on software, hardware, and everything in between.',
  },
  skills: {
    title: 'Skills',
    subtitle: 'Proficiencies spanning software, hardware, and everything in between.',
  },
  education: {
    title: 'Education',
    subtitle: 'Current academic status, degrees, and relevant coursework.',
  },
  hobby: {
    title: 'Hobby & Builds',
    subtitle: 'Passion projects — hand-soldered circuits, physics experiments, and precision mechanical builds.',
  },
  contact: {
    title: 'Get in Touch',
    subtitle: 'Have a question, collaboration idea, or just want to say hello? No login required.',
    align: 'center',
  },
};
