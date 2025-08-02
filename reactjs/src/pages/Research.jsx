import React from 'react';
import { motion } from 'framer-motion';
import { Brain, TrendingUp, Database, Users, ArrowRight, Search, FileText, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Research = () => {
  const researchAreas = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Future of Work",
      description: "Analyzing emerging employment patterns, skills gaps, and workforce transformation trends.",
      projects: ["AI Impact on Employment", "Remote Work Sustainability", "Skills-Based Hiring"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Economic Development",
      description: "Research on sustainable economic models and inclusive growth strategies.",
      projects: ["Circular Economy Models", "Green Job Creation", "Digital Economy Transition"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Social Justice",
      description: "Evidence-based approaches to reducing inequality and promoting systemic change.",
      projects: ["Criminal Justice Reform", "Educational Equity", "Healthcare Access"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Technology & Society",
      description: "Understanding the intersection of technology, policy, and human flourishing.",
      projects: ["AI Ethics Framework", "Digital Divide Solutions", "Tech Policy Analysis"]
    }
  ];

  const methodologies = [
    {
      title: "Mixed-Methods Research",
      description: "Combining quantitative data analysis with qualitative insights for comprehensive understanding."
    },
    {
      title: "Participatory Research",
      description: "Engaging communities and stakeholders as co-researchers in the knowledge creation process."
    },
    {
      title: "Systems Analysis",
      description: "Examining complex interconnections and feedback loops within social and economic systems."
    },
    {
      title: "Predictive Modeling",
      description: "Using advanced analytics to forecast trends and evaluate intervention scenarios."
    }
  ];

  const publications = [
    {
      title: "The Future of Work in Post-Pandemic Africa",
      type: "Research Report",
      date: "2024",
      description: "Comprehensive analysis of employment trends and workforce transformation across African economies."
    },
    {
      title: "Digital Governance: Lessons from Global Implementation",
      type: "Policy Brief",
      date: "2024",
      description: "Evidence-based recommendations for digital transformation in government services."
    },
    {
      title: "Circular Economy Pathways for Developing Nations",
      type: "White Paper",
      date: "2023",
      description: "Framework for implementing sustainable economic models in emerging markets."
    }
  ];

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Research & Insights
            </h1>
            <p className="text-xl text-brand-gray-200 mb-8">
              Unassailable research and foresight. We analyze the signals to provide clarity on tomorrow's challenges, today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-brand-black hover:bg-brand-gray-100 px-8 py-3 rounded-lg font-semibold">
                View Publications
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-brand-black px-8 py-3 rounded-lg font-semibold">
                Research Partnerships
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">
              Our Research <span className="text-brand-gray-700">Focus Areas</span>
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
              We conduct rigorous research across multiple domains to inform evidence-based solutions for systemic change.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-all duration-300"
              >
                <div className="bg-brand-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  {area.icon}
                </div>
                <h3 className="text-2xl font-bold text-brand-black mb-4">{area.title}</h3>
                <p className="text-brand-gray-600 mb-6">{area.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-brand-gray-800">Current Projects:</h4>
                  <ul className="space-y-1">
                    {area.projects.map((project, idx) => (
                      <li key={idx} className="text-brand-gray-600 text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-brand-gray-400 rounded-full mr-2"></div>
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies */}
      <section className="py-20 bg-brand-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">
              Research <span className="text-brand-gray-700">Methodologies</span>
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
              Our research employs rigorous methodologies to ensure validity, reliability, and actionable insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologies.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-brand-black mb-3">{method.title}</h3>
                <p className="text-brand-gray-600 text-sm">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">
              Recent <span className="text-brand-gray-700">Publications</span>
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
              Explore our latest research findings and evidence-based recommendations.
            </p>
          </motion.div>

          <div className="space-y-6">
            {publications.map((publication, index) => (
              <motion.div
                key={publication.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="bg-brand-gray-100 text-brand-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {publication.type}
                      </span>
                      <span className="text-brand-gray-500 text-sm">{publication.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-brand-black mb-3">{publication.title}</h3>
                    <p className="text-brand-gray-600">{publication.description}</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-8">
                    <Button className="bg-brand-black hover:bg-brand-gray-800 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Download
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Collaborate on Research</h2>
            <p className="text-xl text-brand-gray-300 mb-8 max-w-3xl mx-auto">
              Partner with us on cutting-edge research that drives systemic change. Together, we can architect evidence-based solutions for tomorrow's challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-brand-black hover:bg-brand-gray-100 px-8 py-3 rounded-lg font-semibold">
                Research Partnerships
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-brand-black px-8 py-3 rounded-lg font-semibold">
                Contact Research Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Research;