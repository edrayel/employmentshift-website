import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Search, Clock, MapPin, Users, Download, BookOpen, FileText, Database, Headphones, Wifi, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Library = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedResource, setSelectedResource] = useState('all');

  const resources = [
    { id: 'all', name: 'All Resources', icon: Book },
    { id: 'books', name: 'Books & eBooks', icon: BookOpen },
    { id: 'journals', name: 'Journals & Articles', icon: FileText },
    { id: 'databases', name: 'Databases', icon: Database },
    { id: 'media', name: 'Audio & Video', icon: Headphones }
  ];

  const services = [
    {
      title: 'Research Assistance',
      description: 'Get help with research projects and finding academic sources',
      icon: Search,
      hours: 'Mon-Fri: 9AM-8PM, Sat-Sun: 10AM-6PM'
    },
    {
      title: 'Study Spaces',
      description: 'Quiet individual and group study areas available',
      icon: Users,
      hours: '24/7 Access for Students'
    },
    {
      title: 'Computer Lab',
      description: 'High-speed internet and software for academic work',
      icon: Wifi,
      hours: 'Mon-Fri: 8AM-10PM, Weekends: 10AM-8PM'
    },
    {
      title: 'Printing Services',
      description: 'Black & white and color printing, scanning, and copying',
      icon: FileText,
      hours: 'Mon-Fri: 8AM-9PM, Weekends: 10AM-6PM'
    }
  ];

  const collections = [
    {
      title: 'Career Development Collection',
      description: 'Books, guides, and resources for professional development and career planning',
      items: '2,500+ items',
      type: 'Physical & Digital'
    },
    {
      title: 'Industry Reports & Analytics',
      description: 'Current market research, industry trends, and employment data',
      items: '500+ reports',
      type: 'Digital Access'
    },
    {
      title: 'Skills Training Materials',
      description: 'Technical and soft skills development resources',
      items: '1,200+ resources',
      type: 'Mixed Media'
    },
    {
      title: 'Academic Journals',
      description: 'Peer-reviewed articles on employment, education, and workforce development',
      items: '50+ journals',
      type: 'Digital Subscription'
    }
  ];

  const hours = [
    { day: 'Monday - Thursday', hours: '7:00 AM - 11:00 PM' },
    { day: 'Friday', hours: '7:00 AM - 9:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 8:00 PM' },
    { day: 'Sunday', hours: '10:00 AM - 10:00 PM' }
  ];

  const quickLinks = [
    { name: 'Catalog Search', url: '#', description: 'Search our complete collection' },
    { name: 'Digital Resources', url: '#', description: 'Access online databases and eBooks' },
    { name: 'Research Guides', url: '#', description: 'Subject-specific research assistance' },
    { name: 'Interlibrary Loan', url: '#', description: 'Request items from other libraries' },
    { name: 'Course Reserves', url: '#', description: 'Access materials on reserve for your courses' },
    { name: 'Citation Help', url: '#', description: 'Learn proper citation formats' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-brand-black text-white pt-60 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Library</h1>
            <p className="text-xl md:text-2xl mb-8 text-brand-gray-300">
              Your gateway to knowledge, research, and academic success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-brand-black mb-6 text-center">Search Library Resources</h2>
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search books, articles, databases..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 h-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-black focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <select
                    value={selectedResource}
                    onChange={(e) => setSelectedResource(e.target.value)}
                    className="px-4 py-2.5 h-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-black focus:border-transparent"
                  >
                    {resources.map(resource => (
                      <option key={resource.id} value={resource.id}>{resource.name}</option>
                    ))}
                  </select>
                  <Button className="bg-brand-black hover:bg-brand-gray-800 text-white px-8 h-10">
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">Quick Access</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Frequently used library resources and services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-brand-black mb-2">{link.name}</h3>
                <p className="text-gray-600">{link.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">Our Collections</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our specialized collections designed to support your academic and professional journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((collection, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-brand-black mb-3">{collection.title}</h3>
                <p className="text-gray-600 mb-4">{collection.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{collection.items}</span>
                  <span className="bg-brand-black text-white px-3 py-1 rounded-full">{collection.type}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">Library Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support services to enhance your learning experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
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
                      <div className="w-12 h-12 bg-brand-black rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-brand-black mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-3">{service.description}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        {service.hours}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-brand-black mb-6">Library Hours</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                {hours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                    <span className="font-medium text-brand-black">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> Hours may vary during holidays and exam periods. Check our website for updates.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Location & Contact */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-brand-black mb-6">Visit Us</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-black mt-1" />
                    <div>
                      <p className="font-medium text-brand-black">EmploymentShift Library</p>
                      <p className="text-gray-600">Lagos, Nigeria</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-brand-black" />
                    <div>
                      <p className="font-medium text-brand-black">Reference Desk</p>
                      <p className="text-gray-600">+234 705 143 2811</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Coffee className="w-5 h-5 text-brand-black" />
                    <div>
                      <p className="font-medium text-brand-black">Amenities</p>
                      <p className="text-gray-600">Café, Study Rooms, Computer Lab</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button className="w-full bg-brand-black hover:bg-brand-gray-800 text-white">
                    Get Directions
                  </Button>
                </div>
              </div>
            </motion.div>
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
            <h2 className="text-4xl font-bold mb-6">Need Research Help?</h2>
            <p className="text-xl mb-8 text-brand-gray-300 max-w-2xl mx-auto">
              Our librarians are here to help you find the resources you need for your academic and professional success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-brand-black hover:bg-brand-gray-100 px-8 py-3">
                Schedule Research Consultation
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-brand-black px-8 py-3">
                Ask a Librarian Online
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Library;