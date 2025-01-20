import { Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-business-primary text-white mt-8">
      <div className="container mx-auto px-4 py-12">
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
              Enregistrée auprès du Greffe de Versailles SIREN 823 127 154
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

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} HAPPLYZ CONNECT</p>
        </div>
      </div>
    </footer>
  );
};