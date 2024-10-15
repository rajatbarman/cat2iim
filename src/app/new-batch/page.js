import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

export default function NewBatch() {
  return (
    <section className="max-w-[1280px] m-auto">
      <Header activeMenuItem="new-batch" logo="./cat2iim.png" />
      <iframe
        width="961"
        height="541"
        className="m-auto mt-8 max-md:w-full max-md:px-4"
        src="https://www.youtube.com/embed/W4jm3h3-TsM"
        title="CAT 25 &amp; OMETs Super 60 Batch| Start Date 31st Aug I#iimcat #cat25  #mbaprep #iim #catprep #cat2025"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <Footer />
    </section>
  );
}
