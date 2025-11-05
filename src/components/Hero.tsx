import React, { useRef } from "react";
import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";
import { ArrowDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Hero = () => {
  const containerRef = useRef<HTMLElement | null>(null);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const openPortfolio = () => {
    // scroll to #projects (portfolio) if exists
    const target = document.querySelector("#projects");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" ref={containerRef} className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-4 flex justify-center relative">
        <Card className="w-full max-w-5xl overflow-visible">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6 overflow-visible"
              >
                <div className="space-y-2">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-[hsl(var(--chemistry-cyan))] text-lg font-light tracking-wider"
                  >
                    Hello, I'm
                  </motion.p>
                  <h1
                    className="text-3xl md:text-5xl italic font-semibold whitespace-nowrap leading-snug tracking-normal overflow-visible relative z-20 pb-1"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, hsl(var(--chemistry-teal)), hsl(var(--chemistry-cyan)), hsl(var(--chemistry-blue)))",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Geethapriya A
                  </h1>
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-xl md:text-2xl text-foreground/80"
                >
                  B.Pharm Student & Research Enthusiast
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-muted-foreground text-lg leading-relaxed"
                >
                  Passionate about pharmaceutical sciences, analytical development, and quality control.
                  Specializing in drug formulation and validation techniques.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="flex gap-4 pt-4"
                >
                  <button
                    onClick={scrollToAbout}
                    className="px-8 py-3 bg-gradient-to-r from-[hsl(var(--chemistry-teal))] to-[hsl(var(--chemistry-cyan))] rounded-full font-semibold text-[hsl(var(--chemistry-dark))] hover:shadow-[0_0_30px_hsl(var(--chemistry-teal))] transition-all duration-300"
                  >
                    Learn More
                  </button>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-8 py-3 border-2 border-[hsl(var(--chemistry-teal))] rounded-full font-semibold text-[hsl(var(--chemistry-teal))] hover:bg-[hsl(var(--chemistry-teal))]/10 transition-all duration-300"
                  >
                    Contact Me
                  </a>
                </motion.div>
              </motion.div>

              {/* Right Content - avatar */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative flex items-center justify-end"
              >
                <div className="relative w-fit rounded-[1.5rem] overflow-hidden border-2 border-[hsl(var(--chemistry-teal))] shadow-[0_0_26px_hsl(var(--chemistry-teal)/0.22)] bg-card">
                  <img src={profileImg} alt="Geethapriya A" className="block w-64 h-auto object-contain object-center" />
                  <div className="absolute -top-6 -right-6 w-16 h-16 animate-float">
                    <svg viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="18" fill="hsl(var(--chemistry-teal))" opacity="0.6" />
                      <circle cx="20" cy="30" r="8" fill="hsl(var(--chemistry-cyan))" opacity="0.6" />
                      <circle cx="80" cy="40" r="8" fill="hsl(var(--chemistry-blue))" opacity="0.6" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Capsule removed per request */}

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <button onClick={scrollToAbout} className="animate-bounce text-[hsl(var(--chemistry-teal))] hover:text-[hsl(var(--chemistry-cyan))] transition-colors">
          <ArrowDown size={32} />
        </button>
      </motion.div>
    </section>
  );
};


