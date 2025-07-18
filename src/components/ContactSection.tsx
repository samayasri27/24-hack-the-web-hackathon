import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MessageSquare, Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      reason: "",
      message: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const openWhatsApp = () => {
    const phoneNumber = "1234567890"; // Replace with actual WhatsApp number
    const message =
      "Hi! I'm interested in learning more about KK Computers programs.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our programs? Ready to start your tech journey?
            We're here to help you every step of the way.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid-responsive grid-1-2">
          {/* Left Column - Contact Form */}
          <div className="h-full">
            <Card className="shadow-card border-0 h-full">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MessageSquare className="h-6 w-6 mr-3 text-primary" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="h-full flex flex-col">
                <form onSubmit={handleSubmit} className="space-y-6 flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        placeholder="Your full name"
                        className="mt-2"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="your.email@example.com"
                        className="mt-2"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="reason">Reason for Contact</Label>
                    <Select
                      value={formData.reason}
                      onValueChange={(value) =>
                        handleInputChange("reason", value)
                      }
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select a reason" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="program-inquiry">
                          Program Inquiry
                        </SelectItem>
                        <SelectItem value="enrollment">
                          Enrollment Information
                        </SelectItem>
                        <SelectItem value="partnership">
                          Partnership Opportunity
                        </SelectItem>
                        <SelectItem value="mentorship">
                          Become a Mentor
                        </SelectItem>
                        <SelectItem value="donation">
                          Support/Donation
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex-1">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      placeholder="Tell us how we can help you..."
                      className="mt-2 min-h-[120px] resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all hover:scale-105"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Contact Info & Actions */}
          <div className="space-y-6 h-full flex flex-col">
            {/* Contact Information */}
            <Card className="shadow-card border-0 flex-1">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-muted-foreground">
                      +1 (555) 123-4567
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground">
                      info@kkcomputers.edu
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium">Address</div>
                    <div className="text-muted-foreground">
                      123 Tech Street
                      <br />
                      Digital City, DC 12345
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium">Office Hours</div>
                    <div className="text-muted-foreground">
                      Mon - Fri: 9:00 AM - 6:00 PM
                      <br />
                      Sat: 10:00 AM - 4:00 PM
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp Quick Contact */}
            <Card className="shadow-card border-0 bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-xl text-green-700">
                  Quick Chat on WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-600 mb-4">
                  Get instant answers to your questions! Chat with our team on
                  WhatsApp.
                </p>
                <Button
                  onClick={openWhatsApp}
                  className="w-full bg-green-500 hover:bg-green-600 text-white transition-all hover:scale-105"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
