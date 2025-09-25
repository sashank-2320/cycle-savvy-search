import { Button } from "@/components/ui/button";
import { Search, User, Heart, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">VB</span>
            </div>
            <span className="text-xl font-bold text-foreground">Vahan Bazar</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Browse Bikes
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Scooters
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Electric
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Upcoming
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Compare
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="w-4 h-4" />
            </Button>
            <Button variant="accent" className="hidden md:flex">
              Sell Your Bike
            </Button>
            <Button variant="hero">
              Book Test Ride
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;