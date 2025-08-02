import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { AnimatePresence } from 'framer-motion';
import PageTransition from '@/components/ui/PageTransition';
import ApiStatusIndicator from '@/components/ui/ApiStatusIndicator';
import Preloader from '@/components/ui/Preloader';
import { hasUserVisited } from '@/utils/preloaderUtils';
import Home from '@/pages/Home.jsx';
import About from '@/pages/About.jsx';
import Products from '@/pages/Products.jsx';
import Admissions from '@/pages/Admissions.jsx';
import Podcast from '@/pages/Podcast.jsx';
import Events from '@/pages/Events.jsx';
import Contact from '@/pages/Contact.jsx';
import ClientPortal from '@/pages/ClientPortal.jsx';
import Blog from '@/pages/Blog.jsx';
import Research from '@/pages/Research.jsx';
import Insights from '@/pages/Insights.jsx';
import Partners from '@/pages/Partners.jsx';
import CareerChangers from '@/pages/CareerChangers.jsx';
import RecentGraduates from '@/pages/RecentGraduates.jsx';
import Professionals from '@/pages/Professionals.jsx';
import Entrepreneurs from '@/pages/Entrepreneurs.jsx';
import JobSeekers from '@/pages/JobSeekers.jsx';
import AcademicCalendar from '@/pages/AcademicCalendar.jsx';
import Library from '@/pages/Library.jsx';
import StudentServices from '@/pages/StudentServices.jsx';

// Wrapper component for AnimatePresence
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
        <Route path="/admissions" element={<PageTransition><Admissions /></PageTransition>} />
        <Route path="/podcast" element={<PageTransition><Podcast /></PageTransition>} />
        <Route path="/events" element={<PageTransition><Events /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/student-portal" element={<PageTransition><ClientPortal /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
        <Route path="/research" element={<PageTransition><Research /></PageTransition>} />
        <Route path="/insights" element={<PageTransition><Insights /></PageTransition>} />
        <Route path="/partners" element={<PageTransition><Partners /></PageTransition>} />
        <Route path="/career-changers" element={<PageTransition><CareerChangers /></PageTransition>} />
        <Route path="/recent-graduates" element={<PageTransition><RecentGraduates /></PageTransition>} />
        <Route path="/professionals" element={<PageTransition><Professionals /></PageTransition>} />
        <Route path="/entrepreneurs" element={<PageTransition><Entrepreneurs /></PageTransition>} />
        <Route path="/job-seekers" element={<PageTransition><JobSeekers /></PageTransition>} />
        <Route path="/academic-calendar" element={<PageTransition><AcademicCalendar /></PageTransition>} />
        <Route path="/library" element={<PageTransition><Library /></PageTransition>} />
        <Route path="/student-services" element={<PageTransition><StudentServices /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [isPreloaderComplete, setIsPreloaderComplete] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);

  /**
   * Handle preloader completion
   * Sets flags to show main content with a slight delay for smooth transition
   */
  const handlePreloaderComplete = () => {
    setIsPreloaderComplete(true);
    // Small delay to ensure smooth transition
    setTimeout(() => {
      setShowMainContent(true);
    }, 100);
  };

  // Check if user has visited before on component mount
  useEffect(() => {
    if (hasUserVisited()) {
      setIsPreloaderComplete(true);
      setShowMainContent(true);
    }
  }, []);

  return (
    <Router>
      {/* Preloader - only shows for first-time visitors */}
      <Preloader onComplete={handlePreloaderComplete} />
      
      {/* Main Application Content */}
      {showMainContent && (
        <>
          <ScrollToTop />
          <div className="min-h-screen bg-background font-openSans">
            <Header />
            <main>
              <AnimatedRoutes />
            </main>
            <Footer />
            <Toaster />
            {/* Only show API status indicator in development mode */}
            {import.meta.env.DEV && <ApiStatusIndicator />}
          </div>
        </>
      )}
    </Router>
  );
}

export default App;