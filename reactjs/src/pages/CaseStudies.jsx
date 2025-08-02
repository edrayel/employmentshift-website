import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building, Users, TrendingUp, Clock, Target, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * CaseStudies page component for Employment Shift
 * Showcases detailed client success stories and project outcomes
 */
const CaseStudies = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  // Mock case studies data
  const caseStudies = [
    {
      id: 1,
      title: 'TechCorp Solutions: Scaling Engineering Team by 300%',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'Rapid growth required scaling their engineering team from 20 to 80 developers within 6 months while maintaining code quality and team culture.',
      solution: 'Implemented a comprehensive recruitment strategy including technical assessments, cultural fit interviews, and a structured onboarding program.',
      results: [
        'Successfully hired 60 qualified engineers in 6 months',
        'Reduced time-to-hire from 45 to 18 days',
        'Achieved 95% employee retention rate',
        'Maintained high code quality standards'
      ],
      metrics: {
        timeToHire: '18 days',
        retention: '95%',
        satisfaction: '4.8/5',
        roiIncrease: '250%'
      },
      image: '/api/placeholder/600/400',
      featured: true,
      duration: '6 months',
      teamSize: '60 hires'
    },
    {
      id: 2,
      title: 'Healthcare Plus: Building a Remote-First Workforce',
      client: 'Healthcare Plus',
      industry: 'Healthcare',
      challenge: 'Transitioning from traditional office-based work to a fully remote workforce while maintaining productivity and patient care quality.',
      solution: 'Developed remote work policies, implemented digital collaboration tools, and provided comprehensive training for remote work best practices.',
      results: [
        'Successfully transitioned 200+ employees to remote work',
        'Increased productivity by 25%',
        'Reduced operational costs by 40%',
        'Improved work-life balance scores by 60%'
      ],
      metrics: {
        timeToHire: '12 days',
        retention: '92%',
        satisfaction: '4.7/5',
        roiIncrease: '180%'
      },
      image: '/api/placeholder/600/400',
      featured: true,
      duration: '4 months',
      teamSize: '200 employees'
    },
    {
      id: 3,
      title: 'Manufacturing Pro: Upskilling for Industry 4.0',
      client: 'Manufacturing Pro',
      industry: 'Manufacturing',
      challenge: 'Needed to upskill existing workforce to handle advanced automation and digital manufacturing processes.',
      solution: 'Created customized training programs focusing on digital skills, automation technologies, and data analytics for manufacturing.',
      results: [
        'Trained 150 employees in new technologies',
        'Increased production efficiency by 35%',
        'Reduced training costs by 50%',
        'Zero layoffs during digital transformation'
      ],
      metrics: {
        timeToHire: 'N/A',
        retention: '98%',
        satisfaction: '4.9/5',
        roiIncrease: '320%'
      },
      image: '/api/placeholder/600/400',
      featured: true,
      duration: '8 months',
      teamSize: '150 employees'
    },
    {
      id: 4,
      title: 'FinanceFirst: Compliance and Risk Management Staffing',
      client: 'FinanceFirst',
      industry: 'Finance',
      challenge: 'Urgent need for specialized compliance and risk management professionals to meet new regulatory requirements.',
      solution: 'Leveraged our network of finance professionals and created targeted recruitment campaigns for compliance specialists.',
      results: [
        'Filled 25 critical compliance positions',
        'Met all regulatory deadlines',
        'Established ongoing talent pipeline',
        'Reduced compliance risks by 80%'
      ],
      metrics: {
        timeToHire: '14 days',
        retention: '96%',
        satisfaction: '4.8/5',
        roiIncrease: '200%'
      },
      image: '/api/placeholder/600/400',
      featured: false,
      duration: '3 months',
      teamSize: '25 hires'
    },
    {
      id: 5,
      title: 'RetailMax: Seasonal Workforce Management',
      client: 'RetailMax',
      industry: 'Retail',
      challenge: 'Managing fluctuating workforce needs during peak seasons while maintaining service quality.',
      solution: 'Developed a flexible staffing model with pre-screened talent pools and rapid deployment capabilities.',
      results: [
        'Managed 500+ seasonal hires across 50 locations',
        'Reduced hiring time by 60%',
        'Improved customer satisfaction scores',
        'Created sustainable workforce model'
      ],
      metrics: {
        timeToHire: '7 days',
        retention: '85%',
        satisfaction: '4.5/5',
        roiIncrease: '150%'
      },
      image: '/api/placeholder/600/400',
      featured: false,
      duration: '12 months',
      teamSize: '500+ hires'
    },
    {
      id: 6,
      title: 'EduTech Innovations: Building a Global Development Team',
      client: 'EduTech Innovations',
      industry: 'Education',
      challenge: 'Building a distributed development team across multiple time zones while maintaining collaboration and code quality.',
      solution: 'Implemented global recruitment strategy with focus on communication skills, cultural adaptability, and technical excellence.',
      results: [
        'Built team of 40 developers across 8 countries',
        'Established 24/7 development cycle',
        'Reduced development costs by 30%',
        'Accelerated product delivery by 50%'
      ],
      metrics: {
        timeToHire: '21 days',
        retention: '94%',
        satisfaction: '4.7/5',
        roiIncrease: '275%'
      },
      image: '/api/placeholder/600/400',
      featured: false,
      duration: '10 months',
      teamSize: '40 hires'
    }
  ];

  const industries = ['All', 'Technology', 'Healthcare', 'Manufacturing', 'Finance', 'Retail', 'Education'];
  const featuredCaseStudies = caseStudies.filter(study => study.featured);

  // Filter case studies based on industry
  const filteredCaseStudies = caseStudies.filter(study => {
    return selectedIndustry === 'All' || study.industry === selectedIndustry;
  });

  const getIndustryColor = (industry) => {
    const colors = {
      'Technology': 'bg-brand-gray-100 text-brand-black',
      'Healthcare': 'bg-brand-gray-200 text-brand-gray-800',
      'Manufacturing': 'bg-brand-gray-100 text-brand-black',
      'Finance': 'bg-brand-gray-200 text-brand-gray-800',
      'Retail': 'bg-brand-gray-100 text-brand-black',
      'Education': 'bg-brand-gray-200 text-brand-gray-800'
    };
    return colors[industry] || 'bg-brand-gray-100 text-brand-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Discover how we've helped organizations transform their workforce and achieve remarkable results
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
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">200+</h3>
              <p className="text-gray-600">Successful Projects</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">15,000+</h3>
              <p className="text-gray-600">Professionals Placed</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">250%</h3>
              <p className="text-gray-600">Average ROI Increase</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-3xl font-bold text-brand-gray-800 mb-2">96%</h3>
              <p className="text-brand-gray-600">Client Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {industries.map(industry => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors duration-300 ${
                  selectedIndustry === industry
                    ? 'bg-brand-black text-white'
                    : 'bg-white text-brand-gray-700 hover:bg-brand-gray-100'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-gray-800 mb-12 text-center">Featured Success Stories</h2>
          
          <div className="space-y-16">
            {featuredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-xl overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getIndustryColor(study.industry)}`}>
                        {study.industry}
                      </span>
                      <span className="bg-brand-gray-100 text-brand-black px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-brand-gray-800 mb-4">{study.title}</h3>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-brand-gray-400 mr-2" />
                        <span className="text-sm text-brand-gray-600">{study.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-5 h-5 text-brand-gray-400 mr-2" />
                        <span className="text-sm text-brand-gray-600">{study.teamSize}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-brand-gray-800 mb-2">Challenge</h4>
                        <p className="text-brand-gray-600">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-brand-gray-800 mb-2">Solution</h4>
                        <p className="text-brand-gray-600">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-brand-gray-800 mb-3">Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-brand-gray-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-brand-gray-600">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <Button className="mt-8 bg-brand-black hover:bg-brand-gray-800 text-white px-6 py-3 rounded-lg">
                      View Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                  
                  <div className="relative">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Metrics Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <div className="grid grid-cols-2 gap-4 text-white">
                        <div className="text-center">
                          <div className="text-2xl font-bold">{study.metrics.retention}</div>
                          <div className="text-sm opacity-80">Retention Rate</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold">{study.metrics.satisfaction}</div>
                          <div className="text-sm opacity-80">Satisfaction</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold">{study.metrics.timeToHire}</div>
                          <div className="text-sm opacity-80">Time to Hire</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold">{study.metrics.roiIncrease}</div>
                          <div className="text-sm opacity-80">ROI Increase</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">All Case Studies</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-brand-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getIndustryColor(study.industry)}`}>
                      {study.industry}
                    </span>
                    {study.featured && (
                      <span className="bg-brand-gray-100 text-brand-black px-2 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-bold text-brand-gray-800 mb-3">{study.title}</h3>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-brand-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {study.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {study.teamSize}
                    </div>
                  </div>
                  
                  <p className="text-brand-gray-600 mb-4 text-sm line-clamp-3">{study.challenge}</p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                    <div className="text-center bg-white p-2 rounded">
                      <div className="font-bold text-brand-black">{study.metrics.retention}</div>
                      <div className="text-brand-gray-500">Retention</div>
                    </div>
                    <div className="text-center bg-white p-2 rounded">
                      <div className="font-bold text-brand-black">{study.metrics.roiIncrease}</div>
                      <div className="text-brand-gray-500">ROI Increase</div>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-brand-black hover:bg-brand-gray-800 text-white py-2 rounded-lg text-sm">
                    Read Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
            <p className="text-xl mb-8 text-purple-100">
              Let's discuss how we can help transform your organization's workforce and achieve remarkable results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold">
                Start Your Project
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold">
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;