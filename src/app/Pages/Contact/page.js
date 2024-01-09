import ContactCard from "@/app/components/ContactCard";

const Contact = () => {
  return (
    <>
      <div className="container mx-auto px-4 mt-5">
        <h1>Contact Us</h1>
        <ContactCard/>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2547158278226!2d73.91419611127971!3d18.562551782466336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20-%20Viman%20Nagar!5e0!3m2!1sen!2sin!4v1681696533582!5m2!1sen!2sin"
        width={100}
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        className="w-full"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Contact;
