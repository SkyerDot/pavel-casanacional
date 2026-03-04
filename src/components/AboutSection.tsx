import { motion } from "framer-motion";
import paisagismoImg from "@/assets/paisagismo.jpg";
import atrioImg from "@/assets/atrio.jpg";

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
            Entre o verde e o concreto, a cidade desacelera.
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed">
            Cores, curvas e geometria desenham o único recanto que guia olhar, emoção e pausa. 
            Arquitetura, natureza e vida se misturam em um só movimento no Brooklin.
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
            <img src={paisagismoImg} alt="Paisagismo Burle Marx" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
              <p className="text-sm text-primary tracking-widest uppercase font-body">Paisagismo</p>
              <p className="text-foreground font-display text-xl">Burle Marx Escritório</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden aspect-[4/3]"
          >
            <img src={atrioImg} alt="Átrio Casa Nacional" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
              <p className="text-sm text-primary tracking-widest uppercase font-body">Decoração</p>
              <p className="text-foreground font-display text-xl">Fernanda Marques</p>
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
            { value: "+100m", label: "Rooftop de altura" },
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
