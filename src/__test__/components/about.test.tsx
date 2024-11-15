import AboutSection from "@/module/home/components/about";
import { render, screen } from "@testing-library/react";
import { describe } from "node:test";

describe("About Section should render properly", () => {
  it("should render h2 text", () => {
    render(<AboutSection />);
    const section = screen.getByText("Together we are strong");
    expect(section).toBeInTheDocument();
  });
});
