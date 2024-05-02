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
import Tennis from "../public/assets/tennis.png";
import Design from "../public/assets/design.png";
import ProjectComponent from "./ProjectComponent";

const Projects = () => {
  const [font, setFont] = useState("#339AF0");
  const projects = [
    {
      id: 1,
      image: Chat,
      name: "Chat App",
      demo: "https://mern-chat-app-lilac.vercel.app/",
      description:
        "Users can create an account, send messages, and create a chat group.",
      code: "https://github.com/Tomoyuki3001/mern-chat",
      skills: "Next.js, Prisma, MongoDB",
    },
    {
      id: 2,
      image: Health,
      name: "Health Management",
      demo: "https://mern-health-front.vercel.app/",
      description:
        "Users can create new doctor appointments, manage account statuses.",
      code: "https://github.com/Tomoyuki3001/mern-health",
      skills: "React, Node, Express, MongoDB",
    },
    {
      id: 3,
      image: Fitness,
      name: "Workout Tracking",
      demo: "https://workout-record.vercel.app/",
      description:
        "Users can record the training, edit each log, and update their profile.",
      code: "https://github.com/Tomoyuki3001/workout-record",
      skills: "React, Node, Express, MongoDB",
    },
    {
      id: 4,
      image: Money,
      name: "Secret Account",
      demo: "https://auth-app-topaz-nine.vercel.app/",
      description:
        "Users can create track logs, and utilize a database for data management.",
      code: "https://github.com/Tomoyuki3001/auth-app",
      skills: "React, Firebase",
    },
    {
      id: 5,
      image: Cook,
      name: "TM Recipes",
      demo: "https://food-recipes-tomo.netlify.app/",
      description:
        "The recipes, sourced from an API, can be easily found using various keywords.",
      code: "https://github.com/Tomoyuki3001/food-recipes-app",
      skills: "React, Recipe API",
    },
    {
      id: 6,
      image: Shopping,
      name: "Small Ecommerce",
      demo: "https://shopping-cart-typescript-ashen.vercel.app/",
      description:
        "Users can save products, adjust quantities, and remove items from their cart.",
      code: "https://github.com/Tomoyuki3001/shopping-cart-typescript",
      skills: "TypeScript, JSON",
    },
    {
      id: 7,
      image: Game,
      name: "Hangman",
      demo: "https://typescript-practice-1.vercel.app/",
      description:
        "Typing game that generates a Hangman figure with a word for players to guess.",
      code: "https://github.com/Tomoyuki3001/typescript-practice-1",
      skills: "TypeScript, Node.js",
    },
    {
      id: 8,
      image: Memo,
      name: "My Memo",
      demo: "https://tomoyuki3001.github.io/to-do-list/",
      description:
        "Using modern programming languages and an improved database structure.",
      code: "https://github.com/Tomoyuki3001/to-do-list",
      skills: "React, Firebase",
    },
    {
      id: 9,
      image: Weather,
      name: "Weather App",
      demo: "https://tomoyuki3001.github.io/weather-react-apps/",
      description:
        "User-friendly simplicity and avoiding unnecessary complexities for ease of use.",
      code: "https://github.com/Tomoyuki3001/weather-react-apps",
      skills: "React, Weather API",
    },
    {
      id: 10,
      image: Gift,
      name: "Birthday Celeblations",
      demo: "https://hbd-template.vercel.app/",
      description:
        "This is a website which has all of materials what you want to send your patner.",
      code: "https://github.com/Tomoyuki3001/hbd-template",
      skills: "React, CSS(Tailwind)",
    },
    {
      id: 11,
      image: Tennis,
      name: "Vancouver Tennis Guide",
      demo: "https://vancouver-tennis.vercel.app/",
      description:
        "This is a website designed for anyone who is interested in playing tennis in Vancouver.",
      code: "https://github.com/Tomoyuki3001/van-tennis",
      skills: "React, CSS(Tailwind)",
    },
    {
      id: 12,
      image: Design,
      name: "Tellext Inc.",
      demo: "https://tellext.com/",
      description:
        "Worked on designing this company website using WordPress and JavaScript.",
      code: "",
      skills: "JavaScript, WordPress",
    },
  ];
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1440px] mx-auto py-16 lg:px-32">
        <p className="text-xl tracking-widest text-gray-500">PROJECTS</p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="mx-auto flex flex-col justify-center h-4/5">
          <div className="grid grid-cols lg:grid-cols-3 gap-8 lg:mt-8 lg:px-20">
            {projects.map((project) => (
              <ProjectComponent key={project.id} project={project} />
            ))}
            {/* <div className="p-6 border-solid border-2 border-gray-400 text-center">
              <div className="m-auto">
                <Image className="w-13 m-auto" src={Chat} alt="/" />
              </div>
              <h2 className="text-xl my-3">Chat App</h2>
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
                group.{" "}
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
              <p className="font-bold text-sm md:text-md mb-1">
                Next.js, Prisma, MongoDB
              </p>
            </div>
            <div className="p-6 border-solid border-2 border-gray-400 text-center">
              <div className="m-auto">
                <Image className="w-13 m-auto" src={Health} alt="/" />
              </div>
              <h2 className="text-xl my-3">Health Management</h2>
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
                statuses.
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
              <p className="font-bold text-sm md:text-md mb-1">
                React, Node, Express, MongoDB
              </p>
            </div>
            <div className="p-6 border-solid border-2 border-gray-400 text-center">
              <div className="m-auto">
                <Image className="w-13 m-auto" src={Fitness} alt="/" />
              </div>
              <h2 className="text-xl my-3">Workout Tracking</h2>
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
                Users can record the training, edit each log, and update their
                profile.
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
              <p className="font-bold text-sm md:text-md mb-1">
                React, Node, Express, MongoDB
              </p>
            </div>
            <div className="p-6 border-solid border-2 border-gray-400 text-center">
              <div className="m-auto">
                <Image className="w-13 m-auto" src={Money} alt="/" />
              </div>
              <h2 className="text-xl my-3">Secret Account</h2>
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
                Users can create track logs, and utilize a database for data
                management.
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
              <p className="font-bold text-sm md:text-md mb-1">
                React, Firebase
              </p>
            </div>
            <div className="p-6 border-solid border-2 border-gray-400 text-center">
              <div className="m-auto">
                <Image className="w-13 m-auto" src={Cook} alt="/" />
              </div>
              <h2 className="text-xl my-3">TM Recipes</h2>
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
                The recipes, sourced from an API, can be easily found using
                various keywords.
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
              <p className="font-bold text-sm md:text-md mb-1">
                React, Recipe API
              </p>
            </div>
            <div className="p-6 border-solid border-2 border-gray-400 text-center">
              <div className="m-auto">
                <Image className="w-13 m-auto" src={Shopping} alt="/" />
              </div>
              <h2 className="text-xl my-3">Small Ecommerce</h2>
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
              <p className="font-bold text-sm md:text-md mb-1">
                TypeScript, JSON
              </p>
            </div>
            <div className="p-6 border-solid border-2 border-gray-400 text-center">
              <div className="m-auto">
                <Image className="w-13 m-auto" src={Game} alt="/" />
              </div>
              <h2 className="text-xl mb-3">Hangman</h2>
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
                Typing game that generates a Hangman figure with a word for
                players to guess.
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
              <p className="font-bold text-sm md:text-md mb-1">
                TypeScript, Node.js
              </p>
            </div>
            <div className="p-6 border-solid border-2 border-gray-400 text-center">
              <div className="m-auto">
                <Image className="w-13 m-auto" src={Memo} alt="/" />
              </div>
              <h2 className="text-xl mb-3">MY MEMO</h2>
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
                Using modern programming languages and an improved database
                structure.
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
              <p className="font-bold text-sm md:text-md mb-1">
                React, Firebase
              </p>
            </div>
            <div className="p-6 border-solid border-2 border-gray-400 text-center">
              <div className="m-auto">
                <Image className="w-13 m-auto" src={Weather} alt="/" />
              </div>
              <h2 className="text-xl mb-3">Weather App</h2>
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
                User-friendly simplicity and avoiding unnecessary complexities
                for ease of use.
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
              <p className="font-bold text-sm md:text-md mb-1">React, API</p>
            </div>
            <div className="p-6 border-solid border-2 border-gray-400 text-center">
              <div className="m-auto">
                <Image className="w-13 m-auto" src={Gift} alt="/" />
              </div>
              <h2 className="text-xl mb-3">Birthday Celeblations</h2>
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
                send your patner.{" "}
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
              <p className="font-bold text-sm md:text-md mb-1">React, CSS</p>
            </div>
            <div className="p-6 border-solid border-2 border-gray-400 text-center">
              <div className="m-auto">
                <Image className="w-12 m-auto" src={Tennis} alt="/" />
              </div>
              <h2 className="text-xl mb-3">Vancouver Tennis Guide</h2>
              <p className="text-xl">
                <a
                  href="https://vancouver-tennis.vercel.app/"
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
                This is a website designed for anyone who is interested in
                playing tennis in Vancouver.
              </p>
              <a
                href="https://github.com/Tomoyuki3001/van-tennis"
                target="_blank"
                rel="noreferrer"
                className="text-xl"
                style={{ color: `${font}` }}
              >
                View Code
              </a>
              <p className="font-bold text-sm md:text-md mb-1">
                React, CSS(Tailwind)
              </p>
            </div>
            <div className="p-6 border-solid border-2 border-gray-400 text-center">
              <div className="m-auto">
                <Image className="w-12 m-auto" src={Design} alt="/" />
              </div>
              <h2 className="text-xl mb-3">Tellext Inc.</h2>
              <p className="text-xl">
                <a
                  href="https://tellext.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl"
                  style={{ color: `${font}` }}
                >
                  View Website
                </a>
                -2023
              </p>
              <p className="text-sm md:text-lg mb-3">
                Worked on designing this company website using WordPress and
                JavaScript.
              </p>
              <p className="font-bold text-sm md:text-md mb-1">
                JavaScript, WordPress
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
