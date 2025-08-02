import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Users, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OurProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Policy Analysis Platform',
      description: 'Comprehensive tool for analyzing and developing evidence-based policy recommendations.',
      features: ['Data Analytics', 'Policy Modeling', 'Impact Assessment', 'Stakeholder Collaboration'],
      category: 'Research Tools',
      status: 'Available',
      icon: <Target className="w-8 h-8" />
    },
    {
      id: 2,
      name: 'Community Engagement Suite',
      description: 'Digital platform for facilitating community participation in governance and decision-making.',
      features: ['Digital Surveys', 'Town Hall Management', 'Feedback Analytics', 'Citizen Portal'],
      category: 'Civic Technology',
      status: 'Available',
      icon: <Users className="w-8 h-8" />
    },
    {
      id: 3,
      name: 'Impact Measurement Framework',
      description: 'Systematic approach to measuring and evaluating the effectiveness of social interventions.',
      features: ['KPI Tracking', 'ROI Analysis', 'Social Impact Metrics', 'Reporting Dashboard'],
      category: 'Evaluation Tools',
      status: 'Available',
      icon: <Star className="w-8 h-8" />
    },
    {
      id: 4,
      name: 'Innovation Lab Toolkit',
      description: 'Resources and methodologies for fostering innovation in public and private sectors.',
      features: ['Design Thinking', 'Rapid Prototyping', 'Innovation Workshops', 'Idea Management'],
      category: 'Innovation',
      status: 'Coming Soon',
      icon: <Zap className="w-8 h-8" />
    }
  ];

  const categories = ['All', ...new Set(products.map(product => product.category))];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProducts = products.filter(product => 
    selectedCategory === 'All' || product.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-black to-brand-gray-800 text-white py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-xl text-brand-gray-200 mb-8">
              Innovative tools and frameworks designed to drive systemic change and empower organizations to create meaningful impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-brand-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                    selectedCategory === category
                      ? 'bg-brand-black text-white'
                      : 'bg-white text-brand-gray-600 hover:bg-brand-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-brand-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-brand-gray-100 rounded-lg text-brand-black">
                        {product.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-brand-black mb-1">
                          {product.name}
                        </h3>
                        <span className="text-sm text-brand-gray-600">
                          {product.category}
                        </span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      product.status === 'Available' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {product.status}
                    </span>
                  </div>
                  
                  <p className="text-brand-gray-600 mb-6">
                    {product.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-brand-black mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-brand-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    className={`w-full ${
                      product.status === 'Available'
                        ? 'bg-brand-black hover:bg-brand-gray-800 text-white'
                        : 'bg-brand-gray-200 text-brand-gray-500 cursor-not-allowed'
                    }`}
                    disabled={product.status !== 'Available'}
                  >
                    {product.status === 'Available' ? 'Learn More' : 'Coming Soon'}
                    {product.status === 'Available' && <ArrowRight className="w-4 h-4 ml-2" />}
                  </Button>
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Organization?</h2>
            <p className="text-xl text-brand-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how our products can help you drive meaningful change and achieve your impact goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-brand-black hover:bg-brand-gray-100 px-8 py-3 rounded-lg font-semibold">
                Schedule a Demo
              </Button>
              <Button className="border border-white text-white hover:bg-white hover:text-brand-black px-8 py-3 rounded-lg font-semibold">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurProducts;