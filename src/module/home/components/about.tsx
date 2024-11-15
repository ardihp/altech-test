import React from "react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="flex flex-col w-full max-w-screen-xl mx-auto pt-[90px] gap-20"
    >
      <hr className="border-neutral-200" />

      <div className="grid grid-cols-2">
        <h2 className="text-5xl font-semibold text-sky-400 w-[500px] text-pretty leading-tight">
          Together we are strong
        </h2>

        <div className="flex flex-col gap-10">
          <p className="text-xl font-semibold leading-[1.6em]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <p className="font-medium leading-[1.6em]">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
        </div>
      </div>

      <hr className="border-neutral-200" />

      <div className="grid grid-cols-3 gap-20">
        <div className="flex flex-col gap-6">
          <p className="font-medium text-pretty">
            We are committed to helping improve business quality you for approx.
          </p>

          <p className="text-7xl mt-auto font-semibold">
            10+<span className="text-base font-normal">years</span>
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <p className="font-medium text-pretty">
            Customers who have believed in their need to develop business to us.
          </p>

          <p className="text-7xl mt-auto font-semibold">290+</p>
        </div>

        <div className="flex flex-col gap-6">
          <p className="font-medium text-pretty">
            Our team is ready to help you achieve your dreams desired business.
          </p>

          <p className="text-7xl mt-auto font-semibold">150+</p>
        </div>
      </div>
    </section>
  );
}
