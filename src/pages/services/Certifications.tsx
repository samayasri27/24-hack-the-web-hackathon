import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  Code2,
  Cloud,
  TrendingUp,
  Shield,
  Clock,
  Users,
  CheckCircle,
  Star,
  DollarSign,
} from "lucide-react";
import { Link } from "react-router-dom";

const Certifications = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const certifications = [
    {
      icon: Code2,
      title: "Python Programming Certification",
      level: "Beginner to Advanced",
      duration: "6 months",
      price: "₹12,999",
      rating: 4.8,
      enrolled: 245,
      description:
        "Comprehensive Python certification covering basics to advanced concepts including data structures, OOP, web frameworks, and data analysis.",
      highlights: [
        "Python fundamentals and syntax",
        "Object-oriented programming",
        "Django/Flask web frameworks",
        "Data analysis with Pandas/NumPy",
        "API development and testing",
      ],
      industry: "Software Development",
      jobRoles: ["Python Developer", "Backend Developer", "Data Analyst"],
      link: "/programs/python-certification",
    },
    {
      icon: Cloud,
      title: "AWS Cloud Practitioner Certification",
      level: "Intermediate",
      duration: "4 months",
      price: "₹15,999",
      rating: 4.9,
      enrolled: 189,
      description:
        "Official AWS certification preparation covering cloud architecture, deployment strategies, security, and cost optimization.",
      highlights: [
        "AWS core services and architecture",
        "Cloud security best practices",
        "Cost management and optimization",
        "Deployment and monitoring",
        "Real-world project implementation",
      ],
      industry: "Cloud Computing",
      jobRoles: ["Cloud Engineer", "DevOps Engineer", "Solutions Architect"],
      link: "/programs/aws-certification",
    },
    {
      icon: TrendingUp,
      title: "Google Ads & Analytics Certification",
      level: "Beginner to Intermediate",
      duration: "3 months",
      price: "₹9,999",
      rating: 4.7,
      enrolled: 156,
      description:
        "Master digital marketing with Google Ads, Analytics, SEO strategies, and social media marketing for comprehensive online presence.",
      highlights: [
        "Google Ads campaign management",
        "Google Analytics setup and analysis",
        "SEO optimization techniques",
        "Social media marketing strategies",
        "Content marketing and conversion",
      ],
      industry: "Digital Marketing",
      jobRoles: ["Digital Marketing Specialist", "SEO Analyst", "PPC Manager"],
      link: "/programs/digital-marketing-certification",
    },
    {
      icon: Shield,
      title: "Certified Ethical Hacker (CEH)",
      level: "Advanced",
      duration: "5 months",
      price: "₹18,999",
      rating: 4.9,
      enrolled: 98,
      description:
        "Develop cybersecurity expertise through ethical hacking techniques, penetration testing, and security assessment methodologies.",
      highlights: [
        "Ethical hacking methodologies",
        "Network penetration testing",
        "Web application security",
        "Security assessment tools",
        "Incident response procedures",
      ],
      industry: "Cybersecurity",
      jobRoles: ["Ethical Hacker", "Security Analyst", "Penetration Tester"],
      link: "/programs/ethical-hacking-certification",
    },
  ];

  const certificationBenefits = [
    {
      icon: Award,
      title: "Industry Recognition",
      description:
        "Globally accepted certifications recognized by top employers",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description:
        "Average 30-40% salary increase after certification completion",
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "One-on-one guidance from industry professionals",
    },
    {
      icon: CheckCircle,
      title: "Job Placement",
      description: "90% placement rate within 6 months of certification",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-16 bg-tech-gradient text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-6">
              <Award className="h-16 w-16 mx-auto mb-4" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Professional Certification Programs
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Industry-recognized certifications that validate your expertise
              and accelerate your career growth in competitive tech markets
            </p>
            <div className="flex justify-center gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm opacity-90">
                  Certified Professionals
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">90%</div>
                <div className="text-sm opacity-90">Job Placement Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">4.8⭐</div>
                <div className="text-sm opacity-90">Average Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Our Certifications?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certificationBenefits.map((benefit, index) => (
                <div key={index} className="text-center p-6">
                  <div className="mx-auto mb-4 p-3 bg-tech-gradient rounded-full w-fit">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Available Certification Programs
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose from our comprehensive range of certification programs
                designed to match industry standards and employer requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border-0 shadow-card"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-tech-gradient rounded-lg">
                          <cert.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <Badge variant="secondary" className="mb-2">
                            {cert.level}
                          </Badge>
                          <CardTitle className="text-xl">
                            {cert.title}
                          </CardTitle>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{cert.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span className="font-semibold text-green-600">
                          {cert.price}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span>{cert.rating} rating</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{cert.enrolled} enrolled</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{cert.description}</p>

                    <div>
                      <h4 className="font-semibold mb-2">
                        Key Learning Areas:
                      </h4>
                      <ul className="space-y-1">
                        {cert.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm"
                          >
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 gap-2">
                      <div>
                        <span className="font-semibold text-sm">
                          Industry:{" "}
                        </span>
                        <Badge variant="outline">{cert.industry}</Badge>
                      </div>
                      <div>
                        <span className="font-semibold text-sm">
                          Career Paths:{" "}
                        </span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {cert.jobRoles.map((role, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="text-xs"
                            >
                              {role}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Button
                      className="w-full bg-tech-gradient hover:opacity-90 text-white transition-all hover:scale-105 mt-4"
                      asChild
                    >
                      <Link to={cert.link}>Enroll Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-tech-gradient text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Certified?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have advanced their careers
              with our industry-recognized certification programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 transition-all"
                onClick={() => (window.location.href = "/#contact")}
              >
                Talk to Counselor
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary transition-all"
                onClick={() => (window.location.href = "/course-registration")}
              >
                Browse All Programs
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Certifications;
