import { IMG_CDN_URL } from "../utils/utils/constants";
import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";
import MovieDetailsShimmer from "./Shrimmers/MovieDetailsShimmer";

const MovieDetails = () => {
  const { movieId } = useParams();
  const movieDetails = useMovieDetails(movieId);

  if (!movieDetails) return <MovieDetailsShimmer />;

  const {
    title,
    genres,
    overview,
    poster_path,
    release_date,
    runtime,
    vote_average,
    vote_count,
  } = movieDetails;

  return (
    <section className="max-w-5xl mx-auto mb-12 px-4 md:px-0">
      <div className="flex items-center flex-col md:flex-row gap-6 md:gap-10">
        <div className="md:w-1/3 flex justify-center md:justify-start">
          <img
            src={IMG_CDN_URL + poster_path}
            alt={title}
            className="w-52 md:w-64 rounded-lg shadow-xl"
          />
        </div>

        <div className="md:w-2/3 text-neutral-200 flex flex-col gap-3">
          <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>

          <p className="text-lg">
            ⭐ {vote_average}{" "}
            <span className="text-neutral-400 text-base">
              ({vote_count} reviews)
            </span>
          </p>

          <p className="text-base md:text-lg">
            <span className="font-semibold text-neutral-50">Genres:</span>{" "}
            {genres.map((g) => g.name).join(", ")}
          </p>

          <p className="text-base md:text-lg">
            <span className="font-semibold text-neutral-50">Runtime:</span>{" "}
            {runtime} min
          </p>

          <p className="text-base md:text-lg">
            <span className="font-semibold text-neutral-50">Release Date:</span>{" "}
            {release_date}
          </p>

          <p className="text-base md:text-lg">
            <span className="font-semibold text-neutral-50">Synopsis:</span>{" "}
            {overview}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
