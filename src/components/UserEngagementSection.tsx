import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap, Users, Heart, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

const UserEngagementSection = () => {
  const userCategories = [
    {
      icon: GraduationCap,
      title: "Students",
      message:
        "Ready to launch your tech career? Join our comprehensive programs and learn from industry experts.",
      cta: "Join Programs",
      description:
        "Access cutting-edge courses, mentorship, and career guidance",
      color: "from-blue-500 to-blue-600",
      link: "/community/students",
    },
    {
      icon: Users,
      title: "Trainers",
      message:
        "Share your expertise and help shape the next generation of tech professionals.",
      cta: "Become a Mentor",
      description: "Guide students, share knowledge, and make a lasting impact",
      color: "from-green-500 to-green-600",
      link: "/community/trainers",
    },
    {
      icon: Heart,
      title: "Donors",
      message:
        "Support accessible education and help us bridge the digital divide in our community.",
      cta: "Support Education",
      description:
        "Fund scholarships and enable youth to access quality tech education",
      color: "from-pink-500 to-pink-600",
      link: "/community/donors",
    },
    {
      icon: Handshake,
      title: "Partners",
      message:
        "Collaborate with us to create innovative training programs and expand opportunities.",
      cta: "Collaborate with Us",
      description: "Build partnerships that drive technology education forward",
      color: "from-purple-500 to-purple-600",
      link: "/community/partners",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Join Our Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're a student, trainer, supporter, or partner, there's a
            place for you in our mission to empower youth through technology
            education.
          </p>
        </div>

        {/* User Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {userCategories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border-0 shadow-card overflow-hidden"
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`mx-auto mb-4 p-4 bg-gradient-to-br ${category.color} rounded-full w-fit group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-center mb-6 text-muted-foreground">
                  {category.message}
                </p>
                <Button
                  className="w-full bg-tech-gradient hover:opacity-90 transition-all group-hover:shadow-lg"
                  asChild
                >
                  <Link to={category.link}>{category.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Stats */}
        <div className="mt-20">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Our Growing Community
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  2000+
                </div>
                <div className="text-muted-foreground">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  50+
                </div>
                <div className="text-muted-foreground">Expert Trainers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  25+
                </div>
                <div className="text-muted-foreground">Community Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  100+
                </div>
                <div className="text-muted-foreground">
                  Scholarship Recipients
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserEngagementSection;
