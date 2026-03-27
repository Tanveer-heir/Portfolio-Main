/* ============================================
   TYPE DEFINITIONS — Portfolio Domain Models
   ============================================
   Enhanced for Phase 6: Data Decoupling
   - Geo-visualization fields for projects
   - Constraint tracking for hackathons
   - Physical engineering fields for hobbies
   - Section metadata for centralized headings
   ============================================ */

// ——— Shared Primitives ———

export interface GeoPoint {
  lat: number;
  lng: number;
  label?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: '1:1' | '4:3' | '16:9' | '3:2';
}

export interface StatItem {
  value: string;
  label: string;
}

// ——— HERO ———

export interface HeroData {
  overline: string;
  titleLines: string[];
  titleAccent: string;
  subtitle: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
}

// ——— ABOUT ———

export interface AboutData {
  initials: string;
  lead: string;
  body: string[];
  stats: StatItem[];
}

// ——— PROJECT ———

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: 'software' | 'hardware' | 'research' | 'design';
  imageUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  location?: GeoPoint;
  coordinates?: [number, number];
  scale?: 'micro' | 'local' | 'regional' | 'national' | 'global';
}

// ——— RESEARCH ———

export interface ResearchPaper {
  id: string;
  title: string;
  abstract: string;
  authors: string[];
  publicationDate: string;
  journal?: string;
  conference?: string;
  doi?: string;
  pdfUrl?: string;
  tags: string[];
  status?: 'published' | 'preprint' | 'in-review' | 'working-paper';
  citationCount?: number;
}

// ——— ARTICLE ———

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  publishedAt: string;
  readingTime: number;
  tags: string[];
  coverImageUrl?: string;
  slug: string;
}

// ——— HACKATHON ———

export interface Hackathon {
  id: string;
  name: string;
  theme: string;
  projectTitle: string;
  description: string;
  date: string;
  duration: string;
  award?: string;
  demoUrl?: string;
  repoUrl?: string;
  teamSize?: number;
  imageUrl?: string;
  budget: string;
  budgetAmount: number;
  constraints: string[];
  tags: string[];
}

// ——— EDUCATION ———

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear?: number;
  gpa?: string;
  highlights: string[];
  logoUrl?: string;
}

// ——— SKILL ———

export interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category: 'language' | 'framework' | 'tool' | 'hardware' | 'platform';
  iconUrl?: string;
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
  subtitle?: string;
  type: 'professional' | 'academic' | 'volunteer';
  startDate: string;
  endDate?: string;
  description: string;
  highlights: string[];
  tags: string[];
  accent?: boolean;
}

// ——— HOBBY ———

export interface Hobby {
  id: string;
  title: string;
  description: string;
  category: 'build' | 'experiment' | 'craft' | 'exploration';
  imageUrl?: string;
  tags: string[];
  materials: string[];
  gallery: GalleryImage[];
  difficulty?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  buildTime?: string;
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
  icon: string;
}

// ——— CONTACT ———

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// ——— SECTION METADATA ———

export interface SectionMeta {
  label: string;
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
}

// ——— MASTER DATA SHAPE ———

export interface PortfolioData {
  hero: HeroData;
  about: AboutData;
  sectionMeta: Record<string, SectionMeta>;
  projects: Project[];
  research: ResearchPaper[];
  experience: Experience[];
  hackathons: Hackathon[];
  articles: Article[];
  skills: SkillCategory[];
  education: Education[];
  hobbies: Hobby[];
}
