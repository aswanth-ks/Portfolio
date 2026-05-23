import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FiCalendar, FiClock, FiArrowLeft, FiTag, FiCpu, FiZap, FiSettings, FiAlertTriangle, FiInfo } from "react-icons/fi";
import { Link } from "react-router-dom";

import batteryFront from "../assets/images/blog/Battery_front.png";
import battery2 from "../assets/images/blog/Battery2.jpeg";
import heroImage from "../assets/images/blog/Battery_front.png";
import authorImage from "../assets/images/profile/aswanth-profile.jpg";
import ProtectedImage from "../components/ui/ProtectedImage";
import SEO from "../components/ui/SEO";

const articleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/* ─── Custom UI Components ───────────────────────── */

const SpecCard = ({ title, icon: Icon, specs }) => (
  <div className="glass-premium rounded-2xl p-6 border border-white/10 my-10 relative overflow-hidden group">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="flex items-center gap-3 mb-4 relative z-10">
      <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
        <Icon className="text-xl" />
      </div>
      <h3 className="text-xl font-heading font-bold text-white m-0">{title}</h3>
    </div>
    <ul className="space-y-3 relative z-10 m-0 p-0 list-none">
      {specs.map((spec, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-white/70">
          <span className="text-blue-400 mt-0.5">•</span>
          {spec}
        </li>
      ))}
    </ul>
  </div>
);

