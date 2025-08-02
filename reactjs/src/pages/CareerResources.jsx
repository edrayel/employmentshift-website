import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Download, Video, FileText, Users, Target, TrendingUp, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

/**
 * CareerResources page component for Employment Shift
 * Provides comprehensive career development resources and tools
 */
const CareerResources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Mock resources data
  const resources = [
    {
      id: 1,
      title: 'Resume Writing Masterclass',
      category: 'Resume',
      type: 'Video',
      duration: '45 min',
      description: 'Learn how to craft a compelling resume that gets noticed by recruiters and hiring managers.',
      downloadUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Interview Preparation Guide',
      category: 'Interview',
      type: 'PDF',
      pages: '24 pages',
      description: 'Comprehensive guide covering common interview questions, STAR method, and follow-up strategies.',
      downloadUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'LinkedIn Optimization Checklist',
      category: 'Networking',
      type: 'Checklist',
      items: '15 items',
      description: 'Step-by-step checklist to optimize your LinkedIn profile for maximum visibility.',
      downloadUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Salary Negotiation Tactics',
      category: 'Negotiation',
      type: 'Video',
      duration: '30 min',
      description: 'Master the art of salary negotiation with proven strategies and real-world examples.',
      downloadUrl: '#',
      featured: true
    },
    {
      id: 5,
      title: 'Career Change Roadmap',
      category: 'Career Planning',
      type: 'Template',
      format: 'Excel',
      description: 'Strategic template to plan and execute a successful career transition.',
      downloadUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Industry Trends Report 2024',
      category: 'Market Research',
      type: 'Report',
      pages: '48 pages',
      description: 'Comprehensive analysis of job market trends and emerging opportunities.',
      downloadUrl: '#',
      featured: true
    },
    {
      id: 7,
      title: 'Personal Branding Workshop',
      category: 'Branding',
      type: 'Video',
      duration: '60 min',
      description: 'Build a strong personal brand that sets you apart in your industry.',
      downloadUrl: '#',
      featured: false
    },
    {
      id: 8,
      title: 'Networking Event Planner',
      category: 'Networking',
      type: 'Template',
      format: 'PDF',
      description: 'Plan and track your networking activities for maximum career impact.',
      downloadUrl: '#',
      featured: false
    }
  ];

  const categories = ['All', 'Resume', 'Interview', 'Networking', 'Negotiation', 'Career Planning', 'Market Research', 'Branding'];

  // Filter resources based on search and category
  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Video': return <Video className="w-5 h-5" />;
      case 'PDF': return <FileText className="w-5 h-5" />;
      case 'Checklist': return <Target className="w-5 h-5" />;
      case 'Template': return <Award className="w-5 h-5" />;
      case 'Report': return <TrendingUp className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Career Resources</h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Access our comprehensive library of career development tools and guides
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 text-lg"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {resources.filter(resource => resource.featured).map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-2 rounded-lg mr-3">
                    {getTypeIcon(resource.type)}
                  </div>
                  <div>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      {resource.type}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {resource.duration || resource.pages || resource.items || resource.format}
                  </span>
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">All Resources</h2>
            <p className="text-gray-600">
              Showing {filteredResources.length} of {resources.length} resources
            </p>
          </div>
          
          <div className="space-y-6">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <div className="bg-white p-2 rounded-lg mr-3 shadow-sm">
                        {getTypeIcon(resource.type)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{resource.title}</h3>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                            {resource.category}
                          </span>
                          <span className="text-sm text-gray-500">
                            {resource.duration || resource.pages || resource.items || resource.format}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 ml-14">{resource.description}</p>
                  </div>
                  
                  <div className="lg:ml-6 mt-4 lg:mt-0">
                    <Button className="w-full lg:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No resources found</h3>
              <p className="text-gray-500">Try adjusting your search criteria to find more resources.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl mb-8 text-blue-100">
              Get the latest career resources and job market insights delivered to your inbox
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 py-3 text-gray-800"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CareerResources;