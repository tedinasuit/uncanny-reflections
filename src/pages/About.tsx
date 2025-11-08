import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";

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
              <p>
                I'm Lars Hoeijmans, a digital experience designer and creative technologist based in Eindhoven. 
                My work exists at the intersection of art, technology, and human experience—exploring how we 
                perceive, interact with, and are shaped by digital systems.
              </p>

              <p>
                I believe that the best digital experiences don't just look good—they feel right. They anticipate 
                our needs, respond to our gestures, and create moments of delight that stay with us long after 
                we've closed the browser or put down our phone.
              </p>

              <p>
                My approach combines rigorous technical execution with a deep curiosity about what makes 
                experiences emotionally resonant. Whether I'm building an AI installation, designing an interface, 
                or creating a data visualization, I'm always asking: How does this make someone feel? What does 
                it reveal about the relationship between humans and machines?
              </p>

              <p>
                When I'm not working, you can find me experimenting with new tools and technologies, reading 
                about perception and consciousness, or exploring how art and design shape our understanding of 
                the world.
              </p>
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

            <div className="mt-16 pt-16 border-t border-border">
              <h2 className="text-2xl font-display mb-6">Experience</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-1">Independent Designer & Developer</h3>
                  <p className="text-sm text-muted-foreground mb-2">2020 - Present</p>
                  <p className="text-muted-foreground">
                    Creating digital experiences for clients and personal projects across web, mobile, 
                    and interactive installations.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-1">Lead Creative Technologist</h3>
                  <p className="text-sm text-muted-foreground mb-2">[Company Name] · 2018 - 2020</p>
                  <p className="text-muted-foreground">
                    Led design and development of award-winning digital experiences for major brands.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-1">UI/UX Designer</h3>
                  <p className="text-sm text-muted-foreground mb-2">[Company Name] · 2016 - 2018</p>
                  <p className="text-muted-foreground">
                    Designed user interfaces and experiences for web and mobile applications.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
