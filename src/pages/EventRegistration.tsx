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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Calendar, MapPin, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const upcomingEvents = [
  {
    id: "tech-summit-2024",
    name: "Tech Summit 2024",
    date: "2024-03-15",
    time: "10:00 AM - 5:00 PM",
    location: "KK Computers Campus",
    description: "Annual technology summit featuring industry leaders",
  },
  {
    id: "ai-workshop",
    name: "AI & Machine Learning Workshop",
    date: "2024-03-22",
    time: "2:00 PM - 6:00 PM",
    location: "Virtual Event",
    description: "Hands-on workshop on AI fundamentals",
  },
  {
    id: "career-fair",
    name: "Tech Career Fair 2024",
    date: "2024-04-05",
    time: "9:00 AM - 4:00 PM",
    location: "Convention Center",
    description: "Meet top tech companies and explore career opportunities",
  },
  {
    id: "cybersecurity-seminar",
    name: "Cybersecurity Awareness Seminar",
    date: "2024-04-12",
    time: "3:00 PM - 5:00 PM",
    location: "Virtual Event",
    description: "Learn about latest cybersecurity threats and protection",
  },
  {
    id: "web-dev-bootcamp",
    name: "Web Development Bootcamp",
    date: "2024-04-20",
    time: "10:00 AM - 4:00 PM",
    location: "KK Computers Campus",
    description: "Intensive one-day web development training",
  },
];

const eventRegistrationSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  eventId: z.string({
    required_error: "Please select an event",
  }),
  organization: z.string().min(2, "Please enter your college or organization"),
  phoneNumber: z.string().min(10, "Please enter a valid phone number"),
});

type EventRegistrationForm = z.infer<typeof eventRegistrationSchema>;

const EventRegistration = () => {
  const { toast } = useToast();

  const form = useForm<EventRegistrationForm>({
    resolver: zodResolver(eventRegistrationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      organization: "",
      phoneNumber: "",
    },
  });

  const selectedEvent = upcomingEvents.find(
    (event) => event.id === form.watch("eventId"),
  );

  const onSubmit = (data: EventRegistrationForm) => {
    const event = upcomingEvents.find((e) => e.id === data.eventId);

    // Here you would typically send the data to your backend API
    // Example: await submitEventRegistration(data);

    toast({
      title: "Registration Successful!",
      description: `You've successfully registered for ${event?.name}. Check your email for confirmation details.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-16">
        <div className="container-responsive">
          <div className="max-w-2xl mx-auto">
            {/* Back Link */}
            <Link
              to="/events"
              className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Events
            </Link>

            <Card className="shadow-card">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-tech-gradient rounded-full w-fit">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="heading-md">
                  Register for an Event
                </CardTitle>
                <CardDescription className="text-responsive">
                  Join us for exciting tech events, workshops, and networking
                  opportunities
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
                      name="eventId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Select Event</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Choose an event to register for" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {upcomingEvents.map((event) => (
                                <SelectItem key={event.id} value={event.id}>
                                  <div className="flex flex-col items-start">
                                    <span className="font-medium">
                                      {event.name}
                                    </span>
                                    <span className="text-sm text-muted-foreground">
                                      {event.date}
                                    </span>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {selectedEvent && (
                      <div className="p-4 bg-secondary/50 rounded-lg">
                        <h4 className="font-semibold mb-2">
                          {selectedEvent.name}
                        </h4>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            {selectedEvent.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            {selectedEvent.time}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            {selectedEvent.location}
                          </div>
                          <p className="mt-2">{selectedEvent.description}</p>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                      <FormField
                        control={form.control}
                        name="organization"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>College/Organization</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your college or organization"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your phone number"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full btn-primary"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting
                        ? "Registering..."
                        : "Submit Registration"}
                    </Button>
                  </form>
                </Form>

                <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Important Information:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>
                      • Registration confirmation will be sent to your email
                    </li>
                    <li>
                      • For virtual events, meeting links will be provided 24
                      hours before
                    </li>
                    <li>
                      • Please arrive 15 minutes early for in-person events
                    </li>
                    <li>• Bring a valid ID for verification</li>
                    <li>
                      • Contact us at info@kkcomputers.edu for any queries
                    </li>
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

export default EventRegistration;
