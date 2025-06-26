
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Leaf, Recycle, Users, Lightbulb } from 'lucide-react';

const Sustainability = () => {
  const initiatives = [
    {
      icon: Recycle,
      title: 'Comprehensive Recycling Programs',
      description: 'We implement advanced sorting and recycling processes to minimize landfill waste and maximize resource recovery.',
      impact: '60% of collected waste diverted from landfills'
    },
    {
      icon: Leaf,
      title: 'Carbon Footprint Reduction',
      description: 'Our optimized collection routes and fuel-efficient vehicles help reduce greenhouse gas emissions.',
      impact: '25% reduction in carbon emissions per collection'
    },
    {
      icon: Users,
      title: 'Community Education',
      description: 'We actively educate communities about proper waste segregation and environmental conservation practices.',
      impact: '500+ families trained in sustainable practices'
    },
    {
      icon: Lightbulb,
      title: 'Innovation in Waste Management',
      description: 'Continuous research and implementation of new technologies to improve efficiency and environmental impact.',
      impact: 'Smart routing reduces fuel consumption by 30%'
    }
  ];

  const principles = [
    {
      title: 'Reduce',
      description: 'Minimizing waste generation through education and awareness programs'
    },
    {
      title: 'Reuse',
      description: 'Promoting creative reuse of materials before disposal'
    },
    {
      title: 'Recycle',
      description: 'Advanced sorting and processing to maximize material recovery'
    },
    {
      title: 'Recover',
      description: 'Energy recovery from non-recyclable waste materials'
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
              <span className="text-clinzed-green">Sustainability</span> First
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Building a greener future through responsible waste management and environmental stewardship
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Environmental Commitment</h2>
              <p className="text-lg text-gray-700 mb-6">
                At CLINZED, sustainability isn't just a buzzword – it's the foundation of everything we do. 
                We believe that effective waste management is one of the most impactful ways to protect our 
                environment and create a healthier future for generations to come.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our approach goes beyond simple collection and disposal. We focus on the entire lifecycle 
                of waste, from reduction strategies to advanced recycling technologies, ensuring that every 
                action we take contributes to a more sustainable Zambia.
              </p>
              <p className="text-lg text-gray-700">
                Through innovative practices, community partnerships, and continuous improvement, we're not 
                just managing waste – we're actively contributing to environmental restoration and protection.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80"
                alt="Environmental sustainability"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4 R's Principle */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The 4 R's of Sustainability</h2>
            <p className="text-xl text-gray-600">Our guiding principles for responsible waste management</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-clinzed-green text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {principle.title.charAt(0)}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{principle.title}</h3>
                <p className="text-gray-700">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Initiatives */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Sustainability Initiatives</h2>
            <p className="text-xl text-gray-600">Making a measurable impact on environmental protection</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center mb-6">
                  <div className="bg-clinzed-green/20 p-3 rounded-lg mr-4">
                    <initiative.icon className="h-8 w-8 text-clinzed-green" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">{initiative.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{initiative.description}</p>
                <div className="bg-clinzed-green/10 p-4 rounded-lg">
                  <p className="text-clinzed-green font-semibold">Impact: {initiative.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Goals */}
      <section className="py-20 bg-clinzed-darkGreen text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Environmental Goals for 2025</h2>
            <p className="text-xl text-gray-300">Ambitious targets for a sustainable future</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-8 rounded-xl text-center">
              <div className="text-4xl font-bold text-clinzed-green mb-4">75%</div>
              <h3 className="text-xl font-semibold mb-2">Waste Diversion</h3>
              <p className="text-gray-300">From landfills through recycling and composting programs</p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl text-center">
              <div className="text-4xl font-bold text-clinzed-green mb-4">50%</div>
              <h3 className="text-xl font-semibold mb-2">Carbon Reduction</h3>
              <p className="text-gray-300">Through electric vehicles and optimized routing</p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl text-center">
              <div className="text-4xl font-bold text-clinzed-green mb-4">1000+</div>
              <h3 className="text-xl font-semibold mb-2">Families Educated</h3>
              <p className="text-gray-300">In sustainable waste management practices</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sustainability;
