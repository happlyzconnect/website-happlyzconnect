
import { Partner } from "./partnersData";

interface PartnersListProps {
  partners: Partner[];
  failedImages: number[];
  onImageError: (partnerId: number) => void;
}

export const PartnersList = ({ partners, failedImages, onImageError }: PartnersListProps) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
      {partners.map((partner) => (
        <div key={partner.id} className="flex items-center justify-center p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow h-14 sm:h-16">
          {partner.url ? (
            <a 
              href={partner.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full h-full flex items-center justify-center"
              aria-label={`Visiter le site de ${partner.name}`}
            >
              {failedImages.includes(partner.id) ? (
                <div className="flex flex-col items-center justify-center text-gray-400">
                  <div className="text-xs text-center">{partner.name}</div>
                </div>
              ) : (
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className={`max-w-[75%] max-h-[75%] object-contain ${partner.className || ''}`}
                  loading="lazy"
                  onError={() => onImageError(partner.id)}
                />
              )}
            </a>
          ) : (
            <>
              {failedImages.includes(partner.id) ? (
                <div className="flex flex-col items-center justify-center text-gray-400">
                  <div className="text-xs text-center">{partner.name}</div>
                </div>
              ) : (
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className={`max-w-[75%] max-h-[75%] object-contain ${partner.className || ''}`}
                  loading="lazy"
                  onError={() => onImageError(partner.id)}
                />
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}
