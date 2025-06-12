import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaGithub, 
  FaFigma,
  FaNodeJs 
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiVite, 
  SiJest,
  SiCypress,
  SiSelenium,
  SiPostman,
  SiJira,
  SiTestinglibrary
} from "react-icons/si";
import { Bug, TestTube, Shield, Zap } from "lucide-react";

export const frontendSkills = [
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "React", icon: FaReact, color: "text-cyan-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500" },
  { name: "Vite", icon: SiVite, color: "text-purple-500" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
  { name: "GitHub", icon: FaGithub, color: "text-gray-800" },
  { name: "Figma", icon: FaFigma, color: "text-pink-500" },
];

export const testingSkills = [
  { name: "Manual Testing", icon: TestTube, color: "text-blue-600" },
  { name: "Test Automation", icon: Zap, color: "text-yellow-500" },
  { name: "Jest", icon: SiJest, color: "text-red-600" },
  { name: "React Testing Library", icon: SiTestinglibrary, color: "text-red-500" },
  { name: "Cypress", icon: SiCypress, color: "text-green-600" },
  { name: "Selenium", icon: SiSelenium, color: "text-green-500" },
  { name: "API Testing", icon: SiPostman, color: "text-orange-500" },
  { name: "Bug Tracking", icon: Bug, color: "text-red-500" },
  { name: "Quality Assurance", icon: Shield, color: "text-blue-500" },
  { name: "JIRA", icon: SiJira, color: "text-blue-600" },
];

export const softSkills = [
  "Analytical Thinking",
  "Problem Solving", 
  "Attention to Detail",
  "Communication",
  "Team Collaboration",
  "Continuous Learning",
  "Time Management",
  "Critical Thinking",
  "Adaptability",
  "Documentation"
];