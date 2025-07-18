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
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Events = () => {
  const upcomingEvents = [
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
      title: "Mobile App Development Workshop",
      description:
        "Learn to build cross-platform mobile applications using React Native and Flutter in this comprehensive workshop.",
      date: "September 20-21, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "KK Computers Lab",
      participants: "80+ Participants",
      type: "Workshop",
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

  const pastEvents = [
    {
      title: "Python Programming Bootcamp",
      description:
        "Comprehensive 5-day bootcamp covering Python fundamentals, web frameworks, and data analysis.",
      date: "June 10-14, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "KK Computers Main Campus",
      participants: "120+ Participants",
      type: "Bootcamp",
      featured: false,
    },
    {
      title: "Web Development Challenge",
      description:
        "24-hour coding challenge where participants built responsive websites for local businesses.",
      date: "May 25-26, 2024",
      time: "10:00 AM - 10:00 AM",
      location: "Online",
      participants: "200+ Participants",
      type: "Challenge",
      featured: false,
    },
    {
      title: "Cybersecurity Awareness Workshop",
      description:
        "Educational workshop covering digital security best practices, password management, and safe browsing.",
      date: "April 15, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Community Hall",
      participants: "150+ Participants",
      type: "Workshop",
      featured: false,
    },
  ];

  const renderEventCard = (event: any, isPast = false) => (
    <Card
      key={event.title}
      className={`group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 ${
        event.featured
          ? "border-primary shadow-card-hover bg-gradient-to-br from-primary/5 to-primary/10"
          : "border-0 shadow-card"
      } ${isPast ? "opacity-75" : ""}`}
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
          {event.featured && !isPast && (
            <div className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full text-xs font-medium">
              Featured
            </div>
          )}
          {isPast && (
            <div className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium">
              Completed
            </div>
          )}
        </div>
        <CardTitle className="text-xl md:text-2xl mb-2 group-hover:text-primary transition-colors">
          {event.title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
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
        {isPast ? (
          <Button
            className="w-full bg-muted text-muted-foreground cursor-not-allowed"
            disabled
          >
            Event Completed
          </Button>
        ) : (
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
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-16 bg-tech-gradient text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Events & Workshops
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Join our exciting events, hackathons, and workshops designed to
              enhance your skills and connect you with like-minded tech
              enthusiasts.
            </p>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Upcoming Events
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {upcomingEvents.map((event) => renderEventCard(event))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Past Events
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {pastEvents.map((event) => renderEventCard(event, true))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
