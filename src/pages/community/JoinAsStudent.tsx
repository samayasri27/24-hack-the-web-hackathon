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
import { ArrowLeft, GraduationCap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const studentFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  mobile: z.string().min(10, "Please enter a valid mobile number"),
  currentCourse: z.string().min(2, "Please enter your current course"),
  interests: z.string().min(10, "Please tell us about your interests"),
});

type StudentForm = z.infer<typeof studentFormSchema>;

const JoinAsStudent = () => {
  const { toast } = useToast();

  const form = useForm<StudentForm>({
    resolver: zodResolver(studentFormSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      currentCourse: "",
      interests: "",
    },
  });

  const onSubmit = (data: StudentForm) => {
    console.log("Student community data:", data);
    toast({
      title: "Welcome to our community!",
      description:
        "Thank you for joining as a student. We'll be in touch with exciting opportunities soon!",
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
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full w-fit">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold">
                  Join as a Student
                </CardTitle>
                <CardDescription className="text-lg">
                  Connect with fellow learners and access exclusive student
                  benefits
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        name="mobile"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Mobile Number</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your mobile number"
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
                      name="currentCourse"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Current Course/Education</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="e.g., B.Tech Computer Science, Diploma in IT, etc."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="interests"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Areas of Interest</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your tech interests, career goals, and what you'd like to learn..."
                              className="resize-none"
                              rows={4}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-br from-blue-500 to-blue-600 hover:opacity-90 text-white"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting
                        ? "Joining..."
                        : "Join Student Community"}
                    </Button>
                  </form>
                </Form>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold mb-2 text-blue-800">
                    Student Benefits:
                  </h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>
                      • Access to exclusive student workshops and seminars
                    </li>
                    <li>• Peer learning groups and study circles</li>
                    <li>• Career guidance and placement assistance</li>
                    <li>• Project collaboration opportunities</li>
                    <li>• Scholarship and financial aid information</li>
                    <li>• Industry mentorship programs</li>
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

export default JoinAsStudent;
