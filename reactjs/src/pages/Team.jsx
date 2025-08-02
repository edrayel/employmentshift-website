import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone, MapPin, Award, Users, Target, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Team page component for Employment Shift
 * Showcases team members, leadership, and company culture
 */
const Team = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  // Mock team data
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Chief Executive Officer',
      department: 'Leadership',
      bio: 'Sarah brings over 15 years of experience in talent acquisition and workforce development. She founded Employment Shift with a vision to revolutionize how organizations build and develop their teams.',
      image: '/api/placeholder/300/300',
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      email: 'sarah.johnson@employmentshift.com',
      phone: '+1 (555) 123-4567',
      location: 'New York, NY',
      achievements: [
        'Forbes 40 Under 40',
        'HR Excellence Award 2023',
        'Certified Executive Coach'
      ],
      featured: true
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Chief Technology Officer',
      department: 'Leadership',
      bio: 'Michael leads our technology initiatives and platform development. With a background in AI and machine learning, he ensures our solutions stay at the cutting edge of innovation.',
      image: '/api/placeholder/300/300',
      linkedin: 'https://linkedin.com/in/michaelchen',
      email: 'michael.chen@employmentshift.com',
      phone: '+1 (555) 123-4568',
      location: 'San Francisco, CA',
      achievements: [
        'MIT Technology Review Innovator',
        'AI Excellence Award',
        'Published Author on HR Tech'
      ],
      featured: true
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'VP of Client Success',
      department: 'Leadership',
      bio: 'Emily ensures our clients achieve their workforce goals through strategic partnerships and exceptional service delivery. She has a proven track record of building lasting client relationships.',
      image: '/api/placeholder/300/300',
      linkedin: 'https://linkedin.com/in/emilyrodriguez',
      email: 'emily.rodriguez@employmentshift.com',
      phone: '+1 (555) 123-4569',
      location: 'Chicago, IL',
      achievements: [
        'Client Success Leader of the Year',
        'Customer Experience Excellence',
        'Certified Project Manager'
      ],
      featured: true
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'Senior Recruitment Specialist',
      department: 'Recruitment',
      bio: 'David specializes in executive and technical recruitment with over 10 years of experience placing top-tier talent in Fortune 500 companies.',
      image: '/api/placeholder/300/300',
      linkedin: 'https://linkedin.com/in/davidthompson',
      email: 'david.thompson@employmentshift.com',
      phone: '+1 (555) 123-4570',
      location: 'Austin, TX',
      achievements: [
        'Top Recruiter Award 2023',
        'Certified Talent Acquisition Professional',
        '500+ Successful Placements'
      ],
      featured: false
    },
    {
      id: 5,
      name: 'Lisa Park',
      position: 'Career Development Coach',
      department: 'Coaching',
      bio: 'Lisa helps professionals navigate career transitions and achieve their goals through personalized coaching and development programs.',
      image: '/api/placeholder/300/300',
      linkedin: 'https://linkedin.com/in/lisapark',
      email: 'lisa.park@employmentshift.com',
      phone: '+1 (555) 123-4571',
      location: 'Seattle, WA',
      achievements: [
        'Certified Professional Coach',
        'Career Development Excellence',
        '1000+ Coaching Hours'
      ],
      featured: false
    },
    {
      id: 6,
      name: 'James Wilson',
      position: 'Training Program Manager',
      department: 'Training',
      bio: 'James designs and delivers comprehensive training programs that help organizations upskill their workforce and adapt to changing market demands.',
      image: '/api/placeholder/300/300',
      linkedin: 'https://linkedin.com/in/jameswilson',
      email: 'james.wilson@employmentshift.com',
      phone: '+1 (555) 123-4572',
      location: 'Denver, CO',
      achievements: [
        'Learning & Development Expert',
        'Certified Training Professional',
        'Corporate Training Excellence'
      ],
      featured: false
    },
    {
      id: 7,
      name: 'Maria Garcia',
      position: 'Data Analytics Specialist',
      department: 'Analytics',
      bio: 'Maria transforms workforce data into actionable insights, helping clients make informed decisions about their talent strategies.',
      image: '/api/placeholder/300/300',
      linkedin: 'https://linkedin.com/in/mariagarcia',
      email: 'maria.garcia@employmentshift.com',
      phone: '+1 (555) 123-4573',
      location: 'Miami, FL',
      achievements: [
        'Data Science Certification',
        'Analytics Excellence Award',
        'Published Research on HR Analytics'
      ],
      featured: false
    },
    {
      id: 8,
      name: 'Robert Kim',
      position: 'Business Development Manager',
      department: 'Business Development',
      bio: 'Robert identifies new opportunities and builds strategic partnerships that expand our reach and enhance our service offerings.',
      image: '/api/placeholder/300/300',
      linkedin: 'https://linkedin.com/in/robertkim',
      email: 'robert.kim@employmentshift.com',
      phone: '+1 (555) 123-4574',
      location: 'Los Angeles, CA',
      achievements: [
        'Business Development Excellence',
        'Strategic Partnership Leader',
        'Revenue Growth Champion'
      ],
      featured: false
    }
  ];

  const departments = ['All', 'Leadership', 'Recruitment', 'Coaching', 'Training', 'Analytics', 'Business Development'];
  const featuredMembers = teamMembers.filter(member => member.featured);

  // Filter team members based on department
  const filteredMembers = teamMembers.filter(member => {
    return selectedDepartment === 'All' || member.department === selectedDepartment;
  });

  const getDepartmentColor = (department) => {
    const colors = {
      'Leadership': 'bg-brand-gray-100 text-brand-black',
      'Recruitment': 'bg-brand-gray-200 text-brand-gray-800',
      'Coaching': 'bg-brand-gray-100 text-brand-black',
      'Training': 'bg-brand-gray-200 text-brand-gray-800',
      'Analytics': 'bg-brand-gray-100 text-brand-black',
      'Business Development': 'bg-brand-gray-200 text-brand-gray-800'
    };
    return colors[department] || 'bg-brand-gray-100 text-brand-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Meet Our Team</h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              The passionate professionals behind Employment Shift's success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we serve our clients and support each other
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-brand-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-brand-black" />
              </div>
              <h3 className="text-xl font-bold text-brand-gray-800 mb-2">Excellence</h3>
              <p className="text-brand-gray-600">We strive for excellence in everything we do, delivering exceptional results for our clients.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Collaboration</h3>
              <p className="text-gray-600">We believe in the power of teamwork and building strong partnerships with our clients.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-600">We continuously innovate to stay ahead of industry trends and provide cutting-edge solutions.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Integrity</h3>
              <p className="text-gray-600">We operate with honesty, transparency, and ethical practices in all our interactions.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the visionary leaders driving Employment Shift's mission and growth
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Leadership
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-purple-600 font-semibold mb-3">{member.position}</p>
                  
                  <div className="flex items-center text-gray-500 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{member.location}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{member.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Achievements</h4>
                    <ul className="space-y-1">
                      {member.achievements.slice(0, 2).map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-xs text-gray-600 flex items-center">
                          <Award className="w-3 h-3 text-yellow-500 mr-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex space-x-3">
                    <a
                      href={member.linkedin}
                      className="bg-brand-gray-100 text-brand-black p-2 rounded-full hover:bg-brand-gray-200 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="bg-brand-gray-100 text-brand-gray-600 p-2 rounded-full hover:bg-brand-gray-200 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="bg-brand-gray-100 text-brand-gray-600 p-2 rounded-full hover:bg-brand-gray-200 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {departments.map(department => (
              <button
                key={department}
                onClick={() => setSelectedDepartment(department)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors duration-300 ${
                  selectedDepartment === department
                    ? 'bg-brand-black text-white'
                    : 'bg-white text-brand-gray-700 hover:bg-brand-gray-100'
                }`}
              >
                {department}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Team Members */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get to know the talented professionals who make Employment Shift exceptional
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDepartmentColor(member.department)}`}>
                      {member.department}
                    </span>
                    {member.featured && (
                      <span className="bg-brand-gray-100 text-brand-black px-2 py-1 rounded-full text-xs font-medium">
                        Leadership
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-bold text-brand-gray-800 mb-1">{member.name}</h3>
                  <p className="text-brand-black font-semibold mb-2 text-sm">{member.position}</p>
                  
                  <div className="flex items-center text-brand-gray-500 mb-3">
                    <MapPin className="w-3 h-3 mr-1" />
                    <span className="text-xs">{member.location}</span>
                  </div>
                  
                  <p className="text-brand-gray-600 mb-3 text-xs leading-relaxed line-clamp-3">{member.bio}</p>
                  
                  <div className="flex space-x-2">
                    <a
                      href={member.linkedin}
                      className="bg-brand-gray-100 text-brand-black p-1.5 rounded-full hover:bg-brand-gray-200 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-3 h-3" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="bg-brand-gray-100 text-brand-gray-600 p-1.5 rounded-full hover:bg-brand-gray-200 transition-colors"
                    >
                      <Mail className="w-3 h-3" />
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="bg-brand-gray-100 text-brand-gray-600 p-1.5 rounded-full hover:bg-brand-gray-200 transition-colors"
                    >
                      <Phone className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="bg-brand-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Ready to make a difference in the world of employment and career development? 
              We're always looking for passionate professionals to join our growing team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold">
                View Open Positions
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold">
                Submit Your Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;