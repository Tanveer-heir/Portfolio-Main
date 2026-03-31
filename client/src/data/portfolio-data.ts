/* ============================================
   PORTFOLIO DATA — Single Source of Truth
   ============================================
   All hardcoded content extracted from feature
   components into typed, domain-scoped exports.
   ============================================ */

import type {
  PortfolioData,
  HeroData,
  AboutData,
  SectionMeta,
  Project,
  ResearchPaper,
  Experience,
  Hackathon,
  Article,
  SkillCategory,
  Education,
  Hobby,
} from "../types";

// ——— HERO ———

const hero: HeroData = {
  overline: "Engineer · Maker · Researcher",
  titleLines: ["Crafting the", "", "project at a time."],
  titleAccent: "future",
  subtitle:
    "Fullstack developer, hardware tinkerer and published researcher. I build things that bridge software with the physical world.",
  ctaPrimary: { label: "View Projects", href: "/projects" },
  ctaSecondary: { label: "Read Research", href: "/research" },
};

// ——— ABOUT ———

const about: AboutData = {
  initials: "T.S.",
  lead: "I'm a multidisciplinary engineering student who thrives at the intersection of <strong>software systems</strong> and <strong>physical hardware</strong>.",
  body: [
    "From building full-stack applications with React and FastAPI to soldering custom perfboards and analyzing geospatial raster datasets — I approach every problem with precision engineering and a maker's intuition.",
    "My work spans drug access tools, building heat risk APIs, geographic data visualizations, and 24-hour hackathon sprints executed under ₹5,000 budgets. I believe the best engineering happens when digital meets physical.",
  ],
  stats: [
    { value: "10+", label: "Projects Built" },
    { value: "1", label: "Research Papers" },
    { value: "3+", label: "Hackathons Won" },
    { value: "2", label: "Domains Bridged" },
  ],
};

// ——— SECTION METADATA ———

const sectionMeta: Record<string, SectionMeta> = {
  about: {
    label: "01",
    title: "About Me",
    subtitle:
      "A student who bridges the gap between software programming and physical engineering.",
  },
  research: {
    label: "02",
    title: "Research Papers",
    subtitle:
      "Published work in geospatial analysis, embedded systems, and applied computer science.",
  },
  projects: {
    label: "03",
    title: "Projects",
    subtitle:
      "From code architecture and APIs to geographic data visualizations and physical builds.",
  },
  experience: {
    label: "04",
    title: "Experience",
    subtitle: "A timeline of professional, academic, and volunteer roles.",
  },
  hackathons: {
    label: "05",
    title: "Hackathons",
    subtitle:
      "24-hour sprints, building for the community and themes that prioritize inclusivity.",
  },
  skills: {
    label: "06",
    title: "Skills",
    subtitle:
      "Proficiencies spanning software, hardware, and everything in between.",
  },
  education: {
    label: "07",
    title: "Education",
    subtitle: "Current academic status, degrees, and relevant coursework.",
  },
  hobby: {
    label: "08",
    title: "Hobby & Builds",
    subtitle:
      "Passion projects — hand-soldered circuits, physics experiments, and precision mechanical builds.",
  },
  articles: {
    label: "03",
    title: "Articles",
    subtitle:
      "Technical writing on software, hardware, and everything in between.",
  },
  contact: {
    label: "✉",
    title: "Get in Touch",
    subtitle:
      "Have a project in mind, a research collaboration, or just want to say hello?",
    align: "center",
  },
};

// ——— PROJECTS ———

