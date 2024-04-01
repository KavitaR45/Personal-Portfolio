import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ModeToggle } from "@/components/ui/model-toggle";

const Navigation = ({ user }) => {
  return (
    <div className=" top-0 right-0  left-0 p-8 flex items-center justify-between z-30">
      <aside className="flex items-center gap-2">
        {/* <Image
          src={'./assets/plura-logo.svg'}
          width={40}
          height={40}
          alt="plur logo"
        /> */}
        <span className="text-xl font-bold"> KR.</span>
      </aside>
      {/* <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex items-center justify-center gap-8">
          <Link href={'#'}>Pricing</Link>
          <Link href={'#'}>About</Link>
          <Link href={'#'}>Documentation</Link>
          <Link href={'#'}>Features</Link>
        </ul>
      </nav> */}
      <aside className="flex gap-2 items-center">
        <ModeToggle />
      </aside>
    </div>
  );
};

export default Navigation;
