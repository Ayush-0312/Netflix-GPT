import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/utils/constants";
import { addUpcomingMovies } from "../utils/utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const nowPlaying = useSelector((store) => store.movies.nowPlayingMovies);
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  useEffect(() => {
    if (!nowPlaying) return;
    if (upcomingMovies) return;

    const getUpcomingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        API_OPTIONS,
      );

      const json = await data.json();
      dispatch(addUpcomingMovies(json.results));
    };

    getUpcomingMovies();
  }, [dispatch, nowPlaying, upcomingMovies]);
};

export default useUpcomingMovies;
