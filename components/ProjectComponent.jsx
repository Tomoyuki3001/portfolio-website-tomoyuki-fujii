import Image from "next/image";

const ExperienceComponent = ({ project }) => {
  return (
    <div className="p-6 border-solid border border-gray-300 text-center">
      <div className="m-auto">
        <Image className="w-[3rem] m-auto" src={project.image} alt="/" />
      </div>
      <h2 className="text-xl my-3">{project.name}</h2>
      <p className="text-xl">
        View{" "}
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="text-xl text-[#339AF0]"
        >
          Demo{" "}
        </a>
        <span>{project.code === "" ? "" : "/"}</span>
        <a
          href={project.code}
          target="_blank"
          rel="noreferrer"
          className="text-xl text-[#339AF0]"
        >
          {project.code === "" ? "" : " Code"}
        </a>
      </p>
      <p className="text-sm md:text-base">{project.description}</p>
      <p className="font-bold text-sm md:text-md mt-1">{project.skills}</p>
    </div>
  );
};

export default ExperienceComponent;
