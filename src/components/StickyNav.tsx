import { useState, useEffect } from "react";

interface StickyNavProps {
  onCtaClick: () => void;
}

const StickyNav = ({ onCtaClick }: StickyNavProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
      scrolled ? "bg-background/95 backdrop-blur-md border-b border-gold" : "bg-gradient-to-b from-background/80 via-background/40 to-transparent backdrop-blur-[2px]"}`
      }>
      
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8 py-4">
        <div>
          <p className="font-display text-lg text-foreground leading-none">Casa Nacional</p>
          <p className="text-[10px] tracking-[0.2em] text-muted-foreground font-body uppercase">EZTEC · Brooklin</p>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {[
          { href: "#sobre", label: "O Projeto" },
          { href: "#lazer", label: "Lazer" },
          { href: "#localizacao", label: "Localização" },
          { href: "#plantas", label: "Plantas" }].
          map((link) =>
          <a
            key={link.href}
            href={link.href}
            className="text-xs tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors font-body">
            
              {link.label}
            </a>
          )}
        </div>

        <button
          onClick={onCtaClick}
          className="bg-gold-gradient text-primary-foreground font-body font-semibold text-xs tracking-wider uppercase px-5 py-2.5 hover:opacity-90 transition-opacity">
          
          AGENDE 
        </button>
      </div>
    </nav>);

};

export default StickyNav;