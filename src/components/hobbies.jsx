import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiMusic, FiCamera, FiMapPin, FiX } from "react-icons/fi";
import { SiTether } from "react-icons/si";
import SectionDivider from "./SectionDivider";
import AnimatedWord from "./AnimatedWord";
import bgmi from "../assets/bgmi.jpg";
import nushrat from "../assets/nushrat.jpg";
import arjit from "../assets/arjit.png";
import lofi from "../assets/lofi.jpg";
import ht1 from "../assets/ht1.jpg";
import ht2 from "../assets/ht2.jpg";
import ht3 from "../assets/ht3.jpg";
import ht4 from "../assets/ht4.jpg";
import ht5 from "../assets/ht5.jpg";
import ht6 from "../assets/ht6.jpg";
import ht7 from "../assets/ht7.jpg";
import ht8 from "../assets/ht8.jpg";
import ht9 from "../assets/ht9.jpg";
import ht10 from "../assets/ht10.jpg";
const musicItems = [
  { title: "Nusrat Fateh Ali Khan", subtitle: "Remix mixes", image: nushrat },
  { title: "Arijit Singh", subtitle: "Favorite tracks", image: arjit },
  { title: "Lo-fi", subtitle: "Focus & chill playlist", image: lofi },
];

const gamingItems = [{ title: "BGMI", subtitle: "Squad matches", image: bgmi }];

const photoItems = [
  { image: ht1 },
  { image: ht2 },
  { image: ht3 },
  { image: ht4 },
  { image: ht5 },
  { image: ht6 },
  { image: ht7 },
  { image: ht8 },
  { image: ht9 },
  { image: ht10 },
];

const whatRotations = [-4, 3, -2, 5];
const imRotations = [4, -3, 2];
const intoRotations = [-3, 4, -2, 3];

function StaticRow({ items, children }) {
  return (
    <div className="flex flex-wrap justify-center gap-5">
      {items.map((item, i) => (
        <div key={i} className="shrink-0">
          {children(item)}
        </div>
      ))}
    </div>
  );
}

function InfiniteRow({ items, direction = "left", speed = 40, children }) {
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
        const dir = direction === "left" ? 1 : -1;
        offsetRef.current += (dir * speed * delta) / 1000;

        if (offsetRef.current >= halfWidth) offsetRef.current -= halfWidth;
        if (offsetRef.current < 0) offsetRef.current += halfWidth;

        track.style.transform = `translateX(${-offsetRef.current}px)`;
      }

      frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [direction, speed]);

  return (
    <div
      className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <div ref={trackRef} className="flex gap-5 w-max will-change-transform">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="shrink-0">
            {children(item)}
          </div>
        ))}
      </div>
    </div>
  );
}

function MusicCard({ item }) {
  return (
    <motion.div
      className="w-56 bg-black rounded-2xl p-5 flex flex-col items-center text-center gap-4"
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="relative w-24 h-24">
        <motion.div
          className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#F4C346]"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 3, ease: "linear", repeat: Infinity }}
        >
          {item.image ? (
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-neutral-800 flex items-center justify-center">
              <FiMusic size={22} className="text-neutral-500" />
            </div>
          )}
        </motion.div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#F4C346] border-2 border-black" />
      </div>

      <h4 className="text-white font-semibold text-sm">{item.title}</h4>
      <p className="text-neutral-400 text-xs -mt-2">{item.subtitle}</p>
    </motion.div>
  );
}

function GameCard({ item }) {
  return (
    <motion.div
      className="w-56 bg-black rounded-2xl p-5 flex flex-col items-center text-center gap-4"
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#F4C346]">
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-neutral-800 flex items-center justify-center">
            <SiTether size={22} className="text-neutral-500" />
          </div>
        )}
      </div>

      <h4 className="text-white font-semibold text-sm">{item.title}</h4>
      <p className="text-neutral-400 text-xs -mt-2">{item.subtitle}</p>
    </motion.div>
  );
}

function PhotoCard({ item, onClick }) {
  return (
    <button
      onClick={onClick}
      className="h-44 sm:h-110 shrink-0 bg-black rounded-2xl overflow-hidden relative flex items-center justify-center cursor-zoom-in"
    >
      <img
        src={item.image}
        alt={item.location}
        className="w-full h-full object-cover"
      />
    </button>
  );
}

function Lightbox({ item, onClose }) {
  if (!item) return null;
  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#F4C346] flex items-center justify-center"
      >
        <FiX size={20} className="text-black" />
      </button>
      <div
        className="flex flex-col items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.image}
          alt={item.location}
          className="max-w-[90vw] max-h-[80vh] w-auto h-auto object-contain rounded-lg"
        />
      </div>
    </div>
  );
}

export default function Hobbies() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <SectionDivider />
      <motion.section
        id="hobbies"
        className="bg-[#F4C346] px-4 sm:px-6 pb-16 md:px-16 overflow-hidden"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.span
          className="block mb-4 text-sm sm:text-base font-semibold tracking-[0.2em] uppercase text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
        >
          Beyond code
        </motion.span>

        <h2 className="font-anton uppercase text-4xl sm:text-5xl md:text-6xl leading-[0.9] tracking-tight mb-14 flex flex-wrap justify-center gap-x-4">
          <AnimatedWord
            letters={["W", "H", "A", "T"]}
            rotations={whatRotations}
            keyPrefix="what"
          />
          <AnimatedWord
            letters={["I", "'", "M"]}
            rotations={imRotations}
            keyPrefix="im"
          />
          <AnimatedWord
            letters={["I", "N", "T", "O"]}
            rotations={intoRotations}
            keyPrefix="into"
          />
        </h2>

        <div className="mb-16">
          <h3 className="text-center font-semibold text-lg mb-6 flex items-center justify-center gap-2">
            <FiMusic /> Music
          </h3>
          <StaticRow items={musicItems}>
            {(item) => <MusicCard item={item} />}
          </StaticRow>
        </div>

        <div className="mb-16">
          <h3 className="text-center font-semibold text-lg mb-6 flex items-center justify-center gap-2">
            <SiTether /> Gaming
          </h3>
          <StaticRow items={gamingItems}>
            {(item) => <GameCard item={item} />}
          </StaticRow>
        </div>

        <div>
          <h3 className="text-center font-semibold text-lg mb-6 flex items-center justify-center gap-2">
            <FiCamera /> Photography
          </h3>
          <InfiniteRow items={photoItems} direction="left">
            {(item) => (
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <PhotoCard item={item} onClick={() => setSelected(item)} />
              </motion.div>
            )}
          </InfiniteRow>
        </div>

        <Lightbox item={selected} onClose={() => setSelected(null)} />
      </motion.section>
    </>
  );
}
