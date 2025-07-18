
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Cloud, ArrowRight } from 'lucide-react';

const CloudComputing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <Cloud className="h-16 w-16 mx-auto mb-4" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Cloud Computing Program</h1>
              <p className="text-xl opacity-90 mb-8">
                Master cloud technologies and become proficient in AWS, Azure, and Google Cloud platforms
              </p>
            </div>
          </div>
        </section>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg mb-8 text-muted-foreground">
                Learn to design, deploy, and manage scalable cloud solutions using industry-leading platforms.
              </p>
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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CloudComputing;
