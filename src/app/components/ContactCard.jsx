import Link from "next/link";
import { MdEmail, MdForum, MdVoiceChat } from "react-icons/md";

const ContactCard = () => {
  return (
    <>
      <div className="md:grid grid-cols-3 gap-6 my-10">
        <div className="px-3 py-6 text-center  bg-white shadow-xl md:mb-0 mb-5">
          <div className="flex justify-center mb-2 text-[20px] text-red-500">
            <MdEmail />
          </div>
          <h2 className="text-lg font-bold">Email</h2>
          <p className="font-semibold">Monday to Friday Expected </p>
          <p className="mb-4 font-semibold">response time: 72 hours </p>
          <Link href="/"  className="capitalize text-sm font-medium bg-black text-white px-4 py-3 rounded-full hover:bg-white hover:border border-black border-solid transition-all duration-150 hover:text-black">
            {" "}
            Send Email <span>-&gt;</span>
          </Link>
        </div>

        <div className="px-3 py-6 text-center  bg-white shadow-xl md:mb-0 mb-5">
          <div className="flex justify-center mb-2 text-[20px] text-red-500">
            <MdVoiceChat />
          </div>
          <h2 className="text-lg font-bold">Live Chat</h2>
          <p className="font-semibold">Weekdays: 9 AM — 6 PM ET</p>
          <p className="mb-4 font-semibold">Weekends: 9 AM — 5 PM ET </p>
          <Link href="/"  className="capitalize text-sm font-medium bg-black text-white px-4 py-3 rounded-full hover:bg-white hover:border border-black border-solid transition-all duration-150 hover:text-black">
            {" "}
            Chat Now <span>-&gt;</span>
          </Link>
        </div>

        <div className="px-3 py-6 text-center  bg-white shadow-xl">
          <div className="flex justify-center mb-2 text-[20px] text-red-500">
            <MdForum />
          </div>
          <h2 className="text-lg font-bold" >Community Forum</h2>
          <p className="font-semibold">Monday to Friday Expected </p>
          <p className="mb-4 font-semibold">response time: 72 hours </p>
          <Link href="/"  className="capitalize text-sm font-medium bg-black text-white px-4 py-3 rounded-full hover:bg-white hover:border border-black border-solid transition-all duration-150 hover:text-black">
            {" "}
            Ask The Community <span>-&gt;</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
