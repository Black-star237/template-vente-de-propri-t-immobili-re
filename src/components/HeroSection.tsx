
import { Search, MapPin, Home, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Parfait Firm Pour Vendre Ou
            <br />
            <span className="text-primary-400">Louer Maisons, Appartements, Et Villas</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto animate-slide-up">
            Découvrez votre propriété de rêve avec notre sélection exclusive de biens immobiliers de prestige
          </p>
          
          {/* Search Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl max-w-5xl mx-auto animate-slide-up">
            <div className="flex flex-wrap gap-4 items-end">
              <div className="flex-1 min-w-[250px]">
                <label className="block text-sm font-medium text-gray-700 mb-2">Localisation</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <Input 
                    placeholder="Ville, quartier..."
                    className="pl-10 h-12"
                  />
                </div>
              </div>
              
              <div className="flex-1 min-w-[200px]">
                <label className="block text-sm font-medium text-gray-700 mb-2">Type de bien</label>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Tous les types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">Appartement</SelectItem>
                    <SelectItem value="house">Maison</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex-1 min-w-[200px]">
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget</label>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Prix max" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-250000">0 - 250 000€</SelectItem>
                    <SelectItem value="250000-500000">250 000 - 500 000€</SelectItem>
                    <SelectItem value="500000-1000000">500 000 - 1 000 000€</SelectItem>
                    <SelectItem value="1000000+">1 000 000€+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button className="bg-primary-500 hover:bg-primary-600 text-white h-12 px-8 text-lg font-semibold">
                <Search className="w-5 h-5 mr-2" />
                Rechercher
              </Button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400">500+</div>
              <div className="text-sm">Propriétés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400">50+</div>
              <div className="text-sm">Agents Expert</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400">4.5★</div>
              <div className="text-sm">Note Client</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400">98%</div>
              <div className="text-sm">Taux de Succès</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
