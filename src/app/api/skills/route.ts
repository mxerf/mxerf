import { SkillCategoryType, SkillItemType } from "@/types/skills";
import { NextResponse } from "next/server";

const skills: Record<SkillCategoryType, SkillItemType[]> = {
  base: [
    {
      category: "base",
      title: "JavaScript",
      description:
        "A versatile programming language for web development, working both on the client and server sides.",
      icon: "FaJsSquare",
      colors: ["#F7DF1E", "#F7DF1E", "#323330", "#FFFFFF"],
      cols: 2,
      exp: {
        text: "3+ years",
        type: "master",
      },
    },
    {
      category: "base",
      title: "TypeScript",
      description:
        "Strictly typed superset of JavaScript, improving scalability and development convenience.",
      icon: "BiLogoTypescript",
      colors: ["#FFFFFF", "#3178C6", "#2F74C0", "#000000"],
      cols: 2,
      exp: {
        text: "3+ years",
        type: "master",
      },
    },
    {
      category: "base",
      title: "Python",
      description:
        "A flexible and powerful programming language widely used in web development, data analysis, and machine learning.",
      icon: "FaPython",
      colors: ["#FFFFFF", "#FFD43B", "#4282B2", "#FFFFFF"],
      cols: 1,
      exp: {
        text: "1+ years",
        type: "middle",
      },
    },
    {
      category: "base",
      title: "C#",
      description:
        "An object-oriented programming language widely used for web application development, games, and corporate software.",
      icon: "SiCsharp",
      colors: ["#20232A", "#223d15", "#68217A", "#FFFFFF"],
      cols: 1,
      exp: {
        text: "1+ year",
        type: "middle",
      },
    },
    {
      category: "base",
      title: "Java",
      description:
        "An object-oriented programming language widely used for corporate and web application development.",
      icon: "DiJava",
      colors: ["#1A1A1A", "#007396", "#EA2D2E", "#FFFFFF"],
      exp: {
        text: "learning",
        type: "base",
      },
    },
    {
      category: "base",
      title: "Go",
      description:
        "A compiled, multi-threaded programming language from Google, oriented towards high performance and simplicity.",
      icon: "SiGo",
      colors: ["#1A1A1A", "#00ADD8", "#FFFFFF", "#FFFFFF"],
      exp: {
        text: "learning",
        type: "base",
      },
    },
  ],
  frontend: [
    {
      category: "frontend",
      title: "React",
      description:
        "A library for building interfaces, based on the component approach and virtual DOM.",
      icon: "FaReact",
      colors: ["#20232A", "#61DAFB", "#087EA4", "#FFFFFF"],
      cols: 3,
      exp: {
        text: "3 years",
        type: "master",
      },
    },
    {
      category: "frontend",
      title: "MobX",
      description:
        "A library for managing state, providing reactive and simple-to-use API.",
      icon: "SiMobx",
      colors: ["#1A1A1A", "#FF9955", "#E76F51", "#FFFFFF"],
    },
    {
      category: "frontend",
      title: "Zustand",
      description:
        "A lightweight and minimalist state-manager for React applications.",
      colors: ["#000000", "#E07B39", "#E07B39", "#FFFFFF"],
      cols: 2,
    },
    {
      category: "frontend",
      title: "Redux",
      description:
        "A predictable container of state for JavaScript applications, often used with React.",
      icon: "SiRedux",
      colors: ["#1A1A1A", "#764ABC", "#593D88", "#FFFFFF"],
      cols: 2,
    },
    {
      category: "frontend",
      title: "Tailwind CSS",
      description:
        "A universal CSS system for building interfaces with low code.",
      icon: "RiTailwindCssFill",
      colors: ["#0F172A", "#38BDF8", "#06B6D4", "#FFFFFF"],
    },
    {
      category: "frontend",
      title: "TanStack",
      description:
        "A set of powerful tools for managing state, asynchronous data, and routing in React.",
      icon: "SiReactquery",
      colors: ["#1A1A1A", "#CBD700", "#ADEBDC", "#FFFFFF"],
      cols: 1,
    },
    {
      category: "frontend",
      title: "React Router",
      description:
        "A popular library for routing in React applications with support for dynamic routes and loaders.",
      icon: "SiReactrouter",
      colors: ["#1A1A1A", "#CA4245", "#E94E77", "#FFFFFF"],
      cols: 2,
    },
    {
      category: "frontend",
      title: "Next.js",
      description:
        "A popular React framework for server-side rendering and static generation.",
      icon: "SiNextdotjs",
      colors: ["#000000", "#000000", "#FFFFFF", "#FFFFFF"],
      cols: 3,
      exp: {
        text: "2+ years",
        type: "advanced",
      },
    },
    {
      category: "frontend",
      title: "NextUI",
      description:
        "A modern UI library for React with beautiful and adaptive components.",
      icon: "SiNextui",
      colors: ["#000000", "#000000", "#FFFFFF", "#FFFFFF"],
      cols: 1,
    },
    {
      category: "frontend",
      title: "MUI",
      description: "A popular UI library for React based on Material Design.",
      icon: "SiMui",
      colors: ["#20232A", "#007FFF", "#1976D2", "#FFFFFF"],
      cols: 1,
    },
    // {
    //   category: "frontend",
    //   title: "Headless UI",
    //   description:
    //     "UI-библиотека без стилей, предоставляющая полностью управляемые компоненты.",
    //   icon: "RiTailwindCssFill",
    //   colors: ["#0F172A", "#38BDF8", "#06B6D4", "#FFFFFF"],
    //   cols: 1,
    // },
    {
      category: "frontend",
      title: "Chakra UI",
      description:
        "A flexible and accessible UI library with theme support and components.",
      icon: "SiChakraui",
      colors: ["#1A202C", "#319795", "#38B2AC", "#FFFFFF"],
      cols: 1,
    },
    {
      category: "frontend",
      title: "Radix UI",
      description:
        "A unstyled library, offering advanced and accessible components for React.",
      icon: "SiRadixui",
      colors: ["#1A1A1A", "#8E8E8E", "#9B4F96", "#FFFFFF"],
      cols: 1,
    },
    {
      category: "frontend",
      title: "Ark UI",
      description:
        "A flexible, managed UI library with animation and accessibility support.",
      colors: ["#1A1A1A", "#FF5F00", "#FF8800", "#FFFFFF"],
      cols: 1,
    },
    {
      category: "frontend",
      title: "Vue",
      description:
        "A progressive framework for building user interfaces with convenient reactivity.",
      icon: "FaVuejs",
      colors: ["#42B883", "#35495E", "#41B883", "#34495E"],
      cols: 2,
      exp: {
        text: "1 year",
        type: "base",
      },
    },
    {
      category: "frontend",
      title: "Pinia",
      description:
        "A modern state-manager for Vue, offering a simple API and TypeScript support.",
      colors: ["#1E1E1E", "#FFC107", "#FFEB3B", "#FFFFFF"],
      cols: 1,
      exp: {
        text: ">1 year",
        type: "base",
      },
    },
    {
      category: "frontend",
      title: "Nuxt",
      description:
        "A framework for Vue.js, providing SSR, static generation, and convenient tools.",
      icon: "SiNuxtdotjs",
      colors: ["#1A202C", "#00C58E", "#2F495E", "#FFFFFF"],
      cols: 1,
      exp: {
        text: ">1 year",
        type: "base",
      },
    },
  ],
  backend: [
    {
      category: "backend",
      title: "ExpressJS",
      description:
        "An ecosystem for developing server-side applications in TypeScript.",
      icon: "SiExpress",
      colors: ["#FFFFFF", "#FFFFFF", "#000000", "#FFFFFF"],
      exp: {
        text: "2+ years",
        type: "middle",
      },
    },
    {
      category: "backend",
      title: "NestJS",
      description:
        "An ecosystem for developing server-side applications in TypeScript.",
      icon: "SiNestjs",
      colors: ["#000000", "#E2338A", "#E2338A", "#FFFFFF"],
      exp: {
        text: "2+ years",
        type: "middle",
      },
    },
    {
      category: "backend",
      title: "Prisma",
      description: "An type-safety ORM library for working with databases.",
      icon: "SiPrisma",
      colors: ["#000000", "#281da0", "rgb(30, 119, 44)", "#FFFFFF"],
      exp: {
        text: "advanced",
        type: "advanced",
      },
    },
    {
      category: "backend",
      title: "Sequelize",
      description: "An ORM library for working with databases.",
      icon: "SiSequelize",
      colors: ["#000000", "#2374dd", "#255d66", "#FFFFFF"],
      exp: {
        text: "middle",
        type: "middle",
      },
    },
  ],
  mobile: [
    {
      category: "mobile",
      title: "Swift",
      description:
        "A programming language for developing applications in the Apple ecosystem.",
      icon: "FaSwift",
      colors: ["#000000", "#FFAC45", "#FFAC45", "#FFFFFF"],
      exp: {
        text: ">1 year",
        type: "base",
      },
    },
    {
      category: "mobile",
      title: "Flutter",
      description:
        "A UI framework from Google for building cross-platform mobile, web, and desktop applications.",
      icon: "SiFlutter",
      colors: ["#20232A", "#02569B", "#42A5F5", "#FFFFFF"],
      cols: 1,
      exp: {
        text: ">1 year",
        type: "base",
      },
    },
    {
      category: "mobile",
      title: "React Native",
      description:
        "A framework for building mobile applications using React and JavaScript.",
      icon: "FaReact",
      colors: ["#20232A", "#61DAFB", "#087EA4", "#FFFFFF"],
      cols: 2,
      exp: {
        text: "1+ year",
        type: "base",
      },
    },
  ],
  devops: [],
  testing: [
    {
      category: "testing",
      title: "Vitest",
      description:
        "A modern testing framework for Vite with high performance and TypeScript support.",
      icon: "SiVitest",
      colors: ["#1A1A1A", "#739B1B", "#FCC72B", "#FFFFFF"],
      cols: 2,
    },
    {
      category: "testing",
      title: "Jest",
      description:
        "A powerful framework for testing JavaScript applications with snapshot and mock support.",
      icon: "SiJest",
      colors: ["#1A1A1A", "#C21325", "#99425B", "#FFFFFF"],
      cols: 2,
    },
    {
      category: "testing",
      title: "Cypress",
      description:
        "A testing tool for end-to-end testing with a convenient API and real-time debugging capability.",
      icon: "SiCypress",
      colors: ["#1A1A1A", "#00B5D8", "#2ECC71", "#FFFFFF"],
      cols: 2,
    },
    {
      category: "testing",
      title: "Playwright",
      description:
        "A powerful tool for UI testing, supporting Chrome, Firefox, and WebKit.",
      colors: ["#1A1A1A", "#C21325", "#2ECC71", "#FFFFFF"],
      cols: 2,
    },
  ],
  other: [
    {
      category: "other",
      title: "Vite",
      description:
        "A fast build tool for modern frontend projects with native support for ES modules.",
      icon: "SiVite",
      colors: ["#1A1A1A", "#646CFF", "#FFC53D", "#FFFFFF"],
      cols: 2,
    },
    {
      category: "other",
      title: "Webpack",
      description:
        "A powerful and flexible bundler for JavaScript applications with a wide ecosystem of plugins.",
      icon: "SiWebpack",
      colors: ["#1A1A1A", "#8DD6F9", "#1C78C0", "#FFFFFF"],
      cols: 2,
    },
    {
      category: "other",
      title: "Tauri",
      description:
        "A framework for creating lightweight cross-platform desktop applications using web technologies.",
      icon: "SiTauri",
      colors: ["#1A1A1A", "#24C8DB", "#FFC131", "#FFFFFF"],
      cols: 1,
    },
    {
      category: "other",
      title: "Electron",
      description:
        "A framework for creating cross-platform desktop applications based on Chromium and Node.js.",
      icon: "SiElectron",
      colors: ["#1A1A1A", "#47848F", "#A4DBE8", "#FFFFFF"],
      cols: 1,
    },
    {
      category: "other",
      title: "Turborepo",
      description:
        "A tool for managing monorepositories, optimizing build and caching tasks.",
      icon: "SiTurborepo",
      colors: ["#1A1A1A", "#EE4445", "#3C82F6", "#FFFFFF"],
      cols: 1,
    },
    {
      category: "other",
      title: "Git",
      description:
        "A version control system that allows efficient management of code and collaborative development of projects.",
      icon: "FaGitAlt",
      colors: ["#20232A", "#F05032", "#DE4C36", "#FFFFFF"],
      cols: 1,
      exp: {
        text: "3+ years",
        type: "advanced",
      },
    },
    {
      category: "other",
      title: "Docker",
      description:
        "A platform for containerization, simplifying deployment and management of applications.",
      icon: "FaDocker",
      colors: ["#20232A", "#2496ED", "#0DB7ED", "#FFFFFF"],
      cols: 2,
      exp: {
        text: "middle",
        type: "middle",
      },
    },
    {
      category: "other",
      title: "WebSocket",
      description:
        "A protocol for real-time bidirectional communication over TCP, used for chat, games, and data updates.",
      icon: "SiSocketdotio",
      colors: ["#1A1A1A", "#FF9955", "#808080", "#FFFFFF"],
      cols: 2,
    },
    {
      category: "other",
      title: "Linux",
      description:
        "An open-source operating system based on the Linux kernel, widely used for servers, development, and DevOps.",
      icon: "SiLinux",
      colors: ["#1A1A1A", "#FCC624", "#000000", "#FFFFFF"],
      cols: 4,
    },
  ],
};

export async function GET() {
  return NextResponse.json(skills);
}