const projects: Project[] = [
  {
    id: "1",
    title: "Drug Access Dashboard",
    description:
      "A full-stack platform built with FastAPI and React to analyze and visualize pharmaceutical access data across regional demographics.",
    tags: ["React", "FastAPI", "PostgreSQL", "Python"],
    category: "software",
    featured: true,
    liveUrl: "#",
    repoUrl: "https://github.com/Tanveer-heir/Medithon",
    scale: "regional",
  },
  {
    id: "2",
    title: "Building Heat Risk API",
    description:
      "RESTful API computing thermal risk indices for buildings using geospatial data layers and weather station feeds.",
    tags: ["FastAPI", "GeoJSON", "Rasterio", "Docker"],
    category: "software",
    featured: true,
    repoUrl: "https://github.com/Tanveer-heir/GOBS",
    scale: "local",
  },
  {
    id: "3",
    title: "Ensemble Learning Bias–Variance Study",
    description:
      "An empirical machine learning study analyzing ensemble methods such as Bagging, Boosting, Voting, and Stacking to understand the bias–variance tradeoff using cross-validation and ROC-AUC evaluation.",
    tags: ["Machine Learning", "Python", "Scikit-learn", "Ensemble Learning"],
    category: "research",
    featured: false,
    repoUrl: "https://github.com/Tanveer-heir/BreastCancer_Prediction",
    scale: "regional",
  },
  {
    id: "4",
    title: "GOODWORDS - AI Toxicity Filter",
    description:
      "An AI-powered communication assistant that detects toxic language and suggests respectful alternatives in real time, helping create safer and more constructive online conversations.",
    tags: ["AI", "Python", "Flask", "NLP", "BERT"],
    category: "design",
    featured: false,
    repoUrl: "https://github.com/Tanveer-heir/Toxicity-Detector",
    scale: "local",
  },
  {
    id: "5",
    title: "Contact API Backend",
    description:
      "A RESTful Node.js and Express API for handling website contact form submissions with structured routing, controllers, and middleware-based architecture.",
    tags: ["Node.js", "Express", "REST API", "JavaScript"],
    category: "software",
    featured: true,
    repoUrl: "https://github.com/Tanveer-heir/contact_api",
    scale: "micro",
  },
  {
    id: "6",
    title: "AI Waste Management System",
    description:
      "An AI-based system that helps users properly manage and segregate waste by providing guidance on recycling, disposal methods, and environmental impact.",
    tags: [
      "Artificial Intelligence",
      "Machine Learning",
      "Python",
      "Web Interface",
    ],
    category: "software",
    featured: false,
    liveUrl: "https://tanveer-heir.github.io/Intellisort/",
    repoUrl: "https://github.com/Tanveer-heir/Intellisort",
  },
];

// ——— RESEARCH ———

const research: ResearchPaper[] = [
  {
    id: "1",
    title: "Placeholder: Multi-Scale Spatial Analysis for Land Degradation",
    abstract:
      "A comprehensive study applying geospatial techniques to assess environmental degradation patterns at village, tehsil, and district scales...",
    authors: ["Author One", "Author Two"],
    publicationDate: "2025",
    tags: ["geospatial", "remote-sensing", "python"],
    status: "published",
  },
  {
    id: "2",
    title: "Placeholder: Embedded Systems for Precision Agriculture",
    abstract:
      "Design and implementation of a low-power sensor network leveraging C firmware and custom PCBs for real-time soil moisture monitoring...",
    authors: ["Author One"],
    publicationDate: "2024",
    tags: ["embedded", "C", "IoT", "PCB"],
    status: "working-paper",
  },
];

// ——— EXPERIENCE ———

const experience: Experience[] = [
  {
    id: "1",
    role: "Research Assistant — Geospatial Analysis",
    organization: "University Department of Computer Science",
    subtitle: "University Department of Computer Science",
    type: "academic",
    startDate: "2025",
    description:
      "Leading land degradation mapping projects across Dharwad and Navalgund using Python, Rasterio, and remote sensing datasets.",
    highlights: [],
    tags: ["Python", "Rasterio", "GIS", "Research"],
    accent: true,
  },
  {
    id: "2",
    role: "Fullstack Developer — Environmental Tools",
    organization: "Freelance / Academic Projects",
    subtitle: "Freelance / Academic Projects",
    type: "professional",
    startDate: "2024",
    endDate: "2024",
    description:
      "Built drug access dashboards and heat risk APIs using React, FastAPI, and PostgreSQL. Designed end-to-end data pipelines.",
    highlights: [],
    tags: ["React", "FastAPI", "PostgreSQL", "Docker"],
    accent: false,
  },
  {
    id: "3",
    role: "Hardware Prototyping Lead",
    organization: "University Electronics Lab",
    subtitle: "University Electronics Lab",
    type: "academic",
    startDate: "2023",
    endDate: "2024",
    description:
      "Designed custom PCBs in KiCad, hand-soldered perfboard circuits, and developed C firmware for IoT sensor networks.",
    highlights: [],
    tags: ["C", "KiCad", "Embedded", "IoT"],
    accent: false,
  },
  {
    id: "4",
    role: "Hackathon Competitor & Mentor",
    organization: "Multiple National Hackathons",
    subtitle: "Multiple National Hackathons",
    type: "volunteer",
    startDate: "2023",
    endDate: "2023",
    description:
      'Participated in and mentored at hackathons focused on "Design for Billions" — building inclusivity-driven solutions under ₹5,000.',
    highlights: [],
    tags: ["Hackathon", "Design", "Leadership"],
    accent: false,
  },
];

