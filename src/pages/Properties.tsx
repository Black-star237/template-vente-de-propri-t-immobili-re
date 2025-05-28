import { useState } from 'react';
import { Heart, Eye, MapPin, Bed, Bath, Square, Filter, Search, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Properties = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [location, setLocation] = useState('');

  const handleFavorite = (propertyTitle: string) => {
    toast({
      title: "Ajouté aux favoris !",
      description: `${propertyTitle} a été ajouté à votre liste de favoris.`,
    });
  };

  const handleView = (propertyTitle: string) => {
    toast({
      title: "Vue enregistrée",
      description: `Vous avez consulté ${propertyTitle}.`,
    });
  };

  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      price: "875 000 000",
      title: "Villa Moderne Luxueuse",
      location: "Nice, Côte d'Azur",
      beds: 5,
      baths: 4,
      area: 350,
      status: "À vendre",
      type: "Villa"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&w=800&q=80",
      price: "445 000 000",
      title: "Appartement Vue Mer",
      location: "Cannes, Alpes-Maritimes",
      beds: 3,
      baths: 2,
      area: 120,
      status: "À vendre",
      type: "Appartement"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      price: "1 125 000 000",
      title: "Maison Contemporaine",
      location: "Paris 16ème",
      beds: 6,
      baths: 5,
      area: 280,
      status: "À vendre",
      type: "Maison"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
      price: "725 000 000",
      title: "Villa avec Piscine",
      location: "Aix-en-Provence",
      beds: 4,
      baths: 3,
      area: 220,
      status: "À vendre",
      type: "Villa"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
      price: "650 000 000",
      title: "Appartement Standing",
      location: "Lyon, Rhône",
      beds: 4,
      baths: 3,
      area: 180,
      status: "À vendre",
      type: "Appartement"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?auto=format&fit=crop&w=800&q=80",
      price: "950 000 000",
      title: "Maison de Maître",
      location: "Bordeaux, Gironde",
      beds: 7,
      baths: 4,
      area: 400,
      status: "À vendre",
      type: "Maison"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?auto=format&fit=crop&w=800&q=80",
      price: "320 000 000",
      title: "Studio Moderne",
      location: "Montpellier, Hérault",
      beds: 1,
      baths: 1,
      area: 45,
      status: "À vendre",
      type: "Studio"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80",
      price: "1 450 000 000",
      title: "Penthouse Luxe",
      location: "Monaco",
      beds: 5,
      baths: 4,
      area: 300,
      status: "À vendre",
      type: "Penthouse"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Toutes nos Propriétés
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Découvrez notre collection complète de biens immobiliers
              </p>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-white shadow-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Rechercher..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Localisation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les villes</SelectItem>
                  <SelectItem value="paris">Paris</SelectItem>
                  <SelectItem value="nice">Nice</SelectItem>
                  <SelectItem value="cannes">Cannes</SelectItem>
                  <SelectItem value="lyon">Lyon</SelectItem>
                  <SelectItem value="bordeaux">Bordeaux</SelectItem>
                </SelectContent>
              </Select>

              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger>
                  <SelectValue placeholder="Type de bien" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les types</SelectItem>
                  <SelectItem value="appartement">Appartement</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="maison">Maison</SelectItem>
                  <SelectItem value="studio">Studio</SelectItem>
                  <SelectItem value="penthouse">Penthouse</SelectItem>
                </SelectContent>
              </Select>

              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Gamme de prix" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les prix</SelectItem>
                  <SelectItem value="0-500">0 - 500M FCFA</SelectItem>
                  <SelectItem value="500-800">500M - 800M FCFA</SelectItem>
                  <SelectItem value="800-1200">800M - 1.2B FCFA</SelectItem>
                  <SelectItem value="1200+">1.2B+ FCFA</SelectItem>
                </SelectContent>
              </Select>

              <Button className="bg-primary-500 hover:bg-primary-600">
                <Filter className="w-4 h-4 mr-2" />
                Filtrer
              </Button>
            </div>
          </div>
        </section>

        {/* Properties Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                {properties.length} propriétés trouvées
              </h2>
              <Button variant="outline">
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Trier par
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {properties.map((property) => (
                <div key={property.id} className="group cursor-pointer">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    <div className="relative">
                      <Link to={`/property/${property.id}`}>
                        <img 
                          src={property.image}
                          alt={property.title}
                          className="w-full h-48 object-cover"
                        />
                      </Link>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary-500 text-white">
                          {property.status}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4 flex space-x-2">
                        <button 
                          className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                          onClick={() => handleFavorite(property.title)}
                        >
                          <Heart className="w-4 h-4 text-gray-600" />
                        </button>
                        <button 
                          className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                          onClick={() => handleView(property.title)}
                        >
                          <Eye className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xl font-bold text-primary-500">
                          {property.price} FCFA
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
                      
                      <Link to={`/property/${property.id}`}>
                        <Button className="w-full bg-primary-500 hover:bg-primary-600 text-white">
                          Voir les détails
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex space-x-2">
                <Button variant="outline">Précédent</Button>
                <Button className="bg-primary-500 text-white">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Suivant</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Properties;
