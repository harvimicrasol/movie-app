import heroStyles from "@/app/styles/DetailsSection.module.css"
import styles from "@/app/styles/common.module.css"
import Image from "next/image";
import Link from "next/link";
import { Mulish } from 'next/font/google';

const mulish = Mulish({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap'
})


const DetailsSection = ({title, imageUrl}) => {
    return (
        <main className={heroStyles.main_section}>
            <div className="container mx-auto px-4">
                <div className="md:flex md:pt-0 pt-[170px]  justify-between items-center md:h-[800px] h-[1000px]">
                    <div className="flex-col justify-center items-start md:mb-0 mb-14">
                        <h1 className="uppercase md:text-7xl text-4xl">{title}</h1>
                        <p className="my-6"> From award-winning dramas to blockbuster action movies, we&apos;ve got you covered. Browse
                            our
                            selection of the latest and greatest movies, and find your new favorite today.
                        </p>
                        <Link href="/Pages/Movies" className="capitalize text-sm font-medium bg-black text-white px-4 py-3 rounded-full hover:bg-transparent hover:border border-black border-solid transition-all duration-150 hover:text-black">
                            <button className={mulish.className}>
                                Explore Movies
                            </button>
                        </Link>
                    </div>  

                    <div className="justify-end items-center">
                        <Image src={imageUrl} alt="watching netflix" width={500} height={500}/>
                    </div>
                </div>
            </div>
            <div className={heroStyles['custom-shape-divider-bottom-1681647578']}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className={heroStyles["shape-fill"]}></path>
                </svg>
            </div>
        </main>
    );
};

export default DetailsSection;