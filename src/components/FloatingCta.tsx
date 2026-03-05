import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 bg-gold-gradient text-primary-foreground p-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
          aria-label="Fale conosco no WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default FloatingCta;