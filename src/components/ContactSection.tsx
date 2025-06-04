
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: '24/7 Support',
      content: '(555) 123-CLEAN',
      subContent: 'Emergency services available'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@clinzed.com',
      subContent: 'Quick response guaranteed'
    },
    {
      icon: MapPin,
      title: 'Service Areas',
      content: 'Multiple Locations',
      subContent: 'Serving communities nationwide'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon-Fri: 8AM-6PM',
      subContent: 'Weekend services available'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your journey toward sustainable waste management? 
            Contact us today for a free consultation and customized solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-clinzed-green/20 p-3 rounded-lg">
                    <info.icon className="h-6 w-6 text-clinzed-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{info.title}</h4>
                    <p className="text-lg text-gray-300">{info.content}</p>
                    <p className="text-sm text-gray-400">{info.subContent}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                alt="Clean environment with water and trees"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-xl border-0 bg-gray-800/80 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white">
                Request a Quote
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <Input placeholder="John" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-clinzed-green focus:ring-clinzed-green" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Doe" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-clinzed-green focus:ring-clinzed-green" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <Input type="email" placeholder="john@example.com" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-clinzed-green focus:ring-clinzed-green" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <Input placeholder="(555) 123-4567" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-clinzed-green focus:ring-clinzed-green" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Service Type
                  </label>
                  <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-md focus:border-clinzed-green focus:ring-clinzed-green focus:outline-none">
                    <option>Select a service</option>
                    <option>Residential Collection</option>
                    <option>Commercial Waste</option>
                    <option>Industrial Solutions</option>
                    <option>Recycling Programs</option>
                    <option>Emergency Cleanup</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your waste management needs..."
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-clinzed-green focus:ring-clinzed-green min-h-[120px]"
                  />
                </div>

                <Button className="w-full bg-clinzed-green hover:bg-clinzed-darkGreen text-black py-3 text-lg font-semibold">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
