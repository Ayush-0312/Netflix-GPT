const SplashScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-700">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-4xl md:text-6xl font-bold text-red-600 tracking-wide">
          CINEMIX
        </h1>

        <div className="w-40 md:w-56 h-1 bg-neutral-800 overflow-hidden rounded">
          <div className="h-full w-1/2 bg-red-600 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
