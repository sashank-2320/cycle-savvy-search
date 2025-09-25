import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, Fuel, Zap } from "lucide-react";
import { useApp } from '@/context/AppContext';

const VehicleCard = ({ 
  id,
  name, 
  brand, 
  price, 
  originalPrice, 
  image, 
  rating, 
  reviews, 
  mileage, 
  fuelType, 
  engineCapacity,
  isNew = false,
  discount,
  onViewDetails 
}) => {
  const { wishlist, toggleWishlist } = useApp();
  
  const formatPrice = (price) => {
    if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)}L`;
    }
    return `₹${(price / 1000).toFixed(0)}K`;
  };

  return (
    <div className="bg-card rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 group overflow-hidden border border-border/50">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && <Badge className="bg-accent text-accent-foreground">New Launch</Badge>}
          {discount && (
            <Badge className="bg-destructive text-destructive-foreground">
              {discount}% Off
            </Badge>
          )}
          {fuelType === "Electric" && (
            <Badge className="bg-primary text-primary-foreground">
              <Zap className="w-3 h-3 mr-1" />
              Electric
            </Badge>
          )}
        </div>

        {/* Wishlist */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-3 right-3 bg-white/80 hover:bg-white transition-colors"
          onClick={() => toggleWishlist(id)}
        >
          <Heart className={`w-4 h-4 ${wishlist.includes(id) ? 'fill-current text-red-500' : ''}`} />
        </Button>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Header */}
        <div className="mb-3">
          <div className="text-sm text-muted-foreground mb-1">{brand}</div>
          <h3 className="font-semibold text-lg text-card-foreground mb-2">{name}</h3>
          
          {/* Rating */}
          <div className="flex items-center gap-2 text-sm">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span className="font-medium">{rating}</span>
            </div>
            <span className="text-muted-foreground">({reviews} reviews)</span>
          </div>
        </div>

        {/* Specs */}
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Fuel className="w-4 h-4" />
            <span>{mileage} km/l</span>
          </div>
          {engineCapacity && (
            <div>{engineCapacity}cc</div>
          )}
          <div className="px-2 py-1 bg-muted rounded-md text-xs">
            {fuelType}
          </div>
        </div>

        {/* Price & Actions */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-card-foreground">
                {formatPrice(price)}
              </span>
              {originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(originalPrice)}
                </span>
              )}
            </div>
            <div className="text-xs text-muted-foreground">Ex-showroom</div>
          </div>
          
          <div className="flex flex-col gap-2">
            <Button 
              variant="premium" 
              size="sm"
              onClick={() => onViewDetails && onViewDetails(id)}
            >
              View Details
            </Button>
            <Button variant="accent" size="sm">
              Book Test Ride
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;