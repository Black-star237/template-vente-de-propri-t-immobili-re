
import { Building2, Home, Building, Warehouse, TreePine } from 'lucide-react';

const PropertyCategories = () => {
  const categories = [
    {
      icon: Building2,
      title: "Appartement",
      subtitle: "12 Propriétés",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Building,
      title: "Commercial",
      subtitle: "8 Propriétés",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: Warehouse,
      title: "Sale Shop",
      subtitle: "15 Propriétés",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: Home,
      title: "Town Ship",
      subtitle: "25 Propriétés",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      icon: TreePine,
      title: "Villa",
      subtitle: "18 Propriétés",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Rechercher Par Type De Propriété
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explorez notre large gamme de propriétés adaptées à tous vos besoins
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index}
                className="group cursor-pointer"
              >
                <div className={`${category.bgColor} rounded-2xl p-8 text-center transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2`}>
                  <div className={`w-16 h-16 ${category.iconColor} mx-auto mb-4 flex items-center justify-center`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-sm text-gray-600">{category.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PropertyCategories;
