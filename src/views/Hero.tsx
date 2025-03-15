"use client";

import AnimatedHeroDescription from "@/components/AnimatedHeroDescr";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Typewriter from "@/components/ui/typewritter";
import WordListSwap from "@/components/ui/word-list-swap";
import { LayoutGroup, motion } from "motion/react";
import Image from "next/image";
import avatar from "../../public/avatar.jpg";

const Hero = () => {
  return (
    <>
      <div className="w-screen h-screen max-md:pb-24 flex items-center px-16 max-md:px-12 max-w-[1600px] mx-auto">
        <ThemeSwitcher className="absolute top-8 right-8" />
        <div className="flex flex-col max-md:items-center gap-4 max-md:gap-6 w-full">
          <Image
            src={avatar}
            alt="avatar"
            className="w-24 h-24 rounded-full animate-fade-in object-cover"
          />
          <Typewriter
            className="inline-block w-max text-muted-foreground bg-clip-text text-xl max-md:text-lg max-sm:text-sm max-[390px]:text-xs font-bold mb-2 font-source-code-pro"
            text="Hi, my name is Maks (mxerf), and I'm a ..."
          />
          <LayoutGroup>
            <motion.p
              initial={{ opacity: 0, x: "-5%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 3,
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
              className="flex max-md:flex-col max-md:items-center md:whitespace-pre min-[1440px]:text-9xl xl:text-8xl lg:text-7xl text-6xl font-geologica mb-4"
              layout={true}
            >
              <WordListSwap
                texts={[
                  "Frontend",
                  "Backend",
                  "Fullstack",
                  "Mobile",
                  "Desktop",
                ]}
                mainClassName="text-muted bg-chart-1 font-bold px-2 sm:px-2 md:px-3 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-xl"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.04}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{
                  type: "spring",
                  damping: 30,
                  stiffness: 400,
                }}
                rotationInterval={3000}
              />
              <motion.span
                className="pt-0.5 sm:pt-1 md:pt-2"
                layout={true}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              >
                {" "}
                developer
              </motion.span>
            </motion.p>
          </LayoutGroup>
          <AnimatedHeroDescription />
        </div>
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
          <motion.a
            href="#experience"
            initial={{
              y: "10%",
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 2,
              delay: 6.5,
              type: "spring",
              stiffness: 400,
              damping: 30,
            }}
            className="px-4 py-2 rounded-2xl border border-neutral-700 bg-neutral-400/5 text-foreground hover:border-chart-1/40 transition-colors"
          >
            Learn more
          </motion.a>
        </div>
      </div>
    </>
  );
};

export default Hero;
