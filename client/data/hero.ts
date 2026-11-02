// The first screen of the home page.
import type { HeroData } from '../src/types';

export const hero: HeroData = {
  overline: 'Tanveer Singh · Engineer · Maker · Researcher',
  headline: 'Crafting the future',
  headlineLines: ['one', 'project at a time.'],
  subtitle:
    'Fullstack developer, hardware tinkerer and researcher. I build things that bridge software with the physical world.',
  // A button is hidden automatically if the page it opens has no content yet.
  buttons: [
    { label: 'View Projects', to: '/projects' },
    { label: 'Read Research', to: '/research' },
  ],
};
