// Your name, links and everything shown in the page header, footer and on Google.
import type { SiteData } from '../src/types';

export const site: SiteData = {
  name: 'Tanveer Singh',
  initials: 'T.S.',
  tagline: 'Engineer · Maker · Researcher',
  taglineDetail: 'Bridging software with the physical world.',

  // Shown on Google and when someone shares your link.
  pageTitle: 'Tanveer Singh — Engineer · Maker · Researcher',
  description:
    'Portfolio of Tanveer Singh — bridging software programming with physical engineering. Fullstack developer, hardware tinkerer and researcher.',
  url: 'https://portfolio-main-one-pi.vercel.app',
  // Preview picture for shared links, 1200x630 works best. Example: 'images/profile/share.png'
  shareImage: '',

  // Leave a link empty ('') to hide it from the footer.
  social: {
    github: 'https://github.com/Tanveer-heir',
    linkedin: '',
    twitter: '',
    email: '',
  },

  // Logo in the footer. Remove the image value ('') to hide it.
  affiliation: {
    image: 'images/logos/plaksha.png',
    alt: 'Plaksha University',
  },

  footer: {
    domains: [
      { icon: '⌘', label: 'Software' },
      { icon: '⚡', label: 'Hardware' },
      { icon: '◈', label: 'Geospatial' },
    ],
    quote: 'Talk is cheap. Show me the code.',
    techStack: 'React · TypeScript · Vite · Firebase',
    // The scrolling terminal box in the footer. It is decoration only: use [] to hide it.
    terminalLines: [
      'Scanning hardware traces...',
      'Warming up the soldering iron...',
      'Loading GIS layers...',
      'Rebuilding spatial index...',
      'Compiling firmware...',
      'Pushing to main...',
    ],
  },
};
