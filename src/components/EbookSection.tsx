import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

const EbookSection = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/ebook-casa-nacional.pdf";
    link.download = "Casa-Nacional-EZTEC-Ebook.pdf";
    link.click();
  };

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body">Material Completo</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Baixe o <span className="text-gold-gradient">E-book Casa Nacional</span>
          </h2>
          <p className="text-muted-foreground font-body text-sm max-w-2xl mx-auto mb-6">
            Acesse todas as informações sobre plantas, lazer, localização e diferenciais do empreendimento.
          </p>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onClick={handleDownload}
            className="inline-flex items-center gap-2 bg-gold-gradient text-primary-foreground font-body font-semibold text-sm tracking-wider uppercase px-8 py-4 hover:opacity-90 transition-opacity mb-8"
          >
            <Download className="w-5 h-5" />
            Baixar E-book Grátis
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="w-full h-[600px] rounded-lg overflow-hidden border border-gold shadow-lg bg-card"
        >
          <iframe
            src={`${import.meta.env.BASE_URL}ebook-casa-nacional.pdf`}
            width="100%"
            height="100%"
            title="E-book Casa Nacional EZTEC"
            className="w-full h-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-6"
        >
          <p className="text-xs text-muted-foreground font-body flex items-center justify-center gap-2">
            <FileText className="w-4 h-4" />
            Visualize o material completo acima ou faça o download para consultar offline
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EbookSection;
