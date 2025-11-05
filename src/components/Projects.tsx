import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FileText, ExternalLink } from "lucide-react";

export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[hsl(var(--chemistry-teal))] to-[hsl(var(--chemistry-cyan))] bg-clip-text text-transparent">
            Research Project
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(var(--chemistry-teal))] to-[hsl(var(--chemistry-cyan))] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-2xl p-8 border border-border hover:border-[hsl(var(--chemistry-teal))] transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--chemistry-teal)/0.3)] group">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-[hsl(var(--chemistry-teal))] mt-1 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-10 h-10" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  Development and Validation of Analytical Technique for Insulin-R Evaluation by RP-HPLC
                </h3>
                
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    This comprehensive research project focuses on developing and validating a robust 
                    analytical method for determining the specificity of insulin finished products using 
                    Reverse-Phase High-Performance Liquid Chromatography (RP-HPLC).
                  </p>
                  
                  <div className="bg-muted/50 rounded-xl p-6 my-6">
                    <h4 className="text-xl font-semibold mb-3 text-[hsl(var(--chemistry-cyan))]">
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-[hsl(var(--chemistry-teal))] mt-1">•</span>
                        <span>Validated specificity of insulin finished product using advanced chromatographic techniques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[hsl(var(--chemistry-teal))] mt-1">•</span>
                        <span>Conducted comprehensive studies on linearity, precision, accuracy, and robustness</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[hsl(var(--chemistry-teal))] mt-1">•</span>
                        <span>Performed system suitability tests ensuring method reliability</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[hsl(var(--chemistry-teal))] mt-1">•</span>
                        <span>Utilized state-of-the-art RP-HPLC instrumentation for analytical development</span>
                      </li>
                    </ul>
                  </div>

                  <p>
                    The project demonstrates practical application of pharmaceutical analytical chemistry 
                    principles and provides valuable insights into quality control methodologies for 
                    biopharmaceutical products.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  <button
                    onClick={() => window.open('https://docs.google.com/document/d/1Yc0Os34zVF7FjBVUTcXkMcPi-LfIzb2E/edit?usp=sharing&ouid=103973266773612157249&rtpof=true&sd=true', '_blank', 'noopener')}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[hsl(var(--chemistry-teal))] to-[hsl(var(--chemistry-cyan))] rounded-full font-semibold text-[hsl(var(--chemistry-dark))] hover:shadow-[0_0_30px_hsl(var(--chemistry-teal))] transition-all duration-300"
                  >
                    <FileText className="w-5 h-5" />
                    View Full Project
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-muted rounded-full text-sm text-foreground/80">
                      RP-HPLC
                    </span>
                    <span className="px-4 py-2 bg-muted rounded-full text-sm text-foreground/80">
                      Analytical Validation
                    </span>
                    <span className="px-4 py-2 bg-muted rounded-full text-sm text-foreground/80">
                      Quality Control
                    </span>
                    <span className="px-4 py-2 bg-muted rounded-full text-sm text-foreground/80">
                      Insulin Research
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
