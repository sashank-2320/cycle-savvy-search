import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Heart, 
  Star, 
  Fuel, 
  Zap, 
  ArrowLeft, 
  Share2, 
  Phone,
  MapPin,
  Calendar,
  Settings,
  Award,
  Shield,
  Eye
} from "lucide-react";
import { useApp } from '@/context/AppContext';
import EMICalculator from './EMICalculator';
import BookingForm from './BookingForm';
import Vehicle360View from './Vehicle360View';

const VehicleDetails = ({ vehicleId, onBack }) => {
  const { getVehicleById, wishlist, toggleWishlist } = useApp();
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  
  const vehicle = getVehicleById(vehicleId);
  
  if (!vehicle) {
    return (
      <div className="text-center py-20">
        <p className="text-muted-foreground">Vehicle not found</p>
        <Button onClick={onBack} className="mt-4">Go Back</Button>
      </div>
    );
  }

  const isInWishlist = wishlist.includes(vehicle.id);

  const formatPrice = (price) => {
    if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)}L`;
    }
    return `₹${(price / 1000).toFixed(0)}K`;
  };

  const specifications = [
    { label: 'Max Power', value: vehicle.specifications.maxPower, icon: Settings },
    { label: 'Max Torque', value: vehicle.specifications.maxTorque, icon: Settings },
    { label: 'Transmission', value: vehicle.specifications.transmission, icon: Settings },
    { label: 'Fuel Capacity', value: vehicle.specifications.fuelCapacity || vehicle.specifications.range, icon: Fuel },
    { label: 'Weight', value: vehicle.specifications.weight, icon: Settings },
  ];

  if (showBookingForm) {
    return (
      <BookingForm 
        vehicle={vehicle}
        onBack={() => setShowBookingForm(false)}
        onClose={() => setShowBookingForm(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={onBack}
              className="text-white hover:bg-white/20"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Vehicles
            </Button>
            <div className="flex items-center gap-2">
              <Button variant="ghost" className="text-white hover:bg-white/20">
                <Share2 className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => toggleWishlist(vehicle.id)}
                className={`text-white hover:bg-white/20 ${isInWishlist ? 'text-accent' : ''}`}
              >
                <Heart className={`w-4 h-4 ${isInWishlist ? 'fill-current' : ''}`} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Vehicle Image */}
            <Card className="p-6 mb-6">
              <div className="relative">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  className="w-full h-80 object-cover rounded-lg"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {vehicle.isNew && <Badge className="bg-accent text-accent-foreground">New Launch</Badge>}
                  {vehicle.discount && (
                    <Badge className="bg-destructive text-destructive-foreground">
                      {vehicle.discount}% Off
                    </Badge>
                  )}
                  {vehicle.fuelType === "Electric" && (
                    <Badge className="bg-primary text-primary-foreground">
                      <Zap className="w-3 h-3 mr-1" />
                      Electric
                    </Badge>
                  )}
                </div>
              </div>
            </Card>

            {/* Vehicle Info */}
            <Card className="p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{vehicle.brand}</div>
                  <h1 className="text-3xl font-bold text-card-foreground mb-2">{vehicle.name}</h1>
                  
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="font-medium">{vehicle.rating}</span>
                      <span className="text-muted-foreground">({vehicle.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Top Rated</span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-3xl font-bold text-card-foreground">
                      {formatPrice(vehicle.price)}
                    </span>
                    {vehicle.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">
                        {formatPrice(vehicle.originalPrice)}
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">Ex-showroom Delhi</div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{vehicle.description}</p>

              {/* Key Specs */}
              <div className="flex items-center gap-6 text-sm text-muted-foreground border-t pt-4">
                <div className="flex items-center gap-1">
                  <Fuel className="w-4 h-4" />
                  <span>{vehicle.mileage} {vehicle.fuelType === 'Electric' ? 'km/charge' : 'km/l'}</span>
                </div>
                {vehicle.engineCapacity && (
                  <div>{vehicle.engineCapacity}cc</div>
                )}
                <div className="px-2 py-1 bg-muted rounded-md text-xs">
                  {vehicle.fuelType}
                </div>
              </div>
            </Card>

            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="specs">Specifications</TabsTrigger>
                <TabsTrigger value="360view">
                  <Eye className="w-4 h-4 mr-1" />
                  360° View
                </TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-primary" />
                      <span>Safety Features</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Settings className="w-4 h-4 text-primary" />
                      <span>Advanced Technology</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span>Award Winning Design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Fuel className="w-4 h-4 text-primary" />
                      <span>Fuel Efficient</span>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="specs" className="mt-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Technical Specifications</h3>
                  <div className="space-y-4">
                    {specifications.map((spec, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b border-border/50">
                        <div className="flex items-center gap-2">
                          <spec.icon className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{spec.label}</span>
                        </div>
                        <span className="font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="360view" className="mt-6">
                <Vehicle360View 
                  vehicleId={vehicle.id}
                  vehicleName={vehicle.name}
                  baseImage={vehicle.image}
                />
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-secondary rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-4 h-4 fill-accent text-accent" />
                          ))}
                        </div>
                        <span className="font-medium">Excellent Performance</span>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        "Great bike with excellent fuel efficiency and smooth riding experience. Highly recommended!"
                      </p>
                      <div className="text-xs text-muted-foreground mt-2">- Verified Buyer</div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="gallery" className="mt-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Photo Gallery</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <img src={vehicle.image} alt={vehicle.name} className="w-full h-40 object-cover rounded-lg" />
                    <img src={vehicle.image} alt={vehicle.name} className="w-full h-40 object-cover rounded-lg" />
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Action Buttons */}
            <Card className="p-6">
              <div className="space-y-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  onClick={() => setShowBookingForm(true)}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Test Ride
                </Button>
                
                <Button variant="accent" size="lg" className="w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Get Best Price
                </Button>
                
                <Button variant="outline" size="lg" className="w-full">
                  <MapPin className="w-4 h-4 mr-2" />
                  Find Dealers
                </Button>
              </div>
            </Card>

            {/* EMI Calculator */}
            <EMICalculator vehiclePrice={vehicle.price} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;