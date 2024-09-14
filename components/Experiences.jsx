import React from "react";
import Icon from "../public/assets/experience.png";
import Sales from "../public/assets/sales.png";
import ExperienceComponent from "./ExperienceComponent";

const Experiences = () => {
  const experiences = [
    {
      id: 1,
      image: Icon,
      title: "Full-stack Developer",
      url: "https://connec10.co.jp/",
      name: "CONNECT Inc.",
      term: "Sep 2024 - Present",
      skills: "JavaScript, PHP, Laravel, MySQL",
    },
    {
      id: 2,
      image: Icon,
      title: "Front-end Developer Intern",
      url: "https://www.linkedin.com/company/onyx-creative-media/",
      name: "Onyx Creative Media",
      term: "Mar 2024 - May 2024",
      skills: "HTML/CSS, JavaScript, GoDaddy",
    },
    {
      id: 3,
      image: Icon,
      title: "Front-end Developer Intern",
      url: "https://gaorfid.com/",
      name: "GAO RFID",
      term: "Nov 2023 - Feb 2024",
      skills: "JavaScript, PHP, WordPress",
    },
    {
      id: 4,
      image: Icon,
      title: "Front-end Developer Intern",
      url: "https://tellext.com/",
      name: "Tellext",
      term: "Feb 2023 - Jul 2023",
      skills: "React, Next, WordPress",
    },
    {
      id: 5,
      image: Icon,
      title: "Front-end Developer Intern",
      url: "https://www.onecommunityglobal.org/",
      name: "One Community Global",
      term: "Mar 2023 - Apr 2023",
      skills: "HTML/CSS, JavaScript",
    },
    {
      id: 6,
      image: Sales,
      title: "Sales and Marketing Representative",
      url: "https://dunlopsports.com/",
      name: "Dunlop Sports",
      term: "Apr 2018 - Jun 2021",
      skills: "",
    },
  ];
  return (
    <div id="experiences" className="w-full py-8 lg:py-24">
      <div className="text-center mb-12">
        <p className="uppercase text-xl tracking-widest text-gray-500">
          EXPERIENCE
        </p>
        <h2 className="pt-4">What I&apos;ve Worked</h2>
      </div>
      <div className="grid grid-cols grid-cols-1 md:grid-cols-3 gap-8 md:mt-8 md:px-20">
        {experiences.map((experience) => (
          <ExperienceComponent key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
