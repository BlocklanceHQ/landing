import type { Metadata } from "next";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import { Lexend_Deca } from "next/font/google";
import { ExternalLink } from "lucide-react";
import { cn } from "@/utils";
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
    <html lang="en" className="scrollbar-none">
      <body className={cn(font.className, "scrollbar-none")}>
        <div className="flex justify-between items-center md:mx-16 p-4">
          <a href="/" className="flex items-center uppercase font-bold gap-4">
            <Image src={Logo.src} width={50} height={60} alt="Logo" />{" "}
            <span className="hidden md:inline">BlockLance</span>
          </a>
          <div className="hidden md:flex gap-4">
            <a
              href=""
              className="text-zinc-500 cursor-not-allowed"
              title="Subscribe to know once we launch"
            >
              Hire a Talent
            </a>
            <a
              href=""
              className="text-zinc-500 cursor-not-allowed"
              title="Subscribe to know once we launch"
            >
              Find Gigs
            </a>
          </div>
          <div className="flex gap-8 items-center justify-end">
            <a
              href="https://blocklances-organization.gitbook.io/blocklance-v1/introduction/overview"
              className="hidden md:inline text-indigo-700 hover:text-indigo-800"
              target="_blank"
            >
              Whitepaper
            </a>
            <a
              className="px-8 py-4 opacity-40 bg-indigo-500 rounded-lg justify-center items-center gap-2.5 inline-flex text-zinc-50 text-base font-semibold cursor-not-allowed"
              title="Subscribe to know once we launch"
              target="_blank"
            >
              Launch <ExternalLink />
            </a>
          </div>
        </div>
        <div className="w-full">
          <div className="py-6 flex bg-[#EBE8FC] text-lg font-medium shadow marquee">
            <div className="marquee__content">
              <span>Coming soon.</span>
              <span>Coming soon.</span>
              <span>Coming soon.</span>
              <span>Coming soon.</span>
              <span>Coming soon.</span>
              <span>Coming soon.</span>
              <span>Coming soon.</span>
              <span>Coming soon.</span>
              <span>Coming soon.</span>
            </div>
            <div aria-hidden="true" className="marquee__content">
              <span>Coming soon.</span>
              <span>Coming soon.</span>
              <span>Coming soon.</span>
              <span>Coming soon.</span>
              <span>Coming soon.</span>
              <span>Coming soon.</span>
              <span>Coming soon.</span>
              <span>Coming soon.</span>
              <span>Coming soon.</span>
            </div>
          </div>
        </div>
        {children}
        <div className="w-full text-center p-16">
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="text-neutral-400">Follow us for more updates:</div>
            <div className="flex gap-4">
              <a
                className="w-8 h-8 bg-zinc-100 rounded-full flex-col justify-center items-center inline-flex"
                href="https://twitter.com/BlocklanceGigs"
                target="_blank"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="32" height="32" rx="16" fill="#F0F0F0" />
                  <path
                    d="M13.0718 24.44C20.1678 24.44 24.0478 18.56 24.0478 13.464C24.0478 13.296 24.0478 13.128 24.0398 12.968C24.7918 12.424 25.4478 11.744 25.9678 10.968C25.2798 11.272 24.5358 11.48 23.7518 11.576C24.5518 11.096 25.1598 10.344 25.4478 9.44C24.7038 9.88 23.8798 10.2 22.9998 10.376C22.2958 9.624 21.2958 9.16 20.1838 9.16C18.0558 9.16 16.3278 10.888 16.3278 13.016C16.3278 13.32 16.3598 13.616 16.4318 13.896C13.2238 13.736 10.3838 12.2 8.47978 9.864C8.15178 10.432 7.95978 11.096 7.95978 11.8C7.95978 13.136 8.63978 14.32 9.67978 15.008C9.04778 14.992 8.45578 14.816 7.93578 14.528C7.93578 14.544 7.93578 14.56 7.93578 14.576C7.93578 16.448 9.26378 18 11.0318 18.36C10.7118 18.448 10.3678 18.496 10.0158 18.496C9.76778 18.496 9.52778 18.472 9.28778 18.424C9.77578 19.96 11.1998 21.072 12.8878 21.104C11.5678 22.136 9.90378 22.752 8.09578 22.752C7.78378 22.752 7.47978 22.736 7.17578 22.696C8.86378 23.8 10.8958 24.44 13.0718 24.44Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                className="w-8 h-8 bg-zinc-100 rounded-full flex-col justify-center items-center inline-flex"
                href="https://medium.com/@blocklance"
                target="_blank"
              >
                <svg
                  width="24"
                  height="14"
                  viewBox="0 0 24 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5096 7.30357C13.5096 11.0057 10.5342 14.0069 6.86403 14.0069C3.19389 14.0069 0.218262 11.005 0.218262 7.30357C0.218262 3.60209 3.19366 0.600006 6.86403 0.600006C10.5344 0.600006 13.5096 3.60141 13.5096 7.30357Z"
                    fill="currentColor"
                  />
                  <path
                    d="M20.8001 7.30356C20.8001 10.7883 19.3124 13.6144 17.4772 13.6144C15.642 13.6144 14.1543 10.7883 14.1543 7.30356C14.1543 3.81877 15.6418 0.992676 17.477 0.992676C19.3121 0.992676 20.7998 3.81787 20.7998 7.30356"
                    fill="currentColor"
                  />
                  <path
                    d="M23.7819 7.30358C23.7819 10.4251 23.2588 12.9571 22.6133 12.9571C21.9677 12.9571 21.4448 10.4258 21.4448 7.30358C21.4448 4.18139 21.968 1.65002 22.6133 1.65002C23.2586 1.65002 23.7819 4.18116 23.7819 7.30358Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                className="w-8 h-8 bg-zinc-100 rounded-full flex-col justify-center items-center inline-flex cursor-not-allowed"
                target="_blank"
                title="Coming Soon"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="32" height="32" rx="16" fill="#F0F0F0" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.24285 15.8311C11.9072 13.7989 15.0175 12.4592 16.5737 11.8119C21.0171 9.96378 21.9404 9.64273 22.5422 9.63213C22.6745 9.6298 22.9705 9.6626 23.1622 9.81815C23.324 9.9495 23.3686 10.1269 23.3899 10.2515C23.4112 10.376 23.4377 10.6597 23.4166 10.8813C23.1758 13.4113 22.1339 19.5509 21.6039 22.3845C21.3796 23.5835 20.938 23.9855 20.5104 24.0249C19.5813 24.1104 18.8757 23.4108 17.9758 22.8209C16.5676 21.8978 15.7721 21.3232 14.4051 20.4224C12.8254 19.3814 13.8495 18.8093 14.7498 17.8742C14.9854 17.6295 19.0792 13.9058 19.1585 13.568C19.1684 13.5258 19.1776 13.3683 19.084 13.2851C18.9905 13.202 18.8524 13.2304 18.7527 13.253C18.6115 13.2851 16.3619 14.772 12.0038 17.7138C11.3653 18.1523 10.7869 18.3659 10.2687 18.3547C9.69743 18.3424 8.59851 18.0317 7.78158 17.7662C6.77957 17.4405 5.9832 17.2682 6.05255 16.7151C6.08867 16.427 6.48544 16.1323 7.24285 15.8311Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
