import {
  FiAward,
  FiBookOpen,
  FiCpu,
  FiGlobe,
  FiShield,
} from "react-icons/fi";
import {
  HiOutlineAcademicCap,
  HiOutlineLightBulb,
} from "react-icons/hi";

export const stats = [
  { value: "3", suffix: "+", label: "Hackathon Wins", icon: FiAward },
  { value: "1", suffix: "", label: "IEEE Publication", icon: FiBookOpen },
  { value: "5", suffix: "+", label: "Competitions", icon: FiGlobe },
  { value: "3", suffix: "+", label: "Certifications", icon: HiOutlineAcademicCap },
];

export const majorAchievements = [
  {
    position: "#1",
    badge: "1st Prize",
    title: "Hackathon Winner",
    venue: "Kongu Engineering College, Erode",
    description:
      "Won first prize for innovation and technical execution in a competitive hackathon environment. Recognized for engineering quality and creative problem-solving.",
    award: "₹10,000 Cash Prize",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    position: "#1",
    badge: "1st Prize",
    title: "Gen-Craft Appathon",
    venue: "M Kumarasamy College of Engineering, Karur",
    description:
      "Secured first place by developing an innovative application concept with strong technical and product execution.",
    award: null,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    position: "#1",
    badge: "1st Prize",
    title: "Gen-Craft Hackathon",
    venue: "M Kumarasamy College of Engineering, Karur",
    description:
      "Recognized for technical creativity, implementation excellence, and problem-solving under competitive pressure.",
    award: null,
    gradient: "from-purple-500 to-pink-500",
  },
];

export const digsafeTech = [
  { label: "IoT Sensors", icon: FiCpu },
  { label: "ESP32", icon: FiCpu },
  { label: "Dashboard", icon: FiGlobe },
  { label: "5G Integration", icon: FiShield },
];

export const digsafeContributions = [
  "Built real-time worker safety monitoring system",
  "Integrated gas, environmental & biometric monitoring",
  "Enabled remote alert monitoring for supervisors",
  "Focused on hazard detection & accident prevention",
];

export const additionalAchievements = [
  {
    title: "Build for Bengaluru Hackathon",
    subtitle: "REVA University, Bengaluru",
    description: "Participated in a large-scale national hackathon focused on building solutions for smart city challenges.",
    icon: FiGlobe,
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Multiple Hackathons & Ideathons",
    subtitle: "Innovation Competitions",
    description: "Active participation across multiple innovation-driven technical competitions, demonstrating consistent competitive drive.",
    icon: HiOutlineLightBulb,
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "JLPT N5 Certified",
    subtitle: "Japanese Language Proficiency Test",
    description: "Certified Japanese language proficiency demonstrating foundational reading and listening competency.",
    icon: FiBookOpen,
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    title: "NPTEL Certification",
    subtitle: "Internet of Things",
    description: "Completed certified coursework in IoT fundamentals, covering sensor networks, embedded systems, and connected architectures.",
    icon: FiCpu,
    gradient: "from-cyan-500/20 to-teal-500/20",
  },
];
