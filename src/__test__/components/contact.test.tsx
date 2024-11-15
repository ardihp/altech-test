import ContactSection from "@/module/home/components/contact";
import { render, screen } from "@testing-library/react";
import { describe } from "node:test";

describe("Contact Section should render properly", () => {
  it("should render h2 text", () => {
    render(<ContactSection />);
    const section = screen.getByText("Get in touch");
    expect(section).toBeInTheDocument();
  });

  it("should render 4 options", () => {
    render(<ContactSection />);
    const section1 = screen.getAllByText("Chat to sales");
    expect(section1.length).toEqual(2);

    const section2 = screen.getAllByText("Chat to support");
    expect(section2.length).toEqual(2);

    const section3 = screen.getByText("Visit Us");
    expect(section3).toBeInTheDocument();

    const section4 = screen.getByText("Call us");
    expect(section4).toBeInTheDocument();
  });
});

describe("Message Section should render properly", () => {
  it("should render h2 text", () => {
    render(<ContactSection />);
    const section = screen.getByText("Messages us");
    expect(section).toBeInTheDocument();
  });

  it("should render form", () => {
    render(<ContactSection />);
    const firstName = screen.getByLabelText("First name");
    expect(firstName).toBeInTheDocument();

    const lastName = screen.getByLabelText("Last name");
    expect(lastName).toBeInTheDocument();

    const email = screen.getByLabelText("Email");
    expect(email).toBeInTheDocument();

    const messages = screen.getByLabelText("Messages");
    expect(messages).toBeInTheDocument();

    const button = screen.getByText("Send message");
    expect(button).toBeInTheDocument();
  });
});
