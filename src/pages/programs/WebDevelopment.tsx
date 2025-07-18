import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Clock, Users, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WebDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const modules = [
    "HTML5 & CSS3 Fundamentals",
    "JavaScript & ES6+ Features",
    "React.js Framework",
    "Node.js & Express.js",
    "Database Design (MongoDB/MySQL)",
    "RESTful API Development",
    "Version Control with Git",
    "Deployment & DevOps Basics",
  ];

  const skills = [
    "Frontend Development",
    "Backend Development",
    "Full-Stack Architecture",
    "Database Management",
    "API Integration",
    "Responsive Design",
    "Performance Optimization",
    "Modern Development Tools",
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
                Web Development Program
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Master modern web development from frontend to backend and
                become a full-stack developer
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
                  <Clock className="h-4 w-4 mr-2" />6 Months
                </div>
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
                  <Users className="h-4 w-4 mr-2" />
                  Beginner to Advanced
                </div>
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
                  <Award className="h-4 w-4 mr-2" />
                  Industry Certificate
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Overview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Program Overview
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
                <p className="text-lg leading-relaxed mb-6">
                  Our comprehensive Web Development Program is designed to
                  transform you from a complete beginner into a skilled
                  full-stack developer. This intensive 6-month course covers
                  everything from the fundamentals of HTML and CSS to advanced
                  React.js and Node.js development.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  You'll work on real-world projects, collaborate with fellow
                  students, and learn industry best practices that will prepare
                  you for a successful career in web development. Our hands-on
                  approach ensures you build a strong portfolio while mastering
                  the technologies that power today's web.
                </p>
                <p className="text-lg leading-relaxed">
                  Whether you're looking to start a new career, enhance your
                  current skills, or launch your own web development business,
                  this program provides the foundation and expertise you need to
                  succeed in the fast-paced world of web development.
                </p>
              </div>

              {/* Skills & Curriculum Grid */}
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

              {/* Target Audience */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Who Is This Program For?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="shadow-card border-0 text-center">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-foreground mb-3">
                        Career Changers
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Professionals looking to transition into the high-demand
                        field of web development
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="shadow-card border-0 text-center">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-foreground mb-3">
                        Students & Graduates
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Recent graduates or students wanting to enhance their
                        programming skills
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="shadow-card border-0 text-center">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-foreground mb-3">
                        Entrepreneurs
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Business owners who want to build their own websites and
                        web applications
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Career Benefits */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Career Impact & Benefits
                </h3>
                <div className="bg-secondary/50 p-8 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">
                        Career Opportunities
                      </h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Full-Stack Developer</li>
                        <li>• Frontend Developer</li>
                        <li>• Backend Developer</li>
                        <li>• Web Application Developer</li>
                        <li>• Freelance Web Developer</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">
                        Industry Advantages
                      </h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• High-demand skills worldwide</li>
                        <li>• Competitive salary potential</li>
                        <li>• Remote work opportunities</li>
                        <li>• Continuous learning & growth</li>
                        <li>• Creative problem-solving</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center bg-card p-8 rounded-lg shadow-card">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Start Your Web Development Journey?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Join our next batch and transform your career with in-demand
                  web development skills.
                </p>
                <Button
                  size="lg"
                  className="bg-tech-gradient hover:opacity-90 text-white transition-all hover:scale-105"
                  asChild
                >
                  <Link to="/course-registration">
                    Enroll Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Contact us through the "Get in Touch" section or call us
                  directly to secure your spot.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WebDevelopment;
