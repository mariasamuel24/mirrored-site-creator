import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesTicker from "@/components/ServicesTicker";
import ServicesGrid from "@/components/ServicesGrid";
import WhyFixly from "@/components/WhyFixly";
import AboutSection from "@/components/AboutSection";
import EmergencySection from "@/components/EmergencySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesTicker />
      <ServicesGrid />
      <WhyFixly />
      <AboutSection />
      <EmergencySection />
      <Footer />
    </div>
  );
};

export default Index;
