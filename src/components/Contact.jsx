import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { GITHUB_LINK, LINKEDIN_LINK, GMAIL_LINK } from "../constants";

export default function Contact() {
  return (
    <>
      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
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
                href={GMAIL_LINK}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-green-400 text-black font-semibold hover:scale-105 transition-all duration-300 inline-block"
              >
                Hire Me
              </a>

              <a
                href={GITHUB_LINK}
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
                href={GITHUB_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 hover:scale-110 text-white"
              >
                <FaGithub />
              </a>

              <a
                href={LINKEDIN_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 hover:scale-110"
                style={{ color: "#0077b5" }}
              >
                <FaLinkedin />
              </a>

              <a
                href={GMAIL_LINK}
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
    </>
  );
}
