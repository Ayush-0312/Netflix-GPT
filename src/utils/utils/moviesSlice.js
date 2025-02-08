import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    movieVideos: null,
    movieVideoPage: false,
    movieId: null,
    movieDetails: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addMovieVideos: (state, action) => {
      state.movieVideos = action.payload;
    },
    showMovieVideoPage: (state, action) => {
      state.movieVideoPage = true;
    },
    hideMovieVideoPage: (state, action) => {
      state.movieVideoPage = false;
    },
    setMovieId: (state, action) => {
      state.movieId = action.payload;
    },
    addMovieDetails: (state, action) => {
      state.movieDetails = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addMovieVideos,
  showMovieVideoPage,
  hideMovieVideoPage,
  setMovieId,
  addMovieDetails,
} = moviesSlice.actions;

export default moviesSlice.reducer;
