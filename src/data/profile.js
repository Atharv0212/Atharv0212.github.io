// Identity, links and platform handles. `handles` drive scripts/fetch-stats.mjs.
export const profile = {
  name: 'Atharv Khare',
  initials: 'AK',
  tagline: 'CSAI @ IIIT DELHI',
  role: 'Systems & CV Engineer',
  revision: "Oct '26 Rev",
  email: 'atharv22112@iiitd.ac.in',
  phone: '+91 98XX-XX-IIITD',
  location: 'IIIT Delhi Campus, Okhla Phase III, New Delhi 110020',
  handles: {
    github: 'Atharv0212',
    leetcode: 'Atharv2006',
    codeforces: 'Atharvkhare0212',
  },
  links: {
    github: 'https://github.com/Atharv0212',
    leetcode: 'https://leetcode.com/u/Atharv2006/',
    codeforces: 'https://codeforces.com/profile/Atharvkhare0212',
    linkedin: 'https://linkedin.com',
  },
};

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#stats', label: 'Developer Metrics' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Featured Works' },
  { href: '#experience', label: 'Experience' },
  { href: '#articles', label: 'Deep Dives' },
];

export const quickLinks = [
  { href: '#skills', icon: 'fa-code', title: 'Core Systems', subtitle: 'C++, CUDA, POSIX' },
  { href: '#projects', icon: 'fa-eye', title: 'Deep Vision', subtitle: 'TensorRT, PyTorch' },
  { href: '#stats', icon: 'fa-chart-simple', title: 'Bench Metrics', subtitle: 'GitHub · LeetCode · CF' },
  { href: '#contact', icon: 'fa-address-card', title: 'Work Together', subtitle: 'Scan vCard / Reach out' },
];
