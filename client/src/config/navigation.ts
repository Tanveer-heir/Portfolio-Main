import type { NavItem, SocialLink } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home',        href: '/',            id: 'nav-home' },
  { label: 'About',       href: '/about',       id: 'nav-about' },
  { label: 'Projects',    href: '/projects',    id: 'nav-projects' },
  { label: 'Research',    href: '/research',    id: 'nav-research' },
  { label: 'Experience',  href: '/experience',  id: 'nav-experience' },
  { label: 'Hackathons',  href: '/hackathons',  id: 'nav-hackathons' },
  { label: 'Articles',    href: '/articles',    id: 'nav-articles' },
  { label: 'Skills',      href: '/skills',      id: 'nav-skills' },
  { label: 'Education',   href: '/education',   id: 'nav-education' },
  { label: 'Hobby',       href: '/hobby',       id: 'nav-hobby' },
  { label: 'Contact',     href: '/contact',     id: 'nav-contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'GitHub',   url: '#', icon: 'github' },
  { platform: 'LinkedIn', url: '#', icon: 'linkedin' },
  { platform: 'Twitter',  url: '#', icon: 'twitter' },
  { platform: 'Email',    url: '#', icon: 'mail' },
];

export const SITE_CONFIG = {
  title: 'T.S. — Engineer · Maker · Researcher',
  description: 'Personal portfolio — bridging software programming with physical engineering.',
  author: 'T.S.',
} as const;
