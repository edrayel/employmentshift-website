import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const features = [
    "Industry-leading career transformation experts",
    "Cutting-edge technology and AI-powered tools",
    "Powerful professional network and mentorship",
    "Proven track record of career advancement success"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-5xl font-bold text-brand-black mb-8 font-heading leading-tight">
              Why Choose <span className="text-brand-gray-700">EmploymentShift?</span>
            </h2>
            <p className="text-xl text-brand-gray-600 mb-8 leading-relaxed font-light">
              We have been at the forefront of career transformation, 
              combining industry expertise with cutting-edge technology and a powerful professional community.
            </p>
            <ul className="space-y-5 mb-10">
              {features.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-brand-black rounded-full mt-2"></div>
                  <span className="text-brand-gray-700 text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="bg-brand-black hover:bg-brand-gray-800 text-white rounded-xl px-10 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-w-4 aspect-h-3 group">
              <img src="/campus-placeholder.svg" alt="Professional career development and transformation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-8 float-animation hidden md:block border border-brand-gray-100">
              <div className="text-4xl font-bold text-brand-black mb-1">10+</div>
              <div className="text-brand-gray-600 font-medium">Years of Excellence</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
