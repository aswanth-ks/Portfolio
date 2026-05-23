import {
  FiBriefcase,
  FiShield,
  FiZap,
  FiGlobe,
  FiServer,
  FiCpu,
  FiCode,
  FiDatabase,
  FiSmartphone,
  FiBookOpen,
} from "react-icons/fi";
import {
  HiOutlineSparkles,
  HiOutlineLightBulb,
} from "react-icons/hi";

export const internshipExperience = {
  number: "01",
  type: "Internship",
  icon: FiBriefcase,
  role: "Full Stack Developer Intern (Backend Focus)",
  company: "MoviCloud Labs Pvt Ltd",
  duration: "Jan 2026 – Present",
  location: "India",
  description:
    "Working as a backend-focused full stack developer building production-grade applications. Developing RESTful APIs, designing database architectures, and contributing to full-stack product development across web and mobile platforms.",
  responsibilities: [
    "Developed RESTful APIs for core application modules with clean endpoint design",
    "Designed database schemas and backend workflows using MySQL and MongoDB",
    "Implemented CRUD operations, request handling, and API integration across services",
    "Worked on authentication flows, debugging, and backend testing pipelines",
    "Supported full-stack production application development including Flutter mobile",
  ],
  technologies: ["REST APIs", "MySQL", "MongoDB", "Backend Dev", "Full Stack", "Flutter"],
  focusAreas: [
    "Backend Architecture",
    "Database Design",
    "API Development",
    "Production Systems",
  ],
  gradient: "from-blue-500 to-purple-600",
  featured: true,
  current: true,
};

export const technicalProjects = [
  {
    title: "DIGSAFE",
    icon: FiShield,
    role: "IoT Developer / Frontend",
    date: "Oct 2025",
    description: "Smart industrial safety helmet for hazardous environments with real-time biometric and environmental monitoring.",
    contributions: [
      "Worker safety monitoring system",
      "Gas, environmental & biometric detection",
      "Remote alert monitoring for supervisors",
      "Hazard detection & accident prevention",
    ],
    tech: ["IoT Sensors", "ESP32", "Dashboard", "5G"],
    badge: "IEEE Paper",
    badgeStyle: "bg-cyan-500/15 border border-cyan-500/25 text-cyan-300",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "SMART-AID",
    icon: FiZap,
    role: "IoT Developer",
    date: "Oct 2025",
    description: "AI-powered emergency response system reducing delay between accidents and medical assistance.",
    contributions: [
      "Accident detection via accelerometer & gyroscope",
      "Automated emergency alert workflow",
      "Real-time location sharing & hospital selection",
      "Golden-hour response optimization",
    ],
    tech: ["IoT", "Accelerometer", "GPS", "AI Logic"],
    badge: "1st Prize",
    badgeStyle: "bg-amber-500/15 border border-amber-500/25 text-amber-300",
    gradient: "from-amber-400 to-orange-500",
  },
];

export const innovationItems = [
  {
    title: "Build for Bengaluru Hackathon",
    venue: "REVA University, Bengaluru",
    description: "Competed in a large-scale national hackathon focused on smart city solutions and urban innovation challenges.",
    icon: FiGlobe,
    gradient: "from-green-500/30 to-emerald-500/30",
  },
  {
    title: "Hackathon Winner — 3x",
    venue: "Multiple Engineering Colleges",
    description: "Secured first place in three competitive hackathons, demonstrating consistent innovation and technical execution under pressure.",
    icon: FiZap,
    gradient: "from-amber-500/30 to-orange-500/30",
  },
  {
    title: "Ideathon Competitions",
    venue: "Various Technical Events",
    description: "Active participation in ideation competitions, showcasing creative thinking and product strategy skills.",
    icon: HiOutlineLightBulb,
    gradient: "from-purple-500/30 to-pink-500/30",
  },
  {
    title: "Innovation Events",
    venue: "Technical Fests & Symposiums",
    description: "Contributed to innovation-driven technical events, building a strong foundation in competitive engineering.",
    icon: HiOutlineSparkles,
    gradient: "from-blue-500/30 to-indigo-500/30",
  },
];

export const skillsFromExperience = [
  { title: "Backend Dev", subtitle: "APIs & Databases", icon: FiServer, gradient: "from-blue-500/20 to-indigo-500/20" },
  { title: "IoT Systems", subtitle: "Sensors & Embedded", icon: FiCpu, gradient: "from-cyan-500/20 to-teal-500/20" },
  { title: "Frontend", subtitle: "React & Dashboards", icon: FiCode, gradient: "from-purple-500/20 to-pink-500/20" },
  { title: "Databases", subtitle: "MySQL & MongoDB", icon: FiDatabase, gradient: "from-green-500/20 to-emerald-500/20" },
  { title: "Mobile", subtitle: "Flutter", icon: FiSmartphone, gradient: "from-amber-500/20 to-orange-500/20" },
  { title: "Research", subtitle: "IEEE Publication", icon: FiBookOpen, gradient: "from-rose-500/20 to-pink-500/20" },
];