// ——— HACKATHONS ———

const hackathons: Hackathon[] = [
  {
    id: "1",
    name: "Design for Billions",
    theme: "Inclusivity-driven design for underserved populations",
    projectTitle: "AccessRx — Pharmaceutical Access Mapper",
    description:
      "Built a geo-aware tool in 24 hours to map drug availability deserts using public health data. Budget: ₹3,500.",
    date: "Jan 2025",
    duration: "24 hours",
    award: "🏆 1st Place",
    budget: "₹3,500",
    budgetAmount: 3500,
    constraints: ["Solo build", "24-hour time limit", "No paid APIs"],
    tags: ["React", "FastAPI", "GeoJSON", "Inclusivity"],
  },
  {
    id: "2",
    name: "HeatHack 2024",
    theme: "Climate resilience in urban environments",
    projectTitle: "ThermalShield — Building Heat Risk Analyzer",
    description:
      "Developed a REST API and dashboard calculating thermal risk indices from raster weather data. Budget: ₹4,200.",
    date: "Sep 2024",
    duration: "24 hours",
    award: "🥈 Runner Up",
    budget: "₹4,200",
    budgetAmount: 4200,
    constraints: ["Team of 3", "24-hour time limit", "Open-source data only"],
    tags: ["Python", "Rasterio", "API", "Climate"],
  },
  {
    id: "3",
    name: "MakeHack 2024",
    theme: "Hardware prototyping for rural connectivity",
    projectTitle: "SoilPulse — IoT Soil Monitor",
    description:
      "Hand-soldered a sensor network on perfboards with custom C firmware for real-time soil moisture readings. Budget: ₹4,800.",
    date: "Mar 2024",
    duration: "24 hours",
    budget: "₹4,800",
    budgetAmount: 4800,
    constraints: [
      "Solo build",
      "Hardware-only prototype",
      "Perfboard construction",
    ],
    tags: ["C", "PCB", "IoT", "Embedded"],
  },
];

// ——— ARTICLES ———

const articles: Article[] = [
  {
    id: "1",
    title: "Building a Full-Stack Dashboard with React & FastAPI",
    excerpt:
      "A walkthrough of architecting a real-time environmental monitoring dashboard from scratch...",
    publishedAt: "Mar 2025",
    readingTime: 8,
    tags: ["react", "fastapi", "tutorial"],
    slug: "fullstack-dashboard",
  },
  {
    id: "2",
    title: "Designing Custom PCBs for IoT Sensor Networks",
    excerpt:
      "From schematic capture in KiCad to hand-soldering perfboards — lessons from the field...",
    publishedAt: "Jan 2025",
    readingTime: 12,
    tags: ["hardware", "KiCad", "IoT"],
    slug: "custom-pcb-iot",
  },
  {
    id: "3",
    title: "Understanding Raster Analysis with Rasterio",
    excerpt:
      "Deep dive into zonal statistics, masking, and area calculations for geospatial raster data...",
    publishedAt: "Nov 2024",
    readingTime: 6,
    tags: ["python", "geospatial", "rasterio"],
    slug: "raster-analysis",
  },
];

// ——— SKILLS ———

const skills: SkillCategory[] = [
  {
    name: "Languages",
    icon: "⌘",
    skills: [
      { name: "Python", level: "expert", category: "language" },
      { name: "C", level: "advanced", category: "language" },
      { name: "TypeScript", level: "advanced", category: "language" },
      { name: "JavaScript", level: "advanced", category: "language" },
      { name: "SQL", level: "intermediate", category: "language" },
      { name: "Rust", level: "beginner", category: "language" },
    ],
  },
  {
    name: "Frameworks & Libraries",
    icon: "◈",
    skills: [
      { name: "React", level: "advanced", category: "framework" },
      { name: "FastAPI", level: "expert", category: "framework" },
      { name: "Node.js", level: "intermediate", category: "framework" },
      { name: "Framer Motion", level: "intermediate", category: "framework" },
      { name: "GeoPandas", level: "advanced", category: "framework" },
      { name: "Rasterio", level: "expert", category: "framework" },
    ],
  },
  {
    name: "Tools & Platforms",
    icon: "⚙",
    skills: [
      { name: "Git", level: "expert", category: "tool" },
      { name: "Docker", level: "intermediate", category: "tool" },
      { name: "QGIS", level: "advanced", category: "tool" },
      { name: "KiCad", level: "advanced", category: "tool" },
      { name: "VS Code", level: "expert", category: "tool" },
      { name: "Linux", level: "advanced", category: "platform" },
    ],
  },
  {
    name: "Hardware & Electronics",
    icon: "⚡",
    skills: [
      { name: "Soldering", level: "advanced", category: "hardware" },
      { name: "PCB Design", level: "advanced", category: "hardware" },
      { name: "Embedded Systems", level: "intermediate", category: "hardware" },
      { name: "Mechanical Eng.", level: "intermediate", category: "hardware" },
      { name: "Oscilloscope", level: "intermediate", category: "hardware" },
      { name: "Perfboard Builds", level: "expert", category: "hardware" },
    ],
  },
];

