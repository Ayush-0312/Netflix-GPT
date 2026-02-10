import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMG } from "../utils/utils/constants";

const GptSearchPage = () => {
  return (
    <div className="relative min-h-screen text-neutral-50">
      <div className="fixed inset-0 -z-10">
        <img className="w-full h-full object-cover" src={BG_IMG} alt="bg" />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>

      <div className="pt-40 md:pt-32 flex flex-col items-center px-4">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearchPage;
