import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub, FiChevronDown } from "react-icons/fi";
import SectionDivider from "./SectionDivider";
import Amazon from "../assets/AMAZON.png";
import spotfixImg from "../assets/spotfix.png";
import vaulixImg from "../assets/vaulix.png";
import netflixImg from "../assets/netflix.png";
import todoImg from "../assets/todo.png";
import tictactoeImg from "../assets/tictactoe.png";
import rpsImg from "../assets/rps.png";

const whatRotations = [-4, 3, -2, 5];
const iveRotations = [4, -3, 2, -4];
const builtRotations = [-3, 4, -2, 3, 2];

const featuredProjects = [
  {
    title: "SpotFix",
    description:
      "A smart city civic issue reporting platform that bridges citizens and municipal authorities — using AI and real-time data to report, verify, and resolve issues like potholes, waterlogging, and broken streetlights.",
    stack: ["React", "AI", "Cloud", "Antigravity"],
    liveLink: "https://spotfix-362582701952.asia-southeast1.run.app/",
    githubLink: "https://github.com/guptaji3112006-boop/SpotFix",
    image: spotfixImg,
  },
  {
    title: "Vaulix — Password Manager",
    description:
      "A secure password manager for storing and organizing credentials, built with a focus on simplicity and safety.",
    stack: ["React", "JavaScript", "Tailwind CSS"],
    liveLink: "https://vaulix-pi.vercel.app/",
    githubLink: "https://github.com/guptaji3112006-boop/password-manager",
    image: vaulixImg,
  },
];

