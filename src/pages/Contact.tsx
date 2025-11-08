import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-display tracking-tight mb-6">
              Let's work together
            </h1>
            <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-card border-border"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-card border-border"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="bg-card border-border"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-display mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:larshoeijmans@gmail.com"
                        className="text-muted-foreground hover:text-primary smooth-transition"
                      >
                        larshoeijmans@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a
                        href="tel:+31123456789"
                        className="text-muted-foreground hover:text-primary smooth-transition"
                      >
                        +31 (0) 12 345 6789
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">
                        Amsterdam, Netherlands
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <h3 className="font-medium mb-4">Office Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday<br />
                  9:00 AM - 6:00 PM CET
                </p>
              </div>

              <div className="pt-8 border-t border-border">
                <h3 className="font-medium mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://twitter.com/larshoeijmans" target="_blank" rel="noopener noreferrer">
                      Twitter
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://www.linkedin.com/in/lars-hoeijmans/" target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://github.com/larshoeijmans" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
