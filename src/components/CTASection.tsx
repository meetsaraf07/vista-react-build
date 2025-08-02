import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="space-y-8 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Let's make things happen
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
          </p>
          <Button 
            className="bg-foreground hover:bg-foreground/90 text-background px-8 py-4 text-sm font-medium rounded-lg hover-lift animate-bounce-in"
          >
            Get your free proposal
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 opacity-10">
        <div className="w-full h-full bg-primary rounded-full animate-float"></div>
      </div>
      <div className="absolute bottom-10 left-10 w-24 h-24 opacity-10">
        <div className="w-full h-full bg-primary rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      </div>
    </section>
  );
};

export default CTASection;