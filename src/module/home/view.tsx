import React from "react";
import TopSection from "./components/top";
import AboutSection from "./components/about";
import PricingSection from "./components/pricing";
import ContactSection from "./components/contact";

export default function HomeView() {
  return (
    <section className="flex flex-col flex-grow w-full max-w-screen-2xl mx-auto px-4 pb-6 lg:pb-20">
      <TopSection />

      <AboutSection />

      <PricingSection />

      <ContactSection />
    </section>
  );
}
