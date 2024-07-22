"use client";

import { IconCloudFunc } from "./icon-cloud";

export default function Skills() {
    return (
        <section className="flex h-full w-full flex-col items-center justify-between py-10">
                    <h2 className="text-5xl font-bold ">Tech Stack</h2>
            <div className="flex justify-around items-center">
                <div className="w-1/2">
                    <p>A Front-End Developer with a passion for creating beautiful and functional web applications. Welcome to my Portfolio!</p>
                </div>
                <IconCloudFunc />
            </div>
        </section>
    );
}
