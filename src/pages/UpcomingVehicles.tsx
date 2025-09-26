import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Zap, Bell } from "lucide-react";

interface UpcomingVehiclesProps {
  onBack: () => void;
}

const UpcomingVehicles: React.FC<UpcomingVehiclesProps> = ({ onBack }) => {
  const upcomingVehicles = [
    {
      id: "u1",
      name: "Bajaj Pulsar N250",
      brand: "Bajaj",
      expectedPrice: "₹1.45 - ₹1.65 Lakh",
      launchDate: "March 2024",
      category: "Sport Bike",
      engineCapacity: "250cc",
      expectedMileage: "30-35 kmpl",
      keyFeatures: ["LED Headlamps", "Digital Console", "Single Channel ABS"],
      image: "/assets/hero-bike.jpg"
    },
    {
      id: "u2",
      name: "Ola S1 Pro Gen 3",
      brand: "Ola Electric",
      expectedPrice: "₹1.30 - ₹1.50 Lakh",
      launchDate: "April 2024",
      category: "Electric Scooter",
      range: "180+ km",
      expectedMileage: "N/A",
      keyFeatures: ["Advanced Battery Tech", "AI Features", "Fast Charging"],
      image: "/assets/electric-scooter.jpg"
    },
    {
      id: "u3",
      name: "Royal Enfield Hunter 350",
      brand: "Royal Enfield",
      expectedPrice: "₹1.50 - ₹1.75 Lakh",
      launchDate: "May 2024",
      category: "Roadster",
      engineCapacity: "349cc",
      expectedMileage: "36-40 kmpl",
      keyFeatures: ["Retro Design", "Tripper Navigation", "Dual Channel ABS"],
      image: "/assets/classic-bike.jpg"
    },
    {
      id: "u4",
      name: "Honda PCX 160",
      brand: "Honda",
      expectedPrice: "₹1.20 - ₹1.40 Lakh",
      launchDate: "June 2024",
      category: "Premium Scooter",
      engineCapacity: "157cc",
      expectedMileage: "45-50 kmpl",
      keyFeatures: ["Smart Key", "USB Charger", "Large Storage"],
      image: "/assets/cruiser-bike.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" size="icon" onClick={onBack}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Upcoming Vehicles</h1>
            <p className="text-muted-foreground">Get notified about the latest launches</p>
          </div>
        </div>

        {/* Upcoming Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingVehicles.map((vehicle) => (
            <Card key={vehicle.id} className="group hover:shadow-lg transition-all duration-300">
              <div className="relative">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-4 left-4 bg-orange-500 text-white">
                  Coming Soon
                </Badge>
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{vehicle.name}</CardTitle>
                  <Badge variant="outline">{vehicle.category}</Badge>
                </div>
                <CardDescription className="text-sm text-muted-foreground">
                  {vehicle.brand}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Expected Launch: {vehicle.launchDate}</span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Expected Price:</span>
                    <span className="font-medium">{vehicle.expectedPrice}</span>
                  </div>
                  
                  {vehicle.engineCapacity && (
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Engine:</span>
                      <span className="font-medium">{vehicle.engineCapacity}</span>
                    </div>
                  )}
                  
                  {vehicle.range && (
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Range:</span>
                      <span className="font-medium">{vehicle.range}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Mileage:</span>
                    <span className="font-medium">{vehicle.expectedMileage}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {vehicle.keyFeatures.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full" variant="outline">
                  <Bell className="w-4 h-4 mr-2" />
                  Notify Me
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="mt-12 bg-gradient-to-br from-primary/10 to-secondary/10">
          <CardHeader className="text-center">
            <CardTitle>Stay Updated</CardTitle>
            <CardDescription>
              Get notified about new launches, price updates, and exclusive offers
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-border rounded-lg flex-1 max-w-md"
            />
            <Button>Subscribe to Updates</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UpcomingVehicles;