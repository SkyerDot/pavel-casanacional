import { motion } from "framer-motion";
import { useState } from "react";
import planta114 from "@/assets/planta-tipo-114.jpg";
import planta136 from "@/assets/planta-tipo-136.jpg";

const plans = [
  {
    id: "114",
    title: "114 m² — 2 Suítes",
    img: planta114,
    details: [
      "2 suítes",
      "2 vagas determinadas",
      "Living integrado ao terraço",
      "60 unidades + 2 gardens",
    ],
  },
  {
    id: "136",
    title: "136 m² — 3 Suítes",
    img: planta136,
    details: [
      "3 suítes",
      "2 vagas determinadas",
      "Living integrado ao terraço",
      "120 unidades + 4 gardens",
    ],
  },
];

interface FloorPlansSectionProps {
  onCtaClick: () => void;
}

const FloorPlansSection = ({ onCtaClick }: FloorPlansSectionProps) => {
  const [active, setActive] = useState("136");

  const activePlan = plans.find((p) => p.id === active)!;

  return (
    <section id="plantas" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body">Plantas</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground">
            Apartamentos que revelam a sua essência.
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {plans.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`font-body text-sm tracking-wider uppercase px-6 py-3 border transition-colors ${
                active === p.id
                  ? "bg-gold-gradient text-primary-foreground border-transparent"
                  : "border-gold text-primary hover:bg-primary/10"
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            key={activePlan.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-card p-4 border border-gold"
          >
            <img src={activePlan.img} alt={activePlan.title} className="w-full" />
          </motion.div>

          <div>
            <h3 className="font-display text-2xl md:text-3xl text-foreground mb-6">{activePlan.title}</h3>
            <ul className="space-y-4 mb-8">
              {activePlan.details.map((d) => (
                <li key={d} className="flex items-center gap-3 text-secondary-foreground font-body">
                  <span className="w-2 h-2 bg-primary rotate-45 inline-block" />
                  {d}
                </li>
              ))}
            </ul>

            <div className="glass-card p-6 mb-8">
              <p className="text-sm text-muted-foreground font-body mb-1">Diferenciais privativos</p>
              <ul className="text-sm text-secondary-foreground font-body space-y-2 mt-3">
                <li>• Hall social com elevador privativo para todas as unidades</li>
                <li>• Pé-direito de 2,88m</li>
                <li>• Kit infraestrutura para ar-condicionado</li>
                <li>• Cozinha entregue com 2 cubas</li>
                <li>• Ralo linear no terraço social</li>
                <li>• Tomadas USB-C</li>
                <li>• Kit automação de persianas</li>
                <li>• Áreas comuns entregues equipadas e decoradas</li>
                <li>• Serviços Pay-Per-Use</li>
              </ul>
            </div>

            <button
              onClick={onCtaClick}
              className="bg-gold-gradient text-primary-foreground font-body font-semibold text-sm tracking-wider uppercase px-8 py-4 hover:opacity-90 transition-opacity w-full md:w-auto"
            >
              Solicitar Informações
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlansSection;