const CalloutBox = ({ title, children, type = "info" }) => {
  const styles = {
    info: "border-blue-500/30 bg-blue-500/5 text-blue-100",
    warning: "border-amber-500/30 bg-amber-500/5 text-amber-100",
  };
  const icon = type === "warning" ? <FiAlertTriangle className="text-amber-400 text-xl" /> : <FiInfo className="text-blue-400 text-xl" />;

  return (
    <div className={`rounded-2xl p-6 border ${styles[type]} my-8 flex gap-4`}>
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <div>
        {title && <h4 className="font-bold mb-2 m-0 text-white">{title}</h4>}
        <div className="text-sm opacity-90 leading-relaxed m-0">{children}</div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════
   BLOG POST
   ═══════════════════════════════════════════════════ */

export default function RoverBatteryPost() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.article
      className="relative min-h-screen bg-navy-950 overflow-hidden font-body pb-32 pt-24 lg:pt-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <SEO 
        article={true}
        schema="article"
        title="Rover Battery Build: Powering Autonomous Robotics"
        description="A technical deep-dive into the custom battery architecture powering an autonomous rover prototype for hackathon competition."
        publishedTime="2024-05-10T12:00:00Z"
      />
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[150px] animate-float-slow" />
        <div className="absolute top-[30%] left-[-15%] w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[130px] animate-float" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[900px] mx-auto px-6 lg:px-8">
        
        {/* Back Navigation */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 max-w-[750px] mx-auto"
        >
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-white/50 hover:text-white transition-colors duration-300 group">
            <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Journal
          </Link>
        </motion.div>

        {/* ── Header Section ── */}
        <motion.header
          variants={articleVariants}
          initial="hidden"
          animate="visible"
          className="mb-12 max-w-[750px] mx-auto text-center md:text-left"
        >
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-6">
            <span className="flex items-center gap-1.5 glass px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10">
              <FiTag /> Embedded Systems / IoT Engineering
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-[64px] font-black text-white leading-[1.1] mb-6 tracking-tight">
            Building a Custom 3S2P Lithium Battery Pack for My Smart Agricultural Rover
          </h1>

          <p className="text-xl md:text-2xl text-white/60 leading-relaxed mb-8 max-w-3xl font-light">
            A practical engineering build log on designing a custom, high-discharge power system for an autonomous agricultural rover.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-4 text-xs text-white/40 font-medium py-6 border-y border-white/5">
            <div className="flex items-center gap-3">
              <ProtectedImage 
                src={authorImage} 
                alt="Aswanth Karuppannan" 
                className="w-8 h-8 rounded-full object-cover border-2 border-blue-500/50 shadow-glow-blue"
              />
              <span className="text-white/80 font-semibold tracking-wide">Aswanth Karuppannan</span>
            </div>
            <span className="flex items-center gap-2 uppercase tracking-wider">
              <FiCalendar className="text-white/30 text-sm" /> May 21, 2026
            </span>
            <span className="flex items-center gap-2 uppercase tracking-wider">
              <FiClock className="text-white/30 text-sm" /> 6–8 min read
            </span>
          </div>
        </motion.header>

        {/* ── Hero Image ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mb-16 rounded-2xl md:rounded-[32px] overflow-hidden glass-premium border border-white/10 shadow-[0_20px_60px_-15px_rgba(59,130,246,0.15)] relative group mx-auto w-full max-w-[900px]"
        >
          <ProtectedImage 
            src={batteryFront} 
            alt="Rover Custom Battery Enclosure" 
            className="w-full h-auto max-h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
            watermark={true}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />
        </motion.div>

        {/* ── Article Content ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="prose prose-invert max-w-[750px] mx-auto 
                     prose-headings:font-heading prose-headings:font-bold prose-headings:text-white prose-headings:tracking-tight
                     prose-h2:text-[32px] md:prose-h2:text-[36px] prose-h2:font-extrabold prose-h2:mt-24 prose-h2:mb-8 prose-h2:leading-snug prose-h2:text-cyan-400 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-4
                     prose-h3:text-[24px] md:prose-h3:text-[28px] prose-h3:mt-12 prose-h3:mb-4 prose-h3:text-cyan-300
                     prose-p:text-[18px] md:prose-p:text-[20px] prose-p:text-white/70 prose-p:font-light prose-p:leading-[1.9] prose-p:mb-8
                     prose-li:text-[18px] md:prose-li:text-[20px] prose-li:text-white/70 prose-li:font-light prose-li:leading-[1.9] prose-ul:mb-8
                     prose-strong:text-white/90 prose-strong:font-semibold
                     prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
                     marker:text-blue-500"
        >
          
          <h2>Introduction</h2>
          <p>
            Agriculture is increasingly adopting intelligent automation to improve crop health monitoring and reduce the manual effort required in the fields. As part of my journey into engineering physical systems, I set out to build a <strong>Smart Agricultural Rover</strong>—an AI-powered mobile platform designed to traverse uneven farm terrain, detect plant diseases, and automate fertilizer or pesticide spraying in real time.
          </p>
          <p>
            While the software and AI logic were challenging, one of the biggest engineering hurdles turned out to be power delivery. A system drawing current for logic processing, continuous wireless communication, heavy-duty motors, and a fluid pump cannot rely on standard AA batteries or a simple USB power bank. I needed a robust, high-discharge power source.
          </p>

          <h2>Project Overview</h2>
          <p>
            The rover serves as an autonomous assistant for farmers. Its core capability is remote navigation coupled with real-time plant health monitoring. Instead of blanket-spraying an entire field—which wastes chemicals and harms the environment—the rover selectively sprays only the infected plants. 
          </p>
          <p>
            Using a custom mobile application, the user can manually control the rover (forward, backward, left, right) and activate the spray mechanism. When the AI disease detection mode is active, the app analyzes plant leaf images using an image classification model. If a disease is detected, it automatically commands the rover to deploy the onboard fertilizer or pesticide.
          </p>

          <h2>System Architecture</h2>
          <p>
            To understand the power requirements, we first need to look at the hardware architecture:
          </p>

          <SpecCard 
            title="Core Architecture" 
            icon={FiCpu} 
            specs={[
              <React.Fragment key="1"><strong>Microcontroller:</strong> ESP32, acting as the brain and handling WiFi communication.</React.Fragment>,
              <React.Fragment key="2"><strong>Mobility:</strong> 6-wheel rover chassis driven by dual L298N motor drivers.</React.Fragment>,
              <React.Fragment key="3"><strong>Actuation:</strong> 12V DC fluid pump for the targeted spraying mechanism.</React.Fragment>,
              <React.Fragment key="4"><strong>Communication:</strong> ESP32 localized WiFi hotspot for direct offline HTTP communication.</React.Fragment>
            ]}
          />

          <h2>Why Custom Power Design Was Needed</h2>
          <p>
            When testing early prototypes, I quickly realized that powering the ESP32 and the heavy inductive loads (the motors and the 12V pump) from the same generic power source caused severe voltage drops. When the motors stalled or the pump activated, the ESP32 would brown out and reset, severing the WiFi connection and leaving the rover stranded.
          </p>
          <p>
            Off-the-shelf power banks output 5V, which is insufficient for the 12V pump and inefficient for the L298N drivers. Standard lead-acid batteries are too heavy for a nimble rover. The solution was clear: I needed a custom, high-energy-density lithium-ion battery pack capable of delivering 12V at a high discharge rate.
          </p>

          <h2>Building the 3S2P Battery Pack</h2>
          <p>
            I decided to design and build a <strong>3S2P Lithium-Ion Battery Pack</strong> using standard 18650 cells. This configuration strikes the perfect balance between voltage, capacity, and weight for this specific agricultural rover.
          </p>

          <SpecCard 
            title="Battery Specifications" 
            icon={FiZap} 
            specs={[
              "Configuration: 3S2P (3 Series, 2 Parallel)",
              "Nominal Voltage: 11.1V (12.6V fully charged)",
              "Cell Type: High-drain 18650 Lithium-Ion",
              "Primary Load: 12V DC Pump & L298N Motor Drivers"
            ]}
          />

          <figure className="my-14 max-w-xl mx-auto rounded-2xl overflow-hidden glass-premium border border-white/5 shadow-xl">
            <ProtectedImage 
              src={battery2} 
              alt="Battery Management System Wiring" 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              watermark={true}
            />
            <figcaption className="text-center text-[13px] text-white/40 p-4 m-0 border-t border-white/5 bg-white/[0.02]">
              Wiring and soldering the custom 18650 battery pack with pure nickel strips.
            </figcaption>
          </figure>

          <h2>Understanding the 3S2P Configuration</h2>
          <p>
            If you are new to battery building, "3S2P" refers to the physical and electrical arrangement of the cells:
          </p>
          <ul>
            <li><strong>3S (3 in Series):</strong> Connecting three 3.7V nominal cells in series increases the total voltage. 3 × 3.7V = <strong>11.1V nominal</strong>. This provides the necessary voltage to drive the 12V spray pump and the L298N motor drivers efficiently.</li>
            <li><strong>2P (2 in Parallel):</strong> Connecting two of these series groups in parallel doubles the capacity (mAh) and the maximum discharge current, ensuring the rover can run longer and handle sudden current spikes.</li>
          </ul>

          <h2>Engineering Challenges During Assembly</h2>
          <p>
            Building the pack wasn't without its hurdles. The most critical challenge was the connection method. Soldering directly to 18650 cells is highly discouraged because excessive heat can damage the internal chemistry or even cause a thermal runaway. 
          </p>
          
          <CalloutBox title="Technical Note: Spot Welding vs. Soldering" type="info">
            Ideally, a capacitive spot welder is used to attach pure nickel strips to the battery terminals. Lacking a spot welder, I had to use a high-wattage soldering iron with flux to ensure the heat was applied for less than two seconds per joint.
          </CalloutBox>

          <p>
            Getting the power distribution right, ensuring the wires could handle the current without melting, and keeping the pack compact required careful planning and iterative testing.
          </p>

          <h2>Safety Considerations</h2>
          <p>
            Lithium-ion batteries hold an immense amount of energy. A dead short can easily cause a fire. During assembly, I used insulating fish paper rings on the positive terminals to prevent shorts between the positive cap and the negative casing. 
          </p>
          
          <CalloutBox title="Warning: Battery Balancing" type="warning">
            You cannot simply connect 18650 cells directly to a load without protection. Handling the balancing of the cells during charge and discharge is paramount to prevent over-discharging (which kills the cell) or over-charging (which can cause thermal events).
          </CalloutBox>

          <h2>Integration with the Rover</h2>
          <p>
            Once assembled, the 11.1V output was routed to the L298N motor drivers and a relay module for the 12V pump. I used a step-down buck converter (LM2596) to efficiently drop the 11.1V down to a clean 5V to power the ESP32 logic board. 
          </p>
          <p>
            The result was a rover that performed flawlessly. The motors had plenty of torque to handle dirt and grass, the spray pump operated at full pressure, and the ESP32 maintained a rock-solid HTTP connection to the mobile app without browning out.
          </p>

          <h2>Lessons Learned</h2>
          <p>
            Building hardware teaches you to respect the physical constraints of engineering. Software bugs throw exceptions; hardware bugs melt wires. Designing this custom power source taught me the importance of power budgeting, the necessity of decoupling logic power from motor power, and the practical realities of high-current electronics.
          </p>

          <h2>Future Improvements</h2>
          <p>
            This 3S2P pack proved the concept, but a production-ready agricultural rover needs more resilience. Future iterations will include:
          </p>
          
          <SpecCard 
            title="Roadmap" 
            icon={FiSettings} 
            specs={[
              "Integrated BMS (Battery Management System) for safe charging and cell balancing.",
              "3D-printed, rugged waterproof housing to protect the pack from dirt and moisture.",
              "Power Telemetry using an INA219 sensor to send real-time data back to the mobile app.",
              "Solar Integration via a charge controller for continuous field operation."
            ]}
          />
          
          {/* Article Footer */}
          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 not-prose">
            <div className="flex items-center gap-4">
              <ProtectedImage 
                src={authorImage} 
                alt="Aswanth Karuppannan" 
                className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/50 shadow-glow-blue"
              />
              <div>
                <p className="text-white font-bold text-sm">Aswanth Karuppannan</p>
                <p className="text-white/40 text-xs">Software Engineer & Builder</p>
              </div>
            </div>
            <Link to="/blog" className="px-6 py-2.5 rounded-full border border-white/10 text-white/70 hover:text-white hover:bg-white/5 transition-colors text-sm font-semibold">
              Read more articles
            </Link>
          </div>

        </motion.div>
      </div>
    </motion.article>
  );
}
