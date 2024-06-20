import React, { useState } from "react";
import Image from "next/image";
import Modal from "./Modal.jsx";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Profile from "../public/img-profile.jpg";

const About = () => {
  const [show, setShow] = useState(false);
  return (
    <div id="about" className="w-full flex items-center py-8 lg:py-24">
      <div className="col-span-2">
        <div className="text-center mb-12">
          <p className="uppercase text-xl tracking-widest text-gray-500">
            About
          </p>
          <h2 className="pt-4">Who I Am</h2>
        </div>
        <div className="lg:flex">
          <div className="lg:w-1/2 flex flex-col items-center">
            <Image
              src={Profile}
              className="rounded-sm mb-8"
              alt="Profile Image"
              width={400}
            />
          </div>
          <div className="lg:w-1/2 text-lg">
            <p>
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
              , mastering HTML/CSS, JavaScript, React, and Node in 2022. From my
              internship, I have worked on and learned React, TypeScript, and
              WordPress to specialize in creating user and mobile friendly
              full-stack applications using databases.
            </p>
            <br />
            <p>
              I am familiar with{" "}
              <span className="text-blue-700">
                HTML/CSS(Tailwind), JavaScript, React, Next.js, Python, PHP, and
                Node
              </span>
              .
            </p>
            <br />
            <p>
              Furthermore, I have worked as a Sales and Marketing Representative
              at a company and I can bring my knowledge of SEO strategies and
              marketing experience.
            </p>
            <br />
            <p>
              In my free time, I enjoy playing tennis and running. I went to the
              Laver Cup 2023 in Vancouver and it was my first time watching a
              world level tennis game like a grand slam. My favorite player is
              Denis Shapovalov.
            </p>
            <br />
            <p>
              As my project, I have created the{" "}
              <span>
                <a
                  className="text-[#339AF0]"
                  href="https://vancouver-tennis.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Vancouver Tennis Guide
                </a>
              </span>{" "}
              which is a website designed for anyone who is interested in
              playing tennis in Vancouver, whether you are a beginner or you
              want to improve your tennis skills.
            </p>
            <div className="flex items-center justify-center">
              <div className="main_about_button_container">
                <div className="flex justify-around py-16">
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
                  className="btn main_about_third_button w-30 p-4 text-gray-100 text-lg"
                >
                  See my photos
                </button>
                <Modal show={show} onClose={() => setShow(false)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
