import React from "react";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen flex justify-center items-center">
      <div className="mx-w-[1240px] w-full p-2 text-center">
        <div>
          <h2 className="py-4 text-gray-700">Hello!</h2>
          {/* <h1 className="py-4 text-gray-700">
            I am <span className="text-[#527f9f]">Tomoyuki Fujii</span>.
          </h1> */}
          <div className="waviy">
            <span className="waviy-span" style={{ "--i": 1 }}>
              I
            </span>
            <p className="waviy-span" style={{ "--i": 2 }}>
              &nbsp;
            </p>
            <span className="waviy-span" style={{ "--i": 3 }}>
              a
            </span>
            <span className="waviy-span" style={{ "--i": 4 }}>
              m
            </span>
            <p className="waviy-span" style={{ "--i": 5 }}>
              &nbsp;
            </p>
            <span className="waviy-span" style={{ "--i": 6 }}>
              T
            </span>
            <span className="waviy-span" style={{ "--i": 7 }}>
              o
            </span>
            <span className="waviy-span" style={{ "--i": 8 }}>
              m
            </span>
            <span className="waviy-span" style={{ "--i": 9 }}>
              o
            </span>
            <span className="waviy-span" style={{ "--i": 10 }}>
              y
            </span>
            <span className="waviy-span" style={{ "--i": 11 }}>
              u
            </span>
            <span className="waviy-span" style={{ "--i": 12 }}>
              k
            </span>
            <span className="waviy-span" style={{ "--i": 13 }}>
              i
            </span>
            <span className="waviy-span" style={{ "--i": 14 }}>
              .
            </span>
          </div>
          <p className="pt-10 pb-6 px-4 text-gray-600 max-w-[70%] m-auto text-xl">
            I am a Junior Full-Stack Developer based in Vancouver.
          </p>
          <button className="py-4 px-8 text-gray-100 mt-4 text-xl">
            <a
              href="/assets/Tomoyuki Fujii_CV.pdf"
              download="Tomoyuki Fujii_CV.pdf"
            >
              Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
