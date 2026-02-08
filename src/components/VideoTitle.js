import { useNavigate } from "react-router-dom";

const VideoTitle = ({ title, overview, movieId }) => {
  const navigate = useNavigate();

  if (!movieId) return;

  return (
    <div className="w-screen aspect-video pt-16 md:pt-60 px-5 md:px-16 text-white absolute bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold md:w-1/2"> {title}</h1>
      <p className="hidden md:inline-block py-5 text-lg w-1/3 text-gray-400">
        {overview}
      </p>
      <div>
        <button
          className="hidden md:inline-block bg-gray-500 p-3 px-6 font-medium text-lg rounded-md bg-opacity-50 hover:bg-opacity-80"
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
