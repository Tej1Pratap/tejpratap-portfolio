import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaJava,
  FaReact,
  FaGitAlt,
  FaCss3Alt,
  FaHtml5,
  FaChevronLeft,
  FaChevronRight,
  FaFilePdf,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiJavascript,
  SiEclipseide,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

import { motion, AnimatePresence } from "framer-motion";
import profileImg from "./assets/profile.jpeg";

export default function FuturisticPortfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [cardImageIndices, setCardImageIndices] = useState({});
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock background scroll when modal or mobile menu is open
  useEffect(() => {
    if (selectedProject || isProfileModalOpen || isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject, isProfileModalOpen, isMobileMenuOpen]);

  const openProject = (project) => {
    setSelectedProject(project);
    setModalImageIndex(0);
  };

  const prevCardImage = (e, index, total) => {
    e.stopPropagation();
    setCardImageIndices((prev) => ({
      ...prev,
      [index]: ((prev[index] ?? 0) - 1 + total) % total,
    }));
  };

  const nextCardImage = (e, index, total) => {
    e.stopPropagation();
    setCardImageIndices((prev) => ({
      ...prev,
      [index]: ((prev[index] ?? 0) + 1) % total,
    }));
  };
  const githubLink = "https://github.com/Tej1Pratap";
  const linkedinLink = "https://www.linkedin.com/in/tej-pratap-7472b22b1/";
  const gmailLink = "mailto:tejpratap11102@gmail.com";
  const resumeLink = "/Tej_Pratap_Resume.pdf";

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const certifications = [
    {
      title: "Software	Engineering	Job	Simulation",
      issuer: "Forage, Hewlett packard Enterprise` ",
      pdf: "/certifications/Hewalat.pdf",
    },
    {
      title: "Design and analysis of algorithum",
      issuer: "Codetantra",
      pdf: "/certifications/DAA..pdf",
    },
    {
      title: "JavaScript basic",
      issuer: "UpGrade",
      pdf: "/certifications/generated.pdf",
    },
    // ✅ ADD MORE CERTIFICATES BELOW — copy-paste the block above and change the values
    // {
    //   title: "Your Certificate Title",
    //   issuer: "Issuer Name (e.g. Google, Udemy, NPTEL)",
    //   pdf: "/certifications/your-file-name.pdf",
    // },
  ];

  const technicalSkills = [
    { name: "Java", icon: FaJava, color: "#f89820", desc: "Scalable backend applications, OOP concepts, multithreading, and robust architecture." },
    { name: "Spring Boot", icon: SiSpringboot, color: "#6db33f", desc: "Enterprise-grade REST APIs, microservices architecture, and secure backend workflows." },
    { name: "ReactJS", icon: FaReact, color: "#61dafb", desc: "Interactive user interfaces, state management, and modern component-driven SPA development." },
    { name: "MySQL", icon: SiMysql, color: "#4479a1", desc: "Relational database design, writing complex optimized queries, and ensuring data integrity." },
    { name: "JavaScript", icon: SiJavascript, color: "#f7df1e", desc: "Dynamic client-side scripting, asynchronous control flow, and modern ES6+ paradigms." },
    { name: "CSS", icon: FaCss3Alt, color: "#1572b6", desc: "Responsive layouts, transitions, custom properties, and sleek modern UI aesthetics." },
    { name: "HTML", icon: FaHtml5, color: "#e34f26", desc: "Semantic web page structure, SEO best practices, and web accessibility standards." }
  ];

  const tools = [
    { name: "Git", icon: FaGitAlt, color: "#f05032", desc: "Robust local version control, branching strategies, and codebase history management." },
    { name: "GitHub", icon: FaGithub, color: "#ffffff", desc: "Collaborative development, repository hosting, Pull Requests, and CI/CD pipelines." },
    { name: "VS Code", icon: VscVscode, color: "#007acc", desc: "Modern IDE environment with customized extensions for rapid full-stack development." },
    { name: "Eclipse", icon: SiEclipseide, color: "#f7941e", desc: "Enterprise Java development environment, debugging, and robust compiler workflows." }
  ];

  const projects = [
    {
      title: "Smart Agro-Defence Intelligence & Monitoring",

      desc: `Protect you crops with state-of-the-art AI disease detection and precise farm management. Early detection leads to healthier fields and 30% higher yields.
• Developed a responsive and interactive frontend using React  
• Built secure REST APIs and backend services using Spring Boot  
• Integrated AI/ML models using Python for intelligent features  
• Implemented NLP functionalities for text processing and analysis  
• Worked with databases and API integration for seamless data flow  
• Collaborated with team members using Git and GitHub`,

      github: "https://github.com/your-github/ai-project",

      live: "",

      tech: [
        "Springboot",
        "ReactJs",
        "Python AI/ML",
        "OpenAI API",
      ],

      // ✅ HOW TO ADD YOUR OWN SCREENSHOTS:
      // 1. Put your image files (e.g., .png, .jpg) inside the "public/screenshots/" folder
      // 2. Change the URLs below to "/screenshots/your-image-name.png"
      images: [
         "/screenshots/crop1.png",
        "/screenshots/crop2.png",
        "/screenshots/crop3.png"
       ],
    },

    {
      title: "AI Based Library Management System",

      desc: `A platform that manages books for physical and digital libraries with AI assistant support.
      • Developed a responsive and interactive frontend using React for seamless user experience
      • Built secure REST APIs and backend services using Spring Boot
      • Integrated AI-based OCR technology for book scanning and automated text extraction
      • Implemented camera integration for real-time book recognition and library management
      • Added Razorpay payment gateway for secure online fine and membership payments
      • Worked with database management and API integration for smooth data flow
      • Collaborated with team members using Git and GitHub for version control and project management`,

      github: "https://github.com/your-github/library-project",

      live: "https://your-library-project.vercel.app",

      tech: [
        "AI Integration",
        "React",
        "Springboot",
        "MySQL",
        "Razorpay Api Key",
      ],

      images: [
        "/screenshots/Library.png",
        "/screenshots/Library2.png",
        "/screenshots/Library3.png",
        "/screenshots/Library4.png",
        "/screenshots/Library5.png",
      ],
    },

    {
      title: "Weather App",

      desc: "Displays real-time weather data using public APIs.",

      github: "https://github.com/Tej1Pratap/WeatherApp",

      live: "https://tej1pratap.github.io/WeatherApp/",

      tech: [
        "Weather API",
        "JavaScript",
        "HTML",
        "CSS",
      ],

      images: [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop"
      ],
    },

    {
      title: "Tic Tac Toe",

      desc: "Interactive game built using JavaScript with responsive gameplay.",

      github: "https://github.com/Tej1Pratap/Tic-Tac-Toe-Game",

      live: "https://tej1pratap.github.io/Tic-Tac-Toe-Game/", // Leave this empty ("") to show "Ongoing"

      tech: [
        "JavaScript",
        "HTML",
        "CSS",
      ],

      images: [
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1553481187-be93c21490a9?q=80&w=1200&auto=format&fit=crop"
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden font-sans relative">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/10 blur-3xl rounded-full" />

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400/10 blur-3xl rounded-full" />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo with Profile */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsProfileModalOpen(true)}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-green-400 hover:scale-105 transition-transform shrink-0"
              title="View Profile"
            >
              {/* Replace with your image inside public folder */}
              <img src={profileImg} alt="Profile" className="w-full h-full object-cover" onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Tej+Pratap&background=random&color=fff"; }} />
            </button>
            <h1 className="text-xl sm:text-2xl font-bold tracking-wider text-green-400">
              TEJ PRATAP
            </h1>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 text-sm text-gray-300">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-green-400 transition cursor-pointer"
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection("skills")}
              className="hover:text-green-400 transition cursor-pointer"
            >
              Skills
            </button>

            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-green-400 transition cursor-pointer"
            >
              Projects
            </button>

            <button
              onClick={() => scrollToSection("certifications")}
              className="hover:text-green-400 transition cursor-pointer"
            >
              Certifications
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-green-400 transition cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-4 justify-end">
            {/* LinkedIn */}
            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl transition duration-300 hover:scale-110"
              style={{ color: "#0077b5" }}
            >
              <FaLinkedin />
            </a>

            {/* GitHub */}
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl transition duration-300 hover:scale-110 text-white"
            >
              <FaGithub />
            </a>

            {/* Gmail */}
            <a
              href={gmailLink}
              className="text-2xl transition duration-300 hover:scale-110"
              style={{ color: "#f7b9b3" }}
            >
              <FaEnvelope />
            </a>

            {/* Resume Buttons */}
            <div className="flex gap-3">
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-green-400 text-green-400 font-semibold hover:scale-105 transition inline-block text-sm"
              >
                View Resume
              </a>

              <a
                href={resumeLink}
                download
                className="px-4 py-2 rounded-full bg-green-400 text-black font-semibold hover:scale-105 transition inline-flex items-center gap-2 text-sm"
              >
                <FaDownload />
                Resume
              </a>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-xl sm:text-2xl text-gray-300 hover:text-green-400 transition p-2 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-neutral-950/95 backdrop-blur-2xl border-l border-white/10 p-6 flex flex-col justify-between lg:hidden"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xl font-bold tracking-wider text-green-400">
                    MENU
                  </span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl text-gray-300 hover:text-green-400 transition p-1 cursor-pointer"
                  >
                    <FaTimes />
                  </button>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-6 text-lg font-medium text-gray-300">
                  <button
                    onClick={() => {
                      scrollToSection("home");
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left hover:text-green-400 transition cursor-pointer"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => {
                      scrollToSection("skills");
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left hover:text-green-400 transition cursor-pointer"
                  >
                    Skills
                  </button>
                  <button
                    onClick={() => {
                      scrollToSection("projects");
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left hover:text-green-400 transition cursor-pointer"
                  >
                    Projects
                  </button>
                  <button
                    onClick={() => {
                      scrollToSection("certifications");
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left hover:text-green-400 transition cursor-pointer"
                  >
                    Certifications
                  </button>
                  <button
                    onClick={() => {
                      scrollToSection("contact");
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left hover:text-green-400 transition cursor-pointer"
                  >
                    Contact
                  </button>
                </div>
              </div>

              {/* Bottom (Socials & Resume) */}
              <div className="flex flex-col gap-6 border-t border-white/10 pt-6">
                {/* Socials */}
                <div className="flex items-center gap-6 justify-center">
                  <a
                    href={linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl transition duration-300 hover:scale-110"
                    style={{ color: "#0077b5" }}
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl transition duration-300 hover:scale-110 text-white"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={gmailLink}
                    className="text-2xl transition duration-300 hover:scale-110"
                    style={{ color: "#f7b9b3" }}
                  >
                    <FaEnvelope />
                  </a>
                </div>

                {/* Resume Buttons */}
                <div className="flex flex-col gap-3">
                  <a
                    href={resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-2.5 rounded-full border border-green-400 text-green-400 font-semibold hover:bg-green-400/10 transition text-sm"
                  >
                    View Resume
                  </a>
                  <a
                    href={resumeLink}
                    download
                    className="w-full text-center py-2.5 rounded-full bg-green-400 text-black font-semibold hover:bg-green-500 transition flex items-center justify-center gap-2 text-sm"
                  >
                    <FaDownload />
                    Download Resume
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section
        id="home"
        className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            <p className="uppercase tracking-[6px] text-green-400 text-xs sm:text-sm mb-5">
              Future Java Developer
            </p>

            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black leading-none mb-8">
              INNO
              <span className="text-green-400">VATIVE</span>
            </h1>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mb-10">
             "Hi, I am <span className="text-green-400">Tej</span>. I build scalable full-stack applications using Java, Spring Boot, and React. I am passionate about developing <span className="text-green-400">AI-powered</span> solutions focused on modern UI/UX and real-world problem-solving." </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-6 sm:px-7 py-3 sm:py-4 rounded-2xl bg-green-400 text-black font-semibold hover:scale-105 transition-all duration-300"
              >
                Explore Projects
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 sm:px-7 py-3 sm:py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300"
              >
                Contact Me
              </button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
            className="relative"
          >
            <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full" />

            <div className="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] p-4 sm:p-6 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop"
                alt="AI"
                className="w-full h-[250px] sm:h-[500px] object-cover rounded-[30px]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="max-w-7xl mx-auto px-4 sm:px-6 py-20"
      >
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-3xl sm:text-5xl font-bold mb-12"
        >
          Technical Skills
        </motion.h2>

        {/* Core Technologies Grid */}
        <h3 className="text-xl sm:text-2xl font-bold tracking-wider text-green-400 uppercase mb-8">
          Core Technologies
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-16">
          {technicalSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                viewport={{ once: false }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-green-400/50 transition-all duration-300"
              >
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4"
                  style={{ color: skill.color, backgroundColor: `${skill.color}1a` }}
                >
                  <IconComponent />
                </div>

                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {skill.name}
                </h3>

                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {skill.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Development Tools Grid */}
        <h3 className="text-xl sm:text-2xl font-bold tracking-wider text-green-400 uppercase mb-8">
          Development Tools
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {tools.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                viewport={{ once: false }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-green-400/50 transition-all duration-300"
              >
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4"
                  style={{ color: tool.color, backgroundColor: `${tool.color}1a` }}
                >
                  <IconComponent />
                </div>

                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {tool.name}
                </h3>

                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {tool.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="max-w-7xl mx-auto px-4 sm:px-6 py-20"
      >
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-3xl sm:text-5xl font-bold mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: false }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="w-[280px] sm:w-[340px] md:w-[400px] h-[450px] sm:h-[480px] bg-white/5 border border-white/10 rounded-[30px] overflow-hidden transition-all duration-300 flex-shrink-0 snap-start flex flex-col"
            >
              {/* Image Carousel */}
              <div className="relative w-full h-40 sm:h-44 flex-shrink-0 overflow-hidden group/img">
                <img
                  src={project.images[cardImageIndices[index] ?? 0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />

                {/* Left Arrow */}
                <button
                  onClick={(e) => prevCardImage(e, index, project.images.length)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 hover:bg-black/90 z-10"
                >
                  <FaChevronLeft size={10} />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={(e) => nextCardImage(e, index, project.images.length)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 hover:bg-black/90 z-10"
                >
                  <FaChevronRight size={10} />
                </button>

                {/* Dot Indicators */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {project.images.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === (cardImageIndices[index] ?? 0)
                          ? "w-4 bg-green-400"
                          : "w-1.5 bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold line-clamp-1 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-1 leading-relaxed text-xs sm:text-sm line-clamp-2 whitespace-pre-wrap">
                    {project.desc}
                  </p>

                  <button
                    onClick={() => openProject(project)}
                    className="text-green-400 text-xs sm:text-sm font-semibold hover:underline mb-4 self-start cursor-pointer transition"
                  >
                    Read More →
                  </button>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4 overflow-hidden h-7">
                    {project.tech.slice(0, 3).map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-medium">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 sm:py-2.5 rounded-xl border border-green-400/30 text-green-400 font-semibold hover:bg-green-400/10 hover:border-green-400 transition-all duration-300 text-xs sm:text-sm"
                  >
                    GitHub
                  </a>

                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 sm:py-2.5 rounded-xl bg-green-400 text-black font-bold hover:bg-green-500 hover:scale-[1.02] transition-all duration-300 text-xs sm:text-sm shadow-lg shadow-green-400/10"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <div className="flex-1 text-center py-2 sm:py-2.5 rounded-xl bg-gray-500/20 text-gray-400 font-bold text-xs sm:text-sm cursor-not-allowed border border-gray-500/30 flex items-center justify-center">
                      Ongoing...
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section
        id="certifications"
        className="max-w-7xl mx-auto px-4 sm:px-6 py-20"
      >
        <h2 className="text-3xl sm:text-5xl font-bold mb-12">
          Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: false }}
              whileHover={{
                y: -6,
              }}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-green-400/40 transition-all duration-300 flex flex-col justify-between gap-4"
            >
              <div>
                <h3 className="text-base font-semibold mb-1 leading-snug">
                  {certificate.title}
                </h3>

                <p className="text-gray-400 text-xs">
                  Issued by {certificate.issuer}
                </p>
              </div>

              <a
                href={certificate.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-green-400 text-black text-xs font-semibold hover:scale-105 transition self-start"
              >
                <FaFilePdf size={12} />
                View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-5xl mx-auto px-4 sm:px-6 py-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] p-8 sm:p-14 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-green-500/10 blur-3xl" />

          <div className="relative z-10">
            <p className="text-green-400 uppercase tracking-[5px] text-sm mb-5">
              Contact
            </p>

            <h2 className="text-4xl sm:text-6xl font-black leading-tight mb-6">
              LET'S BUILD
              <span className="text-green-400"> TOGETHER</span>
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed text-sm sm:text-base">
              I’m passionate about building futuristic web experiences and
              scalable applications.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mb-8">
              <a
                href="mailto:yourmail@gmail.com"
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-green-400 text-black font-semibold hover:scale-105 transition-all duration-300 inline-block"
              >
                Hire Me
              </a>

              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 inline-block"
              >
                GitHub
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-6 text-2xl sm:text-3xl mt-6">
              <a
                href={"https://github.com/Tej1Pratap"}
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 hover:scale-110 text-white"
              >
                <FaGithub />
              </a>

              <a
                href={"https://www.linkedin.com/in/tej-pratap-7472b22b1/"}
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 hover:scale-110"
                style={{ color: "#0077b5" }}
              >
                <FaLinkedin />
              </a>

              <a
                href={"mailto:tejpratap11102@gmail.com"}
                className="transition duration-300 hover:scale-110"
                style={{ color: "#ea4335" }}
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 text-center text-gray-500 text-sm">
        © 2026 Tej Pratap. Build with❤️.
      </footer>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md cursor-pointer"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-neutral-950 border border-white/10 rounded-[30px] overflow-hidden max-w-lg w-full cursor-default flex flex-col max-h-[90vh]"
            >
              {/* Fixed Close Button Row — never scrolls away */}
              <div className="flex-shrink-0 flex justify-end px-4 pt-4">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white text-xl transition cursor-pointer w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10"
                >
                  ✕
                </button>
              </div>

              {/* Scrollable Body */}
              <div className="overflow-y-auto flex-1 px-6 sm:px-8 pb-6 sm:pb-8 pt-3">
                {/* Image Carousel */}
                <div className="relative w-full h-48 sm:h-56 mb-6 rounded-2xl overflow-hidden border border-white/5">
                  <img
                    src={selectedProject.images[modalImageIndex]}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover transition-all duration-500"
                  />

                  {selectedProject.images.length > 1 && (
                    <>
                      {/* Left Arrow */}
                      <button
                        onClick={() =>
                          setModalImageIndex(
                            (prev) =>
                              (prev - 1 + selectedProject.images.length) %
                              selectedProject.images.length
                          )
                        }
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black/90 transition z-10"
                      >
                        <FaChevronLeft size={12} />
                      </button>

                      {/* Right Arrow */}
                      <button
                        onClick={() =>
                          setModalImageIndex(
                            (prev) => (prev + 1) % selectedProject.images.length
                          )
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black/90 transition z-10"
                      >
                        <FaChevronRight size={12} />
                      </button>

                      {/* Dot Indicators */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {selectedProject.images.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setModalImageIndex(i)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              i === modalImageIndex
                                ? "w-5 bg-green-400"
                                : "w-1.5 bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>

                {/* Full Description */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 whitespace-pre-wrap">
                  {selectedProject.desc}
                </p>

                {/* Full Tech Stack */}
                <h4 className="text-xs uppercase tracking-wider text-green-400 font-semibold mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs sm:text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 rounded-xl border border-green-400/30 text-green-400 font-semibold hover:bg-green-400/10 hover:border-green-400 hover:scale-[1.02] transition-all duration-300 text-sm sm:text-base"
                  >
                    GitHub Code
                  </a>

                  {selectedProject.live ? (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-3 rounded-xl bg-green-400 text-black font-bold hover:bg-green-500 hover:scale-[1.02] transition-all duration-300 text-sm sm:text-base shadow-lg shadow-green-400/15"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <div className="flex-1 text-center py-3 rounded-xl bg-gray-500/20 text-gray-400 font-bold text-sm sm:text-base cursor-not-allowed border border-gray-500/30 flex items-center justify-center">
                      Ongoing...
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Profile Image Modal */}
        {isProfileModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsProfileModalOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-black/50 rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center max-w-[90vw] max-h-[85vh]"
            >
              <img 
                src={profileImg} 
                alt="Profile Full Size" 
                className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-3xl"
                onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Tej+Pratap&background=random&color=fff&size=512"; }}
              />
              <button
                onClick={() => setIsProfileModalOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-colors z-10 backdrop-blur-md border border-white/20"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
