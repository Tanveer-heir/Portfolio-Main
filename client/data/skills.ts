// Your skills, grouped into categories.
//   level: optional 'beginner', 'intermediate', 'advanced' or 'expert'. Adds a small colored dot.
//   warm:  true shows the skill in orange instead of blue
import type { SkillCategory } from '../src/types';

const names = (list: string[], warm = false) => list.map((name) => ({ name, warm }));

export const skills: SkillCategory[] = [
  {
    name: 'Languages & Tools',
    icon: '⌘',
    skills: names(['Python', 'C/C++', 'SQL', 'Java', 'JavaScript', 'Git', 'Linux', 'Docker', 'GPU/HPC Training Pipelines']),
  },
  {
    name: 'ML/DL & NLP',
    icon: '◈',
    skills: names(['PyTorch', 'TensorFlow', 'Hugging Face Transformers', 'scikit-learn', 'spaCy', 'sentence-transformers', 'Weak Supervision']),
  },
  {
    name: 'Models & Retrieval',
    icon: '⚙',
    skills: names(['Mamba (SSMs)', 'RoBERTa', 'T5', 'Qwen', 'LSTM', 'n-gram LMs', 'mHuBERT-147', 'VideoMAE', 'FAISS', 'BM25', 'DPR', 'RAG']),
  },
  {
    name: 'Geospatial & Causal Inference',
    icon: '⚡',
    skills: names(['QGIS/PyQGIS', 'Google Earth Engine', 'XGBoost', 'Random Forest', 'PSM', 'DiD', 'Double ML'], true),
  },
];
