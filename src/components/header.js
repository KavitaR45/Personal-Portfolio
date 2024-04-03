import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ModeToggle } from "@/components/ui/model-toggle";

const Navigation = ({ user }) => {
  return (
    <div className=" top-0 right-0  left-0 p-7 flex items-center justify-between z-30">
      <aside className="flex items-center gap-2">
        <span className="text-xl font-bold"> KR.</span>
      </aside>
      <aside className="flex gap-2 items-center">
        <ModeToggle />
      </aside>
    </div>
  );
};

export default Navigation;
