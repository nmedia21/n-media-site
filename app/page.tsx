import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Presentation from "@/components/Presentation";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Presentation />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
    </>
  );
}
