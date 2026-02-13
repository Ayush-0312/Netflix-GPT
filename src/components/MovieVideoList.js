import { useState } from "react";

const MovieVideoList = ({ name, type, videoKey }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!name) return null;

  const thumbnail = `https://img.youtube.com/vi/${videoKey}/hqdefault.jpg`;

  return (
    <div className="bg-black/40 rounded-lg overflow-hidden shadow-lg border border-white/10">
      <div className="relative w-full h-60 md:h-64 cursor-pointer">
        {!isPlaying ? (
          <>
            <img
              src={thumbnail}
              alt={name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition hover:bg-black/50">
              <div
                onClick={() => setIsPlaying(true)}
                className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition"
              >
                <div className="w-0 h-0 border-l-[18px] border-l-white border-y-[12px] border-y-transparent ml-1"></div>
              </div>
            </div>
          </>
        ) : (
          <div className="w-full h-full animate-fade-in">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
              title={name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>

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
