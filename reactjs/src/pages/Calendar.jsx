import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, BookOpen, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Calendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const upcomingEvents = [
    {
      date: '2024-01-15',
      title: 'Winter Term Begins',
      type: 'Academic',
      description: 'Start of the winter academic term for all programs',
      time: '9:00 AM',
      location: 'All Campuses'
    },
    {
      date: '2024-01-22',
      title: 'Career Fair',
      type: 'Career',
      description: 'Connect with top employers and explore job opportunities',
      time: '10:00 AM - 4:00 PM',
      location: 'Main Auditorium'
    },
    {
      date: '2024-01-29',
      title: 'Tech Workshop Series',
      type: 'Workshop',
      description: 'Hands-on workshop on latest web development technologies',
      time: '2:00 PM - 5:00 PM',
      location: 'Tech Lab 3'
    },
    {
      date: '2024-02-05',
      title: 'Alumni Networking Event',
      type: 'Networking',
      description: 'Connect with successful alumni and expand your professional network',
      time: '6:00 PM - 8:00 PM',
      location: 'Student Lounge'
    },
    {
      date: '2024-02-12',
      title: 'Industry Speaker Series',
      type: 'Speaker',
      description: 'Learn from industry leaders about emerging trends and opportunities',
      time: '1:00 PM - 2:30 PM',
      location: 'Lecture Hall A'
    },
    {
      date: '2024-02-19',
      title: 'Project Showcase',
      type: 'Academic',
      description: 'Present your capstone projects to faculty and potential employers',
      time: '3:00 PM - 6:00 PM',
      location: 'Innovation Center'
    }
  ];

  const academicCalendar = [
    {
      term: 'Winter 2024',
      startDate: 'January 15, 2024',
      endDate: 'March 22, 2024',
      registrationDeadline: 'January 8, 2024',
      addDropDeadline: 'January 22, 2024'
    },
    {
      term: 'Spring 2024',
      startDate: 'April 8, 2024',
      endDate: 'June 14, 2024',
      registrationDeadline: 'April 1, 2024',
      addDropDeadline: 'April 15, 2024'
    },
    {
      term: 'Summer 2024',
      startDate: 'July 1, 2024',
      endDate: 'August 23, 2024',
      registrationDeadline: 'June 24, 2024',
      addDropDeadline: 'July 8, 2024'
    },
    {
      term: 'Fall 2024',
      startDate: 'September 9, 2024',
      endDate: 'November 15, 2024',
      registrationDeadline: 'September 2, 2024',
      addDropDeadline: 'September 16, 2024'
    }
  ];

  const getEventTypeColor = (type) => {
    const colors = {
      'Academic': 'bg-blue-100 text-blue-800',
      'Career': 'bg-green-100 text-green-800',
      'Workshop': 'bg-purple-100 text-purple-800',
      'Networking': 'bg-orange-100 text-orange-800',
      'Speaker': 'bg-red-100 text-red-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <Calendar className="h-16 w-16 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Academic Calendar
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Stay informed about important dates, events, and deadlines throughout the academic year.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Upcoming Events</h2>
            <p className="text-xl text-gray-600">
              Don't miss these exciting opportunities to learn, network, and grow.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getEventTypeColor(event.type)}`}>
                      {event.type}
                    </span>
                    <span className="text-sm text-gray-500">{event.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Academic Calendar 2024</h2>
            <p className="text-xl text-gray-600">
              Plan your academic year with our comprehensive term schedule.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {academicCalendar.map((term, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100"
                >
                  <div className="flex items-center mb-4">
                    <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-semibold text-gray-900">{term.term}</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Start Date:</span>
                      <span className="font-semibold">{term.startDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">End Date:</span>
                      <span className="font-semibold">{term.endDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Registration Deadline:</span>
                      <span className="font-semibold text-orange-600">{term.registrationDeadline}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Add/Drop Deadline:</span>
                      <span className="font-semibold text-red-600">{term.addDropDeadline}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                    <Link to="/admissions">Register Now</Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Dates & Deadlines */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Key Dates & Deadlines</h2>
            <p className="text-xl text-gray-600">
              Important deadlines you need to know to stay on track.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-blue-600" />
                    Application Deadlines
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span>Winter Term Applications</span>
                      <span className="font-semibold text-blue-600">January 8, 2024</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Spring Term Applications</span>
                      <span className="font-semibold text-blue-600">April 1, 2024</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Summer Term Applications</span>
                      <span className="font-semibold text-blue-600">June 24, 2024</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Fall Term Applications</span>
                      <span className="font-semibold text-blue-600">September 2, 2024</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Users className="h-5 w-5 mr-2 text-green-600" />
                    Financial Aid Deadlines
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span>Winter Term FAFSA</span>
                      <span className="font-semibold text-green-600">December 15, 2023</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Spring Term FAFSA</span>
                      <span className="font-semibold text-green-600">March 15, 2024</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Summer Term FAFSA</span>
                      <span className="font-semibold text-green-600">June 1, 2024</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Fall Term FAFSA</span>
                      <span className="font-semibold text-green-600">August 15, 2024</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 text-white/90">
              Don't miss important deadlines. Register today and secure your spot in our next cohort.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/admissions" className="flex items-center">
                Register Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Calendar;