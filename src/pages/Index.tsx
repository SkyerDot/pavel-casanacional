import { useRef, useState, useEffect } from "react";
import StickyNav from "@/components/StickyNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import LocationSection from "@/components/LocationSection";
import FloorPlansSection from "@/components/FloorPlansSection";
import EbookSection from "@/components/EbookSection";
import MapSection from "@/components/MapSection";
import FloatingCta from "@/components/FloatingCta";

const Index = () => {
  const heroCtaRef = useRef<HTMLAnchorElement>(null);
  const floorCtaRef = useRef<HTMLAnchorElement>(null);
  const [heroCtaHidden, setHeroCtaHidden] = useState(false);
  const [floorCtaVisible, setFloorCtaVisible] = useState(false);

  useEffect(() => {
    const heroEl = heroCtaRef.current;
    const floorEl = floorCtaRef.current;

    const heroObserver = new IntersectionObserver(
      ([entry]) => setHeroCtaHidden(!entry.isIntersecting),
      { threshold: 0 }
    );

    const floorObserver = new IntersectionObserver(
      ([entry]) => setFloorCtaVisible(entry.isIntersecting),
      { threshold: 0 }
    );

    if (heroEl) heroObserver.observe(heroEl);
    if (floorEl) floorObserver.observe(floorEl);

    return () => {
      heroObserver.disconnect();
      floorObserver.disconnect();
    };
  }, []);

  const showFloating = heroCtaHidden && !floorCtaVisible;

  return (
    <div className="bg-background min-h-screen">
      <StickyNav />
      <HeroSection ctaRef={heroCtaRef} />
      <AboutSection />
      <AmenitiesSection />
      <LocationSection />
      <FloorPlansSection ctaRef={floorCtaRef} />
      <EbookSection />
      <MapSection />
      <FloatingCta visible={showFloating} />

      <footer className="border-t border-gold py-8 px-4 text-center">
        <p className="text-xs text-muted-foreground font-body">
          Material preliminar, sujeito à alteração. Perspectivas ilustrativas. 
          Portland Incorporadora LTDA — CNPJ 38.026.360/0001-35.
        </p>
        <p className="text-xs text-muted-foreground font-body mt-2">
          EZTEC — Mais de 4 décadas construindo qualidade de vida.
        </p>
        <p className="text-xs text-muted-foreground font-body mt-2">
          Área do terreno: 3.690,43 m² · Rua Diogo de Quadros, 440 — Brooklin, São Paulo
        </p>
      </footer>
    </div>
  );
};

export default Index;
