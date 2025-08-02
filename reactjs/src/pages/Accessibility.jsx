import React from 'react';
import { motion } from 'framer-motion';
import { Accessibility, Eye, Ear, Hand, Keyboard, Smartphone, Volume2, ZoomIn, Settings, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AccessibilityPage = () => {
  const features = [
    {
      title: 'Visual Accessibility',
      description: 'Support for users with visual impairments including screen readers, high contrast modes, and keyboard navigation.',
      icon: Eye,
      features: [
        'Screen reader compatibility',
        'High contrast mode support',
        'Keyboard navigation',
        'Alt text for images',
        'Large text options',
        'Color blind friendly design'
      ]
    },
    {
      title: 'Hearing Accessibility',
      description: 'Features for users with hearing impairments including captions, transcripts, and visual indicators.',
      icon: Ear,
      features: [
        'Closed captions for videos',
        'Audio transcripts',
        'Visual alerts and notifications',
        'Text-based communication',
        'Sign language support where available',
        'Volume control options'
      ]
    },
    {
      title: 'Motor Accessibility',
      description: 'Support for users with motor impairments including keyboard navigation, voice commands, and alternative input methods.',
      icon: Hand,
      features: [
        'Full keyboard navigation',
        'Voice control compatibility',
        'Extended time limits',
        'Click target sizing',
        'Skip navigation links',
        'Reduced motion options'
      ]
    },
    {
      title: 'Cognitive Accessibility',
      description: 'Features for users with cognitive impairments including clear navigation, simple language, and consistent layouts.',
      icon: Settings,
      features: [
        'Clear and simple language',
        'Consistent navigation',
        'Error prevention and recovery',
        'Help and instructions',
        'Focus indicators',
        'Predictable functionality'
      ]
    }
  ];

  const standards = [
    {
      title: 'WCAG 2.1 Compliance',
      description: 'We follow Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA to ensure our content is accessible to the widest possible audience.',
      level: 'AA',
      status: 'Compliant'
    },
    {
      title: 'Section 508',
      description: 'Our platform meets Section 508 standards for electronic and information technology accessibility in the United States.',
      level: 'Section 508',
      status: 'Compliant'
    },
    {
      title: 'ADA Compliance',
      description: 'We are committed to meeting the requirements of the Americans with Disabilities Act (ADA) for digital accessibility.',
      level: 'ADA',
      status: 'Compliant'
    }
  ];

  const tools = [
    {
      title: 'Keyboard Navigation',
      description: 'Navigate our entire platform using only your keyboard',
      icon: Keyboard,
      tips: [
        'Use Tab to move forward',
        'Use Shift+Tab to move backward',
        'Use Enter to activate links and buttons',
        'Use arrow keys for navigation within menus'
      ]
    },
    {
      title: 'Screen Reader Support',
      description: 'Optimized for popular screen readers including JAWS, NVDA, and VoiceOver',
      icon: Volume2,
      tips: [
        'Semantic HTML structure',
        'Descriptive headings and labels',
        'Alt text for images',
        'Form labels and instructions'
      ]
    },
    {
      title: 'Text Scaling',
      description: 'Increase text size up to 200% without loss of functionality',
      icon: ZoomIn,
      tips: [
        'Use Ctrl/Cmd + to zoom in',
        'Use Ctrl/Cmd - to zoom out',
        'Use Ctrl/Cmd 0 to reset',
        'Browser zoom settings'
      ]
    },
    {
      title: 'Mobile Accessibility',
      description: 'Full accessibility support on mobile devices and tablets',
      icon: Smartphone,
      tips: [
        'Touch target sizing',
        'Swipe navigation',
        'Voice control support',
        'Screen reader compatibility'
      ]
    }
  ];

  const feedbackChannels = [
    {
      title: 'Accessibility Feedback',
      description: 'Report accessibility issues or suggest improvements',
      email: 'accessibility@employmentshift.com',
      response: 'Within 2 business days'
    },
    {
      title: 'Technical Support',
      description: 'Get help with accessibility features and tools',
      email: 'support@employmentshift.com',
      response: '24/7 support available'
    },
    {
      title: 'Academic Accommodations',
      description: 'Request academic accommodations and support',
      email: 'accommodations@employmentshift.com',
      response: 'Within 1 business day'
    }
  ];

  const commonIssues = [
    {
      issue: 'I\'m having trouble with keyboard navigation',
      solution: 'Try using Tab to navigate between elements, Enter to activate buttons/links, and arrow keys for menu navigation. If issues persist, contact our support team.'
    },
    {
      issue: 'The text is too small to read',
      solution: 'Use Ctrl/Cmd + to zoom in, or adjust your browser\'s zoom settings. Our site supports up to 200% zoom without loss of functionality.'
    },
    {
      issue: 'Videos don\'t have captions',
      solution: 'All our videos include closed captions. Click the CC button on the video player to enable captions. Transcripts are also available below each video.'
    },
    {
      issue: 'My screen reader isn\'t working properly',
      solution: 'Ensure your screen reader is updated to the latest version. Our site is optimized for JAWS, NVDA, and VoiceOver. Contact us for specific compatibility issues.'
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
            <Accessibility className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Accessibility
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              We're committed to making education accessible to everyone
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Our platform is designed to be inclusive and accessible to users of all abilities, 
              following the latest accessibility standards and best practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Standards Compliance */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Accessibility Standards</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We adhere to internationally recognized accessibility standards to ensure our platform is usable by everyone
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {standards.map((standard, index) => (
              <motion.div
                key={standard.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  {standard.status === 'Compliant' ? (
                    <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  ) : (
                    <AlertCircle className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-2">{standard.title}</h3>
                <p className="text-sm font-semibold text-green-600 mb-3">{standard.level} - {standard.status}</p>
                <p className="text-gray-600">{standard.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Accessibility Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive features designed to make our platform accessible to users with different needs and abilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-100 p-3 rounded-lg">
                      <Icon className="h-8 w-8 text-indigo-600" />
                    </div>
                    <h3 className="text-2xl font-bold ml-4">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools and Tips */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Accessibility Tools & Tips</h2>
            <p className="text-xl text-gray-600">Practical guidance for using accessibility features</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={tool.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">{tool.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 text-center">{tool.description}</p>
                  <ul className="space-y-1">
                    {tool.tips.map((tip, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start">
                        <Info className="h-3 w-3 text-indigo-500 mr-1 mt-0.5 flex-shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8 text-center">Common Issues & Solutions</h2>
            <div className="space-y-6">
              {commonIssues.map((issue, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <h3 className="text-lg font-semibold mb-2 text-indigo-600">{issue.issue}</h3>
                  <p className="text-gray-700">{issue.solution}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Accessibility Feedback</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're continuously improving our accessibility. Your feedback helps us serve you better
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {feedbackChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{channel.title}</h3>
                <p className="text-gray-600 mb-4">{channel.description}</p>
                <p className="text-sm text-gray-500 mb-4">Response time: {channel.response}</p>
                <a
                  href={`mailto:${channel.email}`}
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  {channel.email}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Need Accessibility Support?</h2>
            <p className="text-xl mb-8 text-white/90">
              We're here to help ensure you can fully access and benefit from our educational platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                <a href="mailto:accessibility@employmentshift.com" className="flex items-center">
                  Contact Accessibility Team
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <a href="tel:+1-800-555-0123" className="flex items-center">
                  Call Support: (800) 555-0123
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AccessibilityPage;