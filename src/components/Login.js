import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    const message = checkValidData(
      email.current.value,
      password.current.value,
      isSignInForm ? undefined : name.current.value
    );
    setErrorMessage(message);

    if (message) return; //if message is present return from here

    // sign in / sign up logic

    if (!isSignInForm) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
                      dispatch(
                        addUser({
                          uid: uid,
                          email: email,
                          displayName: displayName,
                          photoURL: photoURL,
                        })
                      );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(
            "Invalid Email/Password...   " + errorCode + " " + errorMessage
          );
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          // eslint-disable-next-line no-unused-vars
          const user = userCredential.user;
          // ...
          
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(
            "Invalid Email/Password...   " + errorCode + " " + errorMessage
          );
        });
    }
  };

  return (
    <div className="w-screen ">
      <Header />
      <div className="absolute w-screen ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_large.jpg"
          alt="bg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black bg-opacity-75 mt-24 mx-auto right-0 left-0 text-white rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-3 my-2 w-full bg-black bg-opacity-60 rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 my-2 w-full bg-black bg-opacity-60 rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-2 w-full bg-black bg-opacity-60 rounded-md"
        />
        <p className="text-red-500 font-medium">{errorMessage}</p>
        <button
          className="p-2 my-5 w-full font-semibold bg-red-700 rounded-md"
          onClick={handleButtonClick}
        >
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div>
          <p className="text-gray-300">
            {isSignInForm ? "New to Netflix? " : "Already a user? "}{" "}
            <span
              className="font-bold cursor-pointer hover:underline text-white"
              onClick={toggleSignInForm}
            >
              {isSignInForm ? "Sign up now." : "Sign in now."}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
