import React, { useState } from "react";
import Image from "next/image";
import Modal from "./Modal.jsx";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Profile from "../public/img-profile.jpg";

const About = () => {
  const [show, setShow] = useState(false);
  return (
    <div id="about" className="w-full h-full flex items-center py-6 lg:my-16">
      <div className="max-w-[1440px] m-auto lg:px-32">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-gray-500">
            About
          </p>
          <h2 className="pt-4 pb-12">Who I Am</h2>
          <div className="lg:flex lg:px-8">
            <div className="lg:w-1/2 lg:flex lg:flex-col lg:items-center">
              <Image
                src={Profile}
                className="rounded-sm mb-8"
                alt="Profile Image"
                width={400}
                height={600}
              />
            </div>
            <div className="lg:w-1/2">
              <p className="py-18 sm:px-0 md:px-16 mb-8 lg:text-xl sm:text-lg text-center">
                I started my web development journey through{" "}
                <span>
                  <a
                    className="text-[#339AF0]"
                    href="https://ciccc.ca/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Cornerstone International Community College of Canada
                  </a>
                </span>
                , mastering HTML/CSS, JavaScript, React, and Node in 2022. From
                my internship, I have worked on and learned React, TypeScript,
                and WordPress to specialize in creating user and mobile friendly
                full-stack applications with Firebase and MongoDB. <br />
                <br />I can adapt to new technologies swiftly, believing in
                selecting the right tools for each project. Furthermore, I have
                worked as a Sales and Marketing Representative. So, I can bring
                knowledge of SEO strategies and ideas as well.
                <br />
                <br />
                In my free time, I enjoy playing tennis and running. I also went
                to the Laver Cup 2023 in Vancouver and it was my first time
                watching a world level tennis game like a grand slam. My
                favorite player is Denis Shapovalov.
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
                    className="btn main_about_third_button w-30 p-4 text-gray-100 mt-8 mb-8 text-lg"
                  >
                    Show my photos
                  </button>
                  <Modal show={show} onClose={() => setShow(false)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
