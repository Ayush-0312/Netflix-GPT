import { useEffect } from "react";
import { API_OPTIONS } from "../utils/utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieDetailsToStore } from "../utils/utils/moviesSlice";

const useMovieDetails = (movieId) => {
  const dispatch = useDispatch();

  const cachedData = useSelector(
    (store) => store.movies.movieDetailsMap[movieId],
  );

  useEffect(() => {
    if (!movieId) return;

    if (cachedData) return;

    async function fetchDetails() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        API_OPTIONS,
      );
      const data = await res.json();

      dispatch(addMovieDetailsToStore({ movieId, details: data }));
    }

    fetchDetails();
  }, [movieId, cachedData, dispatch]);

  return cachedData;
};

export default useMovieDetails;
