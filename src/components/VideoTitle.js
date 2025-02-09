import React from "react";
import { useDispatch } from "react-redux";
import { setMovieId, showMovieVideoPage } from "../utils/utils/moviesSlice";

const VideoTitle = ({ title, overview, movieId }) => {
  const dispatch = useDispatch();

  if (!movieId) return;

  const handleMovieClick = () => {
    dispatch(showMovieVideoPage());
    dispatch(setMovieId(movieId));
  };

  return (
    <div className="w-screen aspect-video pt-16 md:pt-60 px-5 md:px-16 text-white absolute bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold md:w-1/2"> {title}</h1>
      <p className="hidden md:inline-block py-5 text-lg w-1/3 text-gray-400">
        {overview}
      </p>
      <div>
        <button
          className="bg-gray-500 my-1 md:my-0 p-1 px-2 md:p-3 md:px-6 md:font-medium md:text-lg rounded-md bg-opacity-50 md:hover:bg-opacity-80"
          onClick={handleMovieClick}
        >
          {" "}
          ▶ Play
        </button>
        <button
          className="hidden md:inline-block bg-gray-500 mx-2 p-3 px-6 font-medium text-lg rounded-md bg-opacity-50 hover:bg-opacity-80"
          onClick={handleMovieClick}
        >
          {" "}
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
