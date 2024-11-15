import TopSection from "@/module/home/components/top";
import { render, screen } from "@testing-library/react";
import { describe } from "node:test";

describe("Top Section should render properly", () => {
  it("should render h1 text", () => {
    render(<TopSection />);
    const section = screen.getByText(
      "Unleash And Transform Your Business Potential"
    );
    expect(section).toBeInTheDocument();
  });

  it("should render 'get started button'", () => {
    render(<TopSection />);
    const section = screen.getByText("Get Started");
    expect(section).toBeInTheDocument();
  });

  it("should render image illustration", () => {
    render(<TopSection />);
    const section = screen.getByAltText("Dashboard Illustation");
    expect(section).toBeInTheDocument();
  });

  it("should render image patter wave", () => {
    render(<TopSection />);
    const section = screen.getByAltText("Trend Illustation");
    expect(section).toBeInTheDocument();
  });
});
