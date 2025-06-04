
import { Leaf, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

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
      'Customer Portal',
      'Service Areas',
      'Emergency Services',
      'FAQ'
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Instagram, href: '#' }
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
                <span>(555) 123-CLEAN</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-clinzed-lightGreen" />
                <span>info@clinzed.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-clinzed-lightGreen" />
                <span>Serving Communities Nationwide</span>
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
                  <a href="#" className="text-gray-300 hover:text-clinzed-lightGreen transition-colors duration-200">
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
