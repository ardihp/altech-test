import Image from "next/image";
import React from "react";

export default function HeaderSection() {
  return (
    <header className="relative">
      <div className="w-full max-w-screen-2xl mx-auto flex items-center justify-between py-6 px-4">
        <div className="flex relative">
          <div className="w-[320px] h-[320px] absolute -top-52 -left-24 -z-10">
            <Image
              src="/assets/tl-blob.png"
              fill
              sizes="300px"
              alt="Pattern Blob"
              className="object-cover object-center"
            />
          </div>

          <div className="flex items-center gap-4">
            <p className="text-sm text-white">Header</p>
          </div>
        </div>

        <div className="flex items-center gap-12">
          <p className="text-sm font-medium cursor-pointer">About</p>

          <p className="text-sm font-medium cursor-pointer">Pricing</p>

          <p className="text-sm font-medium cursor-pointer">Contact</p>

          <button className="bg-sky-400 px-6 py-3 rounded-lg shadow-lg shadow-sky-300">
            <p className="text-sm text-white font-medium">Login</p>
          </button>
        </div>
      </div>
    </header>
  );
}