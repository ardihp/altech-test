import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import LayoutSection from "@/layout";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Altech Test",
  description: "A Website for Techinal Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <LayoutSection>{children}</LayoutSection>
      </body>
    </html>
  );
}
