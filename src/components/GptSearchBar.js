import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/utils/languageConstants";
import client from "../utils/utils/openai";
import { API_OPTIONS } from "../utils/utils/constants";
import { addGptMovieResult } from "../utils/utils/gptSlice";

const GptSearchBar = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  //search movie in TMDB database
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    setLoading(true);

    // make an API call to GPT API and get movie result

    const gptQuery =
      "Act as a movie Recommendation system and suggest some movies for the query:" +
      searchText?.current?.value +
      ". Only give me names of 5 movies, comma seperated like the examble result given ahead. Example Result: Gadar, Avengers, Sholay, Thor Ragnarok, Koi Mil Gaya";

    const gptResult = await client.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-4o-mini",
    });

    //console.log(gptResult.choices[0]?.message?.content);
    //Chupke Chupke, Gol Maal, Chhoti Si Baat, Pati Patni Aur Woh, Rang De Basanti
    const gptMovies = gptResult.choices[0]?.message?.content.split(",");
    //console.log(gptMovies);
    //["Chupke Chupke", "Gol Maal", "Chhoti Si Baat", "Pati Patni Aur Woh", "Rang De Basanti"]

    //search movie in TMDB API
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    //[Promise, Promise, Promise, Promise, Promise]
    const tmdbResults = await Promise.all(promiseArray);
    //console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );

    setLoading(false);
  };

  return (
    <div className="pt-[45%] md:pt-[9%] md:pb-4 flex justify-center">
      <form
        className=" bg-black bg-opacity-90 w-[98%] md:w-1/2 grid grid-cols-12 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className=" p-3 my-3 mx-3 col-span-9 rounded-md"
          type="text"
          placeholder={lang[langKey]?.gptSearchPlaceholder}
        />
        <button
          className="p-3 my-3 mr-3 font-semibold bg-red-700 hover:bg-red-600 text-white col-span-3 rounded-md"
          onClick={handleGptSearchClick}
        >
          {loading ? (
            <div className="w-6 h-6 border-t-4 border-b-4 border-red-600 border-solid rounded-full animate-spin"></div>
          ) : (
            lang[langKey]?.search
          )}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
