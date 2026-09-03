import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NewsSection from "./components/NewSection";
import ReportsSection from "./components/ReportsSection";
import CommunitySection from "./components/CommunitySection";
import ClimateRisksSection from "./components/ClimateRisksSection";
import PowerInCooperationSection from "./components/PowerInCooperationSection";
import WorldwideOperationsSection from "./components/WorldwideOperationsSection";
import PartnersSection from "./components/PartnersSection";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Hero/>
      <PartnersSection/>
      <NewsSection/>
      <ReportsSection/>
      
      <ClimateRisksSection/>
      <PowerInCooperationSection/>
      <CommunitySection/>
      <WorldwideOperationsSection/>
      <Footer />
    </div>
  );
}

export default App;
