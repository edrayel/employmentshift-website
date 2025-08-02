import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Users,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { mockData } from "../data/mockData";

const Contact = () => {
  const contactData = mockData.contact || {
    general: {
      address: "Lagos, Nigeria",
      phone: "+234 705 143 2811",
      email: "hello@employmentshift.com",
      office_hours: "Monday - Friday: 9:00 AM - 6:00 PM\r\nSaturday: 10:00 AM - 2:00 PM\r\nSunday: Closed"
    },
    partnerTypes: []
  };
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Static icon mapping for departments to match original component
  const departmentIconMap = {
    "admissions office": Users,
    "student services": MessageSquare,
    "academic affairs": Calendar,
    "financial aid": Phone,
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-black to-brand-gray-800 text-white pt-60 pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to architect change together? Let's collaborate.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Who We Work With Section */}
        <motion.div 
          className="bg-white rounded-xl p-8 shadow-lg mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Who We Work With</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Government Agencies", desc: "Federal, state, and local bodies" },
              { title: "Corporations", desc: "Forward-thinking companies" },
              { title: "NGOs", desc: "Non-profit organizations" },
              { title: "Academic Institutions", desc: "Universities and research centers" },
              { title: "International Organizations", desc: "Global development partners" },
              { title: "Think Tanks", desc: "Policy research institutions" }
            ].map((partner, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="font-semibold text-gray-900 mb-2">{partner.title}</h3>
                <p className="text-gray-600 text-sm">{partner.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            className="bg-white rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <MapPin className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p className="text-gray-600">{contactData.general.address}</p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Phone className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">{contactData.general.phone}</p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Mail className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-600">{contactData.general.email}</p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div 
            className="bg-white rounded-xl p-8 shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
            <p className="text-gray-600 mb-6">
              Ready to collaborate on transformative solutions? Whether you're looking to partner with us, 
              explore our research, or discuss how we can help architect change in your domain, we'd love to hear from you.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl p-8 shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6">Office Hours</h2>
            <div className="flex items-start space-x-4">
              <Clock className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <pre className="text-gray-600 whitespace-pre-wrap font-sans">
                  {contactData.general.office_hours}
                </pre>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => toast({ title: "Campus Visit", description: "Campus visit scheduling will be available soon." })}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule a Visit
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => toast({ title: "Directions", description: "Interactive directions will be available soon." })}
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;



//    const handleQuickActionToast = (title) => {
//     toast({
//       title: `🚧 ${title}`,
//       description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
//     });
//   };

//   return (
//     <div className="min-h-screen">
//       <ContactHero />
//       <ContactInfoGrid contactInfo={contactInfoData} />
//       <ContactFormSection
//         onSubmit={handleSubmit}
//         onScheduleVisit={handleScheduleVisit}
//         onDirectionsClick={handleDirectionsClick}
//         onQuickActionToast={handleQuickActionToast}
//       />
//       <DepartmentContacts departments={departmentContactsData} />
//       <FAQSection faqs={faqData} />
//     </div>
//   );
// };

// export default Contact;
