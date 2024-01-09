import Link from "next/link";
import { MdEmail, MdForum, MdVoiceChat } from "react-icons/md";

const ContactCard = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-6 my-5">
        <div className="px-3 py-4 text-center  bg-white">
          <div className="mx-[220px] mb-2">
            <MdEmail />
          </div>
          <h2>Email</h2>
          <p>Monday to Friday Expected </p>
          <p>response time: 72 hours </p>
          <Link href="/">
            {" "}
            Send Email <span>-&gt;</span>
          </Link>
        </div>

        <div className="px-3 py-4 text-center  bg-white">
          <div className="mx-[220px] mb-2">
            <MdVoiceChat />
          </div>
          <h2>Live Chat</h2>
          <p>Weekdays: 9 AM — 6 PM ET</p>
          <p>Weekends: 9 AM — 5 PM ET </p>
          <Link href="/">
            {" "}
            Chat Now <span>-&gt;</span>
          </Link>
        </div>

        <div className="px-3 py-4 text-center  bg-white">
          <div className="mx-[220px] mb-2">
            <MdForum />
          </div>
          <h2>Community Forum</h2>
          <p>Monday to Friday Expected </p>
          <p>response time: 72 hours </p>
          <Link href="/" >
            {" "}
            Ask The Community <span>-&gt;</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
