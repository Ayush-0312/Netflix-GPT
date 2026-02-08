import MovieVideoList from "./MovieVideoList";
import { useParams } from "react-router-dom";
import useMovieVideos from "../hooks/useMovieVideos";

const MovieVideos = () => {
  const { movieId } = useParams();
  const videos = useMovieVideos(movieId);

  return (
    <div>
      <div className=" bg-black bg-opacity-90 text-white md:w-9/12 md:my-10 mx-auto left-0 right-0">
        {videos?.length ? (
          videos.map((movie, index) => (
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
