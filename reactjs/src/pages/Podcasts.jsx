import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Clock, Calendar, Mic, Download, Share2, Heart, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Podcasts = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  const podcasts = [
    {
      id: 1,
      title: 'The Future of Work: AI and Human Collaboration',
      description: 'Exploring how artificial intelligence is reshaping the workplace and what it means for workers, organizations, and society.',
      host: 'Dr. Sarah Okafor',
      guest: 'Prof. Michael Chen',
      duration: '45:32',
      publishDate: '2024-01-15',
      category: 'Future of Work',
      episode: 'Episode 12',
      featured: true,
      listens: '12.5K',
      audioUrl: '#'
    },
    {
      id: 2,
      title: 'Circular Economy Models for Sustainable Development',
      description: 'A deep dive into circular economy principles and their application in developing sustainable business models.',
      host: 'Dr. Amina Hassan',
      guest: 'Dr. Kwame Asante',
      duration: '38:15',
      publishDate: '2024-01-08',
      category: 'Economic Development',
      episode: 'Episode 11',
      featured: true,
      listens: '9.8K',
      audioUrl: '#'
    },
    {
      id: 3,
      title: 'Digital Governance: Transforming Public Services',
      description: 'How digital technologies are revolutionizing government services and citizen engagement.',
      host: 'Dr. Sarah Okafor',
      guest: 'Minister Jane Doe',
      duration: '42:18',
      publishDate: '2024-01-01',
      category: 'Governance',
      episode: 'Episode 10',
      featured: false,
      listens: '8.2K',
      audioUrl: '#'
    },
    {
      id: 4,
      title: 'Criminal Justice Reform: A Systems Approach',
      description: 'Examining comprehensive strategies for transforming criminal justice systems through evidence-based interventions.',
      host: 'Dr. Amina Hassan',
      guest: 'Judge Robert Smith',
      duration: '51:45',
      publishDate: '2023-12-25',
      category: 'Justice & Governance',
      episode: 'Episode 9',
      featured: false,
      listens: '7.1K',
      audioUrl: '#'
    },
    {
      id: 5,
      title: 'Educational Equity in the Digital Age',
      description: 'Strategies for ensuring inclusive access to quality education through technology and innovative approaches.',
      host: 'Dr. Sarah Okafor',
      guest: 'Dr. Fatima Al-Rashid',
      duration: '39:22',
      publishDate: '2023-12-18',
      category: 'Education',
      episode: 'Episode 8',
      featured: false,
      listens: '6.9K',
      audioUrl: '#'
    },
    {
      id: 6,
      title: 'Faith and Social Change: Building Resilient Communities',
      description: 'Exploring the role of faith communities in fostering social cohesion and driving positive change.',
      host: 'Dr. Amina Hassan',
      guest: 'Rev. Dr. Grace Okonkwo',
      duration: '44:10',
      publishDate: '2023-12-11',
      category: 'Faith & Spirituality',
      episode: 'Episode 7',
      featured: false,
      listens: '5.8K',
      audioUrl: '#'
    }
  ];

  const categories = ['All', ...new Set(podcasts.map(podcast => podcast.category))];
  const featuredPodcasts = podcasts.filter(podcast => podcast.featured);

  const filteredPodcasts = podcasts.filter(podcast => 
    selectedCategory === 'All' || podcast.category === selectedCategory
  );

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const togglePlay = (podcastId) => {
    setCurrentlyPlaying(currentlyPlaying === podcastId ? null : podcastId);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-black to-brand-gray-800 text-white py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Mic className="w-12 h-12" />
              <h1 className="text-5xl md:text-6xl font-bold">
                Podcasts
              </h1>
            </div>
            <p className="text-xl text-brand-gray-200 mb-8">
              Thought-provoking conversations with leaders, experts, and change-makers shaping the future of work, governance, and society.
            </p>
            <Button className="bg-white text-brand-black hover:bg-brand-gray-100 px-8 py-3 rounded-lg font-semibold">
              Subscribe Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-brand-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
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

      {/* Featured Podcasts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">
              Featured <span className="text-brand-gray-700">Episodes</span>
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
              Our latest and most popular podcast episodes featuring expert insights and compelling discussions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPodcasts.map((podcast, index) => (
              <motion.div
                key={podcast.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-brand-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-brand-black text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                        <span className="text-brand-gray-600 text-sm">{podcast.episode}</span>
                      </div>
                      <h3 className="text-xl font-bold text-brand-black mb-2">
                        {podcast.title}
                      </h3>
                      <p className="text-brand-gray-600 mb-4">
                        {podcast.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6 text-sm text-brand-gray-600">
                    <div className="flex items-center gap-1">
                      <Mic className="w-4 h-4" />
                      <span>Host: {podcast.host}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(podcast.publishDate)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{podcast.duration}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => togglePlay(podcast.id)}
                        className="w-12 h-12 bg-brand-black text-white rounded-full flex items-center justify-center hover:bg-brand-gray-800 transition-colors"
                      >
                        {currentlyPlaying === podcast.id ? 
                          <Pause className="w-5 h-5" /> : 
                          <Play className="w-5 h-5 ml-1" />
                        }
                      </button>
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-brand-gray-600 hover:text-brand-black transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-brand-gray-600 hover:text-brand-black transition-colors">
                          <Share2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-brand-gray-600 hover:text-red-500 transition-colors">
                          <Heart className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <span className="text-sm text-brand-gray-600">{podcast.listens} listens</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Episodes */}
      <section className="py-16 bg-brand-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-black mb-12">All Episodes</h2>
          
          <div className="space-y-6">
            {filteredPodcasts.map((podcast, index) => (
              <motion.div
                key={podcast.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-md border border-brand-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-brand-gray-100 text-brand-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                          {podcast.episode}
                        </span>
                        <span className="bg-brand-gray-100 text-brand-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                          {podcast.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-brand-black mb-2">
                        {podcast.title}
                      </h3>
                      
                      <p className="text-brand-gray-600 mb-4">
                        {podcast.description}
                      </p>
                      
                      <div className="flex items-center gap-6 text-sm text-brand-gray-600">
                        <div className="flex items-center gap-1">
                          <Mic className="w-4 h-4" />
                          <span>Host: {podcast.host}</span>
                        </div>
                        {podcast.guest && (
                          <div className="flex items-center gap-1">
                            <span>Guest: {podcast.guest}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(podcast.publishDate)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{podcast.duration}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-brand-gray-600 hover:text-brand-black transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-brand-gray-600 hover:text-brand-black transition-colors">
                          <Share2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-brand-gray-600 hover:text-red-500 transition-colors">
                          <Heart className="w-4 h-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => togglePlay(podcast.id)}
                        className="w-12 h-12 bg-brand-black text-white rounded-full flex items-center justify-center hover:bg-brand-gray-800 transition-colors"
                      >
                        {currentlyPlaying === podcast.id ? 
                          <Pause className="w-5 h-5" /> : 
                          <Play className="w-5 h-5 ml-1" />
                        }
                      </button>
                      <div className="text-right">
                        <div className="text-sm text-brand-gray-600">{podcast.listens}</div>
                        <div className="text-xs text-brand-gray-500">listens</div>
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Never Miss an Episode</h2>
            <p className="text-xl text-brand-gray-300 mb-8 max-w-3xl mx-auto">
              Subscribe to our podcast and get notified when new episodes are released. Available on all major podcast platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-brand-black hover:bg-brand-gray-100 px-8 py-3 rounded-lg font-semibold">
                Apple Podcasts
              </Button>
              <Button className="bg-white text-brand-black hover:bg-brand-gray-100 px-8 py-3 rounded-lg font-semibold">
                Spotify
              </Button>
              <Button className="border border-white text-white hover:bg-white hover:text-brand-black px-8 py-3 rounded-lg font-semibold">
                Google Podcasts
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Podcasts;