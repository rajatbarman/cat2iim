import Image from "next/image";
import React from "react";
export default function Footer() {
  return (
    <footer className="flex flex-wrap gap-5 justify-between items-start self-stretch px-20 pt-16 pb-10 mt-44 w-full bg-[#114C9A] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col mt-5">
        <Image
          width={80}
          height={60}
          className="object-contain aspect-[1.23]"
          alt="Cat2IIM Logo"
          src="./cat2iim.png"
        />
        <div className="flex gap-10 mt-16 max-md:mt-10 items-center">
          <div className="self-start text-sm font-light tracking-wide text-white">
            Follow us on
          </div>
          <div className="flex flex-1 gap-3">
            <a
              href="https://www.youtube.com/@CAT2IIMByManojMahajan"
              target="_blank"
            >
              <img
                loading="lazy"
                src="/youtube.svg"
                className="object-contain shrink-0 rounded-none aspect-square w-[29px]"
              />
            </a>
            <a href="https://www.facebook.com/cat2iimbymm" target="_blank">
              <img
                loading="lazy"
                src="/facebook.svg"
                className="object-contain shrink-0 rounded-none aspect-square w-[29px]"
              />
            </a>
            <a href="https://www.instagram.com/cat2iimbymm/" target="_blank">
              <img
                loading="lazy"
                src="/instagram.svg"
                className="object-contain shrink-0 rounded-none aspect-square w-[29px]"
              />
            </a>
            <a href="https://t.me/CAT2IIM_Information" target="_blank">
              <img
                loading="lazy"
                src="/telegram.svg"
                className="object-contain shrink-0 rounded-none aspect-square w-[29px]"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/cat2iim-by-manoj-mahajan/"
              target="_blank"
            >
              <img
                loading="lazy"
                srcSet="/linkedin.svg"
                className="object-contain shrink-0 rounded-none aspect-square w-[29px]"
              />
            </a>
            <a
              href="https://whatsapp.com/channel/0029Vaj0Up4HQbS1geV5GE1W"
              target="_blank"
              className="text-white"
            >
              <img
                loading="lazy"
                srcSet="/whatsapp.svg"
                className="object-contain shrink-0 rounded-none aspect-square w-[29px]"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start text-sm font-light text-zinc-100">
        <a href="/">Home</a>
        <a href="/about" className="mt-4">
          About Us
        </a>
        <a href="/results" className="mt-4">
          Results
        </a>

        <a href="/achievers" className="mt-4">
          Achiever&apos;s Message
        </a>
        <a href="/courses" className="mt-4">
          Courses
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/@CAT2IIMByManojMahajan"
          className="self-stretch mt-4"
        >
          New Batch
        </a>
        <a href="/contact" className="mt-4">
          Contact Us
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/cat2iimbymm"
          className="mt-4"
        >
          Recent Updates
        </a>
      </div>
    </footer>
  );
}
