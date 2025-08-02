const TrustedBrands = () => {
  const brands = [
    "amazon", "dribbble", "HubSpot", "Notion", "NETFLIX", "zoom"
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-16">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="h-8 flex items-center justify-center opacity-40 hover:opacity-60 transition-opacity duration-200">
                <span className="text-lg font-semibold text-foreground tracking-wide">{brand}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;