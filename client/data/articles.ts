// Your articles. Add the link to where each one is published (Medium, Dev.to, your blog...).
//   url:   link to the full article. The title becomes clickable.
//   image: a cover picture in data/images/articles, for example 'images/articles/raster.png'
//   draft: true hides the article from the website.
//
// These entries have no published article behind them, so they stay hidden. To use one, add its
// url and remove the draft line. The Articles page and menu link appear once one is visible.
import type { Article } from '../src/types';

export const articles: Article[] = [
  {
    id: '1',
    draft: true,
    title: 'Building a Full-Stack Dashboard with React & FastAPI',
    excerpt: 'A walkthrough of architecting a real-time environmental monitoring dashboard from scratch...',
    publishedAt: 'Mar 2025',
    readingTime: 8,
    tags: ['react', 'fastapi', 'tutorial'],
    url: '',
  },
  {
    id: '2',
    draft: true,
    title: 'Designing Custom PCBs for IoT Sensor Networks',
    excerpt: 'From schematic capture in KiCad to hand-soldering perfboards — lessons from the field...',
    publishedAt: 'Jan 2025',
    readingTime: 12,
    tags: ['hardware', 'KiCad', 'IoT'],
    url: '',
  },
  {
    id: '3',
    draft: true,
    title: 'Understanding Raster Analysis with Rasterio',
    excerpt: 'Deep dive into zonal statistics, masking, and area calculations for geospatial raster data...',
    publishedAt: 'Nov 2024',
    readingTime: 6,
    tags: ['python', 'geospatial', 'rasterio'],
    url: '',
  },
];
