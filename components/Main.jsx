import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
// import Profile from "../public/assets/image_profile_square.JPG";
import Image from "next/image";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="mx-w-[1240px] w-full h-full p-2 flex justify-center items-center">
        <div className="">
          <div
            className=" w-1/5 h-auto min-w-[150px] m-auto"
            style={{
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            {/* <Image
              src={"/assets/image_profile_square.JPG"}
              alt="/"
              width={800}
              height={800}
            /> */}
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
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineTwitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
