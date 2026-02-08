import { BG_IMG } from "../utils/utils/constants";
import MovieDetails from "./MovieDetails";
import MovieVideos from "./MovieVideos";

const MoviePage = () => {
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
        <MovieDetails />
        <MovieVideos />
      </div>
    </>
  );
};

export default MoviePage;
