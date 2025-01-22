import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-60 px-[4rem] text-white absolute bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold w-1/2"> {title}</h1>
      <p className="py-5 text-lg w-1/3">{overview}</p>
      <div>
        <button className="bg-gray-500 p-3 px-6 font-medium text-lg rounded-md bg-opacity-50 hover:bg-opacity-80">
          {" "}
          ▶ Play
        </button>
        <button className="bg-gray-500 mx-2 p-3 px-6 font-medium text-lg rounded-md bg-opacity-50 hover:bg-opacity-80">
          {" "}
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
