
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Share2, MapPin, Bed, Bath, Square, Calendar, Phone, Mail, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PropertyDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock property data - in real app, this would be fetched based on ID
  const property = {
    id: id || "1",
    title: "Villa Moderne Luxueuse",
    price: "875 000 000",
    location: "Nice, Côte d'Azur",
    description: "Découvrez cette magnifique villa contemporaine offrant des finitions haut de gamme et une vue panoramique sur la Méditerranée. Cette propriété exceptionnelle allie confort moderne et élégance intemporelle.",
    beds: 5,
    baths: 4,
    area: 350,
    yearBuilt: 2020,
    status: "À vendre",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Piscine privée", "Garage 2 voitures", "Terrasse panoramique", 
      "Cuisine équipée", "Climatisation", "Sécurité 24h/24"
    ],
    agent: {
      name: "Marie Laurent",
      phone: "+33 1 23 45 67 89",
      email: "marie.laurent@veedgo.fr",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&q=80"
    }
  };

  const handleContactAgent = () => {
    toast({
      title: "Demande envoyée !",
      description: "L'agent vous contactera dans les plus brefs délais.",
    });
  };

  const handleFavorite = () => {
    toast({
      title: "Ajouté aux favoris !",
      description: "Cette propriété a été ajoutée à votre liste de favoris.",
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Breadcrumb */}
        <section className="bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm">
              <Link to="/" className="text-gray-500 hover:text-primary-500">Accueil</Link>
              <span className="text-gray-400">/</span>
              <Link to="/properties" className="text-gray-500 hover:text-primary-500">Propriétés</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900">{property.title}</span>
            </div>
          </div>
        </section>

        {/* Property Images */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="mb-6">
              <Link to="/properties" className="inline-flex items-center text-primary-500 hover:text-primary-600">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux propriétés
              </Link>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
              <div className="lg:col-span-3">
                <img 
                  src={property.images[currentImageIndex]}
                  alt={property.title}
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl"
                />
              </div>
              <div className="grid grid-cols-4 lg:grid-cols-1 gap-4">
                {property.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative overflow-hidden rounded-lg ${
                      index === currentImageIndex ? 'ring-2 ring-primary-500' : ''
                    }`}
                  >
                    <img 
                      src={image}
                      alt={`Vue ${index + 1}`}
                      className="w-full h-20 lg:h-24 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Property Details */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <Badge className="bg-primary-500 text-white mb-2">
                      {property.status}
                    </Badge>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      {property.title}
                    </h1>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span>{property.location}</span>
                    </div>
                    <div className="text-3xl font-bold text-primary-500">
                      {property.price} FCFA
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon" onClick={handleFavorite}>
                      <Heart className="w-5 h-5" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                {/* Property Stats */}
                <div className="grid grid-cols-4 gap-6 p-6 bg-gray-50 rounded-2xl mb-8">
                  <div className="text-center">
                    <Bed className="w-6 h-6 text-primary-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{property.beds}</div>
                    <div className="text-sm text-gray-600">Chambres</div>
                  </div>
                  <div className="text-center">
                    <Bath className="w-6 h-6 text-primary-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{property.baths}</div>
                    <div className="text-sm text-gray-600">Salles de bain</div>
                  </div>
                  <div className="text-center">
                    <Square className="w-6 h-6 text-primary-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{property.area}</div>
                    <div className="text-sm text-gray-600">m²</div>
                  </div>
                  <div className="text-center">
                    <Calendar className="w-6 h-6 text-primary-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{property.yearBuilt}</div>
                    <div className="text-sm text-gray-600">Année</div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
                  <p className="text-gray-600 leading-relaxed">{property.description}</p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Caractéristiques</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div>
                {/* Agent Card */}
                <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                  <div className="text-center mb-6">
                    <img 
                      src={property.agent.image}
                      alt={property.agent.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {property.agent.name}
                    </h3>
                    <p className="text-gray-600">Agent immobilier</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <Button 
                      className="w-full bg-primary-500 hover:bg-primary-600"
                      onClick={handleContactAgent}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Appeler
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={handleContactAgent}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Envoyer un email
                    </Button>
                  </div>

                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-3" />
                      <span>{property.agent.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-3" />
                      <span>{property.agent.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Similar Properties */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Propriétés similaires</h2>
            <div className="text-center">
              <p className="text-gray-600 mb-6">Découvrez d'autres propriétés qui pourraient vous intéresser</p>
              <Link to="/properties">
                <Button className="bg-primary-500 hover:bg-primary-600">
                  Voir toutes les propriétés
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PropertyDetail;
