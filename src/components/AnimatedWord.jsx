import { motion } from "framer-motion";

export default function AnimatedWord({ letters, rotations, keyPrefix }) {
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