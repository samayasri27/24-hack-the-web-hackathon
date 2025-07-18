import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Events from "./pages/Events";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";

// Service pages
import ITTraining from "./pages/services/ITTraining";
import Certifications from "./pages/services/Certifications";
import FinalYearProjects from "./pages/services/FinalYearProjects";
import DigitalAwareness from "./pages/services/DigitalAwareness";

// Program pages
import WebDevelopment from "./pages/programs/WebDevelopment";
import MobileAppDevelopment from "./pages/programs/MobileAppDevelopment";
import DataScienceAI from "./pages/programs/DataScienceAI";
import Cybersecurity from "./pages/programs/Cybersecurity";
import CloudComputing from "./pages/programs/CloudComputing";
import DigitalMarketing from "./pages/programs/DigitalMarketing";

// Certification pages
import PythonCertification from "./pages/programs/PythonCertification";
import AWSCertification from "./pages/programs/AWSCertification";
import DigitalMarketingCertification from "./pages/programs/DigitalMarketingCertification";
import EthicalHackingCertification from "./pages/programs/EthicalHackingCertification";

// IT Training program pages
import MERNStack from "./pages/programs/MERNStack";
import ReactNative from "./pages/programs/ReactNative";

// Legal pages
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import CookiePolicy from "./pages/legal/CookiePolicy";

// Auth pages
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";

// Form pages
import ScheduleConsultation from "./pages/ScheduleConsultation";
import CourseRegistration from "./pages/CourseRegistration";
import EventRegistration from "./pages/EventRegistration";

// Community pages
import JoinAsStudent from "./pages/community/JoinAsStudent";
import JoinAsTrainer from "./pages/community/JoinAsTrainer";
import JoinAsDonor from "./pages/community/JoinAsDonor";
import JoinAsPartner from "./pages/community/JoinAsPartner";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/events" element={<Events />} />
          <Route path="/services" element={<Services />} />

          {/* Service Routes */}
          <Route path="/services/it-training" element={<ITTraining />} />
          <Route path="/services/certifications" element={<Certifications />} />
          <Route
            path="/services/final-year-projects"
            element={<FinalYearProjects />}
          />
          <Route
            path="/services/digital-awareness"
            element={<DigitalAwareness />}
          />

          {/* Program Routes */}
          <Route
            path="/programs/web-development"
            element={<WebDevelopment />}
          />
          <Route
            path="/programs/mobile-app-development"
            element={<MobileAppDevelopment />}
          />
          <Route path="/programs/data-science-ai" element={<DataScienceAI />} />
          <Route path="/programs/cybersecurity" element={<Cybersecurity />} />
          <Route
            path="/programs/cloud-computing"
            element={<CloudComputing />}
          />
          <Route
            path="/programs/digital-marketing"
            element={<DigitalMarketing />}
          />

          {/* Certification Program Routes */}
          <Route
            path="/programs/python-certification"
            element={<PythonCertification />}
          />
          <Route
            path="/programs/aws-certification"
            element={<AWSCertification />}
          />
          <Route
            path="/programs/digital-marketing-certification"
            element={<DigitalMarketingCertification />}
          />
          <Route
            path="/programs/ethical-hacking-certification"
            element={<EthicalHackingCertification />}
          />

          {/* IT Training Program Routes */}
          <Route path="/programs/mern-stack" element={<MERNStack />} />
          <Route path="/programs/react-native" element={<ReactNative />} />

          {/* Legal Routes */}
          <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/legal/terms-of-service" element={<TermsOfService />} />
          <Route path="/legal/cookie-policy" element={<CookiePolicy />} />

          {/* Auth Routes */}
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/signup" element={<SignUp />} />

          {/* Form Routes */}
          <Route
            path="/schedule-consultation"
            element={<ScheduleConsultation />}
          />
          <Route path="/course-registration" element={<CourseRegistration />} />
          <Route path="/event-registration" element={<EventRegistration />} />

          {/* Community Routes */}
          <Route path="/community/students" element={<JoinAsStudent />} />
          <Route path="/community/trainers" element={<JoinAsTrainer />} />
          <Route path="/community/donors" element={<JoinAsDonor />} />
          <Route path="/community/partners" element={<JoinAsPartner />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
