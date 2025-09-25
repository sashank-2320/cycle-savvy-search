import { Shield, Calculator, Users, Headphones, Award, MapPin } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted Dealers",
      description: "All our dealer partners are verified and certified for quality assurance"
    },
    {
      icon: Calculator,
      title: "EMI Calculator",
      description: "Calculate your monthly payments with our easy-to-use EMI calculator"
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Get personalized recommendations from our vehicle experts"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your queries and concerns"
    },
    {
      icon: Award,
      title: "Best Prices",
      description: "Competitive pricing with exclusive deals and offers just for you"
    },
    {
      icon: MapPin,
      title: "Doorstep Service",
      description: "Test rides and documentation assistance at your convenience"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Vahan Bazar?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We make buying and selling two-wheelers easier, safer, and more rewarding 
            than ever before.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl hover:bg-secondary/50 transition-colors duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;