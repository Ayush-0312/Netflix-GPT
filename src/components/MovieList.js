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
      <div className="flex overflow-x-scroll scrollbar-hidden pl-10">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
