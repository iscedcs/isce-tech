"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/lib/store/cart-store";
import { formatCurrency } from "@/lib/utils";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Product } from "@prisma/client";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartStore();
  const [loaded, setLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const flyImageRef = useRef<HTMLImageElement | null>(null);

  /** 3D Tilt Motion **/
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  /** POINTER FOLLOW */
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = (e.target as HTMLDivElement).getBoundingClientRect();
    x.set(e.clientX - (rect.left + rect.width / 2));
    y.set(e.clientY - (rect.top + rect.height / 2));
  };

  /** FLY-TO-CART FUNCTION **/
  const flyToCart = () => {
    const cart = document.querySelector("#nav-cart-icon");
    if (!cart || !flyImageRef.current) return;

    const cartRect = cart.getBoundingClientRect();
    const imgRect = flyImageRef.current.getBoundingClientRect();

    const clone = flyImageRef.current.cloneNode(true) as HTMLImageElement;
    clone.style.position = "fixed";
    clone.style.left = imgRect.left + "px";
    clone.style.top = imgRect.top + "px";
    clone.style.width = imgRect.width + "px";
    clone.style.height = imgRect.height + "px";
    clone.style.borderRadius = "12px";
    clone.style.zIndex = "9999";
    clone.style.pointerEvents = "none";
    clone.style.transition =
      "transform 0.9s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.9s";

    document.body.appendChild(clone);

    requestAnimationFrame(() => {
      clone.style.transform = `
        translate(${cartRect.left - imgRect.left}px, 
                  ${cartRect.top - imgRect.top}px)
        scale(0.2)
        rotate(20deg)
      `;
      clone.style.opacity = "0";
    });

    setTimeout(() => clone.remove(), 950);
  };

  /** Add to cart with animation **/
  const handleAddToCart = () => {
    flyToCart();

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: 1,
    });

    toast.success(`Added ${product.name} to cart!`);
  };

  /** RENDER **/
  return (
    <motion.div
      style={{ rotateX, rotateY }}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      transition={{ type: "spring", stiffness: 150, damping: 12 }}
      className="group relative cursor-pointer">
      {/* Glow Ring */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.35 }}
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/40 to-purple-600/30 blur-2xl pointer-events-none"
      />

      <Card className="relative rounded-2xl overflow-hidden bg-[#111]/80 border border-white/10 shadow-xl backdrop-blur-sm group-hover:border-primary/30 transition-all duration-300">
        {/* Image */}
        <Link href={`/store/${product.id}`}>
          <div className="relative block aspect-square w-full overflow-hidden">
            {!loaded && (
              <div className="absolute inset-0 bg-[#222] animate-pulse">
                <div className="h-full w-full bg-gradient-to-r from-[#111] via-[#333] to-[#111] animate-[shimmer_1.5s_infinite]" />
              </div>
            )}

            <Image
              ref={flyImageRef}
              src={
                imageError
                  ? "https://images.unsplash.com/photo-1545579133-99bb5be2a8f1?q=80"
                  : product.images[0]
              }
              alt={product.name}
              fill
              className={`object-cover transition-transform duration-700 ${
                loaded ? "opacity-100" : "opacity-0"
              } group-hover:scale-110`}
              onLoad={() => setLoaded(true)}
              onError={() => setImageError(true)}
            />
          </div>
        </Link>

        {/* Text */}
        <div className="p-4 text-white space-y-2">
          <h3 className="text-base font-semibold truncate">{product.name}</h3>
          <p className="text-sm text-white/60 line-clamp-2">
            {product.description}
          </p>
          <div className="font-bold text-secondary text-lg">
            {formatCurrency(product.price)}
          </div>
        </div>

        {/* Add to Cart */}
        <div className="px-4 pb-4">
          <motion.div
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.9 }}
            className="w-full">
            <Button
              onClick={handleAddToCart}
              size="sm"
              className="w-full rounded-full bg-secondary text-black font-semibold hover:bg-primary/90">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}
