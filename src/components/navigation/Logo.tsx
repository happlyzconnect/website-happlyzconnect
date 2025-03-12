
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Logo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);

  const handleLogoClick = (event: React.MouseEvent) => {
    event.preventDefault();
    if (location.pathname === '/') {
      window.location.href = '/';
    } else {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <a 
      href="/"
      onClick={handleLogoClick}
      className="h-8 hover:opacity-80 transition-opacity flex items-center"
    >
      {!imageError ? (
        <img 
          src="/lovable-uploads/31538189-590f-499b-80e7-052171630c35.png"
          alt="Happlyz Connect" 
          className="h-full object-contain"
          onError={() => {
            console.error("Logo image failed to load");
            setImageError(true);
          }}
        />
      ) : (
        <div className="text-white font-bold text-lg">HAPPLYZ CONNECT</div>
      )}
    </a>
  );
};
