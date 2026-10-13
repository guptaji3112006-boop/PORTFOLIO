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
  SiPostman,
} from "react-icons/si";
import SectionDivider from "./SectionDivider";
import AnimatedWord from "./AnimatedWord";

const techStackData = [
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#0277BD" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Express.js", icon: SiExpress, color: "#000000" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "C", icon: SiC, color: "#A8B9CC" },
];

const techRotations = [-4, 3, -2, 5];
const stackRotations = [4, -3, 2, -4, 3];

function TechCard({ name, icon: Icon, color }) {
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
          {techStackData.map((tech) => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </motion.div>
      </motion.section>
    </>
  );
}
