import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      quote: "We have been working with AutoFin for the past year and have seen a significant increase in Tally automation efficiency and cost reduction. The team is professional, responsive, and truly cares about the success of our business. We highly recommend AutoFin to any company looking to streamline their ERP processes.",
      author: "John Smith",
      position: "Finance Director",
      company: "Tech Solutions Ltd"
    },
    {
      quote: "AutoFin's Tally automation has transformed our accounting processes. The seamless integration and automated reporting have saved us countless hours while improving accuracy across all our financial operations.",
      author: "Jane Doe",
      position: "CEO",
      company: "Manufacturing Corp"
    },
    {
      quote: "Outstanding support and seamless implementation. The results speak for themselves - our processing time has reduced by 80% since partnering with AutoFin for our ERP automation needs.",
      author: "Mike Johnson",
      position: "Operations Manager", 
      company: "Global Enterprises"
    },
    {
      quote: "The automated Tally integration provided by AutoFin has revolutionized our financial workflow. Real-time data sync and automated reconciliation have eliminated manual errors completely.",
      author: "Sarah Williams",
      position: "CFO",
      company: "Retail Plus"
    },
    {
      quote: "AutoFin's ERP portal integration has streamlined our entire business process. From inventory management to financial reporting, everything is now automated and efficient.",
      author: "David Brown",
      position: "IT Director",
      company: "Service Industries"
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    if (isMobile) {
      return [testimonials[currentIndex]];
    }
    // Show 3 testimonials on desktop
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section id="testimonials" className="py-20 px-6">
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
            <div className={`${isMobile ? 'flex' : 'grid grid-cols-3'} gap-12 text-background`}>
              {getVisibleTestimonials().map((testimonial, index) => (
                <TestimonialCard
                  key={`${currentIndex}-${index}`}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  position={testimonial.position}
                  company={testimonial.company}
                />
              ))}
            </div>
            
            <div className="flex items-center justify-between mt-12">
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <div 
                    key={index} 
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-background' : 'bg-background/30'
                    }`}
                  />
                ))}
              </div>
              <div className="flex space-x-3">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-background hover:bg-background/10 w-10 h-10 rounded-full p-0"
                  onClick={prevTestimonial}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-background hover:bg-background/10 w-10 h-10 rounded-full p-0"
                  onClick={nextTestimonial}
                >
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