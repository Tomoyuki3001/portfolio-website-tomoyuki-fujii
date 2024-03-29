import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import TopLogo from "../public/assets/Tomo-logo-PhotoRoom.png-PhotoRoom.png";
import TopLogoWhite from "../public/assets/Tomo-logo-white.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("");
  const [linkColor, setLinkColor] = useState("#ffffff");
  const [border, setBorder] = useState("");
  const [logo, setLogo] = useState(TopLogoWhite);
  const [mobileMenu, setMibileMenu] = useState("#ffffff");

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 20) {
        setShadow(true);
        setNavBg("#d5dbde");
        setLinkColor("#22223B");
        setBorder("#22223B");
        setLogo(TopLogo);
        setMibileMenu("#527f9f");
      } else {
        setShadow(false);
        setNavBg("transparent");
        setLinkColor("#ffffff");
        setBorder("#ffffff");
        setLogo(TopLogoWhite);
        setMibileMenu("#ffffff");
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-16 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-16 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <div>
            <Image
              src={logo}
              alt="/"
              width="130"
              height="50"
              className="cursor-pointer"
            />
          </div>
        </Link>
        <div>
          <ul className="hidden md:flex" style={{ color: `${linkColor}` }}>
            <Link href="/#about">
              <li
                style={{ borderColor: `${border}` }}
                className={`ml-10 text-md uppercase hover:border-b`}
              >
                About
              </li>
            </Link>
            <Link href="/#experiences">
              <li
                style={{ borderColor: `${border}` }}
                className={`ml-10 text-md uppercase hover:border-b`}
              >
                Experience
              </li>
            </Link>
            <Link href="/#projects">
              <li
                style={{ borderColor: `${border}` }}
                className={`ml-10 text-md uppercase hover:border-b`}
              >
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li
                style={{ borderColor: `${border}` }}
                className={`ml-10 text-md uppercase hover:border-b`}
              >
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden pr-3">
            <AiOutlineMenu size={25} color={mobileMenu} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? " md:hidden flex left-0 top-0 w-full h-screen bg-black/60" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[45%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in decoration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in decoration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <div>
                  <Image src={TopLogo} alt="/" width="80" height="35" />
                </div>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&apos;s build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#experiences">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Experience
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-10">
              <p className="uppercase tracking-widest text-[#527f9f]">
                Let&apos;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/tomoyuki-fujii-376616251/"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Tomoyuki3001"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
