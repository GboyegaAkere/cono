import Hero from "../components/Hero";
import PartnersSection from "../components/PartnersSection";
import WorldwideOperationsSection from "../components/WorldwideOperationsSection";
import NewsSection from "../components/NewSection";
import ReportsSection  from "../components/ReportsSection";
import ClimateRisksSection from "../components/ClimateRisksSection";
import PowerInCooperationSection from "../components/PowerInCooperationSection";
import CommunitySection from "../components/CommunitySection";
import Hubspot from "../components/Hubspot";

export default function Home() {
  return (
    <>
      <Hero />
      <PartnersSection/>
      <NewsSection/>
      <ReportsSection/>
      <ClimateRisksSection/>
      <PowerInCooperationSection/>
      <CommunitySection/>
      <WorldwideOperationsSection/>
      <Hubspot/>
    </>
  );
}