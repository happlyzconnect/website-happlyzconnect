
import { useEffect, useRef, useMemo } from "react";
import { ArrowUpRight, ArrowLeftRight, ArrowUpDown, Monitor } from "lucide-react";

interface ScreenVisualizationProps {
  width: string;
  height: string;
  diagonal: string;
  aspectRatio: number;
  orientation?: "landscape" | "portrait";
  columns?: number;
  rows?: number;
}

export const ScreenVisualization = ({
  width,
  height,
  diagonal,
  aspectRatio,
  orientation = "landscape",
  columns = 1,
  rows = 1,
}: ScreenVisualizationProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Calculate total screen count
  const screenCount = columns * rows;
  
  // Calculate total dimensions
  const totalDimensions = useMemo(() => {
    if (!width || !height) return { width: "0", height: "0" };
    
    const widthValue = parseFloat(orientation === "portrait" ? height : width);
    const heightValue = parseFloat(orientation === "portrait" ? width : height);
    
    // Add a small gap between screens (3% of screen width)
    const gap = widthValue * 0.03;
    
    const totalWidth = (widthValue * columns) + (gap * (columns - 1));
    const totalHeight = (heightValue * rows) + (gap * (rows - 1));
    
    return {
      width: totalWidth.toFixed(2),
      height: totalHeight.toFixed(2)
    };
  }, [width, height, orientation, columns, rows]);
  
  useEffect(() => {
    if (!canvasRef.current || !width || !height || !diagonal) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Set up dimensions with appropriate margins
    const maxWidth = canvas.width - 100; 
    const maxHeight = canvas.height - 100;
    
    // Get screen dimensions (parse the strings to numbers)
    const diagonalValue = parseFloat(diagonal);
    
    // Scale visualization based on diagonal size and screen count
    const scaleBase = 20; // Base diagonal size reference
    const logScale = Math.log(diagonalValue) / Math.log(scaleBase);
    
    // Adjust base scale factor depending on whether it's a single screen or multiple screens
    const baseFactor = screenCount === 1 ? 1.0 : 1.5; 
    const scaleFactor = baseFactor * Math.max(0.5, Math.min(1, logScale));
    
    // For portrait, we invert the aspect ratio
    const effectiveAspectRatio = orientation === "portrait" ? 1 / aspectRatio : aspectRatio;
    
    // Adjust scaling factor based on screen configuration
    const multiScreenScaleFactor = screenCount > 1 ? 
      0.9 / Math.sqrt(Math.max(columns, rows)) : 
      0.8; // Reduced from 1.0 to 0.8 for single screens to prevent cutoff
    
    // Apply the scaling factors
    const screenScaleFactor = scaleFactor * multiScreenScaleFactor;
    
    let singleScreenWidth, singleScreenHeight;
    if (effectiveAspectRatio > 1) {
      // For landscape orientation (wider than tall)
      singleScreenWidth = (maxWidth * screenScaleFactor) / columns;
      singleScreenHeight = singleScreenWidth / effectiveAspectRatio;
      
      // Check if the height exceeds the available height
      if (singleScreenHeight * rows > maxHeight) {
        singleScreenHeight = (maxHeight * screenScaleFactor) / rows;
        singleScreenWidth = singleScreenHeight * effectiveAspectRatio;
      }
    } else {
      // For portrait orientation (taller than wide)
      singleScreenHeight = (maxHeight * screenScaleFactor) / rows;
      singleScreenWidth = singleScreenHeight * effectiveAspectRatio;
      
      // Check if the width exceeds the available width
      if (singleScreenWidth * columns > maxWidth) {
        singleScreenWidth = (maxWidth * screenScaleFactor) / columns;
        singleScreenHeight = singleScreenWidth / effectiveAspectRatio;
      }
    }
    
    // Calculate spacing between screens - make it proportional but not too large
    const spacing = Math.max(4, singleScreenWidth * 0.02);
    
    // Adjust grid position to center the grid
    const totalGridWidth = (singleScreenWidth * columns) + (spacing * (columns - 1));
    const totalGridHeight = (singleScreenHeight * rows) + (spacing * (rows - 1));
    const gridX = (canvas.width - totalGridWidth) / 2;
    const gridY = (canvas.height - totalGridHeight) / 2;
    
    // Draw each screen
    let screenNumber = 0;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        screenNumber++;
        if (screenNumber > screenCount) break;
        
        const x = gridX + col * (singleScreenWidth + spacing);
        const y = gridY + row * (singleScreenHeight + spacing);
        
        // Draw screen bezel (black border)
        const bezelThickness = Math.max(2, singleScreenWidth * 0.02); // Proportional bezel
        ctx.fillStyle = "#222222";
        ctx.fillRect(
          x - bezelThickness, 
          y - bezelThickness, 
          singleScreenWidth + bezelThickness * 2, 
          singleScreenHeight + bezelThickness * 2
        );
        
        // Draw screen
        ctx.fillStyle = "#333333";
        ctx.fillRect(x, y, singleScreenWidth, singleScreenHeight);
        
        // Add screen glossiness/reflection
        const gradient = ctx.createLinearGradient(x, y, x, y + singleScreenHeight);
        gradient.addColorStop(0, "rgba(255, 255, 255, 0.1)");
        gradient.addColorStop(0.2, "rgba(255, 255, 255, 0.05)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, singleScreenWidth, singleScreenHeight);
      }
    }
    
    // If multiple screens, add a note about the arrangement
    if (screenCount > 1) {
      ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
      ctx.fillRect(10, canvas.height - 30, 200, 20);
      ctx.fillStyle = "#ffffff";
      ctx.font = "12px Arial";
      ctx.fillText(`Configuration: ${columns}×${rows}`, 15, canvas.height - 15);
    }
    
  }, [width, height, diagonal, aspectRatio, orientation, screenCount, columns, rows, totalDimensions]);
  
  // Determine the dimensions to display
  const displayWidth = orientation === "portrait" ? height : width;
  const displayHeight = orientation === "portrait" ? width : height;
  
  // Check if a screen size has been selected
  const hasScreenSize = Boolean(width && height && diagonal);
  
  return (
    <div className="relative">
      <canvas 
        ref={canvasRef} 
        width={500}
        height={375}
        className="w-full h-auto border border-gray-200 rounded-lg bg-white"
      />
      
      <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center">
        <div className={`${hasScreenSize ? 'bg-[#56C7E1]/90' : 'bg-gray-400/80'} text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center shadow-md transition-colors duration-300`}>
          <Monitor className="mr-2" size={16} />
          {hasScreenSize ? (
            <span>
              {displayWidth} × {displayHeight} cm 
              {screenCount > 1 ? ` (Total: ${totalDimensions.width} × ${totalDimensions.height} cm)` : ''}
            </span>
          ) : (
            <span>Aucune taille d'écran sélectionnée</span>
          )}
        </div>
      </div>
    </div>
  );
};
