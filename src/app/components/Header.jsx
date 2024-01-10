"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "@/app/styles/navbar.module.css"
import {CgCloseR, CgMenu} from "react-icons/cg";
import { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className=" bg-white w-full shadow-lg">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="py-2">
            <Image src="/Images/logo.png" width={70} alt="logo" height={50} />
          </Link>

          {/* <nav className="text-black space-x-9 font-semibold ">
            <Link href="/" className="hover:text-red-400 transition-all duration-300">Home</Link>
            <Link href="/Pages/About" className="hover:text-red-400 transition-all duration-300">About</Link>
            <Link href="/Pages/Movies" className="hover:text-red-400 transition-all duration-300">Movie</Link>
            <Link href="/Pages/Contact" className="hover:text-red-400 transition-all duration-300">Contact</Link>
          </nav> */}

          <nav className={styles.navbar}>
            <div className={openMenu ? `${styles.active}` : ""}>
              <ul className={styles.navbarList}>
                <li>
                  <Link
                    className="hover:text-red-400 transition-all duration-300"
                    href="/"
                    onClick={() => setOpenMenu(false)}
                  >
                    Home
                  </Link>
                </li>
                <li >
                  <Link
                    className="hover:text-red-400 transition-all duration-300"
                    href="/Pages/About"
                    onClick={() => setOpenMenu(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-red-400 transition-all duration-300"
                    onClick={() => setOpenMenu(false)}
                    href="/Pages/Movies"
                  >
                    Movie
                  </Link>
                </li>
                <li >
                  <Link
                   className="hover:text-red-400 transition-all duration-300"
                    onClick={() => setOpenMenu(false)}
                    href="/Pages/Contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>

              {/* //nav icon */}
              <div className={styles["mobile-navbar-btn"]}>
                <CgMenu
                  name="menu-outline"
                  className={styles["mobile-nav-icon"]}
                  onClick={() => setOpenMenu(true)}
                />
                <CgCloseR
                  name="close-outline"
                  className={`${styles["mobile-nav-icon"]} ${styles["close-outline"]}`}
                  onClick={() => setOpenMenu(false)}
                />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
