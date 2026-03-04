import { motion } from "framer-motion";
import aerialImg from "@/assets/aerial-view.jpg";

const distances = [
  { place: "Av. Roque Petroni Jr.", time: "2 min" },
  { place: "Estação Brooklin", time: "3 min" },
  { place: "Av. Eng. Luís Carlos Berrini", time: "4 min" },
  { place: "Ponte Estaiada", time: "5 min" },
  { place: "Av. Faria Lima", time: "9 min" },
  { place: "Aeroporto de Congonhas", time: "12 min" },
];

const LocationSection = () => {
  return (
    <section id="localizacao" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body">Localização Privilegiada</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Brooklin, o protagonista da cidade.
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-3 text-sm">
              Rua Diogo de Quadros, 440 — paralelo à Av. Roque Petroni Jr., cercado dos melhores acessos. 
              A 700m do Morumbi Shopping.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed mb-8 text-sm">
              Mais de 1.600 empresas de grande porte na região, incluindo Microsoft, Samsung, Nestlé, Oracle e outras.
            </p>

            <div className="space-y-3">
              {distances.map((d) => (
                <div key={d.place} className="flex justify-between items-center border-b border-gold py-3">
                  <span className="text-secondary-foreground font-body text-sm">{d.place}</span>
                  <span className="text-primary font-display text-lg">{d.time}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square overflow-hidden"
          >
            <img src={aerialImg} alt="Vista aérea Brooklin" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
