import { SkillCategoryType } from "@/types/skills";
import { JSX } from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { DiJava } from "react-icons/di";
import {
  FaDocker,
  FaGitAlt,
  FaJsSquare,
  FaPython,
  FaReact,
  FaSwift,
  FaVuejs,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiChakraui,
  SiCypress,
  SiElectron,
  SiExpress,
  SiFlutter,
  SiGo,
  SiJest,
  SiLinux,
  SiMobx,
  SiMui,
  SiNestjs,
  SiNextdotjs,
  SiNextui,
  SiNuxtdotjs,
  SiPrisma,
  SiRadixui,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiSequelize,
  SiSocketdotio,
  SiTauri,
  SiTurborepo,
  SiVite,
  SiVitest,
  SiWebpack,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

export const BASE_ICON_SIZE = 32;

export const skillIconsMap: Record<string, JSX.Element> = {
  FaReact: <FaReact size={BASE_ICON_SIZE} fill="#61DAFB" />,
  FaJsSquare: <FaJsSquare size={BASE_ICON_SIZE} fill="#F7DF1E" />,
  FaVuejs: <FaVuejs size={BASE_ICON_SIZE} fill="#42B883" />,
  BiLogoTypescript: (
    <BiLogoTypescript size={BASE_ICON_SIZE + 5.5} fill="#3178C6" />
  ),
  RiTailwindCssFill: <RiTailwindCssFill size={BASE_ICON_SIZE} fill="#64D9F4" />,
  FaSwift: <FaSwift size={BASE_ICON_SIZE} fill="#FFAC45" />,
  SiNestjs: <SiNestjs size={BASE_ICON_SIZE} fill="#E0234E" />,
  SiExpress: <SiExpress size={BASE_ICON_SIZE} fill="#FFFFFF" />,
  SiPrisma: <SiPrisma size={BASE_ICON_SIZE} fill="#FFFFFF" />,
  SiSequelize: <SiSequelize size={BASE_ICON_SIZE} fill="#2374dd" />,
  FaPython: <FaPython size={BASE_ICON_SIZE} />,
  SiCsharp: <TbBrandCSharp size={BASE_ICON_SIZE} />,
  SiFlutter: <SiFlutter size={BASE_ICON_SIZE} fill="#02569B" />,
  FaGitAlt: <FaGitAlt size={BASE_ICON_SIZE} fill="#F05032" />,
  FaDocker: <FaDocker size={BASE_ICON_SIZE} fill="#0db7d3" />,
  SiNextui: <SiNextui size={BASE_ICON_SIZE} />,
  SiMui: <SiMui size={BASE_ICON_SIZE} fill="#1976D2" />,
  SiChakraui: <SiChakraui size={BASE_ICON_SIZE} fill="#38B2AC" />,
  SiRadixui: <SiRadixui size={BASE_ICON_SIZE} fill="#9B4F96" />,
  SiVitest: <SiVitest size={BASE_ICON_SIZE} fill="#739B1B" />,
  SiJest: <SiJest size={BASE_ICON_SIZE} fill="#C21325" />,
  SiCypress: <SiCypress size={BASE_ICON_SIZE} fill="#2ECC71" />,
  SiVite: <SiVite size={BASE_ICON_SIZE} fill="#FFC53D" />,
  SiWebpack: <SiWebpack size={BASE_ICON_SIZE} fill="#1F8DD6" />,
  SiNuxtdotjs: <SiNuxtdotjs size={BASE_ICON_SIZE} fill="#42B883" />,
  SiNextdotjs: <SiNextdotjs size={BASE_ICON_SIZE} />,
  SiReactrouter: <SiReactrouter size={BASE_ICON_SIZE} fill="#CA4245" />,
  SiReactquery: <SiReactquery size={BASE_ICON_SIZE} fill="#CBD700" />,
  SiTauri: <SiTauri size={BASE_ICON_SIZE} fill="#24C8DB" />,
  SiElectron: <SiElectron size={BASE_ICON_SIZE} fill="#47848F" />,
  SiTurborepo: <SiTurborepo size={BASE_ICON_SIZE} />,
  SiRedux: <SiRedux size={BASE_ICON_SIZE} fill="#764ABC" />,
  SiMobx: <SiMobx size={BASE_ICON_SIZE} fill="#FF9955" />,
  SiLinux: <SiLinux size={BASE_ICON_SIZE} />,
  SiSocketdotio: <SiSocketdotio size={BASE_ICON_SIZE} fill="#FF9955" />,
  SiGo: <SiGo size={BASE_ICON_SIZE} fill="#00ADD8" />,
  DiJava: <DiJava size={BASE_ICON_SIZE} />,
};

export const skillContentsMap: Record<
  SkillCategoryType,
  { title: string; description: string }
> = {
  base: {
    title: "Base",
    description: "Base languages",
  },
  frontend: {
    title: "Frontend",
    description: "Tools, libs and frameworks for frontend development",
  },
  backend: {
    title: "Backend",
    description: "Tools, libs and frameworks for backend development",
  },
  mobile: {
    title: "Mobile",
    description: "Tools, libs and frameworks for mobile development",
  },
  testing: {
    title: "Testing",
    description:
      "Tools for unit, integration and e2e testing code and applications",
  },
  devops: {
    title: "DevOps",
    description:
      "Tools for automation of day-to-day tasks in the development process",
  },
  other: {
    title: "Other",
    description: "Other tools for development",
  },
};
