"use client";

import type React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useFilterStore } from "@/lib/store/filter-store";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import LazyLoad from "react-lazyload";
import { formatCurrency } from "@/lib/utils";
import { Search, SlidersHorizontal, X } from "lucide-react";
import ProductCard from "@/components/pages/store/product-card";
import MaxWidthContainer from "@/components/ui/container";
import { getProducts } from "@/actions/product";
import { Product } from "@prisma/client";

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
      const { success, products, totalCount, error } = await getProducts({
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
        console.error(error);
        setDisplayProducts([]);
      }
    }
    fetchProducts();
  }, [deviceType, searchQuery, sortBy, priceRange, page]);

  const handleDeviceTypeChange = (value: string) => {
    setDeviceType(value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(localSearch);
  };

  const handlePriceRangeChange = (value: number[]) => {
    setLocalPriceRange(value as [number, number]);
  };

  const applyFilters = () => {
    setPriceRange(localPriceRange);
    setIsFilterOpen(false);
  };

  const handleReset = () => {
    resetFilters();
    setLocalPriceRange([0, 300000]);
    setLocalSearch("");
    setIsFilterOpen(false);
  };

  return (
    <div className="bg-foreground">
      <MaxWidthContainer className="">
        <motion.div
          className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Products
            </h1>
            <p className="text-muted-foreground">
              Browse our collection of NFC products
            </p>
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <form
              onSubmit={handleSearchSubmit}
              className="relative flex-1 md:w-64">
              <Input
                type="search"
                placeholder="Search products..."
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                className="pr-8"
              />
              <Button
                type="submit"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full">
                <Search className="h-4 w-4" />
              </Button>
            </form>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="relative">
              <SlidersHorizontal className="h-4 w-4" />
              {(priceRange[0] > 0 ||
                priceRange[1] < 300000 ||
                sortBy !== "featured") && (
                <span className="absolute -top-1 -right-1 h-2 w-2 bg-primary rounded-full"></span>
              )}
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.1 }}>
          <Tabs
            defaultValue={deviceType}
            className="w-full"
            onValueChange={handleDeviceTypeChange}>
            <TabsList className="mb-8 flex flex-wrap h-auto bg-foreground">
              {categories.map((cat) => (
                <TabsTrigger key={cat.id} value={cat.id} className="mb-2">
                  {cat.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <AnimatePresence>
              {isFilterOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mb-8 p-4 border border-border rounded-lg text-white">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Filters</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsFilterOpen(false)}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="mb-2 block">Price Range</Label>
                      <div className="px-2">
                        <Slider
                          defaultValue={localPriceRange}
                          min={0}
                          max={300000}
                          step={1000}
                          value={localPriceRange}
                          onValueChange={handlePriceRangeChange}
                          className="my-6"
                        />
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>{formatCurrency(localPriceRange[0])}</span>
                        <span>{formatCurrency(localPriceRange[1])}</span>
                      </div>
                    </div>

                    <div>
                      <Label className="mb-2 block">Sort By</Label>
                      <div className="space-y-2">
                        {sortOptions.map((option) => (
                          <div key={option.id} className="flex items-center">
                            <input
                              type="radio"
                              id={option.id}
                              name="sortBy"
                              value={option.id}
                              checked={sortBy === option.id}
                              onChange={() => setSortBy(option.id as any)}
                              className="mr-2"
                            />
                            <Label
                              htmlFor={option.id}
                              className="text-sm cursor-pointer">
                              {option.name}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 mt-6">
                    <Button variant="outline" onClick={handleReset}>
                      Reset
                    </Button>
                    <Button onClick={applyFilters}>Apply Filters</Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={deviceType + sortBy + searchQuery + priceRange.join("-")}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}>
                {displayProducts.length > 0 ? (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {displayProducts.map((product, index) => (
                        <LazyLoad key={product.id} height={400} once>
                          <ProductCard product={product} index={index} />
                        </LazyLoad>
                      ))}
                    </div>
                    {displayProducts.length > pageSize && (
                      <div className="flex justify-center gap-2 mt-8">
                        <Button
                          disabled={page === 1}
                          onClick={() => setPage(page - 1)}>
                          Previous
                        </Button>
                        <span>
                          Page {page} of {totalPages}
                        </span>
                        <Button
                          disabled={page === totalPages}
                          onClick={() => setPage(page + 1)}>
                          Next
                        </Button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">
                      No products found matching your criteria.
                    </p>
                    <Button
                      variant="outline"
                      onClick={handleReset}
                      className="mt-4">
                      Reset Filters
                    </Button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </Tabs>
        </motion.div>
      </MaxWidthContainer>
    </div>
  );
}
