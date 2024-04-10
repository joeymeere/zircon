import Header from "@/components/layout/Header";
import SEO from "@/components/SEO";
import IntroOne from "@/components/courses/intro/module-one/StepOne";

export default function IntroCourse() {
    return (
        <>
            <SEO
                title={`Intro Course | Zircon`}
                description="Get started building on Solana with a guided course designed to teach you the basics in Typescript."
                image="https://firebasestorage.googleapis.com/v0/b/zircon-ac0b5.appspot.com/o/og.png?alt=media&token=3778e2a6-5194-466e-a5f3-39bae8a3cba3"
            />
            <Header />
            <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.3] bg-dot-black/[0.3] relative">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <IntroOne />
            </div>
        </>
    )
}