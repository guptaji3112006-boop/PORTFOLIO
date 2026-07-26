import { motion } from "framer-motion";
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiNodedotjs,
  SiNextdotjs,
  SiCss,
  SiMongodb,
  SiExpress,
  SiCplusplus,
  SiC,
} from "react-icons/si";
import SectionDivider from "./SectionDivider";
import AnimatedWord from "./AnimatedWord";

const techStackData = [
  { name: "HTML5", icon: SiHtml5, color: "#E34F26", level: 90 },
  { name: "CSS3", icon: SiCss, color: "#0277BD", level: 85 },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 50 },
  { name: "React", icon: SiReact, color: "#61DAFB", level: 60 },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: 85 },
  { name: "Git", icon: SiGit, color: "#F05032", level: 40 },
  { name: "GitHub", icon: SiGithub, color: "#181717", level: 50 },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: 45 },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000", level: 50 },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 50 },
  { name: "Express.js", icon: SiExpress, color: "#000000", level: 50 },
  { name: "C++", icon: SiCplusplus, color: "#00599C", level: 70 },
  { name :"C" , icon: SiC, color: "#A8B9CC", level: 80 }
];

const techRotations = [-4, 3, -2, 5];
const stackRotations = [4, -3, 2, -4, 3];

function TechCard({ name, icon: Icon, color, level, index }) {
  return (
    <motion.div
      className="flex flex-col items-center"
      variants={{
        hidden: { opacity: 0, y: 22, scale: 0.96 },
        show: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="w-full flex flex-col items-center justify-center gap-3 bg-[#F8D887] rounded-xl py-6 px-4"
        whileHover={{ y: -6, scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Icon size={48} color={color} />
        <span className="text-black text-xs font-medium text-center">{name}</span>
      </motion.div>

      <div className="w-full flex items-center gap-2 mt-3 px-1">
        <div className="relative flex-1 h-1.5 rounded-full bg-black/10 overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{ background: "linear-gradient(90deg, #0A0A0A, #3A3A3A)" }}
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, delay: 0.1 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
              }}
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, delay: 0.35 + index * 0.05, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
          className="text-[10px] font-bold text-black/60 w-7 text-right shrink-0"
        >
          {level}%
        </motion.span>
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <>
      <SectionDivider />
      <motion.section
        id="tech-stack"
        className="px-6 pb-16 md:px-26"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="font-anton uppercase text-4xl sm:text-5xl md:text-6xl leading-[0.9] tracking-tight mb-12 flex flex-wrap justify-center gap-x-4">
          <AnimatedWord letters={["T", "E", "C", "H"]} rotations={techRotations} keyPrefix="tech" />
          <AnimatedWord letters={["S", "T", "A", "C", "K"]} rotations={stackRotations} keyPrefix="stack" />
        </h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {techStackData.map((tech, i) => (
            <TechCard key={tech.name} {...tech} index={i} />
          ))}
        </motion.div>
      </motion.section>
    </>
  );
}