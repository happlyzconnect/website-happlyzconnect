export const About = () => {
  return (
    <section className="py-20 bg-business-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-business-primary">
            À Propos de Nous
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Depuis notre création, nous nous engageons à fournir des solutions innovantes 
            qui permettent à nos clients de se démarquer dans leur secteur. Notre expertise
            et notre passion pour l'excellence font de nous votre partenaire de confiance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { title: "Innovation", value: "100+" },
              { title: "Clients Satisfaits", value: "500+" },
              { title: "Projets Réussis", value: "1000+" },
            ].map((stat) => (
              <div key={stat.title} className="p-6 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-business-accent mb-2">
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