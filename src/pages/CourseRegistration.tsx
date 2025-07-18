import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/hooks/use-toast";
import {
  Calendar as CalendarIcon,
  ArrowLeft,
  GraduationCap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const programs = [
  "Web Development",
  "Mobile App Development",
  "Data Science & AI",
  "Cybersecurity",
  "Cloud Computing",
  "Digital Marketing",
  "Python Programming",
  "Java Programming",
  "React Development",
  "Node.js Development",
];

const courseRegistrationSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  mobile: z.string().min(10, "Please enter a valid mobile number"),
  program: z.string({
    required_error: "Please select a program",
  }),
  startDate: z.date({
    required_error: "Please select a preferred start date",
  }),
  mode: z.enum(["online", "offline"], {
    required_error: "Please select a training mode",
  }),
});

type CourseRegistrationForm = z.infer<typeof courseRegistrationSchema>;

const CourseRegistration = () => {
  const { toast } = useToast();

  const form = useForm<CourseRegistrationForm>({
    resolver: zodResolver(courseRegistrationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      mobile: "",
    },
  });

  const onSubmit = (data: CourseRegistrationForm) => {
    // Simulate course registration
    console.log("Course registration data:", data);
    toast({
      title: "Registration Successful!",
      description: `You've successfully registered for ${data.program}. We'll contact you within 24 hours with next steps.`,
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
              to="/services"
              className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Services
            </Link>

            <Card className="shadow-card">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-tech-gradient rounded-full w-fit">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold">
                  Register for a Course
                </CardTitle>
                <CardDescription className="text-lg">
                  Take the first step towards your tech career with our
                  comprehensive training programs
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
                      name="fullName"
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
                      name="program"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Select Program</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Choose your preferred program" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {programs.map((program) => (
                                <SelectItem key={program} value={program}>
                                  {program}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="startDate"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Preferred Start Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground",
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>When would you like to start?</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date < new Date() ||
                                  date < new Date("1900-01-01")
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="mode"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Mode of Training</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-2"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="online" id="online" />
                                <Label htmlFor="online" className="font-normal">
                                  Online - Learn from anywhere with live
                                  sessions and recordings
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="offline" id="offline" />
                                <Label
                                  htmlFor="offline"
                                  className="font-normal"
                                >
                                  Offline - In-person training at our center
                                  with hands-on labs
                                </Label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-tech-gradient hover:opacity-90 text-white"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting
                        ? "Registering..."
                        : "Register Now"}
                    </Button>
                  </form>
                </Form>

                <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
                  <h4 className="font-semibold mb-2">What happens next?</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>
                      • We'll contact you within 24 hours to confirm your
                      registration
                    </li>
                    <li>
                      • You'll receive detailed course information and schedule
                    </li>
                    <li>
                      • Payment options and scholarship information will be
                      provided
                    </li>
                    <li>• Technical setup assistance for online courses</li>
                    <li>• Access to our learning management system</li>
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

export default CourseRegistration;
