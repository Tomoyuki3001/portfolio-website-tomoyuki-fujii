import React from "react";
import School from "../public/assets/projects/image_project_school.png";
import Chat from "../public/assets/projects/image_project_chat.png";
import Twoot from "../public/assets/projects/image_project_twoot.png";
import Bank from "../public/assets/projects/image_project_bank.png";
import Countries from "../public/assets/projects/image_project_countries.png";
import Weather from "../public/assets/projects/image_project_weather.png";
import Trump from "../public/assets/projects/image_project_trump.png";
import Todo from "../public/assets/projects/image_project_todo.png";
import ProjectItem from "./ProjectItem.jsx";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="A School app"
            backgroundImg={School}
            projectUrl="/school"
            tech="React JS / PostgresSQL / Node.js"
          />
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
            tech="HTML / CSS / JavaScript / Node.js"
          />
          <ProjectItem
            title="A bank tracker app"
            backgroundImg={Bank}
            projectUrl="/bank"
            tech="HTML / CSS / JavaScript"
          />
          <ProjectItem
            title="A searching country app"
            backgroundImg={Countries}
            projectUrl="/country"
            tech="HTML / CSS / JavaScript / API"
          />
          <ProjectItem
            title="A weather app"
            backgroundImg={Weather}
            projectUrl="/weather"
            tech="HTML / CSS / JavaScript / API"
          />
          <ProjectItem
            title="A matching game(Trump)"
            backgroundImg={Trump}
            projectUrl="/trump"
            tech="HTML / CSS / JavaScript"
          />
          <ProjectItem
            title="A todo list"
            backgroundImg={Todo}
            projectUrl="/todo"
            tech="React JS / Firebase"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
