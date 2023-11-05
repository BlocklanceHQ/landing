import type { Metadata } from "next";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import { Lexend_Deca } from "next/font/google";
import { ExternalLink } from "lucide-react";
import "./globals.css";

const font = Lexend_Deca({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BlockLance",
  description: "Decentralized Freelancing Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="w-full h-full bg-neutral-50">
          <div className="flex justify-between items-center mx-20 p-4">
            <div className="flex items-center uppercase font-bold gap-4">
              <Image src={Logo.src} width={50} height={60} alt="Logo" />{" "}
              <span>BlockLance</span>
            </div>
            <div className="flex gap-4">
              <a href="" className="text-zinc-500 cursor-not-allowed">
                Hire a Talent
              </a>
              <a href="" className="text-zinc-500 cursor-not-allowed">
                Find Gigs
              </a>
            </div>
            <div className="flex gap-8 items-center justify-end">
              <a
                href="https://blocklances-organization.gitbook.io/blocklance-v1/introduction/overview"
                className="text-indigo-500"
              >
                Whitepaper
              </a>
              <a className="px-8 py-4 opacity-40 bg-indigo-500 rounded-lg justify-center items-center gap-2.5 inline-flex text-zinc-50 text-base font-semibold cursor-not-allowed">
                Launch <ExternalLink />
              </a>
            </div>
          </div>
          <div className="w-full">
            <div className="py-6 flex gap-24 bg-violet-100 text-lg font-medium shadow marquee">
              <span>Coming soon. We will be there!!!</span>
              <span>Coming soon. We will be there!!!</span>
              <span>Coming soon. We will be there!!!</span>
              <span>Coming soon. We will be there!!!</span>
              <span>Coming soon. We will be there!!!</span>
              <span>Coming soon. We will be there!!!</span>
              <span>Coming soon. We will be there!!!</span>
              <span>Coming soon. We will be there!!!</span>
              <span>Coming soon. We will be there!!!</span>
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
