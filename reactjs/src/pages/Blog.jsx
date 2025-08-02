import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Search, Tag, ArrowRight, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

/**
 * Blog page component for Employment Shift
 * Displays career advice, industry insights, and employment trends
 */
const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Mock blog posts data
  const blogPosts = [
    {
      id: 1,
      title: '10 Essential Skills for the Future Workplace',
      excerpt: 'Discover the key skills that will be in high demand as the workplace continues to evolve in the digital age.',
      content: 'The workplace is rapidly evolving, and professionals need to adapt to stay competitive...',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Career Development',
      tags: ['Skills', 'Future Work', 'Professional Development'],
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 2,
      title: 'Remote Work: Best Practices for Success',
      excerpt: 'Learn how to thrive in a remote work environment with proven strategies and tools.',
      content: 'Remote work has become the new normal for many professionals...',
      author: 'Michael Chen',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'Remote Work',
      tags: ['Remote Work', 'Productivity', 'Work-Life Balance'],
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 3,
      title: 'Salary Negotiation: A Complete Guide',
      excerpt: 'Master the art of salary negotiation with our comprehensive guide and proven tactics.',
      content: 'Negotiating your salary can be intimidating, but with the right approach...',
      author: 'Emily Rodriguez',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'Career Advice',
      tags: ['Salary', 'Negotiation', 'Career Growth'],
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 4,
      title: 'Industry Trends: Tech Jobs in 2024',
      excerpt: 'Explore the latest trends in technology employment and emerging opportunities.',
      content: 'The technology sector continues to be a driving force in job creation...',
      author: 'David Thompson',
      date: '2024-01-08',
      readTime: '10 min read',
      category: 'Industry Insights',
      tags: ['Technology', 'Job Market', 'Trends'],
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 5,
      title: 'Building Your Personal Brand',
      excerpt: 'Learn how to create and maintain a strong personal brand that sets you apart.',
      content: 'In today\'s competitive job market, having a strong personal brand is essential...',
      author: 'Lisa Anderson',
      date: '2024-01-05',
      readTime: '7 min read',
      category: 'Career Development',
      tags: ['Personal Branding', 'LinkedIn', 'Networking'],
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 6,
      title: 'Interview Preparation: Common Mistakes to Avoid',
      excerpt: 'Avoid these common interview mistakes and increase your chances of landing the job.',
      content: 'Job interviews can be nerve-wracking, but preparation is key to success...',
      author: 'Robert Martinez',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'Interview Tips',
      tags: ['Interviews', 'Job Search', 'Career Tips'],
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 7,
      title: 'The Rise of AI in Recruitment',
      excerpt: 'How artificial intelligence is transforming the recruitment process and what it means for job seekers.',
      content: 'Artificial intelligence is revolutionizing how companies find and hire talent...',
      author: 'Dr. Jennifer Kim',
      date: '2024-01-01',
      readTime: '11 min read',
      category: 'Industry Insights',
      tags: ['AI', 'Recruitment', 'Technology'],
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 8,
      title: 'Career Change at 40: A Practical Guide',
      excerpt: 'It\'s never too late to change careers. Here\'s how to make a successful transition later in life.',
      content: 'Making a career change at 40 or beyond can seem daunting, but it\'s entirely possible...',
      author: 'Mark Williams',
      date: '2023-12-28',
      readTime: '13 min read',
      category: 'Career Advice',
      tags: ['Career Change', 'Mid-Career', 'Life Transition'],
      image: '/api/placeholder/400/250',
      featured: false
    }
  ];

  const categories = ['All', 'Career Development', 'Remote Work', 'Career Advice', 'Industry Insights', 'Interview Tips'];
  const featuredPosts = blogPosts.filter(post => post.featured);

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-brand-black text-white pt-60 pb-40">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Career Insights Blog</h1>
            <p className="text-xl md:text-2xl mb-8 text-brand-gray-300">
              Stay ahead with the latest career advice, industry trends, and employment insights
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 text-lg"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-brand-gray-300 rounded-md focus:ring-2 focus:ring-brand-gray-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600">
              Showing {filteredPosts.length} of {blogPosts.length} articles
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Featured Articles</h2>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-black text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-brand-black transition-colors">
                    <a href={`#blog-${post.id}`}>{post.title}</a>
                  </h3>
                  
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <Button className="bg-brand-black hover:bg-brand-gray-800 text-white px-4 py-2 rounded-lg text-sm">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">All Articles</h2>
          
          <div className="space-y-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-1/4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-40 lg:h-32 object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="lg:w-3/4">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="bg-brand-gray-100 text-brand-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 hover:text-brand-black transition-colors">
                      <a href={`#blog-${post.id}`}>{post.title}</a>
                    </h3>
                    
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2 text-gray-400" />
                          <span className="text-sm text-gray-600">{post.author}</span>
                        </div>
                        <div className="flex gap-2">
                          {post.tags.slice(0, 2).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="bg-white text-brand-gray-600 px-2 py-1 rounded-full text-xs border"
                            >
                              <Tag className="w-3 h-3 inline mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <Button className="bg-brand-black hover:bg-brand-gray-800 text-white px-6 py-2 rounded-lg">
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-brand-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-brand-gray-600 mb-2">No articles found</h3>
              <p className="text-brand-gray-500">Try adjusting your search criteria to find more articles.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-brand-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <TrendingUp className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Stay Informed</h2>
            <p className="text-xl mb-8 text-brand-gray-300">
              Subscribe to our newsletter and get the latest career insights delivered to your inbox
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 py-3 text-gray-800"
              />
              <Button className="bg-white text-brand-black hover:bg-brand-gray-100 px-6 py-3 rounded-lg font-semibold">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-brand-gray-300 mt-4">
              Join 10,000+ professionals who trust our insights
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;