import React from 'react';
import VehicleCard from './VehicleCard';
import { useApp } from '@/context/AppContext';

const SearchResults = () => {
  const { filteredVehicles, searchQuery, selectedCategory, selectedBudget } = useApp();

  const getFilterText = () => {
    const filters = [];
    if (searchQuery) filters.push(`"${searchQuery}"`);
    if (selectedCategory && selectedCategory !== 'all') {
      if (selectedCategory === 'ev') filters.push('Electric vehicles');
      else filters.push(selectedCategory + 's');
    }
    if (selectedBudget) {
      switch (selectedBudget) {
        case 'under-50k': filters.push('Under ₹50K'); break;
        case '50k-1l': filters.push('₹50K - ₹1L'); break;
        case '1l-2l': filters.push('₹1L - ₹2L'); break;
        case 'above-2l': filters.push('Above ₹2L'); break;
      }
    }
    return filters.length > 0 ? ` for ${filters.join(', ')}` : '';
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Search Results
            {getFilterText() && (
              <span className="text-primary">{getFilterText()}</span>
            )}
          </h2>
          <p className="text-muted-foreground text-lg">
            Found {filteredVehicles.length} vehicles matching your criteria
          </p>
        </div>

        {filteredVehicles.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No vehicles found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or browse our featured vehicles
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVehicles.map((vehicle) => (
              <div key={vehicle.id} className="animate-fade-in">
                <VehicleCard {...vehicle} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchResults;