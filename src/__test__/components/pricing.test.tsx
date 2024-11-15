import { tiers } from "@/data/tiers";
import PricingSection from "@/module/home/components/pricing";
import { render, screen } from "@testing-library/react";
import { describe } from "node:test";

describe("Pricing Section should render properly", () => {
  it("should render h2 text", () => {
    render(<PricingSection />);
    const section = screen.getByText("Choose your right plan!");
    expect(section).toBeInTheDocument();
  });

  it("should tiers variable length is 3", () => {
    render(<PricingSection />);
    expect(tiers.length).toEqual(3);
  });

  it("should tiers basic price is 150k", () => {
    render(<PricingSection />);
    expect(tiers.find((item) => item.name === "Basic")?.price).toEqual(150000);
  });

  it("should tiers business price is 400k", () => {
    render(<PricingSection />);
    expect(tiers.find((item) => item.name === "Business")?.price).toEqual(
      400000
    );
  });

  it("should tiers enterpreneur price is custom", () => {
    render(<PricingSection />);
    expect(tiers.find((item) => item.name === "Enterpreneur")?.price).toBe(
      "custom"
    );
  });
});
