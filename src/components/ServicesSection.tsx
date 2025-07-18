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

const ServicesSection = () => {
  const mainServices = [
    {
      icon: Code,
      title: "IT Training",
      description:
        "Comprehensive technology courses including web development, mobile apps, AI/ML, cloud computing, and cybersecurity.",
      link: "/services/it-training",
    },
    {
      icon: Award,
      title: "Certifications",
      description:
        "Industry-recognized certifications in Python, AWS Cloud, Digital Marketing, and Ethical Hacking.",
      link: "/services/certifications",
    },
    {
      icon: Lightbulb,
      title: "Final Year Projects",
      description:
        "Expert guidance for Java, AI/ML, Web App, and Embedded system projects with mentoring support.",
      link: "/services/final-year-projects",
    },
    {
      icon: Users,
      title: "Digital Awareness Programs",
      description:
        "Community outreach programs for computer literacy, internet safety, and digital government services.",
      link: "/services/digital-awareness",
    },
  ];

  return (
    <section id="services" className="section-spacing bg-secondary/50">
      <div className="container-responsive">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="heading-lg text-foreground mb-4">Our Services</h2>
          <p className="text-responsive text-muted-foreground max-w-3xl mx-auto">
            Comprehensive IT training and development services designed to
            empower youth with the digital skills needed for tomorrow's
            opportunities.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid-responsive grid-1-2-4 mb-12">
          {mainServices.map((service, index) => (
            <Card
              key={index}
              className="card-enhanced group flex flex-col h-full"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-3 p-3 bg-tech-gradient rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <CardDescription className="text-center mb-4 text-muted-foreground text-sm flex-grow">
                  {service.description}
                </CardDescription>
                <Button
                  variant="outline"
                  size="sm"
                  className="btn-outline w-full mt-auto"
                  asChild
                >
                  <Link to={service.link}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-tech-gradient hover:opacity-90 text-white transition-all hover:scale-105"
            asChild
          >
            <Link to="/services">View All Services</Link>
          </Button>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Tech Journey?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers with
              our comprehensive IT training programs. Start your journey towards
              a successful tech career today.
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
                <Link to="/schedule-consultation">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
