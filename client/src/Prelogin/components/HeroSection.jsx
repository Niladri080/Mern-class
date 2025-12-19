import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export default function HeroSection() {
  const heroRef = useRef(null);
  const cardRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (cardRef.current) observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      className="py-20 md:py-28 lg:py-32 overflow-hidden relative"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight">
              Secure Document Verification for Digital Governance
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl">
              Streamline document verification with AI-powered analysis,
              real-time tracking, and transparent audit logs for citizens and
              administrators.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-base hover:scale-105 transition-transform duration-200"
                onClick={() => navigate("/signup")}
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base bg-transparent hover:scale-105 transition-transform duration-200"
                onClick={() => navigate("/how-it-works")}
              >
                How it works
              </Button>
            </div>
          </motion.div>

          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative h-72 md:h-[520px] rounded-lg overflow-hidden border border-border bg-gradient-to-br from-white/60 to-gray-50/40 dark:from-black/40 dark:to-black/20">
              {/* Decorative blobs & stacked cards */}
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="absolute -left-16 -top-10 w-64 h-64 rounded-full bg-gradient-to-r from-primary/40 to-accent/40 opacity-60 blur-3xl animate-blob"
                  aria-hidden="true"
                />

                {/* stacked cards to give subtle 3D feel */}
                <div className="absolute bottom-8 right-8 hidden md:flex items-end gap-[-8px] perspective-1000">
                  <div
                    className="w-36 h-48 rounded-lg bg-white/80 dark:bg-black/60 shadow-2xl transform -rotate-6 translate-y-6 tilt"
                    aria-hidden="true"
                  />
                  <div
                    className="w-44 h-56 rounded-lg bg-white/90 dark:bg-black/50 shadow-2xl transform -rotate-2 translate-y-3 tilt"
                    aria-hidden="true"
                  />
                  <div
                    className="w-48 h-60 rounded-lg bg-gradient-to-tr from-accent/10 to-primary/10 backdrop-blur-md border border-border shadow-2xl tilt"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Floating card (content preview) */}
              <motion.div
                className="absolute left-6 bottom-6 w-[300px] md:w-80 rounded-xl border border-border bg-card/90 p-6 shadow-xl backdrop-blur-md"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded bg-accent/10 flex items-center justify-center">
                      <svg
                        className="h-6 w-6 text-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">
                        Verification Status
                      </div>
                      <div className="text-lg font-semibold text-foreground">
                        Approved
                      </div>
                    </div>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Document ID</span>
                      <span className="font-medium text-foreground">
                        DOC-2025-001
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Submitted</span>
                      <span className="font-medium text-foreground">
                        Jan 15, 2025
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Verified by</span>
                      <span className="font-medium text-foreground">
                        Admin Team
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
