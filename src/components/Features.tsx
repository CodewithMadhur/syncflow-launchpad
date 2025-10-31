import { MessageSquare, CheckSquare, Video, Share2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: MessageSquare,
    title: "Real-Time Chat",
    description: "Stay connected with instant messaging and group channels.",
  },
  {
    icon: CheckSquare,
    title: "Task Management",
    description: "Organize projects with tasks, deadlines, and priorities.",
  },
  {
    icon: Video,
    title: "Video Meetings",
    description: "Host secure, high-quality video calls directly in the browser.",
  },
  {
    icon: Share2,
    title: "File Sharing",
    description: "Share and collaborate on documents instantly and safely.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything your team needs</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful collaboration tools designed for modern remote teams.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 border-border bg-card/50 backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-primary text-primary-foreground group-hover:scale-110 group-hover:rotate-3 transition-all shadow-soft">
                  <feature.icon className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
