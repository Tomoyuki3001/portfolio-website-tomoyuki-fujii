import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("transparent");
  const [linkColor, setLinkColor] = useState("#ffffff");
  const [border, setBorder] = useState("#ffffff");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/school" ||
      router.asPath === "/chat" ||
      router.asPath === "/twoot" ||
      router.asPath === "/bank" ||
      router.asPath === "/country" ||
      router.asPath === "/weather" ||
      router.asPath === "/trump" ||
      router.asPath === "/todo"
    ) {
      setNavBg("transparent");
      setLinkColor("#ffffff");
    } else {
      setNavBg("transparent");
      setLinkColor("#ffffff");
    }
  }, [router]);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 20) {
        setShadow(true);
        setNavBg("#d5dbde");
        setLinkColor("#22223B");
        setBorder("#22223B");
      } else {
        setShadow(false);
        setNavBg("transparent");
        setLinkColor("#ffffff");
        setBorder("#ffffff");
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
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <div>
            <Image
              src="/assets/Tomo-logo-PhotoRoom.png-PhotoRoom.png"
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
                className={`ml-10 text-md uppercase hover:border-b ${border}`}
              >
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li
                className={`ml-10 text-md uppercase hover:border-b ${border}`}
              >
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li
                className={`ml-10 text-md uppercase hover:border-b ${border}`}
              >
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li
                className={`ml-10 text-md uppercase hover:border-b ${border}`}
              >
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} color="#527f9f" />
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
                  <Image
                    src="/assets/Tomo-logo-PhotoRoom.png-PhotoRoom.png"
                    alt="/"
                    width="80"
                    height="35"
                  />
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
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
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
