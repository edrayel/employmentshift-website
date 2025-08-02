import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Clock, DollarSign, Briefcase, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

/**
 * JobBoard page component for Employment Shift
 * Displays available job opportunities with search and filter functionality
 */
const JobBoard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedType, setSelectedType] = useState('');

  // Mock job data - in a real application, this would come from an API
  const jobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120,000 - $150,000',
      posted: '2 days ago',
      description: 'We are looking for a senior software engineer to join our growing team and help build scalable web applications.',
      requirements: ['5+ years experience', 'React/Node.js', 'AWS knowledge']
    },
    {
      id: 2,
      title: 'Marketing Manager',
      company: 'Growth Dynamics',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$80,000 - $100,000',
      posted: '1 week ago',
      description: 'Lead our marketing initiatives and drive brand awareness across multiple channels.',
      requirements: ['3+ years marketing experience', 'Digital marketing expertise', 'Analytics skills']
    },
    {
      id: 3,
      title: 'UX Designer',
      company: 'Design Studio Pro',
      location: 'Remote',
      type: 'Contract',
      salary: '$70 - $90/hour',
      posted: '3 days ago',
      description: 'Create intuitive and engaging user experiences for our client projects.',
      requirements: ['Portfolio required', 'Figma/Sketch proficiency', 'User research experience']
    },
    {
      id: 4,
      title: 'Data Analyst',
      company: 'Analytics Plus',
      location: 'Chicago, IL',
      type: 'Full-time',
      salary: '$65,000 - $85,000',
      posted: '5 days ago',
      description: 'Analyze complex datasets to provide actionable insights for business decisions.',
      requirements: ['SQL expertise', 'Python/R knowledge', 'Statistics background']
    },
    {
      id: 5,
      title: 'Project Manager',
      company: 'Enterprise Solutions',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$90,000 - $110,000',
      posted: '1 day ago',
      description: 'Manage cross-functional teams and deliver projects on time and within budget.',
      requirements: ['PMP certification preferred', '5+ years PM experience', 'Agile methodology']
    },
    {
      id: 6,
      title: 'Sales Representative',
      company: 'SalesForce Pro',
      location: 'Miami, FL',
      type: 'Full-time',
      salary: '$50,000 + Commission',
      posted: '4 days ago',
      description: 'Drive revenue growth by building relationships with new and existing clients.',
      requirements: ['2+ years sales experience', 'CRM proficiency', 'Strong communication skills']
    }
  ];

  const locations = ['All Locations', 'San Francisco, CA', 'New York, NY', 'Remote', 'Chicago, IL', 'Austin, TX', 'Miami, FL'];
  const jobTypes = ['All Types', 'Full-time', 'Part-time', 'Contract', 'Freelance'];

  // Filter jobs based on search criteria
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !selectedLocation || selectedLocation === 'All Locations' || job.location === selectedLocation;
    const matchesType = !selectedType || selectedType === 'All Types' || job.type === selectedType;
    
    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Job Board</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Discover your next career opportunity with our curated job listings
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search jobs or companies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 text-lg"
              />
            </div>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {jobTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Jobs Listing */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredJobs.length} of {jobs.length} jobs
            </p>
          </div>
          
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-brand-gray-800 mb-2">{job.title}</h3>
                        <p className="text-lg text-brand-gray-600 font-semibold">{job.company}</p>
                      </div>
                      <span className="bg-brand-gray-100 text-brand-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                        {job.type}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-brand-gray-400" />
                        <span className="text-brand-gray-600">{job.location}</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-2 text-brand-gray-400" />
                        <span className="text-brand-gray-600">{job.salary}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-brand-gray-400" />
                        <span className="text-brand-gray-600">{job.posted}</span>
                      </div>
                    </div>
                    
                    <p className="text-brand-gray-600 mb-4">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.requirements.map((req, reqIndex) => (
                        <span
                          key={reqIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:ml-6">
                    <Button className="w-full lg:w-auto bg-brand-black hover:bg-brand-gray-800 text-white px-8 py-3 rounded-lg font-semibold">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No jobs found</h3>
              <p className="text-gray-500">Try adjusting your search criteria to find more opportunities.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Don't See the Right Opportunity?</h2>
            <p className="text-xl mb-8 text-gray-300">
              Let us help you find the perfect job match. Our career experts are here to assist you.
            </p>
            <Button
              className="bg-brand-black hover:bg-brand-gray-800 text-white px-8 py-3 rounded-lg font-semibold"
            >
              Contact Our Career Experts
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default JobBoard;