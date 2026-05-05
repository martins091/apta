import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Linkedin, Mail, Calendar } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().min(2, { message: "Company name is required." }),
  message: z.string().min(10, { message: "Please provide a brief message." }),
});

export default function Contact() {
  const { toast } = useToast();
  
  useEffect(() => {
    document.title = "Contact — APTA Foundry";
    window.scrollTo(0, 0);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message received",
        description: "We'll get back to you within 24 business hours.",
      });
      form.reset();
    }, 500);
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Banner */}
      <section className="bg-primary text-primary-foreground pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.apply/noise.svg')] mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Let's Talk Privacy</h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background flex-grow">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            {/* Left Column */}
            <div>
              <h2 className="text-3xl font-serif text-foreground mb-6">Start the Conversation</h2>
              <p className="text-muted-foreground font-sans text-lg leading-relaxed mb-10">
                Whether you need a full privacy program build, a quick gap analysis, or an advisor for your board, we're here to help. Reach out directly or schedule a free discovery call to discuss your needs.
              </p>

              <div className="space-y-8">
                <a href="mailto:hello@aptafoundry.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-none group-hover:bg-secondary/20 transition-colors">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1">Email Us</p>
                    <p className="font-sans font-medium text-foreground group-hover:text-primary transition-colors">hello@aptafoundry.com</p>
                  </div>
                </a>

                <a href="https://calendly.com/akanachuma/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-none group-hover:bg-secondary/20 transition-colors">
                    <Calendar className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1">Schedule</p>
                    <p className="font-sans font-medium text-foreground group-hover:text-primary transition-colors">Book a 30-min discovery call</p>
                  </div>
                </a>

                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-none group-hover:bg-secondary/20 transition-colors">
                    <Linkedin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1">Connect</p>
                    <p className="font-sans font-medium text-foreground group-hover:text-primary transition-colors">Follow us on LinkedIn</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-card border border-border p-8 md:p-10 shadow-sm">
              <h3 className="text-2xl font-serif text-foreground mb-6">Send a Message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Jane Doe" className="rounded-none border-border focus-visible:ring-secondary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Acme Corp" className="rounded-none border-border focus-visible:ring-secondary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Work Email</FormLabel>
                        <FormControl>
                          <Input placeholder="jane@acmecorp.com" className="rounded-none border-border focus-visible:ring-secondary" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-xs uppercase tracking-wider text-muted-foreground">How can we help?</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your current privacy challenges..." 
                            className="min-h-[120px] rounded-none border-border focus-visible:ring-secondary resize-y"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-14 font-bold text-lg">
                    Submit Message
                  </Button>
                </form>
              </Form>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
