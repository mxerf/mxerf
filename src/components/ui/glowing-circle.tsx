import { cn } from "@/utils";

const GlowingCircle = ({
  size = 30,
  glowColor = "white",
  blurAmount = 100,
  className,
}: {
  size?: number;
  glowColor?: string;
  blurAmount?: number;
  className?: string;
}) => {
  const circleStyle = {
    width: `${size}px`,
    height: `${size}px`,
    filter: `blur(${blurAmount}px)`,
    background: glowColor,
  };

  return <div style={circleStyle} className={cn("", className)}></div>;
};

export default GlowingCircle;
