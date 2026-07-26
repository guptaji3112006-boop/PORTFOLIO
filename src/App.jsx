import { motion, useReducedMotion } from "framer-motion";
import Navbar from "./components/Navbar";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import heroImg from "./assets/img.jpg";
import "./App.css";
import About from "./components/about";
import TechStack from "./components/techStack";
import Project from "./components/project";
import Education from "./components/education";
import Hobbies from "./components/hobbies";
import Contact from "./components/contact";

const heroName = [
  { text: "RATNESH", rotations: [-4, 3, -2, 5, -3, 2, -5] },
  { text: "GUPTA", rotations: [4, -3, 2, -4, 3] },
];

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

const heroStats = [
  { label: "Focus", value: "Motion + UI" },
  { label: "Learning", value: "Backend systems" },
];

const letterContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const letterItem = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function AnimatedWord({ text, rotations }) {
  return (
    <motion.span
      className="flex justify-center md:justify-start"
      variants={letterContainer}
    >
      {text.split("").map((letter, i) => (
        <motion.span
          key={letter + i}
          variants={letterItem}
          initial={{ ...letterItem.hidden, rotate: rotations[i] }}
          animate={{ opacity: 1, y: 0, rotate: rotations[i] }}
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
    </motion.span>
  );
}


function FloatingBlob({ className, axis, distance, duration, reduceMotion }) {
  return (
    <motion.div
      aria-hidden="true"
      className={className}
      animate={reduceMotion ? undefined : { [axis]: [0, distance, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function App() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <Navbar />

      <section
        id="hero"
        className="relative min-h-screen overflow-hidden bg-[#F4C346]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.55),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.08),transparent_24%)]" />

        <FloatingBlob
          className="absolute -left-20 top-28 h-56 w-56 rounded-full bg-black/10 blur-3xl"
          axis="y"
          distance={-18}
          duration={9}
          reduceMotion={shouldReduceMotion}
        />
        <FloatingBlob
          className="absolute -right-16 top-16 h-44 w-44 rounded-full bg-white/30 blur-3xl"
          axis="y"
          distance={14}
          duration={11}
          reduceMotion={shouldReduceMotion}
        />

        <motion.div
          className="herosection relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 sm:py-20 md:py-24 lg:py-28"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.14, delayChildren: 0.08 },
            },
          }}
        >
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <motion.div
              className="space-y-6 md:space-y-8"
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
            >
              <motion.div
                className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-black/5 px-4 py-2 text-xs font-semibold   tracking-[0.24em]"
                variants={letterItem}
              >
                <span className="h-2 w-2 rounded-full bg-black" />
                &lt;Hello World !/&gt;
              </motion.div>

              <motion.div
                className="font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none"
                variants={letterContainer}
              >
                <motion.span
                  className="block text-sm sm:text-base md:text-lg mb-3 lg:mb-6 lg:text-xl font-semibold tracking-[0.2em] relative z-10"
                  variants={letterItem}
                >
                  Hello, I am
                </motion.span>

                {heroName.map((word) => (
                  <AnimatedWord key={word.text} {...word} />
                ))}
              </motion.div>

              <motion.p
                className="max-w-xl text-base sm:text-lg md:text-xl leading-relaxed text-black/80"
                variants={letterItem}
              >
                I design and build polished frontend experiences with motion,
                structure, and a premium visual rhythm.
              </motion.p>

              <motion.div
                className="grid gap-3 sm:grid-cols-3"
                variants={letterContainer}
              >
                {heroStats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    className="rounded-2xl border border-black/15 bg-white/35 px-4 py-4 shadow-[0_12px_30px_rgba(0,0,0,0.08)] backdrop-blur-sm"
                    variants={letterItem}
                    whileHover={
                      shouldReduceMotion ? undefined : { y: -4, scale: 1.02 }
                    }
                  >
                    <div className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-black/60">
                      {stat.label}
                    </div>
                    <div className="mt-2 text-sm font-semibold text-black">
                      {stat.value}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

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
            </motion.div>

            <motion.div
              className="relative mx-auto w-full max-w-md lg:max-w-none"
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <FloatingBlob
                className="absolute -left-5 -top-5 h-24 w-24 rounded-2xl border border-black/15 bg-white/30 backdrop-blur-sm"
                axis="rotate"
                distance={4}
                duration={8}
                reduceMotion={shouldReduceMotion}
              />
              <FloatingBlob
                className="absolute -right-4 bottom-8 h-16 w-16 rounded-full border border-black/15 bg-black/10 backdrop-blur-sm"
                axis="y"
                distance={-10}
                duration={7}
                reduceMotion={shouldReduceMotion}
              />

              <motion.div
                className="relative"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <motion.img
                  src={heroImg}
                  alt="ME"
                  className="w-full aspect-[3/5] rounded-full object-cover border-3 border-black"
                  animate={shouldReduceMotion ? undefined : { y: [0, -15, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="mt-10 grid gap-3 text-center md:mt-12 md:grid-cols-3 md:text-left"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
          >
            {["Frontend Developer", "UI/UX Enthusiast", "Problem Solver"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-black/15 bg-black/5 px-4 py-3 text-sm font-medium text-black shadow-[0_10px_24px_rgba(0,0,0,0.06)]"
                >
                  =&gt; {item}
                </div>
              ),
            )}
          </motion.div>
        </motion.div>
      </section>

      <About />
      <Project />
      <TechStack />
      <Education />
      <Hobbies />
      <Contact />
    </>
  );
}

export default App;
