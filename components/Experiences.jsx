import Image from "next/image";
import React from "react";
import Icon from "../public/assets/experiences-icon.png";

const Experiences = () => {
  return (
    <div id="experiences" className="w-full lg:mb-32">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-4/5">
        <p className="text-xl tracking-widest uppercase text-[#527f9f]">
          EXPERIENCE
        </p>
        <h2 className="py-4">What I&apos;ve Worked</h2>
        <div className="grid grid-cols lg:grid-cols-3 gap-10 lg:mt-8">
          <div className="p-6 shadow-xl rounded-xl border-solid border-2 border-blue-300 text-center">
            <div className="m-auto w-20">
              <Image src={Icon} alt="/" />
            </div>
            <h2 className="text-lg md:text-2xl mb-3">
              Front-end Developer Intern
            </h2>
            <a
              href="https://gaorfid.com/"
              target="_blank"
              rel="noreferrer"
              className="text-md md:text-xl lg:text-2xl text-blue-600"
            >
              GAO RFID
            </a>
            <h3 className="text-sm md:text-md lg:text-xl my-2">
              November 2023 - February 2024
            </h3>
            <h3 className="text-sm md:text-md lg:text-xl mb-1">
              JavaScript/WordPress
            </h3>
          </div>
          <div className="p-6 shadow-xl rounded-xl border-solid border-2 border-blue-300 text-center">
            <div className="m-auto w-20">
              <Image src={Icon} alt="/" />
            </div>
            <h2 className="text-lg md:text-2xl mb-3">
              Front-end Developer Intern
            </h2>
            <a
              href="https://tellext.com/"
              target="_blank"
              rel="noreferrer"
              className="text-md md:text-xl lg:text-2xl text-blue-600"
            >
              Tellext
            </a>
            <h3 className="text-sm md:text-md lg:text-xl my-2">
              February 2023 - July 2023
            </h3>
            <h3 className="text-sm md:text-md lg:text-xl mb-1">
              React/WordPress
            </h3>
          </div>
          <div className="p-6 shadow-xl rounded-xl border-solid border-2 border-blue-300 text-center">
            <div className="m-auto w-20">
              <Image src={Icon} alt="/" />
            </div>
            <h2 className="text-lg md:text-2xl mb-3">
              Front-end Developer Intern
            </h2>
            <a
              href="https://www.onecommunityglobal.org/"
              target="_blank"
              rel="noreferrer"
              className="text-md md:text-xl lg:text-2xl text-blue-600"
            >
              One Community Global
            </a>
            <h3 className="text-sm md:text-md lg:text-xl my-2">
              February 2023 - April 2023
            </h3>
            <h3 className="text-sm md:text-md lg:text-xl mb-1">
              HTML/CSS/JavaScript
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
