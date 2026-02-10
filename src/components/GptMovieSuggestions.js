import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieNames, movieResults } = gpt;

  if (!movieNames) return null;

  return (
    <div className="w-full md:w-11/12 bg-black/50 backdrop-blur-lg border border-white/10 rounded-xl mt-10 mb-20 py-3 px-1 md:p-8">
      {movieNames.map((movieName, index) => (
        <div key={movieName}>
          <MovieList title={movieName} movies={movieResults[index]} />
        </div>
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
