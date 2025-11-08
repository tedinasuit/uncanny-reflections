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
                I'm Lars Hoeijmans, a 24 year old student from Eindhoven and I make things that live between the physical and digital.
              </p>

              <p>
                I grew up loving two things that seemed different but never were: the natural world and how technology works. One taught me to notice details—light, movement, the way things feel present. The other taught me to take things apart, to understand systems, to make tools do what I needed them to do.
              </p>

              <p>
                That combination shapes everything I create. I'm drawn to work that feels human, that creates genuine presence rather than spectacle. I care about the small decisions that make something feel right—the timing, the weight, the moment it clicks.
              </p>

              <p>
                I like to move fast and stay flexible. I prototype early, test with real people, and keep iterating until it works. I'm comfortable moving between concept, design, and code because I think the best work comes from understanding the whole picture, not just one discipline.
              </p>

              <p>
                What drives me is making things that matter. Experiences that help people think or see differently. Technology that respects both craft and the person on the other side. Work that's thoughtful, functional, and maybe a little unexpected.
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
