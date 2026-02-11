import { OpeningSilence } from "@/components/home/OpeningSilence";
import { PurposeManifesto } from "@/components/home/PurposeManifesto";
import { WhatIsSamsara } from "@/components/home/WhatIsSamsara";
import { HumanImpactSnapshot } from "@/components/home/HumanImpactSnapshot";
import { GuidedMicroPractice } from "@/components/home/GuidedMicroPractice";
import { PathsOfPractice } from "@/components/home/PathsOfPractice";
import { DoshaQuiz } from "@/components/tools/DoshaQuiz";
import { TheAshramExperience } from "@/components/home/TheAshramExperience";
import { ProgramsOverview } from "@/components/home/ProgramsOverview";
import { InteractiveTimeline } from "@/components/home/InteractiveTimeline";
import { CommunityVoices } from "@/components/home/CommunityVoices";
import { TransparencyPromise } from "@/components/home/TransparencyPromise";
import { VolunteerWithUs } from "@/components/home/VolunteerWithUs";
import { SupportTheMission } from "@/components/home/SupportTheMission";
import { NewsletterGift } from "@/components/home/NewsletterGift";
import { ClosingReflection } from "@/components/home/ClosingReflection";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <OpeningSilence />
      <PurposeManifesto />
      <WhatIsSamsara />
      <HumanImpactSnapshot />
      <GuidedMicroPractice />
      <PathsOfPractice />
      <DoshaQuiz />
      <TheAshramExperience />
      <ProgramsOverview />
      <InteractiveTimeline />
      <CommunityVoices />
      <TransparencyPromise />
      <VolunteerWithUs />
      <SupportTheMission />
      <NewsletterGift />
      <ClosingReflection />
    </div>
  );
}
