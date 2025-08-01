const Footer = () => {
  const footerLinks = {
    "About us": ["Team", "Careers", "Contact"],
    "Services": ["Tally Integration", "ERP Solutions", "Automation"],
    "Use Cases": ["Manufacturing", "Retail", "Services"],
    "Pricing": ["Plans", "Enterprise", "Support"]
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-1">
            <div className="text-2xl font-bold mb-4">AUTO-FIN</div>
            <div className="space-y-1 text-sm text-background/70">
              <p>Automating Tally Solutions</p>
              <p>For Better Business</p>
              <p>Phone: +91-XXXXXXXXX</p>
              <p>Address: Your Business Address</p>
              <p>Email: contact@autofin.com</p>
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-background">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-background/70 hover:text-background transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/70 text-sm">
            © 2024 AUTO-FIN. All rights reserved. | Privacy Policy
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <div className="w-8 h-8 bg-background/20 rounded-full"></div>
            <div className="w-8 h-8 bg-background/20 rounded-full"></div>
            <div className="w-8 h-8 bg-background/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;