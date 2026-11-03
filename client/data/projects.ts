// Your projects. Copy a block to add a new one, and give it a new id.
//   image:    a picture in data/images/projects, for example 'images/projects/heat-api.png'
//   liveUrl:  link to the working project (the "Live Demo" button). Leave it out to hide the button.
//   repoUrl:  link to public source code (the "Source" button). Leave it out to hide the button.
//   category: 'software', 'hardware', 'research' or 'design'. This drives the filter buttons.
//   draft:    true hides the project from the website.
import type { Project } from '../src/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Phonotactic Complexity of Indic Languages',
    description:
      'Extended bits-per-phoneme analysis (Pimentel et al., TACL 2020) to Hindi, Tamil, Telugu and English with trigram and LSTM models. Dravidian languages are phonotactically less complex than English, and complexity correlates near-perfectly with mBERT tokenizer fertility.',
    tags: ['Python', 'n-gram LMs', 'LSTM', 'Linguistics'],
    category: 'research',
    image: 'images/projects/phonotactic-complexity.svg',
    featured: true,
    repoUrl: 'https://github.com/Tanveer-heir/phonotactic-complexity-indic-languages',
  },
  {
    id: '2',
    title: 'NLP From Scratch',
    description:
      '15 NLP implementations in raw PyTorch, each scoped to one concept and one paper: Word2Vec, BiLSTM-CRF, Transformers, a tiny GPT with KV-caching, LoRA, knowledge distillation and more.',
    tags: ['PyTorch', 'Transformers', 'NLP'],
    category: 'research',
    image: 'images/projects/nlp-from-scratch.svg',
    featured: true,
    repoUrl: 'https://github.com/Tanveer-heir/nlp-from-scratch',
  },
  {
    id: '3',
    title: 'DPR & RAG Reproduction with Hybrid Retrieval',
    description:
      'Independently reproduced DPR and RAG on SQuAD and TriviaQA, with a hard-negative mining experiment and a hybrid BM25 + dense pipeline. Hybrid retrieval dominates on SQuAD, while hard-negative dense retrieval prevails on TriviaQA.',
    tags: ['PyTorch', 'FAISS', 'BM25', 'RAG'],
    category: 'research',
    image: 'images/projects/rag-retrieval.svg',
    featured: true,
    repoUrl: 'https://github.com/Tanveer-heir/rag-retrieval-system',
  },
  {
    id: '4',
    title: 'Frame Detection in Political News: US→India Transfer',
    description:
      'Replicated weakly-supervised frame classification (Roy & Goldwasser, NAACL 2019) and tested zero-shot transfer on a 3M+ Indian headline corpus. RoBERTa reached 72–74% on US headlines and 68% zero-shot on Indian headlines, with 18.7% mapping to no US category.',
    tags: ['RoBERTa', 'spaCy', 'scikit-learn', 'Weak Supervision'],
    category: 'research',
    image: 'images/projects/frame-detection.svg',
    featured: true,
    repoUrl: 'https://github.com/Tanveer-heir/frame-detection-india-transfer',
  },
  {
    id: '5',
    title: 'UHI Scout',
    description:
      'A QGIS plugin that computes a per-building Heat Risk Index under an IPCC-aligned framework, backed by a Google Earth Engine pipeline fusing 8 satellite sources into a dataset of 1,278 buildings in Bakkarwala, Delhi.',
    tags: ['PyQGIS', 'Google Earth Engine', 'Python', 'Geospatial'],
    category: 'software',
    image: 'images/projects/uhi-scout.svg',
    featured: true,
    repoUrl: 'https://github.com/Tanveer-heir/uhi-scout',
  },
  {
    id: '6',
    title: 'Multilingual AI Crop Doctor',
    description:
      'Crop disease diagnosis over WhatsApp in Hindi, Tamil, Telugu, Bengali or English. A vision and LLM pipeline identifies the disease and severity, then replies with treatment options and the nearest Krishi Vigyan Kendra.',
    tags: ['Python', 'FastAPI', 'Gemini Vision', 'Agritech'],
    category: 'software',
    image: 'images/projects/crop-doctor.svg',
    repoUrl: 'https://github.com/Tanveer-heir/Agritech',
  },
  {
    id: '7',
    title: 'CoREVision',
    description:
      'An agentic RAG pipeline that connects administrative land data from the CoreStack API with satellite data from Google Earth Engine, answering natural-language agricultural queries for farmers and planners.',
    tags: ['smolagents', 'Gemini', 'ChromaDB', 'Google Earth Engine'],
    category: 'software',
    image: 'images/projects/corevision.svg',
    repoUrl: 'https://github.com/Tanveer-heir/Core_Stack',
  },
  {
    id: '8',
    title: 'Pramaan-X (Team Project)',
    description:
      'A three-service digital forensics prototype for manipulation detection, PRNU device attribution and source tracing, with one gateway returning a single investigation record for each upload.',
    tags: ['Python', 'Digital Forensics', 'APIs'],
    category: 'software',
    image: 'images/projects/pramaan-x.svg',
    repoUrl: 'https://github.com/Tanveer-heir/Pramaan-X',
  },
  {
    id: '9',
    title: 'GOODWORDS - AI Toxicity Filter',
    description:
      'A Chrome extension that detects toxic messages as you type on platforms like Discord, Slack and Reddit and suggests polite alternatives, backed by a Flask and PyTorch service.',
    tags: ['Chrome Extension', 'Flask', 'PyTorch', 'Transformers'],
    category: 'software',
    image: 'images/projects/goodwords.svg',
    repoUrl: 'https://github.com/Tanveer-heir/Toxicity-Detector',
  },
  {
    id: '10',
    title: 'Ensemble Learning Bias–Variance Study',
    description:
      'An empirical study of Bagging, Boosting, Voting and Stacking that examines how each method affects the bias–variance tradeoff.',
    tags: ['Machine Learning', 'Python', 'Scikit-learn', 'Ensemble Learning'],
    category: 'research',
    image: 'images/projects/ensemble-learning.svg',
    repoUrl: 'https://github.com/Tanveer-heir/BreastCancer_Prediction',
  },
  {
    id: '11',
    title: 'Medithon (Team Project)',
    description:
      'A drug recommendation and safety analysis platform with natural-language search, drug interaction checks and patient-specific recommendations, using FastAPI, React and FAISS.',
    tags: ['FastAPI', 'React', 'FAISS', 'Ollama'],
    category: 'software',
    image: 'images/projects/medithon.svg',
    repoUrl: 'https://github.com/Tanveer-heir/Medithon',
  },
  {
    id: '12',
    title: 'Intellisort',
    description:
      'An AI-powered web app that analyzes waste and suggests recycling and disposal options.',
    tags: ['Next.js', 'AI', 'Sustainability'],
    category: 'software',
    image: 'images/projects/intellisort.svg',
    liveUrl: 'https://tanveer-heir.github.io/Intellisort/',
    repoUrl: 'https://github.com/Tanveer-heir/Intellisort',
  },
];
