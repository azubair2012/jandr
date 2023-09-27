"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yltqt9i",
        "template_l9v58yi",
        form.current,
        "u4wmW8gGyno08287R"
      )
      .then(
        (result) => {
          document.getElementById("success").innerHTML =
            "We Will Be In Touch Shortly, Thank You.";
          console.log(result.text);
        },
        (error) => {
          document.getElementById("success").innerHTML =
            "Sorry your message was not sent! Please try again.";
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  return (
    <div className="w-[350px] h-fit bg-primary rounded-2xl flex items-center flex-col lg:mx-0 mx-auto px-4">
      <p className="text-4xl font-extrabold pt-4">GET A QUOTE</p>
      <p className="text-xl mb-2">FREE AND FASTER</p>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col">
        <label className="font-bold" htmlFor="name">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="user_name"
          className="w-full px-3 py-2 mb-2 border rounded-md focus:outline-none focus:ring focus:border-black"
          placeholder="Full Name"
          required
        />
        <label className="font-bold" htmlFor="email">
          Email ID *
        </label>
        <input
          type="text"
          id="email"
          name="user_email"
          className="w-full px-3 py-2 mb-2 border rounded-md focus:outline-none focus:ring focus:border-black"
          placeholder="Email"
          required
        />
        <label className="font-bold" htmlFor="phone">
          Contact Number *
        </label>
        <input
          type="text"
          id="phone"
          name="user_phone"
          className="w-full px-3 py-2 mb-2 border rounded-md focus:outline-none focus:ring focus:border-black"
          placeholder="Phone Number"
          required
        />
        {/* car detail */}
        <div className="flex gap-2">
          <div>
            <label className="font-bold" htmlFor="phone">
              Make *
            </label>
            <input
              type="text"
              id="phone"
              name="car_make"
              className="w-full px-3 py-2 mb-2 border rounded-md focus:outline-none focus:ring focus:border-black"
              placeholder="Car make"
              required
            />
          </div>
          <div>
            <label className="font-bold" htmlFor="phone">
              Model *
            </label>
            <input
              type="text"
              id="phone"
              name="car_model"
              className="w-full px-3 py-2 mb-2 border rounded-md focus:outline-none focus:ring focus:border-black"
              placeholder="Car model"
              required
            />
          </div>
        </div>

        <label className="font-bold" htmlFor="text">
          Your Message *
        </label>
        <textarea
          name="message"
          id="text"
          className="resize-none h-[100px] px-2 py-2 rounded-md"
          placeholder="Please type in your message here."
          required
        ></textarea>
        <button
          type="submit"
          value="Send"
          className="w-fit bg-black text-white font-bold text-xl p-2 rounded-lg my-2 mx-auto hover:scale-110"
        >
          GET QUOTE
        </button>
      </form>
      <div className="text-[18px] mb-4 px-8 text-center" id="success"></div>
    </div>
  );
};

export default Form;
