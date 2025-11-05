import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Microscope, Beaker, FlaskConical } from "lucide-react";

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const interests = [
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Quality Control",
      description: "Ensuring pharmaceutical products meet strict quality standards",
    },
    {
      icon: <Beaker className="w-8 h-8" />,
      title: "Formulation & Development",
      description: "Creating and optimizing drug formulations",
    },
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: "Analytical Development",
      description: "Developing validation techniques for pharmaceutical analysis",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[hsl(var(--chemistry-teal))] to-[hsl(var(--chemistry-cyan))] bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(var(--chemistry-teal))] to-[hsl(var(--chemistry-cyan))] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              As a final-year B.Pharm student with a strong foundation in pharmaceutical sciences and 
              drug formulation, I am eager to secure entry-level positions in the pharma field to apply 
              my expertise and drive innovation in healthcare.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              I aim to contribute effectively to team goals while accelerating my professional growth 
              in a dynamic pharmaceutical environment. My research on insulin validation through RP-HPLC 
              has given me hands-on experience in analytical techniques and quality assurance.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <div className="bg-card rounded-2xl p-8 border border-border hover:border-[hsl(var(--chemistry-teal))] transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--chemistry-teal)/0.2)] group h-full">
                <div className="text-[hsl(var(--chemistry-teal))] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {interest.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {interest.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {interest.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
