
import { useEffect, useRef } from "react";
import { ArrowUpRight, ArrowLeftRight, ArrowUpDown } from "lucide-react";

interface ScreenVisualizationProps {
  width: string;
  height: string;
  diagonal: string;
  aspectRatio: number;
}

export const ScreenVisualization = ({
  width,
  height,
  diagonal,
  aspectRatio,
}: ScreenVisualizationProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current || !width || !height || !diagonal) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Set up dimensions
    const maxWidth = canvas.width - 80; // Leave space for labels
    const maxHeight = canvas.height - 80;
    
    // Calculate screen dimensions maintaining aspect ratio
    let screenWidth, screenHeight;
    if (aspectRatio > 1) {
      screenWidth = maxWidth;
      screenHeight = screenWidth / aspectRatio;
      if (screenHeight > maxHeight) {
        screenHeight = maxHeight;
        screenWidth = screenHeight * aspectRatio;
      }
    } else {
      screenHeight = maxHeight;
      screenWidth = screenHeight * aspectRatio;
      if (screenWidth > maxWidth) {
        screenWidth = maxWidth;
        screenHeight = screenWidth / aspectRatio;
      }
    }
    
    // Calculate position
    const x = (canvas.width - screenWidth) / 2;
    const y = (canvas.height - screenHeight) / 2;
    
    // Draw screen
    ctx.fillStyle = "#F6F6F7";
    ctx.fillRect(x, y, screenWidth, screenHeight);
    
    ctx.strokeStyle = "#56C7E1";
    ctx.lineWidth = 3;
    ctx.strokeRect(x, y, screenWidth, screenHeight);
    
    // Draw diagonal line
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + screenWidth, y + screenHeight);
    ctx.strokeStyle = "#9b87f5";
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // We're removing the text labels from the canvas since they'll be shown as overlays
  }, [width, height, diagonal, aspectRatio]);
  
  return (
    <div className="relative">
      <canvas 
        ref={canvasRef} 
        width={400} 
        height={300} 
        className="w-full h-auto border border-gray-200 rounded-lg bg-white"
      />
      
      {width && height && diagonal && (
        <div className="absolute inset-0 pointer-events-none">
          {/* Width arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center">
            <ArrowLeftRight className="text-[#56C7E1] mr-1" size={18} />
            <span className="text-xs font-medium text-gray-700">Largeur: {width} cm</span>
          </div>
          
          {/* Height arrow */}
          <div className="absolute top-1/2 left-8 transform -translate-y-1/2 flex items-center">
            <ArrowUpDown className="text-[#56C7E1] mr-1" size={18} />
            <span className="text-xs font-medium text-gray-700">Hauteur: {height} cm</span>
          </div>
          
          {/* Diagonal arrow */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center">
            <ArrowUpRight className="text-[#9b87f5] mr-1" size={18} />
            <span className="text-xs font-medium text-gray-700 bg-white/80 px-1 rounded">
              Diagonale: {diagonal} cm
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
