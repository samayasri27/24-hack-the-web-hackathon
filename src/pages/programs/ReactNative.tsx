import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Smartphone,
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

const ReactNative = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const courseDetails = {
    title: "React Native Development",
    duration: "4 months",
    price: "₹18,999",
    originalPrice: "₹26,999",
    rating: 4.7,
    enrolled: 156,
    level: "Intermediate",
    description:
      "Create native mobile apps for iOS and Android using React Native and modern development practices.",
    schedule: "Mon-Wed-Fri 8:00-10:00 PM",
    batchSize: "10-15 students",
  };

  const curriculum = [
    {
      module: "React Native Fundamentals",
      duration: "3 weeks",
      topics: [
        "React Native architecture and setup",
        "Components and JSX in mobile context",
        "Styling with StyleSheet and Flexbox",
        "Navigation between screens",
        "Handling user input and gestures",
      ],
    },
    {
      module: "Mobile UI Development",
      duration: "4 weeks",
      topics: [
        "Native UI components (View, Text, Image, ScrollView)",
        "Lists and data rendering (FlatList, SectionList)",
        "Forms and input validation",
        "Custom components and reusability",
        "Platform-specific design guidelines",
      ],
    },
    {
      module: "State Management & Navigation",
      duration: "3 weeks",
      topics: [
        "State management with Redux/Context",
        "React Navigation v6",
        "Tab navigation and drawer navigation",
        "Passing data between screens",
        "Deep linking and navigation patterns",
      ],
    },
    {
      module: "Native Features Integration",
      duration: "4 weeks",
      topics: [
        "Camera and photo library access",
        "GPS location and maps integration",
        "Push notifications setup",
        "Device storage (AsyncStorage)",
        "Biometric authentication",
      ],
    },
    {
      module: "API Integration & Performance",
      duration: "2 weeks",
      topics: [
        "REST API consumption",
        "HTTP requests with Fetch/Axios",
        "Error handling and loading states",
        "Performance optimization techniques",
        "Memory management and debugging",
      ],
    },
    {
      module: "Testing & Deployment",
      duration: "2 weeks",
      topics: [
        "Unit testing with Jest",
        "End-to-end testing with Detox",
        "Building for production",
        "App Store and Play Store deployment",
        "Code signing and app optimization",
      ],
    },
  ];

  const projects = [
    {
      title: "Social Media Mobile App",
      description:
        "Instagram-like app with photo sharing, comments, likes, and user profiles.",
      technologies: ["React Native", "Firebase", "Redux", "React Navigation"],
    },
    {
      title: "E-Commerce Mobile App",
      description:
        "Complete shopping app with product catalog, cart, payments, and order tracking.",
      technologies: [
        "React Native",
        "Stripe",
        "AsyncStorage",
        "Push Notifications",
      ],
    },
    {
      title: "Weather & Location App",
      description:
        "Real-time weather app with GPS integration and location-based forecasts.",
      technologies: ["React Native", "Weather API", "Maps", "Geolocation"],
    },
  ];

  const features = [
    "70+ hours of mobile development",
    "3 complete mobile applications",
    "iOS and Android deployment",
    "Real device testing experience",
    "App store submission guidance",
    "Professional portfolio development",
    "Industry mentor support",
    "Job placement assistance",
  ];

  const careerOpportunities = [
    { role: "Mobile App Developer", salary: "₹5-10 LPA", demand: "Very High" },
    {
      role: "React Native Developer",
      salary: "₹6-12 LPA",
      demand: "Very High",
    },
    { role: "Cross-platform Developer", salary: "₹7-14 LPA", demand: "High" },
    { role: "Frontend Mobile Developer", salary: "₹4-9 LPA", demand: "High" },
  ];

  const tools = [
    "Expo CLI",
    "Android Studio",
    "Xcode",
    "Firebase",
    "TestFlight",
    "React Navigation",
    "Redux DevTools",
    "Flipper",
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
                <Smartphone className="h-16 w-16 mx-auto mb-4" />
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
                      <Badge className="mt-2">Limited Time Offer</Badge>
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
                      <span>Platform:</span>
                      <span>iOS & Android</span>
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

export default ReactNative;
