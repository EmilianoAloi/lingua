import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import About from "@/components/About";
import Workshop from "@/components/Workshop";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Courses />
      <Workshop />
    </main>
  );
}
