const TrustedBrands = () => {
  const brands = [
    "Tally Solutions",
    "Microsoft",
    "Oracle", 
    "SAP",
    "QuickBooks",
    "Zoho"
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-muted-foreground">Trusted by industry leaders</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 opacity-60 hover:opacity-100 transition-opacity"
            >
              <span className="text-muted-foreground font-medium">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;