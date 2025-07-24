import React from "react";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/utils/constants";
import useMovieDetails from "../hooks/useMovieDetails";
import useMovieVideos from "../hooks/useMovieVideos";

const MovieDetails = () => {
  const movieId = useSelector((store) => store?.movies?.movieId);
  const movieDetails = useSelector((store) => store?.movies?.movieDetails);

  useMovieDetails(movieId);
  useMovieVideos(movieId);

  if (!movieDetails) return;

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

  const genresName = genres.map((genre) => genre.name).join(", ");

  return (
    //w-[98%] md:w-9/12 mx-auto right-0 left-0 bg-black bg-opacity-90 text-white md:grid md:grid-cols-12
    <div className="pt-[35%] md:pt-[9%] text-white">
      <div className="md:w-9/12 bg-black bg-opacity-90 mx-auto right-0 left-0 md:grid md:grid-cols-12">
        <div className="md:m-4 md:col-span-3">
          <img
            className="w-80 pt-4 md:py-0 md:mx-0 mx-auto right-0 left-0"
            alt="Movie Poster"
            src={IMG_CDN_URL + poster_path}
          />
        </div>
        <div className="my-4 m-4 md:ml-1 md:col-span-9">
          <h1 className="text-4xl font-medium pb-1">{title} </h1>
          <h2 className="text-base py-1 text-zinc-400">
            {"⭐"}
            {vote_average} ({vote_count})
          </h2>
          <h2 className="text-base py-1 text-zinc-400">
            <span className="text-lg font-medium text-zinc-300">Genres - </span>
            {genresName}
          </h2>
          <h2 className="text-base py-1 text-zinc-400">
            <span className="text-lg font-medium text-zinc-300">
              Overview -{" "}
            </span>
            {overview}{" "}
          </h2>
          <h2 className="text-base py-1 text-zinc-400">
            <span className="text-lg font-medium text-zinc-300">
              Runtime -{" "}
            </span>
            {runtime ? runtime : "112"} minutes
          </h2>
          <h2 className="text-base py-1 pb-4 text-zinc-400">
            <span className="text-lg font-medium text-zinc-300">
              Release date -{" "}
            </span>
            {release_date}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
