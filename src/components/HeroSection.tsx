import { motion } from "framer-motion";
import heroImg from "@/assets/fachada-detail.jpg";

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5511995502261&text=Ol%C3%A1%2C+Paulo+Coelho.+Tenho+interesse+no+Casa+Nacional+e+gostaria+de+conhecer+as+unidades+dispon%C3%ADveis.+Pode+me+orientar%3F&type=phone_number&app_absent=0";

interface HeroSectionProps {
  ctaRef: React.RefObject<HTMLAnchorElement>;
}

const HeroSection = ({ ctaRef }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-end pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Casa Nacional EZTEC - Fachada" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-primary mb-4">
            Brooklin — São Paulo
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-6">
            <span className="text-gold-gradient">Casa Nacional</span>
            <br />
            <span className="text-foreground">EZTEC</span>
          </h1>
          <p className="font-body text-base md:text-lg text-muted-foreground max-w-xl mb-4 font-light leading-relaxed">
            O nosso habitat contemporâneo. Apartamentos de 114 a 136 m² com 2 e 3 suítes no coração do Brooklin.
          </p>
          <p className="font-body text-sm text-muted-foreground mb-8">
            Paisagismo por Burle Marx · Arquitetura por LE Arquitetos · Decoração por Fernanda Marques
          </p>

          <a
            ref={ctaRef}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold-gradient text-primary-foreground font-body font-semibold text-sm tracking-wider uppercase px-8 py-4 hover:opacity-90 transition-opacity"
          >
            Agende uma visita
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;