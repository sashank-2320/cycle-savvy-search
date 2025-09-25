import { Button } from "@/components/ui/button";
import { Bike, Zap, Car, TrendingUp } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Sport Bikes",
      icon: Bike,
      description: "High-performance bikes for thrill seekers",
      count: "150+ models",
      color: "from-primary to-primary-dark",
      textColor: "text-primary-foreground"
    },
    {
      id: 2,
      name: "Electric Vehicles",
      icon: Zap,
      description: "Eco-friendly and cost-effective rides",
      count: "80+ models", 
      color: "from-accent to-accent-light",
      textColor: "text-accent-foreground"
    },
    {
      id: 3,
      name: "Scooters",
      icon: Car,
      description: "Perfect for daily city commuting",
      count: "120+ models",
      color: "from-muted-foreground to-foreground",
      textColor: "text-primary-foreground"
    },
    {
      id: 4,
      name: "Upcoming Launches",
      icon: TrendingUp,
      description: "Pre-book the latest upcoming models",
      count: "25+ models",
      color: "from-destructive to-pink-500",
      textColor: "text-destructive-foreground"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Browse by Categories
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find the perfect vehicle for your needs. From sport bikes to eco-friendly EVs, 
            we have something for everyone.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div 
              key={category.id} 
              className={`bg-gradient-to-br ${category.color} rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300 shadow-medium hover:shadow-large animate-slide-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                <div className={`w-16 h-16 ${category.textColor === 'text-primary-foreground' ? 'bg-white/20' : 'bg-white/10'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <category.icon className={`w-8 h-8 ${category.textColor}`} />
                </div>
                <h3 className={`text-xl font-bold ${category.textColor} mb-2`}>
                  {category.name}
                </h3>
                <p className={`${category.textColor} opacity-90 text-sm mb-2`}>
                  {category.description}
                </p>
                <p className={`${category.textColor} opacity-75 text-xs font-medium`}>
                  {category.count}
                </p>
              </div>
              
              <Button 
                variant="secondary" 
                className="w-full mt-4 bg-white/20 hover:bg-white/30 text-white border-white/30"
              >
                Explore Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;