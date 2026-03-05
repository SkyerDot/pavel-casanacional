import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface FloatingCtaProps {
  onClick: () => void;
}

const FloatingCta = ({ onClick }: FloatingCtaProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2 }}
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 bg-gold-gradient text-primary-foreground p-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
      aria-label="Fale conosco"
    >
      <MessageCircle className="w-6 h-6" />
    </motion.button>
  );
};

export default FloatingCta;