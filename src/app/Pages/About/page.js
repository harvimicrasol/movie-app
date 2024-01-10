

import DetailsSection from "@/app/components/DetailsSection";

const About = () => {
  return (
    <>
      <div>
        <DetailsSection title="OUR STORY" imageUrl ={"/Images/about1.svg"}/>
      </div>
    </>
  );
};

export default About;


export function generateMetadata({params}){
  return{
    title:"About us"
  }
}