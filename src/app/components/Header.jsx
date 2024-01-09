"use client";

import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="h-16 bg-white w-full shadow-lg">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="py-2">
            <Image src="/Images/logo.png" width={70} alt="logo" height={50} />
          </Link>

          <nav className="text-black space-x-9 font-semibold ">
            <Link href="/" className="hover:text-red-400 transition-all duration-300">Home</Link>
            <Link href="/Pages/About" className="hover:text-red-400 transition-all duration-300">About</Link>
            <Link href="/Pages/Movies" className="hover:text-red-400 transition-all duration-300">Movie</Link>
            <Link href="/Pages/Contact" className="hover:text-red-400 transition-all duration-300">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
