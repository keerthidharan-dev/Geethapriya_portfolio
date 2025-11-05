import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FileText, Table2, Clock, MessageCircle, Users } from "lucide-react";

export const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skills = [
    {
      icon: <FileText className="w-6 h-6" />,
      name: "MS Word",
      level: 85,
    },
    {
      icon: <Table2 className="w-6 h-6" />,
      name: "Excel",
      level: 80,
    },
    {
      icon: <Clock className="w-6 h-6" />,
      name: "Time Management",
      level: 90,
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      name: "Communication",
      level: 85,
    },
    {
      icon: <Users className="w-6 h-6" />,
      name: "Team Management",
      level: 88,
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[hsl(var(--chemistry-teal))] to-[hsl(var(--chemistry-cyan))] bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(var(--chemistry-teal))] to-[hsl(var(--chemistry-cyan))] mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto grid gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <div className="bg-card rounded-2xl p-6 border border-border hover:border-[hsl(var(--chemistry-teal))] transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--chemistry-teal)/0.2)] group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-[hsl(var(--chemistry-teal))] group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {skill.name}
                      </h3>
                      <span className="text-[hsl(var(--chemistry-cyan))] font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-[hsl(var(--chemistry-teal))] to-[hsl(var(--chemistry-cyan))] rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
