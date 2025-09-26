import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Plus, X, Star, Fuel, Zap } from "lucide-react";
import { useApp } from "@/context/AppContext";

interface CompareVehiclesProps {
  onBack: () => void;
}

const CompareVehicles: React.FC<CompareVehiclesProps> = ({ onBack }) => {
  const { vehicles } = useApp();
  const [selectedVehicles, setSelectedVehicles] = useState<string[]>([]);

  const addVehicleToCompare = (vehicleId: string) => {
    if (selectedVehicles.length < 3 && !selectedVehicles.includes(vehicleId)) {
      setSelectedVehicles([...selectedVehicles, vehicleId]);
    }
  };

  const removeVehicleFromCompare = (vehicleId: string) => {
    setSelectedVehicles(selectedVehicles.filter(id => id !== vehicleId));
  };

  const compareVehicles = selectedVehicles.map(id => vehicles.find(v => v.id === id)).filter(Boolean);

  const formatPrice = (price: number) => {
    if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)}L`;
    }
    return `₹${(price / 1000).toFixed(0)}K`;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" size="icon" onClick={onBack}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Compare Vehicles</h1>
            <p className="text-muted-foreground">Compare up to 3 vehicles side by side</p>
          </div>
        </div>

        {/* Vehicle Selection */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Select Vehicles to Compare</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              {[0, 1, 2].map((index) => (
                <div key={index} className="flex-1 min-w-[200px]">
                  {selectedVehicles[index] ? (
                    <div className="flex items-center gap-2 p-3 border border-border rounded-lg">
                      <span className="flex-1 text-sm font-medium">
                        {vehicles.find(v => v.id === selectedVehicles[index])?.name}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeVehicleFromCompare(selectedVehicles[index])}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ) : (
                    <Select onValueChange={(value) => addVehicleToCompare(value)}>
                      <SelectTrigger>
                        <SelectValue placeholder={`Select Vehicle ${index + 1}`} />
                      </SelectTrigger>
                      <SelectContent>
                        {vehicles
                          .filter(v => !selectedVehicles.includes(v.id))
                          .map((vehicle) => (
                            <SelectItem key={vehicle.id} value={vehicle.id}>
                              {vehicle.brand} {vehicle.name}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Comparison Table */}
        {compareVehicles.length >= 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Vehicle Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-medium">Specification</th>
                      {compareVehicles.map((vehicle) => (
                        <th key={vehicle.id} className="text-center p-4">
                          <div className="space-y-2">
                            <img
                              src={vehicle.image}
                              alt={vehicle.name}
                              className="w-20 h-16 object-cover rounded mx-auto"
                            />
                            <div className="text-sm font-medium">{vehicle.name}</div>
                            <Badge variant="outline" className="text-xs">
                              {vehicle.brand}
                            </Badge>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Price</td>
                      {compareVehicles.map((vehicle) => (
                        <td key={vehicle.id} className="p-4 text-center">
                          <div className="text-lg font-bold text-primary">
                            {formatPrice(vehicle.price)}
                          </div>
                          {vehicle.originalPrice && (
                            <div className="text-sm text-muted-foreground line-through">
                              {formatPrice(vehicle.originalPrice)}
                            </div>
                          )}
                        </td>
                      ))}
                    </tr>
                    
                    <tr className="border-b">
                      <td className="p-4 font-medium">Rating</td>
                      {compareVehicles.map((vehicle) => (
                        <td key={vehicle.id} className="p-4 text-center">
                          <div className="flex items-center justify-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="font-medium">{vehicle.rating}</span>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            ({vehicle.reviews} reviews)
                          </div>
                        </td>
                      ))}
                    </tr>

                    <tr className="border-b">
                      <td className="p-4 font-medium">Fuel Type</td>
                      {compareVehicles.map((vehicle) => (
                        <td key={vehicle.id} className="p-4 text-center">
                          <div className="flex items-center justify-center gap-1">
                            {vehicle.fuelType === 'Electric' ? (
                              <Zap className="w-4 h-4 text-green-500" />
                            ) : (
                              <Fuel className="w-4 h-4 text-orange-500" />
                            )}
                            <span>{vehicle.fuelType}</span>
                          </div>
                        </td>
                      ))}
                    </tr>

                    <tr className="border-b">
                      <td className="p-4 font-medium">Mileage/Range</td>
                      {compareVehicles.map((vehicle) => (
                        <td key={vehicle.id} className="p-4 text-center">
                          <span className="font-medium">
                            {vehicle.mileage} {vehicle.fuelType === 'Electric' ? 'km' : 'kmpl'}
                          </span>
                        </td>
                      ))}
                    </tr>

                    {compareVehicles[0]?.engineCapacity && (
                      <tr className="border-b">
                        <td className="p-4 font-medium">Engine Capacity</td>
                        {compareVehicles.map((vehicle) => (
                          <td key={vehicle.id} className="p-4 text-center">
                            <span className="font-medium">
                              {vehicle.engineCapacity ? `${vehicle.engineCapacity}cc` : 'N/A'}
                            </span>
                          </td>
                        ))}
                      </tr>
                    )}

                    <tr className="border-b">
                      <td className="p-4 font-medium">Category</td>
                      {compareVehicles.map((vehicle) => (
                        <td key={vehicle.id} className="p-4 text-center">
                          <Badge variant="secondary" className="capitalize">
                            {vehicle.category}
                          </Badge>
                        </td>
                      ))}
                    </tr>

                    <tr>
                      <td className="p-4 font-medium">Actions</td>
                      {compareVehicles.map((vehicle) => (
                        <td key={vehicle.id} className="p-4 text-center">
                          <div className="space-y-2">
                            <Button size="sm" className="w-full">
                              View Details
                            </Button>
                            <Button variant="outline" size="sm" className="w-full">
                              Book Test Ride
                            </Button>
                          </div>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {compareVehicles.length < 2 && (
          <Card className="text-center py-12">
            <CardContent>
              <div className="text-muted-foreground mb-4">
                Select at least 2 vehicles to start comparing
              </div>
              <Plus className="w-12 h-12 text-muted-foreground mx-auto" />
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default CompareVehicles;