"use client";
import Lottie from "lottie-react";
import animationData from "@/assets/animation.json";

export default function Home() {
  return (
    <div className="flex justify-evenly items-center pt-16">
      <div className="hidden w-[500px] h-full md:flex justify-end items-end">
        <Lottie animationData={animationData} />
      </div>
      <div className="w-[500px] px-4">
        <div className="text-stone-900 text-5xl font-medium">
          Welcome to the future of work!
        </div>
        <div className="text-neutral-600 text-xl font-normal mt-8">
          Introducing Blocklance, the next generation of freelancing, leveraging
          blockchain technology to enhance security, transparency, and
          scalability in the freelancing industry.
        </div>

        <div className="mt-12">
          <h2 className="font-medium text-stone-900 text-2xl">
            Get notified when we launch
          </h2>
          <div className="flex flex-col md:flex-row gap-2 py-8">
            <input
              className="w-full md:w-3/4 px-8 py-4 bg-neutral-100 rounded-lg shadow justify-start items-center gap-2.5 inline-flex"
              placeholder="Email Address"
            />
            <button className="px-8 py-4 bg-indigo-700 hover:bg-indigo-800 rounded-lg justify-center items-center inline-flex text-zinc-50 font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
