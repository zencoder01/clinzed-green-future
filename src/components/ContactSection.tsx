
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: '24/7 Support',
      content: '+260773813759',
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
      content: 'Lusaka, Zambia',
      subContent: 'Professional waste management services'
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

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Contact Information
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 bg-gray-800/50 p-6 rounded-xl">
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

            <div className="mt-12 text-center">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                alt="Clean environment with water and trees"
                className="w-full max-w-2xl mx-auto h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
