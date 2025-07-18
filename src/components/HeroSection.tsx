import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, Target } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden"
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-blue/20"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Announcement Banner */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8 animate-fade-in">
            <span className="text-sm font-medium">
              🎉 Admissions Open for August Batch!
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            Empowering Youth with
            <span className="block text-primary-blue-light">
              Digital Skills
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-slide-up">
            KK Computers is dedicated to providing accessible, high-quality IT
            training that prepares young minds for the digital future. Join
            thousands who have transformed their careers with us.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in max-w-sm mx-auto sm:max-w-none">
            <Button
              size="lg"
              onClick={() => scrollToSection("services")}
              className="bg-white text-primary hover:bg-white/90 transition-all duration-300 hover:scale-105 group"
            >
              Explore Programs
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white/80 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
            >
              <Link to="/auth/signup">Get Started Today</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-scale-in">
            <div className="flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 mb-3">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold">2000+</div>
              <div className="text-white/80">Students Trained</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 mb-3">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold">50+</div>
              <div className="text-white/80">Certifications</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 mb-3">
                <Target className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold">95%</div>
              <div className="text-white/80">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
