import { useState } from "react";
import { motion } from "framer-motion";
import SectionDivider from "./SectionDivider";
import { FiMail, FiGithub, FiLinkedin, FiCopy, FiCheck, FiInstagram } from "react-icons/fi";

const email = "guptaji3112006@gmail.com";
const socials = [
  {
    icon: FiGithub,
    label: "GitHub",
    link: "https://github.com/guptaji3112006-boop",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/ratnesh-gupta-4a6bb137a/",
  },
  {
    icon: FiInstagram,
    label: "Instagram",
    link: "https://www.instagram.com/gupta_ji.241/",
  },
];

const letsRotations = [-4, 3, -2, 5, -3];
const connectRotations = [3, -4, 2, -3, 4, -2, 3];

function AnimatedWord({ letters, rotations, keyPrefix }) {
  return (
    <span className="flex">
      {letters.map((letter, i) => (
        <motion.span
          key={`${keyPrefix}-${i}`}
          initial={{ opacity: 0, y: 18, rotate: rotations[i] }}
          whileInView={{ opacity: 1, y: 0, rotate: rotations[i] }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{
            color: "#ffffff",
            y: -10,
            scale: 1.15,
            rotate: 0,
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
          className="inline-block cursor-default"
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <SectionDivider />
      <section id="contact" className="bg-[#F4C346] px-4 pt-16 pb-20 sm:px-6 md:px-16 text-center">
        <span className="block mb-4 text-sm sm:text-base font-semibold tracking-[0.2em] uppercase">
          Get in touch
        </span>

        <h2 className="font-anton uppercase text-4xl sm:text-6xl md:text-7xl leading-[0.9] tracking-tight mb-6 max-w-4xl mx-auto flex flex-wrap justify-center gap-x-4">
          <AnimatedWord letters={["L", "E", "T", "'", "S"]} rotations={letsRotations} keyPrefix="lets" />
          <AnimatedWord letters={["C", "O", "N", "N", "E", "C", "T"]} rotations={connectRotations} keyPrefix="connect" />
        </h2>

        <p className="max-w-xl mx-auto text-sm sm:text-base md:text-lg mb-10 text-black/80">
          Open to internships, collaborations, or just a chat about frontend and
          design. Drop a message — I usually reply within a day.
        </p>

        <motion.a
          href={`mailto:${email}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base mb-4"
        >
          <FiMail size={18} /> Say Hello
        </motion.a>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <span className="text-xs sm:text-sm text-black/70 break-all text-center">{email}</span>
          <button
            onClick={handleCopy}
            className="w-7 h-7 rounded-full bg-black flex items-center justify-center"
          >
            {copied ? (
              <FiCheck size={12} className="text-[#F4C346]" />
            ) : (
              <FiCopy size={12} className="text-[#F4C346]" />
            )}
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
          {socials.map(({ icon: Icon, label, link }) => (
            <motion.a
              key={label}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="w-12 h-12 rounded-full bg-black flex items-center justify-center"
            >
              <Icon size={20} className="text-[#F4C346]" />
            </motion.a>
          ))}
        </div>

        <p className="mt-16 text-xs text-black/60">
          © {new Date().getFullYear()} Designed and developed by Ratnesh Gupta.
        </p>
      </section>
    </>
  );
}