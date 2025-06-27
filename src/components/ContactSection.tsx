
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
      content: 'jethrine@clinzed.site',
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

            {/* Google Maps Location */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Find Us
              </h3>
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <div className="aspect-video w-full rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.5397886421654!2d28.2833!3d-15.4167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1940f36b6b6b6b6b%3A0x2f2b2b2b2b2b2b2b!2sLusaka%2C%20Zambia!5e0!3m2!1sen!2sus!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-gray-300 mb-2">Visit us at our location in Lusaka</p>
                  <a 
                    href="https://g.page/r/Ca2j2OmKPKsvEBI/review"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-clinzed-green hover:text-clinzed-lightGreen transition-colors"
                  >
                    <MapPin className="h-4 w-4" />
                    <span>View on Google Maps & Leave a Review</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <img 
                src="/lovable-uploads/9defccd2-94bc-474e-ae95-c2c3e2673631.png"
                alt="Community collaboration in waste management"
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
