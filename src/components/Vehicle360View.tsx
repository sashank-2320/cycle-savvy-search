import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { RotateCcw, Play, Pause, MousePointer2 } from "lucide-react";

interface Vehicle360ViewProps {
  vehicleId: string;
  vehicleName: string;
  baseImage: string;
}

const Vehicle360View: React.FC<Vehicle360ViewProps> = ({ vehicleId, vehicleName, baseImage }) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Simulate 36 frames (10-degree intervals)
  const totalFrames = 36;

  // Generate frame images (in a real app, these would be actual 360° photos)
  const getFrameImage = (frame: number) => {
    // For demo purposes, we'll use the same image with different filters
    // In production, you'd have actual 360° images
    return baseImage;
  };

  const nextFrame = () => {
    setCurrentFrame((prev) => (prev + 1) % totalFrames);
  };

  const prevFrame = () => {
    setCurrentFrame((prev) => (prev - 1 + totalFrames) % totalFrames);
  };

  const startAutoRotate = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextFrame, 100);
    setIsPlaying(true);
  };

  const stopAutoRotate = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsPlaying(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    stopAutoRotate();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - startX;
    const sensitivity = 5;
    
    if (Math.abs(deltaX) > sensitivity) {
      if (deltaX > 0) {
        nextFrame();
      } else {
        prevFrame();
      }
      setStartX(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetView = () => {
    setCurrentFrame(0);
    stopAutoRotate();
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Calculate rotation for visual effect
  const rotation = (currentFrame / totalFrames) * 360;

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-foreground">360° View</h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MousePointer2 className="w-4 h-4" />
          <span>Drag to rotate</span>
        </div>
      </div>

      <div 
        ref={containerRef}
        className="relative bg-secondary/20 rounded-lg overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ aspectRatio: '16/9' }}
      >
        <img
          src={getFrameImage(currentFrame)}
          alt={`${vehicleName} - Frame ${currentFrame}`}
          className="w-full h-full object-cover transition-transform duration-75"
          style={{ 
            transform: `rotateY(${rotation}deg)`,
            transformStyle: 'preserve-3d'
          }}
          draggable={false}
        />
        
        {/* Overlay indicators */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        
        {/* Frame indicator */}
        <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
          {currentFrame + 1} / {totalFrames}
        </div>

        {/* Rotation indicator */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-background/90 backdrop-blur-sm rounded-full h-2 overflow-hidden">
            <div 
              className="bg-primary h-full transition-all duration-75"
              style={{ width: `${((currentFrame + 1) / totalFrames) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-2 mt-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevFrame}
          disabled={isPlaying}
        >
          <RotateCcw className="w-4 h-4" />
        </Button>
        
        <Button
          variant={isPlaying ? "destructive" : "default"}
          onClick={isPlaying ? stopAutoRotate : startAutoRotate}
          className="min-w-[100px]"
        >
          {isPlaying ? (
            <>
              <Pause className="w-4 h-4 mr-2" />
              Stop
            </>
          ) : (
            <>
              <Play className="w-4 h-4 mr-2" />
              Auto Rotate
            </>
          )}
        </Button>

        <Button
          variant="outline"
          onClick={resetView}
          disabled={isPlaying}
        >
          Reset
        </Button>
      </div>

      <div className="mt-4 p-4 bg-secondary/30 rounded-lg">
        <h4 className="font-medium text-foreground mb-2">Interactive Features:</h4>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Drag left or right to rotate the vehicle</li>
          <li>• Use auto-rotate for continuous 360° view</li>
          <li>• Click reset to return to front view</li>
          <li>• View all angles before making your decision</li>
        </ul>
      </div>
    </div>
  );
};

export default Vehicle360View;