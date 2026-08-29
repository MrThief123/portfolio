export interface Profile {
  name: string;
  alias: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  available: boolean;
  socials: {
    label: string;
    url: string;
  }[];
  stats: {
    value: string;
    label: string;
  }[];
}

export const PROFILE: Profile = {
  name: "Ishan Deshpande",
  alias: "Ishan",
  role: "Junior Software / Data Engineer",
  tagline: "Designing at the edge of code, motion, and outer space.",
  location: "Melbourne, Australia",
  email: "ishan.d.mail@gmail.com",
  phone: "0478961972",
  available: true,
  socials: [
    { label: "GITHUB", url: "https://github.com/MrThief123" },
    { label: "LINKEDIN", url: "https://www.linkedin.com/in/ishan5320/" },
  ],
  stats: [
    { value: "~2yrs", label: "Professional Experience" },
    { value: "∞", label: "Things Left to Build" },
  ],
};

export interface ManifestoItem {
  n: string;
  title: string;
  body: string;
}

export const MANIFESTO: ManifestoItem[] = [
  {
    n: "01",
    title: "Build like it's the future",
    body: "Every interface is a spacecraft. I obsess over the details that make software feel alive — motion, weight, and rhythm that respond to human intent.",
  },
  {
    n: "02",
    title: "Design is engineering",
    body: "I refuse the line between the two. Pixels are shipped code, and clean code is a form of visual craft. The best products blur that boundary completely.",
  },
  {
    n: "03",
    title: "Ship signal, kill noise",
    body: "Ruthless about clarity. I cut everything that doesn't earn its place so what remains hits harder, loads faster, and lasts longer.",
  },
];

export interface Project {
id: string;
index: string;
title: string;
category: string;
year: string;
status: "Completed" | "In Progress" | "Coming Soon";
description: string;
tags: string[];
image?: string;
span: string;
accent: string;
link?: string;
video?: string;
}

export const PROJECTS: Project[] = [
{
id: "shadow-donkey-kong",
index: "001",
title: "SHADOW DONKEY KONG",
category: "Game Development",
year: "2025",
status: "Completed",
description:
"A classic arcade-inspired platformer where Mario navigates platforms, climbs ladders, jumps over obstacles, and uses a hammer to defeat Donkey Kong before time runs out.",
tags: ["JavaScript", "Java", "JTest"],
span: "md:col-span-8",
accent: "#ef4444",
link: "https://github.com/MrThief123/Donkey-Kong",
video: "fdZ2quNEL5g",

},
{
id: "tetris",
index: "002",
title: "TETRIS MADNESS",
category: "Software Engineering · Game Development",
year: "2026",
status: "Completed",
description:
"An extensible Java implementation of Tetris redesigned using object-oriented design and GRASP principles. Extended with three new non-rotating pieces, configurable random spawning and falling speeds, and persistent round statistics while preserving the original gameplay.",
tags: [
"Java",
"Object-Oriented Design",
"GRASP",
"JUnit Testing",
],
span: "md:col-span-4",
accent: "#22d3ee",
link: "https://github.com/MrThief123/Tetris",
video: "ZX70EQtXg0c",
},
{
  id: "speak-savvy",
  index: "003",
  title: "SPEAK SAVVY",
  category: "AI · Education Technology",
  year: "2026",
  status: "Completed",
  description:
    "An AI-powered platform designed to help university lecturers improve lecture quality through personalized feedback. Speak Savvy analyzes lecture content against key teaching criteria, providing actionable insights and tracking improvement over time.",
  tags: [
    "Artificial Intelligence",
    "Machine Learning",
    "Education Technology",
    "Full-Stack Development",
  ],
  span: "md:col-span-6",
  accent: "#22d3ee",
  link: "https://devpost.com/software/speak-savvy",
  video: "COjEP-KQeGk",
},



];

export const SKILL_GROUPS = [
  {
    title: "LANGUAGES",
    skills: [
      "TYPESCRIPT",
      "JAVASCRIPT",
      "PYTHON",
      "SQL",
      "C",
      "Java",
    ],
  },
  {
    title: "FRONTEND",
    skills: [
      "REACT",
      "NEXT.JS",
      "TAILWIND CSS",
    ],
  },
  {
    title: "BACKEND",
    skills: [
      "NODE.JS",
      "FASTAPI",
      "EXPRESS",
      "REST APIs",
    ],
  },
  {
    title: "DATA & ANALYTICS",
    skills: [
      "SQL",
      "POWER BI",
      "DATABRICKS",
      "PANDAS",
      "NUMPY",
    ],
  },
  {
    title: "CLOUD & DEVOPS",
    skills: [
      "AWS",
      "DOCKER",
      "CI/CD",
      "GIT",
    ],
  },
    {
    title: "DATABASES",
    skills: [
      "POSTGRESQL",
      "NoSQL",
      "Redshift",
    ],
  },
];

