import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Filter, Search, ArrowRight, CheckCircle } from 'lucide-react';
import { mockData } from '../data/mockData';

const Events = () => {
  const eventsData = mockData.events || { upcomingEvents: [], calendar: {} };
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'calendar'

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const filteredEvents = eventsData.upcomingEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', ...new Set(eventsData.upcomingEvents.map(event => event.category))];

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendarView = () => {
    const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);
    const firstDay = getFirstDayOfMonth(selectedMonth, selectedYear);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayEvents = eventsData.upcomingEvents.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate.getDate() === day && 
               eventDate.getMonth() === selectedMonth && 
               eventDate.getFullYear() === selectedYear;
      });

      days.push(
        <div key={day} className="h-24 border border-brand-gray-200 p-2">
          <div className="font-semibold text-brand-black mb-1">{day}</div>
          {dayEvents.slice(0, 2).map((event, index) => (
            <div key={index} className="text-xs bg-brand-gray-100 text-brand-gray-700 px-2 py-1 rounded mb-1 truncate">
              {event.title}
            </div>
          ))}
          {dayEvents.length > 2 && (
            <div className="text-xs text-brand-gray-500">+{dayEvents.length - 2} more</div>
          )}
        </div>
      );
    }

    return (
      <div className="bg-white rounded-xl shadow-lg border border-brand-gray-200 overflow-hidden">
        <div className="bg-brand-gray-50 p-4 border-b border-brand-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-brand-black">
              {months[selectedMonth]} {selectedYear}
            </h3>
            <div className="flex space-x-2">
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
                className="border border-brand-gray-300 rounded px-3 py-1 text-sm"
              >
                {months.map((month, index) => (
                  <option key={index} value={index}>{month}</option>
                ))}
              </select>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                className="border border-brand-gray-300 rounded px-3 py-1 text-sm"
              >
                {[2024, 2025, 2026].map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-0">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="bg-brand-gray-100 p-3 text-center font-semibold text-brand-gray-700 border-b border-brand-gray-200">
              {day}
            </div>
          ))}
          {days}
        </div>
      </div>
    );
  };

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
              Upcoming Events
            </h1>
            <p className="text-xl text-brand-gray-200 mb-8">
              Join us for educational events, workshops, and community gatherings throughout the year
            </p>
          </motion.div>
        </div>
      </section>

      {/* Controls */}
      <section className="py-12 bg-brand-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search events..."
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
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                  viewMode === 'list'
                    ? 'bg-brand-black text-white'
                    : 'bg-white text-brand-gray-600 hover:bg-brand-gray-100'
                }`}
              >
                List View
              </button>
              <button
                onClick={() => setViewMode('calendar')}
                className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                  viewMode === 'calendar'
                    ? 'bg-brand-black text-white'
                    : 'bg-white text-brand-gray-600 hover:bg-brand-gray-100'
                }`}
              >
                Calendar View
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {viewMode === 'calendar' ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {renderCalendarView()}
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 gap-8">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg border border-brand-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="w-full lg:w-64 h-48 bg-brand-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg width="150" height="100" viewBox="0 0 150 100" className="text-brand-gray-400">
                          <rect width="150" height="100" fill="currentColor" opacity="0.1" rx="8" />
                          <Calendar className="w-8 h-8" x="71" y="46" />
                          <text x="75" y="85" textAnchor="middle" className="text-xs fill-current">Event Image</text>
                        </svg>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <span className="inline-block bg-brand-gray-100 text-brand-gray-700 px-3 py-1 rounded-full text-sm font-medium mb-2">
                              {event.category}
                            </span>
                            <h3 className="text-2xl font-bold text-brand-black mb-2">{event.title}</h3>
                            <p className="text-brand-gray-600 mb-4">{event.description}</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm text-brand-gray-600">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <span className="text-2xl font-bold text-brand-black">{event.price}</span>
                            <div className="flex items-center space-x-2 text-sm text-brand-gray-600">
                              <Users className="w-4 h-4" />
                              <span>{event.attendees} registered</span>
                            </div>
                          </div>
                          <button className="bg-brand-black text-white px-6 py-3 rounded-lg hover:bg-brand-gray-800 transition-colors duration-300 flex items-center space-x-2">
                            <span>Register Now</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Host Your Own Event
            </h2>
            <p className="text-xl text-brand-gray-200 mb-8">
              Interested in hosting an educational event or workshop? We'd love to help you bring your ideas to life.
            </p>
            <button className="bg-white text-brand-black px-8 py-4 rounded-lg hover:bg-brand-gray-100 transition-colors duration-300 text-lg font-semibold">
              Submit Event Proposal
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events;