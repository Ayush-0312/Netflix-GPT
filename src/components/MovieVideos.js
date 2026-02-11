import MovieVideoList from "./MovieVideoList";
import { useParams } from "react-router-dom";
import useMovieVideos from "../hooks/useMovieVideos";
import VideoListShimmer from "./Shrimmers/VideoListShimmer";

const MovieVideos = () => {
  const { movieId } = useParams();
  const videos = useMovieVideos(movieId);

  return (
    <section className="max-w-6xl mx-auto mt-14 px-4 md:px-0">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-neutral-50">
        Videos
      </h2>

      {!videos && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <VideoListShimmer />
          <VideoListShimmer />
          <VideoListShimmer />
          <VideoListShimmer />
        </div>
      )}

      {videos && videos.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((v) => (
            <MovieVideoList
              key={v.key}
              name={v.name}
              type={v.type}
              videoKey={v.key}
            />
          ))}
        </div>
      )}

      {videos && videos.length === 0 && (
        <p className="text-neutral-400">No videos available</p>
      )}
    </section>
  );
};

export default MovieVideos;
