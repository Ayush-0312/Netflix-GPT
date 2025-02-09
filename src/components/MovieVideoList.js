import React from "react";

const MovieVideoList = ({ name, type, videoKey }) => {
  if (!name) return;

  return (
    <div className="p-2 md:grid md:grid-cols-12">
      <div className="md:m-2 md:col-span-6">
        <iframe
          className="w-full h-60 md:h-72"
          src={"https://www.youtube.com/embed/" + videoKey + "?rel=0"}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="m-2 md:col-span-6">
        <h1 className="md:text-2xl font-medium">{name} </h1>
        <h2 className="py-1 md:text-base text-zinc-400">( {type} ) </h2>
      </div>
    </div>
  );
};

export default MovieVideoList;
