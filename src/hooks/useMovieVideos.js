import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/utils/constants";
import { addMovieVideosToStore } from "../utils/utils/moviesSlice";
import { useEffect } from "react";

const useMovieVideos = (movieId) => {
  const dispatch = useDispatch();

  const cachedVideos = useSelector(
    (store) => store.movies.movieVideosMap[movieId],
  );

  useEffect(() => {
    if (!movieId) return;

    if (cachedVideos) return;

    async function fetchVideos() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS,
      );
      const data = await res.json();

      dispatch(
        addMovieVideosToStore({
          movieId,
          videos: data?.results || [],
        }),
      );
    }

    fetchVideos();
  }, [movieId, cachedVideos, dispatch]);

  return cachedVideos;
};

export default useMovieVideos;
