import Image from "next/image";
import React, { useState } from "react";
import Icon from "../public/assets/experience.png";

const Experiences = () => {
  const [font, setFont] = useState("#339AF0");
  return (
    <div id="experiences" className="w-full lg:mb-32">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-4/5">
        <p className="text-xl tracking-widest text-gray-500">EXPERIENCE</p>
        <h2 className="py-4">What I&apos;ve Worked</h2>
        <div className="grid grid-cols lg:grid-cols-3 gap-8 lg:mt-8 lg:px-20">
          <div className="p-6 border-solid border-2 border-gray-400 text-center">
            <div className="m-auto w-20 flex flex-col items-center">
              <Image src={Icon} alt="/" />
            </div>
            <h2 className="text-lg mb-3">Front-end Developer Intern</h2>
            <a
              href="https://www.linkedin.com/company/onyx-creative-media/"
              target="_blank"
              rel="noreferrer"
              className="text-md md:text-xl lg:text-xl"
              style={{ color: `${font}` }}
            >
              Onyx Creative Media
            </a>
            <h3 className="sm:text-sm lg:text-md my-2">Mar 2024 - Present</h3>
            <h3 className="sm:text-sm lg:text-md mb-1">
              HTML, CSS, JavaScript
            </h3>
          </div>
          <div className="p-6 border-solid border-2 border-gray-400 text-center">
            <div className="m-auto w-20 flex flex-col items-center">
              <Image src={Icon} alt="/" />
            </div>
            <h2 className="text-lg mb-3">Front-end Developer Intern</h2>
            <a
              href="https://gaorfid.com/"
              target="_blank"
              rel="noreferrer"
              className="text-md md:text-xl lg:text-xl"
              style={{ color: `${font}` }}
            >
              GAO RFID
            </a>
            <h3 className="text-sm lg:text-md my-2">Nov 2023 - Feb 2024</h3>
            <h3 className="text-sm lg:text-md mb-1">
              JavaScript, PHP, WordPress
            </h3>
          </div>
          <div className="p-6 border-solid border-2 border-gray-400 text-center">
            <div className="m-auto w-20 flex flex-col items-center">
              <Image src={Icon} alt="/" />
            </div>
            <h2 className="text-lg mb-3">Front-end Developer Intern</h2>
            <a
              href="https://tellext.com/"
              target="_blank"
              rel="noreferrer"
              className="text-md md:text-xl lg:text-xl"
              style={{ color: `${font}` }}
            >
              Tellext
            </a>
            <h3 className="text-sm lg:text-md my-2">Feb 2023 - Jul 2023</h3>
            <h3 className="text-sm lg:text-md mb-1">React, WordPress</h3>
          </div>
          <div className="p-6 border-solid border-2 border-gray-400 text-center">
            <div className="m-auto w-20 flex flex-col items-center">
              <Image src={Icon} alt="/" />
            </div>
            <h2 className="text-lg mb-3">Front-end Developer Intern</h2>
            <a
              href="https://www.onecommunityglobal.org/"
              target="_blank"
              rel="noreferrer"
              className="text-md md:text-xl lg:text-xl"
              style={{ color: `${font}` }}
            >
              One Community Global
            </a>
            <h3 className="text-sm lg:text-md my-2">Feb 2023 - Apr 2023</h3>
            <h3 className="text-sm lg:text-md mb-1">HTML, CSS, JavaScript</h3>
          </div>
          <div className="p-6 border-solid border-2 border-gray-400 text-center">
            <div className="m-auto w-20 flex flex-col items-center">
              <Image src={Icon} alt="/" />
            </div>
            <h2 className="text-lg mb-3">Sales and Marketing Representative</h2>
            <a
              href="https://dunlopsports.com/"
              target="_blank"
              rel="noreferrer"
              className="text-md md:text-xl lg:text-xl"
              style={{ color: `${font}` }}
            >
              DUNLOP SPORTS
            </a>
            <h3 className="text-sm lg:text-md my-2">Apr 2018 - Jun 2021</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
