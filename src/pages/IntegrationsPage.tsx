import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plug, CheckCircle, Code, Zap } from "lucide-react";
import integrationsMockup from "@/assets/integrations-mockup.png";
import { toast } from "sonner";

const IntegrationsPage = () => {
  const integrations = [
    { name: "Slack", status: "Connected", color: "bg-purple-500" },
    { name: "Google Drive", status: "Available", color: "bg-blue-500" },
    { name: "Trello", status: "Connected", color: "bg-blue-600" },
    { name: "Notion", status: "Available", color: "bg-gray-800" },
    { name: "GitHub", status: "Connected", color: "bg-gray-900" },
    { name: "Zoom", status: "Available", color: "bg-blue-400" },
    { name: "Dropbox", status: "Available", color: "bg-blue-700" },
    { name: "Asana", status: "Available", color: "bg-red-500" }
  ];

  const connectIntegration = (name: string) => {
    toast.success(`${name} connected successfully!`);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6 animate-scale-in">
            <Plug className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Integrations Hub
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up">
            Connect everything. Work from anywhere.
          </p>
          <div className="flex gap-4 justify-center animate-fade-in-up">
            <Button size="lg" onClick={() => toast.success("Starting trial!")}>
              Try It Now
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Demo Integrations */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Live Demo</h2>
            <p className="text-muted-foreground">Connect your favorite tools</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {integrations.map((integration, i) => (
              <Card key={i} className="bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all group cursor-pointer">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${integration.color} rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-4 group-hover:scale-110 transition-transform`}>
                    {integration.name.charAt(0)}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{integration.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs px-2 py-1 rounded ${integration.status === "Connected" ? 'bg-green-500/10 text-green-500' : 'bg-secondary text-muted-foreground'}`}>
                      {integration.status === "Connected" && <CheckCircle className="w-3 h-3 inline mr-1" />}
                      {integration.status}
                    </span>
                    {integration.status === "Available" && (
                      <Button size="sm" variant="ghost" onClick={() => connectIntegration(integration.name)}>
                        Connect
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Custom Integration */}
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <Code className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Build Custom Integrations</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Use our powerful API to connect RemoteSync with any tool in your workflow. Full documentation and SDK support included.
              </p>
              <div className="flex gap-4 justify-center">
                <Button onClick={() => toast.success("Opening API docs...")}>
                  View API Docs
                </Button>
                <Button variant="outline">
                  Contact Sales
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Visual Mockup */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <img src={integrationsMockup} alt="Integrations Hub" className="rounded-2xl shadow-lg" />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Plug, title: "One-Click Connect", desc: "Connect popular apps instantly without setup" },
              { icon: Zap, title: "Real-Time Sync", desc: "Data syncs automatically across all platforms" },
              { icon: Code, title: "REST API", desc: "Build custom integrations with our developer API" },
              { icon: CheckCircle, title: "Pre-built Workflows", desc: "Use templates to automate common tasks" },
              { icon: Zap, title: "Webhooks", desc: "Trigger actions in RemoteSync from external tools" },
              { icon: Plug, title: "50+ Integrations", desc: "Connect with all your favorite tools" }
            ].map((feature, i) => (
              <Card key={i} className="bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <feature.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IntegrationsPage;
