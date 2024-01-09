'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const { push } =useRouter();
  return (
    <div className=" h-screen flex justify-center items-center">
      <div className="text-center">
        <h2 className="font-semibold  text-5xl">404 Page Not Found</h2>
        <p className="font-semibold text-5xl mt-7">Could not find requested resource</p>
        <button onClick={() => push('/')} className="md:w-[212px] md:h-[48px] w-40 h-10 bg-orange-500 rounded-lg md:text-base text-sm font-semibold text-white md:mt-[49px] mt-7 hover:shadow-[0px_4px_9px_0px_#FF4E0033] hover:shadow-orange-500/50 transition-all ease-in-out duration-500 hover:-translate-y-0.5">
          Go Home
        </button>
      </div>
    </div>
  );
}
