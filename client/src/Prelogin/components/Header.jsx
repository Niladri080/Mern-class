import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Contact Us", to: "/contact" },
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between rounded-full bg-background/80 shadow-lg px-4 md:px-8 my-3">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer select-none"
            onClick={() => navigate("/")}
          >
            <motion.div
              className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-accent shadow-lg border-4 border-background"
              whileHover={{ rotate: 8, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <svg
                className="h-8 w-8 text-primary-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </motion.div>
            <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent px-4 py-2 rounded-full">
              DocVerify
            </span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.to}
                onClick={() => navigate(link.to)}
                className="relative text-base font-medium text-foreground/80 hover:text-primary transition-colors cursor-pointer px-1"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <span>{link.label}</span>
                <motion.span
                  variants={{
                    rest: { width: 0 },
                    hover: { width: "100%" },
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 -bottom-1 h-0.5 bg-primary rounded-full"
                  style={{ display: "block" }}
                />
              </motion.a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded-lg hover:bg-accent/20 transition"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open menu"
          >
            <svg
              className="h-6 w-6 text-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* CTA */}
          <Button
            onClick={() => navigate("/signup")}
            size="default"
            className="hidden md:inline-flex bg-gradient-to-tr from-primary to-accent text-primary-foreground shadow-md hover:from-primary/90 hover:to-accent/90"
          >
            Get Started
          </Button>
        </div>
      </div>
      {/* Mobile nav overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.to}
                onClick={() => {
                  setMobileOpen(false);
                  navigate(link.to);
                }}
                className="text-2xl font-semibold text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <Button
              onClick={() => {
                setMobileOpen(false);
                navigate("/signup");
              }}
              size="lg"
              className="w-full bg-gradient-to-tr from-primary to-accent text-primary-foreground shadow-md"
            >
              Get Started
            </Button>
            <button
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-accent/20"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <svg
                className="h-7 w-7 text-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
