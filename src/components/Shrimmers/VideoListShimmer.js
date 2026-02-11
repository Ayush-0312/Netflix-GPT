const VideoListShimmer = () => {
  return (
    <div className="bg-black/40 rounded-lg overflow-hidden shadow-lg border border-white/10 animate-fade-in">
      {/* VIDEO SKELETON */}
      <div className="w-full h-60 md:h-64 shimmer"></div>

      {/* TEXT SKELETON */}
      <div className="p-4 space-y-3">
        <div className="h-6 md:h-7 w-3/4 rounded shimmer"></div>
        <div className="h-4 w-1/3 rounded shimmer"></div>
      </div>
    </div>
  );
};

export default VideoListShimmer;
