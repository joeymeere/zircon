import { FC } from "react";
import { IconMedal2 } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "../ui/evervault-card";

interface TopXPProps {
  placing: number;
  user: any;
}

interface TopXPSectionProps {
  users: any[];
}

const TopXP: FC<TopXPProps> = ({ placing, user }) => {
  return (
    <>
      <div className="flex items-center py-6 justify-between">
        <div className="flex items-center space-x-4">
          {placing < 3 && (
            <IconMedal2
              size={32}
              stroke={1}
              className={`${
                placing === 0 &&
                `text-yellow-400 text-shadow-lg shadow-yellow-300`
              } ${placing === 1 && `text-gray-400`} ${
                placing === 2 && `text-amber-900`
              }`}
            />
          )}
          {placing >= 3 && (
            <p className="text-zinc-900 dark:text-white text-xl font-plex ml-4 max-[640px]:text-md">
              {placing + 1}.
            </p>
          )}
          <Link
            href={`/profile/${user.id}`}
            className="flex space-x-4 items-center"
            passHref
          >
            <div className="flex space-x-4 items-center">
              <Image
                src={user.data.image}
                alt={`${user.data.username}'s profile picture`}
                width={50}
                height={50}
                className="rounded-full h-14 w-14 shadow-md shadow-zinc-500/10 max-[640px]:h-8 max-[640px]:w-8"
              />
              <div>
                <p className="text-lg font-medium text-zinc-800 font-plex dark:text-zinc-100 text-shadow shadow-white/75 max-[640px]:text-md">
                  {user.data.username}
                </p>
              </div>
            </div>
          </Link>
        </div>
        <p className="text-sm font-light text-zinc-500 font-plex dark:text-zinc-300">
          <span className="text-lg font-medium text-zinc-500 font-plex dark:text-zinc-200 max-[640px]:text-md">
            {user.data.xp.toFixed(0)}{" "}
          </span>
          <span className="text-sm text-zinc-500 font-plex dark:text-zinc-200">
            XP
          </span>
        </p>
      </div>
    </>
  );
};

const TopXPSection: FC<TopXPSectionProps> = ({ users }) => {
  return (
    <div className="border border-white/[0.2] bg-zinc-950 px-6">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-neutral-500" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-neutral-500" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-neutral-500" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-neutral-500" />
      <div className="flex-col divide-y divide-white/[0.2]">
        {users.map((user: any, i: number) => (
          <TopXP key={i} placing={i} user={user} />
        ))}
      </div>
    </div>
  );
};

export default TopXPSection;