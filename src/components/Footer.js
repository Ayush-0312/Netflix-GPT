import React from "react";
import { FaGithub } from "react-icons/fa6";
import { RiNetflixFill } from "react-icons/ri";
import { AVATAR, GITHUB, NETFLIX } from "../utils/utils/constants";

const Footer = () => {
  return (
    <footer className="relative bottom-0 w-screen z-10 py-4 md:py-8 md:px-4 bg-black text-gray-400">
      <div className="container mx-auto flex justify-between items-center px-6">
        <p className="text-lg font-medium">NETFLIX-GPT</p>
        <div className="flex space-x-4">
          <img className="w-6 rounded-xl" src={AVATAR} alt="avatar" />
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={NETFLIX}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <RiNetflixFill size={20} />
          </a>
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
