"use client";

import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="h-16 bg-white w-full">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="py-2">
            <Image src="/Images/logo.png" width={70} alt="logo" height={50} />
          </Link>

          <nav className="text-black space-x-9 font-semibold">
            <Link href="/">Home</Link>
            <Link href="/About">About</Link>
            <Link href="/">Movie</Link>
            <Link href="/">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
