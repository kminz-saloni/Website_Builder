import { CurrentlyBuilding } from "@/components/CurrentlyBuilding";
import { FeaturedExperiments } from "@/components/FeaturedExperiments";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { StatusPanel } from "@/components/StatusPanel";
import { TechStackGrid } from "@/components/TechStackGrid";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <Hero />
      <Reveal>
        <StatusPanel />
      </Reveal>
      <Reveal>
        <FeaturedExperiments />
      </Reveal>
      <Reveal>
        <TechStackGrid />
      </Reveal>
      <Reveal>
        <CurrentlyBuilding />
      </Reveal>
    </div>
  );
}
