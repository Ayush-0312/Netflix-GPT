import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMG } from "../utils/utils/constants";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed w-screen -z-10">
        <img
          className="h-screen object-cover md:w-screen"
          src={BG_IMG}
          alt="bg"
        />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearchPage;
