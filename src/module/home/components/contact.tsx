import {
  IconMapPin,
  IconMessage,
  IconMessages,
  IconPhone,
} from "@tabler/icons-react";
import React from "react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex flex-col w-full max-w-screen-sm lg:max-w-screen-xl mx-auto gap-6 lg:gap-16 pt-10 md:pt-[90px] scroll-mt-10 md:scroll-m-0"
    >
      <div className="flex flex-col md:items-center gap-2 lg:gap-6">
        <h2 className="text-[26px] lg:text-5xl font-semibold md:text-center text-sky-400">
          Get in touch
        </h2>

        <p className="md:w-[500px] font-light text-xs md:text-sm md:text-center">
          {`Ready tp choose your plan? Let's chat about how we can help.`}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10">
        <div className="border border-neutral-200 bg-gradient-to-tl from-sky-300/30 via-white to-white rounded-xl p-3 lg:p-5 flex flex-col gap-8 lg:gap-14 duration-300">
          <div className="h-10 w-10 border border-sky-500/10 rounded-lg flex items-center justify-center bg-sky-500/10">
            <IconMessage size={20} className="text-sky-400" />
          </div>

          <div className="flex flex-col gap-1">
            <p className="font-semibold">Chat to sales</p>

            <p className="text-xs lg:text-sm">Speak to our friendly team.</p>

            <button className="w-fit bg-neutral-50/70 border bordeer-neutral-200 py-2 px-4 mt-2 rounded-md">
              <p className="text-xs lg:text-sm font-medium">Chat to sales</p>
            </button>
          </div>
        </div>

        <div className="border border-neutral-200 bg-gradient-to-tl from-sky-300/30 via-white to-white rounded-xl p-3 lg:p-5 flex flex-col gap-8 lg:gap-14 duration-300">
          <div className="h-10 w-10 border border-sky-500/10 rounded-lg flex items-center justify-center bg-sky-500/10">
            <IconMessages size={20} className="text-sky-400" />
          </div>

          <div className="flex flex-col gap-1">
            <p className="font-semibold">Chat to support</p>

            <p className="text-xs lg:text-sm">{`We're here to help.`}</p>

            <button className="w-fit bg-neutral-50/70 border border-neutral-200 py-2 px-4 mt-2 rounded-md">
              <p className="text-xs lg:text-sm font-medium">Chat to support</p>
            </button>
          </div>
        </div>

        <div className="border border-neutral-200 bg-gradient-to-tl from-sky-300/30 via-white to-white rounded-xl p-3 lg:p-5 flex flex-col gap-8 lg:gap-14 duration-300">
          <div className="h-10 w-10 border border-sky-500/10 rounded-lg flex items-center justify-center bg-sky-500/10">
            <IconMapPin size={20} className="text-sky-400" />
          </div>

          <div className="flex flex-col gap-1">
            <p className="font-semibold">Visit Us</p>

            <p className="text-xs lg:text-sm">Visit our office HQ.</p>

            <button className="w-fit bg-neutral-50/70 border border-neutral-200 py-2 px-4 mt-2 rounded-md">
              <p className="text-xs lg:text-sm font-medium">Get directions.</p>
            </button>
          </div>
        </div>

        <div className="border border-neutral-200 bg-gradient-to-tl from-sky-300/30 via-white to-white rounded-xl p-3 lg:p-5 flex flex-col gap-8 lg:gap-14 duration-300">
          <div className="h-10 w-10 border border-sky-500/10 rounded-lg flex items-center justify-center bg-sky-500/10">
            <IconPhone size={20} className="text-sky-400" />
          </div>

          <div className="flex flex-col gap-1">
            <p className="font-semibold">Call us</p>

            <p className="text-xs lg:text-sm">Mon-fri fromm 8am to 5pm.</p>

            <button className="w-fit border bg-neutral-50/70 border-neutral-200 py-2 px-4 mt-2 rounded-md">
              <p className="text-xs lg:text-sm font-medium">Call our team</p>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 lg:gap-4 mt-6">
        <h2 className="text-[26px] lg:text-5xl font-semibold text-indigo-400">
          Messages us
        </h2>

        <p className="lg:w-[500px] font-light text-xs lg:text-sm text-center">
          {`We'll get back to you within 24 hours.`}
        </p>
      </div>

      <form>
        <div className="flex flex-col gap-4 lg:gap-6 w-full max-w-[400px] lg:max-w-screen-sm mx-auto">
          <div className="flex gap-4 lg:gap-6">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="first-name" className="text-xs lg:text-sm">
                First name
              </label>
              <input
                id="first-name"
                type="text"
                placeholder="First name"
                className="border border-neutral-200 py-3 px-4 rounded-lg w-full text-xs lg:text-sm"
                required
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="last-name" className="text-xs lg:text-sm">
                Last name
              </label>
              <input
                id="last-name"
                type="text"
                placeholder="Last name"
                className="border border-neutral-200 py-3 px-4 rounded-lg w-full text-xs lg:text-sm"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="email" className="text-xs lg:text-sm">
              Email
            </label>
            <input
              id="email"
              type="text"
              placeholder="Email"
              className="border border-neutral-200 py-3 px-4 rounded-lg w-full text-xs lg:text-sm"
              required
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="messages" className="text-xs lg:text-sm">
              Messages
            </label>
            <textarea
              id="messages"
              rows={3}
              placeholder="Messages"
              className="border border-neutral-200 py-3 px-4 rounded-lg w-full text-xs lg:text-sm"
              required
            />
          </div>
          <button className="bg-neutral-600 py-3 rounded-md">
            <p className="text-xs lg:text-sm text-white font-medium">
              Send message
            </p>
          </button>
        </div>
      </form>
    </section>
  );
}
