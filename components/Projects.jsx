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
      name: "Small E-commerce",
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
