/* ============================================
   TYPE DEFINITIONS — Portfolio Domain Models
   ============================================
   The shape of every file in client/data.
   Image and file fields hold paths relative to
   client/data, or a full https:// link.
   ============================================ */

type Level = 'beginner' | 'intermediate' | 'advanced' | 'expert';

// ——— SITE ———

export interface SiteData {
  name: string;
  initials: string;
  tagline: string;
  taglineDetail: string;
  pageTitle: string;
  description: string;
  url: string;
  shareImage?: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  affiliation?: { image?: string; alt: string };
  footer: {
    domains: { icon: string; label: string }[];
    quote?: string;
    techStack?: string;
    terminalLines: string[];
  };
}

// ——— HERO ———

export interface HeroData {
  overline: string;
  headline: string;
  headlineLines: string[];
  subtitle: string;
  buttons: { label: string; to: string }[];
}

// ——— ABOUT ———

export interface AboutData {
  photo?: string;
  lead: string;
  body: string[];
  stats: { value: string; label: string }[];
}

// ——— SECTION HEADINGS ———

export interface SectionText {
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
}

export interface SectionMeta extends SectionText {
  label: string;
}

// ——— PROJECT ———

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: 'software' | 'hardware' | 'research' | 'design';
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  draft?: boolean;
}

// ——— RESEARCH ———

export interface ResearchPaper {
  id: string;
  title: string;
  abstract: string;
  authors: string[];
  venue?: string;
  year: string;
  url?: string;
  pdf?: string;
  tags: string[];
  status?: 'published' | 'preprint' | 'in-review' | 'working-paper';
  draft?: boolean;
}

// ——— ARTICLE ———

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime?: number;
  tags: string[];
  url?: string;
  image?: string;
  draft?: boolean;
}

// ——— HACKATHON ———

export interface Hackathon {
  id: string;
  name: string;
  theme: string;
  projectTitle: string;
  description: string;
  date: string;
  duration?: string;
  award?: string;
  budget?: string;
  url?: string;
  demoUrl?: string;
  repoUrl?: string;
  image?: string;
  tags: string[];
  draft?: boolean;
}

// ——— EDUCATION ———

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear?: number;
  endLabel?: string;
  grade?: string;
  highlights: string[];
  logo?: string;
  draft?: boolean;
}

// ——— SKILL ———

export interface Skill {
  name: string;
  level?: Level;
  warm?: boolean;
}

export interface SkillCategory {
  name: string;
  icon?: string;
  skills: Skill[];
}

// ——— EXPERIENCE ———

export interface Experience {
  id: string;
  role: string;
  organization: string;
  url?: string;
  startDate: string;
  endDate?: string;
  description: string;
  tags: string[];
  accent?: boolean;
  draft?: boolean;
}

// ——— HOBBY ———

export interface Hobby {
  id: string;
  title: string;
  description: string;
  category: 'build' | 'experiment' | 'craft' | 'exploration' | 'reading';
  image?: string;
  tags: string[];
  materials: string[];
  difficulty?: Level;
  buildTime?: string;
  draft?: boolean;
}

// ——— NAVIGATION ———

export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}
