import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[0];
  const { original_title, overview, id, backdrop_path } = mainMovie;

  return (
    <div className="relative w-full h-[80vh] md:h-[95vh] bg-black">
      <VideoBackground movieId={id} backdropPath={backdrop_path} />
      <VideoTitle title={original_title} overview={overview} movieId={id} />
    </div>
  );
};

export default MainContainer;
