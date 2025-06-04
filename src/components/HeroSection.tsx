
import { ArrowRight, Recycle, Truck, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-clinzed-sky via-white to-clinzed-lightGreen/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-clinzed-darkGreen leading-tight mb-6">
              Innovative
              <span className="block text-clinzed-green">Waste Management</span>
              for a Cleaner Future
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              CLINZED combines cutting-edge technology with sustainable practices to deliver 
              reliable waste collection and disposal services. Together, we're building 
              healthier communities and cleaner environments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-clinzed-green hover:bg-clinzed-darkGreen text-white px-8 py-4 text-lg"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-clinzed-green text-clinzed-green hover:bg-clinzed-green hover:text-white px-8 py-4 text-lg"
              >
                Learn More
              </Button>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="bg-clinzed-green/10 p-3 rounded-full">
                  <Recycle className="h-6 w-6 text-clinzed-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-clinzed-darkGreen">100% Sustainable</h3>
                  <p className="text-sm text-gray-600">Eco-friendly practices</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-clinzed-green/10 p-3 rounded-full">
                  <Truck className="h-6 w-6 text-clinzed-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-clinzed-darkGreen">Reliable Service</h3>
                  <p className="text-sm text-gray-600">On-time collection</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-clinzed-green/10 p-3 rounded-full">
                  <Leaf className="h-6 w-6 text-clinzed-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-clinzed-darkGreen">Green Innovation</h3>
                  <p className="text-sm text-gray-600">Latest technology</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="bg-gradient-to-br from-clinzed-green to-clinzed-lightGreen rounded-2xl p-8 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80"
                  alt="Green forest representing environmental sustainability"
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-clinzed-green">100%</div>
                  <div className="text-sm text-gray-600">Eco-Friendly</div>
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
