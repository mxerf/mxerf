"use client";
import { useRef } from "react";
import { GradientCard } from "./GradientCard";

export const LisaviVideoCard = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <GradientCard
      as="a"
      href="https://lisavi.art/"
      target="_blank"
      title="Lisavi Candles"
      description="Boutique eCommerce for handcrafted candles with CMS, payments and Telegram bot integration."
      colors={["#fdf4e3", "#b17036", "#8a5401", "#000000"]}
      className="h-full flex-grow"
      containerClassName="flex flex-col min-h-[280px]"
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => {
        videoRef.current?.pause();
        videoRef.current!.currentTime = 0;
      }}
    >
      <p className="experience-card-gradient-text to-[#fdf4e3] via-[#b17036] from-[#8a5401]">
        lisavi.art
      </p>
      <video
        ref={videoRef}
        className="experience-card-gradient-image rounded-md"
        muted
        playsInline
        loop
        preload="metadata"
        poster="/videos/lisavi_preview.png"
      >
        <source src="/videos/lisavi_preview.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </GradientCard>
  );
};
