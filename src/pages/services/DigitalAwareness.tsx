import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Users,
  Monitor,
  Shield,
  Building,
  Heart,
  MapPin,
  Clock,
  CheckCircle,
  Star,
  BookOpen,
  Smartphone,
  Globe,
  Home,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const DigitalAwareness = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const communityPrograms = [
    {
      category: "Senior Citizens",
      icon: Heart,
      color: "bg-rose-500",
      targetAudience: "Adults 60+ years",
      programs: [
        {
          title: "Digital Banking & Online Payments",
          duration: "2 weeks",
          participants: "8-12 per batch",
          schedule: "Weekday mornings",
          description:
            "Learn to use internet banking, UPI payments, and digital wallets safely and confidently.",
          modules: [
            "Setting up mobile banking",
            "Understanding UPI and digital wallets",
            "Safe online transaction practices",
            "Handling common issues and security",
          ],
          outcomes: [
            "Independent online banking",
            "Confidence in digital payments",
            "Understanding of security measures",
            "Reduced dependency on others",
          ],
          freeOfCharge: true,
          location: "Community centers, Libraries",
        },
        {
          title: "Smartphone Basics & Communication",
          duration: "3 weeks",
          participants: "6-10 per batch",
          schedule: "Weekend sessions",
          description:
            "Master smartphone basics, video calling, and stay connected with family through technology.",
          modules: [
            "Basic smartphone navigation",
            "Making calls and sending messages",
            "Video calling with WhatsApp/Skype",
            "Using camera and photo sharing",
          ],
          outcomes: [
            "Comfortable smartphone usage",
            "Video calling with family",
            "Photo sharing and messaging",
            "Basic troubleshooting skills",
          ],
          freeOfCharge: true,
          location: "Local community halls",
        },
      ],
    },
    {
      category: "Rural Communities",
      icon: Home,
      color: "bg-green-500",
      targetAudience: "Rural residents, Farmers",
      programs: [
        {
          title: "Digital Agriculture & Weather Updates",
          duration: "1 week intensive",
          participants: "15-20 per batch",
          schedule: "Evening sessions",
          description:
            "Use technology for better farming practices, weather updates, and market information.",
          modules: [
            "Weather apps and agricultural forecasts",
            "Crop advisory through mobile apps",
            "Market price information access",
            "Government scheme applications",
          ],
          outcomes: [
            "Better crop planning",
            "Timely weather information",
            "Market price awareness",
            "Access to government benefits",
          ],
          freeOfCharge: true,
          location: "Village panchayat halls",
        },
        {
          title: "Women's Digital Empowerment",
          duration: "2 weeks",
          participants: "12-15 per batch",
          schedule: "Flexible timing",
          description:
            "Empower rural women with digital skills for education, health, and economic opportunities.",
          modules: [
            "Basic computer and internet skills",
            "Online health and education resources",
            "Digital payment and savings",
            "Online business and marketing basics",
          ],
          outcomes: [
            "Digital literacy for daily tasks",
            "Access to online services",
            "Economic empowerment opportunities",
            "Confidence in technology use",
          ],
          freeOfCharge: true,
          location: "Self-help group centers",
        },
      ],
    },
    {
      category: "Students & Youth",
      icon: GraduationCap,
      color: "bg-blue-500",
      targetAudience: "School/College students",
      programs: [
        {
          title: "Digital Skills for Academic Success",
          duration: "1 week",
          participants: "20-25 per batch",
          schedule: "After school hours",
          description:
            "Essential digital skills for academic research, online learning, and career preparation.",
          modules: [
            "Effective internet research techniques",
            "Online learning platforms usage",
            "Digital presentation skills",
            "Email etiquette and communication",
          ],
          outcomes: [
            "Improved academic research",
            "Better online learning skills",
            "Professional communication",
            "Digital presentation abilities",
          ],
          freeOfCharge: true,
          location: "Schools, Colleges",
        },
        {
          title: "Cyber Safety & Digital Citizenship",
          duration: "3 days",
          participants: "30-40 per batch",
          schedule: "Weekend workshops",
          description:
            "Learn about online safety, digital ethics, and responsible internet usage.",
          modules: [
            "Identifying online threats and scams",
            "Privacy settings and data protection",
            "Digital footprint management",
            "Cyberbullying prevention and response",
          ],
          outcomes: [
            "Safe internet browsing habits",
            "Privacy awareness",
            "Responsible social media use",
            "Confidence to report cyber issues",
          ],
          freeOfCharge: true,
          location: "Educational institutions",
        },
      ],
    },
    {
      category: "Small Business Owners",
      icon: Briefcase,
      color: "bg-orange-500",
      targetAudience: "Local entrepreneurs, Shop owners",
      programs: [
        {
          title: "Digital Business Essentials",
          duration: "1 week",
          participants: "10-15 per batch",
          schedule: "Evening sessions",
          description:
            "Transform your business with digital tools, online presence, and digital payments.",
          modules: [
            "Setting up digital payment systems",
            "Creating business social media presence",
            "Online inventory and customer management",
            "Digital marketing basics",
          ],
          outcomes: [
            "Digital payment acceptance",
            "Online business presence",
            "Customer database management",
            "Increased business visibility",
          ],
          freeOfCharge: true,
          location: "Business associations, Markets",
        },
        {
          title: "E-Commerce & Online Selling",
          duration: "2 weeks",
          participants: "8-12 per batch",
          schedule: "Flexible timing",
          description:
            "Learn to sell products online, manage e-commerce accounts, and reach wider customers.",
          modules: [
            "Setting up online store accounts",
            "Product photography and listing",
            "Order management and customer service",
            "Understanding online marketplace policies",
          ],
          outcomes: [
            "Online selling capabilities",
            "Professional product listings",
            "Customer service skills",
            "Expanded market reach",
          ],
          freeOfCharge: true,
          location: "Local business centers",
        },
      ],
    },
  ];

  const impactMetrics = [
    { icon: Users, number: "2,500+", label: "Community Members Trained" },
    { icon: MapPin, number: "45+", label: "Villages & Neighborhoods" },
    { icon: Star, number: "4.9/5", label: "Satisfaction Rating" },
    { icon: CheckCircle, number: "98%", label: "Completion Rate" },
  ];

  const partnerOrganizations = [
    "Local Government Bodies",
    "NGOs & Community Organizations",
    "Educational Institutions",
    "Self Help Groups",
    "Business Associations",
    "Healthcare Centers",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-16 bg-tech-gradient text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-6">
              <Users className="h-16 w-16 mx-auto mb-4" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Digital Awareness & Community Outreach
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Bridging the digital divide through free community programs that
              make technology accessible, relevant, and empowering for everyone
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 max-w-3xl mx-auto">
              {impactMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <metric.icon className="h-6 w-6 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{metric.number}</div>
                  <div className="text-sm opacity-90">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We believe that digital literacy is not a privilege but a
                necessity in today's world. Our mission is to ensure that every
                member of our community, regardless of age, background, or
                location, has access to the digital skills they need to thrive.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <BookOpen className="h-8 w-8 text-blue-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Accessible Education</h3>
                  <p className="text-sm text-muted-foreground">
                    Free, practical training designed for real-world application
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <Heart className="h-8 w-8 text-red-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Community Focused</h3>
                  <p className="text-sm text-muted-foreground">
                    Programs tailored to specific community needs and challenges
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <Globe className="h-8 w-8 text-green-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Inclusive Approach</h3>
                  <p className="text-sm text-muted-foreground">
                    Ensuring no one is left behind in the digital revolution
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Programs */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Community Programs</h2>
              <p className="text-lg text-muted-foreground">
                Specialized programs designed for different community groups,
                each addressing specific needs and challenges
              </p>
            </div>

            <Tabs defaultValue="0" className="w-full">
              <TabsList className="grid grid-cols-2 lg:grid-cols-4 w-full mb-8">
                {communityPrograms.map((category, index) => (
                  <TabsTrigger
                    key={index}
                    value={index.toString()}
                    className="flex items-center gap-2 text-xs"
                  >
                    <category.icon className="h-4 w-4" />
                    <span className="hidden sm:inline">
                      {category.category}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {communityPrograms.map((category, categoryIndex) => (
                <TabsContent
                  key={categoryIndex}
                  value={categoryIndex.toString()}
                >
                  <div className="mb-6 p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 ${category.color} rounded-lg`}>
                        <category.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">
                          {category.category}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Target: {category.targetAudience}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-6">
                    {category.programs.map((program, programIndex) => (
                      <Card
                        key={programIndex}
                        className="shadow-card hover:shadow-card-hover transition-all duration-300"
                      >
                        <CardHeader>
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <CardTitle className="text-xl mb-2">
                                {program.title}
                              </CardTitle>
                              <div className="flex flex-wrap gap-2">
                                {program.freeOfCharge && (
                                  <Badge className="bg-green-500 hover:bg-green-600">
                                    Free of Charge
                                  </Badge>
                                )}
                                <Badge variant="outline">
                                  <Clock className="h-3 w-3 mr-1" />
                                  {program.duration}
                                </Badge>
                                <Badge variant="outline">
                                  <Users className="h-3 w-3 mr-1" />
                                  {program.participants}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <p className="text-muted-foreground">
                            {program.description}
                          </p>
                        </CardHeader>

                        <CardContent className="space-y-6">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <BookOpen className="h-4 w-4" />
                                What You'll Learn
                              </h4>
                              <ul className="space-y-2">
                                {program.modules.map((module, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2 text-sm"
                                  >
                                    <CheckCircle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                                    <span>{module}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <Star className="h-4 w-4" />
                                Expected Outcomes
                              </h4>
                              <ul className="space-y-2">
                                {program.outcomes.map((outcome, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2 text-sm"
                                  >
                                    <CheckCircle className="h-3 w-3 text-blue-500 mt-1 flex-shrink-0" />
                                    <span>{outcome}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-muted rounded-lg">
                            <div>
                              <h5 className="font-semibold text-sm mb-1 flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                Schedule
                              </h5>
                              <p className="text-sm text-muted-foreground">
                                {program.schedule}
                              </p>
                            </div>
                            <div>
                              <h5 className="font-semibold text-sm mb-1 flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                Locations
                              </h5>
                              <p className="text-sm text-muted-foreground">
                                {program.location}
                              </p>
                            </div>
                          </div>

                          <Button
                            className="w-full bg-tech-gradient hover:opacity-90 text-white transition-all hover:scale-105"
                            onClick={() => (window.location.href = "/#contact")}
                          >
                            <Users className="h-4 w-4 mr-2" />
                            Register for Program
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Partnership & Collaboration */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Community Partnerships
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We collaborate with various organizations to reach every corner
                of our community
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {partnerOrganizations.map((partner, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white rounded-lg shadow-sm"
                  >
                    <div className="text-sm font-medium">{partner}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How to Get Involved */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">How to Get Involved</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join us in making digital literacy accessible to everyone in our
                community
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 text-center">
                  <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Volunteer</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Share your digital skills to help others in the community
                  </p>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </Card>
                <Card className="p-6 text-center">
                  <Building className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Partner Organization</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Collaborate with us to reach more community members
                  </p>
                  <Button variant="outline" size="sm">
                    Partner With Us
                  </Button>
                </Card>
                <Card className="p-6 text-center">
                  <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Sponsor Programs</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Support our mission through sponsorship and donations
                  </p>
                  <Button variant="outline" size="sm">
                    Support Us
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-tech-gradient text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Join Our Digital Community
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Be part of our mission to bridge the digital divide. Together, we
              can ensure that technology serves everyone in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 transition-all"
                onClick={() => (window.location.href = "/#contact")}
              >
                <Users className="h-5 w-5 mr-2" />
                Find Programs Near You
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary transition-all"
                onClick={() =>
                  (window.location.href = "/community/join-as-trainer")
                }
              >
                Become a Volunteer
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DigitalAwareness;
