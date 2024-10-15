import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

export default function NewBatch() {
  return (
    <section className="max-w-[1280px] m-auto">
      <Header activeMenuItem="updates" logo="./cat2iim.png" />
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcat2iimbymm&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId"
        height="500"
        width="500"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
      <Footer />
    </section>
  );
}
