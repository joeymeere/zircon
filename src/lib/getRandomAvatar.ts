import md5 from "md5";

export const getRandomAvatar = (key: string) => {
    const prompt = key ? key : "Solana Is Awesome";
    return `https://avatar.vercel.sh/${md5(prompt)}`;
};