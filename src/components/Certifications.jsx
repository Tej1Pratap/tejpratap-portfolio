import { motion } from "framer-motion";
import { FaFilePdf } from "react-icons/fa";

export default function Certifications() {
  const certifications = [
    {
      title: "Spring Core & MVC Certification",
      issuer: "Upgrad ",
      pdf: "/certifications/SpringMVC Certificate.pdf",
    },
    {
      title: "Advanced Software Engineering Job Simulation",
      issuer: "Forage",
      pdf: "/certifications/Walmart Certificate.pdf",
    },
    {
      title: "ReactJS Certification",
      issuer: "Infosys Springboard",
      pdf: "/certifications/ReactJS Infosys.pdf",
    },
    {
      title: "Software Engineering Job Simulation",
      issuer: "Forage",
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
  ];

  return (
    <section id="certifications" className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
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
  );
}
