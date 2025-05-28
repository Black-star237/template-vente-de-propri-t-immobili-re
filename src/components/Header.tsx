
import { Menu, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-gray-100">
          <div className="flex items-center space-x-4 text-gray-600">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+33 1 23 45 67 89</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>contact@veedgo.fr</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Horaires: Lun-Ven 9h-18h</span>
          </div>
        </div>
        
        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-2xl font-bold text-primary-600">VeedGo</h1>
            </Link>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">Accueil</Link>
            <Link to="/properties" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">Propriétés</Link>
            <Link to="/services" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">Services</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">À propos</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">Contact</Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" className="hidden md:flex">
                Se connecter
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-primary-500 hover:bg-primary-600 text-white">
                Déposer une annonce
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
