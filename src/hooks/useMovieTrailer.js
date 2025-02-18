import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/utils/constants";
import { addTrailerVideo } from "../utils/utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMoviesVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter(
      (video) => video?.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    if (!trailerVideo) getMoviesVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useMovieTrailer;
