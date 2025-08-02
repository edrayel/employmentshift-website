import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { motion } from 'framer-motion';
import { Menu, X, Briefcase, LogIn, CalendarDays, Users, Map, Award, BookOpen, Image as ImageIcon, Phone, FileText, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    let scrollTimeout;
    let intersectionObserver;

    const debounce = (func, wait) => {
      return (...args) => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => func.apply(this, args), wait);
      };
    };

    const checkBackgroundColor = (element) => {
      if (!element) return false;
      
      const computedStyle = window.getComputedStyle(element);
      const backgroundColor = computedStyle.backgroundColor;
      const backgroundImage = computedStyle.backgroundImage;
      
      return checkIfDarkBackground(backgroundColor, backgroundImage, element);
    };

    const getViewportBackgroundInfo = () => {
      // Get the actual background by checking the full viewport
      const viewportHeight = window.innerHeight;
      const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 80;
      
      // Check multiple points across the viewport
      const checkPoints = [
        { x: window.innerWidth / 2, y: headerHeight + 20 }, // Just below header
        { x: window.innerWidth / 2, y: viewportHeight / 2 }, // Middle of viewport
        { x: window.innerWidth / 2, y: viewportHeight - 100 }, // Near bottom
        { x: 100, y: headerHeight + 50 }, // Left side
        { x: window.innerWidth - 100, y: headerHeight + 50 } // Right side
      ];

      let darkCount = 0;
      let totalValidChecks = 0;

      checkPoints.forEach(point => {
        const element = document.elementFromPoint(point.x, point.y);
        if (element) {
          const isDark = checkBackgroundColor(element);
          if (isDark) darkCount++;
          totalValidChecks++;
        }
      });

      // Also check the body background
      const bodyBg = window.getComputedStyle(document.body);
      const bodyIsDark = checkIfDarkBackground(bodyBg.backgroundColor, bodyBg.backgroundImage, document.body);
      
      if (bodyIsDark) darkCount++;
      totalValidChecks++;

      return {
        isDark: totalValidChecks > 0 && darkCount >= Math.ceil(totalValidChecks / 2),
        darkRatio: totalValidChecks > 0 ? darkCount / totalValidChecks : 0
      };
    };

    const updateBackgroundDetection = () => {
      if (location.pathname === '/') {
        setScrolled(window.scrollY > 10);
      }
      
      // Use enhanced viewport background detection
      const backgroundInfo = getViewportBackgroundInfo();
      setIsDarkBackground(backgroundInfo.isDark);
    };

    const debouncedUpdate = debounce(updateBackgroundDetection, 16); // ~60fps

    // Set up intersection observer for more accurate detection
    const setupIntersectionObserver = () => {
      if (!headerRef.current) return;

      intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            updateBackgroundDetection();
          }
        });
      }, {
        rootMargin: '0px 0px -20px 0px',
        threshold: 0.1
      });

      // Observe sections that might have different backgrounds
      const sections = document.querySelectorAll('section, .section-padding, [class*="bg-"]');
      sections.forEach(section => {
        intersectionObserver.observe(section);
      });
    };

    const checkIfDarkBackground = (backgroundColor, backgroundImage, element) => {
      const isDarkColor = (color) => {
        if (!color || color === 'rgba(0, 0, 0, 0)' || color === 'transparent') return false;
        
        // Handle hex colors
        if (color.startsWith('#')) {
          const hex = color.replace('#', '');
          const r = parseInt(hex.substr(0, 2), 16);
          const g = parseInt(hex.substr(2, 2), 16);
          const b = parseInt(hex.substr(4, 2), 16);
          const brightness = (r * 299 + g * 587 + b * 114) / 1000;
          return brightness < 150; // Increased threshold for better dark detection
        }
        
        // Handle rgb/rgba colors
        const rgb = color.match(/\d+/g);
        if (rgb && rgb.length >= 3) {
          const [r, g, b] = rgb.map(Number);
          const brightness = (r * 299 + g * 587 + b * 114) / 1000;
          return brightness < 150;
        }
        
        return false;
      };
      
      // Check for dark gradient backgrounds with improved detection
      if (backgroundImage && backgroundImage !== 'none') {
        const darkGradientKeywords = [
          'black', '#000', '#0f0f0f', '#1a1a1a', '#2d2d2d', '#111827', '#1f2937', '#374151',
          'gray-900', 'gray-800', 'gray-700', 'gray-950', 'gray-850',
          'brand-black', 'brand-gray-900', 'brand-gray-800', 'brand-gray-700',
          'slate-900', 'slate-800', 'slate-700', 'slate-950',
          'neutral-900', 'neutral-800', 'neutral-700', 'neutral-950',
          'zinc-900', 'zinc-800', 'zinc-700', 'zinc-950',
          'stone-900', 'stone-800', 'stone-700'
        ];
        
        // Check for dark gradients in background image
        if (backgroundImage.includes('gradient')) {
          return darkGradientKeywords.some(keyword => backgroundImage.toLowerCase().includes(keyword));
        }
        
        // Check for dark background images
        const darkImageKeywords = ['dark', 'black', 'night', 'shadow', 'midnight', 'charcoal', 'obsidian'];
        return darkImageKeywords.some(keyword => backgroundImage.toLowerCase().includes(keyword));
      }
      
      // Check for dark background colors
      if (isDarkColor(backgroundColor)) {
        return true;
      }
      
      // Enhanced class checking with more comprehensive dark class detection
      const darkClasses = [
        'bg-black', 'bg-gray-900', 'bg-gray-800', 'bg-gray-700', 'bg-gray-950',
        'bg-slate-900', 'bg-slate-800', 'bg-slate-700', 'bg-slate-950',
        'bg-neutral-900', 'bg-neutral-800', 'bg-neutral-700', 'bg-neutral-950',
        'bg-zinc-900', 'bg-zinc-800', 'bg-zinc-700', 'bg-zinc-950',
        'bg-stone-900', 'bg-stone-800', 'bg-stone-700', 'bg-stone-950',
        'bg-brand-black', 'bg-brand-gray-900', 'bg-brand-gray-800', 'bg-brand-gray-700',
        'from-black', 'from-gray-900', 'from-slate-900', 'from-neutral-900', 'from-zinc-900', 'from-stone-900',
        'via-gray-800', 'via-slate-800', 'via-neutral-800', 'via-zinc-800', 'via-stone-800',
        'to-gray-700', 'to-slate-700', 'to-neutral-700', 'to-zinc-700', 'to-stone-700',
        'bg-[#111827]', 'bg-[#1f2937]', 'bg-[#374151]', 'bg-[#111827]', 'bg-[#1f2937]',
        'dark:bg-gray-900', 'dark:bg-slate-900', 'dark:bg-neutral-900', 'dark:bg-zinc-900'
      ];
      
      const checkElementDark = (el) => {
        if (!el) return false;
        
        const elementClasses = el.className || '';
        if (typeof elementClasses === 'string') {
          const classString = elementClasses.toLowerCase();
          if (darkClasses.some(cls => classString.includes(cls))) {
            return true;
          }
        }
        
        // Check computed background color
        const computedStyle = window.getComputedStyle(el);
        const bgColor = computedStyle.backgroundColor;
        if (isDarkColor(bgColor)) {
          return true;
        }
        
        // Check background image for dark patterns
        const bgImage = computedStyle.backgroundImage;
        if (bgImage && bgImage !== 'none') {
          const darkImageKeywords = ['dark', 'black', 'night', 'shadow'];
          return darkImageKeywords.some(keyword => bgImage.toLowerCase().includes(keyword));
        }
        
        return false;
      };
      
      // Check current element
      if (checkElementDark(element)) {
        return true;
      }
      
      // Enhanced parent checking with better depth control
      let parent = element.parentElement;
      let depth = 0;
      const maxDepth = 3; // Limit recursion depth for performance
      
      while (parent && parent !== document.body && depth < maxDepth) {
        if (checkElementDark(parent)) {
          return true;
        }
        parent = parent.parentElement;
        depth++;
      }
      
      return false;
    };

    // Initial setup with immediate check
    setTimeout(() => {
      updateBackgroundDetection();
    }, 50);
    
    // Add event listeners
    window.addEventListener('scroll', debouncedUpdate);
    window.addEventListener('resize', debouncedUpdate);
    
    // Set up intersection observer after a short delay to ensure DOM is ready
    setTimeout(setupIntersectionObserver, 100);
    
    // Also check when page visibility changes
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        updateBackgroundDetection();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Check when route changes - this will be triggered by location.pathname change
    // The useEffect already re-runs when location.pathname changes, so we don't need separate handler
    
    // Add a mutation observer for dynamic content changes
    let mutationObserver;
    const setupMutationObserver = () => {
      mutationObserver = new MutationObserver((mutations) => {
        let shouldUpdate = false;
        mutations.forEach(mutation => {
          if (mutation.type === 'attributes' && 
              (mutation.attributeName === 'class' || mutation.attributeName === 'style')) {
            shouldUpdate = true;
          }
        });
        if (shouldUpdate) {
          debouncedUpdate();
        }
      });
      
      mutationObserver.observe(document.body, {
        attributes: true,
        attributeFilter: ['class', 'style'],
        subtree: true
      });
    };
    
    setTimeout(setupMutationObserver, 200);
    
    return () => {
      window.removeEventListener('scroll', debouncedUpdate);
      window.removeEventListener('resize', debouncedUpdate);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      
      if (intersectionObserver) {
        intersectionObserver.disconnect();
      }
      if (mutationObserver) {
        mutationObserver.disconnect();
      }
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [location.pathname]);

  const mainNavItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Podcasts', path: '/podcast' },
    { name: 'Events', path: '/events' },
  ];

  const topNavItems = [
    { name: 'Research', path: '/research', icon: Target },
    { name: 'Insights', path: '/insights', icon: BookOpen },
    { name: 'Partners', path: '/partners', icon: Users },
    { name: 'Blog', path: '/blog', icon: FileText },
    { name: 'Contact', path: '/contact', icon: Phone },
    { name: 'Student Portal', path: '/student-portal', icon: LogIn },
  ];

  const handleGetStartedClick = () => {
    toast({
      title: "Partner With Us!",
      description: "Ready to get started? Contact us to explore opportunities together.",
    });
  };

  const closeMobileMenu = () => setIsOpen(false);

  const getTextClasses = () => {
    if (location.pathname === '/' && !scrolled) {
      // When at the top of home page, always use white text for dark hero background
      return 'text-white';
    }
    // When scrolled (sticky mode), use black text
    return 'text-brand-black';
  };


  return (
    <motion.header
      ref={headerRef}
      initial={{ y: -120 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${location.pathname === '/' ? (scrolled ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-brand-gray-100' : 'bg-transparent') : 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-brand-gray-100'}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-3">
          <Link to="/" onClick={closeMobileMenu} className="flex items-center space-x-3 group">
            <div className="w-11 h-11 bg-gradient-to-br from-brand-black via-brand-gray-800 to-brand-gray-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className={`text-xl font-bold transition-colors duration-300 ${getTextClasses()}`}>EmploymentShift</span>
              <span className={`block text-xs font-medium tracking-wider transition-colors duration-300 ${location.pathname === '/' && !scrolled ? 'text-white/90' : 'text-brand-gray-600'}`}>Transforming Systems</span>
            </div>
          </Link>

          <div className="hidden lg:flex flex-col items-end">
            <div className="flex flex-wrap items-center space-x-6">
              {topNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${getTextClasses()} ${location.pathname === '/' && !scrolled ? 'hover:text-white/80' : 'hover:text-brand-black'} flex items-center px-3 py-2 rounded-lg ${location.pathname === item.path ? (scrolled || location.pathname !== '/' ? 'text-brand-black bg-brand-gray-50' : 'text-white bg-white/10') : ''}`}  
                >
                  {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="pt-4">
              <div className="flex flex-wrap items-center space-x-8">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={closeMobileMenu}
                    className={`text-sm font-semibold transition-all duration-300 hover:scale-105 ${getTextClasses()} ${location.pathname === '/' && !scrolled ? 'hover:text-white/80' : 'hover:text-brand-black'} flex items-center ${location.pathname === item.path ? (scrolled || location.pathname !== '/' ? 'text-brand-black' : 'text-white') : ''}`}   
                  >
                    {item.name}
                  </Link>
                ))}
                <Button
                  onClick={handleGetStartedClick}
                  className={`px-8 py-2.5 font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 ${scrolled || location.pathname !== '/' ? 'bg-brand-black text-white hover:bg-brand-gray-800' : 'bg-white text-brand-black hover:bg-brand-gray-50'}`}
                  size="sm"
                >
                  Partner With Us
                </Button>
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-3 rounded-xl transition-all duration-300 hover:scale-105 ${getTextClasses()} ${location.pathname === '/' && !scrolled ? 'hover:bg-white/10' : 'hover:bg-brand-gray-100 hover:text-brand-black'}`}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mt-6 py-6 bg-white/98 backdrop-blur-lg rounded-2xl shadow-2xl border border-brand-gray-100"
          >
            {[...mainNavItems, ...topNavItems].map((item) => {
              // Assign default icons for items without icons
              let ItemIcon = item.icon;
              if (!ItemIcon) {
                switch(item.name) {
                  case 'About': ItemIcon = Users; break;
                  case 'Services': ItemIcon = Briefcase; break;
                  case 'Job Board': ItemIcon = Target; break;
                  case 'Training': ItemIcon = BookOpen; break;
                  case 'Case Studies': ItemIcon = FileText; break;
                  default: ItemIcon = Briefcase;
                }
              }
              
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={`flex items-center px-6 py-4 font-semibold transition-all duration-300 text-brand-gray-700 hover:bg-brand-gray-50 hover:text-brand-black hover:scale-105 border-b border-brand-gray-100 last:border-b-0 ${location.pathname === item.path ? 'text-brand-black bg-brand-gray-50' : ''}`}  
                >
                  <ItemIcon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
            <div className="px-6 py-4 mt-4">
              <Button 
                  onClick={() => {
                    handleGetStartedClick();
                    closeMobileMenu();
                  }}
                  className="w-full bg-brand-black text-white rounded-xl font-semibold hover:bg-brand-gray-800 transition-all duration-300 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  size="sm"
                >
                  Partner With Us
                </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;