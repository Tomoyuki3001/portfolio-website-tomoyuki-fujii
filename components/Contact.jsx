import React, { useRef, useState } from "react";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

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
    alert("Email has bees sent!");
  };
  return (
    <div id="contact" className="w-full md:mb-4">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#527f9f]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="flex justify-around w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83327.37148313464!2d-123.20630488144621!3d49.2578181906132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f143a94fb3%3A0xbb9196ea9b81f38b!2sVancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1710879539088!5m2!1sen!2sca"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="google-map"
          ></iframe>
          <div className="col-span-3 w-full lg:w-1/2 rounded-xl lg:pt-4">
            <div className="p-2">
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 font-bold">
                      Name
                    </label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-blue-300"
                      name="user_name"
                      value={name}
                      onChange={handleChangeName}
                      placeholder="Name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 font-bold">
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-2 rounded-lg p-3 flex border-blue-300"
                      name="user_email"
                      value={email}
                      onChange={handleChangeEmail}
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 font-bold">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-blue-300"
                    name="user_subject"
                    value={subject}
                    onChange={handleChangeSubject}
                    placeholder="Subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 font-bold">
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-blue-300"
                    rows={10}
                    value={text}
                    onChange={handleChangeText}
                    name="message"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button className="w-3/4 p-4 text-gray-100 mt-12 text-xl shadow-xl shadow-gray-400 btn">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#527f9f]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
