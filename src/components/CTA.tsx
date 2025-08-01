import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const CTA = () => {
  const benefits = [
    "14-day free trial",
    "No credit card required",
    "Cancel anytime",
    "24/7 support included"
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-r from-primary/5 via-background to-primary-glow/5">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are already building the future with our platform.
          </p>

          {/* Benefits list */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-foreground">
                <div className="w-5 h-5 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary-foreground" />
                </div>
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="min-w-[250px] group">
              Start Building Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="min-w-[250px]">
              Talk to Sales
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-16 border-t border-border/20">
            <p className="text-sm text-muted-foreground mb-6">Trusted by teams at</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {['TechCorp', 'InnovateAI', 'DataFlow', 'CloudScale', 'DevTech'].map((company, index) => (
                <div key={index} className="text-lg font-semibold text-muted-foreground">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;