// ——— EDUCATION ———

const education: Education[] = [
  {
    id: "1",
    institution: "University Name",
    degree: "B.E. / B.Tech",
    field: "Computer Science & Engineering",
    startYear: 2022,
    endYear: undefined,
    gpa: "Current Student",
    highlights: [
      "Specialization in geospatial analysis and embedded systems",
      "Research assistant — land degradation mapping",
      "Multiple national hackathon awards",
      "Coursework: DSA, OS, Computer Networks, DBMS, Digital Electronics",
    ],
  },
  {
    id: "2",
    institution: "Pre-University College",
    degree: "Higher Secondary (12th)",
    field: "Physics, Chemistry, Mathematics",
    startYear: 2020,
    endYear: 2022,
    highlights: [
      "Foundation in physics and mathematics",
      "Electronics and circuit design fundamentals",
    ],
  },
];

// ——— HOBBIES ———

const hobbies: Hobby[] = [
  {
    id: "1",
    title: 'Custom Perfboard — "T.S." Initials',
    description:
      "Hand-soldered LED perfboard circuit displaying initials using through-hole components and custom wire routing. A weekend build combining precision soldering with artistic layout.",
    category: "build",
    tags: ["Soldering", "Perfboard", "LED", "Through-hole"],
    materials: [
      "Perfboard",
      "22AWG solid core wire",
      "5mm LEDs",
      "220Ω resistors",
      "Solder",
    ],
    gallery: [],
    difficulty: "intermediate",
    buildTime: "Weekend build",
  },
  {
    id: "2",
    title: "Physics Concept Experiments",
    description:
      "Desktop experiments visualizing electromagnetic induction, resonance, and wave interference using salvaged components and DIY measurement rigs.",
    category: "experiment",
    tags: ["Physics", "Electromagnetics", "DIY Lab"],
    materials: [
      "Salvaged motors",
      "Neodymium magnets",
      "Copper wire",
      "Breadboard",
    ],
    gallery: [],
    difficulty: "advanced",
    buildTime: "Ongoing",
  },
  {
    id: "3",
    title: "Mechanical Assembly Projects",
    description:
      "Precision mechanical builds including custom enclosures, gear systems, and 3D-printed fixtures for sensor mounting in field deployments.",
    category: "craft",
    tags: ["Mechanical", "3D Print", "Precision", "Assembly"],
    materials: [
      "PLA/PETG filament",
      "Aluminum extrusion",
      "M3 hardware",
      "Bearings",
    ],
    gallery: [],
    difficulty: "advanced",
    buildTime: "3-day project",
  },
  {
    id: "4",
    title: "Signal Processing Breadboard",
    description:
      "Audio frequency filter chain built on breadboard — low-pass, band-pass, and notch filter stages with op-amp active topology.",
    category: "build",
    tags: ["Op-Amp", "Filters", "Analog", "Audio"],
    materials: [
      "TL072 op-amps",
      "Ceramic capacitors",
      "Metal film resistors",
      "Breadboard",
    ],
    gallery: [],
    difficulty: "expert",
    buildTime: "Weekend build",
  },
];

// ——— MASTER EXPORT ———

export const portfolioData: PortfolioData = {
  hero,
  about,
  sectionMeta,
  projects,
  research,
  experience,
  hackathons,
  articles,
  skills,
  education,
  hobbies,
};

// Domain-scoped convenience exports
export {
  hero,
  about,
  sectionMeta,
  projects,
  research,
  experience,
  hackathons,
  articles,
  skills,
  education,
  hobbies,
};
