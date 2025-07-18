
import { Button } from '@/components/ui/button';
import { MessageSquare, Linkedin, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = "1234567890"; // Replace with actual WhatsApp number
    const message = "Hi! I'm interested in learning more about KK Computers programs.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: MessageSquare,
      href: '#',
      onClick: openWhatsApp,
      color: 'hover:text-green-500'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/company/kkcomputers',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://facebook.com/kkcomputers',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com/kkcomputers',
      color: 'hover:text-pink-500'
    }
  ];

  const navigationLinks = [
    { name: 'Home', sectionId: 'home' },
    { name: 'Services', sectionId: 'services' },
    { name: 'Events', sectionId: 'events' },
    { name: 'About', sectionId: 'about' },
    { name: 'Contact', sectionId: 'contact' }
  ];

  const serviceLinks = [
    { name: 'IT Training', path: '/services/it-training' },
    { name: 'Certifications', path: '/services/certifications' },
    { name: 'Final Year Projects', path: '/services/final-year-projects' },
    { name: 'Digital Awareness Programs', path: '/services/digital-awareness' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/legal/privacy-policy' },
    { name: 'Terms of Service', path: '/legal/terms-of-service' },
    { name: 'Cookie Policy', path: '/legal/cookie-policy' }
  ];

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">KK Computers</h3>
            <p className="text-gray-300 mb-6">
              Empowering youth with digital skills for a brighter future. 
              Join our mission to bridge the digital divide through accessible, 
              high-quality technology education.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                info@kkcomputers.edu
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                123 Tech Street, Digital City
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.sectionId)}
                    className="text-gray-300 hover:text-white transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Subscribe to our newsletter for the latest updates on programs, 
              events, and opportunities.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-primary"
              />
              <Button className="w-full bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Social Links & Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Media Links */}
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  onClick={social.onClick ? (e) => { e.preventDefault(); social.onClick(); } : undefined}
                  className={`text-gray-300 transition-colors ${social.color}`}
                  target={social.href !== '#' ? '_blank' : undefined}
                  rel={social.href !== '#' ? 'noopener noreferrer' : undefined}
                  aria-label={social.name}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm text-gray-300">
              {legalLinks.map((legal) => (
                <Link
                  key={legal.name}
                  to={legal.path}
                  className="hover:text-white transition-colors"
                >
                  {legal.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} KK Computers. All rights reserved. | 
              Empowering youth through technology education.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
