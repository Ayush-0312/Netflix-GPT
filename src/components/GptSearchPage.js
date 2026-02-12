import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMG } from "../utils/utils/constants";

const GptSearchPage = () => {
  return (
    <div
      className="min-h-[100svh] text-neutral-50 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${BG_IMG})` }}
    >
      <div className="min-h-[100svh] bg-black/70 backdrop-blur-sm">
        <div className="pt-32 px-4 pb-20 flex flex-col items-center">
          <GptSearchBar />
          <GptMovieSuggestions />
        </div>
      </div>
    </div>
  );
};

export default GptSearchPage;
