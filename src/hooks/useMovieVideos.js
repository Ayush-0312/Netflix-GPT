import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/utils/constants";
import { addMovieVideos } from "../utils/utils/moviesSlice";
import { useEffect } from "react";

const useMovieVideos = (movieId) => {
  const dispatch = useDispatch();

  const getMoviesVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addMovieVideos(json?.results));
  };

  useEffect(() => {
    getMoviesVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useMovieVideos;
