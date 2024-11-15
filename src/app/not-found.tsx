import React from "react";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col flex-grow items-center justify-center">
      <h1 className="text-[160px] font-semibold leading-none text-neutral-600">404</h1>
      <p className="text-2xl font-semibold">Not Found</p>

      <button className="bg-sky-400 rounded-lg py-3 px-6 mt-10 shadow-lg shadow-sky-300">
        <p className="text-sm text-white font-medium">Back Home</p>
      </button>
    </div>
  );
}
