import { motion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaGitAlt,
  FaCss3Alt,
  FaHtml5,
  FaGithub,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiMysql,
  SiJavascript,
  SiEclipseide,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function Skills() {
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

  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
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
  );
}
