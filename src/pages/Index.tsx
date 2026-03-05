import { useRef, useState, useEffect } from "react";
import StickyNav from "@/components/StickyNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import LocationSection from "@/components/LocationSection";
import FloorPlansSection from "@/components/FloorPlansSection";
import FloatingCta from "@/components/FloatingCta";

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5511995502261&text=Ol%C3%A1%2C+Paulo+Coelho.+Tenho+interesse+no+Casa+Nacional+e+gostaria+de+conhecer+as+unidades+dispon%C3%ADveis.+Pode+me+orientar%3F&type=phone_number&app_absent=0";

const Index = () => {
  const heroCtaRef = useRef<HTMLAnchorElement>(null);
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const el = heroCtaRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowFloating(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const openWhatsApp = () => {
    window.open(WHATSAPP_URL, "_blank");
  };

  return (
    <div className="bg-background min-h-screen">
      <StickyNav />
      <HeroSection ctaRef={heroCtaRef} />
      <AboutSection />
      <AmenitiesSection />
      <LocationSection />
      <FloorPlansSection onCtaClick={openWhatsApp} />
      <FloatingCta visible={showFloating} />

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