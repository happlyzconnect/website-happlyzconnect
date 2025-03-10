
import emailjs from '@emailjs/browser';
import { toast } from "@/hooks/use-toast";

interface DownloadInfo {
  source: string;
  companyName?: string;
  lastName?: string;
  firstName?: string;
  email?: string;
  phone?: string;
}

export const downloadBrochure = (downloadInfo: DownloadInfo) => {
  // Créer le lien pour télécharger le fichier
  const link = document.createElement('a');
  link.href = '/lovable-uploads/plaquette-commerciale-happlyz.pdf';
  link.download = 'plaquette-commerciale-happlyz.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // Valeurs par défaut si les champs ne sont pas renseignés
  const companyName = downloadInfo.companyName || 'Non spécifié';
  const lastName = downloadInfo.lastName || 'Non spécifié';
  const firstName = downloadInfo.firstName || 'Non spécifié';
  const email = downloadInfo.email || 'notification@happlyz.com';
  const phone = downloadInfo.phone || 'Non spécifié';
  
  // Envoyer la notification par email
  emailjs.send(
    "service_qytcdsw",
    "template_uahaue2",
    {
      to_email: 'contact@happlyz.com',
      message: `Quelqu'un a téléchargé la plaquette commerciale depuis ${downloadInfo.source}.`,
      request_type: 'Téléchargement plaquette',
      company_name: companyName,
      last_name: lastName,
      first_name: firstName,
      from_email: email,
      phone: phone,
    },
    "ySp_OZUSZFd1MsIZJ"
  ).then(
    () => {
      console.log('Email notification sent successfully');
      console.log('Download details:', {
        source: downloadInfo.source,
        companyName,
        lastName,
        firstName,
        email,
        phone
      });
    },
    (error) => {
      console.error('Failed to send email notification:', error);
    }
  );
  
  // Afficher la notification toast
  toast({
    title: "Téléchargement démarré",
    description: "Merci de votre intérêt pour nos services !",
  });
};