const gridProjects = [
  {
    title: "Amazon Homepage Clone",
    description:
      "A pixel-close recreation of Amazon's homepage — navigation, banners, and product grid rebuilt from scratch.",
    stack: ["HTML", "CSS"],
    liveLink: "https://ecommerce-ui-demo-inky.vercel.app/",
    githubLink: "https://github.com/guptaji3112006-boop/amazon-homepage-clone",
    image: Amazon,
  },
  {
    title: "Netflix Homepage Clone",
    description:
      "A Netflix-inspired landing page with hero banner and content rows.",
    stack: ["HTML", "CSS"],
    liveLink: "https://netflix-clone-example.vercel.app/",
    githubLink: "https://github.com/guptaji3112006-boop/Net-UI-Demo",
    image: netflixImg,
  },
  {
    title: "Todo List",
    description: "A clean, functional todo app for managing daily tasks.",
    stack: ["React", "JavaScript", "Tailwind CSS"],
    liveLink: "https://todo-app-two-cyan-87.vercel.app/",
    githubLink: "https://github.com/guptaji3112006-boop/todo-list",
    image: todoImg,
  },
  {
    title: "Tic Tac Toe",
    description:
      "A classic Tic Tac Toe game built to practice state management and win logic.",
    stack: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://tic-tac-toe-game-example.vercel.app/",
    githubLink: "https://github.com/guptaji3112006-boop/tic-tac-toe-game",
    image: tictactoeImg,
  },
  {
    title: "Rock Paper Scissors",
    description: "A browser-based game with live score tracking.",
    stack: ["JavaScript", "HTML", "CSS"],
    liveLink: "https://rock-paper-scissor-game-mu-steel.vercel.app/",
    githubLink:
      "https://github.com/guptaji3112006-boop/Rock-Paper-Scissor-Game",
    image: rpsImg,
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
          transition={{
            duration: 0.5,
            delay: i * 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
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

function CardContent({ project }) {
  return (
    <>
      <div className="h-40 sm:h-44 bg-neutral-800 overflow-hidden flex items-center justify-center">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <h3 className="text-white font-anton uppercase text-xl tracking-tight mb-2">
          {project.title}
        </h3>
        <p className="text-neutral-300 text-xs leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-medium text-black bg-[#F4C346] px-2.5 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 sm:gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white text-xs font-medium hover:text-[#F4C346] transition-colors"
          >
            <FiExternalLink size={14} /> Live
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white text-xs font-medium hover:text-[#F4C346] transition-colors"
          >
            <FiGithub size={14} /> Code
          </motion.a>
        </div>
      </div>
    </>
  );
}

function SwipeCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-black rounded-2xl overflow-hidden flex flex-col w-[80vw] max-w-xs shrink-0 snap-center"
    >
      <CardContent project={project} />
    </motion.div>
  );
}

function ScrollCard({ project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.12, zIndex: 20 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="relative bg-black rounded-2xl overflow-hidden flex flex-col w-72 shrink-0 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
    >
      <CardContent project={project} />
    </motion.div>
  );
}

function InfiniteScrollRow({ items, speed = 35 }) {
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frameId;
    let lastTime = performance.now();

    const step = (time) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!pausedRef.current) {
        const halfWidth = track.scrollWidth / 2;
        offsetRef.current += (speed * delta) / 1000;
        if (offsetRef.current >= halfWidth) offsetRef.current -= halfWidth;
        track.style.transform = `translateX(${-offsetRef.current}px)`;
      }

      frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [speed]);

  return (
    <div
      className="relative w-full overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <div ref={trackRef} className="flex gap-6 w-max will-change-transform">
        {[...items, ...items].map((project, i) => (
          <ScrollCard key={`${project.title}-${i}`} project={project} />
        ))}
      </div>
    </div>
  );
}

function SwipeRow({ items }) {
  return (
    <div className="w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
      <div className="flex gap-4 pb-2">
        {items.map((project) => (
          <SwipeCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <SectionDivider />
      <section
        id="projects"
        className="bg-[#F4C346] px-4 pb-16 sm:px-6 md:px-16"
      >
        <h2 className="font-anton uppercase text-4xl sm:text-5xl md:text-6xl leading-[0.9] tracking-tight mb-12 flex flex-wrap justify-center gap-x-4 max-w-3xl mx-auto">
          <AnimatedWord
            letters={["W", "H", "A", "T"]}
            rotations={whatRotations}
            keyPrefix="what"
          />
          <AnimatedWord
            letters={["I", "'", "V", "E"]}
            rotations={iveRotations}
            keyPrefix="ive"
          />
          <AnimatedWord
            letters={["B", "U", "I", "L", "T"]}
            rotations={builtRotations}
            keyPrefix="built"
          />
        </h2>

        <div className="flex flex-col gap-10 sm:gap-14 mb-14">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.title}
               whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-black rounded-2xl overflow-hidden flex flex-col   ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="w-full md:w-2/5 h-52 sm:h-64 md:h-auto bg-neutral-800 flex items-center justify-center shrink-0 ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 sm:p-6 md:p-10 flex flex-col justify-center flex-1">
                <span className="text-[#F4C346] text-xs font-semibold tracking-[0.15em] uppercase mb-3">
                  Featured project
                </span>
                <h3 className="text-white font-anton uppercase text-3xl sm:text-4xl tracking-tight mb-4">
                  {project.title}
                </h3>
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium text-black bg-[#F4C346] px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 sm:gap-5">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white text-sm font-medium hover:text-[#F4C346] transition-colors"
                  >
                    <FiExternalLink size={16} /> Live
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white text-sm font-medium hover:text-[#F4C346] transition-colors"
                  >
                    <FiGithub size={16} /> Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="hidden lg:block">
          <InfiniteScrollRow items={gridProjects} />
        </div>

        <div className="lg:hidden">
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="flex items-center gap-2 bg-black text-white text-sm font-semibold px-6 py-3 rounded-full mb-2"
            >
              {showAll ? "Hide projects" : "View all projects"}
              <motion.span
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FiChevronDown size={16} />
              </motion.span>
            </button>
          </div>

          <AnimatePresence initial={false}>
            {showAll && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pt-6">
                  <SwipeRow items={gridProjects} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
