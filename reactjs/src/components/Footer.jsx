import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, LogIn, CalendarDays, Gift, Map as MapIcon, Award, Users, Image as ImageIcon, Briefcase } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Products', path: '/products' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Podcast', path: '/podcast' },
    { name: 'Events', path: '/events' },
    { name: 'Blog', path: '/blog' },
  ];

  const audienceLinks = [
    { name: 'Career Changers', path: '/career-changers' },
    { name: 'Recent Graduates', path: '/recent-graduates' },
    { name: 'Professionals', path: '/professionals' },
    { name: 'Entrepreneurs', path: '/entrepreneurs' },
    { name: 'Job Seekers', path: '/job-seekers' },
  ];

  const resourceLinks = [
    { name: 'Academic Calendar', path: '/academic-calendar', icon: Award },
    { name: 'Library', path: '/library', icon: Users },
    { name: 'Student Services', path: '/student-services', icon: Users },
    { name: 'Contact Us', path: '/contact', icon: Mail },
    { name: 'Student Portal', path: '/student-portal', icon: LogIn },
  ];

  const utilityLinks = [
      { name: 'Privacy Policy', path: '/privacy-policy'},
      { name: 'Terms of Service', path: '/terms-of-service'},
      { name: 'Accessibility', path: '/accessibility'},
  ];


  return (
    <footer className="relative bg-brand-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("/assets/img/abraham-pattern.svg")',
            backgroundSize: '400px',
          }}
          animate={{
            x: [0, -100],
            y: [0, -100],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 40,
            ease: "linear"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-black/90"></div>
      </div>
      <div className="container relative z-10 mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-12" >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold font-heading text-white">EmploymentShift</span>
                <span className="block text-xs font-body font-medium tracking-wider text-gray-400">Excellence in Education</span>
              </div>
            </Link>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-brand-gray-300 hover:text-white transition-colors"><Facebook className="h-6 w-6" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-brand-gray-300 hover:text-white transition-colors"><Twitter className="h-6 w-6" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-brand-gray-300 hover:text-white transition-colors"><Instagram className="h-6 w-6" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-brand-gray-300 hover:text-white transition-colors"><Linkedin className="h-6 w-6" /></a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-lg font-semibold font-heading text-brand-gray-100 mb-4 block">Quick Links</span>
            <ul className="space-y-3 font-body text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-white transition-colors flex items-center"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-lg font-semibold font-heading text-brand-gray-100 mb-4 block">For You</span>
            <ul className="space-y-3 font-body text-sm">
              {audienceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-lg font-semibold font-heading text-brand-gray-100 mb-4 block">Resources</span>
            <ul className="space-y-3 mb-6 font-body text-sm">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-white transition-colors flex items-center"
                  >
                    {link.icon && <link.icon className="mr-2 h-4 w-4 text-white" />}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="col-span-full md:col-span-1"
          >
            <span className="text-lg font-semibold font-heading text-brand-gray-100 mb-4 block">Contact Info</span>
            <div className="space-y-3 font-body text-sm">
              <div className="flex items-start space-x-3 flex-wrap">
                <MapPin className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                <span className="min-w-0">
                  Lagos, Nigeria
                </span>
              </div>
              <div className="flex items-center space-x-3 flex-wrap">
                <Phone className="h-5 w-5 text-white flex-shrink-0" />
                <span className="min-w-0">+234 705 143 2811</span>
              </div>
              <div className="flex items-center space-x-3 flex-wrap">
                <Mail className="h-5 w-5 text-white flex-shrink-0" />
                <span className="min-w-0">hello@employmentshift.com</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-brand-gray-700 mt-12 pt-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-6 max-w-3xl mx-auto">
            <h3 className="text-white text-sm font-semibold mb-2">EQUAL OPPORTUNITY EDUCATION</h3>
            <p className="text-brand-gray-300 text-xs font-body leading-relaxed">
              EmploymentShift provides educational services to individuals of any race, color, national and ethnic origin, gender, age, religion, sexual orientation, or disability status. We are committed to promoting equal opportunity education and do not discriminate in our admissions, programs, or educational services.
            </p>
          </motion.div>
          <p className="text-brand-gray-300 text-sm font-body">
            © {new Date().getFullYear()} EmploymentShift. All rights reserved.
          </p>
          <div className="mt-2 space-x-2">
            {utilityLinks.map((link, index) => (
                <React.Fragment key={link.name}>
                    <Link to={link.path} className="text-brand-gray-300 hover:text-white text-xs font-body">
                        {link.name}
                    </Link>
                    {index < utilityLinks.length - 1 && <span className="text-brand-gray-500 text-xs">|</span>}
                </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
