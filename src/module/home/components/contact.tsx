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
      className="flex flex-col w-full max-w-screen-xl mx-auto gap-16 pt-40"
    >
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-5xl font-semibold text-sky-400">Get in touch</h2>

        <p className="w-[500px] font-light text-sm text-center">
          Ready to choose your plan? Let's chat about how we can help.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-10">
        <div className="border border-neutral-200 rounded-xl p-5 flex flex-col gap-14">
          <div className="h-10 w-10 border border-sky-500/10 rounded-lg flex items-center justify-center bg-sky-500/10">
            <IconMessage size={20} className="text-sky-400" />
          </div>

          <div className="flex flex-col gap-1">
            <p className="font-semibold">Chat to sales</p>

            <p className="text-sm">Speak to our friendly team.</p>

            <button className="w-fit bg-neutral-50/70 border bordeer-neutral-200 py-2 px-4 mt-2 rounded-md">
              <p className="text-sm font-medium">Chat to sales</p>
            </button>
          </div>
        </div>

        <div className="border border-neutral-200 rounded-xl p-5 flex flex-col gap-14">
          <div className="h-10 w-10 border border-sky-500/10 rounded-lg flex items-center justify-center bg-sky-500/10">
            <IconMessages size={20} className="text-sky-400" />
          </div>

          <div className="flex flex-col gap-1">
            <p className="font-semibold">Chat to support</p>

            <p className="text-sm">We're here to help.</p>

            <button className="w-fit bg-neutral-50/70 border border-neutral-200 py-2 px-4 mt-2 rounded-md">
              <p className="text-sm font-medium">Chat to support</p>
            </button>
          </div>
        </div>

        <div className="border border-neutral-200 rounded-xl p-5 flex flex-col gap-14">
          <div className="h-10 w-10 border border-sky-500/10 rounded-lg flex items-center justify-center bg-sky-500/10">
            <IconMapPin size={20} className="text-sky-400" />
          </div>

          <div className="flex flex-col gap-1">
            <p className="font-semibold">Visit Us</p>

            <p className="text-sm">Visit our office HQ.</p>

            <button className="w-fit bg-neutral-50/70 border border-neutral-200 py-2 px-4 mt-2 rounded-md">
              <p className="text-sm font-medium">Get directions.</p>
            </button>
          </div>
        </div>

        <div className="border border-neutral-200 rounded-xl p-5 flex flex-col gap-14">
          <div className="h-10 w-10 border border-sky-500/10 rounded-lg flex items-center justify-center bg-sky-500/10">
            <IconPhone size={20} className="text-sky-400" />
          </div>

          <div className="flex flex-col gap-1">
            <p className="font-semibold">Call us</p>

            <p className="text-sm">Mon-fri fromm 8am to 5pm.</p>

            <button className="w-fit border bg-neutral-50/70 border-neutral-200 py-2 px-4 mt-2 rounded-md">
              <p className="text-sm font-medium">Call our team</p>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 mt-6">
        <h2 className="text-5xl font-semibold text-indigo-400">Messages us</h2>

        <p className="w-[500px] font-light text-sm text-center">
          We'll get back to you within 24 hours.
        </p>
      </div>

      <form>
        <div className="flex flex-col gap-6 w-full max-w-screen-sm mx-auto">
          <div className="flex gap-6">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="first-name" className="text-sm">
                First name
              </label>
              <input
                id="first-name"
                type="text"
                placeholder="First name"
                className="border border-neutral-200 py-3 px-4 rounded-lg w-full text-sm"
                required
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="last-name" className="text-sm">
                Last name
              </label>
              <input
                id="last-name"
                type="text"
                placeholder="Last name"
                className="border border-neutral-200 py-3 px-4 rounded-lg w-full text-sm"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="text"
              placeholder="Email"
              className="border border-neutral-200 py-3 px-4 rounded-lg w-full text-sm"
              required
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="messages" className="text-sm">
              Messages
            </label>
            <textarea
              id="messages"
              rows={3}
              placeholder="Messages"
              className="border border-neutral-200 py-3 px-4 rounded-lg w-full text-sm"
              required
            />
          </div>
          <button className="bg-neutral-600 py-3 rounded-md">
            <p className="text-sm text-white font-medium">Send message</p>
          </button>
        </div>
      </form>
    </section>
  );
}
