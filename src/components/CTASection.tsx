import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Let's make things happen
            </h2>
            <p className="text-muted-foreground max-w-md">
              Contact us today to learn more about how our automation solutions can improve your business performance.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Button 
              size="lg" 
              className="bg-foreground hover:bg-foreground/90 text-background px-8 py-6"
            >
              Get your free proposal
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;