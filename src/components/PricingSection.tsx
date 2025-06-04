
import { Check, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PricingSection = () => {
  const plans = [
    {
      name: 'Individual Plan',
      price: 'K90.00',
      period: 'per month',
      description: 'Ideal for single individuals or smaller households.',
      subtitle: 'Receive waste collection services tailored to your needs.',
      features: [
        'Weekly waste collection',
        'Basic recycling service',
        'Customer support',
        'Flexible scheduling'
      ],
      isRecommended: false
    },
    {
      name: 'Family Plan',
      price: 'K190.00',
      period: 'per month',
      description: 'Designed for larger households with more waste generation.',
      subtitle: 'Enjoy a comprehensive waste management solution for your family.',
      features: [
        'Bi-weekly waste collection',
        'Full recycling service',
        'Priority customer support',
        'Large container options',
        'Emergency pickup service'
      ],
      isRecommended: true
    },
    {
      name: 'Business Plan',
      price: 'K2939.00',
      period: 'per month',
      description: 'For large teams',
      subtitle: 'Tailored for businesses of all sizes.',
      subtitle2: 'Ensure efficient waste management for your commercial space.',
      features: [
        'Daily waste collection',
        'Commercial recycling',
        'Waste audits & reporting',
        'Dedicated account manager',
        'Custom pickup schedules',
        'Compliance management'
      ],
      isRecommended: false
    }
  ];

  const whatsappNumber = '+260773813759';
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}`;

  return (
    <section id="pricing" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Services & Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your waste management needs with transparent pricing and no hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.isRecommended ? 'ring-2 ring-clinzed-green' : ''} bg-gray-900/80 border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300`}>
              {plan.isRecommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-clinzed-green text-black px-4 py-1 rounded-full text-sm font-semibold">
                    Recommended
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl text-white mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-clinzed-green">{plan.price}</span>
                  <span className="text-gray-300 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-400 font-medium">{plan.description}</p>
                <p className="text-gray-300 text-sm">{plan.subtitle}</p>
                {plan.subtitle2 && (
                  <p className="text-gray-300 text-sm">{plan.subtitle2}</p>
                )}
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Check className="h-5 w-5 text-clinzed-green mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full bg-clinzed-green hover:bg-clinzed-darkGreen text-black font-semibold py-3 mt-6"
                  onClick={() => window.open(whatsappUrl, '_blank')}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Instant Service Card */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gray-900/80 border-gray-700 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white mb-2">
                Instant Cleaner & Gardener
              </CardTitle>
              <div className="mb-4">
                <span className="text-4xl font-bold text-clinzed-green">K50</span>
                <span className="text-gray-300 ml-2">per hour</span>
              </div>
              <div className="bg-clinzed-green/20 text-clinzed-green px-3 py-1 rounded-full inline-block mb-4">
                <span className="font-semibold">INSTANT</span>
              </div>
              <p className="text-gray-300">For an instant clean up once off payment</p>
            </CardHeader>
            
            <CardContent className="text-center">
              <Button 
                size="lg"
                className="bg-clinzed-green hover:bg-clinzed-darkGreen text-black font-semibold px-8 py-3"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Book Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
