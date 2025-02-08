import React from "react";
import { BG_IMG, IMG_CDN_URL } from "../utils/utils/constants";
import { useSelector } from "react-redux";
import useMovieDetails from "../hooks/useMovieDetails";
import useMovieVideos from "../hooks/useMovieVideos";
import MovieVideoList from "./MovieVideoList";

const MovieVideos = () => {
  const movieId = useSelector((store) => store?.movies?.movieId);
  const movieDetails = useSelector((store) => store?.movies?.movieDetails);
  const movieVideo = useSelector((store) => store?.movies?.movieVideos) || [];

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
    <div className="absolute">
      <div className="fixed w-screen -z-10">
        <img src={BG_IMG} alt="bg" />
      </div>
      <div className="relative w-9/12 mt-28 mx-auto right-0 left-0 bg-black bg-opacity-90 text-white grid grid-cols-12">
        <div className="m-4 col-span-3">
          <img
            className=""
            alt="Movie Poster"
            src={IMG_CDN_URL + poster_path}
          />
        </div>
        <div className="my-4 ml-1 mr-4 col-span-9">
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
            {runtime} minutes
          </h2>
          <h2 className="text-base py-1 text-zinc-400">
            <span className="text-lg font-medium text-zinc-300">
              Release date -{" "}
            </span>
            {release_date}
          </h2>
        </div>
      </div>
      <div className=" bg-black bg-opacity-90 text-white w-9/12 my-10 mx-auto left-0 right-0">
        {movieVideo.length > 0 ? (
          movieVideo.map((movie, index) => (
            <MovieVideoList
              key={index}
              name={movie?.name}
              type={movie?.type}
              videoKey={movie?.key}
            />
          ))
        ) : (
          <p className="text-center py-4">No videos available</p>
        )}
      </div>
    </div>
  );
};

export default MovieVideos;
