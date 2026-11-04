// Your name, links and everything shown in the page header, footer and on Google.
import type { SiteData } from '../src/types';

export const site: SiteData = {
  name: 'Tanveer Singh',
  initials: 'T.S.',
  tagline: 'AI Researcher · Engineer · Maker',
  taglineDetail: 'Computer Science and AI at Plaksha University.',

  // Shown on Google and when someone shares your link.
  pageTitle: 'Tanveer Singh — AI Researcher · Engineer · Maker',
  description:
    'Tanveer Singh is a Computer Science and AI undergraduate at Plaksha University, researching NLP, misinformation, deepfake detection, geospatial ML and causal inference.',
  url: 'https://portfolio-main-one-pi.vercel.app',
  // Preview picture for shared links, 1200x630 works best. Example: 'images/profile/share.png'
  shareImage: '',

  // Leave a link empty ('') to hide it from the footer.
  social: {
    github: 'https://github.com/Tanveer-heir',
    linkedin: 'https://www.linkedin.com/in/tanveer-singh-heir/',
    instagram: 'https://www.instagram.com/heirtanveer/',
    gmail: 'tanveerheir68@gmail.com',
    outlook: 'tanveer.singh.ug25@plaksha.edu.in',
  },

  // Logo in the footer. Remove the image value ('') to hide it.
  affiliation: {
    image: 'images/logos/plaksha.png',
    alt: 'Plaksha University',
  },

  footer: {
    domains: [
      { icon: '⌘', label: 'NLP' },
      { icon: '◈', label: 'Geospatial ML' },
      { icon: '⚡', label: 'Causal Inference' },
    ],
    quote: 'Talk is cheap. Show me the code.',
    techStack: 'React · TypeScript · Vite',
    // The scrolling terminal box in the footer. It is decoration only: use [] to hide it.
    terminalLines: [
      'Probing hidden states...',
      'Fusing satellite sources...',
      'Matching waterbodies to controls...',
      'Tokenizing code-mixed text...',
      'Training on the GPU cluster...',
      'Pushing to main...',
    ],
  },
};
