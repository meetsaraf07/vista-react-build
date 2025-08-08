const StatsSection = () => {
  const stats = [
    { number: "2,245,341", label: "Website visitors" },
    { number: "46,328", label: "Qualified leads generated" },
    { number: "828,867", label: "Automated invoices processed" },
    { number: "1,926,436", label: "Successful reconciliations" }
  ];

  return (
    <section id="stats" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-lg mx-auto leading-tight">
            Helping a local{" "}
            <span className="gradient-text">business reinvent itself</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
            We reached here with our hard work and dedication
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-scale-in" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;