import { IconArtboard, IconChartBubble, IconCode, IconCube, IconHammer, IconHeart, IconLogin, IconMenu2, IconPaperclip, IconProgressBolt, IconUsersGroup } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import useScroll from "@/lib/hooks/useScroll";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/nav-menu";
import SolanaAuthButtonFirebase from "../auth/SolanaAuthButtonFirebase";
import { auth } from "@/firebase";
import { motion } from "framer-motion";
import UserMenu from "./UserMenu";

export function Header() {
    const router = useRouter();
    const { scrolled } = useScroll(1);
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
                        <div className="flex gap-2 items-end">
                            <Image
                                priority
                                src={"/zircon-simple-b.svg"}
                                alt="zircon"
                                width={125}
                                height={50}
                            />
                            <div className="font-plex font-medium text-white text-xs py-1 px-1.5 bg-gradient-to-tr from-[#E40DB5] to-[#E851EB] rounded-lg">
                                Beta
                            </div>
                        </div>
                    </Link>
                    <div className="md:flex justify-center space-x-4 hidden text-gray-900 dark:text-white font-plex text-sm">
                        <Menu setActive={setActive}>
                            <Link href={"/challenges"} passHref>
                                <motion.p
                                    transition={{ duration: 0.3 }}
                                    className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white hover:bg-gradient-to-tr from-[#E40DB5]/25 to-[#E851EB]/25 p-3 rounded-md"
                                >
                                    Challenges
                                </motion.p>
                            </Link>
                            <MenuItem setActive={setActive} active={active} item="Learn">
                                <div className="text-sm grid grid-cols-2 gap-10 p-4">
                                    <ProductItem
                                        title="Courses"
                                        href="/learn"
                                        src="/zirconcover.png"
                                        description="Guided courses for going from zero to one on Solana, by Zircon."
                                    />
                                    <ProductItem
                                        title="SolDev"
                                        href="https://soldev.app/"
                                        src="/soldev.jpg"
                                        description="Community content for all aspects of building on Solana."
                                    />
                                    <ProductItem
                                        title="Cookbook"
                                        href="https://solanacookbook.com/#contributing"
                                        src="https://www.soldev.app/_next/image?url=https%3A%2F%2Fsolanacookbook.com%2Fcookbook-sharing-card.png&w=640&q=75"
                                        description="Compendium of useful information for a Solana dev."
                                    />
                                    <ProductItem
                                        title="Bootcamp"
                                        href="https://www.soldev.app/library/playlist/solana-bootcamp-basics"
                                        src="https://www.soldev.app/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2F0P8JeL3TURU%2Fmaxresdefault.jpg&w=640&q=75"
                                        description="Learn how to build on Solana using this video series."
                                    />
                                </div>
                            </MenuItem>
                            <Link href="/sandbox" passHref>
                                <motion.p
                                    transition={{ duration: 0.3 }}
                                    className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white hover:bg-gradient-to-tr from-[#E40DB5]/25 to-[#E851EB]/25 p-3 rounded-md"
                                >
                                    Sandbox
                                </motion.p>
                            </Link>
                        </Menu>
                    </div>
                    <div className="flex gap-6 justify-end items-center">
                        <SolanaAuthButtonFirebase auth={auth} />
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;