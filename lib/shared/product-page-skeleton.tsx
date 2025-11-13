"use client";

export default function ProductPageSkeleton() {
  return (
    <div className="pt-24 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Image Gallery Skeleton */}
        <div className="space-y-4">
          <div className="w-full aspect-square bg-[#1a1a1a] rounded-2xl" />

          <div className="grid grid-cols-4 gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-20 bg-[#1a1a1a] rounded-xl" />
            ))}
          </div>
        </div>

        {/* Right: Details Skeleton */}
        <div className="space-y-6 text-white">
          <div className="h-8 w-3/4 bg-[#1a1a1a] rounded-md" /> {/* Title */}
          <div className="h-6 w-32 bg-[#1a1a1a] rounded-md" /> {/* Price */}
          <div className="h-6 w-28 bg-[#1a1a1a] rounded-md" />{" "}
          {/* Customizable Badge */}
          <div className="h-24 w-full bg-[#1a1a1a] rounded-md" />{" "}
          {/* Description */}
          <div className="space-y-3">
            <div className="h-6 w-24 bg-[#1a1a1a] rounded-md" /> {/* Color */}
            <div className="h-8 w-20 bg-[#1a1a1a] rounded-full" />{" "}
            {/* Color circle */}
          </div>
          <div className="space-y-2">
            <div className="h-6 w-24 bg-[#1a1a1a] rounded-md" />{" "}
            {/* Features */}
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-5 w-full bg-[#1a1a1a] rounded-md" />
            ))}
          </div>
          <div className="h-5 w-28 bg-[#1a1a1a] rounded-md" /> {/* Stock */}
          <div className="h-12 w-full bg-[#1a1a1a] rounded-full" />{" "}
          {/* Add to cart button */}
        </div>
      </div>
    </div>
  );
}
