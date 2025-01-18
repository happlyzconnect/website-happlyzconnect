export const Services = () => {
  const services = [
    {
      title: "Conseil Stratégique",
      description: "Optimisez votre stratégie d'entreprise avec nos experts chevronnés.",
      icon: "📊",
    },
    {
      title: "Développement Digital",
      description: "Solutions numériques sur mesure pour votre croissance.",
      icon: "💻",
    },
    {
      title: "Innovation Continue",
      description: "Restez à la pointe avec nos solutions innovantes.",
      icon: "🚀",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-business-primary">
          Nos Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-business-primary">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};