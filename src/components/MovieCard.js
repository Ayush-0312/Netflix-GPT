import React from "react";
import { IMG_CDN_URL } from "../utils/utils/constants";
import { useDispatch } from "react-redux";
import { setMovieId, showMovieVideoPage } from "../utils/utils/moviesSlice";

const MovieCard = ({ posterPath, movieId }) => {
  const dispatch = useDispatch();

  if (!posterPath) return null;

  const handleMovieClick = () => {
    dispatch(showMovieVideoPage());
    dispatch(setMovieId(movieId));
  };

  return (
    <div
      className="w-36 md:w-52 m-1 md:m-2 pr-1 md:pr-2 cursor-pointer md:hover:scale-105 transform transition duration-200 ease-in-out"
      onClick={handleMovieClick}
    >
      <img alt="Movie Poster" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
