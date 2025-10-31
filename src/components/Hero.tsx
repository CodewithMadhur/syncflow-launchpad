import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Remote Work Collaboration Made Simple
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            An integrated, browser-based platform that enables distributed teams to communicate, coordinate, and collaborate in real-time. Everything you need in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up">
            <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 group">
              Sign In
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-full"></div>
            <img 
              src={heroDashboard} 
              alt="RemoteSync Dashboard Interface" 
              className="relative rounded-2xl shadow-lg w-full max-w-5xl mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
