import React, { useMemo } from "react";

const allVideos = [
  {
    name: "Unnati Mangal",
    id: "5OJNNmd4_Bs",
  },
  {
    name: "Shubham Goel",
    id: "kbbe0coGLEg",
  },
  {
    name: "Syed Saad Ali",
    id: "0wlEgVgH6Oo",
  },
  {
    name: "Insha",
    id: "EqtDJeQwuPM",
  },
  {
    name: "Dr. Purnopama",
    id: "1tnoYNUKipA",
  },
  {
    name: "Sourav Ranjan",
    id: "QEp1kT_nXv0",
  },
  {
    name: "Chirag",
    id: "wetajf4yWrg",
  },
  {
    name: "Sanjay Jaiswal",
    id: "oZ83d6ESC0Q",
  },
  {
    name: "Shubham Dwivedi",
    id: "7HgaNcbjFlY",
  },
  {
    name: "Anjali Kapoor",
    id: "767Jcs9EHIE",
  },
];

export default function AchieversVideos({ numVideos = allVideos.length }) {
  const videos = useMemo(() => {
    return allVideos.slice(0, numVideos);
  }, [numVideos]);
  return (
    <div className="flex flex-wrap max-md:flex-col gap-10 items-center justify-center">
      {videos.map((video) => (
        <div className="flex-col" key={video.id}>
          <iframe
            width="315"
            height="541"
            className="m-auto mt-8 max-md:mt-0"
            src={`https://www.youtube.com/embed/${video.id}`}
            title="CAT 25 &amp; OMETs Super 60 Batch| Start Date 31st Aug I#iimcat #cat25  #mbaprep #iim #catprep #cat2025"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div className="mt-2 text-sm text-center">{video.name}</div>
        </div>
      ))}
    </div>
  );
}
