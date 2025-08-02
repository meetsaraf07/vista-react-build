import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-slide-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[0.9] tracking-tight">
              HERO TEXT THAT{" "}
              <span className="gradient-text">ATTRACT TO THE</span>{" "}
              USER
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              Something that describes your hero text and what the business has to the user to entice.
            </p>
            <Button 
              className="bg-foreground hover:bg-foreground/90 text-background px-8 py-4 text-sm font-medium rounded-lg hover-lift animate-bounce-in"
            >
              Book a consultation
            </Button>
          </div>
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="w-full max-w-lg h-80 bg-muted rounded-3xl border border-border flex items-center justify-center animate-float">
              <div className="text-muted-foreground text-center">
                <div className="w-20 h-20 bg-muted-foreground/20 rounded-2xl mx-auto mb-4"></div>
                <p className="text-sm">Placeholder Image</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;