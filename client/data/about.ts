// The About section. Put **two stars** around words to highlight them.
import type { AboutData } from '../src/types';

export const about: AboutData = {
  // Your photo, for example 'images/profile/me.jpg'. Your initials show until you add one.
  photo: '',
  lead: "I'm a Computer Science and AI undergraduate at Plaksha University, working across **natural language processing** and **geospatial machine learning**.",
  body: [
    'My research spans hallucination detection in code-mixed Hinglish, crisis misinformation on Reddit, multimodal deepfake detection for Indic speech, temporal knowledge graphs, urban heat risk, and causal inference from satellite data, with advisors at IIT Madras, IIT Delhi and IVCEE.',
    'Outside the lab I build and write. I co-developed a low-cost Braille printer that placed first among 40+ teams, won the Hack for Impact Agriculture track and the GOBS Hackathon, and publish science communication articles in The Shillong Times and The Morung Express.',
  ],
  // The number boxes. Update these by hand when your numbers change.
  stats: [
    { value: '5', label: 'Research Roles' },
    { value: '2', label: 'Publications' },
    { value: '3', label: 'First-Place Wins' },
    { value: '4+', label: 'Science Articles' },
  ],
};
