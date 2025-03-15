import { motion, useMotionValue, useTransform } from "motion/react";

const SIZE = 100;
const STROKE_WIDTH = 10;
const RADIUS = (SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const CircularProgress = () => {
  const progress = useMotionValue(0);
  const displayedProgress = useTransform(progress, (value) =>
    Math.round(value)
  );
  const strokeOffset = useTransform(
    progress,
    (value) => CIRCUMFERENCE - (CIRCUMFERENCE * value) / 100
  );

  return (
    <div className="flex flex-col items-center">
      <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
        {/* Фон круга */}
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          stroke="lightgray"
          strokeWidth={STROKE_WIDTH}
          fill="none"
        />
        {/* Анимируемый круг */}
        <motion.circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          stroke="blue"
          strokeWidth={STROKE_WIDTH}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={strokeOffset}
        />
      </svg>
      <motion.div className="mt-2 text-lg font-semibold">
        {displayedProgress.get()}%
      </motion.div>
    </div>
  );
};

export default CircularProgress;
