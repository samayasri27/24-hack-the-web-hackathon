import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Handshake } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const partnerFormSchema = z.object({
  organizationName: z
    .string()
    .min(2, "Organization name must be at least 2 characters"),
  contactPerson: z
    .string()
    .min(2, "Contact person name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  organizationType: z.string().min(2, "Please specify your organization type"),
  proposal: z
    .string()
    .min(
      20,
      "Please provide detailed information about your partnership proposal",
    ),
});

type PartnerForm = z.infer<typeof partnerFormSchema>;

const JoinAsPartner = () => {
  const { toast } = useToast();

  const form = useForm<PartnerForm>({
    resolver: zodResolver(partnerFormSchema),
    defaultValues: {
      organizationName: "",
      contactPerson: "",
      email: "",
      phone: "",
      organizationType: "",
      proposal: "",
    },
  });

  const onSubmit = (data: PartnerForm) => {
    console.log("Partner community data:", data);
    toast({
      title: "Partnership Proposal Received!",
      description:
        "Thank you for your interest in partnering with us. Our business development team will review your proposal and contact you soon.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {/* Back Link */}
            <Link
              to="/"
              className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>

            <Card className="shadow-card">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full w-fit">
                  <Handshake className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold">
                  Partner With Us
                </CardTitle>
                <CardDescription className="text-lg">
                  Collaborate to create innovative training programs and expand
                  technology education opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="organizationName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Organization Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your organization name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="contactPerson"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Contact Person</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Primary contact name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter contact email"
                                type="email"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter phone number"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="organizationType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Organization Type</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g., Tech Company, NGO, Government, etc."
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="proposal"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Partnership Proposal / Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe your partnership proposal, collaboration ideas, mutual benefits, and how we can work together to advance technology education..."
                              className="resize-none"
                              rows={6}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-br from-purple-500 to-purple-600 hover:opacity-90 text-white"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting
                        ? "Submitting..."
                        : "Submit Partnership Proposal"}
                    </Button>
                  </form>
                </Form>

                <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-semibold mb-2 text-purple-800">
                    Partnership Opportunities:
                  </h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Curriculum development and content creation</li>
                    <li>• Guest lectures and industry expert sessions</li>
                    <li>• Internship and placement opportunities</li>
                    <li>• Technology infrastructure and tools sponsorship</li>
                    <li>• Joint certification programs</li>
                    <li>• Community outreach and CSR initiatives</li>
                    <li>• Research and development projects</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JoinAsPartner;
