import { motion } from "framer-motion";

const color = "#000000";

const SectionDivider = () => {
  return (
    <div className="relative flex items-center justify-center w-full py-6 my-16 px-6 md:px-16">
      <motion.div
        className="flex-1 h-[1.5px] origin-right"
        style={{
          background: `linear-gradient(to right, transparent, ${color})`,
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      <motion.div
        className="w-2.5 h-2.5 rounded-full mx-3 shrink-0"
        style={{ backgroundColor: color }}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="w-full h-full rounded-full"
          style={{ backgroundColor: color }}
          animate={{
            boxShadow: [
              `0 0 6px 1px ${color}, 0 0 10px 2px ${color}66`,
              `0 0 12px 3px ${color}, 0 0 22px 6px ${color}66`,
              `0 0 6px 1px ${color}, 0 0 10px 2px ${color}66`,
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </motion.div>

      <motion.div
        className="flex-1 h-[1.5px] origin-left"
        style={{
          background: `linear-gradient(to left, transparent, ${color})`,
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
    </div>
  );
};

export default SectionDivider;