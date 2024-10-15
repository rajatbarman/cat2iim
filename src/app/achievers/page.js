import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AchieversVideos from "@/components/AchieversVideos/AchieversVideos";

const videos = [
  {
    name: "Chirag",
    id: "wetajf4yWrg",
  },
  {
    name: "Shubham Goel",
    id: "kbbe0coGLEg",
  },
  {
    name: "Insha",
    id: "EqtDJeQwuPM",
  },
  {
    name: "Unnati Mangal",
    id: "5OJNNmd4_Bs",
  },
  {
    name: "Dr. Purnopama",
    id: "1tnoYNUKipA",
  },
  {
    name: "Sourav Ranjan",
    id: "QEp1kT_nXv0",
  },
  {
    name: "Sanjay Jaiswal",
    id: "oZ83d6ESC0Q",
  },
  {
    name: "Shubham Dwivedi",
    id: "7HgaNcbjFlY",
  },
  {
    name: "Anjali Kapoor",
    id: "767Jcs9EHIE",
  },
  {
    name: "Syed Saad Ali",
    id: "0wlEgVgH6Oo",
  },
];

export default function Achievers() {
  return (
    <section className="max-w-[1280px] m-auto">
      <Header
        activeMenuItem="achievers"
        logo="https://cdn.builder.io/api/v1/image/assets/TEMP/c54ea12a1dd71538b8d7eb0bcf4c1326c90bc15b7296df6787380ae5698836bd?placeholderIfAbsent=true&apiKey=9bca9c6557e04269a5028755255fb6a9"
      />
      <h1 className="text-2xl max-w-[720px] mx-auto mt-4 text-center mb-6 border-y-2 border-solid border-rose-500 py-2 ">
        Achiever's Messages
      </h1>
      <AchieversVideos />
      <Footer />
    </section>
  );
}
