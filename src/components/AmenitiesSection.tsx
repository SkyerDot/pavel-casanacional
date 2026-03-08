import { motion } from "framer-motion";
import rooftopImg from "@/assets/rooftop-pool.jpg";
import piscinaImg from "@/assets/piscina-coberta.jpg";
import academiaImg from "@/assets/academia.jpg";
import salaoImg from "@/assets/salao-festas.jpg";
import spaImg from "@/assets/spa.jpg";
import terracoImg from "@/assets/terraco.jpg";

const amenities = [
  { img: rooftopImg, title: "Piscina Adulto Rooftop", desc: "A mais de 100m de altura, no 36º pavimento" },
  { img: piscinaImg, title: "Piscina Coberta 25m", desc: "Lazer em qualquer estação" },
  { img: academiaImg, title: "Academia Completa", desc: "Equipamentos de ponta" },
  { img: salaoImg, title: "Salão de Festas", desc: "Térreo e 4º pavimento" },
  { img: spaImg, title: "Spa & Sauna", desc: "Bem-estar e relaxamento" },
  { img: terracoImg, title: "Terraço Gourmet", desc: "Integrado ao living" },
];

const AmenitiesSection = () => {
  return (
    <section id="lazer" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body">Lazer Completo</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground">
            Cada ambiente, um refúgio.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {amenities.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative aspect-[4/3] overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-display text-lg text-foreground">{item.title}</p>
                <p className="text-sm text-muted-foreground font-body">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra amenities list */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 glass-card p-8"
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-4 font-body">Também inclui</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-secondary-foreground font-body">
            {[
              "Bar Rooftop", "Solário Rooftop", "Brinquedoteca", "Parque Infantil",
              "Piscina Infantil", "Jogos Adulto", "Jogos Juvenil", "Espaço Pet",
              "Bicicletário", "Minimercado", "Escritório Compartilhado", "Sala de Entregas",
              "Churrasqueira", "Espaço Bem-Estar", "Quadra de Esportes", "Espelho d'Água",
              "Massagem", "Acesso/Portaria", "Serviços Pay-Per-Use",
            ].map((item) => (
              <p key={item} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-primary inline-block" />
                {item}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
