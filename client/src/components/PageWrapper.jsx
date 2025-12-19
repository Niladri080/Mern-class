import { motion } from "framer-motion";

export default function PageWrapper({ children, className = "" }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="absolute -left-24 top-8 w-64 h-64 rounded-full bg-gradient-to-r from-primary/30 to-accent/30 opacity-60 blur-3xl animate-blob"
        aria-hidden="true"
      />
      <div
        className="absolute right-8 -bottom-20 w-72 h-72 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 opacity-60 blur-2xl animate-blob animation-delay-2000"
        aria-hidden="true"
      />

      <motion.main
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        {children}
      </motion.main>
    </div>
  );
}
