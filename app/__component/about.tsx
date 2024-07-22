"use client";;
import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
export default function About() {
    return (
        <section className="flex h-full w-full flex-col items-center justify-between py-10 lg:py-40">
            <DotPattern width={22} height={22}
                className={cn(
                    "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                )}
            />
            <div className="relative z-[-1] flex text-center gap-4 flex-col items-center justify-center md:max-w-2xl before:absolute before:left-1/2 before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
                <p>Hi, I am</p>
                <h1 className="text-6xl font-bold">Kavita Rawat</h1>
                <p>A Front-End Developer with a passion for creating beautiful and functional web applications. Welcome to my Portfolio!
                </p>
            </div>
        </section>
    );
}
