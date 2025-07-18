import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container-responsive">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="nav-link text-xl md:text-2xl font-bold text-primary"
            >
              KK Computers
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`nav-link ${isActive("/") ? "text-primary font-medium" : "text-foreground"}`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`nav-link ${isActive("/services") ? "text-primary font-medium" : "text-foreground"}`}
            >
              Services
            </Link>
            <Link
              to="/events"
              className={`nav-link ${isActive("/events") ? "text-primary font-medium" : "text-foreground"}`}
            >
              Events
            </Link>
            <button
              onClick={() => scrollToSection("about")}
              className="nav-link text-foreground"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="nav-link text-foreground"
            >
              Contact
            </button>
            <Button asChild className="btn-primary">
              <Link to="/course-registration">Get Started</Link>
            </Button>
            <Button variant="outline" size="sm" asChild className="btn-outline">
              <Link to="/auth/signin">Sign In</Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`text-left transition-colors ${isActive("/") ? "text-primary font-medium" : "text-foreground hover:text-primary"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className={`text-left transition-colors ${isActive("/services") ? "text-primary font-medium" : "text-foreground hover:text-primary"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/events"
                className={`text-left transition-colors ${isActive("/events") ? "text-primary font-medium" : "text-foreground hover:text-primary"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
              <Button
                asChild
                className="w-fit btn-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link to="/course-registration">Get Started</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
