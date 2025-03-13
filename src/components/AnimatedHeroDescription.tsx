import { motion } from "motion/react";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 4,
      staggerChildren: 0.15,
    },
  },
};

const word = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

const specialWord = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function AnimatedHeroDescription() {
  return (
    <motion.p
      className="text-muted-foreground font-geologica text-3xl font-bold w-2/3 leading-relaxed"
      variants={sentence}
      initial="hidden"
      animate="visible"
    >
      {["I", "love", "building", "things"].map((wordText, index) => (
        <motion.span key={index} className="inline-block mr-2" variants={word}>
          {wordText}{" "}
        </motion.span>
      ))}{" "}
      <motion.span
        className="px-3 rounded-lg bg-chart-2 text-background inline-block"
        variants={specialWord}
      >
        from scratch
      </motion.span>{" "}
      {["and", "also", "enjoy", "working", "on"].map((wordText, index) => (
        <motion.span key={index} className="inline-block mr-2" variants={word}>
          {wordText}{" "}
        </motion.span>
      ))}
      <motion.span
        className="px-3 rounded-lg bg-chart-3 text-background inline-block"
        variants={specialWord}
      >
        applications
      </motion.span>{" "}
      {["with", "beautiful", "interfaces"].map((wordText, index) => (
        <motion.span key={index} className="inline-block mr-2" variants={word}>
          {wordText}
        </motion.span>
      ))}
    </motion.p>
  );
}
