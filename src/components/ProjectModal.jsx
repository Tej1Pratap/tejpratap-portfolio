import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ProjectModal({ project, onClose }) {
  const [modalImageIndex, setModalImageIndex] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
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
            onClick={onClose}
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
              src={project.images[modalImageIndex]}
              alt={project.title}
              className="w-full h-full object-cover transition-all duration-500"
            />

            {project.images.length > 1 && (
              <>
                {/* Left Arrow */}
                <button
                  onClick={() =>
                    setModalImageIndex(
                      (prev) =>
                        (prev - 1 + project.images.length) %
                        project.images.length
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
                      (prev) => (prev + 1) % project.images.length
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black/90 transition z-10"
                >
                  <FaChevronRight size={12} />
                </button>

                {/* Dot Indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {project.images.map((_, i) => (
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
            {project.title}
          </h3>

          {/* Full Description */}
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 whitespace-pre-wrap">
            {project.desc}
          </p>

          {/* Full Tech Stack */}
          <h4 className="text-xs uppercase tracking-wider text-green-400 font-semibold mb-3">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((tech, idx) => (
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
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-3 rounded-xl border border-green-400/30 text-green-400 font-semibold hover:bg-green-400/10 hover:border-green-400 hover:scale-[1.02] transition-all duration-300 text-sm sm:text-base"
            >
              GitHub Code
            </a>

            {project.live ? (
              <a
                href={project.live}
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
  );
}
