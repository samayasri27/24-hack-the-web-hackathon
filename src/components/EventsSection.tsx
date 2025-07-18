import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

const EventsSection = () => {
  const featuredEvents = [
    {
      title: "Hack The Web",
      description:
        "A 48-hour hackathon focusing on web development solutions for real-world problems. Team up with fellow developers and create innovative web applications.",
      date: "August 15-17, 2024",
      time: "9:00 AM - 9:00 PM",
      location: "KK Computers Main Campus",
      participants: "150+ Participants",
      type: "Hackathon",
      featured: true,
    },
    {
      title: "AI & Machine Learning Bootcamp",
      description:
        "Intensive 3-day bootcamp covering fundamentals of AI and ML with hands-on projects and industry expert sessions.",
      date: "September 5-7, 2024",
      time: "10:00 AM - 6:00 PM",
      location: "Online & Hybrid",
      participants: "100+ Participants",
      type: "Bootcamp",
      featured: false,
    },
    {
      title: "Digital Literacy Community Drive",
      description:
        "Free community workshop aimed at bridging the digital divide by teaching basic computer skills to underserved communities.",
      date: "October 10, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Community Center",
      participants: "200+ Participants",
      type: "Community Workshop",
      featured: false,
    },
  ];

  return (
    <section id="events" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our exciting events, hackathons, and workshops designed to
            enhance your skills and connect you with like-minded tech
            enthusiasts.
          </p>
        </div>

        {/* Featured Events Grid */}
        <div className="grid-responsive grid-1-2-3 mb-12">
          {featuredEvents.map((event, index) => (
            <Card
              key={index}
              className={`group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 ${
                event.featured
                  ? "border-primary shadow-card-hover bg-gradient-to-br from-primary/5 to-primary/10"
                  : "border-0 shadow-card"
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event.featured
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {event.type}
                  </div>
                  {event.featured && (
                    <div className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full text-xs font-medium">
                      Featured
                    </div>
                  )}
                </div>
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                  {event.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground line-clamp-3">
                  {event.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-3 text-primary" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-3 text-primary" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-3 text-primary" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-3 text-primary" />
                    {event.participants}
                  </div>
                </div>
                <Button
                  className={`w-full transition-all hover:scale-105 ${
                    event.featured
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-tech-gradient hover:opacity-90 text-white"
                  }`}
                  asChild
                >
                  <Link to="/event-registration">Register Now</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Events Button */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-tech-gradient hover:opacity-90 text-white transition-all hover:scale-105"
            asChild
          >
            <Link to="/events">View All Events</Link>
          </Button>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-tech-gradient rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Don't Miss Out on Our Events!
            </h3>
            <p className="mb-8 max-w-2xl mx-auto opacity-90">
              Stay updated with our latest events, workshops, and hackathons.
              Subscribe to our newsletter and be the first to know about new
              opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="border-white/80 bg-white/10 text-white hover:bg-white hover:text-primary transition-all hover:scale-105"
                asChild
              >
                <Link to="/events">View All Events</Link>
              </Button>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 transition-all hover:scale-105"
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
