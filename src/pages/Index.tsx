import { useState } from "react";
import { BeakerAnimation } from "@/components/BeakerAnimation";
import { MoleculeBackground } from "@/components/MoleculeBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

const Index = () => {
  const [showBeaker, setShowBeaker] = useState(true);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {showBeaker ? (
        <BeakerAnimation onComplete={() => setShowBeaker(false)} />
      ) : (
        <>
          <MoleculeBackground />
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <footer className="relative z-10 py-8 text-center text-muted-foreground border-t border-border">
            <p>© 2025 Geethapriya A. All rights reserved.</p>
          </footer>
        </>
      )}
    </div>
  );
};

export default Index;
