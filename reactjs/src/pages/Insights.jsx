import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Search, Tag, ArrowRight, TrendingUp, FileText, Video, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Insights = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const insights = [
    {
      id: 1,
      title: 'The Future of Work: Navigating AI and Human Collaboration',
      excerpt: 'How organizations can harness artificial intelligence while preserving human dignity and creating meaningful employment opportunities.',
      author: 'Dr. Sarah Okafor',
      date: '2024-01-15',
      readTime: '12 min read',
      category: 'Future of Work',
      type: 'Article',
      tags: ['AI', 'Employment', 'Technology'],
      featured: true
    },
    {
      id: 2,
      title: 'Circular Economy Models for African Development',
      excerpt: 'Evidence-based strategies for implementing sustainable economic frameworks that promote both growth and environmental stewardship.',
      author: 'Prof. Kwame Asante',
      date: '2024-01-10',
      readTime: '15 min read',
      category: 'Economic Development',
      type: 'Research Brief',
      tags: ['Sustainability', 'Africa', 'Economic Policy'],
      featured: true
    },
    {
      id: 3,
      title: 'Digital Governance: Lessons from Global Implementation',
      excerpt: 'Analyzing successful digital transformation initiatives in government services and their impact on citizen engagement.',
      author: 'Dr. Amina Hassan',
      date: '2024-01-08',
      readTime: '10 min read',
      category: 'Governance',
      type: 'Policy Analysis',
      tags: ['Digital Government', 'Public Policy', 'Innovation'],
      featured: true
    },
    {
      id: 4,
      title: 'Criminal Justice Reform: A Systems Approach',
      excerpt: 'Comprehensive framework for transforming criminal justice systems through evidence-based interventions and community engagement.',
      author: 'Dr. Michael Adebayo',
      date: '2024-01-05',
      readTime: '18 min read',
      category: 'Justice & Governance',
      type: 'White Paper',
      tags: ['Criminal Justice', 'Reform', 'Social Justice'],
      featured: false
    },
    {
      id: 5,
      title: 'Educational Equity in the Digital Age',
      excerpt: 'Strategies for ensuring inclusive access to quality education through technology and innovative pedagogical approaches.',
      author: 'Dr. Fatima Al-Rashid',
      date: '2024-01-03',
      readTime: '14 min read',
      category: 'Education',
      type: 'Research Report',
      tags: ['Education', 'Equity', 'Digital Learning'],
      featured: false
    },
    {
      id: 6,
      title: 'Building Resilient Communities Through Faith-Based Initiatives',
      excerpt: 'Exploring the role of faith communities in fostering social cohesion and driving positive change.',
      author: 'Rev. Dr. Grace Okonkwo',
      date: '2023-12-28',
      readTime: '11 min read',
      category: 'Faith & Spirituality',
      type: 'Case Study',
      tags: ['Community Building', 'Faith', 'Social Impact'],
      featured: false
    }
  ];

  const categories = ['All', 'Future of Work', 'Economic Development', 'Governance', 'Justice & Governance', 'Education', 'Faith & Spirituality'];
  const featuredInsights = insights.filter(insight => insight.featured);

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Video': return <Video className="w-4 h-4" />;
      case 'Podcast': return <Mic className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Filter insights based on search and category
  const filteredInsights = insights.filter(insight => {
    const matchesSearch = insight.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         insight.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         insight.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || insight.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

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
              Insights & Analysis
            </h1>
            <p className="text-xl text-brand-gray-200 mb-8">
              Data-driven insights and evidence-based analysis to inform policy, practice, and systemic change.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-brand-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search insights..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2.5 h-10 border border-brand-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gray-500 focus:border-transparent"
                />
              </div>
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
        </div>
      </section>

      {/* Featured Insights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">
              Featured <span className="text-brand-gray-700">Insights</span>
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
              Our latest research findings and analysis on the most pressing challenges of our time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredInsights.map((insight, index) => (
              <motion.article
                key={insight.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-brand-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 bg-gradient-to-br from-brand-gray-100 to-brand-gray-200">
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-black text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white text-brand-gray-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      {getTypeIcon(insight.type)}
                      {insight.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(insight.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {insight.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-brand-black transition-colors">
                    <a href={`#insight-${insight.id}`}>{insight.title}</a>
                  </h3>
                  
                  <p className="text-gray-600 mb-4">{insight.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-sm text-gray-600">{insight.author}</span>
                    </div>
                    <Button className="bg-brand-black hover:bg-brand-gray-800 text-white px-4 py-2 rounded-lg text-sm">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All Insights */}
      <section className="py-16 bg-brand-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">All Insights</h2>
          
          <div className="space-y-8">
            {filteredInsights.map((insight, index) => (
              <motion.article
                key={insight.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-md border border-brand-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-brand-gray-100 text-brand-gray-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                          {getTypeIcon(insight.type)}
                          {insight.type}
                        </span>
                        <span className="bg-brand-gray-100 text-brand-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                          {insight.category}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-800 mb-3 hover:text-brand-black transition-colors">
                        <a href={`#insight-${insight.id}`}>{insight.title}</a>
                      </h3>
                      
                      <p className="text-gray-600 mb-4">{insight.excerpt}</p>
                      
                      <div className="flex items-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {insight.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(insight.date)}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {insight.readTime}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {insight.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-white text-brand-gray-600 px-2 py-1 rounded-full text-xs border"
                          >
                            <Tag className="w-3 h-3 inline mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 lg:mt-0 lg:ml-8">
                      <Button className="bg-brand-black hover:bg-brand-gray-800 text-white px-6 py-2 rounded-lg">
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          
          {filteredInsights.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-brand-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-brand-gray-600 mb-2">No insights found</h3>
              <p className="text-brand-gray-500">Try adjusting your search criteria to find more insights.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-brand-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Stay Informed</h2>
            <p className="text-xl text-brand-gray-300 mb-8 max-w-3xl mx-auto">
              Subscribe to our insights newsletter and receive the latest research findings and analysis directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-brand-black hover:bg-brand-gray-100 px-8 py-3 rounded-lg font-semibold">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Insights;