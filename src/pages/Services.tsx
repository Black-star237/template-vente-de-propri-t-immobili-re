
import { Shield, Home, TrendingUp, Users, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Vente de Propriétés",
      description: "Accompagnement complet pour la vente de votre bien immobilier avec estimation gratuite et stratégie marketing personnalisée.",
      features: ["Estimation gratuite", "Marketing digital", "Visite virtuelle", "Négociation"],
      price: "3% de commission"
    },
    {
      icon: Shield,
      title: "Location & Gestion",
      description: "Service complet de location et gestion locative pour optimiser vos revenus immobiliers.",
      features: ["Recherche de locataires", "État des lieux", "Gestion administrative", "Maintenance"],
      price: "8% des loyers"
    },
    {
      icon: TrendingUp,
      title: "Investissement",
      description: "Conseil en investissement immobilier pour construire votre patrimoine avec des opportunités sélectionnées.",
      features: ["Analyse de marché", "Sélection de biens", "Montage financier", "Suivi rentabilité"],
      price: "Sur devis"
    },
    {
      icon: Users,
      title: "Conseil Juridique",
      description: "Accompagnement juridique pour tous vos projets immobiliers avec nos experts certifiés.",
      features: ["Rédaction contrats", "Vérification légale", "Conseil fiscal", "Assistance litiges"],
      price: "150€/heure"
    }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Propriétaire",
      comment: "Service exceptionnel ! Vente réalisée en 3 semaines au prix souhaité.",
      rating: 5
    },
    {
      name: "Pierre Martin",
      role: "Investisseur",
      comment: "Conseils avisés qui m'ont permis de constituer un patrimoine solide.",
      rating: 5
    },
    {
      name: "Sophie Laurent",
      role: "Locataire",
      comment: "Équipe professionnelle, recherche d'appartement simplifiée.",
      rating: 5
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
                Nos Services Immobiliers
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Des solutions complètes pour tous vos projets immobiliers avec l'expertise de nos professionnels certifiés
              </p>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-500">
                Demander un devis gratuit
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-6">
                      <div className="bg-primary-500 text-white p-3 rounded-xl mr-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                        <Badge variant="outline" className="mt-1">{service.price}</Badge>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button className="w-full bg-primary-500 hover:bg-primary-600">
                      En savoir plus
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Témoignages Clients
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Découvrez ce que nos clients pensent de nos services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Prêt à Démarrer Votre Projet ?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Contactez-nous dès aujourd'hui pour une consultation gratuite
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-500">
                Prendre rendez-vous
              </Button>
              <Button size="lg" className="bg-white text-primary-500 hover:bg-gray-100">
                Appeler maintenant
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