export const SKILLS: string[] = [
  // Frontend
  "REACT",
  "NEXT.JS",
  "TYPESCRIPT",
  "JAVASCRIPT",
  "HTML",
  "CSS",
  "TAILWIND CSS",

  // 3D / Creative Development
  "THREE.JS",
  "WEBGL",
  "GLSL",
  "FRAMER MOTION",
  "MOTION DESIGN",
  "GSAP",

  // Backend
  "NODE.JS",
  "EXPRESS",
  "PYTHON",
  "FASTAPI",
  "REST APIs",

  // Databases
  "MONGODB",
  "POSTGRESQL",
  "MYSQL",
  "REDIS",

  // Tools & Design
  "FIGMA",
  "DESIGN SYSTEMS",
  "UI/UX",
  "BRAND DESIGN",

  // Engineering
  "GIT",
  "GITHUB",
  "DOCKER",
  "CI/CD",
  "VITE",
  "NPM",

  // Architecture
  "API DESIGN",
  "SYSTEM DESIGN",
  "RESPONSIVE DESIGN",
  "PERFORMANCE OPTIMIZATION",
  "ACCESSIBILITY",
];

export interface Capability {
  title: string;
  desc: string;
}

export const CAPABILITIES: Capability[] = [
  {
    title: "Interface Engineering",
    desc: "Production-grade React front-ends with obsessive motion detail.",
  },
  {
    title: "Creative WebGL",
    desc: "Immersive 3D and shader experiences that run in any browser.",
  },
  {
    title: "Product Design",
    desc: "Systems, flows, and visual language from zero to launch.",
  },
  {
    title: "Full-Stack Builds",
    desc: "APIs, data models, and infra that keep the lights on.",
  },
];

export interface Experience {
  period: string;
  test?: string;
  role: string;
  company: string;
  location: string;
  description: string;
  tags: string[];
  accent: string;
}

export const EXPERIENCE: Experience[] = [
    {
    period: "Dec 2024 — July 2026",
    role: "Junior Cloud Software Engineer",
    company: "Australian Bureau of Statistics",
    location: "Melbourne · Australia",
    description:
        "Built and maintained cloud data systems processing 120M+ Census records, with a focus on automation, performance, and reliable data pipelines. Designed and implemented scalable AWS cloud solutions across data, infrastructure, and deployment workflows to support critical Census operations.",
    tags: [
        "AWS",
        "Python",
        "TypeScript",
        "SQL",
        "Databricks",
        "CloudFormation & CDK",
        "GitLab + CI/CD",
        "Docker"
    ],
    accent: "#06b6d4",
    },
{
  period: "Nov 2024 — June 2026",
  role: "AI Project Lead",
  company: "Data Science Student Society",
  location: "Melbourne · Australia",
  description:
    "Led AI projects and technical workshops, building practical applications across NLP, speech analysis, and generative AI. Designed and developed AI-powered products from concept to deployment, working across machine learning, LLMs, APIs, and modern web technologies.",
  tags: [
    "Python",
    "AI/ML",
    "LLMs",
    "Generative AI",
    "React",
    "Node.js",
    "OpenAI",
  ],
  accent: "#d946ef",
},

{
  period: "2024 — 2026",
  role: "Technical Lead & Presenter",
  company: "AWS Cloud Club · University of Melbourne",
  location: "Melbourne · Australia",
  description:
    "Led cloud-focused technical sessions and helped students build practical skills across AWS, software engineering, and modern cloud architecture. Delivered 4 technical lectures to 350+ students, covering cloud technologies, architecture, and hands-on development.",
  tags: [
    "AWS",
    "Cloud Architecture",
    "AWS CDK",
    "Python",
  ],
  accent: "#fde047",
},
  {
    period: "Dec 2023 — Jan 2024",
    role: "VCE Tutor",
    company: "Atar Notes",
    location: "Melbourne · Australia",
    description:
      "Teach Mathematics, Chemistry, and Physics while developing technical concepts into clear, engaging explanations for students.",
    tags: ["Mathematics", "Physics", "Chemistry", "Teaching"],
    accent: "#fde047",
  },

];