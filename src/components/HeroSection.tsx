
import { ArrowRight, Recycle, Truck, Leaf, Users, Award, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const whatsappNumber = '+260773813759';
  
  const partnerMessage = 'Hi CLINZED! I am interested in partnering with you and getting involved in your waste management initiatives. Please share more details about partnership opportunities.';
  const siteVisitMessage = 'Hi CLINZED! I would like to book a free site visit to discuss waste management solutions for my property. Please let me know your availability.';
  const quoteMessage = 'Hi CLINZED! I would like to get a quote for your waste management services. Please provide me with more details.';
  
  const partnerUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(partnerMessage)}`;
  const siteVisitUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(siteVisitMessage)}`;
  const quoteUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(quoteMessage)}`;

  return (
    <section id="home" className="pt-16 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Cleaner
              <span className="block text-clinzed-green">Communities</span>
              <span className="block text-white">Brighter Future</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transforming waste into opportunity through innovative, sustainable solutions 
              that create jobs and protect our environment.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-clinzed-green hover:bg-clinzed-darkGreen text-black px-8 py-4 text-lg font-semibold"
                onClick={() => window.open(partnerUrl, '_blank')}
              >
                Partner With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-clinzed-green text-clinzed-green hover:bg-clinzed-green hover:text-black px-8 py-4 text-lg font-semibold"
                onClick={() => window.open(siteVisitUrl, '_blank')}
              >
                Book Free Site Visit
              </Button>
              
              {/* Mobile Quote Button */}
              <Button 
                size="lg" 
                className="md:hidden bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 text-lg font-semibold"
                onClick={() => window.open(quoteUrl, '_blank')}
              >
                Get A Quote
              </Button>
            </div>

            {/* Impact Stats */}
            <div className="bg-gray-900/50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Impact in Lusaka</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-clinzed-green/20 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <Users className="h-8 w-8 text-clinzed-green" />
                  </div>
                  <div className="text-3xl font-bold text-clinzed-green">2,000+</div>
                  <div className="text-sm text-gray-300">Households Served</div>
                </div>
                
                <div className="text-center">
                  <div className="bg-clinzed-green/20 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <Award className="h-8 w-8 text-clinzed-green" />
                  </div>
                  <div className="text-3xl font-bold text-clinzed-green">98%</div>
                  <div className="text-sm text-gray-300">Client Satisfaction</div>
                </div>
                
                <div className="text-center">
                  <div className="bg-clinzed-green/20 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <Briefcase className="h-8 w-8 text-clinzed-green" />
                  </div>
                  <div className="text-3xl font-bold text-clinzed-green">25+</div>
                  <div className="text-sm text-gray-300">Jobs Created Locally</div>
                </div>
              </div>
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
