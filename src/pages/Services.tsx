import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, Award, Lightbulb, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const mainServices = [
    {
      icon: Code,
      title: "IT Training",
      description:
        "Comprehensive technology courses including web development, mobile apps, AI/ML, cloud computing, and cybersecurity. Our hands-on approach ensures you gain practical skills that are immediately applicable in the industry.",
      link: "/services/it-training",
    },
    {
      icon: Award,
      title: "Certifications",
      description:
        "Industry-recognized certifications in Python, AWS Cloud, Digital Marketing, and Ethical Hacking. Partner with leading technology companies to provide globally accepted credentials.",
      link: "/services/certifications",
    },
    {
      icon: Lightbulb,
      title: "Final Year Projects",
      description:
        "Expert guidance for Java, AI/ML, Web App, and Embedded system projects. Our mentors help you create innovative solutions that stand out to potential employers.",
      link: "/services/final-year-projects",
    },
    {
      icon: Users,
      title: "Digital Awareness Programs",
      description:
        "Community outreach programs for computer literacy, internet safety, and digital government services. Making technology accessible to everyone through education and training.",
      link: "/services/digital-awareness",
    },
  ];

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Page Header */}
        <section className="section-spacing-sm bg-tech-gradient text-white">
          <div className="container-responsive text-center">
            <h1 className="heading-xl mb-4">Our Services</h1>
            <p className="text-responsive opacity-90 max-w-3xl mx-auto">
              Comprehensive IT training and development services designed to
              empower youth with the digital skills needed for tomorrow's
              opportunities.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-spacing bg-background">
          <div className="container-responsive">
            <div className="grid-responsive grid-1-2 gap-6 lg:gap-8">
              {mainServices.map((service, index) => (
                <Card
                  key={index}
                  className="card-enhanced group flex flex-col h-full"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-3 bg-tech-gradient rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="heading-sm mb-3">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-responsive-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <div className="mt-auto">
                      <Button className="w-full btn-primary" asChild>
                        <Link to={service.link}>Explore Programs</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Start Your Tech Journey?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of students who have transformed their careers
                with our comprehensive IT training programs. Start your journey
                towards a successful tech career today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto sm:max-w-none">
                <Button
                  size="lg"
                  className="bg-tech-gradient hover:opacity-90 text-white transition-all hover:scale-105"
                  asChild
                >
                  <Link to="/auth/signup">Get Started Today</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105"
                  asChild
                >
                  <Link to="/schedule-consultation">
                    Schedule a Consultation
                  </Link>
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

export default Services;
