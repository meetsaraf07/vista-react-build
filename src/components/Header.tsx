import { Button } from "@/components/ui/button";

const Header = () => {
  const navItems = [
    { name: "About us", href: "#stats" },
    { name: "Contact", href: "#contact" },
    { name: "Use Cases", href: "#services" },
    { name: "Pricing", href: "#contact" },
    { name: "Blog", href: "#footer" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-foreground tracking-tight">
            AUTO-FIN
          </div>
          <nav className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
          </nav>
          <Button 
            asChild
            className="bg-foreground hover:bg-foreground/90 text-background px-6 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover-lift"
          >
            <a href="#contact">Request a quote</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;