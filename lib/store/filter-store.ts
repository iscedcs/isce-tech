import { create } from "zustand";

type SortOption =
  | "featured"
  | "price-low-high"
  | "price-high-low"
  | "name-a-z"
  | "name-z-a";

type FilterStore = {
  category: string;
  searchQuery: string;
  sortBy: SortOption;
  priceRange: [number, number];
  setCategory: (category: string) => void;
  setSearchQuery: (query: string) => void;
  setSortBy: (sortOption: SortOption) => void;
  setPriceRange: (range: [number, number]) => void;
  resetFilters: () => void;
};

export const useFilterStore = create<FilterStore>((set) => ({
  category: "all",
  searchQuery: "",
  sortBy: "featured",
  priceRange: [0, 3000000], // 0 to 30,000 NGN

  setCategory: (category: string) => set({ category }),
  setSearchQuery: (searchQuery: string) => set({ searchQuery }),
  setSortBy: (sortBy: SortOption) => set({ sortBy }),
  setPriceRange: (priceRange: [number, number]) => set({ priceRange }),
  resetFilters: () =>
    set({
      category: "all",
      searchQuery: "",
      sortBy: "featured",
      priceRange: [0, 3000000],
    }),
}));
