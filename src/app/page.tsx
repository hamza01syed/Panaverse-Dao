import CoreTracks from "@/components/widgets/CoreTracks";
import Hero from "@/components/widgets/Hero";
import ProgramOutcomes from "@/components/widgets/ProgramOutcomes";
import SpecializedTracks from "@/components/widgets/SpecializedTracks";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <main>
      {/* <h1 className="text-red-400">hello world</h1> */}
      <Hero/>
      <CoreTracks/>
      <SpecializedTracks/>
      <ProgramOutcomes/>
      
    </main>
    </>
  );
}
