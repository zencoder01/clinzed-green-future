
import { Leaf, Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    services: [
      'Residential Collection',
      'Commercial Waste',
      'Industrial Solutions',
      'Recycling Programs',
      'Emergency Cleanup'
    ],
    company: [
      'About Us',
      'Our Mission',
      'Sustainability',
      'Careers',
      'News & Updates'
    ],
    support: [
      'Contact Us',
      'Service Areas',
      'Emergency Services',
      'FAQ'
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/18oHxHnmgU' },
    { icon: Instagram, href: 'https://instagram.com/clinzed_ltd' }
  ];

  return (
    <footer className="bg-clinzed-darkGreen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-clinzed-green p-2 rounded-lg">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <span className="text-3xl font-bold">CLINZED</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              CLINZED is committed to providing innovative and sustainable waste management 
              solutions for cleaner environments and healthier communities.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-clinzed-lightGreen" />
                <span>+260773813759</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-clinzed-lightGreen" />
                <span>info@clinzed.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-clinzed-lightGreen" />
                <span>Lusaka, Zambia</span>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="h-5 w-5 text-clinzed-lightGreen" />
                <span>@clinzed_ltd</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-clinzed-lightGreen transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-clinzed-lightGreen transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link === 'FAQ' ? '#faq' : '#'} 
                    className="text-gray-300 hover:text-clinzed-lightGreen transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Bottom Bar */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-700 hover:bg-clinzed-green p-3 rounded-full transition-colors duration-200"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
              <a
                href="https://wa.me/260773813759"
                className="bg-gray-700 hover:bg-green-500 p-3 rounded-full transition-colors duration-200"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.56-.01-.188 0-.495.074-.754.371-.26.297-.99.967-.99 2.357 0 1.39 1.016 2.732 1.156 2.922.14.19 2.005 3.062 4.861 4.296.679.293 1.21.469 1.624.6.682.217 1.303.186 1.793.113.547-.081 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-300 text-sm">
                © 2024 CLINZED. All rights reserved.
              </p>
              <div className="flex space-x-4 mt-2 text-sm">
                <a href="#" className="text-gray-300 hover:text-clinzed-lightGreen">Privacy Policy</a>
                <a href="#" className="text-gray-300 hover:text-clinzed-lightGreen">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
