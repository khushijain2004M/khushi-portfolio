import type { AboutHighlight, Badge, CodingPlatform, ContactChannel, ExpertiseItem, GitHubActivity, HeroCard, NavLink, PersonalInfo, Project, ProjectCollection, Skill, SocialLink, Stat } from '../types';

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

export const personal: PersonalInfo = {
  name: 'Khushi Jain', greeting: "Hello, I'm",
  roles: ['Student', 'Web Developer', 'Aspiring Software Engineer'],
  tagline: 'Learning, building and growing through thoughtful software projects.',
  bio: 'I am a curious developer focused on web development, problem solving and strong software-engineering fundamentals. I enjoy turning ideas into clean, useful and accessible digital experiences.',
  degree: 'Bachelor of Technology', degreeShort: 'B.Tech', field: 'Computer Science & Technology',
  university: 'Academic details available on request', location: 'India', email: '', phone: '',
  availability: 'Open to learning & collaboration', resumeUrl: null, profileImage: publicAsset('khushi-jain.webp'),
};

export const navLinks: NavLink[] = [
  { id: 'home', label: 'Home' }, { id: 'about', label: 'About' }, { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' }, { id: 'achievements', label: 'Progress' }, { id: 'contact', label: 'Connect' },
];
export const sectionOrder = ['home', 'about', 'skills', 'expertise', 'projects', 'achievements', 'activity', 'contact'] as const;
export const footerLinks: NavLink[] = navLinks.filter((link) => ['home', 'about', 'projects', 'contact'].includes(link.id));

export const socials: SocialLink[] = [
  { id: 'github', label: 'GitHub', url: 'https://github.com/khushijain2004M', handle: '@khushijain2004M', icon: 'github' },
];

export const heroCards: HeroCard[] = [
  { id: 'hc-1', index: '01', lines: ['Web', 'Development'], icon: 'code', accent: 'cyan' },
  { id: 'hc-2', index: '02', lines: ['Problem', 'Solving'], icon: 'puzzle', accent: 'purple' },
  { id: 'hc-3', index: '03', lines: ['Creative', 'Interfaces'], icon: 'layers', accent: 'magenta' },
  { id: 'hc-4', index: '04', lines: ['Continuous', 'Learning'], icon: 'binary', accent: 'blue' },
];

export const about = { heading: 'The Developer Within', subheading: 'Building a strong foundation through practical projects, curiosity and consistent learning.' };
export const aboutHighlights: AboutHighlight[] = [
  { id: 'ah-1', label: 'Education', lines: ['B.Tech', 'Student'], icon: 'graduationCap', accent: 'cyan' },
  { id: 'ah-2', label: 'Focus', lines: ['Web', 'Development'], icon: 'cpu', accent: 'purple' },
  { id: 'ah-3', label: 'Goal', lines: ['Useful', 'Software'], icon: 'compass', accent: 'magenta' },
];

export const skills: Skill[] = [
  { name: 'HTML & CSS', category: 'Web Foundations', level: 72, tech: 'javascript', accent: 'cyan' },
  { name: 'JavaScript', category: 'Learning & Building', level: 62, tech: 'javascript', accent: 'purple' },
  { name: 'TypeScript', category: 'Currently Learning', level: 45, tech: 'javascript', accent: 'blue' },
  { name: 'React', category: 'Currently Learning', level: 48, tech: 'react', accent: 'cyan' },
  { name: 'C++', category: 'Programming Fundamentals', level: 50, tech: 'cpp', accent: 'blue' },
  { name: 'Git & GitHub', category: 'Version Control', level: 55, tech: 'git', accent: 'magenta' },
];

export const expertise: ExpertiseItem[] = [
  { id: 'ex-1', lines: ['Programming', 'Fundamentals'], icon: 'binary', accent: 'cyan' },
  { id: 'ex-2', lines: ['Responsive', 'Interfaces'], icon: 'globe', accent: 'blue' },
  { id: 'ex-3', lines: ['Object Oriented', 'Programming'], icon: 'boxes', accent: 'purple' },
  { id: 'ex-4', lines: ['Version', 'Control'], icon: 'workflow', accent: 'magenta' },
];

export const projects: Project[] = [
  { id: 'fitwithkhushi', index: '01', title: 'FitWithKhushi', subtitle: 'React • Node.js', description: 'An AI-assisted fitness workspace for workout planning, hydration, nutrition and progress tracking.', longDescription: 'A full-stack fitness experience with private accounts, structured workout tools, progress views and an interactive coaching interface.', preview: 'shop', image: null, technologies: ['React', 'Node.js', 'Express', 'MongoDB'], features: ['Workout Planning', 'Fitness Dashboard', 'AI Coach Interface', 'Progress Tracking'], demoUrl: null, githubUrl: 'https://github.com/khushijain2004M/FitWithKhushi', accent: 'cyan' },
  { id: 'axiom', index: '02', title: 'AXIOM', subtitle: 'TypeScript • Full Stack', description: 'A growth-intelligence workspace that turns product signals into ranked, reviewable recommendations.', longDescription: 'A multi-surface product intelligence system featuring analytics, evidence-backed recommendations and human approval workflows.', preview: 'distributed', image: null, technologies: ['TypeScript', 'Next.js', 'Python', 'Electron'], features: ['Growth Analytics', 'Decision Support', 'Desktop & Mobile Clients', 'Human Review'], demoUrl: null, githubUrl: 'https://github.com/khushijain2004M/AXIOM', accent: 'purple' },
  { id: 'air-pointer', index: '03', title: 'Air Pointer', subtitle: 'JavaScript • Computer Vision', description: 'A gesture-driven pointer experience for browser demonstrations and desktop interaction experiments.', longDescription: 'A cross-platform interaction project with an on-page cursor demo and a desktop application architecture for gesture-based control.', preview: 'chat', image: null, technologies: ['JavaScript', 'Electron', 'Computer Vision'], features: ['Gesture Input', 'Interactive Demo', 'Desktop Integration', 'Configurable Controls'], demoUrl: null, githubUrl: 'https://github.com/khushijain2004M/Air-Pointer', accent: 'magenta' },
];
export const projectsCopy = { heading: 'Featured Projects', subheading: 'Explore Khushi’s growing collection of full-stack, intelligent and interactive software projects.' };

const comingSoon = (prefix: 'small' | 'mini', label: string) => Array.from({ length: 10 }, (_, index) => ({ id: `${prefix}-${index + 1}`, index: String(index + 1).padStart(2, '0'), title: `${label} ${String(index + 1).padStart(2, '0')}`, description: 'Work in progress — repository and live demo will be added after completion.', status: 'coming-soon' as const, technologies: ['Work in Progress'], demoUrl: null, githubUrl: null }));
export const projectCollections: ProjectCollection[] = [
  { id: 'small-projects', eyebrow: 'Learning Builds', title: 'Small Projects', description: 'Focused practice projects currently in progress.', icon: 'puzzle', accent: 'cyan', items: comingSoon('small', 'Small Project') },
  { id: 'mini-projects', eyebrow: 'Compact Products', title: 'Mini Projects', description: 'Complete mini products will be published here after verification.', icon: 'layers', accent: 'purple', items: comingSoon('mini', 'Mini Project') },
];

export const stats: Stat[] = [
  { id: 'st-1', value: null, display: 'WIP', label: 'LeetCode', caption: 'Profile work in progress', icon: 'target', accent: 'cyan', placeholder: true },
  { id: 'st-2', value: null, display: 'WIP', label: 'HackerRank', caption: 'Profile work in progress', icon: 'star', accent: 'purple', placeholder: true },
  { id: 'st-3', value: projects.length, label: 'Projects', caption: 'Currently being developed', icon: 'trophy', accent: 'magenta', placeholder: true },
  { id: 'st-4', value: 4, label: 'Public Repositories', caption: 'Connected on GitHub', icon: 'boxes', accent: 'blue', placeholder: false },
];
export const badges: Badge[] = [];

export const platforms: CodingPlatform[] = [
  { id: 'leetcode', name: 'LeetCode', handle: 'Work in Progress', url: null, icon: 'terminal', accent: 'cyan', rank: 'Profile setup in progress', stats: [{ label: 'Status', value: 'WIP' }], trend: Array(12).fill(0), placeholder: true },
  { id: 'hackerrank', name: 'HackerRank', handle: 'Work in Progress', url: null, icon: 'braces', accent: 'purple', rank: 'Profile setup in progress', stats: [{ label: 'Status', value: 'WIP' }], trend: Array(12).fill(0), placeholder: true },
  { id: 'github', name: 'GitHub', handle: '@khushijain2004M', url: 'https://github.com/khushijain2004M', icon: 'github', accent: 'magenta', rank: 'Portfolio repository setup', stats: [{ label: 'Status', value: 'Connected' }], trend: Array(12).fill(0), placeholder: false },
];

export const githubActivity: GitHubActivity = { seed: 20261009, weeks: 0, totals: [
  { id: 'ga-1', label: 'Repositories', value: 4, icon: 'folderGit', accent: 'cyan' },
  { id: 'ga-2', label: 'Profile Stars', value: 0, icon: 'star', accent: 'purple' },
  { id: 'ga-3', label: 'Followers', value: 0, icon: 'activity', accent: 'magenta' },
  { id: 'ga-4', label: 'Projects in Progress', value: projects.length, icon: 'boxes', accent: 'blue' },
], placeholder: true };

export const activityCopy = { heading: 'Coding Activity', subheading: 'GitHub activity will appear after the profile and repositories are connected.', heatmapTitle: 'GitHub Setup in Progress' };
export const achievementsCopy = { heading: 'Learning Progress', subheading: 'LeetCode and HackerRank profiles are currently work in progress.' };
export const skillsCopy = { heading: 'My Digital Skillset', subheading: 'Technologies I am learning and using to build practical projects.' };
export const expertiseCopy = { heading: 'Core Expertise', subheading: 'The fundamentals supporting my development journey.' };
export const contactCopy = { heading: "Let's Connect", subheading: 'The verified GitHub profile will be the primary contact and project destination.' };
export const contactChannels: ContactChannel[] = [
  { id: 'cc-github', label: 'GitHub', value: '@khushijain2004M', href: 'https://github.com/khushijain2004M', icon: 'github', accent: 'cyan' },
  { id: 'cc-location', label: 'Location', value: personal.location, href: null, icon: 'mapPin', accent: 'purple' },
];
export const contactEndpoint = '';
export const footer = { tagline: 'Student • Developer • Learner', copyright: `© ${new Date().getFullYear()} ${personal.name}. Built with curiosity and creativity.` };
