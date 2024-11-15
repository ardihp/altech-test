"use client";

import { IconGaugeFilled, IconMenu } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function HeaderSection() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full z-[1] bg-white border-b border-neutral-200">
      <div className="w-full max-w-screen-2xl mx-auto flex items-center justify-between py-3 lg:py-6 px-4">
        <div className="flex items-center justify-center relative">
          <div className="w-[200px] lg:w-[320px] h-[200px] lg:h-[320px] absolute -top-32 lg:-top-52 lg:-left-28 -z-10">
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
              <IconGaugeFilled className="w-[32px] lg:w-[40px] h-[32px] lg:h-[40px] text-white" />
              <p className="font-semibold text-base lg:text-lg text-white">
                ERPs
              </p>
            </div>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          <p
            className="text-xs lg:text-sm font-medium cursor-pointer"
            onClick={() => document.getElementById("about")?.scrollIntoView()}
          >
            About
          </p>

          <p
            className="text-xs lg:text-sm font-medium cursor-pointer"
            onClick={() => document.getElementById("pricing")?.scrollIntoView()}
          >
            Pricing
          </p>

          <p
            className="text-xs lg:text-sm font-medium cursor-pointer"
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            Contact
          </p>

          <button className="bg-sky-400 px-4 lg:px-6 py-2 lg:py-3 rounded-md lg:rounded-lg lg:shadow-lg shadow-sky-300">
            <p className="text-xs lg:text-sm text-white font-medium">Login</p>
          </button>
        </div>

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger className="md:hidden border border-neutral-200 h-[32px] w-[32px] flex items-center justify-center rounded-md">
            <IconMenu size={18} className="text-neutral-600" />
          </PopoverTrigger>
          <PopoverContent className="flex flex-col items-center gap-4 w-[140px] mr-4">
            <p
              className="text-xs lg:text-sm font-medium cursor-pointer"
              onClick={() => {
                document.getElementById("about")?.scrollIntoView();
                setOpen(false);
              }}
            >
              About
            </p>

            <p
              className="text-xs lg:text-sm font-medium cursor-pointer"
              onClick={() => {
                document.getElementById("pricing")?.scrollIntoView();
                setOpen(false);
              }}
            >
              Pricing
            </p>

            <p
              className="text-xs lg:text-sm font-medium cursor-pointer"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView();
                setOpen(false);
              }}
            >
              Contact
            </p>

            <button className="w-full bg-sky-400 px-4 lg:px-6 py-2 lg:py-3 rounded-md lg:rounded-lg lg:shadow-lg shadow-sky-300">
              <p className="text-xs lg:text-sm text-white font-medium">Login</p>
            </button>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
}
