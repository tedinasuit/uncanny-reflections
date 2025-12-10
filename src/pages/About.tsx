import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";
import userImage from "@/assets/aboutme.png";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-display tracking-tight mb-12">
              About
            </h1>

            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
              <div className="relative float-right ml-8 mb-8 w-64 md:w-80 group hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" />
                <img
                  src={userImage}
                  alt="Lars Hoeijmans"
                  className="relative w-full h-auto rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500 ease-out transform group-hover:scale-[1.02] shadow-2xl"
                />
              </div>

              <p>
                I’m a creative developer who builds digital experiences that feel genuinely new. My work lives at the intersection of engineering and design, where technical complexity meets intuitive, human interfaces.
              </p>

              <p>
                Currently, I'm focused on expanding what’s possible with AI: not just to automate existing tasks, but to create entirely new kinds of interactions. Whether it’s a productivity platform that feels like a quiet workspace or an installation that mirrors your own identity, I want to build things that leave a lasting impression.
              </p>

              <p>
                I’m looking for the next opportunity to build ambitious products with people who value bold ideas.
              </p>

              {/* Mobile Image - Centered at bottom */}
              <div className="relative w-64 mx-auto mt-12 group block md:hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" />
                <img
                  src={userImage}
                  alt="Lars Hoeijmans"
                  className="relative w-full h-auto rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500 ease-out transform group-hover:scale-[1.02] shadow-2xl"
                />
              </div>
            </div>

            <div className="mt-16 pt-16 border-t border-border">
              <h2 className="text-2xl font-display mb-8">Get in touch</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="default" size="lg" className="group">
                  <Mail className="mr-2 h-4 w-4" />
                  larshoeijmans@gmail.com
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://www.linkedin.com/in/lars-hoeijmans/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
