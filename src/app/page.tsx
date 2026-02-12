import { Hero } from "@/components/Hero";
import { NarrativeEngine } from "@/components/NarrativeEngine";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F4F1EA]">
      <Hero />
      <NarrativeEngine />
    </main>
  );
}
