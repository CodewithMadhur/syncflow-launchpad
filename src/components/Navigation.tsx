import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            RemoteSync
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <button
                className="text-foreground hover:text-primary transition-colors flex items-center gap-1"
                onMouseEnter={() => setIsFeaturesOpen(true)}
                onMouseLeave={() => setIsFeaturesOpen(false)}
              >
                Features
                <ChevronDown className="w-4 h-4" />
              </button>
              {isFeaturesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-lg p-2 z-50"
                  onMouseEnter={() => setIsFeaturesOpen(true)}
                  onMouseLeave={() => setIsFeaturesOpen(false)}
                >
                  <Link to="/chat" className="block px-4 py-2 hover:bg-secondary rounded-lg transition-colors">
                    Real-Time Chat
                  </Link>
                  <Link to="/tasks" className="block px-4 py-2 hover:bg-secondary rounded-lg transition-colors">
                    Task Management
                  </Link>
                  <Link to="/video" className="block px-4 py-2 hover:bg-secondary rounded-lg transition-colors">
                    Video Meetings
                  </Link>
                  <Link to="/files" className="block px-4 py-2 hover:bg-secondary rounded-lg transition-colors">
                    File Sharing
                  </Link>
                  <Link to="/analytics" className="block px-4 py-2 hover:bg-secondary rounded-lg transition-colors">
                    Analytics Dashboard
                  </Link>
                  <Link to="/integrations" className="block px-4 py-2 hover:bg-secondary rounded-lg transition-colors">
                    Integrations Hub
                  </Link>
                  <button
                    onClick={() => {
                      scrollToSection("features");
                      setIsFeaturesOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-secondary rounded-lg transition-colors border-t border-border mt-2 pt-3"
                  >
                    View All Features
                  </button>
                </div>
              )}
            </div>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-foreground hover:text-primary transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Pricing
            </button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" onClick={() => scrollToSection("pricing")}>
              Sign In
            </Button>
            <Button onClick={() => scrollToSection("pricing")}>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-4">
              <div className="px-4">
                <p className="text-xs font-semibold text-muted-foreground mb-2">FEATURES</p>
                <div className="flex flex-col gap-1 pl-2">
                  <Link to="/chat" className="text-left px-3 py-2 hover:bg-secondary rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    Real-Time Chat
                  </Link>
                  <Link to="/tasks" className="text-left px-3 py-2 hover:bg-secondary rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    Task Management
                  </Link>
                  <Link to="/video" className="text-left px-3 py-2 hover:bg-secondary rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    Video Meetings
                  </Link>
                  <Link to="/files" className="text-left px-3 py-2 hover:bg-secondary rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    File Sharing
                  </Link>
                  <Link to="/analytics" className="text-left px-3 py-2 hover:bg-secondary rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    Analytics Dashboard
                  </Link>
                  <Link to="/integrations" className="text-left px-3 py-2 hover:bg-secondary rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    Integrations Hub
                  </Link>
                </div>
              </div>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-left px-4 py-2 hover:bg-secondary rounded-lg transition-colors"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-left px-4 py-2 hover:bg-secondary rounded-lg transition-colors"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-left px-4 py-2 hover:bg-secondary rounded-lg transition-colors"
              >
                Pricing
              </button>
              <div className="flex flex-col gap-2 px-4 pt-2">
                <Button variant="outline" onClick={() => scrollToSection("pricing")} className="w-full">
                  Sign In
                </Button>
                <Button onClick={() => scrollToSection("pricing")} className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
