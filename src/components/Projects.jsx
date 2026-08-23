import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function ProjectCard({ project, index, openProject }) {
  const [imageIndex, setImageIndex] = useState(0);

  const prevCardImage = (e, total) => {
    e.stopPropagation();
    setImageIndex((prev) => (prev - 1 + total) % total);
  };

  const nextCardImage = (e, total) => {
    e.stopPropagation();
    setImageIndex((prev) => (prev + 1) % total);
  };

  return (
    <motion.div
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
          src={project.images[imageIndex]}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-500"
        />

        {project.images.length > 1 && (
          <>
            {/* Left Arrow */}
            <button
              onClick={(e) => prevCardImage(e, project.images.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 hover:bg-black/90 z-10"
            >
              <FaChevronLeft size={10} />
            </button>

            {/* Right Arrow */}
            <button
              onClick={(e) => nextCardImage(e, project.images.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 hover:bg-black/90 z-10"
            >
              <FaChevronRight size={10} />
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {project.images.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === imageIndex ? "w-4 bg-green-400" : "w-1.5 bg-white/50"
                    }`}
                />
              ))}
            </div>
          </>
        )}
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
  );
}

export default function Projects({ openProject }) {
  const projects = [
    {
      title: "Carbon Footprint & Sustainability Management Platform",

      desc: `A web-based platform and PWA to track, calculate, and reduce carbon emissions through personalized sustainability insights.
      • Developed responsive frontend using React
      • Built REST APIs using Spring Boot
      • Implemented carbon emission tracking for transport, electricity, food, and shopping
      • Added sustainability goals and progress tracking
      • Integrated MySQL database and API services
      • Collaborated using Git and GitHub`,

      github: "https://github.com/Tej1Pratap/Carbon-Footprint",
    live: "https://carbon-footprint-drab.vercel.app/",
    tech: [
      "Java",
      "Springboot",
      "Spring Security",
      "ReactJs",
      "Rest APIs",
      "OpenAI API",
    ],
    images: [
      "/screenshots/CF1.png",
      "/screenshots/CF2.png",
      "/screenshots/CF3.png",
      "/screenshots/CF4.png"
    ],
    },
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
        live: "https://tej1pratap.github.io/Tic-Tac-Toe-Game/",
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
  <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
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
        <ProjectCard
          key={index}
          project={project}
          index={index}
          openProject={openProject}
        />
      ))}
    </div>
  </section>
);
}
