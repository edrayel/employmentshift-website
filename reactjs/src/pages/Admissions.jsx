import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, FileText, Users, ArrowRight, CheckCircle, Clock, Award } from 'lucide-react';
import { mockData } from '../data/mockData';

const Admissions = () => {
  const { admissions = {} } = mockData || {};

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-black to-brand-gray-800 text-white pt-60 pb-40">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join Our Learning Community
            </h1>
            <p className="text-xl text-brand-gray-200 mb-8">
              Start your educational journey with us. Discover programs designed to help you achieve your goals.
            </p>
            <button className="bg-white text-brand-black px-8 py-4 rounded-lg hover:bg-brand-gray-100 transition-colors duration-300 text-lg font-semibold">
              Apply Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-6">Application Process</h2>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to begin your educational journey with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(admissions.processSteps || []).map((step, index) => (
              <motion.div
                key={step.number || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-brand-black text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-4">{step.title}</h3>
                <p className="text-brand-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-brand-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-brand-black mb-6">Admission Requirements</h2>
              <p className="text-xl text-brand-gray-600 mb-8">
                We welcome students from diverse backgrounds. Here's what you need to apply:
              </p>
              
              <div className="space-y-4">
                {(admissions.requirements || []).map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-brand-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-brand-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-brand-black mb-6">Important Dates</h3>
              <div className="space-y-6">
                {(admissions.importantDates || []).map((date, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-gray-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-brand-black" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-black">{date.event}</h4>
                      <p className="text-brand-gray-600">{date.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-6">Available Programs</h2>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
              Choose from our diverse range of programs designed to meet your educational and career goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(admissions.programs || []).map((program, index) => (
              <motion.div
                key={program.id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-brand-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-brand-gray-100 rounded-lg flex items-center justify-center mb-6">
                    <GraduationCap className="w-8 h-8 text-brand-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-black mb-4">{program.name}</h3>
                  <p className="text-brand-gray-600 mb-6">{program.description}</p>
                  
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-brand-gray-500" />
                      <span className="text-sm text-brand-gray-600">{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-brand-gray-500" />
                      <span className="text-sm text-brand-gray-600">{program.degree}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-brand-black text-white py-3 rounded-lg hover:bg-brand-gray-800 transition-colors duration-300 flex items-center justify-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-brand-gray-200 mb-8">
              Take the first step towards your educational goals. Our admissions team is here to help you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-brand-black px-8 py-4 rounded-lg hover:bg-brand-gray-100 transition-colors duration-300 text-lg font-semibold">
                Apply Now
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-brand-black transition-colors duration-300 text-lg font-semibold">
                Schedule a Visit
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;