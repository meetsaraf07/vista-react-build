const StatsSection = () => {
  const stats = [
    {
      title: "Helping a local",
      subtitle: "business reinvent itself",
      description: "We reached here with our hard work and dedication"
    },
    {
      number: "2,245,341",
      label: "Members"
    },
    {
      number: "46,328",
      label: "Clubs"
    },
    {
      number: "828,867",
      label: "Event Bookings"
    },
    {
      number: "1,926,436",
      label: "Payments"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              {stats[0].title}
            </h3>
            <h4 className="text-xl text-primary font-semibold">
              {stats[0].subtitle}
            </h4>
            <p className="text-muted-foreground">
              {stats[0].description}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 lg:col-span-2">
            {stats.slice(1).map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-3xl font-bold text-foreground">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;