"use client";
import CatCrackingHero from "@/components/CatCrackingModule/CatCrackingHero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainComponent from "@/components/MainComponent";
import { allTestimonials as testimonials } from "@/components/MentorFooter";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function Results() {
  return (
    <section className="max-w-[1280px] m-auto">
      <Header activeMenuItem="results" logo="./cat2iim.png" />
      <h1 className="text-2xl max-w-[720px] mx-auto mt-4 text-center mb-6 border-y-2 border-solid border-logo-blue py-2 ">
        Results
      </h1>
      <div className="flex flex-wrap gap-5 justify-center mt-12">
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.name} {...testimonial} />
        ))}
      </div>
      <Footer />
    </section>
  );
}
