"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function TooltipCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [tooltip, setTooltip] = useState<{ text: string; visible: boolean }>({
    text: "",
    visible: false,
  });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.getAttribute("data-tooltip")) {
        setTooltip({
          text: target.getAttribute("data-tooltip") || "Click",
          visible: true,
        });
      }
    };

    const handleMouseOut = () => {
      setTooltip((prev) => ({ ...prev, visible: false }));
    };

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <AnimatePresence>
      {tooltip.visible && (
        <motion.div
          className="max-sm:hidden fixed z-20 bg-foreground text-background font-semibold text-sm font-geologica px-2 py-1 rounded-lg shadow-md pointer-events-none origin-top-left"
          style={{
            top: position.y + 15,
            left: position.x + 15,
          }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.15 } }}
          exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.1 } }}
        >
          {tooltip.text}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
