import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { useApp } from '@/context/AppContext';

const SearchFilters = ({ className = "" }) => {
  const { searchVehicles } = useApp();
  const [localQuery, setLocalQuery] = useState('');
  const [localCategory, setLocalCategory] = useState('');
  const [localBudget, setLocalBudget] = useState('');

  const handleSearch = () => {
    searchVehicles(localQuery, localCategory, localBudget);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={`bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-large ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2">
          <Input 
            placeholder="Search by brand, model, or keyword..." 
            value={localQuery}
            onChange={(e) => setLocalQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="h-12 text-lg border-0 shadow-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <Select value={localCategory} onValueChange={setLocalCategory}>
          <SelectTrigger className="h-12 border-0 shadow-none">
            <SelectValue placeholder="Vehicle Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Vehicles</SelectItem>
            <SelectItem value="bike">Bikes</SelectItem>
            <SelectItem value="scooter">Scooters</SelectItem>
            <SelectItem value="ev">Electric</SelectItem>
          </SelectContent>
        </Select>
        <Select value={localBudget} onValueChange={setLocalBudget}>
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
        <Button 
          variant="hero" 
          size="lg" 
          className="flex-1 h-12 text-lg"
          onClick={handleSearch}
        >
          <Search className="w-5 h-5 mr-2" />
          Search Vehicles
        </Button>
        <Button 
          variant="accent" 
          size="lg" 
          className="h-12 text-lg"
          onClick={() => {
            setLocalQuery('');
            setLocalCategory('');
            setLocalBudget('');
            searchVehicles('', '', '');
          }}
        >
          Clear Filters
        </Button>
      </div>
    </div>
  );
};

export default SearchFilters;