import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { GITHUB_LINK, LINKEDIN_LINK, GMAIL_LINK, RESUME_LINK } from "../constants";
import profileImg from "../assets/profile.jpeg";

export default function Navbar({
  isProfileModalOpen,
  setIsProfileModalOpen,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  scrollToSection,
}) {
  return (
    <>
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
              href={LINKEDIN_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl transition duration-300 hover:scale-110"
              style={{ color: "#0077b5" }}
            >
              <FaLinkedin />
            </a>

            {/* GitHub */}
            <a
              href={GITHUB_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl transition duration-300 hover:scale-110 text-white"
            >
              <FaGithub />
            </a>

            {/* Gmail */}
            <a
              href={GMAIL_LINK}
              className="text-2xl transition duration-300 hover:scale-110"
              style={{ color: "#f7b9b3" }}
            >
              <FaEnvelope />
            </a>

            {/* Resume Buttons */}
            <div className="flex gap-3">
              <a
                href={RESUME_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-green-400 text-green-400 font-semibold hover:scale-105 transition inline-block text-sm"
              >
                View Resume
              </a>

              <a
                href={RESUME_LINK}
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
                    href={LINKEDIN_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl transition duration-300 hover:scale-110"
                    style={{ color: "#0077b5" }}
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href={GITHUB_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl transition duration-300 hover:scale-110 text-white"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={GMAIL_LINK}
                    className="text-2xl transition duration-300 hover:scale-110"
                    style={{ color: "#f7b9b3" }}
                  >
                    <FaEnvelope />
                  </a>
                </div>

                {/* Resume Buttons */}
                <div className="flex flex-col gap-3">
                  <a
                    href={RESUME_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-2.5 rounded-full border border-green-400 text-green-400 font-semibold hover:bg-green-400/10 transition text-sm"
                  >
                    View Resume
                  </a>
                  <a
                    href={RESUME_LINK}
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
    </>
  );
}
