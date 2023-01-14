import Image from "next/image";
import Link from "next/link";
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
// import cryptoImg from "../public/assets/projects/crypto.jpg";
// import netflixImg from "../public/assets/projects/netflix.jpg";
// import twitchImg from "../public/assets/projects/twitch.jpg";
// import ProjectItem from "./ProjectItem.jsx";

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
            title="Property Finder"
            backgroundImg={School}
            projectUrl="/property"
            tech="React JS"
          />
          <ProjectItem
            title="Property Finder"
            backgroundImg={Chat}
            projectUrl="/property"
            tech="React JS"
          />
          <ProjectItem
            title="Property Finder"
            backgroundImg={Twoot}
            projectUrl="/property"
            tech="React JS"
          />
          <ProjectItem
            title="Property Finder"
            backgroundImg={Bank}
            projectUrl="/property"
            tech="React JS"
          />
          <ProjectItem
            title="Property Finder"
            backgroundImg={Countries}
            projectUrl="/property"
            tech="React JS"
          />
          <ProjectItem
            title="Property Finder"
            backgroundImg={Weather}
            projectUrl="/property"
            tech="React JS"
          />
          <ProjectItem
            title="Property Finder"
            backgroundImg={Trump}
            projectUrl="/property"
            tech="React JS"
          />
          <ProjectItem
            title="Property Finder"
            backgroundImg={Todo}
            projectUrl="/property"
            tech="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
