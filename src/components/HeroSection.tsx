
import { ArrowRight, Recycle, Truck, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="pt-16 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Waste
              <span className="block text-clinzed-green">Management</span>
              <span className="block text-white">Solutions</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Leading the way in innovative and environmentally responsible waste management 
              services for a cleaner tomorrow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-clinzed-green hover:bg-clinzed-darkGreen text-black px-8 py-4 text-lg font-semibold"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="bg-clinzed-green/20 p-3 rounded-full">
                  <Recycle className="h-6 w-6 text-clinzed-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">100% Sustainable</h3>
                  <p className="text-sm text-gray-400">Eco-friendly practices</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-clinzed-green/20 p-3 rounded-full">
                  <Truck className="h-6 w-6 text-clinzed-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Reliable Service</h3>
                  <p className="text-sm text-gray-400">On-time collection</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-clinzed-green/20 p-3 rounded-full">
                  <Leaf className="h-6 w-6 text-clinzed-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Green Innovation</h3>
                  <p className="text-sm text-gray-400">Latest technology</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl">
                <img 
                  src="/lovable-uploads/ed49ad59-0ce2-422f-aa39-d1717304e2c7.png"
                  alt="CLINZED team member collecting waste in the community"
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-clinzed-green p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-black">100%</div>
                  <div className="text-sm text-black">Community Focused</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
