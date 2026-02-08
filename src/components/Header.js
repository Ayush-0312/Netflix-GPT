import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../utils/utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/utils/constants";
import { changeLanguage } from "../utils/utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        if (location.pathname === "/") {
          navigate("/browse");
        }
      } else {
        // User is signed out
        dispatch(removeUser());
        if (location.pathname !== "/") {
          navigate("/");
        }
      }
    });

    return () => unsubscribe();
  }, [dispatch, location.pathname, navigate]);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleLogoClick = () => {
    navigate("/browse");
  };

  const isAiPage = location.pathname.startsWith("/ai");

  return (
    <div className="absolute w-screen px-12 py-3 md:py-4 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img
        className="h-16 cursor-pointer mx-auto md:mx-0"
        src={LOGO}
        alt="logo"
        onClick={handleLogoClick}
      />
      {user && (
        <div className="flex justify-evenly md:px-12 py-1 md:py-4">
          {isAiPage && (
            <select
              className="px-2 py-1 my-2 cursor-pointer bg-gray-900 text-white rounded-md"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang?.identifier} value={lang?.identifier}>
                  {lang?.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="px-3 py-1 mx-4 my-2 bg-purple-700 text-white font-semibold rounded-md hover:bg-purple-800"
            onClick={() => navigate(isAiPage ? "/browse" : "/ai")}
          >
            {isAiPage ? "Home" : "AI Search"}
          </button>

          <img
            className="w-0 h-0 md:w-10 md:h-10 mt-1 md:rounded-none rounded-md"
            src={user?.photoURL}
            alt="user-icon"
          />
          <button
            onClick={handleSignOut}
            className="md:px-2 font-bold text-white hover:underline"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
