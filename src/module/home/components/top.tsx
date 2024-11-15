import Image from "next/image";
import React from "react";

export default function TopSection() {
  return (
    <section id="top" className="flex flex-col items-center h-[calc(100vh_-_56px)] md:h-full lg:h-[calc(100vh_-_92px)] relative overflow-y-clip md:overflow-visible lg:overflow-y-clip">
      <div className="absolute w-[300px] lg:w-[900px] h-[300px] lg:h-[900px] overflow-hidden -bottom-[150px] lg:-bottom-[450px] -right-[120px] lg:-right-[340px] -z-10">
        <Image
          src="/assets/br-blob.png"
          alt="Trend Illustation"
          fill
          sizes="700px"
          className="object-center object-cover"
        />
      </div>

      <div className="flex flex-col items-center pt-28 md:pt-32 lg:pt-44 gap-4 lg:gap-7">
        <h1 className="text-[26px] lg:text-6xl font-semibold lg:w-[750px] text-center leading-[1.1em] text-neutral-600">
          Unleash And Transform Your Business Potential
        </h1>

        <p className="font-light text-xs lg:text-base w-full md:w-[500px] text-center leading-[1.7em]">
          Empower your team, streamline workflows, and scale your operations
          effortlessly with our intuitive cloud-based solution.
        </p>

        <button className="py-3 px-4 lg:px-6 bg-neutral-50/70 border bordeer-neutral-200 rounded-xl">
          <p className="text-xs lg:text-sm font-medium">Get Started</p>
        </button>
      </div>

      <div className="relative w-[250px] lg:w-[400px] h-[140px] lg:h-[270px] overflow-hidden mt-auto md:mt-20 lg:mt-auto mb-10 lg:mr-auto">
        <Image
          src="/assets/dashboard.svg"
          alt="Dashboard Illustation"
          fill
          sizes="700px"
          className="object-center object-cover lg:pl-8 lg:pb-8"
        />
      </div>
    </section>
  );
}
