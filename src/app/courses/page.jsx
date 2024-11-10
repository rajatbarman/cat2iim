import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { RxCaretRight, RxRocket } from "react-icons/rx";

const courses = [
  {
    title: "CAT & OMETs Super 60 Batch Flagship Course",
    features: [
      { text: "1 out of every 2 receives Top B-School Call" },
      { text: "One to One Personalized Mentoring Sessions" },
      { text: "Exhaustive Practice of QA (1500+ Q’s) & LRDI (250+ Sets)" },
      { text: "Exhaustive QA & LRDI Learning (500+ hrs)" },
      { text: "Recorded Sessions Available" },
      { text: "Expect Direct & Similar Questions" },
      { text: "Regular Assignments & Doubt Clearing Sessions" },
    ],
  },
  {
    title: "OMETS BOOSTER COURSE",
    features: [
      { text: "One to One Personalized Mentoring Sessions" },
      { text: "Exhaustive Practice of QA & LRDI" },
      { text: "Live & Recorded OMETS Booster Course (70+ hrs)" },
      { text: "Expect Direct & Similar Questions" },
      { text: "Telegram Discussion Group" },
    ],
  },
  {
    title: "CAT & OMETS BOOSTER COURSE",
    features: [
      { text: "One to One Personalized Mentoring Sessions" },
      { text: "Exhaustive Practice of QA (500+ Q's) & LRDI (60+ Sets)" },
      { text: "Live & Recorded CAT Booster Course (110+ hrs)" },
      { text: "Live & Recorded OMETS Booster Course (70+ hrs)" },
      { text: "Expect Direct & Similar Questions" },
      { text: "Telegram Discussion Group" },
    ],
  },
  {
    title: "CAT & OMETS SELF PACED COURSE",
    features: [
      { text: "One to One Personalized Mentoring Sessions" },
      { text: "CAT & OMETS QA & LRDI Concepts Recordings (350+ hrs)" },
      { text: "Live & Recorded CAT Booster Course (110+ hrs)" },
      { text: "Live & Recorded OMETS Booster Course (70+ hrs)" },
      { text: "Material & Assignments" },
      { text: "Telegram Discussion Group" },
    ],
  },
  {
    title: "CAT & OMETS RECORDED COURSE",
    features: [
      { text: "QA & LRDI Concepts Recordings ( 350+ hrs )" },
      { text: "Material & Assignments" }
    ],
  },
];

export default function Courses() {
  return (
    <section className="max-w-[1280px] m-auto">
      <Header activeMenuItem="courses" logo="./cat2iim.png" />
      <section className="max-w-[720px] m-auto">
        <h1 className="text-2xl mt-4 text-center mb-6 border-y-2 border-solid border-rose-500 py-2 ">
          Offered Courses
        </h1>
        {courses.map((course) => {
          return (
            <div className="p-5" key={course.title}>
              <div className="flex items-center">
                <RxRocket className="text-rose-500 text-xl shrink-0 mr-2" />
                <h2 className="text-xl">{course.title}</h2>
              </div>
              <ul className="pl-6 pt-2">
                {course.features.map((feature, index) => (
                  <div className="flex items-center gap-1" key={index}>
                    <li className="p-2">👉🏼 {feature.text}</li>
                  </div>
                ))}
              </ul>
            </div>
          );
        })}
      </section>
      <Footer />
    </section>
  );
}
