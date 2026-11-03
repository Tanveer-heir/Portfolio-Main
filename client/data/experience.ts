// Your work history, newest first. Leave out endDate to show "Present".
//   url:    link to the organization's website (optional)
//   accent: true highlights the entry on the timeline
//   draft:  true hides the entry from the website.
import type { Experience } from '../src/types';

export const experience: Experience[] = [
  {
    id: '1',
    role: 'Undergraduate Research Intern — Dynamic & Temporal KG Reasoning',
    organization: 'IIT Madras · Advisors: Dr. Swapnil Sanjaykumar Mane, Prof. Rajesh Sharma',
    startDate: 'Aug 2026',
    description:
      'Conducted a systematic literature review of dynamic and temporal knowledge graphs, characterized how existing approaches model temporality, and benchmarked standard datasets and evaluation protocols to inform the group’s forthcoming study.',
    tags: ['Knowledge Graphs', 'Literature Review', 'Benchmarking'],
    accent: true,
  },
  {
    id: '2',
    role: 'Undergraduate Researcher — Crisis Misinformation Analyzer',
    organization: 'Advisor: Prof. Rajesh Sharma',
    startDate: 'Aug 2026',
    description:
      'Built an interpretable NLP pipeline over 36,645 Reddit posts on the 2026 US/Israel–Iran war, scoring 11,818 posts and linked articles on four dimensions. Replacing a weak classifier with source-credibility labels raised agreement with human annotation from 0.59 to 0.69 balanced accuracy. Across 37 activity spikes, suspicious content retained 54% of peak activity after a week, versus 33% for verified posts.',
    tags: ['Python', 'Qwen3-32B', 'Llama-3.3-70B', 'vLLM', 'pandas', 'SciPy'],
    accent: true,
  },
  {
    id: '3',
    role: 'Research Intern — Urban Heat Risk / Geospatial ML',
    organization: 'Indorama Ventures Centre for Clean Energy (IVCEE) · Advisor: Prof. Vishal Garg',
    startDate: 'Jun 2026',
    endDate: 'Jul 2026',
    description:
      'Architected UHI Scout, a QGIS plugin that computes a per-building Heat Risk Index under an IPCC-aligned framework. Engineered a Google Earth Engine pipeline fusing 8 satellite sources into a validated dataset of 1,278 buildings × 35 attributes, and surveyed 7 existing heat-risk tools to identify a research gap.',
    tags: ['PyQGIS', 'Google Earth Engine', 'Python'],
  },
  {
    id: '4',
    role: 'Undergraduate Researcher — SAMANVAYA: Indic Speech Deepfake Detection',
    organization: 'Advisor: Prof. Rajesh Sharma',
    startDate: 'Mar 2026',
    endDate: 'May 2026',
    description:
      'Designed SAMANVAYA, a multimodal audio-visual deepfake detector with parallel Mamba encoders and cross-modal gating, and introduced AVISDD to assess generalization to Indic speech. Achieved 0.99 AUC / 0.98 macro-F1 in-distribution and 0.92 AUC / 0.92 macro-F1 zero-shot on Hindi HAV-DF.',
    tags: ['Mamba', 'mHuBERT-147', 'VideoMAE', 'PyTorch'],
  },
  {
    id: '5',
    role: 'Research Intern — Causal Inference & Remote Sensing',
    organization: 'ICTD Lab, IIT Delhi · Advisor: Prof. Aaditeshwar Seth',
    startDate: 'Feb 2026',
    endDate: 'Oct 2026',
    description:
      'Matched 192 desilted waterbodies in Maharashtra to untreated controls, reducing max |SMD| from 0.68 to 0.05. Developed a Sentinel-1/2 surface-water pipeline spanning 1,096 waterbody-years, estimated causal effects with rainfall-matched DiD, and authored the methods and results of the paper.',
    tags: ['Causal Inference', 'Google Earth Engine', 'Sentinel-1/2', 'DiD'],
  },
];
