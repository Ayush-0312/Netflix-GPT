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
    <div className="w-screen aspect-video pt-60 px-16 text-white absolute bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold w-1/2"> {title}</h1>
      <p className="py-5 text-lg w-1/3 text-gray-400">{overview}</p>
      <div>
        <button
          className="bg-gray-500 p-3 px-6 font-medium text-lg rounded-md bg-opacity-50 hover:bg-opacity-80"
          onClick={handleMovieClick}
        >
          {" "}
          ▶ Play
        </button>
        <button
          className="bg-gray-500 mx-2 p-3 px-6 font-medium text-lg rounded-md bg-opacity-50 hover:bg-opacity-80"
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
