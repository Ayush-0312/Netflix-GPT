import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;

  return (
    <div className="px-4 md:px-6">
      <h1 className="py-2 pl-2 md:py-4 md:pl-10 text-lg md:text-3xl font-medium md:font-semibold text-white">
        {" "}
        {title}
      </h1>
      <div className="flex overflow-x-auto scrollbar-hidden pl-2 md:pl-10 snap-x snap-mandatory">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard
              key={movie?.id}
              posterPath={movie?.poster_path}
              movieId={movie?.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
