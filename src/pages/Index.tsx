import { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturedVehicles from "../components/FeaturedVehicles";
import Categories from "../components/Categories";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";
import VehicleDetails from "../components/VehicleDetails";
import SearchResults from "../components/SearchResults";
import UpcomingVehicles from "../pages/UpcomingVehicles";
import CompareVehicles from "../pages/CompareVehicles";

const Index = () => {
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
              <SearchResults onViewDetails={handleViewDetails} />
            </div>
          </div>
        );
      case 'upcoming':
        return (
          <UpcomingVehicles onBack={() => setCurrentView('home')} />
        );
      case 'compare':
        return (
          <CompareVehicles onBack={() => setCurrentView('home')} />
        );
      case 'sell':
        return (
          <div className="min-h-screen bg-background">
            <Navbar onNavigate={handleNavigate} onSearch={handleSearch} />
            <div className="pt-16 container mx-auto px-4 py-8">
              <div className="text-center">
                <h1 className="text-3xl font-bold mb-4">Sell Your Bike</h1>
                <p className="text-muted-foreground mb-8">Get the best price for your vehicle</p>
                <div className="max-w-md mx-auto space-y-4">
                  <input
                    type="text"
                    placeholder="Vehicle Brand"
                    className="w-full px-4 py-2 border border-border rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Vehicle Model"
                    className="w-full px-4 py-2 border border-border rounded-lg"
                  />
                  <input
                    type="number"
                    placeholder="Year of Purchase"
                    className="w-full px-4 py-2 border border-border rounded-lg"
                  />
                  <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90">
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'book-test-ride':
        return (
          <div className="min-h-screen bg-background">
            <Navbar onNavigate={handleNavigate} onSearch={handleSearch} />
            <div className="pt-16 container mx-auto px-4 py-8">
              <div className="text-center">
                <h1 className="text-3xl font-bold mb-4">Book Test Ride</h1>
                <p className="text-muted-foreground mb-8">Experience your dream vehicle</p>
                <div className="max-w-md mx-auto space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-2 border border-border rounded-lg"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-2 border border-border rounded-lg"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-2 border border-border rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Preferred Vehicle"
                    className="w-full px-4 py-2 border border-border rounded-lg"
                  />
                  <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90">
                    Book Test Ride
                  </button>
                </div>
              </div>
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

  return renderContent();
};

export default Index;
