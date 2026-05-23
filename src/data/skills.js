import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaJava,
  FaPython, FaGitAlt, FaSearch, FaCamera, FaFilm, FaFigma, FaPaperclip, FaCode,
} from "react-icons/fa";
import {
  SiTailwindcss, SiSpringboot, SiFastapi, SiMongodb, SiMysql,
  SiPostman, SiGoogleanalytics, SiDavinciresolve, SiCanva, SiPostgresql,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

export const categories = [
  {
    title: "Frontend",
    gradient: "from-blue-500 to-cyan-400",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "#e34f26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572b6" },
      { name: "JavaScript", icon: FaJsSquare, color: "#f7df1e" },
      { name: "React", icon: FaReact, color: "#61dafb" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
    ],
  },
  {
    title: "Backend",
    gradient: "from-purple-500 to-pink-500",
    skills: [
      { name: "Java", icon: FaJava, color: "#ed8b00" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6db33f" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Python", icon: FaPython, color: "#3776ab" },
    ],
  },
  {
    title: "Database",
    gradient: "from-green-500 to-emerald-400",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "MySQL", icon: SiMysql, color: "#4479a1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    ],
  },
  {
    title: "Tools & DevOps",
    gradient: "from-amber-400 to-orange-500",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#f05032" },
      { name: "VS Code", icon: VscCode, color: "#007acc" },
      { name: "Postman", icon: SiPostman, color: "#ff6c37" },
      { name: "Figma", icon: FaFigma, color: "#f24e1e" },
      { name: "Canva", icon: SiCanva, color: "#00c4cc" },
      { name: "Openclaw", icon: FaCode, color: "#1e293b" },
      { name: "Paperclip", icon: FaPaperclip, color: "#64748b" },
    ],
  },
  {
    title: "SEO",
    gradient: "from-cyan-400 to-blue-500",
    skills: [
      { name: "On-Page SEO", icon: FaSearch, color: "#4285f4" },
      { name: "Google Analytics", icon: SiGoogleanalytics, color: "#e37400" },
    ],
  },
  {
    title: "Creative Tech",
    gradient: "from-pink-500 to-purple-500",
    skills: [
      { name: "Photography", icon: FaCamera, color: "#e91e90" },
      { name: "Filmmaking", icon: FaFilm, color: "#9333ea" },
      { name: "DaVinci Resolve", icon: SiDavinciresolve, color: "#db3444" },
    ],
  },
];
