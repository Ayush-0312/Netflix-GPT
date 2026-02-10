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
  const isAiPage = location.pathname === "/ai";

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

  return (
    <div className="fixed top-0 left-0 w-full z-40 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm px-2 md:px-12 py-2 flex items-center justify-between">
      <img
        src={LOGO}
        alt="logo"
        loading="lazy"
        className="h-10 md:h-16 cursor-pointer select-none"
        onClick={handleLogoClick}
      />
      {user && (
        <div className="flex items-center gap-3 md:gap-6">
          {isAiPage && (
            <select
              className="px-3 py-1 text-sm bg-black/70 text-neutral-50 rounded border border-white/20 outline-none cursor-pointer hover:bg-black/90 transition"
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
            className=" px-4 py-1.5 md:px-6 md:py-2 rounded-md text-sm md:text-base bg-red-600 hover:bg-red-700 active:scale-95 font-semibold text-neutral-50 transition"
            onClick={() => navigate(isAiPage ? "/browse" : "/ai")}
          >
            {isAiPage ? "Home" : "AI Search"}
          </button>

          <img
            className="hidden md:block w-10 h-10 rounded-md object-cover border border-white/30"
            src={user?.photoURL}
            alt="user-icon"
          />
          <button
            onClick={handleSignOut}
            className="text-neutral-50 text-sm md:text-base font-medium hover:underline hover:text-gray-200 transition"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
