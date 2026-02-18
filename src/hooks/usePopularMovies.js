import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/utils/constants";
import { addPopularMovies } from "../utils/utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const nowPlaying = useSelector((store) => store.movies.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  useEffect(() => {
    if (!nowPlaying) return;
    if (popularMovies) return;

    const getPopularMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTIONS,
      );

      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    };

    getPopularMovies();
  }, [nowPlaying, popularMovies, dispatch]);
};

export default usePopularMovies;
