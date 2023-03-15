import React, { useRef, useState } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [phone, setPhone] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangeSubject = (event) => {
    setSubject(event.target.value);
  };
  const handleChangeText = (event) => {
    setText(event.target.value);
  };
  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (name === "") {
      alert("Please type name");
      return;
    }
    if (email === "") {
      alert("Please type email address");
      return;
    }
    if (subject === "") {
      alert("Please type subject");
      return;
    }
    if (text === "") {
      alert("Please type text");
      return;
    }
    if (phone === "") {
      alert("Please type phone number");
      return;
    }
    emailjs
      .sendForm(
        "service_k9qfmdv",
        "template_2kegrbn",
        form.current,
        "2ZrJYgCWQbrUz3Hz4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setSubject("");
    setText("");
    setPhone("");
    alert("Thank you for sending us e-mail!");
  };
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  src={"/assets/image_profile_square.JPG"}
                  alt="/"
                  width={800}
                  height={800}
                />
              </div>
              <div>
                <h2 className="py-2">Tomoyuki Fujii</h2>
                <p className="text-xl">Full-stack Developer</p>
                <p className="py-4 text-xl">
                  I am available for part-time or full-time positions. Connect
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8 text-xl">Connect with me</p>
                <div className="flex items-center justify-around py-4">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/tomoyuki-fujii-376616251/"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Tomoyuki3001"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/yk_english_jp"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiOutlineTwitter />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      name="user_name"
                      value={name}
                      onChange={handleChangeName}
                      placeholder="Name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Phone</label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      value={phone}
                      onChange={handleChangePhone}
                      name="user_phone"
                      placeholder="e.g.123-456-7890"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">E-mail</label>
                  <input
                    type="email"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    name="user_email"
                    value={email}
                    onChange={handleChangeEmail}
                    placeholder="Email address"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    name="user_subject"
                    value={subject}
                    onChange={handleChangeSubject}
                    placeholder="Some text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows={10}
                    value={text}
                    onChange={handleChangeText}
                    name="message"
                    placeholder="Some text"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4 text-xl">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
