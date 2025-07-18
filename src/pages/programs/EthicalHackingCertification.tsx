import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Clock,
  Users,
  CheckCircle,
  Star,
  Award,
  BookOpen,
  Target,
  Calendar,
  DollarSign,
} from "lucide-react";

const EthicalHackingCertification = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const courseDetails = {
    title: "Certified Ethical Hacker (CEH)",
    duration: "5 months",
    price: "₹18,999",
    originalPrice: "₹26,999",
    rating: 4.9,
    enrolled: 98,
    level: "Advanced",
    description:
      "Develop cybersecurity expertise through ethical hacking techniques and penetration testing.",
  };

  const curriculum = [
    {
      module: "Introduction to Ethical Hacking",
      duration: "2 weeks",
      topics: [
        "Ethical hacking fundamentals",
        "Legal and ethical guidelines",
        "Types of hackers and attacks",
        "Security assessment methodologies",
      ],
    },
    {
      module: "Footprinting and Reconnaissance",
      duration: "3 weeks",
      topics: [
        "Information gathering techniques",
        "Network reconnaissance",
        "Social engineering basics",
        "OSINT (Open Source Intelligence)",
      ],
    },
    {
      module: "Network Penetration Testing",
      duration: "4 weeks",
      topics: [
        "Network scanning and enumeration",
        "Vulnerability assessment",
        "Exploitation techniques",
        "Post-exploitation activities",
      ],
    },
    {
      module: "Web Application Security",
      duration: "4 weeks",
      topics: [
        "OWASP Top 10 vulnerabilities",
        "SQL injection attacks",
        "Cross-site scripting (XSS)",
        "Web application testing tools",
      ],
    },
    {
      module: "Wireless Network Security",
      duration: "3 weeks",
      topics: [
        "Wireless security protocols",
        "Wi-Fi penetration testing",
        "Bluetooth hacking",
        "Mobile device security",
      ],
    },
    {
      module: "Incident Response & Reporting",
      duration: "4 weeks",
      topics: [
        "Digital forensics basics",
        "Incident response procedures",
        "Report writing and documentation",
        "CEH exam preparation",
      ],
    },
  ];

  const features = [
    "CEH certification preparation",
    "Virtual lab environment",
    "Real penetration testing",
    "Industry-standard tools",
    "Legal framework training",
    "Job placement assistance",
  ];

  const careerOpportunities = [
    { role: "Ethical Hacker", salary: "₹6-12 LPA", demand: "Very High" },
    { role: "Security Analyst", salary: "₹5-10 LPA", demand: "Very High" },
    { role: "Penetration Tester", salary: "₹7-15 LPA", demand: "High" },
    { role: "Security Consultant", salary: "₹8-18 LPA", demand: "High" },
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
                <Shield className="h-16 w-16 mx-auto mb-4" />
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
                      <Badge className="mt-2">CEH Exam Voucher Included</Badge>
                    </div>
                    <Button className="w-full bg-tech-gradient hover:opacity-90 text-white">
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
                      <span>Format:</span>
                      <span>Online + Virtual Labs</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Certificate:</span>
                      <span>CEH Official</span>
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

export default EthicalHackingCertification;
