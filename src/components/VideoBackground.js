import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { IMG_CDN_URL } from "../utils/utils/constants";

const VideoBackground = ({ movieId, backdropPath }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);

  const trailerKey = trailerVideo?.key;

  return (
    <div className="w-full h-full absolute inset-0 overflow-hidden">
      <img
        src={IMG_CDN_URL + backdropPath}
        alt="movie backdrop"
        className="object-cover w-full h-full md:hidden"
      />

      {trailerKey && (
        <iframe
          className="hidden md:block w-full h-full object-cover"
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerKey}`}
          title="Movie Trailer"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
    </div>
  );
};

export default VideoBackground;
