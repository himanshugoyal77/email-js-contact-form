import React, { useRef } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import emailjs from "emailjs-com";
import { useSnackbar } from "react-simple-snackbar";
const inputStyle =
  "bg-white border border-gray-300 rounded-md text-sm p-2 focus:outline-none focus:border-indigo-500";

const ContactForm = () => {
  const options = {
    position: "bottom-right",
    style: {
      backgroundColor: "midnightblue",
      border: "2px solid lightgreen",
      color: "lightblue",
      fontFamily: "Menlo, monospace",
      fontSize: "20px",
      textAlign: "center",
    },
    closeStyle: {
      color: "lightcoral",
      fontSize: "16px",
    },
  };
  const [openSnackbar, closeSnackbar] = useSnackbar(options);
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm(
        "service_395xd0o",
        "template_ma32rgg",
        form.current,
        "HYR2duX3AWMlqhEsP"
      )
      .then((res) => openSnackbar("Message Sent Successfully!"));
    e.target.reset();
  };
  return (
    <div className="bg-white px-5 py-8 rounded-md shadow-lg mb-8 sm:mb-0">
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 text-sm text-indigo-800 font-[500] "
      >
        {/* //name */}
        <div className="name flex flex-col sm:flex-row gap-2 sm:gap-3 ">
          <div className="flex flex-col">
            <label className="mb-1" htmlFor="fname">
              FIRST NAME
            </label>
            <input type="text" id="fname" className={inputStyle} name="fname" />
          </div>
          <div className="flex flex-col">
            <label className="mb-1" htmlFor="lname">
              LAST NAME
            </label>
            <input type="text" id="lname" className={inputStyle} name="lname" />
          </div>
        </div>
        {/* email */}
        <div className="flex flex-col">
          <label className="mb-1" htmlFor="email">
            YOUR EMAIL
          </label>
          <input type="email" id="email" className={inputStyle} name="email" />
        </div>
        {/* email */}
        <div className="flex flex-col">
          <label className="mb-1" htmlFor="subject">
            SUBJECT
          </label>
          <input
            type="text"
            id="subject"
            className={inputStyle}
            name="subject"
          />
        </div>
        {/* message */}
        <div className="flex flex-col">
          <label className="mb-1" htmlFor="message">
            MESSAGE
          </label>
          <textarea
            name="message"
            id=""
            rows="4"
            className={inputStyle}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-primaryColor px-5 py-2 text-sm shadow-md  text-white font-bold my-2 rounded-md hover:bg-indigo-800 hover:shadow-slate-500 ease-in duration-300"
        >
          <span className="text-sm">SEND MESSAGE</span>
        </button>
      </form>

      {/* //social media */}
      <hr className="my-4" />
      <div className="flex flex-col justify-center items-start gap-4 py-2">
        <span className="text-sm  text-gray-600 font-thin flex items-center gap-3">
          <CiLocationOn /> D6AD 21, AIDS <br /> VESIT, Chembur, Mumbai,
          Maharashtra 400074
        </span>
        <span className="text-sm  text-gray-600 font-thin flex items-center gap-3">
          <FiPhoneCall /> <a href="tel:8879623395"> +91 8879623395</a>
        </span>
        <span className="text-sm  text-gray-600 font-thin flex items-center gap-3">
          <AiOutlineMail />{" "}
          <a href="mailto:2021.himanshu.goyal@ves.ac.in">
            {" "}
            2021.himanshu.goyal@ves.ac.in
          </a>
        </span>
      </div>
    </div>
  );
};

export default ContactForm;
