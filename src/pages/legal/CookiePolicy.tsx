
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
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
              <h1 className="text-4xl font-bold text-foreground mb-8">Cookie Policy</h1>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="text-sm text-muted-foreground">Last updated: January 2024</p>
                
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">What Are Cookies</h2>
                  <p>
                    Cookies are small text files that are stored on your device when you visit our website. 
                    They help us provide you with a better experience by remembering your preferences and 
                    understanding how you use our site.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Cookies</h2>
                  <p>
                    We use cookies to enhance your browsing experience, analyze site traffic, personalize content, 
                    and remember your preferences. We may also use cookies for marketing and advertising purposes.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Types of Cookies We Use</h2>
                  <ul className="list-disc pl-6">
                    <li>Essential cookies: Required for the website to function properly</li>
                    <li>Analytics cookies: Help us understand how visitors interact with our website</li>
                    <li>Functional cookies: Remember your preferences and settings</li>
                    <li>Marketing cookies: Used to track visitors across websites</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Managing Cookies</h2>
                  <p>
                    You can control and manage cookies through your browser settings. However, please note that 
                    disabling certain cookies may affect the functionality of our website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
                  <p>
                    If you have any questions about our use of cookies, please contact us at info@kkcomputers.edu.
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

export default CookiePolicy;
