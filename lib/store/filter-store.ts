import { create } from "zustand";

type SortOption =
  | "featured"
  | "price-low-high"
  | "price-high-low"
  | "name-a-z"
  | "name-z-a";

type FilterStore = {
  deviceType: string;
  searchQuery: string;
  sortBy: SortOption;
  priceRange: [number, number];
  setDeviceType: (deviceType: string) => void;
  setSearchQuery: (query: string) => void;
  setSortBy: (sortOption: SortOption) => void;
  setPriceRange: (range: [number, number]) => void;
  resetFilters: () => void;
};

export const useFilterStore = create<FilterStore>((set) => ({
  deviceType: "all",
  searchQuery: "",
  sortBy: "name-a-z",
  priceRange: [0, 3000000], // 0 to 300,000 NGN

  setDeviceType: (deviceType: string) => set({ deviceType }),
  setSearchQuery: (searchQuery: string) => set({ searchQuery }),
  setSortBy: (sortBy: SortOption) => set({ sortBy }),
  setPriceRange: (priceRange: [number, number]) => set({ priceRange }),
  resetFilters: () =>
    set({
      deviceType: "all",
      searchQuery: "",
      sortBy: "name-a-z",
      priceRange: [0, 3000000],
    }),
}));
