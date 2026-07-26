import { motion } from "framer-motion";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";
import SectionDivider from "./SectionDivider";
import AnimatedWord from "./AnimatedWord";

const education = [
  {
    degree: "B.Tech in Information Technology",
    institution:
      "Bhagwan Parshuram Institute of Technology | Affiliated to Guru Gobind Singh Indraprastha University",
    duration: "2025 — 2029",
    location: "Delhi",
    highlights: ["Core focus: Software Engineering & Data Science"],
  },
];

const semesters = [
  { sem: "Sem 1", gpa: 9.18 },
  { sem: "Sem 2", gpa: 9.32 },
  { sem: "Sem 3", gpa: null },
  { sem: "Sem 4", gpa: null },
  { sem: "Sem 5", gpa: null },
  { sem: "Sem 6", gpa: null },
  { sem: "Sem 7", gpa: null },
  { sem: "Sem 8", gpa: null },
];

const cgpa = 9.25;
const cgpaPercent = (cgpa / 10) * 100;
const circumference = 2 * Math.PI * 54; // radius = 54

const whereRotations = [-4, 3, -2, 5, -3];
const iveRotations = [4, -3, 2, -4];
const studiedRotations = [-3, 4, -2, 3, -4, 2, -3];

const semwiseRotations = [3, -4, 2, -3, 4, -2, 3, -4];
const gpaRotations = [-3, 4, -2];

export default function Education() {
  return (
    <>
      <SectionDivider />

      <section
        id="education"
        className="px-4 pt-16 pb-8 sm:px-6 md:px-16 flex flex-col items-center text-center"
      >
        <h2 className="font-anton uppercase text-4xl sm:text-5xl md:text-6xl leading-[0.9] tracking-tight mb-14 flex flex-wrap justify-center gap-x-4">
          <AnimatedWord letters={["W", "H", "E", "R", "E"]} rotations={whereRotations} keyPrefix="where" />
          <AnimatedWord letters={["I", "'", "V", "E"]} rotations={iveRotations} keyPrefix="ive" />
          <AnimatedWord letters={["S", "T", "U", "D", "I", "E", "D"]} rotations={studiedRotations} keyPrefix="studied" />
        </h2>

        <div className="relative flex flex-col items-center max-w-2xl w-full">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] bg-black/30"
          />

          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              className="relative z-10 flex flex-col items-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 6 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-6 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
              >
                <FaGraduationCap size={26} className="text-[#F4C346]" />
              </motion.div>

              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="bg-black rounded-2xl p-6 sm:p-8 flex flex-col items-center gap-3 max-w-xl"
              >
                <h3 className="text-white font-anton uppercase text-2xl sm:text-3xl tracking-tight leading-tight">
                  {edu.degree}
                </h3>

                <div className="flex items-center gap-1 text-neutral-300 text-sm text-center">
                  <FiMapPin size={14} className="shrink-0" />
                  {edu.institution} · {edu.location}
                </div>

                <div className="flex items-center gap-1 text-[#F4C346] text-xs font-semibold tracking-wide">
                  <FiCalendar size={14} />
                  {edu.duration}
                </div>

                <div className="flex flex-wrap justify-center gap-2 mt-2">
                  {edu.highlights.map((point) => (
                    <span
                      key={point}
                      className="text-xs font-medium text-black bg-[#F4C346] px-3 py-1.5 rounded-full"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-4 pt-8 pb-16 sm:px-6 md:px-16 flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold tracking-[0.2em] uppercase text-black/70 mb-3"
        >
          Academic performance
        </motion.span>

        <h2 className="font-anton uppercase text-4xl sm:text-5xl md:text-6xl leading-[0.9] tracking-tight mb-14 flex flex-wrap justify-center gap-x-4">
          <AnimatedWord letters={["S", "E", "M", "-", "W", "I", "S", "E"]} rotations={semwiseRotations} keyPrefix="semwise" />
          <AnimatedWord letters={["G", "P", "A"]} rotations={gpaRotations} keyPrefix="gpa" />
        </h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.04 }}
          className="relative w-44 h-44 sm:w-52 sm:h-52 mb-16"
        >
          <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="rgba(0,0,0,0.15)"
              strokeWidth="8"
            />
            <motion.circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="#0A0A0A"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              whileInView={{
                strokeDashoffset:
                  circumference - (cgpaPercent / 100) * circumference,
              }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-anton text-4xl sm:text-5xl text-black leading-none">
              {cgpa}
            </span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-black/60 mt-1">
              CGPA
            </span>
          </div>
        </motion.div>

        <div className="flex items-end justify-center gap-3 sm:gap-5 max-w-3xl w-full flex-wrap">
          {semesters.map((s, i) => {
            const hasScore = s.gpa !== null;
            const barHeight = hasScore ? (s.gpa / 10) * 120 : 14;

            return (
              <motion.div
                key={s.sem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center gap-3"
              >
                <span className="font-anton text-sm sm:text-base text-black/80">
                  {hasScore ? s.gpa : "—"}
                </span>

                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: barHeight }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.1 + i * 0.08,
                    ease: "easeOut",
                  }}
                  className={`w-8 sm:w-10 rounded-full ${
                    hasScore
                      ? "bg-black"
                      : "bg-black/15 border-2 border-dashed border-black/25"
                  }`}
                />

                <span className="text-[10px] sm:text-xs font-medium tracking-wide uppercase text-black/60">
                  {s.sem}
                </span>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}