import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Presentation from "@/components/Presentation";
import Services from "@/components/Services";
import ComparisonTable from "@/components/ComparisonTable";
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
      <ComparisonTable />
      <Process />
      <Portfolio />
      <Testimonials />
    </>
  );
}
