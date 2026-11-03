// The heading and sentence at the top of each section. Numbers (01, 02...) are added automatically.
import type { SectionText } from '../src/types';

export const sections: Record<string, SectionText> = {
  about: {
    title: 'About Me',
    subtitle: 'A student researcher working across NLP, geospatial ML and causal inference.',
  },
  projects: {
    title: 'Projects',
    subtitle: 'Paper reproductions, research extensions and tools built from scratch.',
  },
  research: {
    title: 'Publications',
    subtitle: 'Papers on hallucination detection in code-mixed text and engineering communication training.',
  },
  experience: {
    title: 'Research Experience',
    subtitle: 'Research roles across NLP, deepfake detection, urban heat risk and causal inference.',
  },
  hackathons: {
    title: 'Hackathons & Honors',
    subtitle: 'Competition wins and selections.',
  },
  articles: {
    title: 'Articles',
    subtitle: 'Science communication in The Shillong Times and The Morung Express.',
  },
  skills: {
    title: 'Technical Skills',
    subtitle: 'Languages, models and methods I work with.',
  },
  education: {
    title: 'Education',
    subtitle: 'Degree and school results.',
  },
  hobby: {
    title: 'Builds & Outreach',
    subtitle: 'Hands-on projects outside my research.',
  },
  contact: {
    title: 'Get in Touch',
    subtitle: 'Have a question, collaboration idea, or just want to say hello? No login required.',
    align: 'center',
  },
};
