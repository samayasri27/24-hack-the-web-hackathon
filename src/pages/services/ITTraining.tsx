import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code,
  Smartphone,
  Brain,
  Cloud,
  Shield,
  Clock,
  Users,
  CheckCircle,
  Star,
  BookOpen,
  Target,
  Award,
  TrendingUp,
  Monitor,
  Database,
  Palette,
  DollarSign,
  Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";

const ITTraining = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const trainingPrograms = [
    {
      category: "Full Stack Development",
      icon: Code,
      color: "bg-blue-500",
      description: "Complete web development training from frontend to backend",
      courses: [
        {
          title: "MERN Stack Development",
          level: "Beginner to Advanced",
          duration: "6 months",
          price: "₹25,999",
          originalPrice: "₹35,999",
          rating: 4.9,
          enrolled: 342,
          description:
            "Master the complete MERN stack (MongoDB, Express.js, React, Node.js) and build production-ready web applications.",
          curriculum: [
            "HTML5, CSS3, JavaScript ES6+",
            "React.js with Hooks and Context",
            "Node.js and Express.js backend",
            "MongoDB database design",
            "RESTful API development",
            "Authentication and security",
            "Deployment on cloud platforms",
            "Real-world project development",
          ],
          features: [
            "100+ hours of hands-on coding",
            "5 major projects in portfolio",
            "Industry mentor guidance",
            "Job placement assistance",
            "Lifetime course access",
            "Certificate of completion",
          ],
          prerequisites: "Basic computer skills, logical thinking",
          careerPaths: [
            "Full Stack Developer",
            "Frontend Developer",
            "Backend Developer",
            "Web Developer",
          ],
          tools: ["VS Code", "Git", "MongoDB Compass", "Postman", "AWS/Heroku"],
          schedule: "Mon-Wed-Fri 7:00-9:00 PM",
          batchSize: "15-20 students",
          link: "/programs/mern-stack",
        },
        {
          title: "Python Django Full Stack",
          level: "Intermediate",
          duration: "5 months",
          price: "₹22,999",
          originalPrice: "₹32,999",
          rating: 4.8,
          enrolled: 198,
          description:
            "Build robust web applications using Python Django framework with modern frontend technologies.",
          curriculum: [
            "Python programming fundamentals",
            "Django framework architecture",
            "Database design with PostgreSQL",
            "REST API development",
            "Frontend integration (React/Vue)",
            "User authentication and permissions",
            "Testing and deployment",
            "Performance optimization",
          ],
          features: [
            "80+ hours of practical training",
            "4 industry-level projects",
            "Code review sessions",
            "Interview preparation",
            "GitHub portfolio development",
            "Industry-recognized certificate",
          ],
          prerequisites: "Basic programming knowledge",
          careerPaths: [
            "Python Developer",
            "Django Developer",
            "Backend Developer",
            "Full Stack Developer",
          ],
          tools: ["PyCharm", "Git", "PostgreSQL", "Docker", "AWS"],
          schedule: "Tue-Thu-Sat 6:30-8:30 PM",
          batchSize: "12-18 students",
          link: "/programs/django-fullstack",
        },
      ],
    },
    {
      category: "Mobile Development",
      icon: Smartphone,
      color: "bg-green-500",
      description: "Cross-platform mobile app development training",
      courses: [
        {
          title: "React Native Development",
          level: "Intermediate",
          duration: "4 months",
          price: "₹18,999",
          originalPrice: "₹26,999",
          rating: 4.7,
          enrolled: 156,
          description:
            "Create native mobile apps for iOS and Android using React Native and modern development practices.",
          curriculum: [
            "React Native fundamentals",
            "Navigation and routing",
            "State management with Redux",
            "Native module integration",
            "API integration and networking",
            "Device features (camera, GPS, etc.)",
            "App store deployment",
            "Performance optimization",
          ],
          features: [
            "70+ hours of mobile development",
            "3 complete mobile apps",
            "iOS and Android publishing",
            "Real device testing",
            "App store optimization guidance",
            "Professional certificate",
          ],
          prerequisites: "JavaScript and React knowledge",
          careerPaths: [
            "Mobile App Developer",
            "React Native Developer",
            "Cross-platform Developer",
          ],
          tools: ["Expo", "Android Studio", "Xcode", "Firebase", "TestFlight"],
          schedule: "Mon-Wed-Fri 8:00-10:00 PM",
          batchSize: "10-15 students",
          link: "/programs/react-native",
        },
        {
          title: "Flutter Development",
          level: "Beginner to Advanced",
          duration: "5 months",
          price: "₹21,999",
          originalPrice: "₹29,999",
          rating: 4.8,
          enrolled: 203,
          description:
            "Build beautiful, natively compiled mobile applications using Google's Flutter framework and Dart programming.",
          curriculum: [
            "Dart programming language",
            "Flutter widgets and layouts",
            "State management (Provider, Bloc)",
            "Database integration (SQLite, Firebase)",
            "REST API consumption",
            "Native plugin development",
            "Testing and debugging",
            "App store deployment",
          ],
          features: [
            "90+ hours of Flutter development",
            "4 complete mobile applications",
            "Firebase backend integration",
            "Custom widget development",
            "Performance profiling",
            "Google certification preparation",
          ],
          prerequisites: "Object-oriented programming basics",
          careerPaths: [
            "Flutter Developer",
            "Mobile App Developer",
            "Cross-platform Developer",
          ],
          tools: ["Android Studio", "VS Code", "Firebase", "Git", "Figma"],
          schedule: "Tue-Thu-Sat 7:30-9:30 PM",
          batchSize: "12-16 students",
          link: "/programs/flutter-development",
        },
      ],
    },
    {
      category: "Data Science & AI",
      icon: Brain,
      color: "bg-purple-500",
      description: "Machine learning and artificial intelligence training",
      courses: [
        {
          title: "Machine Learning with Python",
          level: "Intermediate to Advanced",
          duration: "6 months",
          price: "₹28,999",
          originalPrice: "₹38,999",
          rating: 4.9,
          enrolled: 145,
          description:
            "Comprehensive machine learning training covering algorithms, implementation, and real-world applications.",
          curriculum: [
            "Python for data science",
            "Statistics and probability",
            "Supervised learning algorithms",
            "Unsupervised learning techniques",
            "Deep learning with TensorFlow",
            "Natural language processing",
            "Computer vision basics",
            "Model deployment and MLOps",
          ],
          features: [
            "120+ hours of practical ML",
            "15+ hands-on projects",
            "Industry dataset experience",
            "Model deployment training",
            "Research paper guidance",
            "Kaggle competition participation",
          ],
          prerequisites: "Python programming, basic mathematics",
          careerPaths: [
            "ML Engineer",
            "Data Scientist",
            "AI Research Scientist",
            "Data Analyst",
          ],
          tools: [
            "Jupyter",
            "TensorFlow",
            "PyTorch",
            "Pandas",
            "scikit-learn",
            "Docker",
          ],
          schedule: "Mon-Wed-Fri 6:00-8:30 PM",
          batchSize: "8-12 students",
          link: "/programs/machine-learning",
        },
        {
          title: "Data Analytics & Visualization",
          level: "Beginner to Intermediate",
          duration: "4 months",
          price: "₹16,999",
          originalPrice: "₹24,999",
          rating: 4.6,
          enrolled: 267,
          description:
            "Transform raw data into actionable insights using modern analytics tools and visualization techniques.",
          curriculum: [
            "Data collection and cleaning",
            "Exploratory data analysis",
            "Statistical analysis methods",
            "Data visualization with Python",
            "Dashboard creation (Tableau/Power BI)",
            "SQL for data analysis",
            "Business intelligence concepts",
            "Presentation of insights",
          ],
          features: [
            "80+ hours of data analysis",
            "Real business case studies",
            "Interactive dashboard creation",
            "Industry tool certification",
            "Portfolio development",
            "Business presentation skills",
          ],
          prerequisites: "Basic computer skills, analytical mindset",
          careerPaths: [
            "Data Analyst",
            "Business Analyst",
            "BI Developer",
            "Data Visualization Specialist",
          ],
          tools: ["Excel", "Tableau", "Power BI", "Python", "SQL", "R"],
          schedule: "Tue-Thu-Sat 7:00-9:00 PM",
          batchSize: "15-20 students",
          link: "/programs/data-analytics",
        },
      ],
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      color: "bg-cyan-500",
      description: "Cloud computing and DevOps engineering training",
      courses: [
        {
          title: "AWS Cloud Engineering",
          level: "Intermediate",
          duration: "5 months",
          price: "₹24,999",
          originalPrice: "₹34,999",
          rating: 4.8,
          enrolled: 178,
          description:
            "Master Amazon Web Services and become a certified cloud engineer with hands-on experience.",
          curriculum: [
            "AWS core services (EC2, S3, RDS)",
            "Virtual Private Cloud (VPC)",
            "Identity and Access Management",
            "Load balancing and auto-scaling",
            "Serverless computing (Lambda)",
            "Container services (ECS, EKS)",
            "Monitoring and logging",
            "Cost optimization strategies",
          ],
          features: [
            "100+ hours of AWS practice",
            "Real cloud infrastructure projects",
            "AWS certification preparation",
            "Cost-effective architecture design",
            "Security best practices",
            "Industry mentor guidance",
          ],
          prerequisites: "Basic networking, Linux fundamentals",
          careerPaths: [
            "Cloud Engineer",
            "Solutions Architect",
            "DevOps Engineer",
            "System Administrator",
          ],
          tools: ["AWS Console", "Terraform", "CloudFormation", "CLI", "Git"],
          schedule: "Mon-Wed-Fri 7:30-9:30 PM",
          batchSize: "10-15 students",
          link: "/programs/aws-cloud",
        },
        {
          title: "DevOps Engineering Bootcamp",
          level: "Advanced",
          duration: "6 months",
          price: "₹32,999",
          originalPrice: "₹42,999",
          rating: 4.9,
          enrolled: 89,
          description:
            "Comprehensive DevOps training covering CI/CD, containerization, orchestration, and automation.",
          curriculum: [
            "Linux system administration",
            "Version control with Git",
            "CI/CD pipelines (Jenkins, GitLab)",
            "Containerization (Docker)",
            "Orchestration (Kubernetes)",
            "Infrastructure as Code (Terraform)",
            "Monitoring and logging (ELK stack)",
            "Security and compliance",
          ],
          features: [
            "150+ hours of DevOps practice",
            "Enterprise-level projects",
            "Multi-cloud deployment experience",
            "Automation scripting mastery",
            "Production environment simulation",
            "Industry certification guidance",
          ],
          prerequisites:
            "System administration experience, programming knowledge",
          careerPaths: [
            "DevOps Engineer",
            "Site Reliability Engineer",
            "Cloud Architect",
            "Platform Engineer",
          ],
          tools: [
            "Jenkins",
            "Docker",
            "Kubernetes",
            "Terraform",
            "Ansible",
            "Prometheus",
          ],
          schedule: "Tue-Thu-Sat 6:00-9:00 PM",
          batchSize: "6-10 students",
          link: "/programs/devops-bootcamp",
        },
      ],
    },
    {
      category: "Cybersecurity",
      icon: Shield,
      color: "bg-red-500",
      description: "Information security and ethical hacking training",
      courses: [
        {
          title: "Ethical Hacking & Penetration Testing",
          level: "Advanced",
          duration: "5 months",
          price: "₹26,999",
          originalPrice: "₹36,999",
          rating: 4.8,
          enrolled: 123,
          description:
            "Learn ethical hacking techniques, penetration testing methodologies, and cybersecurity best practices.",
          curriculum: [
            "Network security fundamentals",
            "Vulnerability assessment techniques",
            "Web application security testing",
            "Wireless network security",
            "Social engineering awareness",
            "Malware analysis basics",
            "Incident response procedures",
            "Security reporting and documentation",
          ],
          features: [
            "100+ hours of hands-on hacking",
            "Virtual lab environment",
            "Real-world penetration tests",
            "Industry-standard tools training",
            "Certification exam preparation",
            "Legal and ethical guidelines",
          ],
          prerequisites: "Networking knowledge, Linux familiarity",
          careerPaths: [
            "Ethical Hacker",
            "Security Analyst",
            "Penetration Tester",
            "Security Consultant",
          ],
          tools: [
            "Kali Linux",
            "Metasploit",
            "Nmap",
            "Wireshark",
            "Burp Suite",
            "OWASP ZAP",
          ],
          schedule: "Mon-Wed-Fri 8:00-10:30 PM",
          batchSize: "8-12 students",
          link: "/programs/ethical-hacking",
        },
        {
          title: "Cybersecurity Analyst Certification",
          level: "Intermediate",
          duration: "4 months",
          price: "₹19,999",
          originalPrice: "₹27,999",
          rating: 4.7,
          enrolled: 167,
          description:
            "Develop skills to detect, analyze, and respond to cybersecurity threats in enterprise environments.",
          curriculum: [
            "Information security principles",
            "Threat intelligence and analysis",
            "Security monitoring and SIEM",
            "Incident detection and response",
            "Risk assessment methodologies",
            "Compliance and governance",
            "Digital forensics basics",
            "Security awareness training",
          ],
          features: [
            "80+ hours of security analysis",
            "SIEM tool hands-on experience",
            "Incident response simulations",
            "Industry case study analysis",
            "Security certification preparation",
            "Career placement assistance",
          ],
          prerequisites: "IT fundamentals, basic networking",
          careerPaths: [
            "Security Analyst",
            "SOC Analyst",
            "Incident Response Specialist",
            "Compliance Officer",
          ],
          tools: [
            "Splunk",
            "QRadar",
            "Wireshark",
            "Nessus",
            "OpenVAS",
            "Snort",
          ],
          schedule: "Tue-Thu-Sat 7:00-9:00 PM",
          batchSize: "12-16 students",
          link: "/programs/cybersecurity-analyst",
        },
      ],
    },
    {
      category: "UI/UX Design",
      icon: Palette,
      color: "bg-pink-500",
      description: "User interface and user experience design training",
      courses: [
        {
          title: "Complete UI/UX Design Bootcamp",
          level: "Beginner to Advanced",
          duration: "4 months",
          price: "₹17,999",
          originalPrice: "₹25,999",
          rating: 4.8,
          enrolled: 234,
          description:
            "Master user-centered design principles and create stunning digital experiences across all platforms.",
          curriculum: [
            "Design thinking methodology",
            "User research and personas",
            "Information architecture",
            "Wireframing and prototyping",
            "Visual design principles",
            "Interaction design patterns",
            "Usability testing methods",
            "Design system creation",
          ],
          features: [
            "90+ hours of design practice",
            "Portfolio of 6+ projects",
            "Industry tool mastery",
            "Real client project experience",
            "Design critique sessions",
            "Job interview preparation",
          ],
          prerequisites: "Creative mindset, basic computer skills",
          careerPaths: [
            "UI Designer",
            "UX Designer",
            "Product Designer",
            "Design Researcher",
          ],
          tools: [
            "Figma",
            "Adobe XD",
            "Sketch",
            "InVision",
            "Miro",
            "Principle",
          ],
          schedule: "Mon-Wed-Fri 6:30-8:30 PM",
          batchSize: "12-18 students",
          link: "/programs/ui-ux-design",
        },
        {
          title: "Mobile App Design Specialization",
          level: "Intermediate",
          duration: "3 months",
          price: "₹14,999",
          originalPrice: "₹21,999",
          rating: 4.6,
          enrolled: 145,
          description:
            "Specialize in mobile-first design approaches for iOS and Android applications with modern design trends.",
          curriculum: [
            "Mobile design principles",
            "iOS and Android guidelines",
            "Responsive design techniques",
            "Gesture-based interactions",
            "Mobile accessibility standards",
            "App icon and branding design",
            "Micro-interactions and animations",
            "App store optimization design",
          ],
          features: [
            "60+ hours of mobile design",
            "4 complete app designs",
            "Platform-specific guidelines",
            "Animation and micro-interaction practice",
            "App store submission guidance",
            "Portfolio optimization",
          ],
          prerequisites: "Basic design knowledge, UI/UX fundamentals",
          careerPaths: [
            "Mobile UI Designer",
            "App Designer",
            "Product Designer",
            "Interaction Designer",
          ],
          tools: [
            "Figma",
            "Principle",
            "After Effects",
            "Lottie",
            "Zeplin",
            "Marvel",
          ],
          schedule: "Tue-Thu-Sat 7:30-9:30 PM",
          batchSize: "10-15 students",
          link: "/programs/mobile-app-design",
        },
      ],
    },
  ];

  const trainingFeatures = [
    {
      icon: BookOpen,
      title: "Industry-Relevant Curriculum",
      description:
        "Updated content based on current industry demands and emerging technologies",
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description:
        "Learn from industry professionals with 5+ years of real-world experience",
    },
    {
      icon: Monitor,
      title: "Hands-on Projects",
      description:
        "Build portfolio-worthy projects that demonstrate your skills to employers",
    },
    {
      icon: Award,
      title: "Industry Certifications",
      description: "Prepare for and obtain recognized industry certifications",
    },
    {
      icon: Target,
      title: "Job Placement Support",
      description:
        "Resume building, interview preparation, and job placement assistance",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description:
        "Evening and weekend batches to accommodate working professionals",
    },
  ];

  const successMetrics = [
    { icon: Users, number: "1,200+", label: "Students Trained" },
    { icon: Award, number: "89%", label: "Certification Pass Rate" },
    { icon: TrendingUp, number: "85%", label: "Job Placement Rate" },
    { icon: Star, number: "4.8/5", label: "Average Rating" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-16 bg-tech-gradient text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-6">
              <Code className="h-16 w-16 mx-auto mb-4" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Professional IT Training Programs
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Master cutting-edge technologies with hands-on training designed
              to transform you into an industry-ready IT professional
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 max-w-3xl mx-auto">
              {successMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <metric.icon className="h-6 w-6 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{metric.number}</div>
                  <div className="text-sm opacity-90">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Training */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Our Training?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trainingFeatures.map((feature, index) => (
                <div key={index} className="text-center p-6">
                  <div className="mx-auto mb-4 p-3 bg-tech-gradient rounded-full w-fit">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Programs */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Comprehensive Training Programs
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose from our specialized training tracks designed to give you
                job-ready skills in today's most demanding technology fields
              </p>
            </div>

            <Tabs defaultValue="0" className="w-full">
              <TabsList className="grid grid-cols-2 lg:grid-cols-6 w-full mb-8">
                {trainingPrograms.map((category, index) => (
                  <TabsTrigger
                    key={index}
                    value={index.toString()}
                    className="flex items-center gap-2 text-xs"
                  >
                    <category.icon className="h-4 w-4" />
                    <span className="hidden lg:inline">
                      {category.category}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {trainingPrograms.map((category, categoryIndex) => (
                <TabsContent
                  key={categoryIndex}
                  value={categoryIndex.toString()}
                >
                  <div className="mb-6 p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 ${category.color} rounded-lg`}>
                        <category.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">
                          {category.category}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-8">
                    {category.courses.map((course, courseIndex) => (
                      <Card
                        key={courseIndex}
                        className="shadow-card hover:shadow-card-hover transition-all duration-300"
                      >
                        <CardHeader>
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <CardTitle className="text-2xl mb-2">
                                {course.title}
                              </CardTitle>
                              <div className="flex flex-wrap gap-2 mb-3">
                                <Badge variant="outline">{course.level}</Badge>
                                <Badge variant="outline">
                                  <Clock className="h-3 w-3 mr-1" />
                                  {course.duration}
                                </Badge>
                                <Badge variant="outline">
                                  <Users className="h-3 w-3 mr-1" />
                                  {course.enrolled} enrolled
                                </Badge>
                                <Badge className="bg-yellow-500">
                                  <Star className="h-3 w-3 mr-1" />
                                  {course.rating}
                                </Badge>
                              </div>
                              <p className="text-muted-foreground">
                                {course.description}
                              </p>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-green-600">
                                {course.price}
                              </div>
                              <div className="text-sm text-muted-foreground line-through">
                                {course.originalPrice}
                              </div>
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent className="space-y-6">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <BookOpen className="h-4 w-4" />
                                Curriculum Highlights
                              </h4>
                              <ul className="space-y-2">
                                {course.curriculum
                                  .slice(0, 6)
                                  .map((item, i) => (
                                    <li
                                      key={i}
                                      className="flex items-start gap-2 text-sm"
                                    >
                                      <CheckCircle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <Target className="h-4 w-4" />
                                Key Features
                              </h4>
                              <ul className="space-y-2">
                                {course.features
                                  .slice(0, 6)
                                  .map((feature, i) => (
                                    <li
                                      key={i}
                                      className="flex items-start gap-2 text-sm"
                                    >
                                      <CheckCircle className="h-3 w-3 text-blue-500 mt-1 flex-shrink-0" />
                                      <span>{feature}</span>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-muted rounded-lg text-sm">
                            <div>
                              <h5 className="font-semibold mb-1">
                                Prerequisites:
                              </h5>
                              <p className="text-muted-foreground">
                                {course.prerequisites}
                              </p>
                            </div>
                            <div>
                              <h5 className="font-semibold mb-1">Schedule:</h5>
                              <p className="text-muted-foreground">
                                {course.schedule}
                              </p>
                            </div>
                            <div>
                              <h5 className="font-semibold mb-1">
                                Batch Size:
                              </h5>
                              <p className="text-muted-foreground">
                                {course.batchSize}
                              </p>
                            </div>
                            <div>
                              <h5 className="font-semibold mb-1">
                                Tools Used:
                              </h5>
                              <div className="flex flex-wrap gap-1">
                                {course.tools.slice(0, 3).map((tool, i) => (
                                  <Badge
                                    key={i}
                                    variant="secondary"
                                    className="text-xs"
                                  >
                                    {tool}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div>
                            <h5 className="font-semibold mb-2">
                              Career Opportunities:
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {course.careerPaths.map((path, i) => (
                                <Badge
                                  key={i}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {path}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-3">
                            <Button
                              className="flex-1 bg-tech-gradient hover:opacity-90 text-white transition-all hover:scale-105"
                              asChild
                            >
                              <Link to={course.link}>
                                <Calendar className="h-4 w-4 mr-2" />
                                Enroll Now
                              </Link>
                            </Button>
                            <Button
                              variant="outline"
                              className="flex-1"
                              onClick={() =>
                                (window.location.href = "/#contact")
                              }
                            >
                              <Users className="h-4 w-4 mr-2" />
                              Schedule Demo
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Learning Approach */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Learning Approach</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    30%
                  </div>
                  <h3 className="font-semibold mb-2">Theory & Concepts</h3>
                  <p className="text-sm text-muted-foreground">
                    Solid foundation in theoretical concepts and best practices
                  </p>
                </div>
                <div className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    60%
                  </div>
                  <h3 className="font-semibold mb-2">Hands-on Practice</h3>
                  <p className="text-sm text-muted-foreground">
                    Extensive practical work on real-world projects and
                    scenarios
                  </p>
                </div>
                <div className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    10%
                  </div>
                  <h3 className="font-semibold mb-2">Industry Exposure</h3>
                  <p className="text-sm text-muted-foreground">
                    Guest lectures, industry visits, and real client projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-tech-gradient text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Career?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have advanced their careers
              with our comprehensive IT training programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 transition-all"
                onClick={() => (window.location.href = "/#contact")}
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary transition-all"
                onClick={() => (window.location.href = "/course-registration")}
              >
                View All Programs
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ITTraining;
