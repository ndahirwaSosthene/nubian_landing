import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Methods from "@/components/sections/Methods";
import Languages from "@/components/sections/Languages";
import MethodExplosion from "@/components/sections/MethodExplosion";
import AppScreenshots from "@/components/sections/AppScreenshots";
import Personas from "@/components/sections/Personas";
import Progress from "@/components/sections/Progress";
import Pricing from "@/components/sections/Pricing";
import Video from "@/components/sections/Video";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <Hero />
      <Problem />
      <Methods />
      <Languages />
      <MethodExplosion />
      <AppScreenshots />
      <Personas />
      <Progress />
      <Pricing />
      <Video />
      <Footer />
    </main>
  );
}
