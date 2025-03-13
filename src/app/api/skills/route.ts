import { SkillCategoryType, SkillItemType } from "@/types/skills";
import { NextResponse } from "next/server";

const skills: Record<SkillCategoryType, SkillItemType[]> = {
  base: [
    {
      category: "base",
      title: "JavaScript",
      description:
        "Многофункциональный язык программирования для веб-разработки, работающий как на клиенте, так и на сервере.",
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
        "Строго типизированное надмножество JavaScript, улучшающее масштабируемость и удобство разработки.",
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
        "Гибкий и мощный язык программирования, широко используемый в веб-разработке, анализе данных и машинном обучении.",
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
        "Объектно-ориентированный язык программирования, широко используемый для разработки веб-приложений, игр и корпоративного ПО.",
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
        "Объектно-ориентированный язык программирования, широко используемый для разработки корпоративных и веб-приложений.",
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
        "Компилируемый многопоточный язык программирования от Google, ориентированный на высокую производительность и простоту.",
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
        "Библиотека для создания интерфейсов, основанная на компонентном подходе и виртуальном DOM.",
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
        "Библиотека для управления состоянием, обеспечивающая реактивный и простой в использовании API.",
      icon: "SiMobx",
      colors: ["#1A1A1A", "#FF9955", "#E76F51", "#FFFFFF"],
    },
    {
      category: "frontend",
      title: "Zustand",
      description:
        "Легковесное и минималистичное состояние-менеджер для React-приложений.",
      colors: ["#000000", "#E07B39", "#E07B39", "#FFFFFF"],
      cols: 2,
    },
    {
      category: "frontend",
      title: "Redux",
      description:
        "Предсказуемый контейнер состояния для JavaScript-приложений, часто используемый с React.",
      icon: "SiRedux",
      colors: ["#1A1A1A", "#764ABC", "#593D88", "#FFFFFF"],
      cols: 2,
    },
    {
      category: "frontend",
      title: "Tailwind CSS",
      description:
        "Универсальная система компоновки CSS, позволяющая создавать веб-интерфейсы с низким уровнем кода.",
      icon: "RiTailwindCssFill",
      colors: ["#0F172A", "#38BDF8", "#06B6D4", "#FFFFFF"],
    },
    {
      category: "frontend",
      title: "TanStack",
      description:
        "Набор мощных инструментов для управления состоянием, асинхронными данными и маршрутизацией в React.",
      icon: "SiReactquery",
      colors: ["#1A1A1A", "#CBD700", "#ADEBDC", "#FFFFFF"],
      cols: 1,
    },
    {
      category: "frontend",
      title: "React Router",
      description:
        "Популярная библиотека для маршрутизации в React-приложениях с поддержкой динамических маршрутов и загрузчиков.",
      icon: "SiReactrouter",
      colors: ["#1A1A1A", "#CA4245", "#E94E77", "#FFFFFF"],
      cols: 2,
    },
    {
      category: "frontend",
      title: "Next.js",
      description:
        "Популярный React-фреймворк для серверного рендеринга и статической генерации.",
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
        "Современная UI-библиотека для React с красивыми и адаптивными компонентами.",
      icon: "SiNextui",
      colors: ["#000000", "#000000", "#FFFFFF", "#FFFFFF"],
      cols: 1,
    },
    {
      category: "frontend",
      title: "MUI",
      description:
        "Популярная UI-библиотека для React, основанная на Material Design.",
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
        "Гибкая и доступная UI-библиотека с поддержкой темизации и компонентов.",
      icon: "SiChakraui",
      colors: ["#1A202C", "#319795", "#38B2AC", "#FFFFFF"],
      cols: 1,
    },
    {
      category: "frontend",
      title: "Radix UI",
      description:
        "Библиотека без стилей, предлагающая продвинутые и доступные компоненты для React.",
      icon: "SiRadixui",
      colors: ["#1A1A1A", "#8E8E8E", "#9B4F96", "#FFFFFF"],
      cols: 1,
    },
    {
      category: "frontend",
      title: "Ark UI",
      description:
        "Гибкая, управляемая UI-библиотека с поддержкой анимаций и доступности.",
      colors: ["#1A1A1A", "#FF5F00", "#FF8800", "#FFFFFF"],
      cols: 1,
    },
    {
      category: "frontend",
      title: "Vue",
      description:
        "Прогрессивный фреймворк для создания пользовательских интерфейсов с удобной реактивностью.",
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
        "Современный state-менеджер для Vue, предлагающий простой API и поддержку TypeScript.",
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
        "Фреймворк для Vue.js, предоставляющий SSR, статическую генерацию и удобные инструменты.",
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
        "Экосистема для разработки серверных приложений на языке TypeScript.",
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
        "Экосистема для разработки серверных приложений на языке TypeScript.",
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
      description: "ORM библиотека для работы с базами данных.",
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
      description: "ORM библиотека для работы с базами данных.",
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
        "Язык программирования для разработки приложений в экосистеме Apple.",
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
        "UI-фреймворк от Google для создания кроссплатформенных мобильных, веб- и десктопных приложений.",
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
        "Фреймворк для создания мобильных приложений с использованием React и JavaScript.",
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
        "Современный тестовый фреймворк для Vite с высокой производительностью и TypeScript-поддержкой.",
      icon: "SiVitest",
      colors: ["#1A1A1A", "#739B1B", "#FCC72B", "#FFFFFF"],
      cols: 2,
    },
    {
      category: "testing",
      title: "Jest",
      description:
        "Мощный фреймворк для тестирования JavaScript-приложений с поддержкой снапшотов и моков.",
      icon: "SiJest",
      colors: ["#1A1A1A", "#C21325", "#99425B", "#FFFFFF"],
      cols: 2,
    },
    {
      category: "testing",
      title: "Cypress",
      description:
        "Инструмент для тестирования end-to-end с удобным API и возможностью дебага в реальном времени.",
      icon: "SiCypress",
      colors: ["#1A1A1A", "#00B5D8", "#2ECC71", "#FFFFFF"],
      cols: 2,
    },
    {
      category: "testing",
      title: "Playwright",
      description:
        "Мощный инструмент для тестирования UI, поддерживающий Chrome, Firefox и WebKit.",
      colors: ["#1A1A1A", "#C21325", "#2ECC71", "#FFFFFF"],
      cols: 2,
    },
  ],
  other: [
    {
      category: "other",
      title: "Vite",
      description:
        "Быстрый инструмент сборки для современных frontend-проектов с нативной поддержкой ES-модулей.",
      icon: "SiVite",
      colors: ["#1A1A1A", "#646CFF", "#FFC53D", "#FFFFFF"],
      cols: 2,
    },
    {
      category: "other",
      title: "Webpack",
      description:
        "Мощный и гибкий бандлер для JavaScript-приложений с широкой экосистемой плагинов.",
      icon: "SiWebpack",
      colors: ["#1A1A1A", "#8DD6F9", "#1C78C0", "#FFFFFF"],
      cols: 2,
    },
    {
      category: "other",
      title: "Tauri",
      description:
        "Фреймворк для создания лёгких кроссплатформенных десктопных приложений с использованием веб-технологий.",
      icon: "SiTauri",
      colors: ["#1A1A1A", "#24C8DB", "#FFC131", "#FFFFFF"],
      cols: 1,
    },
    {
      category: "other",
      title: "Electron",
      description:
        "Фреймворк для создания кроссплатформенных десктопных приложений на основе Chromium и Node.js.",
      icon: "SiElectron",
      colors: ["#1A1A1A", "#47848F", "#A4DBE8", "#FFFFFF"],
      cols: 1,
    },
    {
      category: "other",
      title: "Turborepo",
      description:
        "Инструмент для управления монорепозиториями, оптимизирующий сборку и кэширование задач.",
      icon: "SiTurborepo",
      colors: ["#1A1A1A", "#EE4445", "#3C82F6", "#FFFFFF"],
      cols: 1,
    },
    {
      category: "other",
      title: "Git",
      description:
        "Система контроля версий, позволяющая эффективно управлять кодом и совместно разрабатывать проекты.",
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
        "Платформа для контейнеризации, упрощающая развертывание и управление приложениями.",
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
        "Протокол двусторонней связи в реальном времени поверх TCP, используемый для чатов, игр и обновлений данных.",
      icon: "SiSocketdotio",
      colors: ["#1A1A1A", "#FF9955", "#808080", "#FFFFFF"],
      cols: 2,
    },
    {
      category: "other",
      title: "Linux",
      description:
        "Открытая операционная система на базе ядра Linux, широко используемая для серверов, разработки и DevOps.",
      icon: "SiLinux",
      colors: ["#1A1A1A", "#FCC624", "#000000", "#FFFFFF"],
      cols: 4,
    },
  ],
};

export async function GET() {
  return NextResponse.json(skills);
}
