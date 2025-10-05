
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { DemoSection } from "@/components/DemoSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { DownloadSection } from "@/components/DownloadSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-senior-pale via-senior-card to-senior-light/20 font-inter">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <WhyChooseUsSection />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Index;
