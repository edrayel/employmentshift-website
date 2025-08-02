import { motion } from "framer-motion";
import { ArrowRight, Target, Users, Lightbulb, Brain, Wrench, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useState, useRef } from "react";

const HeroSection = () => {
  // Mouse tracking state for gradient effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const titleRef = useRef(null);

  const handlePartnerWithUsClick = () => {
    toast({
      title: "Partner With Us!",
      description: "Ready to architect the future together? Contact us to explore collaboration opportunities.",
    });
  };

  const handleExploreInsightsClick = () => {
    toast({
      title: "Explore Our Insights",
      description: "Our insights and research will be available soon. Stay tuned!",
    });
  };

  // Handle mouse movement for gradient effect
  const handleMouseMove = (e) => {
    if (titleRef.current) {
      const rect = titleRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-black via-brand-gray-900 to-brand-gray-800 text-white pt-[80px] overflow-hidden">
      {/* Animated geometric background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 animate-pulse" style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%),
            linear-gradient(-45deg, transparent 40%, rgba(255,255,255,0.05) 50%, transparent 60%)
          `,
          backgroundSize: '60px 60px',
          animation: 'float 20s ease-in-out infinite'
        }}></div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/10 rounded-full animate-spin" style={{ animationDuration: '30s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-white/5 rotate-45" style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/6 w-16 h-16 border border-white/8 rounded-lg" style={{ animation: 'floatReverse 6s ease-in-out infinite', animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-3/4 w-20 h-20 border border-white/6 rounded-full animate-ping" style={{ animationDelay: '3s', animationDuration: '6s' }}></div>
        <div className="absolute top-1/6 right-1/6 w-12 h-12 border border-white/4 rounded-full" style={{ animation: 'float 10s ease-in-out infinite', animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/6 left-1/3 w-8 h-8 border border-white/6 rotate-12" style={{ animation: 'floatReverse 12s ease-in-out infinite', animationDelay: '6s' }}></div>
      </div>
      
      {/* Animated gradient overlay with shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/2 to-transparent animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/1 to-transparent" style={{ animation: 'shimmer 15s ease-in-out infinite' }}></div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <p className="text-lg md:text-xl text-brand-gray-200 leading-relaxed font-light max-w-4xl mx-auto mb-6">
              We are <strong className="text-white font-semibold">EmploymentShift</strong>. We architect the frameworks for a more just, resilient, and prosperous society.
            </p>
          </motion.div>

          <motion.h1 
            ref={titleRef}
            onMouseMove={handleMouseMove}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-12 leading-tight tracking-tight font-heading cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ lineHeight: '1.2' }} // Improved line height to prevent clipping
          >
            <span className="text-white">The Future isn't Predicted.</span>
            <br />
            <span 
              className="block text-brand-primary mt-4"
              style={{
                background: `linear-gradient(135deg, #F59E0B 0%, #FBBF24 50%, #FCD34D 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                transition: 'all 0.3s ease',
                paddingBottom: '8px', // Add padding to prevent descender clipping
                lineHeight: '1.1' // Tighter line height for the gradient text
              }}
            >
              It's Designed.
            </span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <Button
              onClick={handlePartnerWithUsClick}
              size="lg"
              className="bg-white text-brand-black hover:bg-brand-gray-100 text-lg px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Partner With Us
            </Button>
            <Button
              onClick={handleExploreInsightsClick}
              size="lg"
              variant="outline"
              className="border-2 border-white/30 bg-transparent text-white hover:bg-white hover:text-brand-black text-lg px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              Explore Our Insights
            </Button>
          </motion.div>
          
          {/* Focus Areas Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">Insight Engine</h3>
              <p className="text-brand-gray-300 text-sm">Unassailable Research & Foresight</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">Intervention Lab</h3>
              <p className="text-brand-gray-300 text-sm">Scalable, Real-World Solutions</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">Influence Platform</h3>
              <p className="text-brand-gray-300 text-sm">Setting the National Agenda</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center items-center p-1">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
