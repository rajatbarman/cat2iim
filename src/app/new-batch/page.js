import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

export default function NewBatch() {
  return (
    <section className="max-w-[1280px] m-auto">
      <Header
        activeMenuItem="new-batch"
        logo="https://cdn.builder.io/api/v1/image/assets/TEMP/c54ea12a1dd71538b8d7eb0bcf4c1326c90bc15b7296df6787380ae5698836bd?placeholderIfAbsent=true&apiKey=9bca9c6557e04269a5028755255fb6a9"
      />
      <iframe
        width="961"
        height="541"
        className="m-auto mt-8"
        src="https://www.youtube.com/embed/W4jm3h3-TsM"
        title="CAT 25 &amp; OMETs Super 60 Batch| Start Date 31st Aug I#iimcat #cat25  #mbaprep #iim #catprep #cat2025"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <Footer />
    </section>
  );
}
