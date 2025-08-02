import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  MousePointer, 
  Share2, 
  Mail, 
  FileText, 
  BarChart3 
} from "lucide-react";

const ServicesGrid = () => {
  const services = [
    {
      title: "Search engine optimization",
      description: "We reached here with our hard work and dedication",
      icon: Search,
      bgColor: "bg-card",
      textColor: "text-foreground"
    },
    {
      title: "Pay-per-click advertising", 
      description: "We reached here with our hard work and dedication",
      icon: MousePointer,
      bgColor: "bg-primary",
      textColor: "text-primary-foreground"
    },
    {
      title: "Social Media Marketing",
      description: "We reached here with our hard work and dedication", 
      icon: Share2,
      bgColor: "bg-foreground",
      textColor: "text-background"
    },
    {
      title: "Email Marketing",
      description: "We reached here with our hard work and dedication",
      icon: Mail,
      bgColor: "bg-card",
      textColor: "text-foreground"
    },
    {
      title: "Content Creation",
      description: "We reached here with our hard work and dedication",
      icon: FileText,
      bgColor: "bg-primary",
      textColor: "text-primary-foreground"
    },
    {
      title: "Analytics and tracking",
      description: "We reached here with our hard work and dedication",
      icon: BarChart3,
      bgColor: "bg-foreground", 
      textColor: "text-background"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium mb-6">
            Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 max-w-4xl">
            At our agency, we're reinventing Tally automation to boost productivity. That's Business Innovation Strategy.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className={`${service.bgColor} border-0 hover-lift animate-scale-in rounded-3xl`} style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-4 flex-1">
                      <h3 className={`text-xl font-semibold ${service.textColor}`}>
                        {service.title}
                      </h3>
                      <p className={`text-sm ${service.textColor} opacity-80 leading-relaxed`}>
                        {service.description}
                      </p>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className={`${service.textColor} hover:bg-white/10 p-0 h-auto font-normal text-sm flex items-center gap-2`}
                      >
                        <span>Learn more</span>
                        <span>→</span>
                      </Button>
                    </div>
                    <div className="ml-4">
                      <IconComponent className={`h-12 w-12 ${service.textColor} opacity-60`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;