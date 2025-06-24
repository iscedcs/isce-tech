import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { formatCurrency } from "@/lib/utils";
import { Check, Palette } from "lucide-react";
import AddToCartButton from "@/components/add-to-cart-button";
import { Suspense } from "react";
import { Badge } from "@/components/ui/badge";
import ProductImageGallery from "@/components/product-image-gallery";
import CardCustomizationWrapper from "@/components/card-customization-wrapper";
import MaxWidthContainer from "@/components/ui/container";
import { getProductById } from "@/actions/product";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const {success, product} = await  getProductById(params.id);

  if (!success || !product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} - ISCE NFC Store`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const  {success, product} = await getProductById(params.id);

  if (!success || !product) {
    notFound();
  }

  const isCustomizable = product.isCustomizable === true;

  return (
        <MaxWidthContainer className="pt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProductImageGallery
          images={product.images}
          productName={product.name}
        />

        <div className="flex flex-col text-white">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="mt-2 text-2xl font-semibold">
            {formatCurrency(product.price)}
          </div>

          {isCustomizable && (
            <div className="mt-2">
              <Badge
                variant="outline"
                className="bg-primary/10 text-background"
              >
                <Palette className="h-4 w-4 mr-1" />
                Customizable
              </Badge>
            </div>
          )}

          <div className="mt-4">
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          {product.color && (
            <div className="mt-4">
              <h3 className="text-lg font-medium mb-2">Color</h3>
              <div className="flex items-center">
                <div
                  className="w-6 h-6 rounded-full border border-border mr-2"
                  style={{
                    backgroundColor:
                      product.color === "Midnight Blue"
                        ? "#1a365d"
                        : product.color === "Emerald Green"
                        ? "#046c4e"
                        : product.color === "Rose Pink"
                        ? "#eb6f92"
                        : product.color === "Arctic White"
                        ? "#f8fafc"
                        : product.color === "Onyx Black"
                        ? "#121212"
                        : "",
                  }}
                ></div>
                <span>{product.color}</span>
              </div>
            </div>
          )}

          <div className="mt-6">
            <h3 className="text-lg font-medium mb-3">Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-background shrink-0 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-center text-sm">
              <div
                className={`mr-2 rounded-full w-3 h-3 ${product.stock > 0 ? "bg-green-500" : "bg-red-500"}`}
              ></div>
              <span>{product.stock > 0 ? "In stock" : "Out of stock"}</span>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              {isCustomizable ? (
                <CardCustomizationWrapper product={{ ...product, color: product.color ?? undefined }} />
              ) : (
                <AddToCartButton product={{...product,color: product.color ?? undefined}} />
              )}
            </Suspense>
          </div>
        </div>
      </div>
    </MaxWidthContainer>
  );
}
