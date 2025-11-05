import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "geethapriya0724@gmail.com",
      href: "mailto:geethapriya0724@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 6380654114",
      href: "tel:+916380654114",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Tamil Nadu, India",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[hsl(var(--chemistry-teal))] to-[hsl(var(--chemistry-cyan))] bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(var(--chemistry-teal))] to-[hsl(var(--chemistry-cyan))] mx-auto rounded-full" />
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or pharmaceutical research projects.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              {info.href ? (
                <a
                  href={info.href}
                  className="block bg-card rounded-2xl p-8 border border-border hover:border-[hsl(var(--chemistry-teal))] transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--chemistry-teal)/0.2)] group h-full"
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(var(--chemistry-teal))] to-[hsl(var(--chemistry-cyan))] mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-[hsl(var(--chemistry-dark))]">
                        {info.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {info.label}
                    </h3>
                    <p className="text-[hsl(var(--chemistry-cyan))] break-all">
                      {info.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="bg-card rounded-2xl p-8 border border-border hover:border-[hsl(var(--chemistry-teal))] transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--chemistry-teal)/0.2)] group h-full">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(var(--chemistry-teal))] to-[hsl(var(--chemistry-cyan))] mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-[hsl(var(--chemistry-dark))]">
                        {info.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {info.label}
                    </h3>
                    <p className="text-[hsl(var(--chemistry-cyan))]">
                      {info.value}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Looking forward to connecting with pharmaceutical professionals and research enthusiasts!
          </p>
          <a
            href="mailto:geethapriya0724@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[hsl(var(--chemistry-teal))] to-[hsl(var(--chemistry-cyan))] rounded-full font-semibold text-[hsl(var(--chemistry-dark))] hover:shadow-[0_0_40px_hsl(var(--chemistry-teal))] transition-all duration-300 text-lg"
          >
            <Mail className="w-5 h-5" />
            Send Me an Email
          </a>
        </motion.div>
      </div>
    </section>
  );
};
