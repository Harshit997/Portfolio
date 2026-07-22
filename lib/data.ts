import type { LucideIcon } from "lucide-react";
import {
  Code,
  Layers,
  BrainCircuit,
  Globe,
  Box,
  Wrench,
  Trophy,
  FlaskConical,
  BookOpenCheck,
  Award,
  BadgeCheck,
  GitBranch,
  Megaphone,
  Smile,
  PlusCircle,
} from "lucide-react";

export const roles: string[] = [
  "Software Engineer",
  "AI/ML Engineer",
  "Full Stack Developer",
  "Problem Solver",
];

export type Stat = {
  id: string;
  value: number | null;
  suffix?: string;
  label: string;
  displayValue?: string; // used when value isn't a plain number (e.g. "IIT Guwahati")
};

export const stats: Stat[] = [
  { id: "dsa", value: 400, suffix: "+", label: "DSA Problems Solved" },
  { id: "papers", value: 4, label: "Research Publications" },
  { id: "intern", value: null, displayValue: "IIT Guwahati", label: "Research Intern" },
  { id: "projects", value: 13, suffix: "+", label: "Personal & Group Projects" },
];

export type SkillCategory = {
  id: string;
  title: string;
  icon: LucideIcon;
  items: string[];
};

// Add a new category here and it will automatically render as a new card.
export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: Code,
    items: ["Java", "Python", "C", "JavaScript"],
  },
  {
    id: "core-cs",
    title: "Core Computer Science",
    icon: Layers,
    items: ["Data Structures", "Algorithms", "OOP", "Operating Systems", "DBMS"],
  },
  {
    id: "ai-ml",
    title: "Artificial Intelligence",
    icon: BrainCircuit,
    items: [
      "Machine Learning",
      "Deep Learning",
      "Neural Networks",
      "CNN",
      "RNN",
      "LSTM",
      "GRU",
      "Transformers",
      "BERT",
      "NLP",
      "Computer Vision",
      "LLM Fine-Tuning",
    ],
  },
  {
    id: "web-dev",
    title: "Web Development",
    icon: Globe,
    items: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "React", "MongoDB", "REST APIs"],
  },
  {
    id: "libraries",
    title: "Libraries & Frameworks",
    icon: Box,
    items: ["TensorFlow", "Keras", "Scikit-learn", "NumPy", "Pandas", "Matplotlib", "OpenAI API", "PyTorch"],
  },
  {
    id: "dev-tools",
    title: "Developer Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Google Colab", "Jupyter Lab"],
  },
];

export type ExperienceItem = {
  id: string;
  role: string;
  org: string;
  date: string;
  points: string[];
};

// Add new roles here — the timeline renders however many items exist.
export const experience: ExperienceItem[] = [
  {
    id: "iit-guwahati",
    role: "Research Intern",
    org: "Indian Institute of Technology (IIT) Guwahati",
    date: "June 2026 – July 2026",
    points: [
      "Worked on scalable NLP pipelines for production-style workloads",
      "Built systems involving Named Entity Recognition, POS tagging, and text classification",
      "Used Transformer architectures with TensorFlow",
      "Optimized tokenization pipelines for speed and consistency",
      "Improved performance and reproducibility of NLP workflows",
    ],
  },
];

export type EducationItem = {
  id: string;
  degree: string;
  field: string;
  institution: string;
  date: string;
};

export const education: EducationItem[] = [
  {
    id: "jgec",
    degree: "Bachelor of Technology",
    field: "Electronics & Communication Engineering",
    institution: "Jalpaiguri Government Engineering College",
    date: "Expected Graduation - 2028",
  },
];

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  icon: LucideIcon;
  gradient: [string, string];
};

// Add new projects here — the grid automatically flows into new rows.
export const projects: Project[] = [
  {
    id: "HelioSense",
    title: "HelioSense",
    tagline: "AI-Powered Solar Flare Early Warning & Forecasting System",
    description:
      "Deep learning framework for solar flare nowcasting and forecasting using ISRO Aditya-L1 (SoLEXS/HEL1OS) and NASA GOES X-ray observations.",
    tech: ["Python", "PyTorch", "Pandas", "NumPy", "Astropy", "PatchTST", "1D CNN"],
    githubUrl: "https://github.com/GroupDevProjects/HelioSense",
    icon: Megaphone,
    gradient: ["#2563EB", "#7C6CF0"],
  },
  {
    id: "campaign",
    title: "campAIgn",
    tagline: "AI Marketing Campaign Automation Platform",
    description:
      "An AI-powered platform that generates and automates marketing campaigns end-to-end, from customer segmentation to email workflows — backed by a full MERN stack with n8n automation and OpenAI integration.",
    tech: ["React", "Node.js", "MongoDB", "OpenAI API", "JWT", "Python", "n8n"],
    githubUrl: "https://github.com/GroupDevProjects/campAIgn",
    icon: Megaphone,
    gradient: ["#2563EB", "#7C6CF0"],
  },
  {
    id: "sentiment-classification",
    title: "Sentiment Classification from Text",
    tagline: "Six-Class Emotion Classification System",
    description:
      "A text emotion classifier predicting across six sentiment classes, using TF-IDF features with logistic regression, deployed as an interactive real-time prediction app in Streamlit.",
    tech: ["Python", "Scikit-learn", "NLTK", "TF-IDF", "Streamlit"],
    githubUrl: "https://github.com/Harshit997/Sentiment-Classification",
    liveUrl: "https://sentiment-classification-004.streamlit.app/",
    icon: Smile,
    gradient: ["#0EA5E9", "#2563EB"],
  },
];

export const addProjectIcon = PlusCircle;

export type Achievement = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

// Add new achievements here — the grid reflows automatically.
export const achievements: Achievement[] = [
  {
    id: "dsa",
    title: "400+ DSA Problems Solved",
    description: "Consistent practice across data structures and algorithms on competitive platforms.",
    icon: Trophy,
  },
  {
    id: "intern",
    title: "Research Intern at IIT Guwahati",
    description: "Contributed to scalable NLP pipelines using Transformer architectures.",
    icon: FlaskConical,
  },
  {
    id: "papers",
    title: "Co-author, 4 Research Publications",
    description: "Collaborated on published research spanning applied ML, edge computing and data mining.",
    icon: BookOpenCheck,
  },
  {
    id: "scholarship",
    title: "Merit-cum-Means Scholarship",
    description: "Awarded by the Government of West Bengal for academic merit.",
    icon: Award,
  },
  {
    id: "certifications",
    title: "AI & Software Certifications",
    description: "Multiple certifications across AIML, and software engineering fundamentals.",
    icon: BadgeCheck,
  },
  {
    id: "projects",
    title: "13+ Personal and Group Projects",
    description: "Self-driven builds spanning full stack apps and applied machine learning.",
    icon: GitBranch,
  },
];

export const contactInfo = {
  email: "harshitagrawal5160@gmail.com",
  phone: "+91 98838 30998",
  location: "Jalpaiguri, West Bengal, India",
  github: "https://github.com/Harshit997",
  linkedin: "https://www.linkedin.com/in/harshitagrawal004",
  leetcode: "https://leetcode.com/u/harshitagrawal5160/",
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#achievements", label: "Achievements" },
];
