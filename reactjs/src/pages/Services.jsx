import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Target, BookOpen, TrendingUp, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

/**
 * Services page component for Employment Shift
 * Displays the various career services offered by the company
 */
const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: 'Career Coaching',
      description: 'Personalized one-on-one coaching sessions to help you navigate your career path and achieve your professional goals.',
      features: ['Resume optimization', 'Interview preparation', 'Career strategy planning', 'Salary negotiation']
    },
    {
      icon: Users,
      title: 'Recruitment Services',
      description: 'Connect with top employers and find the perfect job match through our extensive network of industry partners.',
      features: ['Job matching', 'Employer connections', 'Application support', 'Follow-up assistance']
    },
    {
      icon: Target,
      title: 'Skills Assessment',
      description: 'Comprehensive evaluation of your current skills and identification of areas for improvement and growth.',
      features: ['Skill gap analysis', 'Competency mapping', 'Development recommendations', 'Progress tracking']
    },
    {
      icon: BookOpen,
      title: 'Professional Training',
      description: 'Industry-specific training programs designed to enhance your skills and increase your marketability.',
      features: ['Technical skills training', 'Soft skills development', 'Industry certifications', 'Continuous learning']
    },
    {
      icon: TrendingUp,
      title: 'Career Transition',
      description: 'Support for professionals looking to change careers or advance to the next level in their current field.',
      features: ['Transition planning', 'Industry insights', 'Network building', 'Change management']
    },
    {
      icon: Award,
      title: 'Executive Placement',
      description: 'Specialized services for senior-level professionals and executives seeking leadership positions.',
      features: ['Executive search', 'Leadership assessment', 'Board placement', 'C-suite consulting']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <section className="bg-brand-black text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl mb-8 text-brand-gray-300">
              Comprehensive career solutions tailored to your professional journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-brand-gray-800 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-gray-800">{service.title}</h3>
                  </div>
                  <p className="text-brand-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-brand-gray-600">
                        <div className="w-2 h-2 bg-brand-gray-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
            <p className="text-xl mb-8 text-gray-300">
              Let's discuss how our services can help you achieve your professional goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-brand-black hover:bg-brand-gray-800 text-white px-8 py-3 rounded-lg font-semibold"
              >
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-800 px-8 py-3 rounded-lg font-semibold"
              >
                <Link to="/case-studies">View Success Stories</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;