import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_large.jpg"
          alt="bg"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black bg-opacity-75 mt-24 mx-auto right-0 left-0 text-white rounded-lg">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-3 my-2 w-full bg-black bg-opacity-60 rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-2 w-full bg-black bg-opacity-60 rounded-md"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-3 my-2 w-full bg-black bg-opacity-60 rounded-md"
        />
        <button className="p-2 my-5 w-full font-semibold bg-red-700 rounded-md">
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
