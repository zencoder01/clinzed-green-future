
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Target, Globe, Heart, Zap } from 'lucide-react';

const Mission = () => {
  const missionPoints = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide innovative, reliable, and sustainable waste management solutions that create cleaner, healthier communities while fostering environmental responsibility and economic growth in Zambia.'
    },
    {
      icon: Globe,
      title: 'Our Vision',
      description: 'To be the leading waste management company in Zambia, recognized for our commitment to environmental sustainability, community development, and exceptional service delivery.'
    },
    {
      icon: Heart,
      title: 'Our Purpose',
      description: 'We exist to make a positive impact on the lives of people in our communities by providing essential services that protect public health and preserve our environment for future generations.'
    },
    {
      icon: Zap,
      title: 'Our Commitment',
      description: 'We are committed to continuous innovation, maintaining the highest service standards, and creating meaningful employment opportunities while contributing to sustainable development in Lusaka and beyond.'
    }
  ];

  const goals = [
    'Expand our services to reach 5,000+ households by 2025',
    'Achieve 100% customer satisfaction through continuous service improvement',
    'Create 50+ sustainable local employment opportunities',
    'Implement advanced recycling programs to reduce landfill waste by 40%',
    'Establish partnerships with educational institutions for environmental awareness',
    'Introduce smart waste collection technologies for improved efficiency'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-clinzed-darkGreen via-gray-800 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-clinzed-green">Mission</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Driving positive change through sustainable waste management and community empowerment
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Transforming Communities</h2>
              <p className="text-lg text-gray-700 mb-6">
                At CLINZED, our mission extends far beyond waste collection. We are dedicated to creating 
                lasting positive change that touches every aspect of community life - from environmental 
                health to economic opportunity.
              </p>
              <p className="text-lg text-gray-700">
                Through our comprehensive approach to waste management, we not only keep communities clean 
                but also contribute to job creation, environmental education, and sustainable development 
                practices that benefit everyone.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80"
                alt="Community development"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Mission Points */}
          <div className="grid md:grid-cols-2 gap-8">
            {missionPoints.map((point, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="bg-clinzed-green/20 p-3 rounded-lg mr-4">
                    <point.icon className="h-8 w-8 text-clinzed-green" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">{point.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Goals */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Strategic Goals</h2>
            <p className="text-xl text-gray-600">Working towards a cleaner, more sustainable future</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {goals.map((goal, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start">
                  <div className="bg-clinzed-green text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{goal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-clinzed-darkGreen text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of the change. Together, we can create cleaner communities and a brighter future for Zambia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/260773813759?text=Hi%20CLINZED!%20I%20want%20to%20partner%20with%20you%20and%20get%20involved%20in%20your%20mission%20to%20create%20cleaner%20communities.%20Please%20tell%20me%20more%20about%20partnership%20opportunities."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-clinzed-green hover:bg-clinzed-green/90 text-black font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Partner With Us
            </a>
            <a
              href="/#contact"
              className="border-2 border-clinzed-green text-clinzed-green hover:bg-clinzed-green hover:text-black font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mission;
