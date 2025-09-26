import { Button } from "@/components/ui/button";
import { Search, User, Heart, Menu, ShoppingCart } from "lucide-react";
import { useApp } from "@/context/AppContext";

interface NavbarProps {
  onNavigate?: (page: string) => void;
  onSearch?: () => void;
}

const Navbar = ({ onNavigate, onSearch }: NavbarProps) => {
  const { searchVehicles, wishlist } = useApp();
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
            <button 
              onClick={() => {
                searchVehicles('', 'bike', '');
                onSearch?.();
              }}
              className="text-foreground hover:text-primary transition-colors"
            >
              Browse Bikes
            </button>
            <button 
              onClick={() => {
                searchVehicles('', 'scooter', '');
                onSearch?.();
              }}
              className="text-foreground hover:text-primary transition-colors"
            >
              Scooters
            </button>
            <button 
              onClick={() => {
                searchVehicles('', 'ev', '');
                onSearch?.();
              }}
              className="text-foreground hover:text-primary transition-colors"
            >
              Electric
            </button>
            <button 
              onClick={() => onNavigate?.('upcoming')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Upcoming
            </button>
            <button 
              onClick={() => onNavigate?.('compare')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Compare
            </button>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hidden md:flex"
              onClick={onSearch}
            >
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="w-4 h-4" />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Button>
            <Button 
              variant="accent" 
              className="hidden md:flex"
              onClick={() => onNavigate?.('sell')}
            >
              Sell Your Bike
            </Button>
            <Button 
              variant="hero"
              onClick={() => onNavigate?.('book-test-ride')}
            >
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