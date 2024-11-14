import React, { ReactNode } from "react";
import HeaderSection from "./header";
import FooterSection from "./footer";

export default function LayoutSection({ children }: { children: ReactNode }) {
  return (
    <main className="flex flex-col w-full">
      <HeaderSection />
      {children}
      <FooterSection />
    </main>
  );
}
