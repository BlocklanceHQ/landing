"use client";
import Lottie from "lottie-react";
import animationData from "@/assets/animation.json";
import { WaitlistForm } from "./waitlist-form";

export default function Home() {
  return (
    <div className="flex justify-evenly items-center pt-16">
      <div className="hidden w-[500px] h-full md:flex justify-end items-end">
        <Lottie animationData={animationData} />
      </div>
      <div className="w-full md:w-[650px] px-4">
        <div
          className="text-stone-900 text-5xl font-medium"
          style={{ lineHeight: "normal" }}
        >
          Welcome to the future of work!
        </div>
        <div
          className="text-neutral-600 text-xl font-normal mt-8"
          style={{ lineHeight: "normal" }}
        >
          Introducing Blocklance, the next generation of freelancing, leveraging
          blockchain technology to enhance security, transparency, and
          scalability in the freelancing industry.
        </div>

        <div className="mt-24">
          <h2 className="font-medium text-stone-900 text-2xl">
            Get notified when we launch
          </h2>
          <WaitlistForm />
        </div>
      </div>
    </div>
  );
}
