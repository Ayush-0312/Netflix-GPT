import MovieList from "./MovieList";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const nowPlaying = useSelector((store) => store.movies?.nowPlayingMovies);
  const popular = useSelector((store) => store.movies?.popularMovies);
  const topRated = useSelector((store) => store.movies?.topRatedMovies);
  const upcoming = useSelector((store) => store.movies?.upcomingMovies);

  return (
    <section className="bg-black mt-[-6vh] relative z-20">
      <MovieList title="Now Playing" movies={nowPlaying} />
      <MovieList title="Popular" movies={popular} />
      <MovieList title="Top Rated" movies={topRated} />
      <MovieList title="Upcoming" movies={upcoming} />
    </section>
  );
};

export default SecondaryContainer;
