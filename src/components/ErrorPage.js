import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center text-neutral-50 px-6">
      <h1 className="text-6xl md:text-7xl font-extrabold text-red-600 drop-shadow-lg mb-4">
        404
      </h1>

      <p className="text-xl md:text-2xl text-neutral-300 mb-2">
        Page Not Found
      </p>

      <p className="text-neutral-500 text-center max-w-md mb-8">
        The page you’re trying to reach doesn’t exist or may have been moved.
      </p>

      <Link
        to="/browse"
        className="bg-red-700 hover:bg-red-600 px-6 py-3 rounded-lg font-semibold text-neutral-50 transition shadow-lg"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
