
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Leaf, Users, Target, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '2,000+', label: 'Households Served' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '25+', label: 'Local Jobs Created' },
    { number: '5+', label: 'Years of Excellence' }
  ];

  const values = [
    {
      icon: Leaf,
      title: 'Environmental Stewardship',
      description: 'We are committed to protecting our environment through sustainable waste management practices and innovative recycling solutions.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Our services are designed to serve the community, creating cleaner neighborhoods and healthier living environments for all.'
    },
    {
      icon: Target,
      title: 'Excellence in Service',
      description: 'We strive for the highest standards in waste collection, customer service, and operational efficiency.'
    },
    {
      icon: Award,
      title: 'Local Impact',
      description: 'As a proudly Zambian company, we create local employment opportunities and contribute to economic growth in Lusaka.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-clinzed-darkGreen via-gray-800 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-clinzed-green">CLINZED</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Cleaner Communities, Brighter Future - Leading sustainable waste management in Lusaka
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                CLINZED was founded with a simple yet powerful vision: to create cleaner, healthier communities 
                through innovative and sustainable waste management solutions. Based in Lusaka, Zambia, we have 
                grown from a small local initiative to a trusted partner for over 2,000 households and numerous businesses.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our commitment goes beyond just collecting waste. We believe in building lasting relationships 
                with our clients, creating employment opportunities for local communities, and contributing to 
                a more sustainable future for Zambia.
              </p>
              <p className="text-lg text-gray-700">
                Today, we proudly maintain a 98% client satisfaction rate while continuing to expand our services 
                and impact throughout Lusaka and beyond.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/85d67ebe-a5ae-4a15-b824-d32826931e0e.png"
                alt="CLINZED team members working together on waste collection"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact in Lusaka</h2>
            <p className="text-xl text-gray-600">Making a difference in our community, one collection at a time</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-clinzed-green mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-clinzed-green/10 p-3 rounded-lg">
                  <value.icon className="h-8 w-8 text-clinzed-green" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">Dedicated professionals committed to excellence</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-24 h-24 bg-clinzed-green/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-clinzed-green" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Team Member</h3>
                <p className="text-gray-600">Dedicated to serving our community with excellence and care</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
