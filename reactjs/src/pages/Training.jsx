import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, Users, Star, Award, BookOpen, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Training page component for Employment Shift
 * Displays professional training programs and courses
 */
const Training = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Mock training programs data
  const programs = [
    {
      id: 1,
      title: 'Digital Marketing Mastery',
      category: 'Marketing',
      level: 'Intermediate',
      duration: '8 weeks',
      students: 1250,
      rating: 4.8,
      price: '$299',
      instructor: 'Sarah Johnson',
      description: 'Master digital marketing strategies including SEO, social media, content marketing, and analytics.',
      modules: [
        'SEO Fundamentals',
        'Social Media Strategy',
        'Content Marketing',
        'Email Marketing',
        'Analytics & Reporting'
      ],
      featured: true
    },
    {
      id: 2,
      title: 'Data Science Bootcamp',
      category: 'Technology',
      level: 'Advanced',
      duration: '12 weeks',
      students: 890,
      rating: 4.9,
      price: '$599',
      instructor: 'Dr. Michael Chen',
      description: 'Comprehensive data science program covering Python, machine learning, and data visualization.',
      modules: [
        'Python Programming',
        'Statistics & Probability',
        'Machine Learning',
        'Data Visualization',
        'Real-world Projects'
      ],
      featured: true
    },
    {
      id: 3,
      title: 'Project Management Professional',
      category: 'Management',
      level: 'Intermediate',
      duration: '6 weeks',
      students: 2100,
      rating: 4.7,
      price: '$399',
      instructor: 'Robert Martinez',
      description: 'Prepare for PMP certification with comprehensive project management training.',
      modules: [
        'Project Initiation',
        'Planning & Execution',
        'Risk Management',
        'Quality Control',
        'PMP Exam Prep'
      ],
      featured: true
    },
    {
      id: 4,
      title: 'UX/UI Design Fundamentals',
      category: 'Design',
      level: 'Beginner',
      duration: '10 weeks',
      students: 1560,
      rating: 4.6,
      price: '$349',
      instructor: 'Emily Rodriguez',
      description: 'Learn user experience and interface design principles with hands-on projects.',
      modules: [
        'Design Thinking',
        'User Research',
        'Wireframing',
        'Prototyping',
        'Portfolio Development'
      ],
      featured: false
    },
    {
      id: 5,
      title: 'Financial Analysis & Modeling',
      category: 'Finance',
      level: 'Advanced',
      duration: '8 weeks',
      students: 750,
      rating: 4.8,
      price: '$449',
      instructor: 'David Thompson',
      description: 'Master financial modeling, valuation techniques, and investment analysis.',
      modules: [
        'Financial Statements',
        'Valuation Methods',
        'Excel Modeling',
        'Investment Analysis',
        'Case Studies'
      ],
      featured: false
    },
    {
      id: 6,
      title: 'Leadership & Communication',
      category: 'Leadership',
      level: 'Intermediate',
      duration: '4 weeks',
      students: 1890,
      rating: 4.7,
      price: '$199',
      instructor: 'Lisa Anderson',
      description: 'Develop essential leadership skills and effective communication strategies.',
      modules: [
        'Leadership Styles',
        'Team Management',
        'Public Speaking',
        'Conflict Resolution',
        'Performance Management'
      ],
      featured: true
    }
  ];

  const categories = ['All', 'Marketing', 'Technology', 'Management', 'Design', 'Finance', 'Leadership'];

  // Filter programs based on category
  const filteredPrograms = programs.filter(program => {
    return selectedCategory === 'All' || program.category === selectedCategory;
  });

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-brand-gray-100 text-brand-gray-800';
      case 'Intermediate': return 'bg-brand-gray-200 text-brand-gray-700';
      case 'Advanced': return 'bg-brand-gray-300 text-brand-gray-600';
      default: return 'bg-brand-gray-100 text-brand-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Professional Training</h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Advance your career with our expert-led training programs and certifications
            </p>
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg">
              Browse All Programs
            </Button>
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
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">10,000+</h3>
              <p className="text-gray-600">Students Trained</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">50+</h3>
              <p className="text-gray-600">Training Programs</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">95%</h3>
              <p className="text-gray-600">Completion Rate</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">85%</h3>
              <p className="text-gray-600">Career Advancement</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors duration-300 ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-purple-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {programs.filter(program => program.featured).map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(program.level)}`}>
                      {program.level}
                    </span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{program.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-brand-gray-800 mb-3">{program.title}</h3>
                  <p className="text-brand-gray-600 mb-4">{program.description}</p>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1 text-brand-gray-400" />
                      {program.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1 text-brand-gray-400" />
                      {program.students.toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold text-purple-600">{program.price}</p>
                        <p className="text-sm text-gray-500">by {program.instructor}</p>
                      </div>
                      <Button className="bg-brand-black hover:bg-brand-gray-800 text-white px-6 py-2 rounded-lg">
                        Enroll Now
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">All Training Programs</h2>
          
          <div className="space-y-6">
            {filteredPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-2xl font-bold text-brand-gray-800">{program.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(program.level)}`}>
                        {program.level}
                      </span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">{program.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-brand-gray-600 mb-4">{program.description}</p>
                    
                    <div className="flex flex-wrap gap-6 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-brand-gray-400" />
                        Duration: {program.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2 text-brand-gray-400" />
                        {program.students.toLocaleString()} students
                      </div>
                      <div className="flex items-center">
                        <Target className="w-4 h-4 mr-2 text-brand-gray-400" />
                        Instructor: {program.instructor}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {program.modules.slice(0, 3).map((module, moduleIndex) => (
                        <span
                          key={moduleIndex}
                          className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border"
                        >
                          {module}
                        </span>
                      ))}
                      {program.modules.length > 3 && (
                        <span className="text-gray-500 text-sm px-3 py-1">
                          +{program.modules.length - 3} more modules
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="lg:ml-8 mt-6 lg:mt-0 text-center">
                    <p className="text-3xl font-bold text-purple-600 mb-2">{program.price}</p>
                    <Button className="w-full lg:w-auto bg-brand-black hover:bg-brand-gray-800 text-white px-8 py-3 rounded-lg font-semibold">
                      Enroll Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Advance Your Career?</h2>
            <p className="text-xl mb-8 text-purple-100">
              Join thousands of professionals who have transformed their careers with our training programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold">
                View All Programs
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold">
                Contact Our Advisors
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Training;