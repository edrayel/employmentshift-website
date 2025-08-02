import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Calendar, Clock, Users, Mic, ArrowRight, Search } from 'lucide-react';
import { mockData } from '../data/mockData';

const Podcast = () => {
  const { podcast = {} } = mockData;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Combine featuredEpisode and recentEpisodes into a single episodes array
  const allEpisodes = [
    ...(podcast.featuredEpisode ? [podcast.featuredEpisode] : []),
    ...(podcast.recentEpisodes || [])
  ];

  const filteredEpisodes = allEpisodes.filter(episode => {
    const matchesSearch = episode.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         episode.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || episode.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', ...new Set(allEpisodes.map(ep => ep.category).filter(Boolean))];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-black to-brand-gray-800 text-white pt-60 pb-40">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8">
              <Mic className="w-12 h-12 text-brand-black" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {podcast.name || 'Podcast'}
            </h1>
            <p className="text-xl text-brand-gray-200 mb-8">
              {podcast.description || 'Welcome to our podcast'}
            </p>
            <div className="flex items-center justify-center space-x-8 text-brand-gray-200">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>{podcast.totalListeners || '0'} listeners</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{allEpisodes.length} episodes</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-brand-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search episodes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-brand-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gray-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                    selectedCategory === category
                      ? 'bg-brand-black text-white'
                      : 'bg-white text-brand-gray-600 hover:bg-brand-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Episodes List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8">
            {filteredEpisodes.map((episode, index) => (
              <motion.div
                key={episode.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-brand-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="w-full lg:w-48 h-48 bg-brand-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg width="120" height="120" viewBox="0 0 120 120" className="text-brand-gray-400">
                        <rect width="120" height="120" fill="currentColor" opacity="0.1" rx="8" />
                        <circle cx="60" cy="60" r="20" fill="currentColor" opacity="0.3" />
                        <text x="60" y="90" textAnchor="middle" className="text-xs fill-current">Episode Cover</text>
                      </svg>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <span className="inline-block bg-brand-gray-100 text-brand-gray-700 px-3 py-1 rounded-full text-sm font-medium mb-2">
                            {episode.category}
                          </span>
                          <h3 className="text-2xl font-bold text-brand-black mb-2">{episode.title}</h3>
                          <p className="text-brand-gray-600 mb-4">{episode.description}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-6 mb-6 text-sm text-brand-gray-500">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{episode.publishDate}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{episode.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4" />
                          <span>{episode.listens} listens</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <button className="bg-brand-black text-white px-6 py-3 rounded-lg hover:bg-brand-gray-800 transition-colors duration-300 flex items-center space-x-2">
                          <Play className="w-4 h-4" />
                          <span>Play Episode</span>
                        </button>
                        <button className="text-brand-gray-600 hover:text-brand-black transition-colors duration-300 flex items-center space-x-2">
                          <span>Show Notes</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="bg-brand-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Never Miss an Episode
            </h2>
            <p className="text-xl text-brand-gray-200 mb-8">
              Subscribe to our podcast and get notified when new episodes are released. Available on all major podcast platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-brand-black px-8 py-4 rounded-lg hover:bg-brand-gray-100 transition-colors duration-300 text-lg font-semibold">
                Subscribe on Apple Podcasts
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-brand-black transition-colors duration-300 text-lg font-semibold">
                Subscribe on Spotify
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Podcast;