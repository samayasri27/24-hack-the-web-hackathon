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
import { ArrowLeft, Users, Upload } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const trainerFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  expertiseAreas: z.string().min(10, "Please describe your expertise areas"),
  experience: z
    .string()
    .min(10, "Please provide details about your experience"),
  resume: z.any().optional(),
});

type TrainerForm = z.infer<typeof trainerFormSchema>;

const JoinAsTrainer = () => {
  const { toast } = useToast();

  const form = useForm<TrainerForm>({
    resolver: zodResolver(trainerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      expertiseAreas: "",
      experience: "",
    },
  });

  const onSubmit = (data: TrainerForm) => {
    console.log("Trainer community data:", data);
    toast({
      title: "Application Submitted!",
      description:
        "Thank you for applying to be a trainer. Our team will review your application and get back to you soon.",
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
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-full w-fit">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold">
                  Join as a Trainer
                </CardTitle>
                <CardDescription className="text-lg">
                  Share your expertise and help shape the next generation of
                  tech professionals
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
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your full name"
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
                              placeholder="Enter your email"
                              type="email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="expertiseAreas"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Expertise Areas</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe your areas of expertise (e.g., Web Development, Python, AI/ML, Cybersecurity, etc.)..."
                              className="resize-none"
                              rows={3}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Professional Experience</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your professional experience, teaching background, and achievements..."
                              className="resize-none"
                              rows={4}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="resume"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Resume Upload</FormLabel>
                          <FormControl>
                            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                              <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                              <p className="text-sm text-muted-foreground mb-2">
                                Click to upload your resume or drag and drop
                              </p>
                              <Input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                className="hidden"
                                onChange={(e) =>
                                  field.onChange(e.target.files?.[0])
                                }
                              />
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() =>
                                  document
                                    .querySelector('input[type="file"]')
                                    ?.click()
                                }
                              >
                                Choose File
                              </Button>
                              <p className="text-xs text-muted-foreground mt-2">
                                Supported formats: PDF, DOC, DOCX (Max 5MB)
                              </p>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-br from-green-500 to-green-600 hover:opacity-90 text-white"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting
                        ? "Submitting..."
                        : "Submit Application"}
                    </Button>
                  </form>
                </Form>

                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold mb-2 text-green-800">
                    Trainer Benefits:
                  </h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Flexible teaching schedules</li>
                    <li>• Competitive compensation packages</li>
                    <li>• Professional development opportunities</li>
                    <li>• Access to latest technology and tools</li>
                    <li>• Networking with industry professionals</li>
                    <li>• Recognition and certification programs</li>
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

export default JoinAsTrainer;
