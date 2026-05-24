import { motion } from "framer-motion";

export default function Hero({ scrollToSection }) {
  return (
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
            "Hi, I am <span className="text-green-400">Tej</span>. I build scalable full-stack applications using Java, Spring Boot, and React. I am passionate about developing <span className="text-green-400">AI-powered</span> solutions focused on modern UI/UX and real-world problem-solving."
          </p>

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
  );
}
