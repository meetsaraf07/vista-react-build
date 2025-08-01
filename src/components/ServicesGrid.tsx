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
      title: "Tally Integration",
      description: "Seamless integration with your existing Tally setup",
      icon: Search,
      bgColor: "bg-card",
      textColor: "text-foreground"
    },
    {
      title: "Automated Reporting", 
      description: "Generate reports automatically without manual intervention",
      icon: MousePointer,
      bgColor: "bg-primary",
      textColor: "text-primary-foreground"
    },
    {
      title: "Data Synchronization",
      description: "Real-time data sync across all your business platforms", 
      icon: Share2,
      bgColor: "bg-foreground",
      textColor: "text-background"
    },
    {
      title: "Invoice Management",
      description: "Automate invoice generation and tracking processes",
      icon: Mail,
      bgColor: "bg-card",
      textColor: "text-foreground"
    },
    {
      title: "Financial Analytics",
      description: "Advanced analytics for better financial insights",
      icon: FileText,
      bgColor: "bg-primary",
      textColor: "text-primary-foreground"
    },
    {
      title: "Compliance Tracking",
      description: "Stay compliant with automated regulatory reporting",
      icon: BarChart3,
      bgColor: "bg-foreground", 
      textColor: "text-background"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium mb-4">
            Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            At our agency, we're reinventing Tally automation to boost productivity. That's Business Innovation Strategy.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className={`${service.bgColor} border border-border hover:shadow-card transition-all duration-300`}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-3 flex-1">
                      <h3 className={`text-lg font-semibold ${service.textColor}`}>
                        {service.title}
                      </h3>
                      <p className={`text-sm ${service.textColor} opacity-80`}>
                        {service.description}
                      </p>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className={`${service.textColor} hover:bg-white/10 p-0 h-auto font-normal`}
                      >
                        Learn more →
                      </Button>
                    </div>
                    <IconComponent className={`h-8 w-8 ${service.textColor} opacity-60`} />
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