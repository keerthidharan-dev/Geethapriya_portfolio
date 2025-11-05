import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Award } from "lucide-react";

export const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const education = [
    {
      degree: "Bachelor of Pharmacy",
      institution: "SRP College of Pharmacy",
      year: "2021-2025",
      score: "GPA 8.0",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "St.Philomena's Hr. Sec. School",
      year: "2021",
      score: "85.8%",
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "St.Philomena's Hr. Sec. School",
      year: "2019",
      score: "87.4%",
    },
  ];

  const achievements = [
    "International Conference at Tagore College of Pharmacy (2024)",
    "National Seminar at JKKMMRF'S - Annai JKK Sampoorani Ammal College Of Pharmacy (2024)",
    "Internship at SAI MIRRA Innopharm PVT LTD - Quality Assurance & Production Departments (JUL-AUG 2025)",
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[hsl(var(--chemistry-teal))] to-[hsl(var(--chemistry-cyan))] bg-clip-text text-transparent">
            Education & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(var(--chemistry-teal))] to-[hsl(var(--chemistry-cyan))] mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <div className="bg-card rounded-2xl p-8 border border-border hover:border-[hsl(var(--chemistry-teal))] transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--chemistry-teal)/0.2)] group">
                <div className="flex items-start gap-4">
                  <div className="text-[hsl(var(--chemistry-teal))] mt-1 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2 text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-[hsl(var(--chemistry-cyan))] mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">{edu.year}</span>
                      <span className="text-[hsl(var(--chemistry-teal))] font-semibold">
                        {edu.score}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-[hsl(var(--chemistry-teal))]" />
              <h3 className="text-2xl font-semibold text-foreground">
                Achievements & Experience
              </h3>
            </div>
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="flex items-start gap-3 text-foreground/90"
                >
                  <span className="text-[hsl(var(--chemistry-teal))] text-xl mt-1">•</span>
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
