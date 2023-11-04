import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Image from "next/image";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="mx-w-[1240px] w-full h-full p-2 flex justify-center items-center">
        <div className="mt-48">
          <div
            className=" w-1/4 h-auto min-w-[150px] m-auto"
            style={{
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <div>
              <Image
                src={"/assets/image_profile_square.JPG"}
                alt="/"
                width={525}
                height={525}
              />
            </div>
          </div>
          <h1 className="py-4 text-gray-700">
            Hi, I am <span className="text-[#527f9f]">Tomo</span>
          </h1>
          <h1 className="py-2 text-gray-700">Full-stack Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto text-xl">
            I am m a junior full-stack developer based in Vancouver.
          </p>
          <div className="flex items-center justify-between max-w-[320px] m-auto py-4">
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
          <button className="w-30 p-4 text-gray-100 mt-4 text-lg">
            <a
              href="/assets/Tomoyuki Fujii_CV.pdf"
              download="Tomoyuki Fujii_CV.pdf"
            >
              Download Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
