import React from "react";
//import { useSelector } from "react-redux";

const MovieVideoList = ({ name, type, videoKey }) => {
  if (!name) return;

  return (
    <div className="p-2 flex">
      <div className="m-2">
        <iframe
          width="560"
          height="315"
          src={"https://www.youtube.com/embed/" + videoKey + "?rel=0"}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="m-2">
        <h1 className="text-2xl font-medium">{name} </h1>
        <h2 className="py-1 text-base text-zinc-400">( {type} ) </h2>
      </div>
    </div>
  );
};

export default MovieVideoList;
