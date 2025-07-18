import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Clock, Users, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const MobileAppDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const modules = [
    "Mobile Development Fundamentals",
    "React Native Framework",
    "Flutter Development",
    "Native iOS (Swift) Basics",
    "Native Android (Kotlin) Basics",
    "Mobile UI/UX Design Principles",
    "App Store Deployment",
    "Mobile Backend Integration",
  ];

  const skills = [
    "Cross-Platform Development",
    "React Native",
    "Flutter Framework",
    "Mobile UI Design",
    "App Store Optimization",
    "Mobile Backend APIs",
    "Performance Optimization",
    "App Publishing",
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
                Mobile App Development Program
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Build powerful mobile applications for iOS and Android using
                modern cross-platform technologies
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
                  <Clock className="h-4 w-4 mr-2" />5 Months
                </div>
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
                  <Users className="h-4 w-4 mr-2" />
                  Intermediate Level
                </div>
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
                  <Award className="h-4 w-4 mr-2" />
                  Industry Certificate
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Program Overview
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
                <p className="text-lg leading-relaxed mb-6">
                  The mobile app development landscape is booming, with billions
                  of smartphones worldwide creating endless opportunities for
                  innovative applications. Our Mobile App Development Program
                  teaches you to build high-quality, cross-platform mobile
                  applications using React Native and Flutter.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  You'll learn to create apps that run seamlessly on both iOS
                  and Android devices, mastering the art of mobile user
                  interface design, performance optimization, and app store
                  deployment. Our curriculum covers both theoretical concepts
                  and practical implementation through real-world projects.
                </p>
                <p className="text-lg leading-relaxed">
                  Whether you want to develop the next viral social media app, a
                  revolutionary business solution, or freelance as a mobile
                  developer, this program provides the technical expertise and
                  industry insights you need to succeed in mobile development.
                </p>
              </div>

              {/* Skills & Curriculum */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <Card className="shadow-card border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Skills You'll Master
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {skills.map((skill, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-card border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Curriculum Modules
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {modules.map((module, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground">
                            {module}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* CTA */}
              <div className="text-center bg-card p-8 rounded-lg shadow-card">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Launch Your Mobile Development Career
                </h3>
                <p className="text-muted-foreground mb-6">
                  Join the millions of mobile developers creating the apps that
                  shape our digital world.
                </p>
                <Button
                  size="lg"
                  className="bg-tech-gradient hover:opacity-90 text-white transition-all hover:scale-105"
                  onClick={scrollToContact}
                >
                  Enroll Now
                  <ArrowRight className="ml-2 h-4 w-4" />
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

export default MobileAppDevelopment;
