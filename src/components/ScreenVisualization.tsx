
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
    
    // Get screen dimensions (parse the strings to numbers)
    const diagonalValue = parseFloat(diagonal);
    
    // Scale visualization based on diagonal size (bigger diagonal = bigger visual)
    // Use a logarithmic scale to smooth the differences between large and small screens
    const scaleBase = 20; // Base diagonal (e.g., 20 inches is standard)
    const logScale = Math.log(diagonalValue) / Math.log(scaleBase);
    const scaleFactor = Math.max(0.5, Math.min(1, logScale)); // Constrain between 0.5 and 1
    
    // Calculate screen dimensions maintaining aspect ratio with scale factor
    let screenWidth, screenHeight;
    if (aspectRatio > 1) {
      screenWidth = maxWidth * scaleFactor;
      screenHeight = screenWidth / aspectRatio;
      if (screenHeight > maxHeight * scaleFactor) {
        screenHeight = maxHeight * scaleFactor;
        screenWidth = screenHeight * aspectRatio;
      }
    } else {
      screenHeight = maxHeight * scaleFactor;
      screenWidth = screenHeight * aspectRatio;
      if (screenWidth > maxWidth * scaleFactor) {
        screenWidth = maxWidth * scaleFactor;
        screenHeight = screenWidth / aspectRatio;
      }
    }
    
    // Calculate position to center the screen
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
            <span className="text-xs font-medium text-gray-700">L: {width} cm</span>
          </div>
          
          {/* Height arrow */}
          <div className="absolute top-1/2 left-8 transform -translate-y-1/2 flex items-center">
            <ArrowUpDown className="text-[#56C7E1] mr-1" size={18} />
            <span className="text-xs font-medium text-gray-700">H: {height} cm</span>
          </div>
          
          {/* Diagonal arrow */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center">
            <ArrowUpRight className="text-[#9b87f5] mr-1" size={18} />
            <span className="text-xs font-medium text-gray-700 bg-white/80 px-1 rounded">
              D: {diagonal} cm
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
