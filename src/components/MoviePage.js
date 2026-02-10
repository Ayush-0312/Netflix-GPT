import { BG_IMG } from "../utils/utils/constants";
import MovieDetails from "./MovieDetails";
import MovieVideos from "./MovieVideos";

const MoviePage = () => {
  return (
    <div className="relative min-h-screen text-neutral-50">
      <div className="fixed inset-0 -z-10">
        <img
          src={BG_IMG}
          className="w-full h-full object-cover"
          alt="movie backdrop"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="pt-[20vh] md:px-20 pb-20">
        <MovieDetails />
        <MovieVideos />
      </div>
    </div>
  );
};

export default MoviePage;
