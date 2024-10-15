/**
 * This code was generated by Builder.io.
 */
"use client";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

type HeroBannerProps = {
  heroImage: string;
};

const images = [
  { url: "/achievers-2023.jpeg" },
  { url: "/achievers-2022.jpeg" },
];

const HeroBanner: React.FC<HeroBannerProps> = ({ heroImage }) => {
  const [imageURL, setImageURL] = useState("/achievers-2023.jpeg");
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setImageURL((imageURL) => {
  //       console.log("asdasdd");
  //       if (imageURL === "/achievers-2023.jpeg") {
  //         return "/achievers-2022.jpeg";
  //       }
  //       return "/achievers-2023.jpeg";
  //     });
  //   }, 4000);
  //   return () => clearInterval(intervalId);
  // }, []);

  const handleSlideClick = (imageIndex, item) => {
    console.log(imageIndex, item);
  };

  return (
    <section className="py-20 max-md:py-10 max-md:rounded-none pr-7 pl-16 mt-2.5 w-full bg-indigo-700 rounded-3xl max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full text-white max-md:max-w-full">
            <h1 className="text-5xl font-light text-zinc-50 max-md:max-w-full max-md:text-4xl">
              Think Top B-school, Think CAT2IIM
            </h1>
            <p className="mt-10 mr-8 text-2xl font-light max-md:mr-2.5 max-md:max-w-full">
              1 out of every 2 CAT2IIM students receives top B-School call
            </p>
            <p className="mt-14 text-base font-light leading-5 max-md:mt-10 max-md:mr-1 max-md:max-w-full leading-6">
              We Offer Personalised Learning Experience through Online classes
              for CAT/XAT/NMAT/SNAP to get into top B-Schools.
            </p>
            <a
              href="https://forms.gle/wcGMo1nHRn1FpDGe8"
              target="_blank"
              className="flex gap-2.5 justify-center items-center self-start px-8 py-3 mt-7 text-xs text-center bg-rose-500 rounded-md max-md:px-5"
            >
              <span className="self-stretch my-auto font-light tracking-normal">
                Enquiry Form
              </span>
              <span className="self-stretch my-auto font-black leading-none">
                {" "}
              </span>
            </a>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
          <div className="max-md:block">
            <Carousel
              autoPlay
              infiniteLoop
              interval={5000}
              showStatus={false}
              showThumbs={false}
              onClickItem={handleSlideClick}
            >
              <div>
                <img
                  src={"/achievers-2023.jpeg"}
                  alt="Students studying together"
                  className="object-contain self-stretch my-auto w-full aspect-[1.77] max-md:mt-10 max-md:max-w-full"
                />
              </div>
              <div>
                <img
                  src={"/achievers-2022.jpeg"}
                  alt="Students studying together"
                  className="object-contain self-stretch my-auto w-full aspect-[1.77] max-md:mt-10 max-md:max-w-full"
                />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
