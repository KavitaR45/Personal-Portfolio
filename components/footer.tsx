"use client";
import { Github,Linkedin  } from 'lucide-react';


export default function Footer() {

    return (
        <>
            <div className=" top-0 right-0  left-0 p-7 flex items-center justify-between z-30">
                <aside className="flex items-center gap-2">
                    <span className="text-l font-bold"> © 2024. All rights reserved.</span>
                </aside>
                <aside className="flex gap-2 items-center">
                    {/* LinkedIn icon */}
                    <a href="https://www.linkedin.com/in/kavita-rawat-6492a92a3/" target="_blank">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    {/* GitHub icon */}
                    <a href="https://github.com/KavitaR45" target="_blank">
                        <Github className="w-6 h-6" />
                    </a>
                </aside>
            </div>
        </>
    );
}
