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
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const donationTypes = [
  "Cash Donation",
  "Hardware/Equipment Donation",
  "Sponsorship",
  "Scholarship Fund",
  "Infrastructure Support",
];

const donorFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  donationType: z.string({
    required_error: "Please select a donation type",
  }),
  amount: z.string().optional(),
  message: z
    .string()
    .min(10, "Please provide more details about your donation intent"),
});

type DonorForm = z.infer<typeof donorFormSchema>;

const JoinAsDonor = () => {
  const { toast } = useToast();

  const form = useForm<DonorForm>({
    resolver: zodResolver(donorFormSchema),
    defaultValues: {
      name: "",
      email: "",
      amount: "",
      message: "",
    },
  });

  const selectedDonationType = form.watch("donationType");
  const showAmountField =
    selectedDonationType === "Cash Donation" ||
    selectedDonationType === "Scholarship Fund";

  const onSubmit = (data: DonorForm) => {
    console.log("Donor community data:", data);
    toast({
      title: "Thank You for Your Generosity!",
      description:
        "Your donation interest has been recorded. Our team will contact you to discuss the details and next steps.",
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
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full w-fit">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold">
                  Support Our Mission
                </CardTitle>
                <CardDescription className="text-lg">
                  Help us provide accessible education and bridge the digital
                  divide in our community
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
                          <FormLabel>Full Name / Organization Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your name or organization name"
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
                      name="donationType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Type of Donation</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select donation type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {donationTypes.map((type) => (
                                <SelectItem key={type} value={type}>
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {showAmountField && (
                      <FormField
                        control={form.control}
                        name="amount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Amount (Optional)</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter amount in INR"
                                type="number"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message / Specific Intent</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your donation goals, any specific programs you'd like to support, or equipment you'd like to donate..."
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
                      className="w-full bg-gradient-to-br from-pink-500 to-pink-600 hover:opacity-90 text-white"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting
                        ? "Submitting..."
                        : "Submit Donation Intent"}
                    </Button>
                  </form>
                </Form>

                <div className="mt-6 p-4 bg-pink-50 rounded-lg border border-pink-200">
                  <h4 className="font-semibold mb-2 text-pink-800">
                    Impact of Your Donation:
                  </h4>
                  <ul className="text-sm text-pink-700 space-y-1">
                    <li>
                      • ₹5,000 - Sponsors one student's basic course materials
                    </li>
                    <li>
                      • ₹15,000 - Funds a complete certification program for a
                      student
                    </li>
                    <li>
                      • ₹50,000 - Supports a workshop series for underserved
                      communities
                    </li>
                    <li>
                      • Hardware donations - Directly enhance our training
                      infrastructure
                    </li>
                    <li>
                      • Corporate sponsorships - Enable large-scale community
                      programs
                    </li>
                  </ul>
                  <p className="text-sm text-pink-700 mt-3 font-medium">
                    All donations are tax-deductible under Section 80G
                  </p>
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

export default JoinAsDonor;
