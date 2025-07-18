
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Clock, Users, Award, ArrowRight } from 'lucide-react';

const DataScienceAI = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const modules = [
    "Python for Data Science",
    "Statistics & Probability",
    "Machine Learning Algorithms",
    "Deep Learning & Neural Networks",
    "Data Visualization",
    "Big Data Technologies",
    "AI Ethics & Responsible AI",
    "Industry Applications & Case Studies"
  ];

  const skills = [
    "Machine Learning",
    "Deep Learning",
    "Data Analysis",
    "Python Programming",
    "Statistical Modeling",
    "Data Visualization",
    "Neural Networks",
    "AI Model Deployment"
  ];

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-tech-gradient text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6">
                <Brain className="h-16 w-16 mx-auto mb-4" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Data Science & AI Program
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Master artificial intelligence and data science to solve complex problems and drive innovation
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
                  <Clock className="h-4 w-4 mr-2" />
                  8 Months
                </div>
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
                  <Users className="h-4 w-4 mr-2" />
                  Advanced Level
                </div>
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
                  <Award className="h-4 w-4 mr-2" />
                  Industry Certificate
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8">Program Overview</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
                <p className="text-lg leading-relaxed mb-6">
                  Artificial Intelligence and Data Science are transforming every industry, from healthcare and 
                  finance to entertainment and transportation. Our comprehensive program prepares you to be at 
                  the forefront of this revolution, teaching you to build intelligent systems that can learn, 
                  adapt, and make decisions.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  You'll master machine learning algorithms, deep neural networks, and data analysis techniques 
                  while working on real-world projects that solve actual business problems. Our curriculum combines 
                  theoretical foundations with hands-on implementation using industry-standard tools and frameworks.
                </p>
                <p className="text-lg leading-relaxed">
                  From predicting market trends to developing recommendation systems, from computer vision to 
                  natural language processing, you'll gain the skills to create AI solutions that make a 
                  meaningful impact in the world.
                </p>
              </div>

              {/* Skills & Curriculum */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <Card className="shadow-card border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl">Skills You'll Master</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {skills.map((skill, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-card border-0">
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
              </div>

              {/* CTA */}
              <div className="text-center bg-card p-8 rounded-lg shadow-card">
                <h3 className="text-2xl font-bold text-foreground mb-4">Shape the Future with AI</h3>
                <p className="text-muted-foreground mb-6">
                  Join the next generation of AI engineers and data scientists building tomorrow's intelligent systems.
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DataScienceAI;
