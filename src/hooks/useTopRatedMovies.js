import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/utils/constants";
import { addTopRatedMovies } from "../utils/utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const nowPlaying = useSelector((store) => store.movies.nowPlayingMovies);
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  useEffect(() => {
    if (!nowPlaying) return;
    if (topRatedMovies) return;

    const getTopRatedMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        API_OPTIONS,
      );

      const json = await data.json();
      dispatch(addTopRatedMovies(json.results));
    };

    getTopRatedMovies();
  }, [dispatch, nowPlaying, topRatedMovies]);
};

export default useTopRatedMovies;
