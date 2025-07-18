
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
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
              <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="text-sm text-muted-foreground">Last updated: January 2024</p>
                
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
                  <p>
                    KK Computers collects information you provide directly to us, such as when you create an account, 
                    enroll in our programs, contact us, or otherwise communicate with us. This may include your name, 
                    email address, phone number, and other contact information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
                  <p>
                    We use the information we collect to provide, maintain, and improve our services, communicate 
                    with you about our programs, process transactions, and send you technical notices and support messages.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Information Sharing</h2>
                  <p>
                    We do not sell, trade, or otherwise transfer your personal information to third parties without 
                    your consent, except as described in this privacy policy or as required by law.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Security</h2>
                  <p>
                    We take reasonable measures to protect your personal information against loss, theft, and misuse, 
                    as well as unauthorized access, disclosure, alteration, and destruction.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
                  <p>
                    If you have any questions about this Privacy Policy, please contact us at info@kkcomputers.edu 
                    or through our contact form.
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

export default PrivacyPolicy;
