import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "2348032237889";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function WhatsAppWidget() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-40 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      {/* Glow Effect - Outer Ring */}
      <motion.div
        animate={{
          boxShadow: [
            "0 0 20px rgba(37, 211, 102, 0.5), 0 0 40px rgba(37, 211, 102, 0.3)",
            "0 0 30px rgba(37, 211, 102, 0.7), 0 0 60px rgba(37, 211, 102, 0.4)",
            "0 0 20px rgba(37, 211, 102, 0.5), 0 0 40px rgba(37, 211, 102, 0.3)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 rounded-full"
      />

      {/* Main Button */}
      <div className="relative w-16 h-16 bg-green-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors duration-300">
        <MessageCircle className="w-8 h-8 text-white" />
      </div>

      {/* Floating Animation Pulse */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full pointer-events-none"
      />
    </motion.a>
  );
}
