import CatCrackingHero from "@/components/CatCrackingModule/CatCrackingHero";
import MainComponent from "@/components/MainComponent";
import MentorFooter from "@/components/MentorFooter";
import Image from "next/image";

export default function Home() {
  return (
    <section className="max-w-[1280px] m-auto">
      <MainComponent />
      <CatCrackingHero />
      <MentorFooter />
    </section>
  );
}
