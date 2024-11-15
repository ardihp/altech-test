import { tiers } from "@/data/tiers";
import { IconCheck } from "@tabler/icons-react";
import React from "react";

export default function PricingSection() {
  return (
    <section id="pricing" className="flex flex-col items-center gap-16 pt-40">
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-5xl font-semibold text-center text-indigo-400">
          Choose your right plan!
        </h2>

        <p className="w-[500px] font-light text-sm text-center">
          Select from best plans, ensuring a perfect match. Need more or less?
          Customize your subscription for a seamless fit!
        </p>
      </div>

      <div className="grid grid-cols-3 gap-10 w-full max-w-screen-xl">
        {tiers.map((tier, key) => (
          <div
            key={key}
            className={`w-full p-5 rounded-[24px] flex flex-col border border-neutral-200 ${tier.price === 'custom' ? 'bg-gradient-to-b from-indigo-300/60 via-white to-white' : ''}`}
          >
            <div
              className={`${
                tier.price === "custom"
                  ? "bg-white border-neutral-200"
                  : "bg-indigo-400 border-indigo-300"
              } rounded-xl w-fit py-3 px-4 border`}
            >
              <p
                className={`${
                  tier.price === "custom" ? "" : "text-white"
                } font-medium`}
              >
                {tier.name}
              </p>
            </div>

            <p className="text-4xl font-medium mt-10">
              {tier.price === "custom" ? (
                "Let's Talks!"
              ) : (
                <>
                  {`Rp${tier.price?.toLocaleString("ID-id")}`}
                  <span className="text-sm font-light">/month</span>
                </>
              )}
            </p>

            <hr className="border-neutral-200 mt-5" />

            <div className="flex flex-col gap-3 mt-5 mb-12">
              {tier.features.map((feature, featureKey) => (
                <div key={featureKey} className="flex items-start gap-2">
                  <IconCheck size={16} className="text-neutral-800" />

                  <p className="text-sm font-medium text-pretty">{feature}</p>
                </div>
              ))}
            </div>

            <hr className="border-neutral-200 mb-5 mt-auto" />

            <button
              className={`py-3 rounded-xl border border-neutral-200 ${
                tier.price === "custom" ? "bg-neutral-600" : "bg-neutral-50/70"
              }`}
            >
              <p
                className={`${
                  tier.price === "custom" ? "text-white" : ""
                } font-medium text-sm`}
              >
                {tier.price === "custom" ? "Book a Call" : "Get Stated"}
              </p>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
