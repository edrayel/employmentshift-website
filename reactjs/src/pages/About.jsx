import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  Globe,
  BookOpen,
  Target,
  Heart,
  Lightbulb,
  Search,
  Zap,
  TrendingUp,
  Brain,
  Briefcase,
  GraduationCap,
  Building,
  Cpu,
} from "lucide-react";
import useAboutStore from "@/stores/useAboutStore";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import LoadingState from "@/components/common/LoadingState";
import EmptyState from "@/components/common/EmptyState";

const About = () => {
  const {
    mission,
    vision,
    values,
    history,
    leadership,
    statistics,
    isLoading,
    error,
    fetchAllData,
  } = useAboutStore();

  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);

  const iconMap = {
    target: Target,
    heart: Heart,
    lightbulb: Lightbulb,
    users: Users,
    star: Award,
    globe: Globe,
    "": BookOpen,
  };

  const mappedValues = values.map((value) => ({
    title: value.title,
    description: value.description,
    icon: iconMap[value.icon.toLowerCase()] || Target,
  }));

  const mappedMilestones = history.map((event) => ({
    year: event.year,
    event: event.event,
  }));

  const mappedLeadership = leadership.map((leader) => ({
    name: `${leader.title} ${leader.name}`,
    title: leader.bio,
    image:
      leader.image ||
      "https://images.unsplash.com/photo-1595956553066-fe24a8c33395",
  }));

  const mappedStatistics = statistics.map((stat) => ({
    icon: iconMap[stat.icon.toLowerCase()] || BookOpen,
    number: stat.value,
    label: stat.label,
  }));

  if (isLoading) {
    return <LoadingState type="page" message="Loading About Information" />;
  }

  
  if (error) {
    return (
      <ErrorBoundary 
        error={error} 
        onRetry={() => {
          fetchAllData();
        }}
        customMessage="We're having trouble loading information about EmploymentShift. This could be due to server maintenance or connectivity issues."
      />
    );
  }

  if (
    !mission &&
    !vision &&
    !mappedValues.length &&
    !mappedMilestones.length &&
    !mappedLeadership.length &&
    !mappedStatistics.length
  ) {
    return (
      <EmptyState
        type="data"
        title="No EmploymentShift Information Available"
        message="Information about EmploymentShift is currently unavailable."
        onRetry={fetchAllData}
        className="min-h-screen"
      />
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-60 pb-40 bg-gradient-to-br from-brand-black via-brand-gray-900 to-brand-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About EmploymentShift
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              We architect the frameworks for a more just, resilient, and prosperous society.
              Operating at the intersection of rigorous research and practical implementation,
              we design and deploy solutions that create lasting systemic change.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {mission || "To design and implement transformative solutions that create systemic change across justice, education, technology, and economic development. We partner with governments, corporations, NGOs, and individuals to build frameworks for a more equitable and prosperous society."}
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">{vision || "A world where systemic challenges are met with evidence-based solutions, where technology serves human flourishing, and where every individual has the opportunity to thrive in a just and sustainable society."}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  className="w-full h-96 object-cover"
                  alt="EmploymentShift mission"
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>





      {/* History Timeline - Matching card design */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
              Key milestones in our mission to architect systemic change
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-brand-gray-200"></div>
              {mappedMilestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-8 ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-all duration-300">
                      <div className="text-2xl font-bold text-brand-black mb-2">
                        {milestone.year}
                      </div>
                      <div className="text-brand-gray-600">{milestone.event}</div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-brand-primary rounded-full border-4 border-white shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership - Matching card design */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">
              Our Leadership
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
              Meet the visionary leaders who guide our mission toward systemic change
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {mappedLeadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-brand-gray-500 to-brand-gray-700">
                  <img
                    className="w-full h-full object-cover"
                    alt={leader.name}
                    src={leader.image}
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-brand-black mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-brand-gray-600">{leader.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - Matching card design */}
      <section className="py-20 bg-brand-black">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Measurable outcomes from our systemic change initiatives
            </p>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {mappedStatistics.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-lg p-6 text-center hover:border-white/20 transition-all duration-300"
              >
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-white" />
                <div className="text-4xl font-bold mb-2 text-white">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
