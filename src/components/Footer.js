import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { AVATAR, GITHUB, LINKEDIN, PORTFOLIO } from "../utils/utils/constants";

const Footer = () => {
  const handleAvatarClick = () => {
    window.open(PORTFOLIO, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="w-full bg-black py-6 md:py-8 text-neutral-400">
      <div className="max-w-8xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-center justify-between gap-4">
        <p className="text-lg font-semibold tracking-wide text-neutral-200">
          CINEMIX
        </p>

        <p className="text-xs md:text-sm text-neutral-500">
          © {new Date().getFullYear()} CINEMIX — All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <img
            className="w-8 h-8 rounded-full cursor-pointer hover:opacity-80 transition"
            src={AVATAR}
            alt="avatar"
            onClick={handleAvatarClick}
          />

          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-50 transition"
          >
            <FaGithub size={22} />
          </a>

          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-50 transition"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
