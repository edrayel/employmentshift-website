/**
 * Mock Data for EmploymentShift
 * Replaces API calls with static data for development
 */

// Home page data
export const mockHomeData = {
  hero: {
    title: "The Future isn't Predicted. It's Designed.",
    subtitle: "We architect the frameworks for a more just, resilient, and prosperous society.",
    description: "EmploymentShift partners with governments, corporations, NGOs, and individuals to design and implement transformative solutions across justice, education, technology, and economic development.",
    cta_text: "Explore Our Work",
    cta_link: "/about",
    background_image: ""
  },
  statistics: [
    { label: "Focus Areas", value: "7", icon: "target" },
    { label: "Partner Organizations", value: "100+", icon: "users" },
    { label: "Frameworks Designed", value: "50+", icon: "settings" },
    { label: "Years of Impact", value: "10+", icon: "award" }
  ],
  aboutFeatures: [
    "Insight Engine: Deep research and analysis to understand complex challenges",
    "Intervention Lab: Design and prototype innovative solutions",
    "Influence Platform: Scale and implement frameworks for lasting impact",
    "Cross-sector partnerships spanning government, corporate, and civil society"
  ],
  howWeWork: {
    title: "How We Architect Change",
    body: "Our three-pillar approach ensures comprehensive solutions that address root causes and create sustainable transformation across all sectors of society.",
    points: [
      { icon: "search", text: "Insight Engine: Research & Analysis" },
      { icon: "flask", text: "Intervention Lab: Design & Prototype" },
      { icon: "megaphone", text: "Influence Platform: Scale & Implement" },
      { icon: "globe", text: "Cross-sector Impact" }
    ],
    button_text: "Learn More",
    button_url: "/about",
    image_url: ""
  },
  focusAreas: [
    {
      id: 1,
      title: "Justice & Governance",
      description: "Designing frameworks for transparent, accountable, and effective governance systems",
      icon: "scale",
      categories: [{ slug: "governance" }]
    },
    {
      id: 2,
      title: "Education & Lifelong Learning",
      description: "Creating adaptive learning systems that prepare individuals for the future economy",
      icon: "book",
      categories: [{ slug: "education" }]
    },
    {
      id: 3,
      title: "Artificial Intelligence & Technology",
      description: "Developing ethical AI frameworks and technology solutions for social good",
      icon: "cpu",
      categories: [{ slug: "technology" }]
    },
    {
      id: 4,
      title: "Green & Circular Economy",
      description: "Building sustainable economic models that prioritize environmental stewardship",
      icon: "leaf",
      categories: [{ slug: "sustainability" }]
    }
  ],
  upcomingEvents: [
    {
      id: 1,
      title: "Open House 2024",
      date: "2024-03-15",
      time: "10:00 AM",
      location: "Main Campus",
      description: "Explore our campus and meet faculty",
      featured_event: true,
      categories: [{ slug: "admissions" }]
    },
    {
      id: 2,
      title: "Research Symposium",
      date: "2024-04-20",
      time: "2:00 PM",
      location: "Science Building",
      description: "Student research presentations",
      featured_event: false,
      categories: [{ slug: "academic" }]
    }
  ],
  latestNews: [
    {
      id: 1,
      title: "New STEM Center Opens",
      excerpt: "State-of-the-art facility enhances learning opportunities",
      date: "2024-02-15",
      author: "Communications Team",
      featured: true
    },
    {
      id: 2,
      title: "Student Achievement Awards",
      excerpt: "Recognizing outstanding academic performance",
      date: "2024-02-10",
      author: "Academic Affairs",
      featured: false
    }
  ]
};

