import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Lightbulb,
  Coffee,
  Brain,
  Globe,
  Cpu,
  Clock,
  Users,
  CheckCircle,
  Star,
  Target,
  BookOpen,
  Zap,
  Award,
} from "lucide-react";

const FinalYearProjects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectCategories = [
    {
      category: "Web Development",
      icon: Globe,
      color: "bg-blue-500",
      projects: [
        {
          title: "E-Commerce Platform with AI Recommendations",
          difficulty: "Advanced",
          duration: "4-6 months",
          technologies: ["React", "Node.js", "MongoDB", "Machine Learning"],
          description:
            "Build a full-stack e-commerce platform with AI-powered product recommendations and real-time analytics.",
          features: [
            "User authentication",
            "Payment integration",
            "Admin dashboard",
            "ML recommendation engine",
          ],
          mentorSupport: "Weekly 1-on-1 sessions",
          deliverables: "Live demo, source code, documentation, presentation",
        },
        {
          title: "Social Media Analytics Dashboard",
          difficulty: "Intermediate",
          duration: "3-4 months",
          technologies: ["Vue.js", "Python", "Flask", "Chart.js"],
          description:
            "Create a comprehensive dashboard for social media analytics with data visualization and reporting.",
          features: [
            "Multi-platform integration",
            "Real-time analytics",
            "Custom reports",
            "Data export",
          ],
          mentorSupport: "Bi-weekly sessions",
          deliverables: "Working application, API documentation, user manual",
        },
      ],
    },
    {
      category: "Mobile Development",
      icon: Coffee,
      color: "bg-green-500",
      projects: [
        {
          title: "Health Monitoring App with IoT Integration",
          difficulty: "Advanced",
          duration: "5-6 months",
          technologies: [
            "React Native",
            "Firebase",
            "IoT Sensors",
            "Cloud Functions",
          ],
          description:
            "Develop a mobile app that connects with IoT devices to monitor health metrics and provide insights.",
          features: [
            "Real-time monitoring",
            "Health analytics",
            "Emergency alerts",
            "Doctor consultation",
          ],
          mentorSupport: "Weekly sessions + hardware support",
          deliverables:
            "Mobile app, IoT setup, backend system, medical validation",
        },
        {
          title: "Expense Tracker with Voice Commands",
          difficulty: "Intermediate",
          duration: "3-4 months",
          technologies: ["Flutter", "SQLite", "Speech Recognition", "Charts"],
          description:
            "Build a smart expense tracking app with voice command integration and financial insights.",
          features: [
            "Voice input",
            "Expense categorization",
            "Budget planning",
            "Financial reports",
          ],
          mentorSupport: "Bi-weekly sessions",
          deliverables: "Cross-platform app, user testing report, presentation",
        },
      ],
    },
    {
      category: "Artificial Intelligence",
      icon: Brain,
      color: "bg-purple-500",
      projects: [
        {
          title: "Computer Vision for Agricultural Monitoring",
          difficulty: "Advanced",
          duration: "6-8 months",
          technologies: ["Python", "TensorFlow", "OpenCV", "Drone Technology"],
          description:
            "Develop an AI system using computer vision to monitor crop health and predict agricultural yields.",
          features: [
            "Disease detection",
            "Yield prediction",
            "Automated reporting",
            "Drone integration",
          ],
          mentorSupport: "Weekly sessions + research guidance",
          deliverables:
            "AI model, research paper, field testing results, demo video",
        },
        {
          title: "Natural Language Processing Chatbot",
          difficulty: "Intermediate",
          duration: "4-5 months",
          technologies: ["Python", "NLTK", "Transformers", "Flask"],
          description:
            "Create an intelligent chatbot using NLP techniques for customer service automation.",
          features: [
            "Intent recognition",
            "Sentiment analysis",
            "Multi-language support",
            "Learning capability",
          ],
          mentorSupport: "Weekly technical sessions",
          deliverables:
            "Chatbot system, training data, evaluation metrics, deployment guide",
        },
      ],
    },
    {
      category: "IoT & Embedded Systems",
      icon: Cpu,
      color: "bg-orange-500",
      projects: [
        {
          title: "Smart Home Automation System",
          difficulty: "Advanced",
          duration: "5-7 months",
          technologies: ["Arduino", "Raspberry Pi", "React", "MQTT", "Sensors"],
          description:
            "Design a comprehensive smart home system with mobile app control and automated decision making.",
          features: [
            "Voice control",
            "Mobile app",
            "Energy optimization",
            "Security integration",
          ],
          mentorSupport: "Weekly sessions + hardware lab access",
          deliverables:
            "Hardware prototype, mobile app, system documentation, installation guide",
        },
        {
          title: "Industrial Equipment Monitoring",
          difficulty: "Advanced",
          duration: "4-6 months",
          technologies: ["Sensors", "LoRaWAN", "Python", "Time Series DB"],
          description:
            "Build an IoT solution for monitoring industrial equipment health and predicting maintenance needs.",
          features: [
            "Real-time monitoring",
            "Predictive maintenance",
            "Alert system",
            "Data analytics",
          ],
          mentorSupport: "Weekly sessions + industry mentor",
          deliverables:
            "IoT system, predictive model, dashboard, industry presentation",
        },
      ],
    },
  ];

  const mentorshipProcess = [
    {
      step: "1",
      title: "Project Selection & Planning",
      description:
        "Choose your project domain and work with mentors to define scope, timeline, and deliverables",
      duration: "Week 1-2",
    },
    {
      step: "2",
      title: "Research & Design Phase",
      description:
        "Conduct literature review, design system architecture, and create project roadmap",
      duration: "Week 3-6",
    },
    {
      step: "3",
      title: "Development & Implementation",
      description:
        "Build your project with regular mentor guidance and milestone reviews",
      duration: "Weeks 7-20",
    },
    {
      step: "4",
      title: "Testing & Documentation",
      description:
        "Comprehensive testing, documentation preparation, and presentation practice",
      duration: "Week 21-24",
    },
    {
      step: "5",
      title: "Final Presentation & Evaluation",
      description:
        "Present your project to industry experts and receive feedback for improvement",
      duration: "Week 25-26",
    },
  ];

  const successMetrics = [
    { icon: Award, metric: "95%", label: "Project Success Rate" },
    { icon: Star, metric: "4.9/5", label: "Student Satisfaction" },
    { icon: Target, metric: "87%", label: "First Attempt Pass" },
    { icon: Users, metric: "50+", label: "Industry Mentors" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-16 bg-tech-gradient text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-6">
              <Lightbulb className="h-16 w-16 mx-auto mb-4" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Final Year Project Mentorship
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Transform your ideas into industry-ready projects with expert
              mentorship, cutting-edge technologies, and comprehensive guidance
              from concept to completion
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 max-w-2xl mx-auto">
              {successMetrics.map((item, index) => (
                <div key={index} className="text-center">
                  <item.icon className="h-6 w-6 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{item.metric}</div>
                  <div className="text-sm opacity-90">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mentorship Process */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Mentorship Process
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {mentorshipProcess.map((phase, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-tech-gradient rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {phase.step}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">{phase.title}</h3>
                        <Badge variant="outline">{phase.duration}</Badge>
                      </div>
                      <p className="text-muted-foreground">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Project Categories */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Project Categories & Examples
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore our diverse range of project categories with real
                examples that have been successfully completed by our students
              </p>
            </div>

            <Tabs defaultValue="0" className="w-full">
              <TabsList className="grid grid-cols-2 lg:grid-cols-4 w-full mb-8">
                {projectCategories.map((category, index) => (
                  <TabsTrigger
                    key={index}
                    value={index.toString()}
                    className="flex items-center gap-2"
                  >
                    <category.icon className="h-4 w-4" />
                    <span className="hidden sm:inline">
                      {category.category}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {projectCategories.map((category, categoryIndex) => (
                <TabsContent
                  key={categoryIndex}
                  value={categoryIndex.toString()}
                >
                  <div className="grid gap-6">
                    {category.projects.map((project, projectIndex) => (
                      <Card
                        key={projectIndex}
                        className="shadow-card hover:shadow-card-hover transition-all duration-300"
                      >
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                              <div
                                className={`p-2 ${category.color} rounded-lg`}
                              >
                                <category.icon className="h-6 w-6 text-white" />
                              </div>
                              <div>
                                <CardTitle className="text-xl mb-2">
                                  {project.title}
                                </CardTitle>
                                <div className="flex gap-2">
                                  <Badge
                                    variant={
                                      project.difficulty === "Advanced"
                                        ? "destructive"
                                        : "secondary"
                                    }
                                  >
                                    {project.difficulty}
                                  </Badge>
                                  <Badge variant="outline">
                                    <Clock className="h-3 w-3 mr-1" />
                                    {project.duration}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent className="space-y-4">
                          <p className="text-muted-foreground">
                            {project.description}
                          </p>

                          <div>
                            <h4 className="font-semibold mb-2">
                              Technologies Used:
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {project.technologies.map((tech, i) => (
                                <Badge
                                  key={i}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">
                              Key Features:
                            </h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                              {project.features.map((feature, i) => (
                                <li
                                  key={i}
                                  className="flex items-center gap-2 text-sm"
                                >
                                  <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-muted rounded-lg">
                            <div>
                              <h5 className="font-semibold text-sm mb-1">
                                Mentor Support:
                              </h5>
                              <p className="text-sm text-muted-foreground">
                                {project.mentorSupport}
                              </p>
                            </div>
                            <div>
                              <h5 className="font-semibold text-sm mb-1">
                                Deliverables:
                              </h5>
                              <p className="text-sm text-muted-foreground">
                                {project.deliverables}
                              </p>
                            </div>
                          </div>

                          <Button
                            className="w-full bg-tech-gradient hover:opacity-90 text-white transition-all hover:scale-105"
                            onClick={() => (window.location.href = "/#contact")}
                          >
                            <Zap className="h-4 w-4 mr-2" />
                            Start This Project
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* What We Provide */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              What We Provide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <BookOpen className="h-12 w-12 mx-auto mb-4 text-blue-500" />
                <h3 className="font-semibold mb-2">Research Guidance</h3>
                <p className="text-sm text-muted-foreground">
                  Help with literature review, research methodology, and
                  academic writing
                </p>
              </div>
              <div className="text-center p-6">
                <Cpu className="h-12 w-12 mx-auto mb-4 text-green-500" />
                <h3 className="font-semibold mb-2">Technical Mentoring</h3>
                <p className="text-sm text-muted-foreground">
                  One-on-one sessions with industry experts for technical
                  guidance
                </p>
              </div>
              <div className="text-center p-6">
                <Zap className="h-12 w-12 mx-auto mb-4 text-purple-500" />
                <h3 className="font-semibold mb-2">Lab Access</h3>
                <p className="text-sm text-muted-foreground">
                  Access to hardware labs, cloud resources, and development
                  tools
                </p>
              </div>
              <div className="text-center p-6">
                <Users className="h-12 w-12 mx-auto mb-4 text-orange-500" />
                <h3 className="font-semibold mb-2">Peer Collaboration</h3>
                <p className="text-sm text-muted-foreground">
                  Connect with fellow students and work on collaborative
                  projects
                </p>
              </div>
              <div className="text-center p-6">
                <Star className="h-12 w-12 mx-auto mb-4 text-yellow-500" />
                <h3 className="font-semibold mb-2">Industry Review</h3>
                <p className="text-sm text-muted-foreground">
                  Project review and feedback from industry professionals
                </p>
              </div>
              <div className="text-center p-6">
                <Award className="h-12 w-12 mx-auto mb-4 text-red-500" />
                <h3 className="font-semibold mb-2">Career Support</h3>
                <p className="text-sm text-muted-foreground">
                  Help with project presentation and portfolio development
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-tech-gradient text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Don't let your final year project be a source of stress. Get
              expert guidance and turn your ideas into reality with our
              comprehensive mentorship program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 transition-all"
                onClick={() => (window.location.href = "/#contact")}
              >
                <Lightbulb className="h-5 w-5 mr-2" />
                Start Your Project Journey
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary transition-all"
                onClick={() =>
                  (window.location.href = "/schedule-consultation")
                }
              >
                Schedule Free Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FinalYearProjects;
