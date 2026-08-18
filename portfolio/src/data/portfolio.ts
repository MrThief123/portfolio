export interface Profile {
  name: string;
  alias: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
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
  name: "NOVA CARTER",
  alias: "@nova.dev",
  role: "Creative Technologist & Full-Stack Engineer",
  tagline: "Designing at the edge of code, motion, and outer space.",
  location: "Earth · Remote / Anywhere",
  email: "hello@nova.dev",
  available: true,
  socials: [
    { label: "GITHUB", url: "https://github.com" },
    { label: "DRIBBBLE", url: "https://dribbble.com" },
    { label: "X / TWITTER", url: "https://x.com" },
    { label: "LINKEDIN", url: "https://linkedin.com" },
  ],
  stats: [
    { value: "6+", label: "Years in orbit" },
    { value: "48", label: "Missions shipped" },
    { value: "12", label: "Awards & mentions" },
    { value: "∞", label: "Cups of coffee" },
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
  description: string;
  tags: string[];
  image: string;
  span: string;
  accent: string;
}

export const PROJECTS: Project[] = [
  {
    id: "orbit",
    index: "001",
    title: "ORBIT OS",
    category: "Product Design · Web App",
    year: "2025",
    description:
      "A mission-control dashboard for distributed teams. Real-time telemetry, command palette, and a spatial UI that feels like a cockpit.",
    tags: ["React", "WebGL", "Design System"],
    image:
      "https://images.pexels.com/photos/7293740/pexels-photo-7293740.jpeg",
    span: "md:col-span-8",
    accent: "#06b6d4",
  },
  {
    id: "neon",
    index: "002",
    title: "NEON CITY",
    category: "Creative · WebGL Experience",
    year: "2025",
    description:
      "An interactive cyberpunk cityscape rendered in the browser. Volumetric fog, reactive audio, and endless procedural streets.",
    tags: ["Three.js", "GLSL", "Audio"],
    image:
      "https://images.pexels.com/photos/28122495/pexels-photo-28122495.jpeg",
    span: "md:col-span-4",
    accent: "#d946ef",
  },
  {
    id: "pulse",
    index: "003",
    title: "PULSE",
    category: "Brand · Motion System",
    year: "2024",
    description:
      "A living identity for a music-tech startup. A motion language that pulses to sound and scales across every touchpoint.",
    tags: ["Motion", "Branding", "After Effects"],
    image:
      "https://images.unsplash.com/photo-1784744847844-7990d7da0e15?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    span: "md:col-span-4",
    accent: "#fde047",
  },
  {
    id: "signal",
    index: "004",
    title: "SIGNAL",
    category: "Full-Stack · SaaS Platform",
    year: "2024",
    description:
      "An analytics platform that turns raw event streams into cinematic, readable dashboards. Built for scale, tuned for delight.",
    tags: ["FastAPI", "MongoDB", "D3"],
    image:
      "https://images.pexels.com/photos/29146237/pexels-photo-29146237.jpeg",
    span: "md:col-span-8",
    accent: "#06b6d4",
  },
];

export const SKILLS: string[] = [
  "REACT",
  "TYPESCRIPT",
  "THREE.JS",
  "WEBGL",
  "FRAMER MOTION",
  "PYTHON",
  "FASTAPI",
  "NODE",
  "MONGODB",
  "FIGMA",
  "GLSL",
  "TAILWIND",
  "DESIGN SYSTEMS",
  "MOTION DESIGN",
  "BRAND",
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
