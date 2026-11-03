// Your education, newest first. Leave out endYear to show a "Current" badge.
//   endLabel: text after the start year while you are studying, such as 'Expected 2029'
//   logo:     a picture in data/images, for example 'images/logos/plaksha.png'
//   grade:    optional line such as 'CGPA 8.5'
//   draft:    true hides the entry from the website.
import type { Education } from '../src/types';

export const education: Education[] = [
  {
    id: '1',
    institution: 'Plaksha University, Mohali',
    degree: 'B.Tech.',
    field: 'Computer Science and AI',
    startYear: 2025,
    endLabel: 'Expected 2029',
    grade: 'CGPA: 8.99/10.00',
    logo: 'images/logos/plaksha.png',
    highlights: ['Grade 12 (PCM, CBSE): 90.06%', 'Grade 10 (ICSE): 96.40%'],
  },
];
