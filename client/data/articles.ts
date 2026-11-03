// Your articles, newest first.
//   url:   link to the full article. The title becomes clickable.
//   image: a cover picture in data/images/articles, for example 'images/articles/raster.png'
//   draft: true hides the article from the website.
import type { Article } from '../src/types';

export const articles: Article[] = [
  {
    id: '1',
    title: 'A World Within a Forest: India’s Hidden Biodiversity Crisis',
    excerpt: 'Why Northeast India is so rich in species, and what is putting that biodiversity at risk.',
    publishedAt: '1 Apr 2026 · The Shillong Times',
    tags: ['Biodiversity', 'Northeast India'],
    url: 'https://theshillongtimes.com/2026/04/01/a-world-within-a-forest-indias-hidden-biodiversity-crisis/',
  },
  {
    id: '2',
    title: 'Engineering the Clean Water',
    excerpt: 'How data-driven algorithms can help water-treatment teams choose the right adsorbent for a contaminant and location.',
    publishedAt: '6 Feb 2026 · The Morung Express',
    tags: ['Algorithms', 'Clean Water'],
    url: 'https://morungexpress.com/engineering-the-clean-water',
  },
  {
    id: '3',
    title: 'When AI Revives the Lost: The New Age of De-Extinction',
    excerpt: 'How AI could help reconstruct ancient DNA, and the limits of bringing extinct species back.',
    publishedAt: '4 Oct 2025 · The Shillong Times',
    tags: ['AI', 'De-Extinction', 'Biodiversity'],
    url: 'https://theshillongtimes.com/2025/10/04/when-ai-revives-the-lost-the-new-age-of-de-extinction/',
  },
  {
    id: '4',
    title: 'TinyML: The Small Technology Tackling the Biggest Climate Challenge',
    excerpt: 'How running AI on low-power devices could cut the energy use and cost of climate-monitoring sensors.',
    publishedAt: '3 Sep 2025 · The Morung Express',
    tags: ['TinyML', 'Climate Tech'],
    url: 'https://morungexpress.com/tinyml-the-small-technology-tackling-the-biggest-climate-challenge',
  },
];
