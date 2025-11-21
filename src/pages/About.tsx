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
              <div className="relative float-right ml-8 mb-8 w-64 md:w-80 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" />
                <img
                  src={userImage}
                  alt="Lars Hoeijmans"
                  className="relative w-full h-auto rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500 ease-out transform group-hover:scale-[1.02] shadow-2xl"
                />
              </div>

              <p>
                I'm Lars. I'm 24. I've always been chasing the feeling of seeing something for the first time.
              </p>

              <p>
                When I was a kid, I looked for it in nature. I’d spend hours at aquariums or on the beach, just waiting to spot something I hadn't seen before. It was all about discovery.
              </p>

              <p>
                Then I found computers. I realized I didn't have to wait to find new things. I could just make them. That’s what got me into jailbreaking iPhones and messing with Android ROMs. I wanted to unlock parts of the technology that were hidden.
              </p>

              <p>
                That’s still what drives me. I want to build digital experiences that feel genuinely new. I’m not interested in just making things work. I want to make things that feel different than what you’re used to.
              </p>

              <p>
                I still love exploring the real world. I still dream of finally seeing the northern lights with my own eyes. But mostly, I’m looking for that next new idea that bridges the gap between the screen and reality.
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
