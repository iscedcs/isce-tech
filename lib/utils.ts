import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  // Convert from cents to dollars
  const dollars = amount / 100;
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
  }).format(dollars);
}

// Update the delivery options with random Lagos locations and add VAT calculation
export const deliveryOptions = [
  {
    id: "pickup",
    name: "Store Pickup",
    description: "Pick up your order at one of our store locations",
    price: 0,
    locations: [
      {
        id: "lagos-ikeja",
        name: "Lagos - Ikeja Store",
        address: "23 Allen Avenue, Ikeja, Lagos",
      },
      {
        id: "lagos-lekki",
        name: "Lagos - Lekki Store",
        address: "12B Admiralty Way, Lekki Phase 1, Lagos",
      },
      {
        id: "lagos-vi",
        name: "Lagos - Victoria Island",
        address: "Plot 1415 Adeola Hopewell Street, Victoria Island, Lagos",
      },
      {
        id: "lagos-yaba",
        name: "Lagos - Yaba Store",
        address: "34 Herbert Macaulay Way, Yaba, Lagos",
      },
    ],
  },
  {
    id: "lagos-delivery",
    name: "Lagos Delivery",
    description: "Delivery within Lagos (1-2 business days)",
    price: 200000, // 2,000 NGN
  },
  {
    id: "nationwide-delivery",
    name: "Nationwide Delivery",
    description: "Delivery to other states in Nigeria (3-5 business days)",
    price: 350000, // 3,500 NGN
  },
];

export const paymentMethods = [
  {
    id: "paystack",
    name: "Paystack",
    description: "Pay securely with Paystack",
  },
  {
    id: "flutterwave",
    name: "Flutterwave",
    description: "Pay securely with Flutterwave",
  },
];

// Add VAT calculation function
export const calculateVAT = (amount: number): number => {
  // 7.5% VAT in Nigeria
  return Math.round(amount * 0.075);
};
