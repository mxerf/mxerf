import { ExperienceType } from "@/components/ui/exp-chip";

export type SkillCategoryType =
  | "base"
  | "frontend"
  | "backend"
  | "mobile"
  | "devops"
  | "testing"
  | "other";

export type SkillTagType =
  | "ui-lib"
  | "framework"
  | "library"
  | "tool"
  | "lang"
  | "other";

export type SkillItemType = {
  category: SkillCategoryType;
  title: string;
  description: string;
  icon?: string;
  colors?: string[];
  tags?: SkillTagType[];
  rows?: number;
  cols?: number;
  exp?: {
    text: string;
    type: ExperienceType;
  };
};
