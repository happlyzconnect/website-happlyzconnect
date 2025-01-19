import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const Contact = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    lastName: "",
    firstName: "",
    email: "",
    message: "",
    companyType: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });
    setFormData({
      companyName: "",
      lastName: "",
      firstName: "",
      email: "",
      message: "",
      companyType: "",
    });
  };

  return (
    <section className="py-20 bg-business-light" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-business-primary">
            Contactez-nous
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                Nom de la société
              </label>
              <input
                type="text"
                id="companyName"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-business-accent focus:border-transparent"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-business-accent focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  Prénom
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-business-accent focus:border-transparent"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-business-accent focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Type de société
              </label>
              <RadioGroup
                value={formData.companyType}
                onValueChange={(value) => setFormData({ ...formData, companyType: value })}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="retail" id="retail" />
                  <label htmlFor="retail" className="text-sm text-gray-600">
                    Retail
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="privateCompany" id="privateCompany" />
                  <label htmlFor="privateCompany" className="text-sm text-gray-600">
                    Entreprise privée
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="publicEntity" id="publicEntity" />
                  <label htmlFor="publicEntity" className="text-sm text-gray-600">
                    Collectivité
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="educationalInstitution" id="educationalInstitution" />
                  <label htmlFor="educationalInstitution" className="text-sm text-gray-600">
                    Etablissement scolaire
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <label htmlFor="other" className="text-sm text-gray-600">
                    Autre
                  </label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-business-accent focus:border-transparent"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-business-accent hover:bg-business-accent/90 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};