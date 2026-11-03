// The first screen of the home page.
import type { HeroData } from '../src/types';

export const hero: HeroData = {
  overline: 'Tanveer Singh · AI Researcher · Engineer · Maker',
  headline: 'Crafting the future',
  headlineLines: ['one', 'project at a time.'],
  subtitle:
    'Computer Science and AI undergraduate at Plaksha University, researching NLP, misinformation, deepfake detection, geospatial ML and causal inference.',
  // A button is hidden automatically if the page it opens has no content yet.
  buttons: [
    { label: 'View Projects', to: '/projects' },
    { label: 'Read Research', to: '/research' },
  ],
};
