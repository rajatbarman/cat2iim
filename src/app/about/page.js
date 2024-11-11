import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import { RxQuote } from "react-icons/rx";

export default function About() {
  return (
    <section className="max-w-[1280px] m-auto">
      <Header activeMenuItem="about" logo="./cat2iim.png" />
      <h1 className="text-2xl max-w-[720px] mx-auto mt-4 text-center mb-6 border-y-2 border-solid border-logo-blue py-2 ">
        About Us
      </h1>
      <div className="max-w-[720px] m-auto flex-col items-center justify-center w-full mt-12">
        <div className="max-md:rounded-none text-2xl mt-12 text-center p-12 rounded-lg bg-logo-blue bg-opacity-90 hover:bg-opacity-100 transition-all text-white">
          <RxQuote className="inline rotate-180 mr-1 mt-[-12px]" />I don&apos;t
          care how much my teacher knows, but I want to know how much he cares
          😊
          <RxQuote className="inline ml-1" />
          <div>We care for your Results!</div>
          <div className="text-right mt-2 max-md:text-center">
            <div>With Love,</div>
            <div>CAT2IIM Mentor</div>
          </div>
        </div>
        <div className="m-auto">
          <Image
            width={210}
            height={210}
            src="./manoj.webp"
            alt="Manoj Mentor Portrait Photograph"
            className="m-auto object-contain mt-10 max-w-full aspect-square"
          />
          <div className="mt-6 text-2xl font-semibold leading-none text-center text-logo-blue">
            Manoj Mahajan
          </div>
          <ul className="mt-4 flex-col flex gap-3 max-md:px-4">
            <li>👉🏼 Experience 20+ years </li>
            <li>
              👉🏼 QA & LRDI Trainer with over 12 years of experience, working
              with{" "}
              <span className="whitespace-nowrap">
                Career Launcher (12+ years)
              </span>
              , <span className="whitespace-nowrap">TIME (1 year)</span>,
              <span className="whitespace-nowrap">Tathagat (1 year)</span>,{" "}
              <span className="whitespace-nowrap">Unacademy (3.5+ years)</span>,
              and <span className="whitespace-nowrap">CAT2IIM (2+ years)</span>.
            </li>
            <li>👉🏼 Feedback Pan Career Launcher was Number 1 in 2018</li>
            <li>👉🏼 Number 1 Unacademy CAT Faculty in 2019</li>
            <li>👉🏼 Ex Career Launcher Delhi Academic Head</li>
            <li>👉🏼 CAT QA 99.97, LRDI 98.81 Overall 98.86</li>
            <li>👉🏼 IIM Calls: B,L,I,K</li>
          </ul>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-b py-4 max-md:px-4">
          <p>
            Cracking CAT is no longer just a dream. Ace the CAT/XAT/NMAT/SNAP
            and get into a top{" "}
            <span className="whitespace-nowrap">B-school</span> with the right
            mentoring.
          </p>
          <p>
            We don&apos;t just focus on the CAT/XAT/NMAT/SNAP exam, we offer
            personalised coaching to empower you to conquer any academic
            challenge. Our experienced mentors will work with you to create a
            personalised roadmap to success, tailored to your unique goals and
            learning style.
          </p>
          <p>
            We go beyond generic coaching by identifying your strengths and
            weaknesses. This allows us to craft a customized study plan that
            focuses on maximizing your potential.{" "}
          </p>

          <p>
            Through targeted practice and insightful feedback, we&apos;ll equip
            you with the skills and strategies you need to conquer any exam.
            Don&apos;t face exam challenges alone.{" "}
          </p>
          <p className="text-logo-blue">
            Partner with CAT2IIM and gain the confidence and knowledge to unlock
            your full potential. We&apos;ll guide you every step of the way,
            helping you achieve your academic aspirations.
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
}
