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
                I'm Lars Hoeijmans, a 24-year-old creator who grew up with a disposable camera in one hand and a jailbroken iPhone in the other.
              </p>

                <p>
                  When I was little, my grandparents took me to aquariums and beaches, teaching me to notice the small things—how light moves through water, how something can feel alive. At the same time, I was the kid flashing custom ROMs on Android phones and figuring out how to make technology do things it wasn't supposed to.
                </p>

              <p>
                Those two worlds—nature and computers—never felt separate. They both taught me to look closer, to understand how things work, and to care about the details that make something feel right.
              </p>

              <p>
                Now I build experiences that sit between the physical and digital. I prototype fast, test early, and move between concept, design, and code depending on what the project needs. I'm drawn to work that creates presence, not just spectacle—things that help people think or see differently.
              </p>

              <p>
                I still want to photograph the northern lights and explore wild landscapes. But I also want to keep making things that bridge the tangible and the digital, honoring both worlds I grew up loving.
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

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
