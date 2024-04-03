"use client";
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Button } from './ui/button';

export default function Hero() {

    return (
        <>
            <div className="flex flex-col lg:flex-row justify-start items-center pt-10 pb-10 md:pt-16 md:pb-16 gap-4 px-7 md:px-10">
                <div className="flex flex-col w-full lg:w-1/2 lg:pr-20">
                    <h1 className='text-3xl  md:text-5xl font-bold mt-2 mb-2'>Empowering Brands through Engaging Web Experiences</h1>
                    <p className='leading-7 font-normal mt-2 mb-2'>Step into a world where innovation and creativity converge to redefine digital landscapes. Explore the dynamic portfolio of a Front-End Developer committed to crafting captivating web experiences. </p>
                    <Button className='w-fit mt-4 mb-2'>Download Resume</Button>
                </div>
                <div className="flex justify-end relative lg:w-1/2">
                    <Image className="object-contain" height={900} width={900} src={"/temp-banner.webp"} />
                </div>
            </div>
        </>
    );
}
