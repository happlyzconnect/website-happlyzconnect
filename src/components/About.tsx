export const About = () => {
  return (
    <section className="py-12 bg-business-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-business-primary">
            À Propos de Nous
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Créé en 2016, nous avons développé un savoir-faire unique dans l'intégration 
            de systèmes audiovisuels professionnels. Notre expertise technique, combinée 
            à notre approche centrée client, nous permet de délivrer des solutions 
            sur-mesure qui répondent parfaitement aux besoins de nos clients. 
            Notre engagement pour l'excellence, notre réactivité et notre capacité 
            à innover font de nous un partenaire de confiance pour tous vos projets 
            audiovisuels.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              { title: "Installations Réalisées", value: "250+" },
              { title: "Clients Satisfaits", value: "40+" },
            ].map((stat) => (
              <div key={stat.title} className="p-6 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-business-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};