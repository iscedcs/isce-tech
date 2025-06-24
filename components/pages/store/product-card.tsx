"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/lib/store/cart-store";
import { formatCurrency } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import { Product } from "@prisma/client";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const { addItem } = useCartStore();
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: 1,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5 }}>
      <Card className="overflow-hidden h-full flex flex-col">
        <Link
          href={`/store/${product.id}`}
          className="relative block aspect-square overflow-hidden bg-muted">
          <div className="h-full w-full">
            <Image
              src={
                imageError
                  ? "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=800&auto=format&fit=crop"
                  : product.images[0]
              }
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index < 4}
              placeholder="blur"
              blurDataURL="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=800&auto=format&fit=crop"
              onError={() => setImageError(true)}
            />
          </div>
        </Link>
        <CardContent className="p-4 flex-grow">
          <div className="space-y-1">
            <h3 className="font-medium truncate">{product.name}</h3>
            <p className="text-sm text-muted-foreground truncate">
              {product.description}
            </p>
          </div>
          <div className="mt-2 font-medium">
            {formatCurrency(product.price)}
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full">
            <Button onClick={handleAddToCart} className="w-full" size="sm">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
