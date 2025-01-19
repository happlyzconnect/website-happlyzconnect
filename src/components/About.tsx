export const About = () => {
  return (
    <section className="py-12 bg-business-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-business-primary">
            À propos de nous
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Depuis 2016, nous accompagnons nos clients partout en France en proposant des solutions audiovisuelles professionnelles complètes, de la conception à la maintenance. Grâce à notre <strong>expertise technique</strong> et à notre <strong>approche centrée sur le client</strong>, nous réalisons des installations sur mesure, adaptées à divers espaces : salles de réunion, auditoriums, salles de classe, surfaces de vente ou d'exposition.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              { title: "Installations réalisées", value: "250+" },
              { title: "Clients satisfaits", value: "40+" },
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