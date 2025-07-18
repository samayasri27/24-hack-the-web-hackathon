import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote, Star } from "lucide-react";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Web Developer at Tech Corp",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content:
        "KK Computers transformed my career! The hands-on training in React and Node.js helped me land my dream job. The instructors were incredibly supportive and the curriculum was industry-relevant.",
      rating: 5,
      program: "Web Development Program",
    },
    {
      name: "Rajesh Kumar",
      role: "AI Engineer at StartupX",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content:
        "The AI & Machine Learning bootcamp exceeded my expectations. I went from knowing basic programming to building neural networks in just 6 months. Now I'm working on cutting-edge AI projects!",
      rating: 5,
      program: "AI & ML Bootcamp",
    },
    {
      name: "Anita Patel",
      role: "Cybersecurity Analyst",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content:
        "The cybersecurity certification course was comprehensive and practical. I learned ethical hacking, network security, and incident response. KK Computers helped me transition into cybersecurity successfully.",
      rating: 5,
      program: "Cybersecurity Certification",
    },
    {
      name: "Vikram Singh",
      role: "Mobile App Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content:
        "Learning React Native and Flutter here was amazing! The project-based approach helped me build real apps. I now run my own mobile development startup with 3 apps on the Play Store.",
      rating: 5,
      program: "Mobile App Development",
    },
    {
      name: "Sarah Johnson",
      role: "Software Developer at TechCorp",
      image:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=150&h=150&fit=crop&crop=face",
      content:
        "KK Computers transformed my career. From a complete beginner to landing a software developer role at a top tech company - the journey has been incredible. The mentorship and hands-on training made all the difference.",
      rating: 5,
      program: "Full Stack Development",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <Carousel className="w-full">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <Card className="border-0 shadow-card bg-card">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <Quote className="h-8 w-8 text-primary mx-auto mb-4 opacity-50" />
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      "{testimonial.content}"
                    </p>
                    <div className="flex justify-center mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.name} - ${testimonial.role}`}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary/20 transition-transform duration-300 hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                    <div className="text-left">
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-primary font-medium">
                        {testimonial.program}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
