import React from "react";
import { BG_IMG } from "../utils/utils/constants";
import { useSelector } from "react-redux";
import MovieVideoList from "./MovieVideoList";
import MovieDetails from "./MovieDetails";

const MovieVideos = () => {
  const movieVideo = useSelector((store) => store?.movies?.movieVideos) || [];

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
        <div className=" bg-black bg-opacity-90 text-white md:w-9/12 md:my-10 mx-auto left-0 right-0">
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
    </>
  );
};

export default MovieVideos;
