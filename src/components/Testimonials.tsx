import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechFlow Inc",
    content: "RemoteSync transformed how our distributed team collaborates. The integrated tools mean we spend less time switching apps and more time getting work done.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Engineering Lead",
    company: "DevStream",
    content: "The video quality and task management features are exceptional. It's rare to find a platform that does everything well, but RemoteSync delivers.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Creative Director",
    company: "Design Collective",
    content: "Our team loves the real-time collaboration features. File sharing is seamless and the interface is intuitive. Highly recommended!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Loved by teams worldwide</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our users have to say about RemoteSync
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 animate-fade-in-up bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-accent">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
