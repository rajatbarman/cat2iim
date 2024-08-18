import React from "react";
export default function Footer() {
  return (
    <footer className="flex flex-wrap gap-5 justify-between items-start self-stretch px-20 pt-16 pb-10 mt-44 w-full bg-indigo-700 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col mt-5">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bec5e4b93bb49c6de436aa539ebfd95503b737f39d346a9c6cd784cdc98df138?placeholderIfAbsent=true&apiKey=9bca9c6557e04269a5028755255fb6a9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bec5e4b93bb49c6de436aa539ebfd95503b737f39d346a9c6cd784cdc98df138?placeholderIfAbsent=true&apiKey=9bca9c6557e04269a5028755255fb6a9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bec5e4b93bb49c6de436aa539ebfd95503b737f39d346a9c6cd784cdc98df138?placeholderIfAbsent=true&apiKey=9bca9c6557e04269a5028755255fb6a9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bec5e4b93bb49c6de436aa539ebfd95503b737f39d346a9c6cd784cdc98df138?placeholderIfAbsent=true&apiKey=9bca9c6557e04269a5028755255fb6a9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bec5e4b93bb49c6de436aa539ebfd95503b737f39d346a9c6cd784cdc98df138?placeholderIfAbsent=true&apiKey=9bca9c6557e04269a5028755255fb6a9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bec5e4b93bb49c6de436aa539ebfd95503b737f39d346a9c6cd784cdc98df138?placeholderIfAbsent=true&apiKey=9bca9c6557e04269a5028755255fb6a9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bec5e4b93bb49c6de436aa539ebfd95503b737f39d346a9c6cd784cdc98df138?placeholderIfAbsent=true&apiKey=9bca9c6557e04269a5028755255fb6a9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bec5e4b93bb49c6de436aa539ebfd95503b737f39d346a9c6cd784cdc98df138?placeholderIfAbsent=true&apiKey=9bca9c6557e04269a5028755255fb6a9"
          className="object-contain aspect-[1.23] w-[79px]"
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
        <div className="self-stretch mt-4 max-md:mr-2">Achiever’s Message</div>
        <a href="/new-batch" className="self-stretch mt-4">
          Super 60 New Batch
        </a>
      </div>
    </footer>
  );
}
