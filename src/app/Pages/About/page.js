"use client";

import DetailsSection from "@/app/components/DetailsSection";
import { usePathname } from "next/navigation";

const About = () => {
  const pathname = usePathname();
  return (
    <>
      <div>
        <DetailsSection title="OUR STORY" imageUrl ={"/Images/about1.svg"}/>
      </div>
    </>
  );
};

export default About;
