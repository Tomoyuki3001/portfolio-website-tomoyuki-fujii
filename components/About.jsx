import React, { useState } from "react";
import Image from "next/image";
import Modal from "./Modal.jsx";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Profile from "../public/img-profile.jpg";

const About = () => {
  const [show, setShow] = useState(false);
  return (
    <div id="about" className="w-full h-full flex items-center py-6">
      <div className="max-w-[1240px] m-auto">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#527f9f]">
            About
          </p>
          <h2 className="pt-4 pb-12">Who I Am</h2>
          <div className="flex items-center justify-center">
            <Image
              src={Profile}
              className="rounded-xl"
              alt="Profile Image"
              width={400}
              height={600}
            />
          </div>
          <p className="py-12 sm:px-0 md:px-8 text-gray-600 md:text-2xl sm:text-lg text-center">
            In 2021, I started my web development journey through college,
            mastering HTML/CSS, JavaScript, React, and Node. I specialize in
            creating user-friendly full-stack applications, with a focus on
            React and Node, along with expertise in web development. I can adapt
            to new technologies swiftly, believing in selecting the right tools
            for each project. Furthermore, in my free time, I enjoy outdoor
            activities such as running, tennis, and hiking.
          </p>
          <div className="flex items-center justify-center">
            <div className="main_about_button_container">
              <div className="flex justify-around py-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/tomoyuki-fujii-376616251/"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedinIn size={25} />
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Tomoyuki3001"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub size={25} />
                  </div>
                </a>
              </div>
              <button
                onClick={() => setShow(true)}
                className="btn main_about_third_button w-30 p-4 text-gray-100 mt-8 mb-8 text-lg shadow-xl shadow-gray-400"
              >
                Show my photos
              </button>
              <Modal show={show} onClose={() => setShow(false)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
