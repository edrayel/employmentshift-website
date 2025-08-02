import { motion } from "framer-motion";
import { Brain, Wrench, Megaphone } from "lucide-react";

const HowWeWorkSection = () => {
  const workMethods = [
    {
      icon: Brain,
      title: "Insight Engine",
      subtitle: "Unassailable Research & Foresight",
      description: "We analyze the signals to provide clarity on tomorrow's challenges, today."
    },
    {
      icon: Wrench,
      title: "Intervention Lab",
      subtitle: "Scalable, Real-World Solutions",
      description: "We don't just advise; we design and deploy the technology and learning systems that transform institutions."
    },
    {
      icon: Megaphone,
      title: "Influence Platform",
      subtitle: "Setting the National Agenda",
      description: "We use data-driven storytelling and courageous dialogue to shape policy and build public consensus."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">
            How We Architect Change
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {workMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-lg p-8 text-left hover:border-gray-300 transition-all duration-300"
              >
                <div className="mb-6">
                  <IconComponent className="h-8 w-8 text-brand-primary mb-4" />
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-2">
                  {method.title}
                </h3>
                <h4 className="text-sm font-semibold text-brand-primary mb-4 uppercase tracking-wide">
                  {method.subtitle}
                </h4>
                <p className="text-brand-gray-600 leading-relaxed">
                  {method.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;