import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaGithub, 
  FaFigma,
  FaPython,
  FaGitAlt
  
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
  SiTestinglibrary,
  SiMocha,
  SiTrello,
  SiLighthouse
} from "react-icons/si";
import { Bug, TestTube, Shield, Zap, FileCheck, Search, AlertTriangle, CheckCircle } from "lucide-react";

export const testingSkills = [
  { name: "Manual Testing", icon: TestTube, color: "text-blue-600" },
  { name: "Test Automation", icon: Zap, color: "text-yellow-500" },
  { name: "Jest", icon: SiJest, color: "text-red-600" },
  { name: "React Testing Library", icon: SiTestinglibrary, color: "text-red-500" },
  { name: "Cypress", icon: SiCypress, color: "text-green-600" },
  { name: "Selenium", icon: SiSelenium, color: "text-green-500" },
  { name: "Mocha", icon: SiMocha, color: "text-brown-600" },
  { name: "API Testing", icon: SiPostman, color: "text-orange-500" },
  { name: "Bug Tracking", icon: Bug, color: "text-red-500" },
  { name: "Quality Assurance", icon: Shield, color: "text-blue-500" },
  { name: "Test Planning", icon: FileCheck, color: "text-purple-600" },
  { name: "Regression Testing", icon: Search, color: "text-indigo-600" },
  { name: "Performance Testing", icon: AlertTriangle, color: "text-yellow-600" },
  { name: "User Acceptance Testing", icon: CheckCircle, color: "text-green-600" },
];

export const programmingSkills = [
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "React", icon: FaReact, color: "text-cyan-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500" },
  { name: "Python", icon: FaPython, color: "text-yellow-500" },
];

export const toolsSkills = [
  { name: "JIRA", icon: SiJira, color: "text-blue-600" },
  { name: "GitHub", icon: FaGithub, color: "text-gray-800" },
  { name: "Git", icon: FaGitAlt, color: "text-red-600" },
  { name: "Postman", icon: SiPostman, color: "text-orange-500" },
  { name: "Figma", icon: FaFigma, color: "text-pink-500" },
  { name: "Vite", icon: SiVite, color: "text-purple-500" },
  { name: "Trello", icon: SiTrello, color: "text-blue-500" },
  { name: "Lighthouse", icon: SiLighthouse, color: "text-red-500" },
];