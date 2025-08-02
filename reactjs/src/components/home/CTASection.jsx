import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const CTASection = () => {
  const handleApplyClick = () => {
    toast({
      title: "🚧 Application Portal",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-brand-black via-brand-gray-900 to-brand-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-white"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 font-heading leading-tight">
            Ready to Architect Change?
          </h2>
          <p className="text-2xl mb-12 text-white/90 font-light leading-relaxed">
            Partner with us to design frameworks for a more just, resilient, and prosperous society.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              onClick={handleApplyClick}
              className="bg-white text-brand-black hover:bg-brand-gray-100 text-lg px-12 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
Partner With Us
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-brand-black text-lg px-12 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;