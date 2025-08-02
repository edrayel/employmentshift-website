import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, TrendingUp, Users, Target, Award, BookOpen, Clock, CheckCircle, Star, Play, FileText, Calendar, BarChart3, MapPin, DollarSign, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const JobSeekers = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const jobMarketStats = [
    { label: 'Job Placement Rate', value: '94%', description: 'Within 90 days of program completion' },
    { label: 'Average Salary Increase', value: '32%', description: 'Compared to previous role' },
    { label: 'Interview Success Rate', value: '87%', description: 'First-round to offer conversion' },
    { label: 'Career Satisfaction', value: '91%', description: 'Happy with new role after 6 months' }
  ];

  const jobSeekerTypes = [
    {
      type: 'Active Job Seekers',
      description: 'Currently unemployed and actively searching',
      challenges: ['Competition for roles', 'Skill gaps', 'Interview anxiety', 'Application tracking'],
      solutions: ['Targeted skill development', 'Interview coaching', 'Application optimization', 'Job search strategy'],
      timeframe: '2-8 weeks',
      successRate: '96%'
    },
    {
      type: 'Passive Job Seekers',
      description: 'Employed but open to better opportunities',
      challenges: ['Limited time for search', 'Discretion required', 'Salary negotiation', 'Career positioning'],
      solutions: ['Efficient search methods', 'Personal branding', 'Negotiation training', 'Strategic networking'],
      timeframe: '4-12 weeks',
      successRate: '89%'
    },
    {
      type: 'Career Changers',
      description: 'Transitioning to a new industry or role',
      challenges: ['Transferable skills', 'Industry knowledge', 'Network building', 'Credibility establishment'],
      solutions: ['Skills translation', 'Industry immersion', 'Strategic networking', 'Portfolio development'],
      timeframe: '6-16 weeks',
      successRate: '82%'
    }
  ];

  const programs = [
    {
      title: 'Job Search Accelerator',
      duration: '6 weeks',
      format: 'Online + 1:1 Coaching',
      price: '$1,999',
      description: 'Comprehensive program to land your next role quickly',
      features: [
        'Resume and LinkedIn optimization',
        'Interview preparation and practice',
        'Job search strategy development',
        'Salary negotiation training',
        'Personal branding workshop',
        '90-day job search guarantee'
      ],
      popular: true
    },
    {
      title: 'Executive Job Search',
      duration: '10 weeks',
      format: 'Hybrid + Executive Coach',
      price: '$4,999',
      description: 'Specialized program for senior-level positions',
      features: [
        'Executive resume writing',
        'Board interview preparation',
        'Executive search firm networking',
        'Leadership assessment prep',
        'Executive presence coaching',
        'Confidential search management'
      ]
    },
    {
      title: 'Career Transition Bootcamp',
      duration: '12 weeks',
      format: 'In-person + Mentorship',
      price: '$2,999',
      description: 'For professionals changing industries or roles',
      features: [
        'Skills gap analysis',
        'Industry transition strategy',
        'Portfolio development',
        'Networking acceleration',
        'Transferable skills positioning',
        'Industry mentor matching'
      ]
    }
  ];

  const jobSearchSteps = [
    {
      step: 1,
      title: 'Assessment & Strategy',
      description: 'Evaluate your skills, goals, and market position',
      activities: ['Skills assessment', 'Market research', 'Goal setting', 'Strategy development'],
      duration: '1 week'
    },
    {
      step: 2,
      title: 'Brand & Materials',
      description: 'Create compelling professional materials',
      activities: ['Resume optimization', 'LinkedIn profile', 'Portfolio creation', 'Personal branding'],
      duration: '2 weeks'
    },
    {
      step: 3,
      title: 'Search & Apply',
      description: 'Execute targeted job search strategy',
      activities: ['Job identification', 'Application submission', 'Follow-up strategy', 'Networking outreach'],
      duration: '4-8 weeks'
    },
    {
      step: 4,
      title: 'Interview & Negotiate',
      description: 'Excel in interviews and secure the best offer',
      activities: ['Interview preparation', 'Mock interviews', 'Salary negotiation', 'Offer evaluation'],
      duration: '2-4 weeks'
    }
  ];

  const industryFocus = [
    {
      industry: 'Technology',
      roles: ['Software Engineer', 'Product Manager', 'Data Scientist', 'UX Designer'],
      averageSalary: '$95,000',
      growth: '+22%',
      icon: BarChart3,
      color: 'blue'
    },
    {
      industry: 'Healthcare',
      roles: ['Nurse Practitioner', 'Healthcare Admin', 'Medical Device Sales', 'Health Analyst'],
      averageSalary: '$72,000',
      growth: '+15%',
      icon: Award,
      color: 'green'
    },
    {
      industry: 'Finance',
      roles: ['Financial Analyst', 'Investment Advisor', 'Risk Manager', 'Compliance Officer'],
      averageSalary: '$78,000',
      growth: '+10%',
      icon: DollarSign,
      color: 'purple'
    },
    {
      industry: 'Marketing',
      roles: ['Digital Marketer', 'Brand Manager', 'Content Strategist', 'Growth Hacker'],
      averageSalary: '$65,000',
      growth: '+18%',
      icon: TrendingUp,
      color: 'orange'
    }
  ];

  const resources = [
    {
      title: 'Job Search Toolkit',
      description: 'Complete set of templates and checklists for your search',
      type: 'Free Download',
      icon: FileText
    },
    {
      title: 'Salary Negotiation Guide',
      description: 'Step-by-step guide to negotiating your best offer',
      type: 'Free Guide',
      icon: DollarSign
    },
    {
      title: 'Interview Question Bank',
      description: 'Common interview questions with sample answers',
      type: 'Free Resource',
      icon: Target
    },
    {
      title: 'Job Seeker Meetups',
      description: 'Weekly networking events for active job seekers',
      type: 'Community Events',
      icon: Calendar
    }
  ];

  const successStories = [
    {
      name: 'Rachel Thompson',
      previousRole: 'Marketing Coordinator',
      newRole: 'Senior Marketing Manager',
      company: 'Tech Startup',
      salaryIncrease: '45%',
      timeToJob: '6 weeks',
      quote: 'The program helped me position myself for senior roles and negotiate a salary I never thought possible.'
    },
    {
      name: 'Marcus Johnson',
      previousRole: 'Sales Associate',
      newRole: 'Business Development Manager',
      company: 'Fortune 500',
      salaryIncrease: '60%',
      timeToJob: '4 weeks',
      quote: 'I learned how to showcase my achievements and landed my dream job in record time.'
    },
    {
      name: 'Priya Patel',
      previousRole: 'Teacher',
      newRole: 'Learning & Development Specialist',
      company: 'Global Corporation',
      salaryIncrease: '35%',
      timeToJob: '8 weeks',
      quote: 'The career transition support helped me successfully move from education to corporate training.'
    }
  ];

  const jobSearchTips = [
    {
      tip: 'Optimize Your LinkedIn Profile',
      description: 'A complete LinkedIn profile gets 40x more opportunities',
      icon: Users
    },
    {
      tip: 'Tailor Your Resume',
      description: 'Customize your resume for each application to increase response rates',
      icon: FileText
    },
    {
      tip: 'Practice Interview Skills',
      description: 'Regular practice improves confidence and performance significantly',
      icon: Target
    },
    {
      tip: 'Network Strategically',
      description: '70% of jobs are never posted publicly - networking is key',
      icon: Users
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
            <Search className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Job Seekers</h1>
            <p className="text-xl md:text-2xl mb-8 text-brand-gray-300">
              Land your dream job faster. Proven strategies and personalized support to accelerate your job search.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-brand-black hover:bg-brand-gray-100 px-8 py-3">
                Start Your Job Search
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-brand-black px-8 py-3">
                <Play className="w-4 h-4 mr-2" />
                Watch Success Stories
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
            <h2 className="text-4xl font-bold text-brand-black mb-4">Job Search Success Metrics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven results from our job search programs and coaching
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

      {/* Job Search Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">Our Job Search Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to finding and securing your next opportunity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {jobSearchSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 text-center"
              >
                <div className="w-12 h-12 bg-brand-black text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-brand-black mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <div className="text-sm text-gray-500 mb-4">{step.duration}</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  {step.activities.map((activity, activityIndex) => (
                    <li key={activityIndex} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-brand-black rounded-full mr-2"></div>
                      {activity}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Seeker Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">Tailored Support by Job Seeker Type</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Customized strategies based on your current situation and goals
            </p>
          </motion.div>

          <div className="space-y-8">
            {jobSeekerTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-brand-black mb-2">{type.type}</h3>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    <div className="space-y-2">
                      <div className="text-sm text-gray-500">Timeline: {type.timeframe}</div>
                      <div className="text-sm font-medium text-green-600">Success Rate: {type.successRate}</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-black mb-3">Common Challenges:</h4>
                    <ul className="space-y-2">
                      {type.challenges.map((challenge, challengeIndex) => (
                        <li key={challengeIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-brand-black mb-3">Our Solutions:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {type.solutions.map((solution, solutionIndex) => (
                        <div key={solutionIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{solution}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">High-Demand Industries</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Focus your job search on industries with the best opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industryFocus.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(industry.color)}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-brand-black ml-4">{industry.industry}</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">{industry.averageSalary}</div>
                      <div className="text-sm text-gray-500">{industry.growth} growth</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-medium text-brand-black">Popular Roles:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {industry.roles.map((role, roleIndex) => (
                        <span key={roleIndex} className="bg-gray-50 px-3 py-2 rounded text-sm text-gray-700">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Job Search Tips */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">Essential Job Search Tips</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven strategies to improve your job search effectiveness
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobSearchTips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-brand-black mb-2">{tip.tip}</h3>
                      <p className="text-gray-600">{tip.description}</p>
                    </div>
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
            <h2 className="text-4xl font-bold text-brand-black mb-4">Job Search Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs designed to accelerate your job search success
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
            <h2 className="text-4xl font-bold text-brand-black mb-4">Job Search Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from job seekers who found their dream roles
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
                    <p className="text-sm text-gray-500">{story.previousRole} → {story.newRole}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-medium">Company:</span> {story.company}
                  </p>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-green-600">{story.salaryIncrease} salary increase</span>
                    <span className="text-gray-500">{story.timeToJob}</span>
                  </div>
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
            <h2 className="text-4xl font-bold text-brand-black mb-4">Free Job Search Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential tools and resources to support your job search journey
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
            <h2 className="text-4xl font-bold mb-6">Ready to Land Your Dream Job?</h2>
            <p className="text-xl mb-8 text-brand-gray-300 max-w-2xl mx-auto">
              Join thousands of successful job seekers who have accelerated their careers with our proven programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-brand-black hover:bg-brand-gray-100 px-8 py-3">
                Start Your Job Search
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-brand-black px-8 py-3">
                Download Job Search Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default JobSeekers;