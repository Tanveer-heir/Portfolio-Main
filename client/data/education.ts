// Your education, newest first. Leave out endYear to show "Present" and a "Current" badge.
//   logo:  a picture in data/images/education, for example 'images/education/college.png'
//   grade: optional line such as 'CGPA 8.5' or 'Current Student'
//   draft: true hides the entry from the website.
//
// These two entries are examples and stay hidden. Fill in your real details and remove the draft
// line. The Education page and menu link appear as soon as one entry is visible.
import type { Education } from '../src/types';

export const education: Education[] = [
  {
    id: '1',
    draft: true,
    institution: 'University Name',
    degree: 'B.E. / B.Tech',
    field: 'Computer Science & Engineering',
    startYear: 2022,
    grade: 'Current Student',
    highlights: [
      'Specialization in geospatial analysis and embedded systems',
      'Research assistant — land degradation mapping',
      'Multiple national hackathon awards',
      'Coursework: DSA, OS, Computer Networks, DBMS, Digital Electronics',
    ],
  },
  {
    id: '2',
    draft: true,
    institution: 'Pre-University College',
    degree: 'Higher Secondary (12th)',
    field: 'Physics, Chemistry, Mathematics',
    startYear: 2020,
    endYear: 2022,
    highlights: [
      'Foundation in physics and mathematics',
      'Electronics and circuit design fundamentals',
    ],
  },
];
