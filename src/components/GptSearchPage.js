import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMG } from "../utils/utils/constants";

const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute w-screen -z-10">
              <img src={BG_IMG} alt="bg" />
            </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchPage;
