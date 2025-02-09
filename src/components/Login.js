import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/utils/userSlice";
import { BG_IMG, USER_AVATAR } from "../utils/utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

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
            photoURL: USER_AVATAR,
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
    <div className="w-screen">
      <Header />
      <div className="absolute ">
        <img
          className="h-screen object-cover md:w-screen"
          src={BG_IMG}
          alt="bg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[95%] md:w-3/12 absolute p-6 md:p-12 bg-black bg-opacity-75 mt-[50%] md:mt-24 mx-auto right-0 left-0 text-white rounded-lg"
      >
        <h1 className="font-bold text-2xl md:text-3xl py-2 md:py-4">
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
          className="p-2 my-3 md:my-5 w-full font-semibold bg-red-700 rounded-md"
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
