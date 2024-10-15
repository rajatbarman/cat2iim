import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section className="max-w-[1280px] m-auto">
      <Header activeMenuItem="about" logo="./cat2iim.png" />
      <h1 className="text-2xl max-w-[720px] mx-auto mt-4 text-center mb-6 border-y-2 border-solid border-rose-500 py-2 ">
        About Us
      </h1>
      <div className="flex-col items-center justify-center w-full m-auto mt-12">
        <img src="/about-us-1.jpeg" alt="About Us 1" className="m-auto" />;
        <img src="/about-us-2.jpeg" alt="About Us 2" className="m-auto mt-12" />
        ;
      </div>
      <Footer />
    </section>
  );
}
