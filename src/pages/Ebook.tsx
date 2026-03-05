import { useState } from "react";
import { motion } from "framer-motion";
import { Download, BookOpen } from "lucide-react";
import fachadaImg from "@/assets/fachada.jpg";

const Ebook = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/ebook-casa-nacional.pdf";
    link.download = "Casa-Nacional-EZTEC-Ebook.pdf";
    link.click();
  };

  return (
    <div className="bg-background min-h-screen flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl grid md:grid-cols-2 gap-0 overflow-hidden rounded-lg border border-gold"
      >
        {/* Left – visual */}
        <div className="relative hidden md:block">
          <img src={fachadaImg} alt="Casa Nacional EZTEC" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/60" />
          <div className="absolute bottom-8 left-8 right-8">
            <BookOpen className="w-10 h-10 text-primary mb-3" />
            <p className="font-display text-2xl text-foreground leading-snug">
              Conheça todos os detalhes do <span className="text-gold-gradient">Casa Nacional</span>
            </p>
          </div>
        </div>

        {/* Right – form / download */}
        <div className="bg-card p-8 md:p-12 flex flex-col justify-center">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-2">Ebook Exclusivo</p>
          <h1 className="font-display text-3xl md:text-4xl text-foreground mb-3">
            Casa Nacional <span className="text-gold-gradient">EZTEC</span>
          </h1>
          <p className="font-body text-sm text-muted-foreground mb-8 leading-relaxed">
            Baixe o material completo com plantas, perspectivas, lazer e informações sobre o empreendimento no Brooklin.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                required
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground font-body focus:outline-none focus:ring-1 focus:ring-primary rounded-sm"
              />
              <input
                required
                type="email"
                placeholder="Seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground font-body focus:outline-none focus:ring-1 focus:ring-primary rounded-sm"
              />
              <input
                required
                type="tel"
                placeholder="WhatsApp (DDD + número)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground font-body focus:outline-none focus:ring-1 focus:ring-primary rounded-sm"
              />
              <button
                type="submit"
                className="w-full bg-gold-gradient text-primary-foreground font-body font-semibold text-sm tracking-wider uppercase px-6 py-4 hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Baixar Ebook Grátis
              </button>
              <p className="text-[10px] text-muted-foreground text-center font-body">
                Seus dados estão seguros e não serão compartilhados.
              </p>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-6"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                <Download className="w-7 h-7 text-primary" />
              </div>
              <p className="font-display text-xl text-foreground">Seu ebook está pronto!</p>
              <p className="text-sm text-muted-foreground font-body">
                Clique abaixo para fazer o download.
              </p>
              <button
                onClick={handleDownload}
                className="w-full bg-gold-gradient text-primary-foreground font-body font-semibold text-sm tracking-wider uppercase px-6 py-4 hover:opacity-90 transition-opacity"
              >
                Fazer Download
              </button>
              <a
                href="/"
                className="block text-xs text-primary hover:underline font-body mt-4"
              >
                ← Voltar para o site
              </a>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Ebook;