// About page data
export const mockAboutData = {
  mission: "We architect the frameworks for a more just, resilient, and prosperous society. Through our Insight Engine, Intervention Lab, and Influence Platform, we partner with organizations across sectors to design and implement transformative solutions that address systemic challenges at their root.",
  vision: "A world where systemic challenges are met with innovative, sustainable frameworks that create lasting positive change across all sectors of society. We envision interconnected systems that promote justice, sustainability, and human flourishing.",
  values: [
    {
      title: "Systems Thinking",
      description: "We approach challenges holistically, understanding interconnections and root causes to design comprehensive solutions",
      icon: "network"
    },
    {
      title: "Evidence-Based Design",
      description: "Our frameworks are grounded in rigorous research, data-driven insights, and real-world testing",
      icon: "chart-bar"
    },
    {
      title: "Cross-Sector Collaboration",
      description: "We believe in the power of partnerships across government, corporate, and civil society to drive meaningful change",
      icon: "users"
    },
    {
      title: "Sustainable Impact",
      description: "We design frameworks that create lasting, scalable, and ethical solutions for long-term societal benefit",
      icon: "leaf"
    }
  ],
  history: [
    { year: "2014", event: "EmploymentShift founded with mission to architect systemic change" },
    { year: "2016", event: "First major government partnership launched in justice reform" },
    { year: "2018", event: "Expansion into AI ethics and technology governance frameworks" },
    { year: "2020", event: "Launch of Green Economy transformation initiatives" },
    { year: "2022", event: "Establishment of cross-sector partnership network" },
    { year: "2024", event: "10th anniversary - 500+ organizations transformed" }
  ],
  leadership: [
    {
      title: "Dr.",
      name: "Jasper Ukachukwu",
      bio: "Chief Executive Officer and Founder. Visionary leader with extensive experience in systems transformation, policy development, and cross-sector collaboration. Dr. Ukachukwu has dedicated his career to architecting frameworks for sustainable societal change.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    {
      title: "Dr.",
      name: "Amara Okafor",
      bio: "Chief Operating Officer with expertise in systems design and policy transformation across Africa and globally. Leads operational excellence and strategic implementation initiatives.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786"
    },
    {
      title: "Prof.",
      name: "David Chen",
      bio: "Chief Research Officer specializing in AI ethics and technology governance frameworks. Oversees our research initiatives and academic partnerships.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    {
      title: "Dr.",
      name: "Fatima Al-Rashid",
      bio: "Director of Partnerships leading cross-sector collaboration and implementation strategies. Manages relationships with government, corporate, and NGO partners.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    },
    {
      title: "Ms.",
      name: "Sarah Johnson",
      bio: "Chief Financial Officer overseeing financial strategy, resource allocation, and organizational sustainability. Ensures fiscal responsibility across all initiatives.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
    },
    {
      title: "Dr.",
      name: "Michael Thompson",
      bio: "Director of Innovation leading the Intervention Lab and solution design processes. Specializes in rapid prototyping and pilot program development.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
    }
  ],
  statistics: [
    { label: "Organizations Transformed", value: "500+", icon: "star" },
    { label: "Policy Adoption Rate", value: "85%", icon: "briefcase" },
    { label: "Research Publications", value: "200+", icon: "book" },
    { label: "Cross-Sector Partnerships", value: "50+", icon: "globe" }
  ]
};

// Contact page data
export const mockContactData = {
  general: {
    address: "Lagos, Nigeria",
    phone: "+234 705 143 2811",
    email: "hello@employmentshift.com",
    office_hours: "Monday - Friday: 9:00 AM - 6:00 PM\r\nSaturday: 10:00 AM - 2:00 PM\r\nSunday: Closed"
  },
  partnerTypes: [
    {
      name: "Government Agencies",
      description: "Federal, state, and local government bodies seeking systemic solutions",
      icon: "building"
    },
    {
      name: "Corporations",
      description: "Private sector organizations driving sustainable business practices",
      icon: "briefcase"
    },
    {
      name: "NGOs",
      description: "Non-profit organizations working on social and environmental challenges",
      icon: "heart"
    },
    {
      name: "Faith-Based Organizations",
      description: "Religious institutions seeking to create positive community impact",
      icon: "church"
    },
    {
      name: "Educational Institutions",
      description: "Schools and universities implementing innovative learning frameworks",
      icon: "graduation-cap"
    },
    {
      name: "Individuals",
      description: "Leaders and changemakers committed to systemic transformation",
      icon: "user"
    },
    {
      name: "Start-Ups",
      description: "Emerging companies building solutions for social good",
      icon: "rocket"
    }
  ],
  faq: [
    {
      question: "What are the admission requirements?",
      answer: "Admission requirements vary by program. Generally, we require a high school diploma or equivalent, standardized test scores, and letters of recommendation."
    },
    {
      question: "What financial aid options are available?",
      answer: "We offer various financial aid options including scholarships, grants, work-study programs, and student loans. Our financial aid office can help you explore all available options."
    },
    {
      question: "Can I schedule a campus visit?",
      answer: "Yes! We encourage prospective students to visit our campus. You can schedule a visit through our admissions office or attend one of our regular open house events."
    },
    {
      question: "What support services are available for students?",
      answer: "We provide comprehensive support services including academic advising, tutoring, career counseling, mental health services, and disability support services."
    }
  ]
};

// Events data
export const mockEventsData = {
  upcomingEvents: [
    {
      id: 1,
      title: "Spring Open House",
      date: "2024-03-15",
      time: "10:00 AM - 4:00 PM",
      location: "Main Campus",
      description: "Explore our campus, meet faculty, and learn about our programs. Perfect for prospective students and families.",
      category: "Admissions",
      registrationRequired: true,
      capacity: 500,
      registered: 234
    },
    {
      id: 2,
      title: "Career Fair 2024",
      date: "2024-04-10",
      time: "9:00 AM - 3:00 PM",
      location: "Student Center",
      description: "Connect with top employers and explore career opportunities across various industries.",
      category: "Career Services",
      registrationRequired: true,
      capacity: 1000,
      registered: 567
    },
    {
      id: 3,
      title: "Research Symposium",
      date: "2024-04-20",
      time: "2:00 PM - 6:00 PM",
      location: "Science Building",
      description: "Student and faculty research presentations showcasing innovative projects and discoveries.",
      category: "Academic",
      registrationRequired: false,
      capacity: 300,
      registered: 89
    },
    {
      id: 4,
      title: "Alumni Networking Event",
      date: "2024-05-05",
      time: "6:00 PM - 9:00 PM",
      location: "Alumni Hall",
      description: "Connect with successful alumni and expand your professional network.",
      category: "Alumni",
      registrationRequired: true,
      capacity: 200,
      registered: 156
    }
  ],
  calendar: {
    "2024-03": [
      { date: "2024-03-15", event: "Spring Open House" },
      { date: "2024-03-22", event: "Spring Break Begins" },
      { date: "2024-03-29", event: "Classes Resume" }
    ],
    "2024-04": [
      { date: "2024-04-10", event: "Career Fair 2024" },
      { date: "2024-04-15", event: "Registration for Fall Semester" },
      { date: "2024-04-20", event: "Research Symposium" }
    ],
    "2024-05": [
      { date: "2024-05-05", event: "Alumni Networking Event" },
      { date: "2024-05-15", event: "Final Exams Begin" },
      { date: "2024-05-25", event: "Graduation Ceremony" }
    ]
  }
};

// Podcast data
export const mockPodcastData = {
  featuredEpisode: {
    id: 1,
    title: "The Future of Education Technology",
    description: "Exploring how AI and digital tools are transforming the learning experience",
    duration: "45:30",
    publishDate: "2024-02-15",
    audioUrl: "#",
    guests: ["Dr. Sarah Johnson", "Prof. Michael Chen"]
  },
  recentEpisodes: [
    {
      id: 2,
      title: "Student Success Stories",
      description: "Inspiring stories from our graduates who are making a difference",
      duration: "38:15",
      publishDate: "2024-02-08",
      audioUrl: "#"
    },
    {
      id: 3,
      title: "Innovation in Research",
      description: "Breakthrough research projects happening on our campus",
      duration: "42:20",
      publishDate: "2024-02-01",
      audioUrl: "#"
    },
    {
      id: 4,
      title: "Career Preparation Tips",
      description: "Expert advice on preparing for your future career",
      duration: "35:45",
      publishDate: "2024-01-25",
      audioUrl: "#"
    }
  ]
};

// Products/Services data
export const mockProductsData = {
  services: [
    {
      id: 1,
      name: "Insight Engine",
      description: "Deep research and analysis to understand complex societal challenges",
      features: ["Data-driven research", "Stakeholder analysis", "Systems mapping", "Trend forecasting"],
      methodology: "Research & Analysis",
      category: "Research"
    },
    {
      id: 2,
      name: "Intervention Lab",
      description: "Design and prototype innovative solutions for systemic transformation",
      features: ["Solution design", "Rapid prototyping", "Pilot programs", "Impact measurement"],
      methodology: "Design & Prototype",
      category: "Innovation"
    },
    {
      id: 3,
      name: "Influence Platform",
      description: "Scale and implement frameworks for lasting societal impact",
      features: ["Implementation strategy", "Change management", "Stakeholder engagement", "Impact scaling"],
      methodology: "Scale & Implement",
      category: "Implementation"
    },
    {
      id: 4,
      name: "Strategic Consulting",
      description: "Comprehensive consulting for organizations seeking systemic transformation",
      features: ["Strategic planning", "Organizational design", "Process optimization", "Leadership development"],
      methodology: "End-to-end Consulting",
      category: "Consulting"
    }
  ],
  capabilities: [
    {
      name: "Systems Analysis",
      description: "Comprehensive analysis of complex societal systems and their interconnections",
      icon: "network"
    },
    {
      name: "Framework Design",
      description: "Creating scalable frameworks for sustainable transformation",
      icon: "settings"
    },
    {
      name: "Cross-Sector Partnerships",
      description: "Building collaborative networks across government, corporate, and civil society",
      icon: "users"
    },
    {
      name: "Impact Measurement",
      description: "Developing metrics and evaluation systems for social impact",
      icon: "chart-bar"
    }
  ]
};

// Admissions data
export const mockAdmissionsData = {
  processSteps: [
    {
      number: 1,
      title: "Submit Application",
      description: "Complete and submit your online application with all required documents and personal statement"
    },
    {
      number: 2,
      title: "Document Review",
      description: "Our admissions committee reviews your application, transcripts, and supporting materials"
    },
    {
      number: 3,
      title: "Interview Process",
      description: "Selected candidates participate in virtual or in-person interviews with faculty"
    },
    {
      number: 4,
      title: "Decision & Enrollment",
      description: "Receive your admission decision and complete enrollment requirements to secure your spot"
    }
  ],
  requirements: [
    "High school diploma or equivalent with minimum 3.0 GPA",
    "Official transcripts from all previously attended institutions",
    "Two letters of recommendation from academic or professional references",
    "Personal statement (500-750 words) outlining your goals and motivation",
    "Standardized test scores (SAT, ACT, or equivalent) - optional for some programs",
    "Portfolio or work samples (required for specific programs)",
    "English proficiency test scores for international students (TOEFL/IELTS)"
  ],
  importantDates: [
    {
      event: "Early Decision Deadline",
      date: "November 15, 2024"
    },
    {
      event: "Regular Decision Deadline",
      date: "January 15, 2025"
    },
    {
      event: "Financial Aid Priority Deadline",
      date: "February 1, 2025"
    },
    {
      event: "Admission Decisions Released",
      date: "March 15, 2025"
    },
    {
      event: "Enrollment Deposit Deadline",
      date: "May 1, 2025"
    },
    {
      event: "Orientation Week",
      date: "August 20-24, 2025"
    },
    {
      event: "Fall Semester Begins",
      date: "August 27, 2025"
    }
  ],
  programs: [
    {
      id: 1,
      name: "Systems Design & Innovation",
      description: "Master the art of designing transformative frameworks for complex societal challenges across multiple sectors.",
      duration: "4 years",
      degree: "Bachelor of Science"
    },
    {
      id: 2,
      name: "Policy & Governance Studies",
      description: "Develop expertise in policy analysis, governance frameworks, and public administration for effective leadership.",
      duration: "4 years",
      degree: "Bachelor of Arts"
    },
    {
      id: 3,
      name: "Sustainable Economics",
      description: "Learn to design and implement economic models that prioritize sustainability and social impact.",
      duration: "4 years",
      degree: "Bachelor of Science"
    },
    {
      id: 4,
      name: "AI Ethics & Technology",
      description: "Explore the intersection of artificial intelligence, ethics, and technology governance for responsible innovation.",
      duration: "4 years",
      degree: "Bachelor of Science"
    },
    {
      id: 5,
      name: "Social Impact Leadership",
      description: "Develop leadership skills and strategic thinking for driving positive change in communities and organizations.",
      duration: "2 years",
      degree: "Master of Arts"
    },
    {
      id: 6,
      name: "Applied Research Methods",
      description: "Advanced training in research methodologies and data analysis for evidence-based decision making.",
      duration: "2 years",
      degree: "Master of Science"
    }
  ],
  tuitionFees: [
    {
      program_type: "Undergraduate",
      tuition: "$42,000",
      fees: "$3,500",
      total: "$45,500"
    },
    {
      program_type: "Graduate",
      tuition: "$38,000",
      fees: "$2,800",
      total: "$40,800"
    }
  ],
  financialAid: [
    {
      type: "Merit Scholarships",
      description: "Academic excellence scholarships for outstanding students",
      amount: "Up to $25,000"
    },
    {
      type: "Need-based Grants",
      description: "Financial assistance based on demonstrated financial need",
      amount: "Up to $15,000"
    },
    {
      type: "Work-Study Programs",
      description: "Part-time employment opportunities on campus and with partner organizations",
      amount: "Up to $4,000"
    },
    {
      type: "Research Assistantships",
      description: "Graduate student positions supporting faculty research projects",
      amount: "Full tuition + stipend"
    }
  ]
};

// Combined mock data export
export const mockData = {
  home: {
    hero: {
      title: "The Future isn't Predicted.",
      subtitle: "It's Designed.",
      description:
        "We architect the frameworks for a more just, resilient, and prosperous society. EmploymentShift partners with governments, corporations, NGOs, and individuals to design and implement transformative solutions across justice, education, technology, and economic development.",
      cta_text: "Explore Our Work",
      cta_link: "/about",
      background_image: "",
    },
    statistics: {
      title: "Our Impact in Numbers",
      stats: [
        {
          number: "500+",
          label: "Organizations Partnered",
          description: "Governments, corporations, and NGOs transformed",
        },
        {
          number: "15M+",
          label: "Lives Impacted",
          description: "Through our systemic interventions",
        },
        {
          number: "12",
          label: "Focus Areas",
          description: "From justice to green economy",
        },
        {
          number: "85%",
          label: "Policy Adoption Rate",
          description: "Of our recommendations implemented",
        },
      ],
    },
    about: {
      title: "Architecting Systemic Change",
      subtitle: "Where Research Meets Real-World Impact",
      description:
        "EmploymentShift operates at the intersection of rigorous research and practical implementation. We don't just identify problems—we design and deploy the frameworks that solve them at scale, creating lasting change across sectors and societies.",
      features: [
        {
          title: "Insight Engine",
          description:
            "Unassailable research and foresight that forms the foundation of all our interventions and policy recommendations.",
          icon: "Target",
        },
        {
          title: "Intervention Lab",
          description:
            "Scalable, real-world solutions tested and refined through pilot programs before full implementation.",
          icon: "Lightbulb",
        },
        {
          title: "Influence Platform",
          description:
            "Setting the national agenda through strategic partnerships and thought leadership across sectors.",
          icon: "Users",
        },
        {
          title: "Cross-Sector Partnerships",
          description:
            "Bridging governments, corporations, NGOs, and communities to create comprehensive solutions.",
          icon: "Globe",
        },
      ],
    },
    howWeWork: {
      title: "Our Methodology",
      subtitle: "From Insight to Impact",
      description:
        "Our three-pillar approach ensures that every intervention is grounded in rigorous research, tested through real-world application, and scaled through strategic influence.",
      steps: [
        {
          step: "01",
          title: "Research & Analysis",
          description:
            "Deep-dive research into systemic challenges, identifying root causes and leverage points for maximum impact across sectors.",
        },
        {
          step: "02",
          title: "Design & Pilot",
          description:
            "Co-design solutions with stakeholders, test through controlled pilots, and iterate based on real-world feedback and data.",
        },
        {
          step: "03",
          title: "Scale & Influence",
          description:
            "Deploy proven solutions at scale while building the policy and partnership frameworks needed for sustained impact.",
        },
        {
          step: "04",
          title: "Monitor & Evolve",
          description:
            "Continuous monitoring and evaluation ensures our interventions remain effective and adapt to changing circumstances.",
        },
      ],
    },
    focusAreas: {
      title: "Our Focus Areas",
      subtitle: "Transforming Critical Sectors",
      description:
        "We work across interconnected domains where systemic change can create the greatest positive impact for society.",
      areas: [
        {
          title: "Justice & Governance",
          description:
            "Reforming legal systems, improving governance structures, and ensuring equitable access to justice.",
          icon: "Scale",
          color: "blue",
        },
        {
          title: "AI & Technology",
          description:
            "Shaping ethical AI development and ensuring technology serves human flourishing.",
          icon: "Cpu",
          color: "purple",
        },
        {
          title: "Green & Circular Economy",
          description:
            "Building sustainable economic models that regenerate rather than deplete our planet.",
          icon: "Leaf",
          color: "green",
        },
        {
          title: "Education & Skills",
          description:
            "Reimagining education systems to prepare people for the future of work and life.",
          icon: "BookOpen",
          color: "orange",
        },
        {
          title: "Health & Wellbeing",
          description:
            "Creating systems that promote physical, mental, and social wellbeing for all.",
          icon: "Heart",
          color: "red",
        },
        {
          title: "Economic Inclusion",
          description:
            "Designing economic systems that create opportunities for everyone to thrive.",
          icon: "TrendingUp",
          color: "emerald",
        },
      ],
    },
    ...mockHomeData
  },
  about: mockAboutData,
  contact: mockContactData,
  events: mockEventsData,
  podcast: mockPodcastData,
  products: mockProductsData,
  admissions: mockAdmissionsData
};

export default {
  mockHomeData,
  mockAboutData,
  mockContactData,
  mockEventsData,
  mockPodcastData,
  mockProductsData,
  mockAdmissionsData
};