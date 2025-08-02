import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Target, ArrowRight, CheckCircle } from 'lucide-react';
import { mockData } from '../data/mockData';

const Products = () => {
  const { services = [] } = mockData.products || {};

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-black to-brand-gray-800 text-white pt-60 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Educational Products
            </h1>
            <p className="text-xl text-brand-gray-200 mb-8">
              Comprehensive learning solutions designed to empower students and educators
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-brand-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-brand-gray-100 rounded-lg flex items-center justify-center mb-6">
                    <BookOpen className="w-8 h-8 text-brand-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-black mb-4">{product.name}</h3>
                  <p className="text-brand-gray-600 mb-6">{product.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {(product.features || []).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-brand-gray-600" />
                        <span className="text-brand-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-brand-black">{product.methodology || product.category}</span>
                    <button className="bg-brand-black text-white px-6 py-3 rounded-lg hover:bg-brand-gray-800 transition-colors duration-300 flex items-center space-x-2">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-6">
              Ready to Transform Your Learning Experience?
            </h2>
            <p className="text-xl text-brand-gray-600 mb-8">
              Contact our team to learn more about our educational products and find the perfect solution for your needs.
            </p>
            <button className="bg-brand-black text-white px-8 py-4 rounded-lg hover:bg-brand-gray-800 transition-colors duration-300 text-lg font-semibold">
              Contact Us Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;