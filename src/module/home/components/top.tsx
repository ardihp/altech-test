import Image from "next/image";
import React from "react";

export default function TopSection() {
  return (
    <section id="top" className="flex flex-col h-[calc(100vh_-_92px)] relative overflow-y-clip">
      <div className="absolute w-[900px] h-[900px] overflow-hidden -bottom-[450px] -right-[340px] -z-10">
        <Image
          src="/assets/br-blob.png"
          alt="Trend Illustation"
          fill
          sizes="700px"
          className="object-center object-cover"
        />
      </div>

      <div className="flex flex-col items-center pt-44 gap-7">
        <h1 className="text-6xl font-semibold w-[750px] text-center leading-[1.1em] text-neutral-600">
          Unleash And Transform Your Business Potential
        </h1>

        <p className="font-light w-[500px] text-center leading-[1.7em]">
          Empower your team, streamline workflows, and scale your operations
          effortlessly with our intuitive cloud-based solution.
        </p>

        <button className="py-3 px-6 bg-neutral-50/70 border bordeer-neutral-200 rounded-xl">
          <p className="text-sm font-medium">Get Started</p>
        </button>
      </div>

      <div className="relative w-[400px] h-[270px] overflow-hidden mt-auto">
        <Image
          src="/assets/dashboard.svg"
          alt="Dashboard Illustation"
          fill
          sizes="700px"
          className="object-center object-cover pl-8 pb-8"
        />
      </div>
    </section>
  );
}
