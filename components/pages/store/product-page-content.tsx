import { notFound } from "next/navigation";
import { formatCurrency } from "@/lib/utils";
import { Check, Palette } from "lucide-react";
import AddToCartButton from "@/components/add-to-cart-button";
import { Badge } from "@/components/ui/badge";
import ProductImageGallery from "@/components/product-image-gallery";
import CardCustomizationWrapper from "@/components/card-customization-wrapper";
import { getProductById } from "@/actions/product";

interface Props {
  params: {
    id: string;
  };
}

export default async function ProductPageContent({ params }: Props) {
  const { success, product } = await getProductById(params.id);

  if (!success || !product) notFound();

  const isCustomizable = product.isCustomizable === true;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-white">
      <ProductImageGallery images={product.images} productName={product.name} />

      <div className="flex flex-col space-y-6">
        <h1 className="text-3xl font-bold">{product.name}</h1>

        <div className="text-2xl font-semibold text-secondary">
          {formatCurrency(product.price)}
        </div>

        {isCustomizable && (
          <Badge
            variant="outline"
            className="bg-primary/10 w-36 text-background">
            <Palette className="h-4 w-4 mr-1" /> Customizable
          </Badge>
        )}

        <p className="text-muted-foreground">{product.description}</p>

        {/* Color */}
        {product.color && (
          <div>
            <h3 className="text-lg font-medium mb-2">Color</h3>

            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded-full border"
                style={{ backgroundColor: "#fff" }}
              />
              <span>{product.color}</span>
            </div>
          </div>
        )}

        {/* Features */}
        <div>
          <h3 className="text-lg font-medium mb-3">Features</h3>
          <ul className="space-y-2">
            {product.features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <Check className="h-5 w-5 text-secondary shrink-0 mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Stock */}
        <div className="flex items-center text-sm">
          <div
            className={`mr-2 rounded-full w-3 h-3 ${
              product.stock > 0 ? "bg-green-500" : "bg-red-500"
            }`}
          />
          {product.stock > 0 ? "In stock" : "Out of stock"}
        </div>

        {/* Button */}
        <div className="pt-2">
          {isCustomizable ? (
            <CardCustomizationWrapper
              product={{ ...product, color: product.color ?? undefined }}
            />
          ) : (
            <AddToCartButton
              product={{ ...product, color: product.color ?? undefined }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
