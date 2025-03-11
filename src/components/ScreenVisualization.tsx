
import { useEffect, useRef, useMemo } from "react";
import { ArrowUpRight, ArrowLeftRight, ArrowUpDown, Monitor } from "lucide-react";

interface ScreenVisualizationProps {
  width: string;
  height: string;
  diagonal: string;
  aspectRatio: number;
  orientation?: "landscape" | "portrait";
  screenCount?: number;
}

export const ScreenVisualization = ({
  width,
  height,
  diagonal,
  aspectRatio,
  orientation = "landscape",
  screenCount = 1,
}: ScreenVisualizationProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Calculate grid configuration based on screenCount
  const gridConfiguration = useMemo(() => {
    const columns = Math.ceil(Math.sqrt(screenCount));
    const rows = Math.ceil(screenCount / columns);
    return { columns, rows };
  }, [screenCount]);
  
  // Calculate total dimensions
  const totalDimensions = useMemo(() => {
    if (!width || !height) return { width: "0", height: "0" };
    
    const widthValue = parseFloat(orientation === "portrait" ? height : width);
    const heightValue = parseFloat(orientation === "portrait" ? width : height);
    
    // Add a small gap between screens (3% of screen width)
    const gap = widthValue * 0.03;
    
    const totalWidth = (widthValue * gridConfiguration.columns) + (gap * (gridConfiguration.columns - 1));
    const totalHeight = (heightValue * gridConfiguration.rows) + (gap * (gridConfiguration.rows - 1));
    
    return {
      width: totalWidth.toFixed(2),
      height: totalHeight.toFixed(2)
    };
  }, [width, height, orientation, gridConfiguration, screenCount]);
  
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
    // For portrait, we invert the aspect ratio
    const effectiveAspectRatio = orientation === "portrait" ? 1 / aspectRatio : aspectRatio;
    
    // Adjust scale factor based on number of screens to ensure they fit
    const screenScaleFactor = screenCount > 1 ? 
      scaleFactor * Math.min(1, 1.2 / Math.sqrt(screenCount)) : 
      scaleFactor;
    
    let singleScreenWidth, singleScreenHeight;
    if (effectiveAspectRatio > 1) {
      singleScreenWidth = maxWidth * screenScaleFactor;
      singleScreenHeight = singleScreenWidth / effectiveAspectRatio;
      if (singleScreenHeight > maxHeight * screenScaleFactor) {
        singleScreenHeight = maxHeight * screenScaleFactor;
        singleScreenWidth = singleScreenHeight * effectiveAspectRatio;
      }
    } else {
      singleScreenHeight = maxHeight * screenScaleFactor;
      singleScreenWidth = singleScreenHeight * effectiveAspectRatio;
      if (singleScreenWidth > maxWidth * screenScaleFactor) {
        singleScreenWidth = maxWidth * screenScaleFactor;
        singleScreenHeight = singleScreenWidth / effectiveAspectRatio;
      }
    }
    
    // Calculate how many screens we can place in each row/column
    // Using a square-like grid arrangement based on screenCount
    const columns = Math.ceil(Math.sqrt(screenCount));
    const rows = Math.ceil(screenCount / columns);
    
    // Calculate the total grid size
    const totalWidth = singleScreenWidth * columns;
    const totalHeight = singleScreenHeight * rows;
    
    // Calculate spacing between screens
    const spacing = Math.max(4, singleScreenWidth * 0.02);
    
    // Adjust grid position to center the grid
    const gridX = (canvas.width - totalWidth - (spacing * (columns - 1))) / 2;
    const gridY = (canvas.height - totalHeight - (spacing * (rows - 1))) / 2;
    
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
        
        // If this is the first screen, draw dimension indicators
        if (row === 0 && col === 0) {
          // Draw diagonal line
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + singleScreenWidth, y + singleScreenHeight);
          ctx.strokeStyle = "#9b87f5";
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      }
    }
    
    // If multiple screens, add a note about the arrangement
    if (screenCount > 1) {
      ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
      ctx.fillRect(10, canvas.height - 30, 200, 20);
      ctx.fillStyle = "#ffffff";
      ctx.font = "12px Arial";
      ctx.fillText(`Configuration: ${columns}×${rows}`, 15, canvas.height - 15);
      
      // Draw total dimensions on the canvas for multi-screen setups
      ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
      ctx.fillRect(canvas.width - 210, canvas.height - 30, 200, 20);
      ctx.fillStyle = "#ffffff";
      ctx.font = "12px Arial";
      ctx.fillText(`Dimensions totales: ${totalDimensions.width}×${totalDimensions.height} cm`, canvas.width - 205, canvas.height - 15);
    }
    
  }, [width, height, diagonal, aspectRatio, orientation, screenCount, totalDimensions]);
  
  // Déterminer les dimensions à afficher
  const displayWidth = orientation === "portrait" ? height : width;
  const displayHeight = orientation === "portrait" ? width : height;
  
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
          {/* Width arrow - Positioned at the center bottom of the screen visualization */}
          <div className="absolute bottom-[35%] left-1/2 transform -translate-x-1/2 flex items-center">
            <ArrowLeftRight className="text-[#9b87f5] mr-1" size={18} />
            <span className="text-xs font-medium text-[#9b87f5] bg-white/80 px-1 rounded">
              L: {displayWidth} cm
            </span>
          </div>
          
          {/* Height arrow */}
          <div className="absolute top-1/2 left-8 transform -translate-y-1/2 flex items-center">
            <ArrowUpDown className="text-[#9b87f5] mr-1" size={18} />
            <span className="text-xs font-medium text-[#9b87f5] bg-white/80 px-1 rounded">
              H: {displayHeight} cm
            </span>
          </div>
          
          {/* Diagonal arrow */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center">
            <ArrowUpRight className="text-[#9b87f5] mr-1" size={18} />
            <span className="text-xs font-medium text-[#9b87f5] bg-white/80 px-1 rounded">
              D: {diagonal} cm
            </span>
          </div>
          
          {/* Total number of screens */}
          {screenCount > 1 && (
            <div className="absolute top-4 right-4 bg-[#9b87f5]/90 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
              {screenCount}
            </div>
          )}
          
          {/* Total dimensions for multi-screen setup - Displayed as overlay badge */}
          {screenCount > 1 && (
            <div className="absolute bottom-4 right-4 bg-[#56C7E1]/90 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
              <Monitor className="mr-1" size={14} />
              {totalDimensions.width} × {totalDimensions.height} cm
            </div>
          )}
        </div>
      )}
    </div>
  );
};
