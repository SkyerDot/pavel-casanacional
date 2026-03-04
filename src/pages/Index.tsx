import { useRef } from "react";
import StickyNav from "@/components/StickyNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import LocationSection from "@/components/LocationSection";
import FloorPlansSection from "@/components/FloorPlansSection";
import LeadFormSection from "@/components/LeadFormSection";
import FloatingCta from "@/components/FloatingCta";

const Index = () => {
  const formRef = useRef<HTMLElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-background min-h-screen">
      <StickyNav onCtaClick={scrollToForm} />
      <HeroSection onCtaClick={scrollToForm} />
      <AboutSection />
      <AmenitiesSection />
      <LocationSection />
      <FloorPlansSection onCtaClick={scrollToForm} />
      <LeadFormSection ref={formRef} />
      <FloatingCta onClick={scrollToForm} />

      {/* Footer */}
      <footer className="border-t border-gold py-8 px-4 text-center">
        <p className="text-xs text-muted-foreground font-body">
          Material preliminar, sujeito à alteração. Perspectivas ilustrativas. 
          Portland Incorporadora LTDA — CNPJ 38.026.360/0001-35.
        </p>
        <p className="text-xs text-muted-foreground font-body mt-2">
          EZTEC — Mais de 4 décadas construindo qualidade de vida.
        </p>
      </footer>
    </div>
  );
};

export default Index;
