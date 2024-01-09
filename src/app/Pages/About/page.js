"use client";

import { usePathname } from "next/navigation";

const About = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="container mx-auto px-4 mt-5">
        <h2>About</h2>
      </div>
    </>
  );
};

export default About;
