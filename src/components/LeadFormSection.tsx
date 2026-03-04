import { motion } from "framer-motion";
import { useState, forwardRef } from "react";
import rooftopImg from "@/assets/rooftop-view.jpg";

const LeadFormSection = forwardRef<HTMLElement>((_, ref) => {
  const [form, setForm] = useState({ nome: "", telefone: "", email: "", mensagem: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message
    const msg = `Olá! Tenho interesse no Casa Nacional EZTEC.\n\nNome: ${form.nome}\nTelefone: ${form.telefone}\nE-mail: ${form.email}\n${form.mensagem ? `Mensagem: ${form.mensagem}` : ""}`;
    const waUrl = `https://wa.me/?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <section ref={ref} id="contato" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0">
        <img src={rooftopImg} alt="Rooftop" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="relative z-10 container mx-auto">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body">Fale com o Corretor</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">
              Agende sua visita exclusiva.
            </h2>
            <p className="text-muted-foreground text-sm font-body">
              Preencha o formulário e receba informações detalhadas sobre condições, plantas e disponibilidade.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-10 text-center"
            >
              <p className="font-display text-2xl text-primary mb-2">Obrigado pelo interesse!</p>
              <p className="text-muted-foreground font-body text-sm">
                Entraremos em contato em breve com todas as informações.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="glass-card p-8 space-y-5"
            >
              <div>
                <label className="text-xs text-muted-foreground font-body tracking-wider uppercase block mb-2">
                  Nome completo *
                </label>
                <input
                  required
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="w-full bg-muted border border-gold px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs text-muted-foreground font-body tracking-wider uppercase block mb-2">
                    Telefone *
                  </label>
                  <input
                    required
                    type="tel"
                    value={form.telefone}
                    onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                    className="w-full bg-muted border border-gold px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground font-body tracking-wider uppercase block mb-2">
                    E-mail *
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-muted border border-gold px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-muted-foreground font-body tracking-wider uppercase block mb-2">
                  Mensagem (opcional)
                </label>
                <textarea
                  rows={3}
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  className="w-full bg-muted border border-gold px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold-gradient text-primary-foreground font-body font-semibold text-sm tracking-wider uppercase px-8 py-4 hover:opacity-90 transition-opacity"
              >
                Enviar e Falar no WhatsApp
              </button>
              <p className="text-xs text-muted-foreground text-center font-body">
                Ao enviar, você concorda em receber contato do corretor sobre este imóvel.
              </p>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
});

LeadFormSection.displayName = "LeadFormSection";

export default LeadFormSection;
