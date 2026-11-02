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
    title: 'Drug Access Dashboard',
    description:
      'A full-stack platform built with FastAPI and React to analyze and visualize pharmaceutical access data across regional demographics.',
    tags: ['React', 'FastAPI', 'PostgreSQL', 'Python'],
    category: 'software',
    featured: true,
    repoUrl: 'https://github.com/Tanveer-heir/Medithon',
  },
  {
    id: '2',
    title: 'Building Heat Risk API',
    description:
      'RESTful API computing thermal risk indices for buildings using geospatial data layers and weather station feeds.',
    tags: ['FastAPI', 'GeoJSON', 'Rasterio', 'Docker'],
    category: 'software',
    featured: true,
    // The GOBS repository is private, so a Source link would show visitors a 404.
    // Once it is public, add: repoUrl: 'https://github.com/Tanveer-heir/GOBS',
  },
  {
    id: '3',
    title: 'Ensemble Learning Bias–Variance Study',
    description:
      'An empirical machine learning study analyzing ensemble methods such as Bagging, Boosting, Voting, and Stacking to understand the bias–variance tradeoff using cross-validation and ROC-AUC evaluation.',
    tags: ['Machine Learning', 'Python', 'Scikit-learn', 'Ensemble Learning'],
    category: 'research',
    repoUrl: 'https://github.com/Tanveer-heir/BreastCancer_Prediction',
  },
  {
    id: '4',
    title: 'GOODWORDS - AI Toxicity Filter',
    description:
      'An AI-powered communication assistant that detects toxic language and suggests respectful alternatives in real time, helping create safer and more constructive online conversations.',
    tags: ['AI', 'Python', 'Flask', 'NLP', 'BERT'],
    category: 'design',
    repoUrl: 'https://github.com/Tanveer-heir/Toxicity-Detector',
  },
  {
    id: '5',
    title: 'Contact API Backend',
    description:
      'A RESTful Node.js and Express API for handling website contact form submissions with structured routing, controllers, and middleware-based architecture.',
    tags: ['Node.js', 'Express', 'REST API', 'JavaScript'],
    category: 'software',
    featured: true,
    repoUrl: 'https://github.com/Tanveer-heir/contact_api',
  },
  {
    id: '6',
    title: 'AI Waste Management System',
    description:
      'An AI-based system that helps users properly manage and segregate waste by providing guidance on recycling, disposal methods, and environmental impact.',
    tags: ['Artificial Intelligence', 'Machine Learning', 'Python', 'Web Interface'],
    category: 'software',
    liveUrl: 'https://tanveer-heir.github.io/Intellisort/',
    repoUrl: 'https://github.com/Tanveer-heir/Intellisort',
  },
];
