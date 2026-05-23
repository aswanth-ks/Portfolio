import batteryFront from "../assets/images/blog/Battery_front.png";
import ieee1 from "../assets/images/blog/ieee1.png";
import digsafe1 from "../assets/images/blog/DigSafe1.png";
import smartAid1 from "../assets/images/blog/SmartAid1.png";
import trustTrade1 from "../assets/images/blog/TrustTrade1.png";

export const featuredPosts = [
  {
    id: 1,
    title: "Building a Custom 3S2P Lithium Battery Pack for My Smart Agricultural Rover",
    excerpt: "Agriculture is increasingly adopting intelligent automation. Discover how I engineered a custom high-discharge 3S2P lithium battery pack to power an AI-driven agricultural rover.",
    category: "Hardware Engineering",
    date: "May 21, 2026",
    readTime: "6–8 min read",
    image: batteryFront,
    gradient: "from-blue-500 to-indigo-600",
    link: "/blog/rover-battery",
  },
  {
    id: 2,
    title: "Lessons from Publishing My First IEEE Research Paper as a Student",
    excerpt: "A brutally honest breakdown of what it actually takes to go from a student project idea to a published IEEE conference paper.",
    category: "Research",
    date: "May 23, 2026",
    readTime: "8-10 min read",
    image: ieee1,
    gradient: "from-purple-500 to-pink-500",
    link: "/blog/ieee-research",
  },
  {
    id: 3,
    title: "DIGSAFE: A 5G-Enabled Smart Helmet for Worker Safety",
    excerpt: "An IEEE research project exploring how AI, IoT telemetry, and 5G communication can transition industrial worker safety from reactive to predictive.",
    category: "Safety Engineering",
    date: "May 24, 2026",
    readTime: "8-10 min read",
    image: digsafe1,
    gradient: "from-emerald-400 to-cyan-500",
    link: "/blog/digsafe",
  },
  {
    id: 4,
    title: "SmartAid – AI & IoT Powered Emergency Response System",
    excerpt: "Transforming Emergency Response with Intelligent Automation, IoT Telemetry, and Real-Time Cloud Infrastructure.",
    category: "Smart Systems",
    date: "May 25, 2026",
    readTime: "8-10 min read",
    image: smartAid1,
    gradient: "from-rose-500 to-orange-500",
    link: "/blog/smartaid",
  },
  {
    id: 5,
    title: "How the Idea of TrustTrade Was Born",
    excerpt: "A real-world frustration that evolved into the idea for a safer peer-to-peer trading platform.",
    category: "Product Design",
    date: "May 25, 2026",
    readTime: "7–9 min read",
    image: trustTrade1,
    gradient: "from-indigo-500 to-blue-500",
    link: "/blog/trusttrade",
  }
];
