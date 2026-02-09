import { Hero } from "@/components/Hero";
import { CinematicNarrative } from "@/components/CinematicNarrative";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#151515]">
      <Hero />
      <CinematicNarrative />
    </main>
  );
}
