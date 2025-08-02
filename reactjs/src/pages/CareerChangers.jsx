import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Target, TrendingUp, BookOpen, Award, Clock, CheckCircle, Star, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CareerChangers = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: 'Assessment & Discovery',
      description: 'Identify your transferable skills, interests, and career goals',
      duration: '2-3 weeks',
      activities: ['Skills assessment', 'Career exploration', 'Goal setting']
    },
    {
      title: 'Skill Development',
      description: 'Build new competencies and enhance existing skills',
      duration: '3-6 months',
      activities: ['Online courses', 'Workshops', 'Certifications']
    },
    {
      title: 'Network Building',
      description: 'Connect with professionals in your target industry',
      duration: 'Ongoing',
      activities: ['Industry events', 'Mentorship', 'Professional associations']
    },
    {
      title: 'Job Search Strategy',
      description: 'Develop and execute your career transition plan',
      duration: '2-4 months',
      activities: ['Resume optimization', 'Interview prep', 'Application strategy']
    }
  ];

  const successStories = [
    {
      name: 'Sarah Johnson',
      previousRole: 'Marketing Manager',
      newRole: 'UX Designer',
      timeframe: '8 months',
      quote: 'EmploymentShift helped me transition from marketing to UX design. The structured approach and mentorship were invaluable.',
      image: '/placeholder-avatar-1.jpg'
    },
    {
      name: 'Michael Chen',
      previousRole: 'Teacher',
      newRole: 'Data Analyst',
      timeframe: '6 months',
      quote: 'I never thought I could move from education to tech, but the career transition program made it possible.',
      image: '/placeholder-avatar-2.jpg'
    },
    {
      name: 'Lisa Rodriguez',
      previousRole: 'Sales Representative',
      newRole: 'Project Manager',
      timeframe: '5 months',
      quote: 'The skills I learned in sales translated perfectly to project management with the right guidance.',
      image: '/placeholder-avatar-3.jpg'
    }
  ];

  const resources = [
    {
      title: 'Career Transition Toolkit',
      description: 'Comprehensive guide with templates, worksheets, and checklists',
      type: 'Download',
      icon: BookOpen
    },
    {
      title: 'Skills Assessment Test',
      description: 'Identify your transferable skills and career strengths',
      type: 'Online Tool',
      icon: Target
    },
    {
      title: 'Industry Research Database',
      description: 'Explore career paths, salary ranges, and job market trends',
      type: 'Database',
      icon: TrendingUp
    },
    {
      title: 'Mentorship Program',
      description: 'Connect with professionals who have made similar transitions',
      type: 'Program',
      icon: Users
    }
  ];

  const programs = [
    {
      title: 'Career Pivot Bootcamp',
      duration: '12 weeks',
      format: 'Hybrid',
      price: '$2,499',
      features: [
        'Personalized career assessment',
        'Skills development workshops',
        'Industry networking events',
        'Job search strategy sessions',
        '1-on-1 career coaching',
        'Resume and LinkedIn optimization'
      ]
    },
    {
      title: 'Executive Transition Program',
      duration: '16 weeks',
      format: 'Online + In-person',
      price: '$4,999',
      features: [
        'Executive-level career coaching',
        'Leadership assessment',
        'Board readiness preparation',
        'Executive search firm connections',
        'Personal branding strategy',
        'Negotiation skills training'
      ]
    },
    {
      title: 'Tech Career Switch',
      duration: '20 weeks',
      format: 'Online',
      price: '$3,499',
      features: [
        'Technical skills training',
        'Portfolio development',
        'Tech industry mentorship',
        'Coding bootcamp partnerships',
        'Tech company networking',
        'Interview preparation'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-brand-black text-white pt-60 pb-40">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <TrendingUp className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Career Changers</h1>
            <p className="text-xl md:text-2xl mb-8 text-brand-gray-300">
              Transform your career with confidence. We help professionals navigate successful career transitions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-brand-black hover:bg-brand-gray-100 px-8 py-3">
                Start Your Journey
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-brand-black px-8 py-3">
                <Play className="w-4 h-4 mr-2" />
                Watch Success Stories
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">Why Career Changers Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the challenges of career transition and provide the support you need to succeed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Personalized Approach',
                description: 'Every career transition is unique. We create customized plans based on your background, goals, and timeline.'
              },
              {
                icon: Users,
                title: 'Expert Guidance',
                description: 'Work with career coaches who have helped thousands of professionals successfully change careers.'
              },
              {
                icon: Award,
                title: 'Proven Results',
                description: '85% of our career changers land their target role within 6 months of program completion.'
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-brand-black rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-black mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Career Transition Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">Your Career Transition Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 4-step process guides you through every stage of your career change
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-lg shadow-md p-6 cursor-pointer transition-all duration-300 ${
                  activeStep === index ? 'ring-2 ring-brand-black' : 'hover:shadow-lg'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                    activeStep === index ? 'bg-brand-black' : 'bg-gray-400'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="ml-3">
                    <span className="text-sm text-gray-500">{step.duration}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-brand-black mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <ul className="space-y-1">
                  {step.activities.map((activity, actIndex) => (
                    <li key={actIndex} className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real professionals who successfully changed careers with our help
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-brand-black rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{story.name.charAt(0)}</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-brand-black">{story.name}</h3>
                    <p className="text-sm text-gray-500">{story.timeframe} transition</p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">From:</span> {story.previousRole}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">To:</span> {story.newRole}
                  </p>
                </div>
                <blockquote className="text-gray-700 italic">
                  "{story.quote}"
                </blockquote>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">Career Transition Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the program that best fits your career change goals and timeline
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-brand-black mb-4">{program.title}</h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">{program.duration}</span>
                  <span className="text-gray-600">{program.format}</span>
                </div>
                <div className="text-3xl font-bold text-brand-black mb-6">{program.price}</div>
                <ul className="space-y-3 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-brand-black hover:bg-brand-gray-800 text-white">
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">Free Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started with these helpful tools and resources for career changers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6 text-center cursor-pointer hover:shadow-lg transition-shadow duration-300"
                >
                  <IconComponent className="w-8 h-8 mx-auto mb-4 text-brand-black" />
                  <h3 className="text-lg font-semibold text-brand-black mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <span className="text-sm bg-brand-black text-white px-3 py-1 rounded-full">{resource.type}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-black text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Change Your Career?</h2>
            <p className="text-xl mb-8 text-brand-gray-300 max-w-2xl mx-auto">
              Take the first step towards your new career. Schedule a free consultation to discuss your goals and explore your options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-brand-black hover:bg-brand-gray-100 px-8 py-3">
                Schedule Free Consultation
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-brand-black px-8 py-3">
                Download Career Change Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CareerChangers;