
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Download } from "lucide-react";
import emailjs from '@emailjs/browser';

// Initialiser EmailJS avec la clé publique
emailjs.init("ySp_OZUSZFd1MsIZJ");

export const Contact = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    lastName: "",
    firstName: "",
    email: "",
    phone: "",
    message: "",
    requestType: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await emailjs.send(
        "service_qytcdsw",
        "template_uahaue2",
        {
          to_email: 'contact@happlyz.com',
          company_name: formData.companyName,
          last_name: formData.lastName,
          first_name: formData.firstName,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          request_type: formData.requestType,
        },
        "ySp_OZUSZFd1MsIZJ"
      );

      toast({
        title: "Message envoyé !",
        description: "Nous vous recontacterons dans les plus brefs délais.",
      });

      setFormData({
        companyName: "",
        lastName: "",
        firstName: "",
        email: "",
        phone: "",
        message: "",
        requestType: "",
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
        variant: "destructive",
      });
    }
  };

  const downloadBrochure = () => {
    // Create a link to download the file
    const link = document.createElement('a');
    link.href = '/lovable-uploads/plaquette-commerciale-happlyz.pdf'; // This path will need to be updated when you upload the PDF
    link.download = 'plaquette-commerciale-happlyz.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-12 bg-business-light" id="contact">
      <div 
        className="relative w-full h-[300px]"
        style={{
          backgroundImage: "url('/lovable-uploads/b668f626-055f-4a48-b40f-02c6d629a227.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          filter: 'brightness(0.9)',
          clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0% 80%)'
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, rgba(20, 33, 61, 0.3) 0%, rgba(20, 33, 61, 0.5) 100%)'
          }}
        />
        <div className="absolute inset-0 flex flex-col items-start justify-center px-20 text-white">
          <h3 className="text-3xl font-bold mb-4">Un projet ?</h3>
          <p className="text-left mb-2">
            Nos services sont joignables du lundi au vendredi
          </p>
          <p className="text-xl font-semibold">
            <a 
              href="tel:0185390167" 
              className="hover:text-[#56C7E1] transition-colors"
            >
              01 85 39 01 67
            </a>
            {" / "}
            <a 
              href="mailto:contact@happlyz.com"
              className="hover:text-[#56C7E1] transition-colors"
            >
              contact@happlyz.com
            </a>
          </p>
          <button
            onClick={downloadBrochure}
            className="flex items-center gap-2 text-white hover:text-[#56C7E1] transition-colors mt-4"
          >
            <Download size={18} />
            <span>Télécharger notre plaquette commerciale</span>
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6 text-business-primary">
            Contactez-nous
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                Nom de la société <span className="text-red-500">*</span>
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
                  Nom <span className="text-red-500">*</span>
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
                  Prénom <span className="text-red-500">*</span>
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
                Email <span className="text-red-500">*</span>
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
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Téléphone professionnel <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-business-accent focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Type de demande <span className="text-red-500">*</span>
              </label>
              <RadioGroup
                value={formData.requestType}
                onValueChange={(value) => setFormData({ ...formData, requestType: value })}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="information" id="information" />
                  <label htmlFor="information" className="text-sm text-gray-600">
                    Information
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="quote" id="quote" />
                  <label htmlFor="quote" className="text-sm text-gray-600">
                    Devis
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
                Message <span className="text-red-500">*</span>
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
            <p className="text-sm text-gray-500 mb-2">* champs obligatoires</p>
          </form>
        </div>
      </div>
    </section>
  );
};
