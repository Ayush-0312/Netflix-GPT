import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/utils/constants";
import { addUpcomingMovies } from "../utils/utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  // fetch data from TMDB API and update store
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useUpcomingMovies;
