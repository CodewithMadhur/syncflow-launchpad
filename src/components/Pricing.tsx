import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check } from "lucide-react";
import { toast } from "sonner";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for small teams getting started",
    features: [
      "Up to 5 team members",
      "Basic chat & messaging",
      "5GB file storage",
      "Video calls (up to 30 min)",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "$12",
    description: "Best for growing teams",
    features: [
      "Unlimited team members",
      "Advanced chat features",
      "100GB file storage",
      "Unlimited video calls",
      "Priority support",
      "Custom integrations",
      "Advanced analytics",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "Dedicated account manager",
      "24/7 phone support",
      "Custom SLA",
      "Advanced security & compliance",
      "On-premise deployment option",
    ],
  },
];

const Pricing = () => {
  const handlePlanSelection = (planName: string) => {
    if (planName === "Enterprise") {
      toast.success("Contact Sales", {
        description: "We'll get in touch with you shortly to discuss your needs.",
      });
    } else {
      toast.success(`${planName} Plan Selected!`, {
        description: "Redirecting to sign up...",
      });
    }
  };

  return (
    <section id="pricing" className="py-20 md:py-32 bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that's right for your team
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up bg-card/50 backdrop-blur-sm ${
                plan.popular ? "border-primary shadow-lg scale-105 hover:scale-110" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-soft">
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="mb-2">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full hover:scale-105 transition-transform" 
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                  onClick={() => handlePlanSelection(plan.name)}
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
