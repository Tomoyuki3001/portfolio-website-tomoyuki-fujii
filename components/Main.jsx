import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
// import Profile from "../public/assets/image_profile_square.JPG";
import Image from "next/image";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="mx-w-[1240px] w-full h-full p-2 flex justify-center items-center">
        <div className="pt-40">
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
                width={900}
                height={900}
              />
            </div>
          </div>
          {/* <p className="uppercase text-sm tracking-widest text-gray-600">
            LET'S BUILD SOMETHING TOGETHER
          </p> */}
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m <span className="text-[#5651e5]">Tomo</span>
          </h1>
          <h1 className="py-2 text-gray-700">Front-End Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I’m a junior front-end developer based in Vancouver. I have over one
            year’s experience in front-end development with React.
          </p>
          <div className="flex items-center justify-between max-w-[320px] m-auto py-4">
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
          <button className="w-30 p-5 text-gray-100 mt-4">
            <a href="/assets/TomoyukiFujii.pdf" download="TomoyukiFujii.pdf">
              Download Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
