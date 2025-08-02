import React from "react";
import HeroSection from "@/components/home/HeroSection";
import HowWeWorkSection from "@/components/home/HowWeWorkSection";
import FocusAreasSection from "@/components/home/FocusAreasSection";
import CTASection from "@/components/home/CTASection";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <HowWeWorkSection />
      <FocusAreasSection />
      <CTASection />
    </div>
  );
};

export default Home;
