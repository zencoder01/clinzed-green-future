
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PricingSection from '@/components/PricingSection';
import AboutSection from '@/components/AboutSection';
import ImpactSection from '@/components/ImpactSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PricingSection />
      <AboutSection />
      <ImpactSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
