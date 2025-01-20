import { Linkedin, Twitter, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-business-primary text-white mt-8">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-4">HAPPLYZ Connect</h3>
            <p className="text-sm text-gray-300">
              Société à actions simplifiée au capital de 30.000€
            </p>
            <p className="text-sm text-gray-300">
              Siège social : 5 rue Charles Despeaux 78400 CHATOU
            </p>
            <p className="text-sm text-gray-300">
              SIREN : 823 127 154 RCS VERSAILLES
            </p>
          </div>

          {/* Links & Social */}
          <div className="space-y-6">
            {/* Legal Links */}
            <div className="flex flex-wrap gap-4">
              <Link to="/mentions-legales" className="text-sm hover:text-business-accent transition-colors">
                Mentions légales
              </Link>
              <Link to="/conditions-generales" className="text-sm hover:text-business-accent transition-colors">
                Conditions générales
              </Link>
            </div>

            {/* Social Media */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/happlyzconnect"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-business-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://x.com/InStoria_retail"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-business-accent transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright and Back to Top */}
        <div className="border-t border-gray-700 mt-6 pt-4 flex justify-between items-center">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} HAPPLYZ CONNECT</p>
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="text-gray-400 hover:text-business-accent transition-colors flex items-center gap-2"
          >
            Haut du site
            <ArrowUp size={16} />
          </Button>
        </div>
      </div>
    </footer>
  );
};