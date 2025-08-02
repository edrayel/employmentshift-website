import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, User, Mail, Calendar, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  const lastUpdated = "January 1, 2024";
  
  const sections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: User,
      content: [
        {
          subheading: 'Personal Information',
          items: [
            'Name and contact information (email, phone, address)',
            'Educational background and work experience',
            'Payment information for course enrollments',
            'Account credentials and preferences',
            'Communications with our support team'
          ]
        },
        {
          subheading: 'Usage Information',
          items: [
            'Course progress and completion data',
            'Platform usage analytics and interaction data',
            'Device information and browser type',
            'IP addresses and location data',
            'Cookies and similar tracking technologies'
          ]
        }
      ]
    },
    {
      id: 'how-we-use',
      title: 'How We Use Your Information',
      icon: Eye,
      content: [
        {
          subheading: 'Service Delivery',
          items: [
            'Provide and maintain our educational services',
            'Process enrollments and payments',
            'Deliver course content and learning materials',
            'Track progress and issue certificates',
            'Send important service updates and notifications'
          ]
        },
        {
          subheading: 'Service Improvement',
          items: [
            'Analyze usage patterns to improve our platform',
            'Develop new courses and features',
            'Personalize learning recommendations',
            'Conduct research and surveys',
            'Monitor and improve service performance'
          ]
        },
        {
          subheading: 'Communication',
          items: [
            'Respond to your inquiries and support requests',
            'Send newsletters and marketing communications',
            'Provide course updates and announcements',
            'Share relevant educational opportunities',
            'Facilitate community interactions'
          ]
        }
      ]
    },
    {
      id: 'data-sharing',
      title: 'Information Sharing and Disclosure',
      icon: Lock,
      content: [
        {
          subheading: 'Third-Party Service Providers',
          items: [
            'Payment processors for secure transactions',
            'Cloud hosting providers for data storage',
            'Analytics services for platform improvement',
            'Email delivery services for communications',
            'Customer support platforms'
          ]
        },
        {
          subheading: 'Legal Requirements',
          items: [
            'Comply with applicable laws and regulations',
            'Respond to lawful requests from authorities',
            'Protect our rights and property',
            'Prevent fraud and security issues',
            'Ensure the safety of our users'
          ]
        }
      ]
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: Shield,
      content: [
        {
          subheading: 'Security Measures',
          items: [
            'Industry-standard encryption for data transmission',
            'Secure socket layer (SSL) technology',
            'Regular security audits and assessments',
            'Access controls and authentication systems',
            'Employee training on data protection'
          ]
        },
        {
          subheading: 'Data Retention',
          items: [
            'Retain data only as long as necessary',
            'Regular review and deletion of outdated information',
            'User control over data deletion',
            'Compliance with legal retention requirements',
            'Secure data disposal procedures'
          ]
        }
      ]
    },
    {
      id: 'user-rights',
      title: 'Your Rights and Choices',
      icon: User,
      content: [
        {
          subheading: 'Access and Control',
          items: [
            'Access your personal information at any time',
            'Update or correct your information',
            'Request deletion of your data',
            'Export your data in portable format',
            'Opt-out of marketing communications'
          ]
        },
        {
          subheading: 'Cookie Preferences',
          items: [
            'Manage cookie settings through your browser',
            'Opt-out of certain tracking technologies',
            'Choose which cookies to accept',
            'Clear cookies from your device',
            'Learn about cookie usage in our Cookie Policy'
          ]
        }
      ]
    }
  ];

  const legalCompliance = [
    {
      title: 'GDPR Compliance',
      description: 'We comply with the General Data Protection Regulation (GDPR) for users in the European Union.',
      details: [
        'Lawful basis for processing personal data',
        'Right to be forgotten (data deletion)',
        'Data portability rights',
        'Consent management for processing',
        'Data Protection Officer contact'
      ]
    },
    {
      title: 'CCPA Compliance',
      description: 'We comply with the California Consumer Privacy Act (CCPA) for California residents.',
      details: [
        'Right to know what personal information is collected',
        'Right to delete personal information',
        'Right to opt-out of sale of personal information',
        'Right to non-discrimination for privacy rights',
        'Designated methods for submitting requests'
      ]
    },
    {
      title: 'Children\'s Privacy',
      description: 'Our services are not directed to children under 13 years of age.',
      details: [
        'No intentional collection of children\'s data',
        'Parental consent requirements',
        'Age verification measures',
        'Prompt deletion of inadvertently collected data',
        'Parental rights to review and delete child information'
      ]
    }
  ];

  const contactInfo = [
    {
      title: 'Data Protection Officer',
      email: 'privacy@employmentshift.com',
      address: 'Employment Shift, Lagos, Nigeria'
    },
    {
      title: 'Support Contact',
      email: 'support@employmentshift.com',
      phone: '+234 705 143 2811'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Shield className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-white/90">
              Your privacy is important to us. Learn how we protect and use your information.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <Calendar className="h-4 w-4" />
              <span>Last Updated: {lastUpdated}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Privacy Overview</h2>
              <p className="text-lg text-gray-600 mb-8">
                Employment Shift is committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, 
                mobile applications, and educational services.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <p className="text-blue-800">
                  <strong>Key Point:</strong> By using our services, you agree to the collection and use of information 
                  in accordance with this Privacy Policy. If you disagree with any part of this policy, please discontinue use of our services.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      {sections.map((section, sectionIndex) => (
        <section key={section.id} className={sectionIndex % 2 === 0 ? 'py-16 bg-white' : 'py-16 bg-gray-50'}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center mb-8">
                <section.icon className="h-8 w-8 text-indigo-600 mr-3" />
                <h2 className="text-3xl font-bold" id={section.id}>{section.title}</h2>
              </div>
              
              <div className="space-y-8">
                {section.content.map((subsection, subIndex) => (
                  <div key={subIndex} className="bg-white rounded-lg shadow-sm border p-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">{subsection.subheading}</h3>
                    <ul className="space-y-2">
                      {subsection.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Legal Compliance */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Legal Compliance</h2>
            <div className="grid md:grid-cols-1 gap-8">
              {legalCompliance.map((compliance, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">{compliance.title}</h3>
                  <p className="text-gray-600 mb-4">{compliance.description}</p>
                  <ul className="space-y-1">
                    {compliance.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <ChevronRight className="h-4 w-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
            <p className="text-lg text-gray-600 mb-8">
              If you have any questions about this Privacy Policy or your personal information, 
              please contact us using the information below.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {contactInfo.map((contact, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-semibold mb-4">{contact.title}</h3>
                  <div className="space-y-2 text-left">
                    <div>
                      <strong className="text-gray-700">Email:</strong>
                      <a href={`mailto:${contact.email}`} className="text-indigo-600 hover:text-indigo-800 ml-2">
                        {contact.email}
                      </a>
                    </div>
                    {contact.phone && (
                      <div>
                        <strong className="text-gray-700">Phone:</strong>
                        <a href={`tel:${contact.phone.replace(/\D/g, '')}`} className="text-indigo-600 hover:text-indigo-800 ml-2">
                          {contact.phone}
                        </a>
                      </div>
                    )}
                    {contact.address && (
                      <div>
                        <strong className="text-gray-700">Address:</strong>
                        <span className="text-gray-600 ml-2">{contact.address}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Policy Updates */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Policy Updates</h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-blue-800 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                the new Privacy Policy on this page and updating the "Last Updated" date at the top.
              </p>
              <p className="text-blue-800">
                <strong>Recommendation:</strong> We encourage you to review this Privacy Policy periodically for any changes. 
                Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl font-bold mb-6">Related Policies</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/terms" 
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Terms of Service
              </Link>
              <Link 
                to="/cookies" 
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Cookie Policy
              </Link>
              <Link 
                to="/support" 
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Support Center
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;