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
  { name: 'HTML & CSS', category: 'Web Foundations', level: 85, tech: 'javascript', accent: 'cyan' },
  { name: 'JavaScript', category: 'Web Development', level: 78, tech: 'javascript', accent: 'purple' },
  { name: 'TypeScript', category: 'Typed JavaScript', level: 68, tech: 'javascript', accent: 'blue' },
  { name: 'C++', category: 'Programming & DSA', level: 60, tech: 'cpp', accent: 'blue' },
  { name: 'React', category: 'Currently Learning', level: 55, tech: 'react', accent: 'cyan' },
  { name: 'Node.js', category: 'Currently Learning', level: 48, tech: 'node', accent: 'purple' },
  { name: 'Next.js', category: 'Currently Learning', level: 40, tech: 'react', accent: 'magenta' },
  { name: 'Git & GitHub', category: 'Version Control', level: 70, tech: 'git', accent: 'purple' },
  { name: 'Python & Java', category: 'Familiar', level: 32, tech: 'python', accent: 'cyan' },
];

export const expertise: ExpertiseItem[] = [
  { id: 'ex-1', lines: ['Data Structures', '& Algorithms'], icon: 'binary', accent: 'cyan' },
  { id: 'ex-2', lines: ['Database', 'Management'], icon: 'database', accent: 'blue' },
  { id: 'ex-3', lines: ['Operating', 'Systems'], icon: 'cpu', accent: 'purple' },
  { id: 'ex-4', lines: ['Object Oriented', 'Programming'], icon: 'boxes', accent: 'magenta' },
  { id: 'ex-5', lines: ['Web', 'Development'], icon: 'globe', accent: 'cyan' },
  { id: 'ex-6', lines: ['Software', 'Engineering'], icon: 'workflow', accent: 'purple' },
];

export const projects: Project[] = [
  { id: 'fitwithkhushi', index: '01', title: 'FitWithKhushi', subtitle: 'React • Node.js', description: 'An AI-assisted fitness workspace for workout planning, hydration, nutrition and progress tracking.', longDescription: 'A full-stack fitness experience with private accounts, structured workout tools, progress views and an interactive coaching interface.', preview: 'shop', image: `${import.meta.env.BASE_URL}project-fitwithkhushi.png`, technologies: ['React', 'Node.js', 'Express', 'MongoDB'], features: ['Workout Planning', 'Fitness Dashboard', 'AI Coach Interface', 'Progress Tracking'], demoUrl: 'https://khushijain2004m.github.io/FitWithKhushi/', githubUrl: 'https://github.com/khushijain2004M/FitWithKhushi', accent: 'cyan' },
  { id: 'axiom', index: '02', title: 'AXIOM', subtitle: 'TypeScript • Full Stack', description: 'A growth-intelligence workspace that turns product signals into ranked, reviewable recommendations.', longDescription: 'A multi-surface product intelligence system featuring analytics, evidence-backed recommendations and human approval workflows.', preview: 'distributed', image: `${import.meta.env.BASE_URL}project-axiom.png`, technologies: ['TypeScript', 'Next.js', 'Python', 'Electron'], features: ['Growth Analytics', 'Decision Support', 'Desktop & Mobile Clients', 'Human Review'], demoUrl: 'https://axiom-v1.sudeshmehar3.workers.dev', githubUrl: 'https://github.com/khushijain2004M/AXIOM', accent: 'purple' },
  { id: 'air-pointer', index: '03', title: 'Air Pointer', subtitle: 'JavaScript • Computer Vision', description: 'A gesture-driven pointer experience for browser demonstrations and desktop interaction experiments.', longDescription: 'A cross-platform interaction project with an on-page cursor demo and a desktop application architecture for gesture-based control.', preview: 'chat', image: `${import.meta.env.BASE_URL}project-air-pointer.png`, technologies: ['JavaScript', 'Electron', 'Computer Vision'], features: ['Gesture Input', 'Interactive Demo', 'Desktop Integration', 'Configurable Controls'], demoUrl: 'https://khushijain2004m.github.io/Air-Pointer/', githubUrl: 'https://github.com/khushijain2004M/Air-Pointer', accent: 'magenta' },
];
export const projectsCopy = { heading: 'Featured Projects', subheading: 'Explore Khushi’s growing collection of full-stack, intelligent and interactive software projects.' };

