
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Clock, Users, Award, ArrowRight } from 'lucide-react';

const Cybersecurity = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const modules = [
    "Network Security Fundamentals",
    "Ethical Hacking & Penetration Testing",
    "Digital Forensics",
    "Incident Response & Management",
    "Risk Assessment & Management",
    "Security Compliance & Auditing",
    "Cloud Security",
    "Cybersecurity Law & Ethics"
  ];

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-tech-gradient text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6">
                <Shield className="h-16 w-16 mx-auto mb-4" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Cybersecurity Program
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Protect digital assets and become a cybersecurity expert in our comprehensive security training program
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
                  <Clock className="h-4 w-4 mr-2" />
                  6 Months
                </div>
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
                  <Users className="h-4 w-4 mr-2" />
                  Intermediate Level
                </div>
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
                  <Award className="h-4 w-4 mr-2" />
                  Industry Certificate
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
                In today's digital world, cybersecurity is more critical than ever. Our Cybersecurity Program 
                prepares you to defend against cyber threats, conduct security assessments, and implement 
                robust security measures that protect organizations from digital attacks.
              </p>

              <Card className="shadow-card border-0 mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">Curriculum Modules</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {modules.map((module, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{module}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <div className="text-center bg-card p-8 rounded-lg shadow-card">
                <h3 className="text-2xl font-bold text-foreground mb-4">Defend the Digital World</h3>
                <Button 
                  size="lg" 
                  className="bg-tech-gradient hover:opacity-90 text-white transition-all hover:scale-105"
                  onClick={scrollToContact}
                >
                  Enroll Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cybersecurity;
