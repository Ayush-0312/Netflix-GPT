import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import Footer from "./Footer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <MainContainer />
      <SecondaryContainer />
      <Footer />
    </div>
  );
};

export default Browse;
