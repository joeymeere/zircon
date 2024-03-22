import { IconArtboard, IconChartBubble, IconCode, IconCube, IconHammer, IconHeart, IconLogin, IconMenu2, IconPaperclip, IconProgressBolt, IconUsersGroup } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import useScroll from "@/lib/hooks/useScroll";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/nav-menu";

export function Header() {
    const router = useRouter();
    const { scrolled } = useScroll(1);
    const [open, setOpen] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState<string | null>(router.pathname);

    return (
        <>
            <nav className={`fixed top-0 ${isOpen ? "z-[100]" : "z-[100]"} w-full flex justify-center border-b border-transparent ${scrolled
                ? `bg-[#010001]/30 backdrop-blur-xl border-[#802F00]/50`
                : "bg-black/0"
                } z-30 transition-all`}
            >
                <div className="w-full max-w-[1920px] grid grid-cols-3 items-center content-center px-8 py-6 h-16 max-[480px]:px-4 md:w-full">
                    <Link href="/" className="ml-2 block">
                        <Image
                            priority
                            src={"/zircon-logo-new.svg"}
                            alt="zircon"
                            width={125}
                            height={50}
                        />
                    </Link>
                    <div className="md:flex justify-center space-x-4 hidden text-gray-900 dark:text-white font-plex text-sm">
                        <Menu setActive={setActive}>
                            <MenuItem setActive={setActive} active={active} item="Challenges">
                                <div className="flex flex-col space-y-4 text-sm">
                                    <HoveredLink href="/easy">
                                        <IconChartBubble size={16} />
                                        Easy
                                    </HoveredLink>
                                    <HoveredLink href="/medium">
                                        <IconProgressBolt size={16} />
                                        Medium
                                    </HoveredLink>
                                    <HoveredLink href="/hard">
                                        <IconCode size={16} />
                                        Hard
                                    </HoveredLink>
                                </div>
                            </MenuItem>
                            <MenuItem setActive={setActive} active={active} item="Learn">
                                <div className="text-sm grid grid-cols-2 gap-10 p-4">
                                    <ProductItem
                                        title="Documentation"
                                        href="https://stockpile.so"
                                        src="https://www.soldev.app/_next/image?url=https%3A%2F%2Fsolana.com%2Fsocial%2Fsolana.jpg&w=640&q=75"
                                        description="Get foundational knowledge on all things Solana"
                                    />
                                    <ProductItem
                                        title="SolDev"
                                        href="https://windmill.arrange.dev"
                                        src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                                        description="Community content for all aspects of building on Solana."
                                    />
                                    <ProductItem
                                        title="Cookbook"
                                        href="https://forwarder.arrange.dev"
                                        src="https://www.soldev.app/_next/image?url=https%3A%2F%2Fsolanacookbook.com%2Fcookbook-sharing-card.png&w=640&q=75"
                                        description="Compendium of useful information for a Solana dev."
                                    />
                                    <ProductItem
                                        title="Bootcamp"
                                        href="https://forwarder.arrange.dev"
                                        src="https://www.soldev.app/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2F0P8JeL3TURU%2Fmaxresdefault.jpg&w=640&q=75"
                                        description="A zero to one video course for building on Solana."
                                    />
                                </div>
                            </MenuItem>
                            <MenuItem setActive={setActive} active={active} item="Leaderboard" />
                        </Menu>
                    </div>
                    <div className="flex gap-6 justify-end items-center">
                        <button
                            className="px-4 md:flex space-x-2 items-center transition ease-in-out delay-110 hover:-translate-y-1 hover:scale-101 rounded-md bg-gradient-to-bl from-[#E40DB5] to-[#E851EB] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white text-sm font-plex text-white w-fit h-10 justify-center hidden"
                            onClick={() => setOpen(true)}
                        >
                            <IconLogin stroke={1} size={20} />
                            <span>Sign In</span>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;