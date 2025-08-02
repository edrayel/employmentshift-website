import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Users, Target, TrendingUp, BookOpen, Award, Clock, CheckCircle, Star, Play, FileText, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RecentGraduates = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const jobMarketStats = [
    { label: 'Graduate Employment Rate', value: '87%', description: 'Within 6 months of graduation' },
    { label: 'Average Starting Salary', value: '$52,000', description: 'Across all industries' },
    { label: 'Job Satisfaction Rate', value: '78%', description: 'In first role after graduation' },
    { label: 'Career Advancement', value: '65%', description: 'Promoted within 2 years' }
  ];

  const careerPaths = [
    {
      title: 'Technology',
      roles: ['Software Developer', 'Data Analyst', 'UX Designer', 'Product Manager'],
      averageSalary: '$65,000',
      growth: '+15%',
      description: 'High-demand field with excellent growth opportunities'
    },
    {
      title: 'Healthcare',
      roles: ['Healthcare Administrator', 'Medical Assistant', 'Health Analyst', 'Patient Coordinator'],
      averageSalary: '$48,000',
      growth: '+12%',
      description: 'Stable industry with meaningful impact on communities'
    },
    {
      title: 'Finance',
      roles: ['Financial Analyst', 'Investment Associate', 'Risk Analyst', 'Credit Analyst'],
      averageSalary: '$58,000',
      growth: '+8%',
      description: 'Traditional career path with strong earning potential'
    },
    {
      title: 'Marketing',
      roles: ['Digital Marketing Specialist', 'Content Creator', 'Social Media Manager', 'Brand Coordinator'],
      averageSalary: '$45,000',
      growth: '+10%',
      description: 'Creative field with diverse opportunities across industries'
    }
  ];

  const programs = [
    {
      title: 'Graduate Launch Program',
      duration: '8 weeks',
      format: 'Hybrid',
      price: '$1,299',
      description: 'Comprehensive program designed specifically for recent graduates',
      features: [
        'Professional resume writing',
        'Interview skills training',
        'LinkedIn profile optimization',
        'Networking strategies',
        'Salary negotiation workshop',
        'First 90 days success planning'
      ],
      popular: true
    },
    {
      title: 'Industry Immersion Bootcamp',
      duration: '12 weeks',
      format: 'Online + Mentorship',
      price: '$2,499',
      description: 'Deep dive into your chosen industry with expert guidance',
      features: [
        'Industry-specific training',
        'Professional mentorship',
        'Company project simulations',
        'Industry networking events',
        'Certification preparation',
        'Job placement assistance'
      ]
    },
    {
      title: 'Entrepreneurship Track',
      duration: '16 weeks',
      format: 'In-person + Online',
      price: '$3,999',
      description: 'For graduates interested in starting their own business',
      features: [
        'Business plan development',
        'Startup funding strategies',
        'Legal and regulatory guidance',
        'Marketing and sales training',
        'Investor pitch preparation',
        'Ongoing business support'
      ]
    }
  ];

  const resources = [
    {
      title: 'Graduate Job Search Toolkit',
      description: 'Templates, checklists, and guides for your job search',
      type: 'Free Download',
      icon: FileText
    },
    {
      title: 'Salary Negotiation Guide',
      description: 'Learn how to negotiate your first salary with confidence',
      type: 'Free Guide',
      icon: Target
    },
    {
      title: 'Industry Career Maps',
      description: 'Explore career progression paths in different industries',
      type: 'Interactive Tool',
      icon: TrendingUp
    },
    {
      title: 'Graduate Networking Events',
      description: 'Monthly events to connect with employers and peers',
      type: 'Events',
      icon: Calendar
    }
  ];

  const successStories = [
    {
      name: 'Alex Thompson',
      degree: 'Business Administration',
      role: 'Marketing Coordinator',
      company: 'TechStart Inc.',
      timeToJob: '3 months',
      quote: 'The Graduate Launch Program gave me the confidence and skills I needed to land my dream job right out of college.'
    },
    {
      name: 'Maria Garcia',
      degree: 'Computer Science',
      role: 'Software Developer',
      company: 'Innovation Labs',
      timeToJob: '2 months',
      quote: 'The technical interview preparation was invaluable. I felt completely prepared for every interview.'
    },
    {
      name: 'James Wilson',
      degree: 'Psychology',
      role: 'HR Specialist',
      company: 'Global Corp',
      timeToJob: '4 months',
      quote: 'I learned how to translate my psychology degree into valuable business skills that employers wanted.'
    }
  ];

  const challenges = [
    {
      challenge: 'Lack of Experience',
      solution: 'Highlight internships, projects, and transferable skills from coursework',
      icon: Award
    },
    {
      challenge: 'Competitive Job Market',
      solution: 'Stand out with a strong personal brand and targeted applications',
      icon: Target
    },
    {
      challenge: 'Salary Expectations',
      solution: 'Research market rates and learn negotiation strategies',
      icon: TrendingUp
    },
    {
      challenge: 'Professional Network',
      solution: 'Build connections through alumni networks and industry events',
      icon: Users
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
            <GraduationCap className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Recent Graduates</h1>
            <p className="text-xl md:text-2xl mb-8 text-brand-gray-300">
              Launch your career with confidence. We help new graduates transition from college to their first professional role.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-brand-black hover:bg-brand-gray-100 px-8 py-3">
                Start Your Career Journey
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-brand-black px-8 py-3">
                <Play className="w-4 h-4 mr-2" />
                Watch Graduate Success Stories
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Market Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">Graduate Job Market Insights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Current statistics and trends for recent graduates entering the job market
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jobMarketStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 text-center"
              >
                <div className="text-3xl font-bold text-brand-black mb-2">{stat.value}</div>
                <h3 className="text-lg font-semibold text-brand-black mb-2">{stat.label}</h3>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">Overcoming Graduate Challenges</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges recent graduates face and provide targeted solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-red-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-brand-black mb-2">{item.challenge}</h3>
                      <p className="text-gray-600">{item.solution}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">Popular Career Paths</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore high-demand career paths and opportunities for recent graduates
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {careerPaths.map((path, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-brand-black">{path.title}</h3>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">{path.averageSalary}</div>
                    <div className="text-sm text-gray-500">{path.growth} growth</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{path.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium text-brand-black">Common Roles:</h4>
                  <div className="flex flex-wrap gap-2">
                    {path.roles.map((role, roleIndex) => (
                      <span key={roleIndex} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">
                        {role}
                      </span>
                    ))}
                  </div>
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
            <h2 className="text-4xl font-bold text-brand-black mb-4">Graduate Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized programs designed to help recent graduates launch successful careers
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
                className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 relative ${
                  program.popular ? 'ring-2 ring-brand-black' : ''
                }`}
              >
                {program.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-brand-black text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-semibold text-brand-black mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
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

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">Graduate Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recent graduates who successfully launched their careers with our help
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
                    <p className="text-sm text-gray-500">{story.degree}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Role:</span> {story.role}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Company:</span> {story.company}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Time to Job:</span> {story.timeToJob}
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

      {/* Free Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">Free Graduate Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential tools and resources to help you start your career search
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
                  className="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer hover:shadow-lg transition-shadow duration-300"
                >
                  <IconComponent className="w-8 h-8 mx-auto mb-4 text-brand-black" />
                  <h3 className="text-lg font-semibold text-brand-black mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">{resource.type}</span>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Launch Your Career?</h2>
            <p className="text-xl mb-8 text-brand-gray-300 max-w-2xl mx-auto">
              Join thousands of successful graduates who have launched their careers with our proven programs and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-brand-black hover:bg-brand-gray-100 px-8 py-3">
                Get Started Today
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-brand-black px-8 py-3">
                Download Graduate Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RecentGraduates;