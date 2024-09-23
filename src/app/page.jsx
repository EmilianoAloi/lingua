import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import About from "@/components/About";
import Translations from "@/components/Translations";
import Aaci from "@/components/Aaci";
import Companies from "@/components/Companies";
import Divider from "@/components/Divider";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Courses />
      <Companies />
      <Divider />
      <Aaci />
      <Translations />
    </main>
  );
}
