import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Suspense } from "react";
import MaxWidthContainer from "@/components/ui/container";
import { getProductById } from "@/actions/product";
import ProductPageSkeleton from "@/lib/shared/product-page-skeleton";
import ProductPageContent from "@/components/pages/store/product-page-content";

interface ProductPageProps {
  params: { id: string };
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { success, product } = await getProductById(params.id);

  if (!success || !product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.name} - ISCE NFC Store`,
    description: product.description,
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <MaxWidthContainer className="pt-24 pb-20">
      <Suspense fallback={<ProductPageSkeleton />}>
        {/* Server Component */}
        <ProductPageContent params={params} />
      </Suspense>
    </MaxWidthContainer>
  );
}
