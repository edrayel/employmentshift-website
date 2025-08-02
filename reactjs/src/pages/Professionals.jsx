import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Users, Target, Award, BookOpen, Clock, CheckCircle, Star, Play, FileText, Calendar, BarChart3, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Professionals = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const professionalStats = [
    { label: 'Career Advancement Rate', value: '92%', description: 'Professionals who advanced within 12 months' },
    { label: 'Average Salary Increase', value: '28%', description: 'After completing our programs' },
    { label: 'Leadership Promotions', value: '74%', description: 'Moved to management roles' },
    { label: 'Industry Recognition', value: '85%', description: 'Received professional awards or recognition' }
  ];

  const careerLevels = [
    {
      title: 'Mid-Level Professionals',
      experience: '3-7 years',
      focus: 'Skill Enhancement & Leadership Development',
      challenges: ['Breaking into senior roles', 'Developing leadership skills', 'Building strategic thinking'],
      solutions: ['Leadership training programs', 'Strategic thinking workshops', 'Executive mentorship'],
      averageIncrease: '25%'
    },
    {
      title: 'Senior Professionals',
      experience: '7-15 years',
      focus: 'Executive Presence & Strategic Leadership',
      challenges: ['Transitioning to C-suite', 'Managing complex teams', 'Industry thought leadership'],
      solutions: ['Executive coaching', 'Board readiness programs', 'Thought leadership development'],
      averageIncrease: '35%'
    },
    {
      title: 'Executive Level',
      experience: '15+ years',
      focus: 'Organizational Transformation & Innovation',
      challenges: ['Digital transformation', 'Cultural change management', 'Succession planning'],
      solutions: ['Transformation leadership', 'Innovation workshops', 'Legacy planning'],
      averageIncrease: '45%'
    }
  ];

  const programs = [
    {
      title: 'Executive Leadership Accelerator',
      duration: '12 weeks',
      format: 'Hybrid + 1:1 Coaching',
      price: '$4,999',
      description: 'Comprehensive leadership development for senior professionals',
      features: [
        'Executive presence training',
        'Strategic decision-making',
        'Team leadership mastery',
        'Board presentation skills',
        'Crisis management',
        'Personal brand development'
      ],
      popular: true
    },
    {
      title: 'Industry Expert Certification',
      duration: '16 weeks',
      format: 'Online + Mentorship',
      price: '$3,499',
      description: 'Become a recognized expert in your field',
      features: [
        'Thought leadership development',
        'Content creation strategy',
        'Speaking engagement training',
        'Industry networking',
        'Research and analysis skills',
        'Media relations training'
      ]
    },
    {
      title: 'Digital Transformation Leader',
      duration: '20 weeks',
      format: 'In-person + Virtual',
      price: '$6,999',
      description: 'Lead digital transformation initiatives in your organization',
      features: [
        'Digital strategy development',
        'Change management',
        'Technology leadership',
        'Data-driven decision making',
        'Innovation frameworks',
        'Stakeholder management'
      ]
    }
  ];

  const skillAreas = [
    {
      category: 'Leadership & Management',
      skills: ['Team Leadership', 'Strategic Planning', 'Performance Management', 'Conflict Resolution'],
      icon: Users,
      color: 'blue'
    },
    {
      category: 'Business Strategy',
      skills: ['Market Analysis', 'Competitive Intelligence', 'Business Development', 'Risk Management'],
      icon: Target,
      color: 'green'
    },
    {
      category: 'Digital & Technology',
      skills: ['Digital Transformation', 'Data Analytics', 'AI Implementation', 'Cybersecurity'],
      icon: BarChart3,
      color: 'purple'
    },
    {
      category: 'Innovation & Growth',
      skills: ['Innovation Management', 'Product Development', 'Market Expansion', 'Startup Methodology'],
      icon: Lightbulb,
      color: 'orange'
    }
  ];

  const resources = [
    {
      title: 'Executive Assessment Tool',
      description: 'Comprehensive evaluation of your leadership capabilities',
      type: 'Free Assessment',
      icon: FileText
    },
    {
      title: 'Industry Salary Benchmarks',
      description: 'Current compensation data for your role and industry',
      type: 'Free Report',
      icon: BarChart3
    },
    {
      title: 'Leadership Development Roadmap',
      description: 'Personalized career advancement planning tool',
      type: 'Interactive Tool',
      icon: TrendingUp
    },
    {
      title: 'Executive Networking Events',
      description: 'Monthly high-level networking opportunities',
      type: 'Premium Events',
      icon: Calendar
    }
  ];

  const successStories = [
    {
      name: 'Sarah Chen',
      role: 'VP of Operations → Chief Operating Officer',
      company: 'Fortune 500 Manufacturing',
      achievement: 'Promoted to C-suite within 8 months',
      quote: 'The executive coaching and strategic thinking workshops were game-changers for my career trajectory.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Senior Manager → Director of Innovation',
      company: 'Tech Startup',
      achievement: '40% salary increase + equity package',
      quote: 'I learned how to position myself as an innovation leader and drive real organizational change.'
    },
    {
      name: 'Jennifer Park',
      role: 'Department Head → Regional VP',
      company: 'Global Consulting Firm',
      achievement: 'Expanded responsibility across 5 countries',
      quote: 'The program helped me develop the global mindset and cultural intelligence needed for international leadership.'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600'
    };
    return colorMap[color] || 'bg-gray-100 text-gray-600';
  };

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
            <Briefcase className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Professionals</h1>
            <p className="text-xl md:text-2xl mb-8 text-brand-gray-300">
              Accelerate your career growth. Advanced programs for experienced professionals ready to reach the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-brand-black hover:bg-brand-gray-100 px-8 py-3">
                Advance Your Career
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-brand-black px-8 py-3">
                <Play className="w-4 h-4 mr-2" />
                Watch Executive Success Stories
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">Professional Development Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable results from our professional development programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {professionalStats.map((stat, index) => (
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

      {/* Career Levels */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">Programs by Career Level</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored development paths based on your experience and career goals
            </p>
          </motion.div>

          <div className="space-y-8">
            {careerLevels.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-brand-black mb-2">{level.title}</h3>
                    <p className="text-gray-600 mb-2">{level.experience} experience</p>
                    <p className="text-lg font-medium text-brand-black mb-4">{level.focus}</p>
                    <div className="text-2xl font-bold text-green-600">
                      {level.averageIncrease} avg. salary increase
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-black mb-3">Common Challenges:</h4>
                    <ul className="space-y-2">
                      {level.challenges.map((challenge, challengeIndex) => (
                        <li key={challengeIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-black mb-3">Our Solutions:</h4>
                    <ul className="space-y-2">
                      {level.solutions.map((solution, solutionIndex) => (
                        <li key={solutionIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">Core Skill Development Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential competencies for professional advancement in today's business environment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(area.color)}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-black ml-4">{area.category}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {area.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="bg-white px-3 py-2 rounded text-sm text-gray-700">
                        {skill}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
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
            <h2 className="text-4xl font-bold text-brand-black mb-4">Executive Development Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Intensive programs designed for ambitious professionals ready to lead
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
            <h2 className="text-4xl font-bold text-brand-black mb-4">Executive Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professionals who accelerated their careers through our programs
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
                    <p className="text-sm text-gray-500">{story.role}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-medium">Company:</span> {story.company}
                  </p>
                  <p className="text-sm font-medium text-green-600">{story.achievement}</p>
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

      {/* Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">Executive Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tools and insights to support your professional development journey
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
                  <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{resource.type}</span>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Accelerate Your Career?</h2>
            <p className="text-xl mb-8 text-brand-gray-300 max-w-2xl mx-auto">
              Join the ranks of successful executives who have transformed their careers through our proven development programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-brand-black hover:bg-brand-gray-100 px-8 py-3">
                Start Your Executive Journey
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-brand-black px-8 py-3">
                Schedule Executive Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Professionals;