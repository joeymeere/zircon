"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";

export function Information() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-[#E40DB5] min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="font-plex text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Making Solana education more fun
          </h2>
          <p className="mt-4 font-plex text-left  text-base/6 text-neutral-200">
            Courses that teach you the basics of Solana,
            while providing a fun experience.
          </p>
        </div>
        <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-[#E40DB5]">
        <h2 className="max-w-80 font-plex text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Complete, Compete, Conquer
        </h2>
        <p className="mt-4 font-plex max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Finish Solana programming challenges, and compete with other users.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[#E40DB5] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg font-plex text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Share quick code snippets in an editor with built-in Solana libraries
          </h2>
          <p className="mt-4 max-w-[26rem] text-left font-plex text-base/6 text-neutral-200">
            Create code snippets in the Sandbox, save them for later, or share with a simple link.
          </p>
        </div>
        <Image
          src="/sandbox.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
