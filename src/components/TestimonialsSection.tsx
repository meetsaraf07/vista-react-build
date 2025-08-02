import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      author: "John Smith",
      position: "Marketing Director",
      company: "XYZ Corp"
    },
    {
      quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business.",
      author: "Jane Doe",
      position: "CEO",
      company: "ABC Inc"
    },
    {
      quote: "Outstanding support and seamless implementation. The results speak for themselves - our ROI has improved dramatically since partnering with this amazing team.",
      author: "Mike Johnson",
      position: "Operations Manager", 
      company: "Global Tech"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium mb-6">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground max-w-2xl">
            Hear what our amazing customers say about us
          </h2>
        </div>

        <Card className="bg-foreground border-0 rounded-3xl animate-slide-up">
          <CardContent className="p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-background">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="space-y-6 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                  <p className="text-background/90 leading-relaxed text-sm">
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
            
            <div className="flex items-center justify-between mt-12">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-background rounded-full"></div>
                <div className="w-3 h-3 bg-background/30 rounded-full"></div>
                <div className="w-3 h-3 bg-background/30 rounded-full"></div>
                <div className="w-3 h-3 bg-background/30 rounded-full"></div>
              </div>
              <div className="flex space-x-3">
                <Button variant="ghost" size="sm" className="text-background hover:bg-background/10 w-10 h-10 rounded-full p-0">
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-background hover:bg-background/10 w-10 h-10 rounded-full p-0">
                  <ChevronRight className="h-5 w-5" />
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