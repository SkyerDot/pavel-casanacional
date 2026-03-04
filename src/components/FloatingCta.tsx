import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface FloatingCtaProps {
  onClick: () => void;
}

const FloatingCta = ({ onClick }: FloatingCtaProps) => {
  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring" }}
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 bg-gold-gradient p-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
      aria-label="Falar com corretor"
    >
      <MessageCircle className="w-6 h-6 text-primary-foreground" />
    </motion.button>
  );
};

export default FloatingCta;
