import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium">
              Contact Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Connect with Our Expert Developers For
            </h2>
            <p className="text-muted-foreground">
              Get in touch with our team to discuss your Tally automation needs and discover how AUTO-FIN can transform your business operations.
            </p>
          </div>
          
          <Card className="bg-card border border-border">
            <CardContent className="p-6">
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Name
                  </label>
                  <Input 
                    placeholder="Your name"
                    className="border-border focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input 
                    type="email"
                    placeholder="Your email"
                    className="border-border focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your project"
                    rows={4}
                    className="border-border focus:ring-primary resize-none"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-foreground hover:bg-foreground/90 text-background"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;