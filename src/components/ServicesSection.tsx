
import { Truck, Recycle, Factory, Home, Building, TreePine } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Collection',
      description: 'Reliable weekly pickup services for homes and apartments with flexible scheduling options.',
      features: ['Weekly pickup', 'Flexible schedules', 'Recycling included']
    },
    {
      icon: Building,
      title: 'Commercial Waste',
      description: 'Comprehensive waste management solutions for businesses of all sizes with custom plans.',
      features: ['Custom pickup frequency', 'Large container options', 'Waste audits']
    },
    {
      icon: Factory,
      title: 'Industrial Solutions',
      description: 'Specialized handling of industrial waste with compliance and safety as top priorities.',
      features: ['Hazardous waste handling', 'Compliance management', 'Safety protocols']
    },
    {
      icon: Recycle,
      title: 'Recycling Programs',
      description: 'Advanced recycling initiatives that maximize material recovery and minimize landfill waste.',
      features: ['Material sorting', 'Processing facilities', 'Environmental reporting']
    },
    {
      icon: TreePine,
      title: 'Organic Waste',
      description: 'Composting and organic waste processing to create valuable soil amendments.',
      features: ['Composting services', 'Organic processing', 'Soil amendment creation']
    },
    {
      icon: Truck,
      title: 'Emergency Cleanup',
      description: '24/7 emergency response for urgent waste removal and environmental cleanup needs.',
      features: ['24/7 availability', 'Rapid response', 'Environmental cleanup']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-clinzed-green mb-4">
            Our Services & Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From residential pickup to industrial solutions, we provide innovative and sustainable 
            waste management services tailored to your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gray-800/80 border-gray-700 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="bg-clinzed-green/20 group-hover:bg-clinzed-green group-hover:text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                  <service.icon className="h-8 w-8 text-clinzed-green group-hover:text-black transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl text-white group-hover:text-clinzed-green transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-clinzed-green font-medium flex items-center justify-center">
                      <span className="w-2 h-2 bg-clinzed-green rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
