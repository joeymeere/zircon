import { FC } from "react";
import { IconMedal2 } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

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
    <div className="border border-[#E851EB]/25 divide-y-2 divide-zinc-800 bg-black/25 max-[768px]:dark:bg-black/10 backdrop-blur-md px-6 rounded-lg">
      <div className="flex-col divide-y divide-zinc-300/50 dark:divide-zinc-800/50">
        {users.map((user: any, i: number) => (
          <TopXP key={i} placing={i} user={user} />
        ))}
      </div>
    </div>
  );
};

export default TopXPSection;