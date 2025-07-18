import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Megaphone,
  Clock,
  Users,
  Award,
  ArrowRight,
  Target,
  BarChart,
  Globe,
  Smartphone,
} from "lucide-react";
import { Link } from "react-router-dom";

const DigitalMarketing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const modules = [
    "Digital Marketing Fundamentals",
    "Search Engine Optimization (SEO)",
    "Search Engine Marketing (SEM) & Google Ads",
    "Social Media Marketing",
    "Content Marketing & Strategy",
    "Email Marketing Automation",
    "Analytics & Performance Tracking",
    "Influencer Marketing",
    "E-commerce Marketing",
    "Marketing Campaign Management",
  ];

  const skills = [
    "SEO Strategy & Implementation",
    "Google Ads & PPC Management",
    "Social Media Strategy",
    "Content Creation & Marketing",
    "Email Marketing Campaigns",
    "Analytics & Data Interpretation",
    "Brand Building & Management",
    "Conversion Rate Optimization",
  ];

  const courseFeatures = [
    {
      icon: Clock,
      title: "Duration",
      description: "12 weeks intensive program",
    },
    {
      icon: Users,
      title: "Class Size",
      description: "Maximum 25 students per batch",
    },
    {
      icon: Award,
      title: "Certification",
      description: "Industry-recognized certificate",
    },
    {
      icon: Target,
      title: "Projects",
      description: "3+ real-world marketing projects",
    },
  ];

  const careerOpportunities = [
    "Digital Marketing Specialist",
    "SEO Analyst",
    "Social Media Manager",
    "Content Marketing Manager",
    "PPC Specialist",
    "Digital Marketing Manager",
    "E-commerce Marketing Specialist",
    "Marketing Analytics Specialist",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-tech-gradient text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Megaphone className="h-16 w-16 mx-auto mb-4" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Digital Marketing Program
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Master digital marketing strategies, social media marketing, and
                online brand building. Learn to create campaigns that drive
                engagement and conversions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 transition-all hover:scale-105"
                  asChild
                >
                  <Link to="/course-registration">
                    Enroll Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary transition-colors"
                  onClick={() => (window.location.href = "/#contact")}
                >
                  Contact Admissions
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Course Features */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Course Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {courseFeatures.map((feature, index) => (
                <Card key={index} className="text-center border-0 shadow-card">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-tech-gradient rounded-full w-fit">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Curriculum
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Globe className="h-6 w-6 mr-2 text-primary" />
                      Course Modules
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {modules.map((module, index) => (
                        <li key={index} className="flex items-start">
                          <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-white text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">
                            {index + 1}
                          </div>
                          <span className="text-muted-foreground">
                            {module}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <BarChart className="h-6 w-6 mr-2 text-primary" />
                      Skills You'll Learn
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {skills.map((skill, index) => (
                        <li key={index} className="flex items-center">
                          <div className="bg-green-500 rounded-full w-2 h-2 mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Career Opportunities</h2>
              <p className="text-lg text-muted-foreground mb-12">
                Digital marketing is one of the fastest-growing career fields.
                Our graduates work at:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {careerOpportunities.map((career, index) => (
                  <div
                    key={index}
                    className="bg-card p-4 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300"
                  >
                    <div className="text-center">
                      <Smartphone className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="font-medium text-foreground">{career}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enrollment CTA */}
        <section className="py-16 bg-tech-gradient text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Launch Your Digital Marketing Career?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Join our comprehensive digital marketing program and master the
                skills needed to succeed in today's digital economy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 transition-all hover:scale-105"
                  asChild
                >
                  <Link to="/course-registration">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary transition-colors"
                  onClick={() => (window.location.href = "/#contact")}
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DigitalMarketing;
