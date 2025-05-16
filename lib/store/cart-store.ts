import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  customization?: {
    isCustomized: boolean;
    hasCustomDesign: boolean;
    customizationFee: number;
    designServiceFee: number;
    cardColor: string;
  };
};

type CartStore = {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      subtotal: 0,

      addItem: (item: CartItem) =>
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);

          const updatedItems = existingItem
            ? state.items.map((i) =>
                i.id === item.id
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              )
            : [...state.items, item];

          const totalItems = updatedItems.reduce(
            (total, item) => total + item.quantity,
            0
          );
          const subtotal = updatedItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          );

          return { items: updatedItems, totalItems, subtotal };
        }),

      removeItem: (id: string) =>
        set((state) => {
          const updatedItems = state.items.filter((item) => item.id !== id);

          const totalItems = updatedItems.reduce(
            (total, item) => total + item.quantity,
            0
          );
          const subtotal = updatedItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          );

          return { items: updatedItems, totalItems, subtotal };
        }),

      updateQuantity: (id: string, quantity: number) =>
        // @ts-expect-error: expect error
        set((state) => {
          if (quantity <= 0) {
            return get().removeItem(id);
          }

          const updatedItems = state.items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          );

          const totalItems = updatedItems.reduce(
            (total, item) => total + item.quantity,
            0
          );
          const subtotal = updatedItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          );

          return { items: updatedItems, totalItems, subtotal };
        }),

      clearCart: () => set({ items: [], totalItems: 0, subtotal: 0 }),
    }),
    {
      name: "isce-cart-storage",
    }
  )
);
