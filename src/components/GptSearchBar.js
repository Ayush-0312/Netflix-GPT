import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[13%] flex justify-center">
      <form className=" bg-black bg-opacity-90 w-1/2 grid grid-cols-12 rounded-md">
        <input
          className=" p-3 my-3 mx-3 col-span-9 rounded-md"
          type="text"
          placeholder={lang[langKey]?.gptSearchPlaceholder}
        />
        <button className="p-3 my-3 mr-3 font-semibold bg-red-700 hover:bg-red-600 text-white col-span-3 rounded-md">
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
