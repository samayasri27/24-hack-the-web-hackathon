import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Clock,
  Users,
  CheckCircle,
  Star,
  Award,
  BookOpen,
  Target,
  Calendar,
  DollarSign,
  Monitor,
} from "lucide-react";

const MERNStack = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const courseDetails = {
    title: "MERN Stack Development",
    duration: "6 months",
    price: "₹25,999",
    originalPrice: "₹35,999",
    rating: 4.9,
    enrolled: 342,
    level: "Beginner to Advanced",
    description:
      "Master the complete MERN stack (MongoDB, Express.js, React, Node.js) and build production-ready web applications.",
    schedule: "Mon-Wed-Fri 7:00-9:00 PM",
    batchSize: "15-20 students",
  };

  const curriculum = [
    {
      module: "HTML5, CSS3 & JavaScript ES6+",
      duration: "4 weeks",
      topics: [
        "Modern HTML5 semantic elements",
        "Advanced CSS3 with Flexbox & Grid",
        "JavaScript ES6+ features",
        "DOM manipulation and events",
        "Responsive web design principles",
      ],
    },
    {
      module: "React.js Fundamentals",
      duration: "6 weeks",
      topics: [
        "Component-based architecture",
        "JSX syntax and Virtual DOM",
        "Props, state, and lifecycle methods",
        "React Hooks (useState, useEffect, custom hooks)",
        "Context API for state management",
      ],
    },
    {
      module: "Advanced React & Frontend",
      duration: "4 weeks",
      topics: [
        "React Router for navigation",
        "Form handling and validation",
        "HTTP requests with Axios",
        "State management with Redux",
        "Testing with Jest and React Testing Library",
      ],
    },
    {
      module: "Node.js & Express.js Backend",
      duration: "6 weeks",
      topics: [
        "Node.js runtime environment",
        "Express.js framework setup",
        "RESTful API design and development",
        "Middleware and error handling",
        "Authentication with JWT tokens",
      ],
    },
    {
      module: "MongoDB & Database Design",
      duration: "3 weeks",
      topics: [
        "NoSQL database concepts",
        "MongoDB CRUD operations",
        "Mongoose ODM for data modeling",
        "Database relationships and indexing",
        "Data validation and aggregation",
      ],
    },
    {
      module: "Full Stack Integration & Deployment",
      duration: "3 weeks",
      topics: [
        "Frontend-backend integration",
        "File upload and image handling",
        "Payment gateway integration",
        "Cloud deployment (Heroku, Netlify)",
        "CI/CD pipeline setup",
      ],
    },
  ];

  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "Full-featured online store with user authentication, product management, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    },
    {
      title: "Social Media Platform",
      description:
        "Real-time social platform with posts, comments, likes, and user profiles.",
      technologies: ["React", "Express", "Socket.io", "Cloudinary"],
    },
    {
      title: "Task Management App",
      description:
        "Project management tool with team collaboration, task assignment, and progress tracking.",
      technologies: ["React", "Node.js", "MongoDB", "JWT Auth"],
    },
    {
      title: "Blog Management System",
      description:
        "Content management system with WYSIWYG editor, SEO optimization, and admin panel.",
      technologies: ["React", "Express", "MongoDB", "Rich Text Editor"],
    },
    {
      title: "Real Estate Platform",
      description:
        "Property listing platform with search filters, virtual tours, and agent management.",
      technologies: ["React", "Node.js", "MongoDB", "Maps API"],
    },
  ];

  const features = [
    "100+ hours of hands-on coding",
    "5 major projects in portfolio",
    "Industry mentor guidance",
    "Job placement assistance",
    "Lifetime course access",
    "Certificate of completion",
    "Live project deployment",
    "Code review sessions",
    "Interview preparation",
    "GitHub portfolio development",
  ];

  const careerOpportunities = [
    { role: "Full Stack Developer", salary: "₹6-12 LPA", demand: "Very High" },
    { role: "Frontend Developer", salary: "₹4-9 LPA", demand: "Very High" },
    { role: "Backend Developer", salary: "₹5-10 LPA", demand: "High" },
    { role: "MERN Stack Developer", salary: "₹7-15 LPA", demand: "Very High" },
  ];

  const tools = [
    "VS Code",
    "Git & GitHub",
    "MongoDB Compass",
    "Postman",
    "Chrome DevTools",
    "Heroku",
    "Netlify",
    "AWS S3",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-tech-gradient text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6">
                <Code className="h-16 w-16 mx-auto mb-4" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {courseDetails.title}
              </h1>
              <p className="text-xl opacity-90 mb-8">
                {courseDetails.description}
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold">
                    {courseDetails.duration}
                  </div>
                  <div className="text-sm opacity-90">Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">
                    {courseDetails.enrolled}
                  </div>
                  <div className="text-sm opacity-90">Students Enrolled</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">
                    {courseDetails.rating}⭐
                  </div>
                  <div className="text-sm opacity-90">Rating</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100 transition-all"
                  onClick={() =>
                    (window.location.href = "/course-registration")
                  }
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Enroll Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary transition-all"
                  onClick={() => (window.location.href = "/#contact")}
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Course Curriculum
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {curriculum.map((module, index) => (
                        <div
                          key={index}
                          className="border-l-4 border-primary pl-4"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-lg">
                              {module.module}
                            </h3>
                            <Badge variant="secondary">{module.duration}</Badge>
                          </div>
                          <ul className="space-y-1">
                            {module.topics.map((topic, i) => (
                              <li
                                key={i}
                                className="flex items-center gap-2 text-sm text-muted-foreground"
                              >
                                <CheckCircle className="h-3 w-3 text-green-500" />
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Monitor className="h-5 w-5" />
                      Portfolio Projects
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {projects.map((project, index) => (
                        <div key={index} className="p-4 border rounded-lg">
                          <h4 className="font-semibold mb-2">
                            {project.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            {project.description}
                          </p>
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
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      Career Opportunities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {careerOpportunities.map((career, index) => (
                        <div key={index} className="p-4 border rounded-lg">
                          <h4 className="font-semibold">{career.role}</h4>
                          <p className="text-sm text-muted-foreground">
                            Salary: {career.salary}
                          </p>
                          <Badge
                            variant={
                              career.demand === "Very High"
                                ? "default"
                                : "secondary"
                            }
                            className="mt-2"
                          >
                            {career.demand} Demand
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5" />
                      Course Pricing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-green-600">
                        {courseDetails.price}
                      </div>
                      <div className="text-sm text-muted-foreground line-through">
                        {courseDetails.originalPrice}
                      </div>
                      <Badge className="mt-2">30% Early Bird Discount</Badge>
                    </div>
                    <Button
                      className="w-full bg-tech-gradient hover:opacity-90 text-white"
                      onClick={() =>
                        (window.location.href = "/course-registration")
                      }
                    >
                      Enroll Now
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="h-5 w-5" />
                      Course Features
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-sm"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Tools & Technologies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {tools.map((tool, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Course Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Level:</span>
                      <span>{courseDetails.level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span>{courseDetails.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Schedule:</span>
                      <span>{courseDetails.schedule}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Batch Size:</span>
                      <span>{courseDetails.batchSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Format:</span>
                      <span>Online + Offline</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Certificate:</span>
                      <span>Industry Recognized</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MERNStack;
