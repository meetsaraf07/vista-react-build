import { Card } from "@/components/ui/card";
import { Zap, Shield, Globe, Cpu, Users, Rocket } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Built for speed with optimized performance and instant loading times."
    },
    {
      icon: Shield,
      title: "Secure by Default",
      description: "Enterprise-grade security with end-to-end encryption and compliance."
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Deploy worldwide with our global CDN and edge computing network."
    },
    {
      icon: Cpu,
      title: "AI Powered",
      description: "Leverage artificial intelligence to automate and optimize your workflows."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together seamlessly with real-time collaboration tools."
    },
    {
      icon: Rocket,
      title: "Easy Deploy",
      description: "One-click deployments with automatic scaling and zero downtime."
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Everything you need to
            <span className="bg-gradient-primary bg-clip-text text-transparent"> succeed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to help you build, deploy, and scale your applications with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card group hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;