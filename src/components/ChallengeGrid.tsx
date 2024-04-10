"use client";
import { cn } from "@/utils/cn";
import React from "react";
import {
  IconBoxAlignRightFilled,
  IconChartBar,
  IconClipboardCopy,
  IconFileBroken,
  IconRecharging,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ChallengeGrid() {
  return (
    <BentoGrid className="mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg] rounded-none", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-zinc-950"></div>
);

const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <Link href={"/leaderboard"} className="h-full" passHref>
      <motion.div
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
      >
        {arr.map((_, i) => (
          <motion.div
            key={"skelenton-two" + i}
            variants={variants}
            style={{
              maxWidth: Math.random() * (100 - 40) + 40 + "%",
            }}
            className={`flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 ${i == 1 || i == 3 ? "bg-[#E40DB5]/50" : "bg-zinc-950"} w-full h-4`}
          ></motion.div>
        ))}
      </motion.div>
    </Link>
  );
};
const SkeletonFour = () => {
  const { push } = useRouter();

  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        onClick={() => push("/challenges/easy")}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-zinc-950 dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="/codesample-getTokenAcc.png"
          alt="getTokenAccount Sample"
          height="100"
          width="200"
          className="rounded-md h-12 w-28"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Find Token Account
        </p>
        <p className="border border-green-500 bg-red-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Easy
        </p>
      </motion.div>
      <motion.div
        onClick={() => push("/challenges/medium")}
        className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-zinc-950 dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="/codesample-rebalanceProportions.png"
          alt="Rebalance Proportions"
          height="100"
          width="200"
          className="rounded-md h-12 w-28"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Rebalance Proportions
        </p>
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Medium
        </p>
      </motion.div>
      <motion.div
        variants={second}
        onClick={() => push("/challenges/hard")}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-zinc-950 dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="/codesample-sendATx.png"
          alt="Send a Transaction"
          height="100"
          width="200"
          className="rounded-md h-12 w-28"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Land a Transaction
        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Hard
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500">
          There are a lot of cool framerworks out there like React, Angular,
          Vue, Svelte that can make your life ....
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">Use PHP.</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "Global Leaderboard",
    description: (
      <span className="text-sm font-plex">
        Compete to get the most XP.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1 font-plex",
    icon: <IconChartBar className="h-4 w-4 text-neutral-500" />
  },
  {
    title: "Complete By Difficulty",
    description: (
      <span className="text-sm font-plex">
        Start with challenges tuned to your skill level.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2 font-plex",
    icon: <IconRecharging className="h-4 w-4 text-neutral-500" />,
  },
];