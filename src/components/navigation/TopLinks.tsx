
import { Phone, Mail, Globe, ArrowDown, Download } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import emailjs from '@emailjs/browser';

interface TopLinksProps {
  scrollToBottom: () => void;
}

export const TopLinks = ({ scrollToBottom }: TopLinksProps) => {
  const [currentLanguage, setCurrentLanguage] = useState("FR");
  
  const textColorStyle = {
    color: '#FFFFFF'
  };

  const downloadBrochure = () => {
    emailjs.send(
      "service_qytcdsw",
      "template_a6q4yno",
      {
        brochure_download: "Plaquette commerciale téléchargée depuis la navigation"
      },
      "ySp_OZUSZFd1MsIZJ"
    ).then(() => {
      const link = document.createElement('a');
      link.href = '/uploads/plaquette-commerciale-happlyz.pdf';
      link.download = 'plaquette-commerciale-happlyz.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }).catch((error) => {
      console.error('EmailJS error:', error);
      const link = document.createElement('a');
      link.href = '/uploads/plaquette-commerciale-happlyz.pdf';
      link.download = 'plaquette-commerciale-happlyz.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <div className="hidden md:flex items-center space-x-6">
      <div className="flex items-center space-x-2">
        <Phone size={14} style={textColorStyle} />
        <a 
          href="tel:0185390167" 
          className="text-sm text-white hover:text-[#56C7E1] transition-colors"
        >
          01 85 39 01 67
        </a>
      </div>
      <div className="flex items-center space-x-2">
        <Mail size={14} style={textColorStyle} />
        <a 
          href="mailto:contact@happlyz.com" 
          className="text-sm text-white hover:text-[#56C7E1] transition-colors"
        >
          contact@happlyz.com
        </a>
      </div>
      <div className="flex items-center space-x-2">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center space-x-1 text-white hover:text-[#56C7E1]">
            <Globe size={14} />
            <span className="text-sm">{currentLanguage}</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white z-50" sideOffset={5}>
            <DropdownMenuItem onClick={() => setCurrentLanguage("FR")}>
              <span className="mr-2">🇫🇷</span> Français
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <button
        onClick={scrollToBottom}
        className="text-white hover:text-[#56C7E1] transition-colors flex items-center gap-2 text-sm"
      >
        Bas du site
        <ArrowDown size={14} />
      </button>
      <button
        onClick={downloadBrochure}
        className="text-white hover:text-[#56C7E1] transition-colors flex items-center gap-2 text-sm"
      >
        <Download size={14} />
        <span>Plaquette</span>
      </button>
    </div>
  );
};
