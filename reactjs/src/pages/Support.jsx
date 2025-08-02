import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, HelpCircle, MessageCircle, Phone, Mail, BookOpen, ChevronRight, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'react-router-dom';

const Support = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const categories = [
    { id: 'all', name: 'All Topics', icon: HelpCircle },
    { id: 'admissions', name: 'Admissions & Enrollment', icon: BookOpen },
    { id: 'technical', name: 'Technical Issues', icon: AlertCircle },
    { id: 'billing', name: 'Billing & Payments', icon: CheckCircle },
    { id: 'courses', name: 'Courses & Learning', icon: BookOpen },
    { id: 'account', name: 'Account Management', icon: MessageCircle }
  ];

  const faqs = [
    {
      id: 1,
      category: 'admissions',
      question: 'How do I apply for a program?',
      answer: 'You can apply for any program through our online application portal. Simply visit the admissions page, select your desired program, and follow the step-by-step application process. We\'ll guide you through document submission, payment, and scheduling your orientation.',
      popular: true
    },
    {
      id: 2,
      category: 'technical',
      question: 'I\'m having trouble accessing the platform',
      answer: 'First, try clearing your browser cache and cookies. Ensure you\'re using a supported browser (Chrome, Firefox, Safari, or Edge). If issues persist, check your internet connection and try logging out and back in. Contact support if problems continue.',
      popular: true
    },
    {
      id: 3,
      category: 'billing',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, bank transfers, and installment payment plans. For corporate training, we also accept purchase orders and invoicing arrangements.',
      popular: true
    },
    {
      id: 4,
      category: 'courses',
      question: 'Can I access course materials offline?',
      answer: 'Yes! Most course materials are available for download. Videos can be downloaded for offline viewing, and documents are provided in PDF format. However, live sessions and interactive elements require an internet connection.',
      popular: false
    },
    {
      id: 5,
      category: 'account',
      question: 'How do I reset my password?',
      answer: 'Click on "Forgot Password" on the login page. Enter your registered email address, and we\'ll send you a password reset link. Follow the instructions in the email to create a new secure password.',
      popular: true
    },
    {
      id: 6,
      category: 'courses',
      question: 'Are certificates provided upon completion?',
      answer: 'Yes! All our programs provide certificates of completion. Industry-recognized certifications are available for specific tracks. Certificates can be downloaded immediately after completing all course requirements and assessments.',
      popular: false
    }
  ];

  const supportChannels = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      hours: '24/7',
      action: 'Start Chat',
      color: 'bg-blue-500'
    },
    {
      title: 'Email Support',
      description: 'Send us your questions and we\'ll respond within 24 hours',
      icon: Mail,
      hours: '24/7',
      action: 'Send Email',
      color: 'bg-purple-500'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our support specialists',
      icon: Phone,
      hours: 'Mon-Fri 9AM-6PM EST',
      action: 'Call Now',
      color: 'bg-green-500'
    }
  ];

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const popularFaqs = faqs.filter(faq => faq.popular);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Support form submitted:', formData);
    alert('Thank you! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setShowContactForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white pt-60 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              How Can We Help?
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Find answers to your questions or get in touch with our support team
            </p>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search help articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder-white/60"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <motion.div
                  key={channel.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className={`${channel.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{channel.title}</h3>
                  <p className="text-gray-600 mb-4">{channel.description}</p>
                  <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
                    <Clock className="h-4 w-4 mr-1" />
                    {channel.hours}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => channel.title === 'Email Support' && setShowContactForm(true)}
                  >
                    {channel.action}
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find answers to common questions</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8">Most Popular Questions</h3>
            <div className="space-y-4">
              {popularFaqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6"
                >
                  <h4 className="text-lg font-semibold mb-3">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8">All Questions</h3>
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 border"
                >
                  <h4 className="text-lg font-semibold mb-3">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl p-8 max-w-md w-full max-h-screen overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Contact Support</h3>
              <button
                onClick={() => setShowContactForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <form onSubmit={handleFormSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Additional Resources */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Still Need Help?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our support team is here to ensure you have the best learning experience possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => setShowContactForm(true)}
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Support
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.open('https://m.me/employmentshift', '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Live Chat
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Support;