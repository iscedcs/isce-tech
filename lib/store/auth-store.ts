import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthStore = {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isLoading: false,
      isAuthenticated: false,

      login: async (email: string, password: string) => {
        set({ isLoading: true });

        try {
          // This is a mock login - in a real app, you would call an API
          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1000));

          // Mock user data
          const userData = {
            id: "user_" + Math.random().toString(36).substr(2, 9),
            name: email.split("@")[0],
            email,
          };

          set({ user: userData, isAuthenticated: true, isLoading: false });
        } catch (error) {
          set({ isLoading: false });
          console.error("Login failed", error);
          throw new Error("Login failed. Please check your credentials.");
        }
      },

      register: async (name: string, email: string, password: string) => {
        set({ isLoading: true });

        try {
          // This is a mock registration - in a real app, you would call an API
          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1000));

          // Mock user data
          const userData = {
            id: "user_" + Math.random().toString(36).substr(2, 9),
            name,
            email,
          };

          set({ user: userData, isAuthenticated: true, isLoading: false });
        } catch (error) {
          set({ isLoading: false });
          console.error("Registration failed", error);
          throw new Error("Registration failed. Please try again.");
        }
      },

      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
    }),
    {
      name: "isce-auth-storage",
    }
  )
);
