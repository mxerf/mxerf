"use client";
import { useMouse } from "@/hooks/use-mouse";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "lucide-react";
import { ElementType, type ReactNode } from "react";
import ExpChip, { ExperienceType } from "./ExpChip";

export const GradientCard = ({
  as: Element = "div",
  title,
  description,
  icon,
  withArrow = false,
  circleSize = 400,
  className,
  containerClassName,
  colors = [
    "hsl(var(--chart-1))",
    "hsl(var(--chart-2))",
    "hsl(var(--chart-3))",
    "hsl(var(--chart-4))",
  ],
  children,
  exp,
  ...props
}: {
  as?: ElementType;
  href?: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  withArrow?: boolean;
  circleSize?: number;
  children?: ReactNode;
  colors?: string[];
  className?: string;
  containerClassName?: string;
  exp?: {
    text: string;
    type: ExperienceType;
  };
} & Omit<React.ComponentPropsWithRef<ElementType>, "ref">) => {
  const [mouse, parentRef] = useMouse();

  return (
    <Element
      className={cn(
        "group relative transform-gpu overflow-hidden rounded-[20px] bg-white/10 p-2 transition-transform hover:scale-[1.01] active:scale-95",
        containerClassName
      )}
      ref={parentRef}
      {...props}
    >
      {withArrow && (
        <ArrowUpRightIcon className="absolute right-2 top-2 z-10 size-5 translate-y-4 text-neutral-700 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 dark:text-neutral-300" />
      )}
      <div className="absolute right-5 top-5 z-10 group-hover:animate-wiggle animate-thrice animate-duration-200">
        {icon}
      </div>
      <div
        className={cn(
          "absolute -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-full transition-transform duration-500 group-hover:scale-[3]",
          mouse.elementX === null || mouse.elementY === null
            ? "opacity-0"
            : "opacity-100"
        )}
        style={{
          maskImage: `radial-gradient(${
            circleSize / 2
          }px circle at center, white, transparent)`,
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          left: `${mouse.elementX}px`,
          top: `${mouse.elementY}px`,
          background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]},${colors[2]},${colors[3]})`,
        }}
      />
      <div className="absolute inset-px rounded-[19px] bg-neutral-100/80 dark:bg-neutral-900/80" />
      {children && (
        <div
          className={cn(
            "gird relative h-40 place-content-center overflow-hidden rounded-[15px] border-white bg-white/70 dark:border-neutral-950 dark:bg-black/50",
            className
          )}
        >
          {children}
        </div>
      )}
      <div className="relative px-4 pb-2 pt-4">
        <div className="flex items-center gap-4">
          <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-300">
            {title}
          </h3>
          {exp && <ExpChip text={exp.text} type={exp.type} />}
        </div>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      </div>
    </Element>
  );
};
