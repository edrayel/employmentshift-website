import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, GraduationCap, DollarSign, Shield, Phone, Mail, MapPin, Clock, Calendar, FileText, Briefcase, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StudentServices = () => {
  const [selectedService, setSelectedService] = useState('all');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Users },
    { id: 'academic', name: 'Academic Support', icon: GraduationCap },
    { id: 'wellness', name: 'Health & Wellness', icon: Heart },
    { id: 'financial', name: 'Financial Aid', icon: DollarSign },
    { id: 'career', name: 'Career Services', icon: Briefcase },
    { id: 'housing', name: 'Housing & Dining', icon: Home }
  ];

  const services = [
    {
      id: 1,
      title: 'Academic Advising',
      category: 'academic',
      description: 'Personalized guidance for course selection, degree planning, and academic success strategies.',
      icon: GraduationCap,
      contact: 'advising@employmentshift.edu',
      phone: '(555) 123-4567',
      location: 'Academic Success Center, Room 201',
      hours: 'Mon-Fri: 8AM-5PM'
    },
    {
      id: 2,
      title: 'Counseling & Mental Health',
      category: 'wellness',
      description: 'Confidential counseling services, mental health support, and wellness programs.',
      icon: Heart,
      contact: 'counseling@employmentshift.edu',
      phone: '(555) 123-4568',
      location: 'Student Wellness Center',
      hours: 'Mon-Fri: 9AM-6PM, Emergency 24/7'
    },
    {
      id: 3,
      title: 'Financial Aid Office',
      category: 'financial',
      description: 'Assistance with scholarships, grants, loans, and financial planning for education.',
      icon: DollarSign,
      contact: 'finaid@employmentshift.edu',
      phone: '(555) 123-4569',
      location: 'Administration Building, Room 150',
      hours: 'Mon-Fri: 8AM-4:30PM'
    },
    {
      id: 4,
      title: 'Career Development Center',
      category: 'career',
      description: 'Resume building, interview preparation, job search assistance, and internship placement.',
      icon: Briefcase,
      contact: 'careers@employmentshift.edu',
      phone: '(555) 123-4570',
      location: 'Career Services Building',
      hours: 'Mon-Fri: 9AM-5PM'
    },
    {
      id: 5,
      title: 'Housing Services',
      category: 'housing',
      description: 'Residence hall assignments, housing applications, and residential life support.',
      icon: Home,
      contact: 'housing@employmentshift.edu',
      phone: '(555) 123-4571',
      location: 'Residential Life Office',
      hours: 'Mon-Fri: 8AM-5PM'
    },
    {
      id: 6,
      title: 'Tutoring Center',
      category: 'academic',
      description: 'Free tutoring services, study groups, and academic skill development workshops.',
      icon: Users,
      contact: 'tutoring@employmentshift.edu',
      phone: '(555) 123-4572',
      location: 'Learning Commons, 2nd Floor',
      hours: 'Mon-Thu: 9AM-9PM, Fri: 9AM-5PM'
    },
    {
      id: 7,
      title: 'Student Health Services',
      category: 'wellness',
      description: 'Medical care, health screenings, immunizations, and health education programs.',
      icon: Shield,
      contact: 'health@employmentshift.edu',
      phone: '(555) 123-4573',
      location: 'Health Center',
      hours: 'Mon-Fri: 8AM-5PM'
    },
    {
      id: 8,
      title: 'Disability Services',
      category: 'academic',
      description: 'Accommodations and support services for students with disabilities.',
      icon: Heart,
      contact: 'disability@employmentshift.edu',
      phone: '(555) 123-4574',
      location: 'Student Success Center, Room 105',
      hours: 'Mon-Fri: 8AM-5PM'
    }
  ];

  const emergencyContacts = [
    {
      title: 'Campus Security',
      phone: '(555) 911-SAFE',
      description: '24/7 emergency response and campus safety'
    },
    {
      title: 'Crisis Counseling',
      phone: '(555) 123-HELP',
      description: '24/7 mental health crisis support'
    },
    {
      title: 'Medical Emergency',
      phone: '911',
      description: 'Life-threatening emergencies'
    }
  ];

  const quickActions = [
    { title: 'Schedule Appointment', icon: Calendar, description: 'Book time with any student service' },
    { title: 'Submit Request', icon: FileText, description: 'Request transcripts, forms, or documents' },
    { title: 'Emergency Contact', icon: Phone, description: 'Access 24/7 emergency services' },
    { title: 'Service Directory', icon: Users, description: 'Browse all available student services' }
  ];

  const filteredServices = selectedService === 'all' 
    ? services 
    : services.filter(service => service.category === selectedService);

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
            <Users className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Student Services</h1>
            <p className="text-xl md:text-2xl mb-8 text-brand-gray-300">
              Comprehensive support services to help you succeed academically, personally, and professionally
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6 text-center cursor-pointer hover:shadow-lg transition-shadow duration-300"
                >
                  <IconComponent className="w-8 h-8 mx-auto mb-4 text-brand-black" />
                  <h3 className="text-lg font-semibold text-brand-black mb-2">{action.title}</h3>
                  <p className="text-gray-600 text-sm">{action.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Categories Filter */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {serviceCategories.map(category => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedService(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    selectedService === category.id
                      ? 'bg-brand-black text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-brand-black rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-brand-black mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>{service.contact}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>{service.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{service.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{service.hours}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button className="w-full bg-brand-black hover:bg-brand-gray-800 text-white">
                      Contact Service
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">Emergency Contacts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important numbers for urgent situations and emergency support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {emergencyContacts.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 text-center border-l-4 border-red-500"
              >
                <Phone className="w-8 h-8 mx-auto mb-4 text-red-500" />
                <h3 className="text-xl font-semibold text-brand-black mb-2">{contact.title}</h3>
                <p className="text-2xl font-bold text-red-500 mb-2">{contact.phone}</p>
                <p className="text-gray-600 text-sm">{contact.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Hours */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* General Hours */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-brand-black mb-6">Service Hours</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-brand-black">Monday - Friday</span>
                    <span className="text-gray-600">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-brand-black">Saturday</span>
                    <span className="text-gray-600">9:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-brand-black">Sunday</span>
                    <span className="text-gray-600">Closed</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-medium text-brand-black">Emergency Services</span>
                    <span className="text-green-600 font-medium">24/7 Available</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-brand-black mb-6">Get Help</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-black mt-1" />
                    <div>
                      <p className="font-medium text-brand-black">Student Services Center</p>
                      <p className="text-gray-600">123 Education Boulevard<br />Learning City, LC 12345</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-brand-black" />
                    <div>
                      <p className="font-medium text-brand-black">Main Office</p>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-brand-black" />
                    <div>
                      <p className="font-medium text-brand-black">General Inquiries</p>
                      <p className="text-gray-600">services@employmentshift.edu</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button className="w-full bg-brand-black hover:bg-brand-gray-800 text-white">
                    Schedule Appointment
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
            <h2 className="text-4xl font-bold mb-6">We're Here to Support You</h2>
            <p className="text-xl mb-8 text-brand-gray-300 max-w-2xl mx-auto">
              Don't hesitate to reach out. Our dedicated staff is committed to helping you succeed in every aspect of your educational journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-brand-black hover:bg-brand-gray-100 px-8 py-3">
                Contact Student Services
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-brand-black px-8 py-3">
                Browse All Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StudentServices;