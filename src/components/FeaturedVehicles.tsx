import VehicleCard from "./VehicleCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import electricScooter from "@/assets/electric-scooter.jpg";
import classicBike from "@/assets/classic-bike.jpg";
import heroBike from "@/assets/hero-bike.jpg";

const FeaturedVehicles = () => {
  const vehicles = [
    {
      id: "1",
      name: "Pulsar NS200",
      brand: "Bajaj",
      price: 125000,
      originalPrice: 140000,
      image: heroBike,
      rating: 4.5,
      reviews: 1240,
      mileage: 35,
      fuelType: "Petrol" as const,
      engineCapacity: 200,
      isNew: true,
      discount: 11
    },
    {
      id: "2", 
      name: "Ather 450X",
      brand: "Ather",
      price: 150000,
      image: electricScooter,
      rating: 4.7,
      reviews: 856,
      mileage: 85,
      fuelType: "Electric" as const,
      isNew: false
    },
    {
      id: "3",
      name: "Royal Enfield Classic 350",
      brand: "Royal Enfield",
      price: 175000,
      image: classicBike,
      rating: 4.3,
      reviews: 2100,
      mileage: 40,
      fuelType: "Petrol" as const,
      engineCapacity: 350,
      isNew: false
    },
    {
      id: "4",
      name: "Honda Activa 6G",
      brand: "Honda",
      price: 75000,
      image: electricScooter,
      rating: 4.4,
      reviews: 3200,
      mileage: 60,
      fuelType: "Petrol" as const,
      engineCapacity: 110,
      isNew: false
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Featured Vehicles
            </h2>
            <p className="text-muted-foreground text-lg">
              Discover the most popular bikes and scooters
            </p>
          </div>
          
          <div className="hidden md:flex items-center gap-2">
            <Button variant="outline" size="icon">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="animate-fade-in">
              <VehicleCard {...vehicle} />
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center">
          <Button variant="hero" size="lg">
            View All Vehicles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;