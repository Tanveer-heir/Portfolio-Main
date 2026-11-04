/* ============================================
   CONTENT — Reads client/data for the website
   ============================================
   Hides drafts, drops empty sections from the
   menu and numbers the section headings. Edit
   client/data to change what the site shows.
   ============================================ */

import type { NavItem, SectionMeta, SocialLink } from '../types';
import { site } from '../../data/site';
import { hero as heroData } from '../../data/hero';
import { about } from '../../data/about';
import { sections } from '../../data/sections';
import { projects as allProjects } from '../../data/projects';
import { research as allResearch } from '../../data/research';
import { experience as allExperience } from '../../data/experience';
import { hackathons as allHackathons } from '../../data/hackathons';
import { articles as allArticles } from '../../data/articles';
import { skills } from '../../data/skills';
import { education as allEducation } from '../../data/education';
import { hobbies as allHobbies } from '../../data/hobbies';

const published = <T extends { draft?: boolean }>(items: T[]) => items.filter((item) => !item.draft);

export const projects = published(allProjects);
export const research = published(allResearch);
export const experience = published(allExperience);
export const hackathons = published(allHackathons);
export const articles = published(allArticles);
export const education = published(allEducation);
export const hobbies = published(allHobbies);

// ——— Menu: a page with nothing to show is left out ———

const PAGES: (NavItem & { section?: string; count?: number })[] = [
  { label: 'Home', href: '/', id: 'nav-home' },
  { label: 'About', href: '/about', id: 'nav-about', section: 'about' },
  { label: 'Projects', href: '/projects', id: 'nav-projects', section: 'projects', count: projects.length },
  { label: 'Research', href: '/research', id: 'nav-research', section: 'research', count: research.length },
  { label: 'Experience', href: '/experience', id: 'nav-experience', section: 'experience', count: experience.length },
  { label: 'Hackathons', href: '/hackathons', id: 'nav-hackathons', section: 'hackathons', count: hackathons.length },
  { label: 'Articles', href: '/articles', id: 'nav-articles', section: 'articles', count: articles.length },
  { label: 'Skills', href: '/skills', id: 'nav-skills', section: 'skills', count: skills.length },
  { label: 'Education', href: '/education', id: 'nav-education', section: 'education', count: education.length },
  { label: 'Hobby', href: '/hobby', id: 'nav-hobby', section: 'hobby', count: hobbies.length },
];

const visiblePages = PAGES.filter((page) => page.count !== 0);

export const NAV_ITEMS: NavItem[] = visiblePages.map(({ label, href, id }) => ({ label, href, id }));

export const isVisiblePage = (href: string) => NAV_ITEMS.some((item) => item.href === href);

export const heroButtons = heroData.buttons.filter((button) => isVisiblePage(button.to));

// ——— Section headings, numbered in menu order ———

export const sectionMeta: Record<string, SectionMeta> = {};

visiblePages
  .filter((page) => page.section)
  .forEach((page, index) => {
    sectionMeta[page.section!] = {
      ...sections[page.section!],
      label: String(index + 1).padStart(2, '0'),
    };
  });

// ——— Social links: an empty link is left out ———

const mailto = (address?: string) => (address ? `mailto:${address}` : '');

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'GitHub', url: site.social.github ?? '' },
  { platform: 'LinkedIn', url: site.social.linkedin ?? '' },
  { platform: 'Instagram', url: site.social.instagram ?? '' },
  { platform: 'Gmail', url: mailto(site.social.gmail) },
  { platform: 'Outlook', url: mailto(site.social.outlook) },
].filter((link) => link.url);

export { site, about, skills };
export const hero = heroData;
