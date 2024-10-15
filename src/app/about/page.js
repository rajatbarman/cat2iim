import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section className="max-w-[1280px] m-auto">
      <Header
        activeMenuItem="about"
        logo="https://cdn.builder.io/api/v1/image/assets/TEMP/c54ea12a1dd71538b8d7eb0bcf4c1326c90bc15b7296df6787380ae5698836bd?placeholderIfAbsent=true&apiKey=9bca9c6557e04269a5028755255fb6a9"
      />
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
