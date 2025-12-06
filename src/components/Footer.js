import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
//import { RiNetflixFill } from "react-icons/ri";
import { AVATAR, GITHUB, LINKEDIN, PORTFOLIO } from "../utils/utils/constants";

const Footer = () => {
  const handleAvatarClick = () => {
    window.open(PORTFOLIO, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="relative bottom-0 w-screen z-10 py-4 md:py-8 md:px-4 bg-black text-gray-400">
      <div className="container mx-auto flex justify-between items-center px-6">
        <p className="text-lg font-medium">CINEMIX</p>
        <div className="flex space-x-4">
          <img
            className="w-6 rounded-full cursor-pointer"
            src={AVATAR}
            alt="avatar"
            onClick={handleAvatarClick}
          />
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaGithub size={30} />
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaLinkedin size={30} />
          </a>
          {/* <a
            href={NETFLIX}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <RiNetflixFill size={20} />
          </a> */}
          {/* <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="##google"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="##google"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaXTwitter size={18} />
          </a> 
           <a
            href="https://www.youtube.com/@Netflix"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaYoutube size={18} />
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
