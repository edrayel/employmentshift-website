import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, XCircle, AlertTriangle, Shield, Users, CreditCard, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms = () => {
  const lastUpdated = "January 1, 2024";
  
  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: CheckCircle,
      content: [
        "By accessing and using Employment Shift's website, mobile applications, and educational services (collectively, the 'Services'), you agree to be bound by these Terms of Service.",
        "If you do not agree to these terms, you must not access or use our Services.",
        "These terms apply to all users, including students, instructors, visitors, and any person who accesses our platform.",
        "We may modify these terms at any time, and continued use constitutes acceptance of any changes."
      ]
    },
    {
      id: 'services',
      title: 'Services Description',
      icon: Users,
      content: [
        "Employment Shift provides online educational courses, training programs, career development resources, and related services.",
        "Services include but are not limited to: video courses, live sessions, downloadable resources, community forums, and career counseling.",
        "We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time without notice.",
        "Access to certain services may require registration and payment of applicable fees."
      ]
    },
    {
      id: 'registration',
      title: 'User Registration',
      icon: Users,
      content: [
        "You must create an account to access certain features of our Services.",
        "You agree to provide accurate, current, and complete information during registration.",
        "You are responsible for maintaining the confidentiality of your account credentials.",
        "You must notify us immediately of any unauthorized use of your account.",
        "You are solely responsible for all activities that occur under your account."
      ]
    },
    {
      id: 'payment',
      title: 'Payment and Fees',
      icon: CreditCard,
      content: [
        "All fees are stated in US dollars unless otherwise specified.",
        "Payment is due at the time of enrollment unless alternative arrangements are approved.",
        "We accept major credit cards, PayPal, and other approved payment methods.",
        "All sales are final, but we may offer refunds under specific circumstances outlined in our refund policy.",
        "We reserve the right to change pricing at any time with notice to existing users."
      ]
    },
    {
      id: 'content',
      title: 'Intellectual Property',
      icon: FileText,
      content: [
        "All course content, materials, and resources are owned by Employment Shift or our licensors.",
        "You are granted a limited, non-exclusive, non-transferable license to access content for personal, non-commercial use.",
        "You may not reproduce, distribute, modify, or create derivative works from our content without explicit permission.",
        "User-generated content remains your property, but you grant us a license to use it for service operation.",
        "Any unauthorized use terminates the license granted by us."
      ]
    },
    {
      id: 'conduct',
      title: 'User Conduct',
      icon: AlertTriangle,
      content: [
        "You agree not to use our Services for any unlawful or prohibited purpose.",
        "You must not interfere with or disrupt the Services or servers/networks connected to the Services.",
        "You must not attempt to gain unauthorized access to any portion of the Services.",
        "You must not use the Services to transmit spam, viruses, or harmful code.",
        "You must respect other users and maintain a professional environment."
      ]
    },
    {
      id: 'termination',
      title: 'Termination',
      icon: XCircle,
      content: [
        "We may terminate or suspend your account immediately, without prior notice, for any violation of these terms.",
        "Upon termination, your right to use the Services will cease immediately.",
        "All provisions that should survive termination shall survive, including ownership provisions and limitations of liability.",
        "You may terminate your account at any time by contacting customer support.",
        "No refunds will be provided for terminated accounts due to violations."
      ]
    },
    {
      id: 'liability',
      title: 'Limitation of Liability',
      icon: Shield,
      content: [
        "Our Services are provided 'as is' without warranties of any kind.",
        "We do not guarantee that our Services will be uninterrupted, timely, secure, or error-free.",
        "We are not liable for any indirect, incidental, special, or consequential damages.",
        "Our total liability shall not exceed the amount paid by you for the Services in the 12 months preceding the claim.",
        "Some jurisdictions do not allow limitations of liability, so these limitations may not apply to you."
      ]
    }
  ];

  const additionalSections = [
    {
      id: 'refund-policy',
      title: 'Refund Policy',
      icon: CreditCard,
      content: [
        "Full refunds are available within 7 days of purchase if you have not accessed more than 25% of the course content.",
        "Partial refunds may be considered on a case-by-case basis within 30 days of purchase.",
        "No refunds are provided for completed courses or after 30 days from purchase.",
        "Technical issues preventing access to content will be resolved promptly; refunds may be issued if issues cannot be resolved.",
        "Contact support@employmentshift.com for refund requests with your order details."
      ]
    },
    {
      id: 'modifications',
      title: 'Modifications to Services',
      icon: Clock,
      content: [
        "We reserve the right to modify, suspend, or discontinue any part of our Services at any time.",
        "We will provide reasonable notice for significant changes affecting enrolled students.",
        "Prices for our Services are subject to change without notice.",
        "We shall not be liable to you or any third party for any modification, price change, suspension, or discontinuance of Services.",
        "Continued use of the Services after changes constitutes acceptance of those changes."
      ]
    }
  ];

  const governingLaw = {
    jurisdiction: "New York, USA",
    law: "Laws of the State of New York",
    disputes: "Any disputes arising from these terms shall be resolved in the courts of New York County, New York",
    international: "For international users, we comply with applicable local laws and regulations"
  };

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
            <FileText className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-white/90">
              Please read these terms carefully before using our services
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <Clock className="h-4 w-4" />
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
              <h2 className="text-3xl font-bold mb-6">Terms Overview</h2>
              <p className="text-lg text-gray-600 mb-8">
                These Terms of Service govern your access to and use of Employment Shift's educational platform, 
                including all courses, content, and services provided through our website and mobile applications.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <p className="text-yellow-800">
                  <strong>Important:</strong> By accessing or using our services, you acknowledge that you have read, 
                  understood, and agree to be bound by these terms. If you do not agree, you must not access our services.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Terms Sections */}
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
              
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <ul className="space-y-3">
                  {section.content.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Additional Policies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Additional Policies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {additionalSections.map((section) => (
                <div key={section.id} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <section.icon className="h-6 w-6 text-indigo-600 mr-2" />
                    <h3 className="text-xl font-semibold">{section.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {section.content.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <ChevronRight className="h-4 w-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Governing Law */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Governing Law</h2>
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Jurisdiction</h3>
                  <p className="text-gray-700 mb-4">
                    These Terms shall be governed by and construed in accordance with the laws of <strong>{governingLaw.jurisdiction}</strong>.
                  </p>
                  <p className="text-gray-700">
                    <strong>Applicable Law:</strong> {governingLaw.law}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Dispute Resolution</h3>
                  <p className="text-gray-700 mb-4">
                    {governingLaw.disputes}
                  </p>
                  <p className="text-gray-700">
                    <strong>International Users:</strong> {governingLaw.international}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact & Updates */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Questions About Our Terms?</h2>
            <p className="text-lg text-gray-600 mb-8">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div>
                  <strong className="text-gray-700">Email:</strong>
                  <a href="mailto:legal@employmentshift.com" className="text-indigo-600 hover:text-indigo-800 ml-2">
                    legal@employmentshift.com
                  </a>
                </div>
                <div>
                  <strong className="text-gray-700">Support:</strong>
                  <a href="mailto:support@employmentshift.com" className="text-indigo-600 hover:text-indigo-800 ml-2">
                    support@employmentshift.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <p className="text-yellow-800">
                <strong>Policy Updates:</strong> We may update these Terms of Service from time to time. 
                We will notify you of any changes by posting the new terms on this page and updating the "Last Updated" date. 
                Changes are effective when they are posted on this page.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Policies */}
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
                to="/privacy" 
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Privacy Policy
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

export default Terms;