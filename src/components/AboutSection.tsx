
import { Target, Heart, Users, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: 'Environmental Responsibility',
      description: 'Committed to reducing environmental impact through sustainable practices and innovative solutions.'
    },
    {
      icon: Users,
      title: 'Community Partnerships',
      description: 'Building strong relationships with local communities to create lasting positive change.'
    },
    {
      icon: Heart,
      title: 'Health & Safety',
      description: 'Prioritizing the health and safety of our communities, employees, and the environment.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuously developing cutting-edge technologies to improve waste management efficiency.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              About CLINZED
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              CLINZED is a forward-thinking waste management company committed to providing 
              innovative and sustainable solutions. With a vision for cleaner environments 
              and healthier communities, we employ cutting-edge technologies and best practices 
              to offer reliable waste collection and disposal services.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              We strive to redefine waste management by combining efficiency, reliability, 
              and sustainability, setting a standard for excellence in the industry. 
              Choose CLINZED for a cleaner, brighter future where waste management meets innovation.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-clinzed-green mb-2">500+</div>
                <div className="text-gray-400">Communities Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-clinzed-green mb-2">95%</div>
                <div className="text-gray-400">Recycling Rate</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <img 
              src="/lovable-uploads/74be9ffc-3e87-45c6-bcaa-fc8c00240931.png"
              alt="Local community participating in waste management"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-clinzed-green/10 rounded-2xl"></div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-clinzed-green/20 group-hover:bg-clinzed-green w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                  <value.icon className="h-10 w-10 text-clinzed-green group-hover:text-black transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-semibold text-clinzed-green mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
