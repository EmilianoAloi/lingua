import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import About from "@/components/About";
import Translations from "@/components/Translations";
import Aaci from "@/components/Aaci";
import Companies from "@/components/Companies";
import Divider from "@/components/Divider";
import Testomonials from "@/components/Testomonials";
import HeroCarousel from "@/components/HeroCarousel";
import TestimonialsMobile from "@/components/TestimonialsMobile";

export default function Home() {
  return (
    <main className="">
      <HeroCarousel />
      <About />
      <Courses />
      <Companies />
      <Divider />
      <Aaci />
      <Translations />
      <Testomonials />
      <TestimonialsMobile />
    </main>
  );
}
