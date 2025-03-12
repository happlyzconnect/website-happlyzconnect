
import { Tv, Users, GraduationCap } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HoverPopover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface SolutionsMenuProps {
  isSolutionPage: boolean;
}

export const SolutionsMenu = ({ isSolutionPage }: SolutionsMenuProps) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsPopoverOpen(true);
  };

  const handleMouseLeave = () => {
    setIsPopoverOpen(false);
  };

  return (
    <div 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <HoverPopover
        open={isPopoverOpen}
        onOpenChange={setIsPopoverOpen}
      >
        <PopoverTrigger asChild>
          <button className="px-4 pb-3 hover:text-[#56C7E1] text-white transition-colors relative group outline-none focus:outline-none">
            Nos solutions
            <span className={`absolute bottom-0 left-0 w-full h-[5px] bg-[#56C7E1] ${isSolutionPage ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-all duration-300`}></span>
          </button>
        </PopoverTrigger>
        <PopoverContent 
          className="w-80 p-0 bg-white rounded-md shadow-lg" 
          align="start"
        >
          <div className="grid gap-4 p-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Link 
                  to="/solutions/affichage-dynamique" 
                  className="flex items-center gap-2 font-medium hover:text-[#56C7E1] transition-colors"
                >
                  <Tv className="h-4 w-4 text-[#56C7E1]" />
                  <h4 className="font-semibold text-sm uppercase text-[#14213D] group-hover:text-[#56C7E1] hover:text-[#56C7E1] transition-colors">AFFICHAGE DYNAMIQUE</h4>
                </Link>
                <div className="pl-6 space-y-1">
                  <Link to="/solutions/affichage-dynamique/magasins" className="text-sm text-black hover:text-[#56C7E1] block">Magasins</Link>
                  <Link to="/solutions/affichage-dynamique/vitrines" className="text-sm text-black hover:text-[#56C7E1] block">Vitrines</Link>
                  <Link to="/solutions/affichage-dynamique/corporate" className="text-sm text-black hover:text-[#56C7E1] block">Corporate</Link>
                </div>
              </div>
              
              <div className="space-y-2">
                <Link 
                  to="/solutions/salles-de-reunion" 
                  className="flex items-center gap-2 font-medium hover:text-[#56C7E1] transition-colors"
                >
                  <Users className="h-4 w-4 text-[#56C7E1]" />
                  <h4 className="font-semibold text-sm uppercase text-[#14213D] group-hover:text-[#56C7E1] hover:text-[#56C7E1] transition-colors">SALLES DE RÉUNION</h4>
                </Link>
                <div className="pl-6">
                  <Link to="/solutions/salles-de-reunion/solutions-audiovisuelles" className="text-sm text-black hover:text-[#56C7E1] block">Solutions audiovisuelles</Link>
                </div>
              </div>
              
              <div className="space-y-2">
                <Link 
                  to="/solutions/salles-de-classe" 
                  className="flex items-center gap-2 font-medium hover:text-[#56C7E1] transition-colors"
                >
                  <GraduationCap className="h-4 w-4 text-[#56C7E1]" />
                  <h4 className="font-semibold text-sm uppercase text-[#14213D] group-hover:text-[#56C7E1] hover:text-[#56C7E1] transition-colors">SALLES DE CLASSE</h4>
                </Link>
                <div className="pl-6">
                  <Link to="/solutions/salles-de-classe/solutions-pedagogiques" className="text-sm text-black hover:text-[#56C7E1] block">Solutions pédagogiques</Link>
                </div>
              </div>
            </div>
          </div>
        </PopoverContent>
      </HoverPopover>
    </div>
  );
};
