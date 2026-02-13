import React from "react";
import { IMG_CDN_URL } from "../utils/utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ posterPath, movieId }) => {
  if (!posterPath) return null;

  return (
    <Link
      to={`/movie/${movieId}`}
      className="block w-28 md:w-40 lg:w-48 flex-shrink-0 transform transition-transform duration-300 hover:scale-[1.03]"
    >
      <img
        alt="Movie Poster"
        src={IMG_CDN_URL + posterPath}
        className="w-full h-full object-cover rounded-sm transition-opacity duration-300"
      />
    </Link>
  );
};

export default React.memo(MovieCard);
