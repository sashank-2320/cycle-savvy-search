import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, TrendingUp, Shield, Zap } from "lucide-react";
import heroBike from "@/assets/hero-bike.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(251, 146, 60, 0.8)), url(${heroBike})`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Your Perfect Ride
            <br />
            <span className="bg-gradient-to-r from-white to-accent-light bg-clip-text text-transparent">
              Awaits You
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            Discover, compare, and buy the best two-wheelers from trusted dealers. 
            From bikes to scooters and EVs - find your ride today!
          </p>

          {/* Search Bar */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-large max-w-4xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <Input 
                  placeholder="Search by brand, model, or keyword..." 
                  className="h-12 text-lg border-0 shadow-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Select>
                <SelectTrigger className="h-12 border-0 shadow-none">
                  <SelectValue placeholder="Vehicle Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bike">Bikes</SelectItem>
                  <SelectItem value="scooter">Scooters</SelectItem>
                  <SelectItem value="ev">Electric</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="h-12 border-0 shadow-none">
                  <SelectValue placeholder="Budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-50k">Under ₹50K</SelectItem>
                  <SelectItem value="50k-1l">₹50K - ₹1L</SelectItem>
                  <SelectItem value="1l-2l">₹1L - ₹2L</SelectItem>
                  <SelectItem value="above-2l">Above ₹2L</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button variant="hero" size="lg" className="flex-1 h-12 text-lg">
                <Search className="w-5 h-5 mr-2" />
                Search Vehicles
              </Button>
              <Button variant="accent" size="lg" className="h-12 text-lg">
                Advanced Filters
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center animate-slide-up">
              <TrendingUp className="w-8 h-8 text-accent-light mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">10K+</div>
              <div className="text-white/80">Vehicles Sold</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center animate-slide-up delay-200">
              <Shield className="w-8 h-8 text-accent-light mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">200+</div>
              <div className="text-white/80">Trusted Dealers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center animate-slide-up delay-400">
              <Zap className="w-8 h-8 text-accent-light mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">50K+</div>
              <div className="text-white/80">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;