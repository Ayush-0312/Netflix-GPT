import { IMG_CDN_URL } from "../utils/utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ posterPath, movieId }) => {
  if (!posterPath) return null;

  return (
    <Link
      to={`/movie/${movieId}`}
      className="w-36 md:w-52 m-1 md:m-2 pr-1 md:pr-2 cursor-pointer md:hover:scale-105 transform transition duration-200 ease-in-out"
    >
      <img alt="Movie Poster" src={IMG_CDN_URL + posterPath} />
    </Link>
  );
};

export default MovieCard;
