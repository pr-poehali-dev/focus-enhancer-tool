import { Hero } from "@/components/Hero";
import { Works } from "@/components/Works";
import { VideoSection } from "@/components/VideoSection";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function Index() {
  return (
    <>
      <Hero />
      <Works />
      <VideoSection />
      <About />
      <Contact />
    </>
  );
}
