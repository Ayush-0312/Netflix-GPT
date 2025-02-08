import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;

  return (
    <div className="px-6 ">
      <h1 className="py-4  pl-10 text-3xl font-semibold text-white">
        {" "}
        {title}
      </h1>
      <div className="flex overflow-x-auto scrollbar-hidden pl-10 snap-x snap-mandatory">
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
