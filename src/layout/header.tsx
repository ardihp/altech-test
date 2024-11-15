"use client";

import { IconGaugeFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeaderSection() {
  return (
    <header className="sticky top-0 w-full z-[1] bg-white border-b border-neutral-200">
      <div className="w-full max-w-screen-2xl mx-auto flex items-center justify-between py-6 px-4">
        <div className="flex items-center justify-center relative">
          <div className="w-[320px] h-[320px] absolute -top-52 -left-28 -z-10">
            <Image
              src="/assets/tl-blob.png"
              fill
              sizes="300px"
              alt="Pattern Blob"
              className="object-cover object-center"
            />
          </div>

          <Link href="/">
            <div className="flex items-center gap-2">
              <IconGaugeFilled size={40} className="text-white" />
              <p className="font-semibold text-lg text-white">ERPs</p>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-12">
          <p
            className="text-sm font-medium cursor-pointer"
            onClick={() => document.getElementById("about")?.scrollIntoView()}
          >
            About
          </p>

          <p
            className="text-sm font-medium cursor-pointer"
            onClick={() => document.getElementById("pricing")?.scrollIntoView()}
          >
            Pricing
          </p>

          <p
            className="text-sm font-medium cursor-pointer"
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            Contact
          </p>

          <button className="bg-sky-400 px-6 py-3 rounded-lg shadow-lg shadow-sky-300">
            <p className="text-sm text-white font-medium">Login</p>
          </button>
        </div>
      </div>
    </header>
  );
}
