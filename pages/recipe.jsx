import Image from "next/image";
import React from "react";
import recipeImg from "../public/assets/projects/image_project_recipe.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const recipe = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={recipeImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">A recipe search website</h2>
          <h3>React / A recipe API</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="text-xl">
            This recipe app is created by React and an Edamam recipe API. A user
            can search recipes with any key words in the serch box. Also, each
            recipe shows up the basic ingredients and the Health Labels.
          </p>
          <a
            href="https://github.com/Tomoyuki3001/food-recipes-app"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 text-[#ffffff] shadow-xl shadow-gray-400 btn">
              Code
            </button>
          </a>
          <a
            href="https://food-recipes-tomo.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 text-[#ffffff] shadow-xl shadow-gray-400 btn">
              Demo
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> The food API
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer text-xl">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default recipe;