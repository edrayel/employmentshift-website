import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, TrendingUp, Users, Target, Award, BookOpen, Clock, CheckCircle, Star, Play, FileText, Calendar, BarChart3, Rocket, DollarSign, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Entrepreneurs = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const entrepreneurStats = [
    { label: 'Startup Success Rate', value: '78%', description: 'Still operating after 2 years' },
    { label: 'Average Funding Raised', value: '$2.3M', description: 'Within first 18 months' },
    { label: 'Revenue Growth', value: '340%', description: 'Year-over-year average' },
    { label: 'Market Expansion', value: '89%', description: 'Expanded to new markets' }
  ];

  const startupStages = [
    {
      stage: 'Ideation & Validation',
      description: 'From concept to market-validated idea',
      duration: '2-4 months',
      focus: ['Market research', 'Customer validation', 'Business model design', 'MVP development'],
      outcomes: ['Validated business concept', 'Target market identified', 'Initial customer feedback', 'Prototype or MVP']
    },
    {
      stage: 'Launch & Growth',
      description: 'Building and scaling your business',
      duration: '6-12 months',
      focus: ['Product development', 'Customer acquisition', 'Team building', 'Operations setup'],
      outcomes: ['Product-market fit', 'Growing customer base', 'Operational systems', 'Initial revenue']
    },
    {
      stage: 'Scale & Expansion',
      description: 'Scaling operations and expanding markets',
      duration: '12+ months',
      focus: ['Market expansion', 'Team scaling', 'Process optimization', 'Strategic partnerships'],
      outcomes: ['Market leadership', 'Sustainable growth', 'Strong team', 'Strategic alliances']
    }
  ];

  const programs = [
    {
      title: 'Startup Accelerator Program',
      duration: '16 weeks',
      format: 'Hybrid + Mentorship',
      price: '$4,999',
      description: 'Comprehensive program to launch and scale your startup',
      features: [
        'Business model validation',
        'Product development guidance',
        'Investor pitch preparation',
        'Legal and regulatory support',
        'Marketing and sales strategy',
        'Ongoing mentorship network'
      ],
      popular: true
    },
    {
      title: 'Tech Entrepreneur Bootcamp',
      duration: '12 weeks',
      format: 'Online + Workshops',
      price: '$3,499',
      description: 'Specialized program for technology-based startups',
      features: [
        'Technical product development',
        'Software architecture guidance',
        'Tech team building',
        'Digital marketing strategies',
        'SaaS business models',
        'Technology partnerships'
      ]
    },
    {
      title: 'Social Impact Venture',
      duration: '20 weeks',
      format: 'In-person + Community',
      price: '$5,999',
      description: 'For entrepreneurs creating positive social impact',
      features: [
        'Impact measurement frameworks',
        'Social enterprise models',
        'Grant and funding strategies',
        'Community engagement',
        'Sustainability planning',
        'Partnership development'
      ]
    }
  ];

  const businessTypes = [
    {
      type: 'Technology Startups',
      description: 'Software, apps, and digital platforms',
      examples: ['SaaS platforms', 'Mobile apps', 'AI/ML solutions', 'Fintech'],
      icon: Rocket,
      color: 'blue',
      averageFunding: '$1.8M',
      timeToMarket: '8-12 months'
    },
    {
      type: 'E-commerce & Retail',
      description: 'Online stores and retail innovations',
      examples: ['D2C brands', 'Marketplace platforms', 'Subscription boxes', 'Retail tech'],
      icon: Globe,
      color: 'green',
      averageFunding: '$800K',
      timeToMarket: '4-6 months'
    },
    {
      type: 'Service Businesses',
      description: 'Professional and consumer services',
      examples: ['Consulting firms', 'Digital agencies', 'Healthcare services', 'Education'],
      icon: Users,
      color: 'purple',
      averageFunding: '$300K',
      timeToMarket: '2-4 months'
    },
    {
      type: 'Social Enterprises',
      description: 'Businesses with social or environmental impact',
      examples: ['Sustainability solutions', 'Social platforms', 'Community services', 'Impact investing'],
      icon: Award,
      color: 'orange',
      averageFunding: '$1.2M',
      timeToMarket: '6-10 months'
    }
  ];

  const resources = [
    {
      title: 'Business Plan Template',
      description: 'Comprehensive template for creating your business plan',
      type: 'Free Template',
      icon: FileText
    },
    {
      title: 'Startup Funding Guide',
      description: 'Complete guide to raising capital for your startup',
      type: 'Free Guide',
      icon: DollarSign
    },
    {
      title: 'Market Research Toolkit',
      description: 'Tools and frameworks for validating your market',
      type: 'Free Toolkit',
      icon: BarChart3
    },
    {
      title: 'Entrepreneur Meetups',
      description: 'Monthly networking events for entrepreneurs',
      type: 'Community Events',
      icon: Calendar
    }
  ];

  const successStories = [
    {
      name: 'David Kim',
      company: 'EcoTech Solutions',
      industry: 'Clean Technology',
      achievement: 'Raised $3.2M Series A, 200% revenue growth',
      quote: 'The accelerator program provided the structure and mentorship I needed to turn my idea into a thriving business.'
    },
    {
      name: 'Lisa Martinez',
      company: 'HealthConnect',
      industry: 'Healthcare Technology',
      achievement: 'Acquired by major healthcare provider for $15M',
      quote: 'Learning how to validate my market and build strategic partnerships was crucial to our success.'
    },
    {
      name: 'Ahmed Hassan',
      company: 'LocalMarket',
      industry: 'E-commerce',
      achievement: 'Expanded to 5 countries, $2M ARR',
      quote: 'The program taught me how to scale systematically and build a sustainable business model.'
    }
  ];

  const challenges = [
    {
      challenge: 'Idea Validation',
      description: 'Ensuring your business idea has market demand',
      solution: 'Customer discovery, market research, and MVP testing',
      icon: Target
    },
    {
      challenge: 'Funding & Investment',
      description: 'Securing capital to start and grow your business',
      solution: 'Investor pitch training, funding strategy, and network access',
      icon: DollarSign
    },
    {
      challenge: 'Team Building',
      description: 'Finding and retaining the right talent',
      solution: 'Recruitment strategies, equity planning, and culture development',
      icon: Users
    },
    {
      challenge: 'Market Competition',
      description: 'Standing out in crowded markets',
      solution: 'Differentiation strategies, brand building, and competitive analysis',
      icon: TrendingUp
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
            <Lightbulb className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Entrepreneurs</h1>
            <p className="text-xl md:text-2xl mb-8 text-brand-gray-300">
              Turn your vision into reality. Comprehensive support for entrepreneurs at every stage of their journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-brand-black hover:bg-brand-gray-100 px-8 py-3">
                Start Your Startup Journey
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-brand-black px-8 py-3">
                <Play className="w-4 h-4 mr-2" />
                Watch Founder Stories
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Entrepreneur Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">Startup Success Metrics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Track record of entrepreneurs who have completed our programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {entrepreneurStats.map((stat, index) => (
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

      {/* Startup Stages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">Startup Journey Stages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We support entrepreneurs at every stage of their startup journey
            </p>
          </motion.div>

          <div className="space-y-8">
            {startupStages.map((stage, index) => (
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
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-brand-black text-white rounded-full flex items-center justify-center font-bold mr-3">
                        {index + 1}
                      </div>
                      <h3 className="text-2xl font-semibold text-brand-black">{stage.stage}</h3>
                    </div>
                    <p className="text-gray-600 mb-2">{stage.description}</p>
                    <p className="text-sm text-gray-500">{stage.duration}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-black mb-3">Key Focus Areas:</h4>
                    <ul className="space-y-2">
                      {stage.focus.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-black mb-3">Expected Outcomes:</h4>
                    <ul className="space-y-2">
                      {stage.outcomes.map((outcome, outcomeIndex) => (
                        <li key={outcomeIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{outcome}</span>
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

      {/* Business Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">Types of Businesses We Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized guidance for different types of entrepreneurial ventures
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessTypes.map((business, index) => {
              const IconComponent = business.icon;
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
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(business.color)}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-black ml-4">{business.type}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{business.description}</p>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {business.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="bg-white px-3 py-2 rounded text-sm text-gray-700">
                        {example}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span><strong>Avg. Funding:</strong> {business.averageFunding}</span>
                    <span><strong>Time to Market:</strong> {business.timeToMarket}</span>
                  </div>
                </motion.div>
              );
            })}
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
            <h2 className="text-4xl font-bold text-brand-black mb-4">Overcoming Startup Challenges</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help entrepreneurs navigate the most common obstacles to success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => {
              const IconComponent = challenge.icon;
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
                      <h3 className="text-lg font-semibold text-brand-black mb-2">{challenge.challenge}</h3>
                      <p className="text-gray-600 mb-3">{challenge.description}</p>
                      <p className="text-sm text-green-700 bg-green-50 p-3 rounded">
                        <strong>Our Solution:</strong> {challenge.solution}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">Entrepreneur Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs designed to launch and scale successful startups
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">Founder Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entrepreneurs who built successful companies through our programs
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
                    <p className="text-sm text-gray-500">{story.company}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-medium">Industry:</span> {story.industry}
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">Entrepreneur Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential tools and resources to help you build your startup
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
                  <span className="text-sm bg-purple-100 text-purple-800 px-3 py-1 rounded-full">{resource.type}</span>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Build Your Startup?</h2>
            <p className="text-xl mb-8 text-brand-gray-300 max-w-2xl mx-auto">
              Join our community of successful entrepreneurs and turn your innovative ideas into thriving businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-brand-black hover:bg-brand-gray-100 px-8 py-3">
                Start Your Startup Journey
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-brand-black px-8 py-3">
                Download Startup Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Entrepreneurs;