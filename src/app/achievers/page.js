import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const videos = [
  {
    name: "Chirag",
    id: "wetajf4yWrg",
  },
  {
    name: "Shubham",
    id: "kbbe0coGLEg",
  },
  {
    name: "Insha",
    id: "EqtDJeQwuPM",
  },
];

export default function Achievers() {
  return (
    <section className="max-w-[1280px] m-auto">
      <Header
        activeMenuItem="achievers"
        logo="https://cdn.builder.io/api/v1/image/assets/TEMP/c54ea12a1dd71538b8d7eb0bcf4c1326c90bc15b7296df6787380ae5698836bd?placeholderIfAbsent=true&apiKey=9bca9c6557e04269a5028755255fb6a9"
      />
      <h1 className="text-3xl text-center mt-4">
        What students say about us...
      </h1>
      <div className="flex max-md:flex-col gap-6 items-center justify-center">
        {videos.map((video) => (
          <div className="flex-col">
            <iframe
              width="315"
              height="541"
              className="m-auto mt-8"
              src={`https://www.youtube.com/embed/${video.id}`}
              title="CAT 25 &amp; OMETs Super 60 Batch| Start Date 31st Aug I#iimcat #cat25  #mbaprep #iim #catprep #cat2025"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <div className="mt-2 text-xl text-center">{video.name}</div>
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
}
