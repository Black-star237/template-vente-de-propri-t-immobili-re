
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      details: ["+33 1 23 45 67 89", "+33 6 12 34 56 78"],
      description: "Lun-Ven 9h-18h, Sam 9h-12h"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@veedgo.fr", "info@veedgo.fr"],
      description: "Réponse sous 24h"
    },
    {
      icon: MapPin,
      title: "Adresse",
      details: ["123 Avenue des Champs-Élysées", "75008 Paris, France"],
      description: "Métro George V"
    },
    {
      icon: Clock,
      title: "Horaires",
      details: ["Lun-Ven: 9h00 - 18h00", "Samedi: 9h00 - 12h00"],
      description: "Fermé le dimanche"
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
                Contactez-Nous
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Notre équipe est à votre disposition pour répondre à toutes vos questions
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 mb-1">{detail}</p>
                    ))}
                    <p className="text-sm text-gray-500 mt-2">{info.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Envoyez-nous un Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+33 1 23 45 67 89"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Sujet *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Sujet de votre message"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Décrivez votre projet ou posez votre question..."
                      rows={6}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary-500 hover:bg-primary-600">
                    <Send className="w-4 h-4 mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              </div>

              {/* Map */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="h-full min-h-[500px] bg-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-12 h-12 mx-auto mb-4" />
                    <p>Carte interactive</p>
                    <p className="text-sm">123 Avenue des Champs-Élysées</p>
                    <p className="text-sm">75008 Paris, France</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Questions Fréquentes
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Trouvez rapidement les réponses aux questions les plus courantes
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "Combien coûtent vos services ?",
                  answer: "Nos tarifs varient selon le service. La vente : 3% de commission, la location : 8% des loyers, le conseil : 150€/heure."
                },
                {
                  question: "Combien de temps pour vendre un bien ?",
                  answer: "En moyenne, nos biens se vendent en 6-8 semaines grâce à notre stratégie marketing optimisée."
                },
                {
                  question: "Proposez-vous une estimation gratuite ?",
                  answer: "Oui, nous offrons une estimation gratuite et sans engagement de votre bien immobilier."
                },
                {
                  question: "Couvrez-vous toute la France ?",
                  answer: "Nous sommes présents dans les principales villes françaises avec des partenaires locaux certifiés."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
