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
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
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
              className="group hover:shadow-lg transition-all duration-300 border-border animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-primary text-primary-foreground group-hover:scale-110 transition-transform">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
