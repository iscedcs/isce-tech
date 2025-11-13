"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useFilterStore } from "@/lib/store/filter-store";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import LazyLoad from "react-lazyload";
import { formatCurrency } from "@/lib/utils";
import { Search, SlidersHorizontal, X } from "lucide-react";
import ProductCard from "@/components/pages/store/product-card";
import MaxWidthContainer from "@/components/ui/container";
import { getProducts } from "@/actions/product";
import { Product } from "@prisma/client";
import { Label } from "@/components/ui/label";

export default function ProductsPage() {
  const {
    deviceType,
    searchQuery,
    sortBy,
    priceRange,
    setDeviceType,
    setSearchQuery,
    setSortBy,
    setPriceRange,
    resetFilters,
  } = useFilterStore();

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [displayProducts, setDisplayProducts] = useState<Product[]>([]);
  const [localPriceRange, setLocalPriceRange] = useState(priceRange);
  const [localSearch, setLocalSearch] = useState(searchQuery);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 12;

  const categories = [
    { id: "all", name: "All Products" },
    { id: "CARD", name: "Cards" },
    { id: "WRISTBAND", name: "Wristbands" },
    { id: "STICKER", name: "Stickers" },
    { id: "KEYCHAIN", name: "Keychains" },
  ];

  const sortOptions = [
    { id: "featured", name: "Featured" },
    { id: "price-low-high", name: "Price: Low to High" },
    { id: "price-high-low", name: "Price: High to Low" },
    { id: "name-a-z", name: "Name: A to Z" },
    { id: "name-z-a", name: "Name: Z to A" },
  ];

  useEffect(() => {
    async function fetchProducts() {
      const { success, products, totalCount } = await getProducts({
        deviceType,
        searchQuery,
        sortBy,
        priceRange,
        page,
        pageSize,
      });

      if (success && products) {
        setDisplayProducts(products as Product[]);
        setTotalPages(Math.ceil(totalCount / pageSize));
      } else {
        setDisplayProducts([]);
      }
    }
    fetchProducts();
  }, [deviceType, searchQuery, sortBy, priceRange, page]);

  const applyFilters = () => {
    setPriceRange(localPriceRange);
    setSearchQuery(localSearch);
    setIsFilterOpen(false);
  };

  const handleReset = () => {
    resetFilters();
    setLocalPriceRange([0, 300000]);
    setLocalSearch("");
    setIsFilterOpen(false);
  };

  return (
    <div className="bg-foreground min-h-screen pb-24">
      <MaxWidthContainer>
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Store</h1>
          <p className="text-muted-foreground mt-1 md:text-lg">
            Discover premium NFC products for your digital lifestyle
          </p>
        </motion.div>

        {/* Search + Filter */}
        <div className="flex items-center gap-3 mb-8">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSearchQuery(localSearch);
            }}
            className="relative flex-1">
            <Input
              placeholder="Search products..."
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              className="bg-primary/20 border border-primary/30 text-white h-11 rounded-full pl-10"
            />
            <Search className="h-4 w-4 absolute top-1/2 left-3 -translate-y-1/2 text-white/60" />
          </form>

          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-white/20"
            onClick={() => setIsFilterOpen(true)}>
            <SlidersHorizontal className="h-5 w-5 text-primary" />
          </Button>
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue={deviceType} onValueChange={setDeviceType}>
          <TabsList
            className="
    flex gap-2 bg-transparent mb-6 
    overflow-x-auto overflow-y-clip md:overflow-x-visible 
    p-1 scrollbar-none md:pl-0 pl-56
  ">
            {" "}
            {categories.map((c) => (
              <TabsTrigger
                key={c.id}
                value={c.id}
                className="rounded-full px-5 py-2 text-white data-[state=active]:bg-primary data-[state=active]:text-white">
                {c.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Product Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={deviceType + searchQuery + sortBy + priceRange.join("-")}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}>
              {displayProducts.length > 0 ? (
                <>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {displayProducts.map((product, idx) => (
                      <LazyLoad key={product.id} offset={200}>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.03 }}>
                          <ProductCard product={product} />
                        </motion.div>
                      </LazyLoad>
                    ))}
                  </div>

                  {/* Pagination */}
                  <div className="flex justify-center items-center gap-3 mt-10">
                    {totalPages > 1 && (
                      <div className="flex justify-center items-center gap-3 mt-10">
                        <Button
                          size="icon"
                          variant="outline"
                          disabled={page === 1}
                          onClick={() => setPage(page - 1)}
                          className="rounded-full">
                          ‹
                        </Button>

                        <span className="text-white text-sm">
                          Page {page} of {totalPages}
                        </span>

                        <Button
                          size="icon"
                          variant="outline"
                          disabled={page === totalPages}
                          onClick={() => setPage(page + 1)}
                          className="rounded-full">
                          ›
                        </Button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="text-center grid mx-auto  justify-center items-center  py-16 text-muted-foreground">
                  No products found.
                  <Button
                    variant="outline"
                    className="mt-4 md:w-96 w-full"
                    onClick={handleReset}>
                    Reset Filters
                  </Button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </Tabs>

        {/* MOBILE FILTER DRAWER */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.25 }}
              className="fixed bottom-0 left-0 w-full h-[70vh] bg-primary z-50 p-6 rounded-t-3xl shadow-xl">
              <div className="flex justify-between mb-6">
                <h2 className="text-white text-lg font-semibold">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)}>
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>

              <div className="space-y-6 text-white">
                {/* Sort */}
                <div>
                  <Label className="block mb-3">Sort By</Label>
                  <div className="space-y-2">
                    {sortOptions.map((option) => (
                      <label
                        key={option.id}
                        className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="sort"
                          checked={sortBy === option.id}
                          onChange={() => setSortBy(option.id as any)}
                        />
                        {option.name}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-between mt-10">
                <Button
                  variant="outline"
                  className="w-1/2 mr-2"
                  onClick={handleReset}>
                  Reset
                </Button>
                <Button className="w-1/2" onClick={applyFilters}>
                  Apply
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </MaxWidthContainer>
    </div>
  );
}
