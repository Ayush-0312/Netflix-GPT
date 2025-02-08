import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";
import MovieVideos from "./MovieVideos";
import Footer from "./Footer";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const showMovieVideoPage = useSelector(
    (store) => store.movies.movieVideoPage
  );

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  if (showMovieVideoPage)
    return (
      <>
        <Header />
        <MovieVideos />
      </>
    );

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
          <Footer />
        </>
      )}

      {/* 
         main container
           - video bg
           - video title
         secondary container
           - movies list * n
           - cards * n 
      */}
    </div>
  );
};

export default Browse;
