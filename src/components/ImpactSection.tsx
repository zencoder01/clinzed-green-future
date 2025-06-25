
import { Leaf, Droplets, Wind, Recycle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ImpactSection = () => {
  const impacts = [
    {
      icon: Leaf,
      number: '2.5M',
      unit: 'tons',
      label: 'Carbon Emissions Reduced',
      description: 'Through innovative recycling and waste processing technologies'
    },
    {
      icon: Droplets,
      number: '1.8M',
      unit: 'gallons',
      label: 'Water Conserved',
      description: 'By implementing efficient waste treatment processes'
    },
    {
      icon: Wind,
      number: '95%',
      unit: '',
      label: 'Landfill Diversion Rate',
      description: 'Waste redirected from landfills to recycling and processing'
    },
    {
      icon: Recycle,
      number: '10M',
      unit: 'lbs',
      label: 'Materials Recycled',
      description: 'Converting waste into valuable resources for communities'
    }
  ];

  return (
    <section id="impact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Environmental Impact
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Making a measurable difference in environmental conservation through 
            innovative waste management and sustainable practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impacts.map((impact, index) => (
            <Card key={index} className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="bg-clinzed-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <impact.icon className="h-8 w-8 text-clinzed-green" />
                </div>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-white">{impact.number}</span>
                  {impact.unit && <span className="text-xl text-clinzed-green ml-1">{impact.unit}</span>}
                </div>
                <h3 className="text-lg font-semibold text-clinzed-green mb-2">
                  {impact.label}
                </h3>
                <p className="text-sm text-gray-400">
                  {impact.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Real Impact Images */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative">
            <img 
              src="/lovable-uploads/85d67ebe-a5ae-4a15-b824-d32826931e0e.png"
              alt="CLINZED team members collaborating on waste management"
              className="w-full h-64 object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold text-clinzed-green">Community Collaboration</h3>
              <p className="text-sm">Working together for cleaner environments</p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/lovable-uploads/74be9ffc-3e87-45c6-bcaa-fc8c00240931.png"
              alt="Local community participating in waste management initiatives"
              className="w-full h-64 object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold text-clinzed-green">Community Engagement</h3>
              <p className="text-sm">Empowering local participation</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join Us in Creating a Sustainable Future
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Partner with CLINZED to reduce your environmental footprint and contribute 
              to a cleaner, healthier planet for future generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-clinzed-green text-black px-8 py-3 rounded-lg font-semibold hover:bg-clinzed-lightGreen transition-colors duration-300">
                Schedule Consultation
              </button>
              <button className="border-2 border-clinzed-green text-clinzed-green px-8 py-3 rounded-lg font-semibold hover:bg-clinzed-green hover:text-black transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
