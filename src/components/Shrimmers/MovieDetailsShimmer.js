const MovieDetailsShimmer = () => {
  return (
    <section className="max-w-5xl mx-auto mb-12 px-4 md:px-0 animate-fade-in">
      <div className="flex items-center flex-col md:flex-row gap-6 md:gap-10">
        {/* POSTER WRAPPER */}
        <div className="md:w-1/3 flex justify-center md:justify-start">
          <div className="w-52 md:w-64 h-[312px] md:h-[384px] rounded-lg shimmer"></div>
        </div>

        {/* TEXT WRAPPER */}
        <div className="md:w-2/3 flex flex-col gap-3">
          {/* Title */}
          <div className="h-8 md:h-10 w-3/4 rounded shimmer"></div>

          {/* Rating */}
          <div className="h-5 w-1/3 rounded shimmer"></div>

          {/* Genres */}
          <div className="h-5 w-2/3 rounded shimmer"></div>

          {/* Runtime */}
          <div className="h-5 w-1/4 rounded shimmer"></div>

          {/* Release */}
          <div className="h-5 w-1/3 rounded shimmer"></div>

          {/* Synopsis (multiple lines) */}
          <div className="space-y-2 mt-2">
            <div className="h-4 w-full rounded shimmer"></div>
            <div className="h-4 w-5/6 rounded shimmer"></div>
            <div className="h-4 w-4/5 rounded shimmer"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetailsShimmer;
