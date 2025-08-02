import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, User, Lock, Mail, Building, Users, Calendar, BarChart3, MessageSquare, Bell, Settings, BookOpen, Award, FileText, Video, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';

/**
 * StudentPortal Component
 * 
 * A comprehensive portal interface for students to access their learning dashboard,
 * track progress, access courses, and manage their educational journey.
 * 
 * Features:
 * - Secure login/registration system
 * - Learning dashboard with progress tracking
 * - Course access and management
 * - Assignment submission
 * - Grade tracking
 * - Communication tools
 * 
 * @returns {JSX.Element} The StudentPortal component
 */
const StudentPortal = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    studentId: '',
    firstName: '',
    lastName: '',
    program: ''
  });

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
      title: isLogin ? "Login Successful!" : "Registration Successful!",
      description: isLogin ? "Welcome back to your student portal." : "Your account has been created successfully.",
    });
  };

  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Course Access',
      description: 'Access all your enrolled courses and learning materials'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Progress Tracking',
      description: 'Monitor your academic progress and achievements'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Assignment Management',
      description: 'Submit assignments and track deadlines'
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: 'Virtual Classrooms',
      description: 'Join live sessions and access recorded lectures'
    }
  ];

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Student Portal</h1>
            <p className="text-xl md:text-2xl mb-8 text-brand-gray-300">
              Access your personalized learning dashboard and track your academic journey
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Login/Register Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-xl p-8"
          >
            <div className="text-center mb-8">
              <div className="bg-brand-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-brand-black" />
              </div>
              <h2 className="text-3xl font-bold text-brand-gray-800 mb-2">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </h2>
              <p className="text-brand-gray-600">
                {isLogin 
                  ? 'Sign in to access your student dashboard' 
                  : 'Join our learning platform as a student'
                }
              </p>
            </div>

            {/* Toggle Buttons */}
            <div className="flex bg-gray-100 rounded-lg p-1 mb-8">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 px-4 rounded-md font-semibold transition-colors duration-300 ${
                  isLogin 
                    ? 'bg-white text-brand-black shadow-sm' 
                    : 'text-brand-gray-600 hover:text-brand-gray-800'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 px-4 rounded-md font-semibold transition-colors duration-300 ${
                  !isLogin 
                    ? 'bg-white text-brand-black shadow-sm' 
                    : 'text-brand-gray-600 hover:text-brand-gray-800'
                }`}
              >
                Register
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-brand-gray-700 mb-2">
                        First Name
                      </label>
                      <Input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Enter your first name"
                        className="w-full py-3"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-gray-700 mb-2">
                        Last Name
                      </label>
                      <Input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Enter your last name"
                        className="w-full py-3"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-brand-gray-700 mb-2">
                        Student ID
                      </label>
                      <Input
                        type="text"
                        name="studentId"
                        value={formData.studentId}
                        onChange={handleInputChange}
                        placeholder="Enter your student ID"
                        className="w-full py-3"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-gray-700 mb-2">
                        Program
                      </label>
                      <Input
                        type="text"
                        name="program"
                        value={formData.program}
                        onChange={handleInputChange}
                        placeholder="Enter your program"
                        className="w-full py-3"
                        required
                      />
                    </div>
                  </div>
                </>
              )}
              
              <div>
                <label className="block text-sm font-medium text-brand-gray-700 mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full py-3"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-brand-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    className="w-full py-3 pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-brand-gray-400 hover:text-brand-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-brand-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <Input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                    className="w-full py-3"
                    required
                  />
                </div>
              )}
              
              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm text-brand-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-brand-black hover:text-brand-gray-800">
                    Forgot password?
                  </a>
                </div>
              )}
              
              <Button
                type="submit"
                className="w-full bg-brand-black hover:bg-brand-gray-800 text-white py-3 rounded-lg font-semibold text-lg"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-brand-gray-600">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-1 text-brand-black hover:text-brand-gray-800 font-semibold"
                >
                  {isLogin ? 'Register here' : 'Sign in here'}
                </button>
              </p>
            </div>
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-brand-gray-800 mb-6">
                What You'll Get Access To
              </h2>
              <p className="text-brand-gray-600 mb-8">
                Our student portal provides you with all the tools you need to succeed in your academic journey and achieve your learning goals.
              </p>
            </div>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md"
                >
                  <div className="bg-brand-gray-100 p-3 rounded-lg flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-brand-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-brand-gray-50 p-6 rounded-lg border border-brand-gray-200">
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 text-brand-black mr-3" />
                <h3 className="text-lg font-semibold text-brand-gray-800">Secure & Confidential</h3>
              </div>
              <p className="text-brand-gray-600">
                Your academic data is protected with enterprise-grade security. We use advanced encryption and follow industry best practices to keep your information safe.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Support Section */}
      <section className="bg-brand-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Need Help Getting Started?</h2>
            <p className="text-xl mb-8 text-brand-gray-300">
              Our support team is here to help you make the most of your student portal experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-brand-black hover:bg-brand-gray-100 px-8 py-3 rounded-lg font-semibold">
                Contact Support
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-brand-black px-8 py-3 rounded-lg font-semibold">
                View Documentation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StudentPortal;