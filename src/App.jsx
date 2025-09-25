import React, { useState } from 'react';
import { AppProvider } from './context/AppContext';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturedVehicles from "./components/FeaturedVehicles";
import Categories from "./components/Categories";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";
import VehicleDetails from "./components/VehicleDetails";
import SearchResults from "./components/SearchResults";

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedVehicleId, setSelectedVehicleId] = useState(null);

  const handleViewDetails = (vehicleId) => {
    setSelectedVehicleId(vehicleId);
    setCurrentView('details');
  };

  const handleNavigate = (page) => {
    setCurrentView(page);
  };

  const handleSearch = () => {
    setCurrentView('search');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'details':
        return (
          <VehicleDetails 
            vehicleId={selectedVehicleId}
            onBack={() => setCurrentView('home')}
          />
        );
      case 'search':
        return (
          <div className="min-h-screen bg-background">
            <Navbar onNavigate={handleNavigate} onSearch={handleSearch} />
            <div className="pt-16">
              <SearchResults />
            </div>
          </div>
        );
      default:
        return (
          <div className="min-h-screen bg-background">
            <Navbar onNavigate={handleNavigate} onSearch={handleSearch} />
            <HeroSection />
            <Categories />
            <FeaturedVehicles onViewDetails={handleViewDetails} />
            <WhyChooseUs />
            <Footer />
          </div>
        );
    }
  };

  return (
    <AppProvider>
      {renderContent()}
    </AppProvider>
  );
}

export default App;