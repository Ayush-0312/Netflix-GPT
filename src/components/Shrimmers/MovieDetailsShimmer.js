const MovieDetailsShimmer = () => {
  return (
    <section className="max-w-5xl mx-auto mb-12 px-4 md:px-0 text-neutral-50 animate-fade-in">
      {/* SKELETON GRID */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* POSTER SKELETON */}
        <div className="w-48 md:w-60 h-72 md:h-96 rounded-lg shimmer"></div>

        {/* TEXT AREA SKELETON */}
        <div className="flex-1 space-y-4">
          <div className="h-8 w-3/4 rounded shimmer"></div>
          <div className="h-4 w-1/2 rounded shimmer"></div>

          <div className="h-4 w-2/3 rounded shimmer mt-4"></div>
          <div className="h-4 w-1/3 rounded shimmer"></div>

          <div className="h-4 w-5/6 rounded shimmer"></div>
          <div className="h-4 w-2/4 rounded shimmer"></div>
          <div className="h-4 w-4/5 rounded shimmer"></div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetailsShimmer;
