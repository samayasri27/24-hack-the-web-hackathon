
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="text-sm text-muted-foreground">Last updated: January 2024</p>
                
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
                  <p>
                    By enrolling in KK Computers programs or using our services, you agree to be bound by these 
                    Terms of Service and our Privacy Policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Course Enrollment and Payment</h2>
                  <p>
                    Course fees must be paid in advance or according to the payment plan agreed upon during enrollment. 
                    Refunds are subject to our refund policy outlined in your enrollment agreement.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Student Responsibilities</h2>
                  <p>
                    Students are expected to attend classes regularly, complete assignments on time, and conduct 
                    themselves professionally. Disruptive behavior may result in dismissal from the program.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Intellectual Property</h2>
                  <p>
                    All course materials, including but not limited to videos, documents, and code examples, 
                    are the property of KK Computers and may not be shared or distributed without permission.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
                  <p>
                    For questions regarding these terms, please contact us at info@kkcomputers.edu.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
