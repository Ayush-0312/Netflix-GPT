import { useNavigate } from "react-router-dom";

const VideoTitle = ({ title, overview, movieId }) => {
  const navigate = useNavigate();

  if (!movieId) return null;

  return (
    <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-16 pb-24 md:pb-32 text-neutral-50 max-w-2xl">
      <h1 className="text-3xl md:text-6xl font-extrabold drop-shadow-xl leading-tight">
        {title}
      </h1>
      <p className="hidden md:block text-lg mt-4 text-gray-200">{overview}</p>

      <div className="flex mt-6 gap-3">
        <button
          className="bg-gray-500 bg-opacity-60 text-neutral-50 font-semibold
            px-6 py-2 md:px-8 md:py-3 rounded-md
            text-sm md:text-lg
            hover:bg-opacity-80 transition"
          onClick={() => navigate(`/movie/${movieId}`)}
        >
          {" "}
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
