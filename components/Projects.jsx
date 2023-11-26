import React from "react";
import Chat from "../public/assets/projects/image_project_chat.png";
import Twoot from "../public/assets/projects/image_project_twoot.png";
import Bank from "../public/assets/projects/image_project_bank.png";
import Weather from "../public/assets/projects/image_project_weather.png";
import Trump from "../public/assets/projects/image_project_trump.png";
import Todo from "../public/assets/projects/image_project_todo.png";
import ProjectItem from "./ProjectItem.jsx";
import Hangman from "../public/assets/projects/image_project_hangman.png";
import Shopping from "../public/assets/projects/image_project_shopping.png";
import Recipe from "../public/assets/projects/image_project_recipe.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#527f9f]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ProjectItem
            title="A chat app"
            backgroundImg={Chat}
            projectUrl="/chat"
            tech="React JS / Firebase"
          />
          <ProjectItem
            title="Twoot(Social media apps)"
            backgroundImg={Twoot}
            projectUrl="/twoot"
            tech="HTML / CSS / JavaScript / JSON"
          />
          <ProjectItem
            title="A bank tracker app"
            backgroundImg={Bank}
            projectUrl="/bank"
            tech="HTML / CSS / JavaScript / JSON"
          />
          <ProjectItem
            title="A searching recipe app"
            backgroundImg={Recipe}
            projectUrl="/recipe"
            tech="React / API"
          />
          <ProjectItem
            title="A shopping cart"
            backgroundImg={Shopping}
            projectUrl="/shopping"
            tech="TypeScript / JSON"
          />
          <ProjectItem
            title="A weather app"
            backgroundImg={Weather}
            projectUrl="/weather"
            tech="HTML / CSS / JavaScript / API"
          />
          <ProjectItem
            title="A typing game"
            backgroundImg={Hangman}
            projectUrl="/hangman"
            tech="TypeScript / Node.js"
          />
          <ProjectItem
            title="A todo list"
            backgroundImg={Todo}
            projectUrl="/todo"
            tech="React JS / Firebase"
          />
          <ProjectItem
            title="A matching game(Trump)"
            backgroundImg={Trump}
            projectUrl="/trump"
            tech="HTML / CSS / JavaScript"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
