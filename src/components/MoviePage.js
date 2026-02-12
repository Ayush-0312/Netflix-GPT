import { BG_IMG } from "../utils/utils/constants";
import MovieDetails from "./MovieDetails";
import MovieVideos from "./MovieVideos";

const MoviePage = () => {
  return (
    <div
      className="min-h-[100svh] text-neutral-50 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${BG_IMG})` }}
    >
      <div className="min-h-[100svh] bg-black/70">
        <div className="pt-[20vh] md:px-20 px-4 pb-20">
          <MovieDetails />
          <MovieVideos />
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
