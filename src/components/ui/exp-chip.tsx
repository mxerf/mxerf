import { cn } from "@/utils";

export type ExperienceType = "base" | "middle" | "advanced" | "master";

const ExperienceStyles: Record<ExperienceType, string> = {
  base: "border-chip-base/50",
  middle: "border-chip-middle/50",
  advanced: "border-chip-advanced/50",
  master: "border-chip-master/50",
};

type Props = {
  text: string;
  type: ExperienceType;
};

const ExpChip = ({ text, type }: Props) => {
  return (
    <span
      className={cn(
        "py-1 px-2 rounded-lg text-muted-foreground text-xs font-mono border bg-transparent",
        ExperienceStyles[type]
      )}
    >
      {text}
    </span>
  );
};

export default ExpChip;
