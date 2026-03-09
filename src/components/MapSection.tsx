import { motion } from "framer-motion";

const MapSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body">Como Chegar</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Encontre o <span className="text-gold-gradient">Casa Nacional</span>
          </h2>
          <p className="text-muted-foreground font-body text-sm max-w-2xl mx-auto">
            Rua Diogo de Quadros, 440 — Brooklin, São Paulo
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full h-[450px] rounded-lg overflow-hidden border border-gold shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.8687766847346!2d-46.69428892377744!3d-23.61083096503989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce50f6e7649f7b%3A0x9c9e6c7e0e0e0e0e!2sR.%20Diogo%20de%20Quadros%2C%20440%20-%20Brooklin%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Casa Nacional EZTEC"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
