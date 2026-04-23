import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiVite, SiPostman } from 'react-icons/si';

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: FaHtml5, level: 90 },
      { name: "CSS3 / Tailwind", icon: SiTailwindcss, level: 85 },
      { name: "JavaScript", icon: FaJs, level: 80 },
      { name: "React.js", icon: FaReact, level: 75 },
    ]
  },
  {
    category: "Backend & Database",
    items: [
      { name: "Node.js", icon: FaNodeJs, level: 65 },
      { name: "Express.js", icon: SiExpress, level: 70 },
      { name: "MongoDB", icon: SiMongodb, level: 60 },
      { name: "Python", icon: FaPython, level: 75 },
    ]
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git & GitHub", icon: FaGitAlt, level: 85 },
      { name: "VS Code", icon: SiVite, level: 90 },
      { name: "Postman", icon: SiPostman, level: 75 },
      { name: "C Programming", level: 70 },
    ]
  }
];
