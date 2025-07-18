import { Award, Users, Lightbulb, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TestimonialCarousel from "./TestimonialCarousel";

const AboutSection = () => {
  const reasons = [
    {
      icon: Award,
      title: "Expert Instructors",
      description:
        "Learn from industry professionals with years of real-world experience in cutting-edge technologies.",
    },
    {
      icon: Users,
      title: "Community-Focused",
      description:
        "Join a supportive learning community that believes in empowering every individual to reach their potential.",
    },
    {
      icon: Lightbulb,
      title: "Practical Learning",
      description:
        "Hands-on projects and real-world applications ensure you graduate with job-ready skills.",
    },
    {
      icon: Heart,
      title: "Affordable Excellence",
      description:
        "Quality education shouldn't break the bank. We offer competitive pricing with flexible payment options.",
    },
  ];

  return (
    <section id="about" className="section-spacing bg-secondary/30">
      <div className="container-responsive">
        {/* Mission Statement */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="heading-lg text-foreground mb-6">
            About KK Computers
          </h2>
          <p className="text-responsive text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            At KK Computers, we believe that technology should be accessible to
            everyone. Our mission is to bridge the digital divide by providing
            high-quality, affordable IT training that empowers youth to build
            successful careers in technology. Since our founding, we've helped
            thousands of students transform their lives through comprehensive
            tech education.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h3 className="heading-md text-center text-foreground mb-12">
            Why Choose KK Computers?
          </h3>
          <div className="grid-responsive grid-1-2-4">
            {reasons.map((reason, index) => (
              <Card key={index} className="card-enhanced group text-center">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 p-3 bg-tech-gradient rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                    <reason.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Success Stories
          </h3>
          <TestimonialCarousel />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
