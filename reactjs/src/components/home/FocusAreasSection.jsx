import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Users, Building, Globe, Heart } from "lucide-react";

const FocusAreasSection = () => {
  const focusAreas = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Transforming learning systems for the future workforce"
    },
    {
      icon: Briefcase,
      title: "Employment",
      description: "Creating pathways to meaningful and sustainable careers"
    },
    {
      icon: Users,
      title: "Social Justice",
      description: "Building equitable systems that serve all communities"
    },
    {
      icon: Building,
      title: "Economic Development",
      description: "Fostering resilient and inclusive economic growth"
    },
    {
      icon: Globe,
      title: "Technology",
      description: "Leveraging innovation for positive social impact"
    },
    {
      icon: Heart,
      title: "Community Wellbeing",
      description: "Strengthening the foundations of thriving societies"
    }
  ];

  const domains = [
    {
      title: "Justice",
      description: "Advancing equity and fairness in systems and institutions",
      icon: "⚖️"
    },
    {
      title: "Education", 
      description: "Transforming learning for the future workforce",
      icon: "🎓"
    },
    {
      title: "Technology",
      description: "Leveraging innovation for positive social impact",
      icon: "💡"
    },
    {
      title: "Economic Development",
      description: "Building sustainable and inclusive prosperity",
      icon: "📈"
    }
  ];

  return (
    <>
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Our Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">
            Our Focus Areas
          </h2>
          <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
            We work across interconnected domains to create systemic change
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {focusAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-lg p-6 text-left hover:border-gray-300 transition-all duration-300"
              >
                <IconComponent className="h-8 w-8 text-brand-primary mb-4" />
                <h3 className="text-lg font-bold text-brand-black mb-3">
                  {area.title}
                </h3>
                <p className="text-brand-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>

    {/* The Domains We Shape - New Dark Section */}
    <section className="py-24 bg-gradient-to-br from-brand-black via-brand-gray-800 to-brand-gray-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-primary/10 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Domains We Shape
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Driving systemic transformation across critical sectors that define our future
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-500 hover:scale-105 cursor-pointer h-full">
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {domain.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-primary transition-colors duration-300">
                    {domain.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {domain.description}
                  </p>
                  
                  {/* Animated Underline */}
                  <div className="w-16 h-1 bg-brand-primary mx-auto mt-6 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-brand-primary/30 rounded-full group-hover:bg-brand-primary transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/20 rounded-full group-hover:bg-white/40 transition-colors duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Ready to create meaningful change in these critical areas? Let's collaborate to build a better future.
          </p>
          <button className="bg-white text-brand-black px-8 py-4 rounded-xl font-semibold hover:bg-brand-gray-100 hover:text-brand-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-2 border-transparent hover:border-brand-gray-300">
            Explore Our Impact
          </button>
        </motion.div>
      </div>
      </section>
    </>
  );
};

export default FocusAreasSection;