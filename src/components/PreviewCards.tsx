"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

export function AnimatedPinDemo() {
  return (
    <div className="col-span-1 h-full w-full flex items-center">
      <PinContainer
        title="zircon.wtf/easy"
        href="https://twitter.com/mannupaaji"
        className="w-full"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-neutral-100/50 sm:basis-1/2 w-[18rem] h-[18rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold font-plex text-base text-neutral-100">
            Beginner Challenges
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-neutral-500 font-plex">
              Quick challenges to get you started with Solana.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
  );
}
