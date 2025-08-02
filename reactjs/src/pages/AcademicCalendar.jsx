import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Download, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AcademicCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedCategory, setSelectedCategory] = useState('all');

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const categories = [
    { id: 'all', name: 'All Events', color: 'bg-gray-500' },
    { id: 'academic', name: 'Academic', color: 'bg-blue-500' },
    { id: 'registration', name: 'Registration', color: 'bg-green-500' },
    { id: 'holidays', name: 'Holidays', color: 'bg-red-500' },
    { id: 'workshops', name: 'Workshops', color: 'bg-purple-500' },
    { id: 'deadlines', name: 'Deadlines', color: 'bg-orange-500' }
  ];

  const events = [
    {
      id: 1,
      title: 'Spring Semester Begins',
      date: '2024-01-15',
      time: '8:00 AM',
      category: 'academic',
      location: 'Campus Wide',
      description: 'First day of spring semester classes'
    },
    {
      id: 2,
      title: 'Career Development Workshop',
      date: '2024-01-20',
      time: '2:00 PM',
      category: 'workshops',
      location: 'Main Auditorium',
      description: 'Professional development and career planning session'
    },
    {
      id: 3,
      title: 'Registration Deadline',
      date: '2024-01-25',
      time: '11:59 PM',
      category: 'deadlines',
      location: 'Online',
      description: 'Last day to register for spring courses'
    },
    {
      id: 4,
      title: 'Martin Luther King Jr. Day',
      date: '2024-01-15',
      time: 'All Day',
      category: 'holidays',
      location: 'Campus Closed',
      description: 'Federal holiday - no classes'
    },
    {
      id: 5,
      title: 'Mid-term Exams',
      date: '2024-03-15',
      time: '9:00 AM',
      category: 'academic',
      location: 'Various Locations',
      description: 'Mid-semester examination period begins'
    },
    {
      id: 6,
      title: 'Spring Break',
      date: '2024-03-25',
      time: 'All Week',
      category: 'holidays',
      location: 'Campus Wide',
      description: 'Spring break week - no classes'
    }
  ];

  const filteredEvents = events.filter(event => {
    if (selectedCategory === 'all') return true;
    return event.category === selectedCategory;
  });

  const getCategoryColor = (category) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.color : 'bg-gray-500';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <section className="bg-brand-black text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Calendar className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Academic Calendar</h1>
            <p className="text-xl md:text-2xl mb-8 text-brand-gray-300">
              Stay informed about important dates, deadlines, and events throughout the academic year
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calendar Controls */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Month/Year Navigation */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  if (selectedMonth === 0) {
                    setSelectedMonth(11);
                    setSelectedYear(selectedYear - 1);
                  } else {
                    setSelectedMonth(selectedMonth - 1);
                  }
                }}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <div className="text-center">
                <h2 className="text-2xl font-bold text-brand-black">
                  {months[selectedMonth]} {selectedYear}
                </h2>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  if (selectedMonth === 11) {
                    setSelectedMonth(0);
                    setSelectedYear(selectedYear + 1);
                  } else {
                    setSelectedMonth(selectedMonth + 1);
                  }
                }}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-brand-black text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                    {category.name}
                  </div>
                </button>
              ))}
            </div>

            {/* Download Button */}
            <Button className="bg-brand-black hover:bg-brand-gray-800 text-white">
              <Download className="w-4 h-4 mr-2" />
              Download Calendar
            </Button>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className={`w-4 h-4 rounded-full ${getCategoryColor(event.category)}`}></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-brand-black mb-2">{event.title}</h3>
                      <p className="text-gray-600 mb-3">{event.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(event.date)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                        getCategoryColor(event.category)
                      }`}>
                        {categories.find(c => c.id === event.category)?.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No events found</h3>
                <p className="text-gray-500">Try selecting a different category or month.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Important Dates Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">Important Dates</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key dates and deadlines you need to remember for the academic year
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Registration Opens', date: 'Nov 1, 2023', icon: Users },
              { title: 'Classes Begin', date: 'Jan 15, 2024', icon: Calendar },
              { title: 'Mid-term Exams', date: 'Mar 15, 2024', icon: Clock },
              { title: 'Final Exams', date: 'May 10, 2024', icon: Filter }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6 text-center"
                >
                  <IconComponent className="w-8 h-8 mx-auto mb-4 text-brand-black" />
                  <h3 className="text-lg font-semibold text-brand-black mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.date}</p>
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
            <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl mb-8 text-brand-gray-300 max-w-2xl mx-auto">
              Subscribe to calendar notifications and never miss an important date or deadline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-brand-black hover:bg-brand-gray-100 px-8 py-3">
                Subscribe to Updates
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-brand-black px-8 py-3">
                Sync with Google Calendar
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AcademicCalendar;