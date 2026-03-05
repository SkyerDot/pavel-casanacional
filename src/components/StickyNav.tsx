import { useState, useEffect } from "react";
import { Phone } from "lucide-react";

const StickyNav = () => {
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

        <a
          href="tel:+5511995502261"
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-body font-semibold text-sm tracking-wider"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">(11) 99550-2261</span>
        </a>
      </div>
    </nav>
  );
};

export default StickyNav;