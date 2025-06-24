"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductImageGallery({
  images,
  productName,
}: ProductImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState<Record<number, boolean>>({});
  const [isHovering, setIsHovering] = useState(false);
  const autoSlideTimerRef = useRef<NodeJS.Timeout | null>(null);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handleImageError = (index: number) => {
    setImageError((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  // Set up auto-sliding
  useEffect(() => {
    // Only auto-slide if there are multiple images and not hovering
    if (images.length > 1 && !isHovering) {
      autoSlideTimerRef.current = setInterval(() => {
        nextImage();
      }, 2000);
    }

    // Clean up timer on unmount or when dependencies change
    return () => {
      if (autoSlideTimerRef.current) {
        clearInterval(autoSlideTimerRef.current);
      }
    };
  }, [images.length, isHovering, currentImageIndex]);

  const handleMouseEnter = () => {
    setIsHovering(true);
    // Clear the timer when mouse enters
    if (autoSlideTimerRef.current) {
      clearInterval(autoSlideTimerRef.current);
      autoSlideTimerRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    // Timer will be restarted by the useEffect
  };

  return (
    <div
      className="space-y-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full w-full"
          >
            <Image
              src={
                imageError[currentImageIndex]
                  ? "/placeholder.svg?height=800&width=800"
                  : images[currentImageIndex]
              }
              alt={`${productName} - Image ${currentImageIndex + 1}`}
              fill
              className="object-cover"
              priority
              onError={() => handleImageError(currentImageIndex)}
            />
          </motion.div>
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 rounded-full h-10 w-10"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 rounded-full h-10 w-10"
              onClick={nextImage}
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <motion.button
              key={index}
              className={`relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0 border-2 ${
                index === currentImageIndex
                  ? "border-primary"
                  : "border-transparent"
              }`}
              onClick={() => goToImage(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={
                  imageError[index]
                    ? "/placeholder.svg?height=100&width=100"
                    : image
                }
                alt={`${productName} thumbnail ${index + 1}`}
                fill
                className="object-cover"
                onError={() => handleImageError(index)}
              />
            </motion.button>
          ))}
        </div>
      )}
    </div>
  );
}
