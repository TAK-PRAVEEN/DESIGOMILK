"use client";

import SmoothScroll from "@/components/SmoothScroll";
import DesigoCursor from "@/components/DesigoCursor";
import DesigoNav from "@/components/DesigoNav";
import HeroStory from "@/components/sections/HeroStory";
import Journey from "@/components/sections/Journey";
import FarmScene from "@/components/sections/FarmScene";
import BreedExplorer from "@/components/sections/BreedExplorer";
import TraceMap from "@/components/sections/TraceMap";
import QualityPanel from "@/components/sections/QualityPanel";
import ProductWorlds from "@/components/sections/ProductWorlds";
import { MilkMaterial, Heritage } from "@/components/sections/Interludes";
import Technology from "@/components/sections/Technology";
import GheeScene from "@/components/sections/GheeScene";
import TraceYourMilk from "@/components/sections/TraceYourMilk";
import { StoryTimeline, FinalCTA } from "@/components/sections/StoryAndClose";
import { useRevealObserver } from "@/lib/motion";

export default function Home() {
  useRevealObserver();
  return (
    <>
      <SmoothScroll />
      <DesigoCursor />
      <DesigoNav />
      <main id="main">
        <HeroStory />
        <Journey />
        <FarmScene />
        <BreedExplorer />
        <TraceMap />
        <QualityPanel />
        <ProductWorlds />
        <MilkMaterial />
        <Heritage />
        <Technology />
        <GheeScene />
        <TraceYourMilk />
        <StoryTimeline />
        <FinalCTA />
      </main>
    </>
  );
}
