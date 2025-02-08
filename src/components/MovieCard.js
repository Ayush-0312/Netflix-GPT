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
      className="m-2 w-52 pr-2 cursor-pointer hover:scale-105 transform transition duration-200 ease-in-out"
      onClick={handleMovieClick}
    >
      <img alt="Movie Poster" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