const miniProjectNames = [
  'Weather App', 'Password Generator', 'Form Validation', 'Stopwatch App', 'Digital Piano',
  'Tip Calculator', 'Expense Tracker', 'Movie Search App', 'Flashcard Learning App', 'Typing Speed Test',
  'Drum Kit', 'QR Code Generator', 'Currency Converter', 'Image Gallery Modal', 'Theme Toggle',
  'Scroll Progress Bar', 'Clipboard Copy Tool', 'Text-to-Speech Converter', 'Product Filter List', 'Music Player',
  'Kanban Task Board', 'Pomodoro Focus Timer', 'Habit Streak Tracker', 'Markdown Notes Editor', 'Color Gradient Studio',
  'JSON Formatter', 'Unit Converter', 'Memory Match Game', 'Image Compressor', 'Decision Wheel',
  'CodeForge Academy', 'Frontend Quality Inspector', 'Interview Mastery Hub', 'NovaUI Framework', 'Developer Journey Roadmap',
] as const;
const miniProjectSlugs = [
  '01-weather-app', '02-password-generator', '03-form-validation', '04-stopwatch-app', '05-digital-piano',
  '06-tip-calculator', '07-expense-tracker', '08-movie-search-app', '09-flashcard-learning-app', '10-typing-speed-test',
  '11-drum-kit', '12-qr-code-generator', '13-currency-converter', '14-image-gallery-modal', '15-light-dark-mode-toggle',
  '16-scroll-progress-bar', '17-clipboard-copy-tool', '18-text-to-speech-converter', '19-product-filter-list', '20-music-player-app',
  '21-kanban-task-board', '22-pomodoro-focus-timer', '23-habit-streak-tracker', '24-markdown-notes-editor', '25-color-gradient-studio',
  '26-json-formatter-validator', '27-unit-converter', '28-memory-match-game', '29-image-compressor-resizer', '30-decision-wheel',
  '31-codeforge-academy', '32-frontend-quality-inspector', '33-interview-mastery-hub', '34-novaui-framework', '35-developer-journey-roadmap',
] as const;
const collectionItems = miniProjectNames.map((title, index) => ({
  id: miniProjectSlugs[index], index: String(index + 1).padStart(2, '0'), title: title.toUpperCase(),
  description: 'An interactive, responsive web project with polished UI and practical functionality.',
  status: 'published' as const, technologies: index >= 30 ? ['TypeScript', 'HTML', 'CSS'] : ['JavaScript', 'HTML', 'CSS'],
  demoUrl: `https://khushijain2004m.github.io/mini-projects/${miniProjectSlugs[index]}/`,
  githubUrl: `https://github.com/khushijain2004M/KJ-${String(index + 1).padStart(2, '0')}-${miniProjectSlugs[index].slice(3).toUpperCase()}`,
}));
export const projectCollections: ProjectCollection[] = [
  { id: 'small-projects', eyebrow: 'LEARNING BUILDS', title: 'PROJECT COLLECTION 01', description: 'Fifteen focused web projects covering core browser APIs and practical JavaScript.', icon: 'puzzle', accent: 'cyan', items: collectionItems.slice(0, 15) },
  { id: 'mini-projects', eyebrow: 'COMPACT PRODUCTS', title: 'PROJECT COLLECTION 02', description: 'Twenty feature-rich tools, games and learning products with published source code.', icon: 'layers', accent: 'purple', items: collectionItems.slice(15) },
];

export const stats: Stat[] = [
  { id: 'st-1', value: null, display: 'WIP', label: 'LeetCode', caption: 'Profile work in progress', icon: 'target', accent: 'cyan', placeholder: true },
  { id: 'st-2', value: null, display: 'WIP', label: 'HackerRank', caption: 'Profile work in progress', icon: 'star', accent: 'purple', placeholder: true },
  { id: 'st-3', value: projects.length, label: 'Projects', caption: 'Currently being developed', icon: 'trophy', accent: 'magenta', placeholder: true },
  { id: 'st-4', value: 4, label: 'Public Repositories', caption: 'Connected on GitHub', icon: 'boxes', accent: 'blue', placeholder: false },
];
export const badges: Badge[] = [];

export const platforms: CodingPlatform[] = [
  { id: 'leetcode', name: 'LeetCode', handle: '@KhushiJain', url: null, icon: 'terminal', accent: 'cyan', rank: 'Global rank #3,221,316', stats: [{ label: 'Solved', value: '39' }, { label: 'Acceptance', value: '98%' }, { label: 'Submissions', value: '47' }], trend: [8, 8, 8, 8, 8, 8, 25, 25, 25, 55, 72, 90], placeholder: false },
  { id: 'hackerrank', name: 'HackerRank', handle: '@khushijain', url: null, icon: 'braces', accent: 'purple', rank: 'Top 1% • 6★ problem solving', stats: [{ label: 'Solved', value: '77' }, { label: 'Stars', value: '6★' }, { label: 'Global rank', value: '#40,792' }], trend: [32, 35, 38, 42, 46, 50, 55, 61, 66, 72, 78, 84], placeholder: false },
  { id: 'github', name: 'GitHub', handle: '@khushijain2004M', url: 'https://github.com/khushijain2004M', icon: 'github', accent: 'magenta', rank: 'Building in public', stats: [{ label: 'Repos', value: '5' }, { label: 'Stars', value: '4' }], trend: [32, 32, 34, 38, 42, 47, 53, 58, 65, 72, 82, 92], placeholder: false },
];

export const githubActivity: GitHubActivity = { seed: 20261009, weeks: 0, totals: [
  { id: 'ga-1', label: 'Repositories', value: 4, icon: 'folderGit', accent: 'cyan' },
  { id: 'ga-2', label: 'Profile Stars', value: 0, icon: 'star', accent: 'purple' },
  { id: 'ga-4', label: 'Projects in Progress', value: projects.length, icon: 'boxes', accent: 'blue' },
], placeholder: false };

export const activityCopy = { heading: 'Coding Activity', subheading: 'Live repository statistics from Khushi’s public GitHub profile.', heatmapTitle: 'GitHub Repository Activity' };
export const achievementsCopy = { heading: 'Learning Progress', subheading: 'LeetCode and HackerRank profiles are currently work in progress.' };
export const skillsCopy = { heading: 'My Digital Skillset', subheading: 'Technologies I use to transform ideas into functional digital experiences.' };
export const expertiseCopy = { heading: 'Core IT Expertise', subheading: 'The computer-science fundamentals behind everything I build.' };
export const contactCopy = { heading: "Let's Connect", subheading: 'The verified GitHub profile will be the primary contact and project destination.' };
export const contactChannels: ContactChannel[] = [
  { id: 'cc-github', label: 'GitHub', value: '@khushijain2004M', href: 'https://github.com/khushijain2004M', icon: 'github', accent: 'cyan' },
  { id: 'cc-location', label: 'Location', value: personal.location, href: null, icon: 'mapPin', accent: 'purple' },
];
export const contactEndpoint = '';
export const footer = { tagline: 'Student • Developer • Learner', copyright: `© ${new Date().getFullYear()} ${personal.name}. Built with curiosity and creativity.` };
