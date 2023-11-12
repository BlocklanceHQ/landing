"use client";
import Lottie from "lottie-react";
import animationData from "@/assets/animation.json";
import BrandImg from "@/assets/brand_img.svg";
import { WaitlistForm } from "./waitlist-form";

export default function Home() {
  return (
    <div
      className="flex justify-evenly items-center pt-16 bg-right bg-no-repeat"
      style={{ backgroundImage: `url(${BrandImg.src})` }}
    >
      <div className="relative w-[500px] h-full">
        <Lottie
          className="hidden w-full h-full md:flex justify-end items-end"
          animationData={animationData}
          style={{ maskImage: "linear-gradient(black, red)" }}
        />
        <div
          className="absolute top-0 w-full h-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(250, 250, 250, 0.00) 43%, #FAFAFA 100%)",
          }}
        />
      </div>

      <div className="w-full md:w-[650px] px-4">
        <div
          className="text-stone-900 text-5xl font-medium"
          style={{ lineHeight: "normal" }}
        >
          Welcome to the future of work!
        </div>
        <div className="text-neutral-600 text-xl font-normal mt-8">
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
