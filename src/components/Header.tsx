import { Button } from "@/components/ui/button";

const Header = () => {
  const navItems = [
    { name: "About us", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Use Cases", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-foreground">
              AUTO-FIN
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Request a quote
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;