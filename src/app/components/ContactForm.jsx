"use client";

import { useState } from "react";

const ContactForm = () => {
  const [user, setuser] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });

  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setuser((predata) => ({ ...predata, [name]: value }));
  };

  const [status, setstatus] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { Content_Type: "application/json" },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          phone: user.phone,
          message: user.message,
        }),
      });
      if (response.status === 200) {
        setuser({
          username: "",
          email: "",
          phone: "",
          message: "",
        });
        setstatus("success");
      } else {
        setstatus("error");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form
      className="md:px-20 px-10 md:py-16 py-5 mt-5 text-left border-[1px] md:w-96"
      onSubmit={handleSubmit}
    >
      <div className="mb-6">
        <label htmlFor="username" className="block capitalize text-lg">
          Enter Your Name
        </label>
        <input
          type="text"
          name="username"
          id="username"
          className="mt-2 py-3 px-4 rounded-md border-[1px]"
          placeholder="Enter Your Name"
          value={user.username}
          onChange={handlechange}
          required
        ></input>
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block capitalize text-lg">
          Email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="mt-2 py-3 px-4 rounded-md border-[1px]"
          placeholder="Enter Your email"
          value={user.email}
          onChange={handlechange}
          required
        ></input>
      </div>
      <div className="mb-6">
        <label htmlFor="phone" className="block capitalize text-lg">
          Phone Number
        </label>
        <input
          type="number"
          name="phone"
          id="phone"
          className="mt-2 py-3 px-4 rounded-md border-[1px]"
          placeholder="Enter phone-number"
          autoComplete="off"
          value={user.phone}
          onChange={handlechange}
          required
        ></input>
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block capitalize text-lg">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          className="mt-2 py-3 px-4 rounded-md border-[1px]"
          placeholder="Enter your Message"
          rows={5}
          autoComplete="off"
          value={user.message}
          onChange={handlechange}
          required
        ></textarea>
      </div>
      {status === "success" && (
        <p className="text-green-400 font-semibold mb-3">Thank you for your message!</p>
      )}
      {status === "error" && (
        <p className="text-red-500 font-semibold">
          There was an error submitting your message. Please try again.
        </p>
      )}
      <button
        type="submit"
        className="capitalize text-sm font-medium bg-black text-white px-7 py-3 rounded-full  hover:bg-white hover:border border-black border-solid transition-all duration-150 hover:text-black"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
