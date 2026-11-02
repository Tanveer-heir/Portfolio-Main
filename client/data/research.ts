// Your research papers.
//   url:    link to the paper online (the "Read Paper" button)
//   pdf:    a PDF in data/files, for example 'files/my-paper.pdf' (the "Download PDF" button)
//   status: 'published', 'preprint', 'in-review' or 'working-paper'
//   draft:  true hides the paper from the website.
//
// The two entries below are examples and stay hidden. Replace them with your real papers and
// remove the draft line. The Research page and menu link appear as soon as one paper is visible.
import type { ResearchPaper } from '../src/types';

export const research: ResearchPaper[] = [
  {
    id: '1',
    draft: true,
    title: 'Placeholder: Multi-Scale Spatial Analysis for Land Degradation',
    abstract:
      'A comprehensive study applying geospatial techniques to assess environmental degradation patterns at village, tehsil, and district scales...',
    authors: ['Author One', 'Author Two'],
    year: '2025',
    tags: ['geospatial', 'remote-sensing', 'python'],
    status: 'published',
    url: '',
    pdf: '',
  },
  {
    id: '2',
    draft: true,
    title: 'Placeholder: Embedded Systems for Precision Agriculture',
    abstract:
      'Design and implementation of a low-power sensor network leveraging C firmware and custom PCBs for real-time soil moisture monitoring...',
    authors: ['Author One'],
    year: '2024',
    tags: ['embedded', 'C', 'IoT', 'PCB'],
    status: 'working-paper',
    url: '',
    pdf: '',
  },
];
