import { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export const CookieConsent = () => {
  // Force showConsent to false to disable the popup
  const [showConsent] = useState(false);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
  };

  return (
    <AlertDialog open={showConsent}>
      <AlertDialogContent className="sm:max-w-[425px]">
        <AlertDialogHeader>
          <AlertDialogTitle>Gestion des Cookies</AlertDialogTitle>
          <AlertDialogDescription className="text-sm text-muted-foreground">
            Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
            Ces cookies nous permettent d'analyser l'utilisation du site et de personnaliser 
            son contenu. Vous pouvez accepter tous les cookies ou les refuser.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleDecline}>
            Refuser
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleAccept}>
            Accepter
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};