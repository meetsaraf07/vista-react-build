import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8 animate-slide-up">
            <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium">
              Contact Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Connect with Our Expert Developers For
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Get in touch with our team to discuss your automation needs and discover how AUTO-FIN can transform your business operations.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-3xl border-0 shadow-card animate-scale-in">
            <form className="space-y-6">
              <div>
                <label className="text-sm font-medium text-foreground mb-3 block">
                  Name
                </label>
                <Input 
                  placeholder="Name"
                  className="border-border focus:ring-primary rounded-lg p-4"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-3 block">
                  Email*
                </label>
                <Input 
                  type="email"
                  placeholder="Email"
                  className="border-border focus:ring-primary rounded-lg p-4"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-3 block">
                  Message*
                </label>
                <Textarea 
                  placeholder="Message"
                  rows={5}
                  className="border-border focus:ring-primary resize-none rounded-lg p-4"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-foreground hover:bg-foreground/90 text-background rounded-lg py-4 hover-lift"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;