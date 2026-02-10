const MovieVideoList = ({ name, type, videoKey }) => {
  if (!name) return null;

  return (
    <div className="bg-black/40 rounded-lg overflow-hidden shadow-lg border border-white/10">
      <iframe
        className="w-full h-60 md:h-64"
        src={`https://www.youtube.com/embed/${videoKey}?rel=0`}
        title={name}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <div className="p-4">
        <h1 className="text-lg md:text-xl font-semibold text-neutral-50 leading-tight">
          {name}
        </h1>

        <p className="text-neutral-400 mt-1 text-sm md:text-base">{type}</p>
      </div>
    </div>
  );
};

export default MovieVideoList;
