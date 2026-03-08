import { motion } from "framer-motion";
import rooftopImg from "@/assets/rooftop-pool-oficial.jpg";
import spaImg from "@/assets/spa-oficial.jpg";
import saunaImg from "@/assets/sauna-oficial.jpg";
import solarioImg from "@/assets/solario-rooftop-oficial.jpg";
import acessoImg from "@/assets/acesso-oficial.jpg";
import quadraImg from "@/assets/quadra-oficial.jpg";

const amenities = [
  { img: rooftopImg, title: "Piscina Adulto Rooftop", desc: "A mais de 100m de altura, no 36º pavimento" },
  { img: spaImg, title: "Spa", desc: "Bem-estar e relaxamento" },
  { img: saunaImg, title: "Sauna", desc: "Espaço de descompressão" },
  { img: solarioImg, title: "Solário Rooftop", desc: "Vista panorâmica de São Paulo" },
  { img: quadraImg, title: "Quadra de Esportes", desc: "Espaço completo para atividades" },
  { img: acessoImg, title: "Acesso & Portaria", desc: "Hall com elevador privativo" },
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
              "Bar Rooftop", "Piscina Coberta 25m", "Academia Completa", "Salão de Festas",
              "Brinquedoteca", "Parque Infantil", "Piscina Infantil", "Jogos Adulto",
              "Jogos Juvenil", "Espaço Pet", "Bicicletário", "Minimercado",
              "Escritório Compartilhado", "Sala de Entregas", "Churrasqueira", "Espaço Bem-Estar",
              "Espelho d'Água", "Massagem", "Terraço Gourmet", "Serviços Pay-Per-Use",
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
