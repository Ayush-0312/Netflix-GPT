import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/utils/languageConstants";
// import client from "../utils/utils/openai";
import { API_OPTIONS } from "../utils/utils/constants";
import { addGptMovieResult } from "../utils/utils/gptSlice";
import { GoogleGenAI } from "@google/genai";

const GptSearchBar = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const ai = new GoogleGenAI({
    apiKey: process.env.REACT_APP_GEMINI_KEY,
  });

  //search movie in TMDB database
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS,
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    const query = searchText?.current?.value?.trim();

    if (!query) {
      setError("Search is required");
      return;
    }

    setError("");
    setLoading(true);

    // make an API call to GPT API and get movie result

    const gptQuery =
      "Act as a movie Recommendation system and suggest some movies for the query:" +
      searchText?.current?.value +
      ". Only give me names of 5 movies including the name of the movie if avaliable, comma seperated like the examble result given ahead. Example Result: Gadar, Avengers, Sholay, Thor Ragnarok, Koi Mil Gaya";

    // const gptResult = await client.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-4o-mini",
    // });

    const gptResult = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [{ text: gptQuery }],
        },
      ],
    });
    // console.log(gptResult);

    const gptMovies =
      gptResult?.candidates[0]?.content?.parts[0]?.text.split(",");

    //console.log(gptResult.choices[0]?.message?.content);
    //Chupke Chupke, Gol Maal, Chhoti Si Baat, Pati Patni Aur Woh, Rang De Basanti
    // const gptMovies = gptResult.choices[0]?.message?.content.split(",");
    //console.log(gptMovies);
    //["Chupke Chupke", "Gol Maal", "Chhoti Si Baat", "Pati Patni Aur Woh", "Rang De Basanti"]

    //search movie in TMDB API
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    //[Promise, Promise, Promise, Promise, Promise]
    const tmdbResults = await Promise.all(promiseArray);
    //console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }),
    );

    setLoading(false);
  };

  return (
    <div className="w-full md:w-3/4 lg:w-1/2">
      <form
        className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-3 flex flex-col md:flex-row gap-3"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          onChange={() => setError("")}
          className={`flex-grow px-3 py-2 rounded-lg bg-neutral-900/70 text-neutral-50 placeholder-neutral-400 outline-none text-sm md:text-base ${error ? "border border-red-500" : ""}`}
          type="text"
          placeholder={lang[langKey]?.gptSearchPlaceholder}
        />

        <button
          className="px-4 py-2 bg-red-700 hover:bg-red-600 text-neutral-50 font-semibold rounded-lg flex items-center justify-center whitespace-nowrap text-sm md:text-base"
          onClick={handleGptSearchClick}
        >
          {loading ? (
            <div className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
          ) : (
            lang[langKey]?.search
          )}
        </button>
      </form>

      {error && <p className="text-red-500 text-sm mt-2 px-1">{error}</p>}
    </div>
  );
};

export default GptSearchBar;
