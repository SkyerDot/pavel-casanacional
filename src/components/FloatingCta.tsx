import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5511995502261&text=Ol%C3%A1%2C+Paulo+Coelho.+Tenho+interesse+no+Casa+Nacional+e+gostaria+de+conhecer+as+unidades+dispon%C3%ADveis.+Pode+me+orientar%3F&type=phone_number&app_absent=0";

interface FloatingCtaProps {
  visible: boolean;
}

const FloatingCta = ({ visible }: FloatingCtaProps) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 bg-gold-gradient text-primary-foreground font-body font-semibold text-sm tracking-wider uppercase px-6 py-4 shadow-lg hover:brightness-110"
          aria-label="Agende uma visita"
        >
          Agende uma visita
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default FloatingCta;