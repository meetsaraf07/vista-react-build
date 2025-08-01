import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              AUTOMATE YOUR TALLY WITH{" "}
              <span className="text-primary">AUTO-FIN</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Transform your business with our comprehensive ERP automation solution. 
              Streamline your Tally operations and boost productivity with intelligent automation.
            </p>
            <Button 
              size="lg" 
              className="bg-foreground hover:bg-foreground/90 text-background px-8 py-6 text-lg"
            >
              Book a consultation
            </Button>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-md h-64 bg-muted rounded-lg border border-border flex items-center justify-center">
              <div className="text-muted-foreground text-center">
                <div className="w-16 h-16 bg-muted-foreground/20 rounded-lg mx-auto mb-4"></div>
                <p>Dashboard Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;