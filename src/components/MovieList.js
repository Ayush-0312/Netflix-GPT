import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  return (
    <div className="mb-6 last:mb-0">
      <h1 className="text-neutral-100 text-xl md:text-3xl font-bold px-4 md:px-10 mb-4">
        {title}
      </h1>

      <div className="flex gap-2 md:gap-4 overflow-x-auto px-4 md:px-10 pb-2 scrollbar-hidden">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movieId={movie.id}
            posterPath={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
