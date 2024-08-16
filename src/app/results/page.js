"use client";
import CatCrackingHero from "@/components/CatCrackingModule/CatCrackingHero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainComponent from "@/components/MainComponent";
import { testimonials } from "@/components/MentorFooter";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function Results() {
  return (
    <section className="max-w-[1280px] m-auto">
      <Header
        activeMenuItem="results"
        logo="https://cdn.builder.io/api/v1/image/assets/TEMP/c54ea12a1dd71538b8d7eb0bcf4c1326c90bc15b7296df6787380ae5698836bd?placeholderIfAbsent=true&apiKey=9bca9c6557e04269a5028755255fb6a9"
      />
      <h1 className="text-3xl text-center mt-4">
        What students say about us...
      </h1>
      <div className="flex flex-wrap gap-5 justify-center mt-12">
        {testimonials.map((testimonial) => (
          <Testimonial {...testimonial} />
        ))}
      </div>
      <Footer />
    </section>
  );
}
