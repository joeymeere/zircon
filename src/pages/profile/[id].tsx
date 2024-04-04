import Header from "@/components/layout/Header";
import ProfileLayout from "@/components/profile/Layout";

export default function Profile() {
    return (
        <>
            <Header />
            <div className="back min-h-screen w-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center">
                <ProfileLayout />
            </div>
        </>
    )
}