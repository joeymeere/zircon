import { IconEye } from "@tabler/icons-react";
import Link from "next/link";

export default function LeaderboardHead() {
  return (
    <div className="relative isolate">
      <svg
        className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-zinc-400/50 dark:stroke-zinc-700/50 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-zinc-300 dark:fill-[#2F3348]/50">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
        />
      </svg>
      <div
        className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
        aria-hidden="true"
      >
        <div
          className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#0D2EE4] to-[#469FFE] opacity-10"
          style={{
            clipPath:
              "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
          }}
        />
      </div>
      <div
        className={`absolute right-1/2 left-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48`}
        aria-hidden="true"
      >
        <div
          className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#0D2EE4] to-[#469FFE] opacity-10"
          style={{
            clipPath:
              "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
          }}
        />
      </div>
      <div className="overflow-hidden w-full">
        <div className="mx-auto w-full max-w-7xl px-6 pb-32 pt-60 sm:pt-72 lg:px-8 lg:pt-72">
          <div className="mx-auto w-full max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative mx-auto w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h1 className={`text-6xl font-bold font-poppins text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-black via-black to-zinc-600 dark:from-white dark:via-white dark:to-zinc-400 sm:text-6xl`}>
                Global Leaderboard
              </h1>
              <p className={`mt-4 text-lg leading-8 text-zinc-500 text-center sm:max-w-md lg:max-w-none`}>
                View the top users on Stockpile by total points.
              </p>
              <div
                className={`mt-10 flex items-center justify-center gap-x-6`}
              >
                <Link href="/explore" passHref>
                  <button className="inline-flex items-center gap-2 transition ease-in-out delay-110 hover:-translate-y-1 hover:scale-101 rounded-md bg-gradient-to-br from-[#E40DB5] to-[#E851EB] px-3.5 py-2.5 font-poppins text-sm text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    <IconEye stroke={1} size={16} />
                    Challenges
                  </button>
                </Link>
                <Link href="/about#points" passHref>
                  <button className="text-sm font-poppins leading-6 text-zinc-900 dark:text-zinc-300">
                    How To Get Points <span aria-hidden="true">→</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
}