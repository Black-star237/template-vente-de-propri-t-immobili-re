
import { Check, Award, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: "Agent Qualifiés",
      description: "Nos agents sont certifiés et expérimentés dans le domaine immobilier"
    },
    {
      icon: Users,
      title: "Service Client",
      description: "Un accompagnement personnalisé tout au long de votre projet"
    },
    {
      icon: Clock,
      title: "Support 24/7",
      description: "Notre équipe est disponible pour répondre à vos questions"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-primary-500 font-semibold mb-2">À PROPOS DE NOUS</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Bienvenue Dans Nos Propriétés Luxueuses,
              <span className="text-primary-500"> Avec Toutes Les Commodités.</span>
            </h2>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Avec plus de 15 ans d'expérience dans l'immobilier de prestige, nous vous accompagnons 
              dans la réalisation de vos projets les plus ambitieux. Notre expertise et notre réseau 
              nous permettent de vous proposer les meilleures opportunités du marché.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary-500" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
            
            <div className="flex items-center space-x-4">
              <Button className="bg-primary-500 hover:bg-primary-600 text-white">
                Prendre Rendez-vous
              </Button>
              <Button variant="outline">
                En savoir plus
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560448204-e1a3ecbb4d63?auto=format&fit=crop&w=800&q=80"
                alt="Propriété de luxe"
                className="w-full h-[500px] object-cover"
              />
              
              {/* Floating Card */}
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" alt="Agent" />
                    <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80" alt="Agent" />
                    <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80" alt="Agent" />
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-primary-500 flex items-center justify-center text-white text-xs font-semibold">
                      +50
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Nos Agents Expert</p>
                    <p className="text-xs text-gray-600">Disponibles 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
