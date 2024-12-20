import Image from "next/image";
import React from "react";
import { RxStarFilled } from "react-icons/rx";
import ReadMoreReact from "read-more-react";

export default function Testimonial({ name, result, text, photoURL }) {
  return (
    <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full relative max-md:px-2">
      <div
        className={`${
          text ? "min-h-[320px]" : "min-h-[120px]"
        } px-10 py-14 mx-auto w-full bg-white rounded-3xl border border-logo-blue border-solid max-md:px-5 max-md:max-w-full max-md:rounded-lg`}
      >
        <Image
          src={photoURL}
          alt={name}
          width={128}
          height={128}
          className="rounded-full float-right max-h-[128px] ml-4"
        />
        <div className="">
          <div className="text-xl font-medium text-logo-blue">{name}</div>
          <div className="mt-2.5 text-sm font-semibold text-black mb-2.5">
            {result}
          </div>

          <div className="inline mt-2.5 max-w-full w-[333px]">
            <div className="flex flex-1 gap-1">
              <RxStarFilled className="text-logo-blue" />
              <RxStarFilled className="text-logo-blue" />
              <RxStarFilled className="text-logo-blue" />
              <RxStarFilled className="text-logo-blue" />
              <RxStarFilled className="text-logo-blue" />
            </div>
          </div>
          <div className="self-stretch mt-4 text-base tracking-wide text-black max-md:max-w-full">
            <ReadMoreReact
              text={text}
              min={180}
              ideal={200}
              max={220}
              readMoreText={
                <span className="cursor-pointer text-blue-500 text-xs">
                  Read More...
                </span>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
