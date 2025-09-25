import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">VB</span>
              </div>
              <span className="text-xl font-bold">Vahan Bazar</span>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              India's largest two-wheeler marketplace connecting buyers and sellers 
              with trusted dealers nationwide.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-background/80 hover:text-background hover:bg-background/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/80 hover:text-background hover:bg-background/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/80 hover:text-background hover:bg-background/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/80 hover:text-background hover:bg-background/10">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Browse Bikes</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Scooters</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Electric Vehicles</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Upcoming Launches</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Compare Vehicles</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">EMI Calculator</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Sell Your Bike</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Book Test Ride</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Vehicle Insurance</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Loan Assistance</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Dealer Registration</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Support Center</a></li>
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-background/80 mb-4">
              Get the latest offers and updates on new vehicle launches.
            </p>
            <div className="space-y-3 mb-6">
              <Input 
                placeholder="Your email address" 
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button variant="accent" className="w-full">
                Subscribe
              </Button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-background/80" />
                <span className="text-background/80 text-sm">+91 1800-XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-background/80" />
                <span className="text-background/80 text-sm">support@vahanbazar.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-background/80 mt-1" />
                <span className="text-background/80 text-sm">
                  123 Business Hub, Sector 14,<br />
                  Gurgaon, Haryana 122001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-background/60 text-sm mb-4 md:mb-0">
              © 2024 Vahan Bazar. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-background transition-colors">Privacy Policy</a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">Terms of Service</a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">Cookie Policy</a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">Help Center</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;