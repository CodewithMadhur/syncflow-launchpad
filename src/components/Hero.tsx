import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";

const Hero = () => {
  const scrollToPricing = () => {
    const pricing = document.getElementById("pricing");
    if (pricing) {
      pricing.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative bg-gradient-hero overflow-hidden pt-20">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary/20">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">Trusted by 10,000+ remote teams worldwide</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Remote Work Collaboration Made Simple
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            An integrated, browser-based platform that enables distributed teams to communicate, coordinate, and collaborate in real-time. Everything you need in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              onClick={scrollToPricing}
            >
              Get Started Free
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 group hover:scale-105 transition-all"
              onClick={scrollToPricing}
            >
              Sign In
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute -inset-8 bg-gradient-primary opacity-30 blur-3xl rounded-full"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-primary/20 backdrop-blur-sm">
              <img 
                src={heroDashboard} 
                alt="RemoteSync Dashboard Interface showing real-time collaboration tools" 
                className="w-full max-w-5xl mx-auto hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
