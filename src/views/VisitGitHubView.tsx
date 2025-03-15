"use client";
import ProfileGitHub from "@/components/ProfileGitHub";
import { AnimatedLine } from "@/components/ui/animated-line";
import { GradientCardBase } from "@/components/ui/gradient-card";
import ChatskyIcon from "@/icons/ChatskyIcon";
import { ChatskyUiIcon } from "@/icons/ChatskyUiIcon";
import { useRef } from "react";

const VisitGitHubView = () => {
  const containerRef = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  return (
    <div className="relative max-w-[1440px] p-16 max-md:py-8 max-md:px-4 mx-auto">
      {/* <div className="absolute pointer-events-auto w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-[38%]">
        <TextHoverEffect text="GITHUB" />
      </div> */}
      <section className="section-heading mt-0 mb-16">
        <h2 className="section-title">
          Visit my{" "}
          <span className="bg-gradient-to-r from-chart-1 to-chart-3 inline-block text-transparent bg-clip-text">
            GitHub
          </span>
        </h2>
        <p className="section-description">
          Here is my GitHub profile where you can find my open-source projects
          history.
        </p>
      </section>
      <section
        ref={containerRef}
        className="relative z-10 pointer-events-none grid grid-cols-3 max-md:grid-cols-2 grid-rows-2 gap-16 max-md:gap-4 content-center justify-center"
      >
        <div ref={ref1}>
          <GradientCardBase
            as={"a"}
            href="https://github.com/deeppavlov/chatsky-ui"
            target="_blank"
            colors={["#FFAD0D", "#01A2FF", "#e86c4a", "#01A2FF"]}
            className="w-full h-full z-10 flex items-center justify-center hover:scale-[1.01] transition-transform pointer-events-auto border"
            childrenClassName="flex items-center justify-center gap-2 max-md:text-sm"
          >
            <ChatskyUiIcon className="size-8" />
            Chatsky UI
          </GradientCardBase>
        </div>
        <div ref={ref5} className="row-span-2 z-10">
          <GradientCardBase
            colors={[
              "hsl(var(--chart-3))",
              "hsl(var(--chart-1))",
              "hsl(var(--chart-3))",
              "hsl(var(--chart-1))",
            ]}
            className="pt-8 pb-4 hover:scale-[1.01] transition-transform pointer-events-auto border"
          >
            <ProfileGitHub />
          </GradientCardBase>
        </div>
        <div ref={ref2}>
          <GradientCardBase
            as={"a"}
            href="https://github.com/deeppavlov/chatsky-ui/tree/docs/chatsky-ui-docs/docs/ui-docs"
            target="_blank"
            colors={["#FFAD0D", "#01A2FF", "#FFAD0D", "#01A2FF"]}
            className="w-full h-full z-10 flex items-center justify-center hover:scale-[1.01] transition-transform pointer-events-auto border"
            childrenClassName="flex items-center justify-center gap-2 max-md:text-sm"
          >
            <ChatskyIcon className="size-8" />
            Chatsky Docs
          </GradientCardBase>
        </div>
        <div ref={ref3}>
          <GradientCardBase
            as={"a"}
            href="https://github.com/mxerf/sandbox"
            target="_blank"
            colors={[
              "hsl(var(--chart-1))",
              "hsl(var(--chart-3))",
              "hsl(var(--chart-1))",
              "hsl(var(--chart-3))",
            ]}
            className="w-full h-full z-10 flex items-center justify-center hover:scale-[1.01] transition-transform pointer-events-auto border"
            childrenClassName="flex items-center justify-center gap-2 py-12"
          >
            <p className="bg-gradient-to-r from-chart-1 to-chart-3 inline-block text-transparent bg-clip-text">
              sandbox.
            </p>
          </GradientCardBase>
        </div>
        <div ref={ref4}>
          <GradientCardBase
            className="w-full h-full z-10 flex items-center justify-center hover:scale-[1.01] transition-transform pointer-events-auto border text-muted-foreground"
            colors={["#ffffff30", "#ffffff50"]}
            childrenClassName="flex items-center justify-center gap-2 py-12"
          >
            coming soon...
          </GradientCardBase>
        </div>
        <AnimatedLine
          containerRef={containerRef}
          fromRef={ref1}
          toRef={ref5}
          gradientStartColor="#01A2FF"
          gradientStopColor="#FFAD0D"
        />
        <AnimatedLine
          containerRef={containerRef}
          fromRef={ref2}
          toRef={ref5}
          gradientStartColor="#FFAD0D"
          gradientStopColor="#01A2FF"
          reverse
        />
        <AnimatedLine
          containerRef={containerRef}
          fromRef={ref3}
          toRef={ref5}
          gradientStartColor="hsl(var(--chart-1))"
          gradientStopColor="hsl(var(--chart-3))"
        />
        <AnimatedLine
          containerRef={containerRef}
          fromRef={ref4}
          toRef={ref5}
          gradientStartColor="hsl(var(--chart-2))"
          gradientStopColor="hsl(var(--chart-2))"
          reverse
        />
      </section>
    </div>
  );
};

export default VisitGitHubView;
