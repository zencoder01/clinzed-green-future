
import { Card, CardContent } from '@/components/ui/card';

const GallerySection = () => {
  const galleryImages = [
    {
      src: "/lovable-uploads/85d67ebe-a5ae-4a15-b824-d32826931e0e.png",
      alt: "CLINZED team members working together on waste collection",
      title: "Teamwork in Action"
    },
    {
      src: "/lovable-uploads/ed49ad59-0ce2-422f-aa39-d1717304e2c7.png",
      alt: "Professional waste collection service by CLINZED",
      title: "Professional Service"
    },
    {
      src: "/lovable-uploads/9defccd2-94bc-474e-ae95-c2c3e2673631.png",
      alt: "Community collaboration in waste management",
      title: "Community Partnership"
    },
    {
      src: "/lovable-uploads/74be9ffc-3e87-45c6-bcaa-fc8c00240931.png",
      alt: "Local community participating in waste management",
      title: "Community Engagement"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-clinzed-green mb-4">
            Our Work in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how CLINZED is making a real difference in communities through 
            dedicated waste management services and environmental stewardship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {galleryImages.map((image, index) => (
            <Card key={index} className="group overflow-hidden bg-gray-800/80 border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="font-semibold text-clinzed-green">{image.title}</h3>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-400 mb-6">
            Join our mission to create cleaner, healthier communities through sustainable waste management.
          </p>
          <button className="bg-clinzed-green text-black px-8 py-3 rounded-lg font-semibold hover:bg-clinzed-lightGreen transition-colors duration-300">
            Get Involved
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
