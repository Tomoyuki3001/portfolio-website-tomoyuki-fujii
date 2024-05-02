import Image from "next/image";

const ExperienceComponent = ({ experience }) => {
  return (
    <div className="p-6 border-solid border border-gray-400 text-center">
      <div className="m-auto w-20 flex flex-col items-center">
        <Image src={experience.image} alt="/" />
      </div>
      <h2 className="text-lg mb-3">{experience.title}</h2>
      <a
        href={experience.url}
        target="_blank"
        rel="noreferrer"
        className="text-md md:text-xl  text-[#339AF0]"
      >
        {experience.name}
      </a>
      <h3 className="text-sm md:text-md my-2">{experience.term}</h3>
      <h3 className="text-sm md:text-md mb-1">{experience.skills}</h3>
    </div>
  );
};

export default ExperienceComponent;
