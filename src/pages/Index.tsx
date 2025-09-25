import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturedVehicles from "../components/FeaturedVehicles";
import Categories from "../components/Categories";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <Categories />
      <FeaturedVehicles />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Index;
