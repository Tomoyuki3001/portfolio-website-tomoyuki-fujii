import React, { useState } from "react";
import Image from "next/image";
import Money from "../public/assets/bank.png";
import Shopping from "../public/assets/shop.png";
import Chat from "../public/assets/chat.png";
import Health from "../public/assets/health.png";
import Gift from "../public/assets/gift.png";
import Fitness from "../public/assets/workout.png";
import Cook from "../public/assets/cook.png";
import Game from "../public/assets/game.png";
import Memo from "../public/assets/memo.png";
import Weather from "../public/assets/weather.png";

const Projects = () => {
  const [font, setFont] = useState("#339AF0");
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1440px] mx-auto py-16 lg:px-32">
        <p className="text-xl tracking-widest text-gray-500">PROJECTS</p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="mx-auto flex flex-col justify-center h-4/5">
          <div className="grid grid-cols lg:grid-cols-3 gap-8 lg:mt-8 lg:px-20">
            <div className="p-6 border-solid border-2 border-gray-400 text-center">
              <div className="m-auto">
                <Image className="w-14 m-auto" src={Chat} alt="/" />
              </div>
              <h2 className="text-xl md:text-2xl my-3">Chat App</h2>
              <p className="text-xl">
                <a
                  href="https://mern-chat-app-lilac.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl"
                  style={{ color: `${font}` }}
                >
                  View Demo
                </a>
                -2024
              </p>
              <p className="text-sm md:text-lg">
                Users can create an account, send messages, and create a chat
                group. For more information,{" "}
                <span>
                  <a
                    href="https://devpost.com/software/mern-chat-app"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xl"
                    style={{ color: `${font}` }}
                  >
                    DevPost
                  </a>
                </span>
              </p>
              <a
                href="https://github.com/Tomoyuki3001/mern-chat"
                target="_blank"
                rel="noreferrer"
                className="text-xl"
                style={{ color: `${font}` }}
              >
                View Code
              </a>
              <p className="font-bold text-sm md:text-lg mb-1">
                Next.js, Prisma, MongoDB
              </p>
            </div>
            <div className="p-6 border-solid border-2 border-gray-400 text-center">
              <div className="m-auto">
                <Image className="w-14 m-auto" src={Health} alt="/" />
              </div>
              <h2 className="text-xl md:text-2xl my-3">Health Management</h2>
              <p className="text-xl">
                <a
                  href="https://mern-health-front.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl"
                  style={{ color: `${font}` }}
                >
                  View Demo
                </a>
                -2024
              </p>
              <p className="text-sm md:text-lg">
                Users can create new doctor appointments, manage account
                statuses, and generate notifications for users.
                <span>
                  <a
                    href="https://devpost.com/software/mern-health-management-app"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xl"
                    style={{ color: `${font}` }}
                  >
                    DevPost
                  </a>
                </span>
              </p>
              <a
                href="https://github.com/Tomoyuki3001/mern-health"
                target="_blank"
                rel="noreferrer"
                className="text-xl"
                style={{ color: `${font}` }}
              >
                View Code
              </a>
              <p className="font-bold text-sm md:text-lg mb-1">
                React, Node, Express, MongoDB
              </p>
            </div>
            <div className="p-6 border-solid border-2 border-gray-400 text-center">
              <div className="m-auto">
                <Image className="w-14 m-auto" src={Fitness} alt="/" />
              </div>
              <h2 className="text-xl md:text-2xl my-3">Workout Tracking</h2>
              <p className="text-xl">
                <a
                  href="https://workout-record.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl"
                  style={{ color: `${font}` }}
                >
                  View Demo
                </a>
                -2024
              </p>
              <p className="text-sm md:text-lg">
                Users can record the weight training and cardio training, edit
                each log, delete unnecessary logs, and update their profile.
                <span>
                  <a
                    href="https://devpost.com/software/workout-tracking"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xl"
                    style={{ color: `${font}` }}
                  >
                    DevPost
                  </a>
                </span>
              </p>
              <a
                href="https://github.com/Tomoyuki3001/workout-record"
                target="_blank"
                rel="noreferrer"
                className="text-xl"
                style={{ color: `${font}` }}
              >
                View Code
              </a>
              <p className="font-bold text-sm md:text-lg mb-1">
                React, Node, Express, MongoDB
              </p>
            </div>
            <div className="p-6 border-solid border-2 border-gray-400 text-center">
              <div className="m-auto">
                <Image className="w-14 m-auto" src={Money} alt="/" />
              </div>
              <h2 className="text-xl md:text-2xl my-3">Secret Account</h2>
              <p className="text-xl">
                <a
                  href="https://auth-app-topaz-nine.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl"
                  style={{ color: `${font}` }}
                >
                  View Demo
                </a>
                -2023
              </p>
              <p className="text-sm md:text-lg">
                Users can create individual accounts, track logs, and utilize a
                database for efficient data management.
              </p>
              <a
                href="https://github.com/Tomoyuki3001/auth-app"
                target="_blank"
                rel="noreferrer"
                className="text-xl"
                style={{ color: `${font}` }}
              >
                View Code
              </a>
              <p className="font-bold text-sm md:text-lg mb-1">
                React, Firebase
              </p>
            </div>
            <div className="p-6 border-solid border-2 border-gray-400 text-center">
              <div className="m-auto">
                <Image className="w-14 m-auto" src={Cook} alt="/" />
              </div>
              <h2 className="text-xl md:text-2xl my-3">TM Recipes</h2>
              <p className="text-xl">
                <a
                  href="https://food-recipes-tomo.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl"
                  style={{ color: `${font}` }}
                >
                  View Demo
                </a>
                -2023
              </p>
              <p className="text-sm md:text-lg">
                Users can search for menus based on ingredients. The recipes,
                sourced from an API, can be easily found using various keywords.
              </p>
              <a
                href="https://github.com/Tomoyuki3001/food-recipes-app"
                target="_blank"
                rel="noreferrer"
                className="text-xl"
                style={{ color: `${font}` }}
              >
                View Code
              </a>
              <p className="font-bold text-sm md:text-lg mb-1">
                React, Recipe API
              </p>
            </div>
            <div className="p-6 border-solid border-2 border-gray-400 text-center">
              <div className="m-auto">
                <Image className="w-14 m-auto" src={Shopping} alt="/" />
              </div>
              <h2 className="text-xl md:text-2xl my-3">Small Ecommerce</h2>
              <p className="text-xl">
                <a
                  href="https://shopping-cart-typescript-ashen.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl"
                  style={{ color: `${font}` }}
                >
                  View Demo
                </a>
                -2023
              </p>
              <p className="text-sm md:text-lg">
                Users can save products, adjust quantities, and remove items
                from their cart.
              </p>
              <a
                href="https://github.com/Tomoyuki3001/shopping-cart-typescript"
                target="_blank"
                rel="noreferrer"
                className="text-xl"
                style={{ color: `${font}` }}
              >
                View Code
              </a>
              <p className="font-bold text-sm md:text-lg mb-1">
                TypeScript, JSON
              </p>
            </div>
            <div className="p-6 border-solid border-2 border-gray-400 text-center">
              <div className="m-auto">
                <Image className="w-14 m-auto" src={Game} alt="/" />
              </div>
              <h2 className="text-xl md:text-2xl mb-3">Hangman</h2>
              <p className="text-xl">
                <a
                  href="https://typescript-practice-1.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl"
                  style={{ color: `${font}` }}
                >
                  View Demo
                </a>
                -2023
              </p>
              <p className="text-sm md:text-lg">
                This is a typing game that generates a Hangman figure with a
                word for players to guess. Correct selections keep the letters
                in place.
              </p>
              <a
                href="https://github.com/Tomoyuki3001/typescript-practice-1"
                target="_blank"
                rel="noreferrer"
                className="text-xl"
                style={{ color: `${font}` }}
              >
                View Code
              </a>
              <p className="font-bold text-sm md:text-lg mb-1">
                TypeScript, Node.js
              </p>
            </div>
            <div className="p-6 border-solid border-2 border-gray-400 text-center">
              <div className="m-auto">
                <Image className="w-14 m-auto" src={Memo} alt="/" />
              </div>
              <h2 className="text-xl md:text-2xl mb-3">MY MEMO</h2>
              <p className="text-xl">
                <a
                  href="https://tomoyuki3001.github.io/to-do-list/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl"
                  style={{ color: `${font}` }}
                >
                  View Demo
                </a>
                -2023
              </p>
              <p className="text-sm md:text-lg">
                This is a simple to-do list. The update includes modern
                programming languages and an improved database structure.
              </p>
              <a
                href="https://github.com/Tomoyuki3001/to-do-list"
                target="_blank"
                rel="noreferrer"
                className="text-xl"
                style={{ color: `${font}` }}
              >
                View Code
              </a>
              <p className="font-bold text-sm md:text-lg mb-1">
                React, Firebase
              </p>
            </div>
            <div className="p-6 border-solid border-2 border-gray-400 text-center">
              <div className="m-auto">
                <Image className="w-14 m-auto" src={Weather} alt="/" />
              </div>
              <h2 className="text-xl md:text-2xl mb-3">Weather App</h2>
              <p className="text-xl">
                <a
                  href="https://tomoyuki3001.github.io/weather-react-apps/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl"
                  style={{ color: `${font}` }}
                >
                  View Demo
                </a>
                -2023
              </p>
              <p className="text-sm md:text-lg">
                This weather app prioritizes user-friendly simplicity with
                general functionality, avoiding unnecessary complexities for
                ease of use.
              </p>
              <a
                href="https://github.com/Tomoyuki3001/weather-react-apps"
                target="_blank"
                rel="noreferrer"
                className="text-xl"
                style={{ color: `${font}` }}
              >
                View Code
              </a>
              <p className="font-bold text-sm md:text-lg mb-1">React, API</p>
            </div>
            <div className="p-6 border-solid border-2 border-gray-400 text-center">
              <div className="m-auto">
                <Image className="w-14 m-auto" src={Gift} alt="/" />
              </div>
              <h2 className="text-xl md:text-2xl mb-3">
                Birthday Celeblations
              </h2>
              <p className="text-xl">
                <a
                  href="https://hbd-template.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl"
                  style={{ color: `${font}` }}
                >
                  View Demo
                </a>
                -2024
              </p>
              <p className="text-sm md:text-lg">
                This is a website which has all of materials what you want to
                send your patner. For more information,{" "}
                <span>
                  <a
                    href="https://devpost.com/software/hbd-template"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xl"
                    style={{ color: `${font}` }}
                  >
                    DevPost
                  </a>
                </span>
              </p>
              <a
                href="https://github.com/Tomoyuki3001/hbd-template"
                target="_blank"
                rel="noreferrer"
                className="text-xl"
                style={{ color: `${font}` }}
              >
                View Code
              </a>
              <p className="font-bold text-sm md:text-lg mb-1">React, CSS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
