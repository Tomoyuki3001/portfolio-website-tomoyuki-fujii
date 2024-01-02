import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="text-white bg-[#2d363a] w-full flex justify-center items-center">
      <div>
        <div className="flex justify-around mt-8 mb-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/tomoyuki-fujii-376616251/"
          >
            <div>
              <FaLinkedinIn size={35} />
            </div>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Tomoyuki3001"
          >
            <div>
              <FaGithub size={35} />
            </div>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:mjr01300828@gmail.com"
          >
            <div>
              <BiEnvelope size={35} />
            </div>
          </a>
        </div>
        <div className="mb-4">
          <span className="text-gray-400 leading-10">
            Tomoyuki Fujii &copy; 2024
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
