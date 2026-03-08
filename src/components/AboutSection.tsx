import { motion } from "framer-motion";
import livingImg from "@/assets/living-136.jpg";
import livingSmImg from "@/assets/living-114.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body">EZTEC · +40 anos de tradição</p>
          <h2 className="font-display text-3xl md:text-5xl mb-6 text-foreground">
            O nosso habitat contemporâneo.
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed">
            Entre o verde e o concreto, a cidade desacelera. A forma encontra sentido e a paisagem encontra espaço para permanecer. 
            Agora no Brooklin, arquitetura, natureza e vida se misturam em um só movimento. As linhas de LE Arquitetos trazem 
            amplitude e harmonia fluindo com o paisagismo singular.
          </p>
          <p className="text-muted-foreground font-light leading-relaxed mt-4">
            Uma obra de arte pulsa no coração do projeto pelos traçados do Burle Marx Escritório de Paisagismo. 
            Com materiais nobres, naturais e inspirações em nossa arte, os interiores assinados por Fernanda Marques 
            completam a sofisticação contemporânea nacional.
          </p>
        </motion.div>

        {/* Images grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden aspect-[4/3]"
          >
            <img src={livingImg} alt="Living do apartamento de 136 m²" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
              <p className="text-sm text-primary tracking-widest uppercase font-body">136 m² · 3 Suítes</p>
              <p className="text-foreground font-display text-xl">Living Integrado</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden aspect-[4/3]"
          >
            <img src={livingSmImg} alt="Living do apartamento de 114 m²" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
              <p className="text-sm text-primary tracking-widest uppercase font-body">114 m² · 2 Suítes</p>
              <p className="text-foreground font-display text-xl">Amplitude e Conforto</p>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 border-t border-gold pt-12"
        >
          {[
            { value: "188", label: "Unidades" },
            { value: "114-136", label: "m² privativos" },
            { value: "36", label: "Pavimentos" },
            { value: "8", label: "Elevadores" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl md:text-4xl text-gold-gradient">{stat.value}</p>
              <p className="text-muted-foreground text-sm mt-2 font-body">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
