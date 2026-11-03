// Your research papers.
//   venue:  where it appeared, shown next to the year
//   url:    link to the paper online (the "Read Paper" button)
//   pdf:    a PDF in data/files such as 'files/my-paper.pdf', or a web link (the "Download PDF" button)
//   status: 'published', 'preprint', 'in-review' or 'working-paper'
//   draft:  true hides the paper from the website.
import type { ResearchPaper } from '../src/types';

export const research: ResearchPaper[] = [
  {
    id: '1',
    title:
      'Does the Truthfulness Signal Survive Code-Mixing? Probing Hidden States for Hallucination Detection in Hinglish',
    abstract:
      'Tests whether hallucination probes trained on hidden states still work on Hindi-English code-mixed text, using a 5,674-item Hindi, English and Hinglish QA benchmark and 17,022 labeled responses from three open-weight LLMs. Cross-lingual transfer to Hinglish reaches an AUROC of 0.88–0.99.',
    authors: ['Tanveer Singh'],
    venue: 'arXiv:2609.22138',
    year: '2026',
    tags: ['NLP', 'Hallucination Detection', 'Code-Mixing', 'LLMs'],
    status: 'preprint',
    url: 'https://arxiv.org/abs/2609.22138',
    pdf: 'https://arxiv.org/pdf/2609.22138',
  },
  {
    id: '2',
    title:
      'Examining the Efficacy of Using a Studio Lab for Integrated Communication Training of Engineering Students',
    abstract:
      'Examines a studio lab for integrated communication training. The remedial cohort showed an 87% relative improvement (38.42% → 71.97%), significant by paired t-test.',
    authors: ['Tanveer Singh', 'et al.'],
    venue: 'FIE',
    year: '2026',
    tags: ['Engineering Education', 'Communication'],
    // Add url: '...' once you have the link to the paper.
  },
];
