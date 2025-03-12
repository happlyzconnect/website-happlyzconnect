
import { useLocation, useNavigate } from "react-router-dom";

export const Logo = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
      className="h-8 hover:opacity-80 transition-opacity"
    >
      <img 
        src="/uploads/31538189-590f-499b-80e7-052171630c35.png"
        alt="Happlyz Connect" 
        className="h-full object-contain"
        onError={(e) => {
          console.error("Logo image failed to load");
          e.currentTarget.src = "/placeholder.svg";
        }}
      />
    </a>
  );
};
