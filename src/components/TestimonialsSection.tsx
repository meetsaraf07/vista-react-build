import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "AUTO-FIN transformed our accounting processes completely. The Tally integration saved us hours of manual work every day.",
      author: "Sarah Johnson",
      position: "Finance Director",
      company: "TechCorp Solutions"
    },
    {
      quote: "The automated reporting feature is a game-changer. We now have real-time insights into our financial data without any manual intervention.",
      author: "Michael Chen",
      position: "CFO",
      company: "Innovation Ltd"
    },
    {
      quote: "Outstanding support and seamless implementation. AUTO-FIN made our ERP integration smooth and efficient.",
      author: "Emma Rodriguez",
      position: "Operations Manager", 
      company: "Global Enterprises"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Hear what our amazing customers say about AUTO-FIN's automation solutions
          </h2>
        </div>

        <Card className="bg-foreground border-0">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-background">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="space-y-4">
                  <p className="text-background/90 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="space-y-1">
                    <p className="font-semibold text-background">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-background/70">
                      {testimonial.position}
                    </p>
                    <p className="text-sm text-background/70">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-between mt-8">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-background rounded-full"></div>
                <div className="w-2 h-2 bg-background/50 rounded-full"></div>
                <div className="w-2 h-2 bg-background/50 rounded-full"></div>
                <div className="w-2 h-2 bg-background/50 rounded-full"></div>
              </div>
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm" className="text-background hover:bg-background/10">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-background hover:bg-background/10">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TestimonialsSection;