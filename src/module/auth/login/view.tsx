import React from "react";

export default function LoginView() {
  return (
    <section className="flex flex-col gap-10 items-center justify-center w-full px-4">
      <div className="flex flex-col items-center gap-2 lg:gap-4 mt-6">
        <h2 className="text-[26px] lg:text-5xl font-semibold text-indigo-400">
          Log In
        </h2>

        <p className="lg:w-[500px] font-light text-xs lg:text-sm text-center">
          {`Sign in into your account.`}
        </p>
      </div>

      <form className="w-full max-w-[280px] md:max-w-[400px]">
        <div className="flex flex-col gap-4 lg:gap-6 w-full max-w-[400px] lg:max-w-screen-sm mx-auto">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="email" className="text-xs lg:text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="border border-neutral-200 py-3 px-4 rounded-lg w-full text-xs lg:text-sm"
              required
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="password" className="text-xs lg:text-sm">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="border border-neutral-200 py-3 px-4 rounded-lg w-full text-xs lg:text-sm"
              required
            />
          </div>

          <button className="bg-neutral-600 py-3 rounded-md">
            <p className="text-xs lg:text-sm text-white font-medium">
              Login
            </p>
          </button>
        </div>
      </form>
    </section>
  );
}
