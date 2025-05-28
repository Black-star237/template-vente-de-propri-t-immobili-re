
import { Users, Award, MapPin, Clock, CheckCircle, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Clients Satisfaits" },
    { icon: Award, value: "15", label: "Années d'Expérience" },
    { icon: MapPin, value: "200+", label: "Biens Vendus" },
    { icon: Clock, value: "24/7", label: "Support Client" }
  ];

  const team = [
    {
      name: "Jean Dupont",
      role: "Directeur Général",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      description: "15 ans d'expérience dans l'immobilier de luxe"
    },
    {
      name: "Marie Laurent",
      role: "Responsable Ventes",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&q=80",
      description: "Spécialiste en négociation immobilière"
    },
    {
      name: "Pierre Martin",
      role: "Conseiller Investissement",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      description: "Expert en placement immobilier"
    }
  ];

  const values = [
    {
      title: "Transparence",
      description: "Nous croyons en une communication claire et honnête avec tous nos clients."
    },
    {
      title: "Excellence",
      description: "Nous nous efforçons de dépasser les attentes à chaque transaction."
    },
    {
      title: "Innovation",
      description: "Nous utilisons les dernières technologies pour optimiser votre expérience."
    },
    {
      title: "Intégrité",
      description: "Nous agissons toujours dans l'intérêt de nos clients avec éthique."
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
                À Propos de VeedGo
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Depuis 15 ans, nous accompagnons nos clients dans leurs projets immobiliers 
                avec passion, expertise et dévouement
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary-500" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Notre Histoire
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Fondée en 2009, VeedGo est née de la passion de créer des expériences 
                    immobilières exceptionnelles. Nous avons commencé avec une vision simple : 
                    révolutionner la façon dont les gens achètent, vendent et investissent 
                    dans l'immobilier.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Aujourd'hui, nous sommes fiers d'être l'une des agences immobilières 
                    les plus respectées, avec une équipe de professionnels dévoués qui 
                    partagent notre engagement envers l'excellence.
                  </p>
                  <Button className="bg-primary-500 hover:bg-primary-600">
                    Découvrir nos services
                  </Button>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
                    alt="Notre équipe"
                    className="rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Nos Valeurs
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Les principes qui guident notre approche et notre relation avec nos clients
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Notre Équipe
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Des professionnels expérimentés à votre service
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-primary-500 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.description}</p>
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
              Rejoignez Nos Clients Satisfaits
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Découvrez pourquoi des centaines de clients nous font confiance
            </p>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-500">
              Contactez-nous
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
