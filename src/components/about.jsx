import { motion } from "framer-motion";
import SectionDivider from "./SectionDivider";

const aboutRotations = [-4, 3, -2, 5, -3];
const meRotations = [4, -3];

const pillars = [
  {
    title: "Design thinking",
    text: "I care about hierarchy, spacing, and rhythm so the interface feels intentional instead of crowded.",
  },
  {
    title: "Engineering depth",
    text: "I enjoy the CS fundamentals behind a polished UI, especially data structures, OOP, and system thinking.",
  },
  {
    title: "Full-stack curiosity",
    text: "I'm learning backend development so I can understand the full picture, not just the surface layer.",
  },
];

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

const About = () => {
  return (
    <>
      <SectionDivider />
      <motion.section
        id="about"
        className="px-6 pb-16 md:px-16 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="font-anton uppercase text-4xl sm:text-5xl md:text-6xl leading-[0.9] tracking-tight mb-12 flex flex-wrap justify-center gap-x-4">
          <AnimatedWord letters={["A", "B", "O", "U", "T"]} rotations={aboutRotations} keyPrefix="about" />
          <AnimatedWord letters={["M", "E"]} rotations={meRotations} keyPrefix="me" />
        </h2>

        <div className="mx-auto max-w-4xl rounded-4xl border border-black/15 bg-white/30 p-6 shadow-[0_22px_70px_rgba(0,0,0,0.08)] backdrop-blur-sm md:p-8">
          <motion.div
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55 }}
          >
            <h3 className="max-w-2xl text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
              I build interfaces that feel calm, deliberate, and premium.
            </h3>
            
          </motion.div>

          <div className="mt-8 flex flex-col items-center gap-8">
            <div className="space-y-5 flex flex-col items-center">
              <motion.p
                className="max-w-2xl text-lg leading-relaxed sm:text-xl md:text-2xl"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: 0.05 }}
              >
                I'm a frontend developer and IT student building on a dual foundation
                in software engineering and data science. What pulls me in isn't just
                building interfaces — it's understanding how systems actually work
                underneath them.
              </motion.p>
              <motion.p
                className="max-w-2xl text-lg leading-relaxed sm:text-xl md:text-2xl"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: 0.12 }}
              >
                That curiosity is what led me to fall in love with CS fundamentals.
                Data Structures, Algorithms, and OOP aren't just coursework to me —
                they're the toolkit I keep sharpening, because good frontend work is
                only as solid as the thinking behind it.
              </motion.p>
              <motion.p
                className="max-w-2xl text-lg leading-relaxed sm:text-xl md:text-2xl"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: 0.19 }}
              >
                Right now, I'm expanding that foundation by learning backend
                development — so I can understand the full picture of how an
                application comes together, not just the part users see.
              </motion.p>
            </div>

            <motion.div
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {pillars.map((pillar) => (
                <motion.div
                  key={pillar.title}
                  className="rounded-2xl border border-black/15 bg-black/5 p-5 shadow-[0_14px_30px_rgba(0,0,0,0.06)] text-center"
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    show: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -4 }}
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.22em] text-black/60">
                    {pillar.title}
                  </div>
                  <p className="mt-3 text-base leading-relaxed text-black/80">
                    {pillar.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default About;