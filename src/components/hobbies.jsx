import { useRef, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiMusic, FiCamera, FiX, FiArrowLeft, FiArrowRight } from "react-icons/fi";
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
import ht11 from "../assets/ht11.jpg";
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
  { image: ht11 },
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
  const hoveredRef = useRef(false);
  const focusedRef = useRef(false);
  const navigationRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const navigate = (stepDirection) => {
    const track = trackRef.current;
    if (!track || items.length < 2) return;

    const origin = track.children[0].offsetLeft;
    const cycleWidth = track.children[items.length].offsetLeft - origin;
    if (!cycleWidth) return;

    const current = ((offsetRef.current % cycleWidth) + cycleWidth) % cycleWidth;
    const positions = Array.from(track.children)
      .slice(0, items.length)
      .map((card) => card.offsetLeft - origin);
    const target = stepDirection > 0
      ? positions.find((position) => position > current + 1) ?? cycleWidth
      : positions.findLast((position) => position < current - 1) ?? positions.at(-1) - cycleWidth;

    if (reduceMotion) {
      offsetRef.current = ((target % cycleWidth) + cycleWidth) % cycleWidth;
      track.style.transform = `translateX(${-offsetRef.current}px)`;
      navigationRef.current = null;
      return;
    }

    navigationRef.current = { from: current, to: target, elapsed: 0 };
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frameId;
    let lastTime = performance.now();

    const step = (time) => {
      const delta = Math.min(time - lastTime, 64);
      lastTime = time;

      const cycleWidth = track.children[items.length]?.offsetLeft - track.children[0]?.offsetLeft;
      if (cycleWidth > 0) {
        const navigation = navigationRef.current;
        const dir = direction === "left" ? 1 : -1;

        if (navigation) {
          navigation.elapsed += delta;
          const progress = Math.min(navigation.elapsed / 450, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          offsetRef.current = navigation.from + (navigation.to - navigation.from) * eased;
          if (progress === 1) navigationRef.current = null;
        } else if (!hoveredRef.current && !focusedRef.current && !reduceMotion) {
          offsetRef.current += (dir * speed * delta) / 1000;
        }

        offsetRef.current = ((offsetRef.current % cycleWidth) + cycleWidth) % cycleWidth;

        track.style.transform = `translateX(${-offsetRef.current}px)`;
      }

      frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [direction, speed, items.length, reduceMotion]);

  return (
    <div
      className="relative w-full"
      role="region"
      aria-label="Photography gallery"
      onMouseEnter={() => (hoveredRef.current = true)}
      onMouseLeave={() => (hoveredRef.current = false)}
      onFocusCapture={() => (focusedRef.current = true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) focusedRef.current = false;
      }}
    >
      <div
        id="photography-gallery"
        className="overflow-hidden mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      >
        <div ref={trackRef} className="flex gap-5 w-max will-change-transform">
          {[...items, ...items].map((item, i) => (
            <div key={i} className="shrink-0">
              {children(item)}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          aria-label="Previous photo"
          aria-controls="photography-gallery"
          onClick={() => navigate(-1)}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-[#F4C346] cursor-pointer hover:bg-black/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
        >
          <FiArrowLeft aria-hidden="true" /> Previous
        </button>
        <button
          type="button"
          aria-label="Next photo"
          aria-controls="photography-gallery"
          onClick={() => navigate(1)}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-[#F4C346] cursor-pointer hover:bg-black/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
        >
          Next <FiArrowRight aria-hidden="true" />
        </button>
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
