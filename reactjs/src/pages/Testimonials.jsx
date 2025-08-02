import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Building, User, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Testimonials page component for Employment Shift
 * Displays client and candidate success stories
 */
const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Mock testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Senior Marketing Manager',
      company: 'TechCorp Solutions',
      category: 'Candidate',
      rating: 5,
      image: '/api/placeholder/80/80',
      testimonial: 'Employment Shift transformed my career trajectory. Their personalized coaching and job matching service helped me land my dream role in just 6 weeks. The team understood my goals and connected me with opportunities that perfectly aligned with my skills and aspirations.',
      outcome: 'Secured dream job with 40% salary increase',
      featured: true
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'HR Director',
      company: 'Innovation Labs',
      category: 'Client',
      rating: 5,
      image: '/api/placeholder/80/80',
      testimonial: 'Working with Employment Shift has revolutionized our hiring process. They consistently deliver high-quality candidates who are not only skilled but also great cultural fits. Our time-to-hire has decreased by 50%, and employee retention has improved significantly.',
      outcome: 'Reduced hiring time by 50% and improved retention',
      featured: true
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Software Engineer',
      company: 'StartupXYZ',
      category: 'Candidate',
      rating: 5,
      image: '/api/placeholder/80/80',
      testimonial: 'After being unemployed for 8 months, I was losing hope. Employment Shift not only helped me find a job but also provided career coaching that boosted my confidence. Their training programs updated my skills, making me more competitive in the market.',
      outcome: 'Found employment after 8 months of searching',
      featured: true
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'CEO',
      company: 'Growth Dynamics',
      category: 'Client',
      rating: 5,
      image: '/api/placeholder/80/80',
      testimonial: 'Employment Shift has been our trusted recruitment partner for over 2 years. Their deep understanding of our industry and culture has resulted in successful placements across all levels of our organization. Highly recommended!',
      outcome: 'Successful partnership for 2+ years',
      featured: false
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      role: 'Project Manager',
      company: 'Enterprise Solutions',
      category: 'Candidate',
      rating: 5,
      image: '/api/placeholder/80/80',
      testimonial: 'The career transition support I received was exceptional. Employment Shift helped me pivot from finance to project management, providing the necessary training and connecting me with the right opportunities. I couldn\'t be happier with my new career path.',
      outcome: 'Successfully transitioned careers',
      featured: false
    },
    {
      id: 6,
      name: 'Robert Martinez',
      role: 'VP of Operations',
      company: 'Manufacturing Plus',
      category: 'Client',
      rating: 5,
      image: '/api/placeholder/80/80',
      testimonial: 'Employment Shift understands the unique challenges of our industry. They\'ve helped us build a strong team by finding candidates with the right technical skills and cultural fit. Their service is professional, efficient, and results-driven.',
      outcome: 'Built strong technical team',
      featured: false
    }
  ];

  const categories = ['All', 'Candidate', 'Client'];
  const featuredTestimonials = testimonials.filter(t => t.featured);
  
  // Filter testimonials based on category
  const filteredTestimonials = testimonials.filter(testimonial => {
    return selectedCategory === 'All' || testimonial.category === selectedCategory;
  });

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => 
      prev === featuredTestimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => 
      prev === 0 ? featuredTestimonials.length - 1 : prev - 1
    );
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-gray-600 to-brand-gray-700 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Success Stories</h1>
            <p className="text-xl md:text-2xl mb-8 text-brand-gray-100">
              Hear from our clients and candidates who have achieved their career goals with Employment Shift
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-brand-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-brand-gray-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">5,000+</h3>
              <p className="text-gray-600">Successful Placements</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">500+</h3>
              <p className="text-gray-600">Partner Companies</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">4.9/5</h3>
              <p className="text-gray-600">Average Rating</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">95%</h3>
              <p className="text-gray-600">Client Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Success Stories</h2>
          
          <div className="relative max-w-4xl mx-auto">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Quote className="w-16 h-16 text-brand-gray-400 mx-auto mb-8" />
              
              <blockquote className="text-2xl md:text-3xl font-light mb-8 leading-relaxed">
                "{featuredTestimonials[activeTestimonial]?.testimonial}"
              </blockquote>
              
              <div className="flex items-center justify-center mb-6">
                {renderStars(featuredTestimonials[activeTestimonial]?.rating || 5)}
              </div>
              
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={featuredTestimonials[activeTestimonial]?.image}
                  alt={featuredTestimonials[activeTestimonial]?.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="text-xl font-semibold">
                    {featuredTestimonials[activeTestimonial]?.name}
                  </h4>
                  <p className="text-gray-300">
                    {featuredTestimonials[activeTestimonial]?.role}
                  </p>
                  <p className="text-brand-gray-400 text-sm">
                    {featuredTestimonials[activeTestimonial]?.company}
                  </p>
                </div>
              </div>
              
              <div className="mt-6 bg-brand-gray-600 text-white px-6 py-2 rounded-full inline-block">
                {featuredTestimonials[activeTestimonial]?.outcome}
              </div>
            </motion.div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {featuredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial ? 'bg-brand-gray-400' : 'bg-white bg-opacity-30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors duration-300 ${
                  selectedCategory === category
                    ? 'bg-brand-gray-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-brand-gray-100'
                }`}
              >
                {category} Stories
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            All Success Stories
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                  <span className={`ml-4 px-3 py-1 rounded-full text-sm font-medium ${
                    testimonial.category === 'Client' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-brand-gray-100 text-brand-gray-800'
                  }`}>
                    {testimonial.category}
                  </span>
                </div>
                
                <blockquote className="text-gray-700 mb-6 italic">
                  "{testimonial.testimonial}"
                </blockquote>
                
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-brand-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-gray-800">
                    Outcome: {testimonial.outcome}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand-gray-600 to-brand-gray-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
            <p className="text-xl mb-8 text-brand-gray-100">
              Join thousands of professionals who have transformed their careers with Employment Shift
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-brand-gray-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold">
                Get Started Today
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-brand-gray-600 px-8 py-3 rounded-lg font-semibold">
                Contact Our Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;