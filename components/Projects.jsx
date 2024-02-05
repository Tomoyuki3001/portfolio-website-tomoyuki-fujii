import React from "react";
import Image from "next/image";
import Money from "../public/assets/money.svg";
import Search from "../public/assets/search.svg";
import Shopping from "../public/assets/shopping.svg";
import Mobile from "../public/assets/mobile.svg";
import Document from "../public/assets/document.svg";
import Gift from "../public/assets/gift.svg";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto py-16">
        <p className="text-xl tracking-widest uppercase text-[#527f9f]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-4/5">
          <div className="grid grid-cols lg:grid-cols-3 gap-10 lg:mt-8">
            <div className="p-6 shadow-xl rounded-xl border-solid border-2 border-blue-300 text-center">
              <div className="m-auto w-1/3">
                <Image className="w-16 m-auto" src={Mobile} alt="/" />
              </div>
              <h2 className="text-md md:text-xl lg:text-2xl my-3">Chat App</h2>
              <p className="text-xl">
                <a
                  href="https://mern-chat-app-lilac.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl text-blue-600"
                >
                  View Demo
                </a>
                -2024
              </p>
              <p className="sm:text-sm md:text-xl">
                This is a clone of Messenger, which a user can use as a chat
                application. The user can create an account, send messages, and
                create a chat group. For more information,{" "}
                <span>
                  <a
                    href="https://devpost.com/software/mern-chat-app"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xl text-blue-600"
                  >
                    DevPost
                  </a>
                </span>
              </p>
              <a
                href="https://github.com/Tomoyuki3001/mern-chat"
                target="_blank"
                rel="noreferrer"
                className="text-xl text-blue-600"
              >
                View Code
              </a>
              <p className="text-xl mb-1">Next.js/Prisma/MongoDB</p>
            </div>
            <div className="p-6 shadow-xl rounded-xl border-solid border-2 border-blue-300 text-center">
              <div className="m-auto w-1/3">
                <Image className="w-16 m-auto" src={Document} alt="/" />
              </div>
              <h2 className="text-md md:text-xl lg:text-2xl my-3">
                Health Management App
              </h2>
              <p className="text-xl">
                <a
                  href="https://mern-health-front.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl text-blue-600"
                >
                  View Demo
                </a>
                -2024
              </p>
              <p className="sm:text-sm md:text-xl">
                This is a health management app where users can create new
                doctor appointments. MongoDB is utilized to manage account
                statuses and generate notifications for users. For more
                information,{" "}
                <span>
                  <a
                    href="https://devpost.com/software/mern-health-management-app"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xl text-blue-600"
                  >
                    DevPost
                  </a>
                </span>
              </p>
              <a
                href="https://github.com/Tomoyuki3001/mern-health"
                target="_blank"
                rel="noreferrer"
                className="text-xl text-blue-600"
              >
                View Code
              </a>
              <p className="text-xl mb-1">React/Node/Express/MongoDB</p>
            </div>
            <div className="p-6 shadow-xl rounded-xl border-solid border-2 border-blue-300 text-center">
              <div className="m-auto w-1/3">
                <Image className="w-16 m-auto" src={Money} alt="/" />
              </div>
              <h2 className="text-md md:text-xl lg:text-2xl my-3">
                Secret Account
              </h2>
              <p className="text-xl">
                <a
                  href="https://auth-app-topaz-nine.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl text-blue-600"
                >
                  View Demo
                </a>
                -2023
              </p>
              <p className="sm:text-sm md:text-xl">
                This account is for your confidential funds dedicated to
                achieving financial freedom. Users can create individual
                accounts, track logs, and utilize a database for efficient data
                management.
              </p>
              <a
                href="https://github.com/Tomoyuki3001/auth-app"
                target="_blank"
                rel="noreferrer"
                className="text-xl text-blue-600"
              >
                View Code
              </a>
              <p className="text-xl mb-1">React/Firebase</p>
            </div>
            <div className="p-6 shadow-xl rounded-xl border-solid border-2 border-blue-300 text-center">
              <div className="m-auto w-1/3">
                <Image className="w-16 m-auto" src={Search} alt="/" />
              </div>
              <h2 className="text-md md:text-xl lg:text-2xl my-3">
                TM Recipes
              </h2>
              <p className="text-xl">
                <a
                  href="https://food-recipes-tomo.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl text-blue-600"
                >
                  View Demo
                </a>
                -2023
              </p>
              <p className="sm:text-sm md:text-xl">
                This recipe site allows users to search for menus based on
                ingredients. The recipes, sourced from an API, can be easily
                found using various keywords.
              </p>
              <a
                href="https://github.com/Tomoyuki3001/food-recipes-app"
                target="_blank"
                rel="noreferrer"
                className="text-xl text-blue-600"
              >
                View Code
              </a>
              <p className="text-xl mb-1">React/Recipe API</p>
            </div>
            <div className="p-6 shadow-xl rounded-xl border-solid border-2 border-blue-300 text-center">
              <div className="m-auto w-1/3">
                <Image className="w-16 m-auto" src={Shopping} alt="/" />
              </div>
              <h2 className="text-md md:text-xl lg:text-2xl my-3">
                Small Ecommerce
              </h2>
              <p className="text-xl">
                <a
                  href="https://shopping-cart-typescript-ashen.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl text-blue-600"
                >
                  View Demo
                </a>
                -2023
              </p>
              <p className="sm:text-sm md:text-xl">
                This small ecommerce site offers an enjoyable shopping
                experience. Users can save products, adjust quantities, and
                remove items from their cart.
              </p>
              <a
                href="https://github.com/Tomoyuki3001/shopping-cart-typescript"
                target="_blank"
                rel="noreferrer"
                className="text-xl text-blue-600"
              >
                View Code
              </a>
              <p className="text-xl mb-1">TypeScript/JSON</p>
            </div>
            <div className="p-6 shadow-xl rounded-xl border-solid border-2 border-blue-300 text-center">
              <div className="m-auto w-1/3">
                <Image className="w-16 m-auto" src={Mobile} alt="/" />
              </div>
              <h2 className="text-md md:text-xl lg:text-2xl mb-3">Hangman</h2>
              <p className="text-xl">
                <a
                  href="https://typescript-practice-1.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl text-blue-600"
                >
                  View Demo
                </a>
                -2023
              </p>
              <p className="sm:text-sm md:text-xl">
                This is a typing game that generates a Hangman figure with a
                word for players to guess. Correct selections keep the letters
                in place.
              </p>
              <a
                href="https://github.com/Tomoyuki3001/typescript-practice-1"
                target="_blank"
                rel="noreferrer"
                className="text-xl text-blue-600"
              >
                View Code
              </a>
              <p className="text-xl mb-1">TypeScript/Node.js</p>
            </div>
            <div className="p-6 shadow-xl rounded-xl border-solid border-2 border-blue-300 text-center">
              <div className="m-auto w-1/3">
                <Image className="w-16 m-auto" src={Document} alt="/" />
              </div>
              <h2 className="text-md md:text-xl lg:text-2xl mb-3">MY MEMO</h2>
              <p className="text-xl">
                <a
                  href="https://tomoyuki3001.github.io/to-do-list/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl text-blue-600"
                >
                  View Demo
                </a>
                -2023
              </p>
              <p className="sm:text-sm md:text-xl">
                This is a revamped version of a simple to-do list originally
                built using HTML, CSS, and JS. The update includes modern
                programming languages and an improved database structure.
              </p>
              <a
                href="https://github.com/Tomoyuki3001/to-do-list"
                target="_blank"
                rel="noreferrer"
                className="text-xl text-blue-600"
              >
                View Code
              </a>
              <p className="text-xl mb-1">React/Firebase</p>
            </div>
            <div className="p-6 shadow-xl rounded-xl border-solid border-2 border-blue-300 text-center">
              <div className="m-auto w-1/3">
                <Image className="w-16 m-auto" src={Search} alt="/" />
              </div>
              <h2 className="text-md md:text-xl lg:text-2xl mb-3">
                Weather App
              </h2>
              <p className="text-xl">
                <a
                  href="https://tomoyuki3001.github.io/weather-react-apps/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl text-blue-600"
                >
                  View Demo
                </a>
                -2023
              </p>
              <p className="sm:text-sm md:text-xl">
                This modern weather app prioritizes user-friendly simplicity
                with general functionality, avoiding unnecessary complexities
                for ease of use.
              </p>
              <a
                href="https://github.com/Tomoyuki3001/weather-react-apps"
                target="_blank"
                rel="noreferrer"
                className="text-xl text-blue-600"
              >
                View Code
              </a>
              <p className="text-xl mb-1">React/API</p>
            </div>
            <div className="p-6 shadow-xl rounded-xl border-solid border-2 border-blue-300 text-center">
              <div className="m-auto w-1/3">
                <Image className="w-16 m-auto" src={Gift} alt="/" />
              </div>
              <h2 className="text-md md:text-xl lg:text-2xl mb-3">
                Birthday Celeblations
              </h2>
              <p className="text-xl">
                <a
                  href="https://hbd-template.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl text-blue-600"
                >
                  View Demo
                </a>
                -2024
              </p>
              <p className="sm:text-sm md:text-xl">
                There are already many ideas of birthday cards and barthday
                invitaitons, but this is a website which has all of materials
                what you want to send your patner. For more information,{" "}
                <span>
                  <a
                    href="https://devpost.com/software/hbd-template"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xl text-blue-600"
                  >
                    DevPost
                  </a>
                </span>
              </p>
              <a
                href="https://github.com/Tomoyuki3001/hbd-template"
                target="_blank"
                rel="noreferrer"
                className="text-xl text-blue-600"
              >
                View Code
              </a>
              <p className="text-xl mb-1">React/CSS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
