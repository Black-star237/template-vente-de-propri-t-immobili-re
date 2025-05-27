
import { Heart, Eye, MapPin, Bed, Bath, Square } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      price: "1 750 000",
      title: "Villa Moderne Luxueuse",
      location: "Nice, Côte d'Azur",
      beds: 5,
      baths: 4,
      area: 350,
      status: "À vendre"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&w=800&q=80",
      price: "890 000",
      title: "Appartement Vue Mer",
      location: "Cannes, Alpes-Maritimes",
      beds: 3,
      baths: 2,
      area: 120,
      status: "À vendre"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      price: "2 250 000",
      title: "Maison Contemporaine",
      location: "Paris 16ème",
      beds: 6,
      baths: 5,
      area: 280,
      status: "À vendre"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
      price: "1 450 000",
      title: "Villa avec Piscine",
      location: "Aix-en-Provence",
      beds: 4,
      baths: 3,
      area: 220,
      status: "À vendre"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary-500 font-semibold mb-2">NOS COUPS DE CŒUR</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comfort Living Solution
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection de propriétés exceptionnelles, soigneusement choisies pour leur qualité et leur emplacement privilégié
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="group cursor-pointer">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={property.image}
                    alt={property.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary-500 text-white">
                      {property.status}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                      <Eye className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-primary-500">
                      {property.price}€
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {property.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      <span>{property.beds} Ch.</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1" />
                      <span>{property.baths} SdB</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="w-4 h-4 mr-1" />
                      <span>{property.area}m²</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-primary-500 hover:bg-primary-600 text-white">
                    Voir les détails
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white">
            Voir toutes les propriétés
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
