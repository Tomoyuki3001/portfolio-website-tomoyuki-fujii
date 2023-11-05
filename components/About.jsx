import React, { useState } from "react";
import Image from "next/image";
import Modal from "./Modal.jsx";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const About = () => {
  const [show, setShow] = useState(false);
  return (
    <div id="about" className="w-full h-full p-10 flex items-center">
      <div className="max-w-[1240px] m-auto">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#527f9f]">
            About
          </p>
          <h2 className="pt-4 pb-12">Who I Am</h2>
          <div className="flex items-center justify-center">
            <Image
              src={"/assets/image_profile_square.JPG"}
              className="rounded-xl"
              alt="/"
              width={350}
              height={0}
            />
          </div>
          <p className="py-12 px-4 text-gray-600 text-2xl">
            I started learning web development in 2021 with my college program
            that are mostly HTML, CSS, JavaScript, React, Next.js, Tailwind.
            Though I am most proficient in building front-end applications using
            HTML, CSS, Javascript, and React, I am a quick learner and can pick
            up new tech stacks as needed. I believe that being a great developer
            is not using one specific language, but choosing the best tool for
            the job. In my free time, I like to do outdoor activities such as
            running, swimming, and playing tennis.
          </p>
          <div className="flex items-center justify-center">
            <div className="main_about_button_container">
              <div className="flex items-center py-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/tomoyuki-fujii-376616251/"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 mr-10 cursor-pointer hover:scale-110 ease-in duration-300">
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
