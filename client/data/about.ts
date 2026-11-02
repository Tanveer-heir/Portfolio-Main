// The About section. Put **two stars** around words to highlight them.
import type { AboutData } from '../src/types';

export const about: AboutData = {
  // Your photo, for example 'images/profile/me.jpg'. Your initials show until you add one.
  photo: '',
  lead: "I'm a multidisciplinary engineering student who thrives at the intersection of **software systems** and **physical hardware**.",
  body: [
    // CONFIRM: check that these two paragraphs describe your real work.
    "From building full-stack applications with React and FastAPI to soldering custom perfboards and analyzing geospatial raster datasets — I approach every problem with precision engineering and a maker's intuition.",
    'My work spans drug access tools, building heat risk APIs, geographic data visualizations, and 24-hour hackathon sprints executed under ₹5,000 budgets. I believe the best engineering happens when digital meets physical.',
  ],
  // The number boxes. Update these by hand when your numbers change.
  stats: [
    { value: '6', label: 'Projects Built' },
    { value: '3', label: 'Hackathons' },
    { value: '2', label: 'Hackathon Awards' },
    { value: '2', label: 'Domains Bridged' },
  ],
};
