import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building, Users, Globe, Award, ArrowRight, CheckCircle, Mail, Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Partners = () => {
  const [selectedPartnerType, setSelectedPartnerType] = useState('All');

  const partnerTypes = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Government Agencies",
      description: "Federal, state, and local bodies seeking to transform public services and policy implementation.",
      examples: ["Digital Government Transformation", "Policy Design & Implementation", "Public Service Innovation"],
      benefits: ["Evidence-based policy frameworks", "Citizen engagement strategies", "Digital transformation roadmaps"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Corporations",
      description: "Forward-thinking companies navigating the future of work and sustainable business practices.",
      examples: ["Workforce Transformation", "ESG Strategy Development", "Innovation Lab Design"],
      benefits: ["Future-ready workforce strategies", "Sustainable business models", "Innovation frameworks"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "NGOs & Foundations",
      description: "Non-profit organizations amplifying their impact through strategic partnerships and evidence-based approaches.",
      examples: ["Program Evaluation", "Impact Measurement", "Strategic Planning"],
      benefits: ["Enhanced program effectiveness", "Data-driven impact strategies", "Capacity building frameworks"]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Academic Institutions",
      description: "Universities and research centers collaborating on cutting-edge research and knowledge creation.",
      examples: ["Joint Research Projects", "Faculty Exchange", "Student Fellowships"],
      benefits: ["Research collaboration opportunities", "Knowledge exchange programs", "Academic partnerships"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "International Organizations",
      description: "Global development partners working on systemic change and sustainable development goals.",
      examples: ["SDG Implementation", "Global Policy Research", "Cross-border Initiatives"],
      benefits: ["Global perspective integration", "Cross-cultural frameworks", "International best practices"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Think Tanks",
      description: "Policy research institutions focused on evidence-based analysis and strategic recommendations.",
      examples: ["Policy Research", "Strategic Analysis", "Thought Leadership"],
      benefits: ["Research collaboration", "Policy influence strategies", "Thought leadership platforms"]
    }
  ];

  const partnershipModels = [
    {
      title: "Research Partnerships",
      description: "Collaborative research initiatives that combine our expertise with your domain knowledge.",
      features: ["Joint research design", "Shared data and insights", "Co-authored publications", "Conference presentations"]
    },
    {
      title: "Implementation Partnerships",
      description: "End-to-end collaboration from strategy design to solution deployment and impact measurement.",
      features: ["Strategy co-creation", "Solution development", "Implementation support", "Impact evaluation"]
    },
    {
      title: "Capacity Building",
      description: "Knowledge transfer and skill development programs to enhance your organization's capabilities.",
      features: ["Training programs", "Mentorship initiatives", "Best practice sharing", "Organizational development"]
    },
    {
      title: "Advisory Services",
      description: "Strategic guidance and expert consultation on complex challenges and transformation initiatives.",
      features: ["Strategic planning", "Expert consultation", "Board advisory", "Crisis response support"]
    }
  ];

  const successStories = [
    {
      partner: "Ministry of Digital Transformation",
      type: "Government Agency",
      project: "National Digital Identity System",
      impact: "Reduced citizen service delivery time by 70% and increased digital adoption by 300%",
      duration: "18 months"
    },
    {
      partner: "Global Tech Corporation",
      type: "Corporation",
      project: "Future of Work Strategy",
      impact: "Successfully transitioned 50,000+ employees to hybrid work model with 95% satisfaction rate",
      duration: "12 months"
    },
    {
      partner: "Education Foundation",
      type: "NGO",
      project: "Digital Learning Equity Initiative",
      impact: "Improved learning outcomes for 100,000+ students in underserved communities",
      duration: "24 months"
    }
  ];

  const filteredPartnerTypes = selectedPartnerType === 'All' 
    ? partnerTypes 
    : partnerTypes.filter(type => type.title === selectedPartnerType);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-black to-brand-gray-800 text-white pt-60 pb-40">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Partner With Us
            </h1>
            <p className="text-xl text-brand-gray-200 mb-8">
              Collaborate with EmploymentShift to architect transformative solutions for a more just, resilient, and prosperous society.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-brand-black hover:bg-brand-gray-100 px-8 py-3 rounded-lg font-semibold">
                Start a Partnership
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-brand-black px-8 py-3 rounded-lg font-semibold">
                View Success Stories
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partner Types Filter */}
      <section className="py-12 bg-brand-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {['All', ...partnerTypes.map(type => type.title)].map(type => (
              <button
                key={type}
                onClick={() => setSelectedPartnerType(type)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-300 ${
                  selectedPartnerType === type
                    ? 'bg-brand-black text-white'
                    : 'bg-white text-brand-gray-700 hover:bg-brand-gray-100'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">
              Who We <span className="text-brand-gray-700">Work With</span>
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
              We partner with diverse organizations committed to creating systemic change and building a better future.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPartnerTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-all duration-300"
              >
                <div className="bg-brand-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  {type.icon}
                </div>
                <h3 className="text-2xl font-bold text-brand-black mb-4">{type.title}</h3>
                <p className="text-brand-gray-600 mb-6">{type.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-brand-gray-800 mb-2">Example Projects:</h4>
                    <ul className="space-y-1">
                      {type.examples.map((example, idx) => (
                        <li key={idx} className="text-brand-gray-600 text-sm flex items-center">
                          <div className="w-1.5 h-1.5 bg-brand-gray-400 rounded-full mr-2"></div>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brand-gray-800 mb-2">Partnership Benefits:</h4>
                    <ul className="space-y-1">
                      {type.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-brand-gray-600 text-sm flex items-center">
                          <CheckCircle className="w-3 h-3 text-brand-gray-400 mr-2 flex-shrink-0" />
                          {benefit}
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

      {/* Partnership Models */}
      <section className="py-20 bg-brand-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">
              Partnership <span className="text-brand-gray-700">Models</span>
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
              Flexible collaboration frameworks designed to meet your organization's unique needs and objectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-brand-black mb-4">{model.title}</h3>
                <p className="text-brand-gray-600 mb-6">{model.description}</p>
                <div className="space-y-2">
                  {model.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-brand-gray-400 mr-3 flex-shrink-0" />
                      <span className="text-brand-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">
              Success <span className="text-brand-gray-700">Stories</span>
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
              Real partnerships, real impact. See how we've collaborated with organizations to create lasting change.
            </p>
          </motion.div>

          <div className="space-y-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.partner}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-brand-gray-100 text-brand-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {story.type}
                      </span>
                      <span className="text-brand-gray-500 text-sm">{story.duration}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-brand-black mb-2">{story.partner}</h3>
                    <h4 className="text-lg font-semibold text-brand-gray-700 mb-3">{story.project}</h4>
                    <p className="text-brand-gray-600">{story.impact}</p>
                  </div>
                  <div className="mt-6 lg:mt-0 lg:ml-8">
                    <Button className="bg-brand-black hover:bg-brand-gray-800 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
                      View Case Study
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-brand-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-brand-black mb-4">
                Start a <span className="text-brand-gray-700">Partnership</span>
              </h2>
              <p className="text-xl text-brand-gray-600">
                Ready to architect change together? Let's discuss how we can collaborate to create transformative solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-brand-gray-700 mb-2">
                      Organization Name *
                    </label>
                    <Input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-brand-gray-300 rounded-lg focus:ring-2 focus:ring-brand-black focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-gray-700 mb-2">
                      Organization Type *
                    </label>
                    <select className="w-full px-4 py-3 border border-brand-gray-300 rounded-lg focus:ring-2 focus:ring-brand-black focus:border-transparent">
                      <option value="">Select type...</option>
                      <option value="government">Government Agency</option>
                      <option value="corporation">Corporation</option>
                      <option value="ngo">NGO/Foundation</option>
                      <option value="academic">Academic Institution</option>
                      <option value="international">International Organization</option>
                      <option value="thinktank">Think Tank</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-brand-gray-700 mb-2">
                      Contact Name *
                    </label>
                    <Input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-brand-gray-300 rounded-lg focus:ring-2 focus:ring-brand-black focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-brand-gray-300 rounded-lg focus:ring-2 focus:ring-brand-black focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brand-gray-700 mb-2">
                    Partnership Interest *
                  </label>
                  <select className="w-full px-4 py-3 border border-brand-gray-300 rounded-lg focus:ring-2 focus:ring-brand-black focus:border-transparent">
                    <option value="">Select partnership type...</option>
                    <option value="research">Research Partnership</option>
                    <option value="implementation">Implementation Partnership</option>
                    <option value="capacity">Capacity Building</option>
                    <option value="advisory">Advisory Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brand-gray-700 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your project, challenges, and how you envision our collaboration..."
                    className="w-full px-4 py-3 border border-brand-gray-300 rounded-lg focus:ring-2 focus:ring-brand-black focus:border-transparent resize-none"
                  ></textarea>
                </div>

                <div className="text-center">
                  <Button className="bg-brand-black hover:bg-brand-gray-800 text-white px-8 py-3 rounded-lg font-semibold">
                    Submit Partnership Inquiry
                  </Button>
                </div>
              </form>
            </motion.div>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Architect Change?</h2>
            <p className="text-xl text-brand-gray-300 mb-8 max-w-3xl mx-auto">
              Join us in designing frameworks for a more just, resilient, and prosperous society. Together, we can create lasting systemic change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-brand-black hover:bg-brand-gray-100 px-8 py-3 rounded-lg font-semibold flex items-center gap-2">
                <Mail className="w-4 h-4" />
                hello@employmentshift.com
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-brand-black px-8 py-3 rounded-lg font-semibold flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +234 705 143 2811
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Partners;