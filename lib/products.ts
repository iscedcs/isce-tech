export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  features: string[];
  inStock: boolean;
  isCustomizable?: boolean;
  color?: string;
};

// Update the product prices to reflect the price range (stickers starting at 10,000 NGN)
export const products: Product[] = [
  {
    id: "nfc-card-basic",
    name: "Basic NFC Business Card",
    description:
      "A sleek, minimalist NFC business card for seamless contact sharing.",
    price: 1500000, // 15,000 NGN
    category: "cards",
    images: [
      "https://images.unsplash.com/photo-1589758438368-0ad531db3366?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574279606130-09958dc756f7?q=80&w=800&auto=format&fit=crop",
    ],
    features: [
      "Matte black finish",
      "Standard credit card size",
      "Up to 500 character storage",
      "Compatible with all NFC-enabled devices",
      "One-tap contact sharing",
    ],
    inStock: true,
    isCustomizable: false,
  },
  {
    id: "nfc-card-premium",
    name: "Premium NFC Business Card",
    description:
      "Premium metal NFC business card with advanced features and elegant design.",
    price: 2500000, // 25,000 NGN
    category: "cards",
    images: [
      "https://images.unsplash.com/photo-1598517511194-033ef3cc4a56?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598517538225-7057f1758b05?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598517521229-9d947a43a194?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598517471909-9cbcf5d7320e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598517528780-e70f9e9b6178?q=80&w=800&auto=format&fit=crop",
    ],
    features: [
      "Stainless steel construction",
      "Laser engraving option",
      "Up to 2000 character storage",
      "Compatible with all NFC-enabled devices",
      "One-tap contact sharing",
      "Custom profile dashboard",
    ],
    inStock: true,
    isCustomizable: false,
  },
  {
    id: "nfc-card-plain-midnight",
    name: "Plain NFC Card - Midnight Blue",
    description:
      "Customizable plain NFC card in a deep, elegant midnight blue color.",
    price: 1200000, // 12,000 NGN
    category: "cards",
    images: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop&flip=true",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop&blur=10",
    ],
    features: [
      "Fully customizable design",
      "Midnight blue color",
      "Standard credit card size",
      "Up to 1000 character storage",
      "Compatible with all NFC-enabled devices",
      "One-tap contact sharing",
    ],
    inStock: true,
    isCustomizable: true,
    color: "Midnight Blue",
  },
  {
    id: "nfc-card-plain-emerald",
    name: "Plain NFC Card - Emerald Green",
    description:
      "Customizable plain NFC card in a vibrant emerald green color.",
    price: 1200000, // 12,000 NGN
    category: "cards",
    images: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=800&auto=format&fit=crop&flip=true",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=800&auto=format&fit=crop&blur=10",
    ],
    features: [
      "Fully customizable design",
      "Emerald green color",
      "Standard credit card size",
      "Up to 1000 character storage",
      "Compatible with all NFC-enabled devices",
      "One-tap contact sharing",
    ],
    inStock: true,
    isCustomizable: true,
    color: "Emerald Green",
  },
  {
    id: "nfc-card-plain-rose",
    name: "Plain NFC Card - Rose Pink",
    description: "Customizable plain NFC card in a soft rose pink color.",
    price: 1200000, // 12,000 NGN
    category: "cards",
    images: [
      "https://images.unsplash.com/photo-1579546929662-711aa81148cf?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579546929662-711aa81148cf?q=80&w=800&auto=format&fit=crop&flip=true",
      "https://images.unsplash.com/photo-1579546929662-711aa81148cf?q=80&w=800&auto=format&fit=crop&blur=10",
    ],
    features: [
      "Fully customizable design",
      "Rose pink color",
      "Standard credit card size",
      "Up to 1000 character storage",
      "Compatible with all NFC-enabled devices",
      "One-tap contact sharing",
    ],
    inStock: true,
    isCustomizable: true,
    color: "Rose Pink",
  },
  {
    id: "nfc-card-plain-arctic",
    name: "Plain NFC Card - Arctic White",
    description: "Customizable plain NFC card in a clean arctic white color.",
    price: 1200000, // 12,000 NGN
    category: "cards",
    images: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop&flip=true",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop&blur=10",
    ],
    features: [
      "Fully customizable design",
      "Arctic white color",
      "Standard credit card size",
      "Up to 1000 character storage",
      "Compatible with all NFC-enabled devices",
      "One-tap contact sharing",
    ],
    inStock: true,
    isCustomizable: true,
    color: "Arctic White",
  },
  {
    id: "nfc-card-plain-onyx",
    name: "Plain NFC Card - Onyx Black",
    description: "Customizable plain NFC card in a sleek onyx black color.",
    price: 1200000, // 12,000 NGN
    category: "cards",
    images: [
      "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578898887932-dce23a595ad4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?q=80&w=800&auto=format&fit=crop",
    ],
    features: [
      "Fully customizable design",
      "Onyx black color",
      "Standard credit card size",
      "Up to 1000 character storage",
      "Compatible with all NFC-enabled devices",
      "One-tap contact sharing",
    ],
    inStock: true,
    isCustomizable: true,
    color: "Onyx Black",
  },
  {
    id: "nfc-wristband-basic",
    name: "NFC Wristband",
    description: "Comfortable silicone wristband with embedded NFC technology.",
    price: 1200000, // 12,000 NGN
    category: "wristbands",
    images: [
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535378620166-273708d44e4c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?q=80&w=800&auto=format&fit=crop",
    ],
    features: [
      "Waterproof silicone material",
      "Adjustable size",
      "Up to 500 character storage",
      "Compatible with all NFC-enabled devices",
      "Available in multiple colors",
    ],
    inStock: true,
    isCustomizable: false,
  },
  {
    id: "nfc-sticker-pack",
    name: "NFC Stickers (5-Pack)",
    description: "Versatile NFC stickers that can be applied to any surface.",
    price: 1000000, // 10,000 NGN
    category: "stickers",
    images: [
      "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620288627194-7a378522a782?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620288627194-7a378522a782?q=80&w=800&auto=format&fit=crop&flip=true",
    ],
    features: [
      "Strong adhesive backing",
      "Waterproof coating",
      "Up to 500 character storage per sticker",
      "Compatible with all NFC-enabled devices",
      "25mm diameter",
    ],
    inStock: true,
    isCustomizable: false,
  },
  {
    id: "nfc-card-wooden",
    name: "Wooden NFC Business Card",
    description: "Eco-friendly wooden NFC business card with natural finish.",
    price: 2000000, // 20,000 NGN
    category: "cards",
    images: [
      "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578898887932-dce23a595ad4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594642451629-a8a81c098560?q=80&w=800&auto=format&fit=crop",
    ],
    features: [
      "Sustainable bamboo material",
      "Natural wood grain finish",
      "Up to 1000 character storage",
      "Compatible with all NFC-enabled devices",
      "One-tap contact sharing",
      "Biodegradable",
    ],
    inStock: true,
    isCustomizable: false,
  },
  {
    id: "nfc-keychain",
    name: "NFC Keychain",
    description:
      "Durable keychain with embedded NFC chip for quick access to your digital profile.",
    price: 1100000, // 11,000 NGN
    category: "accessories",
    images: [
      "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578898887932-dce23a595ad4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?q=80&w=800&auto=format&fit=crop",
    ],
    features: [
      "Metal and leather construction",
      "Compact design",
      "Up to 500 character storage",
      "Compatible with all NFC-enabled devices",
      "Keyring included",
    ],
    inStock: true,
    isCustomizable: false,
  },
  {
    id: "nfc-card-corporate",
    name: "Corporate NFC Cards (10-Pack)",
    description:
      "Bulk pack of NFC business cards perfect for teams and companies.",
    price: 12000000, // 120,000 NGN
    category: "cards",
    images: [
      "https://images.unsplash.com/photo-1572502427484-1c1d51b5f0ce?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572502427484-1c1d51b5f0ce?q=80&w=800&auto=format&fit=crop&flip=true",
      "https://images.unsplash.com/photo-1572502427484-1c1d51b5f0ce?q=80&w=800&auto=format&fit=crop&blur=10",
    ],
    features: [
      "Consistent branding across all cards",
      "Matte or glossy finish options",
      "Up to 1000 character storage per card",
      "Compatible with all NFC-enabled devices",
      "Bulk management dashboard",
    ],
    inStock: true,
    isCustomizable: false,
  },
  {
    id: "nfc-wristband-premium",
    name: "Premium Leather NFC Wristband",
    description: "Stylish leather wristband with embedded NFC technology.",
    price: 1800000, // 18,000 NGN
    category: "wristbands",
    images: [
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=800&auto=format&fit=crop&flip=true",
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=800&auto=format&fit=crop&blur=10",
    ],
    features: [
      "Genuine leather material",
      "Adjustable clasp",
      "Up to 1000 character storage",
      "Compatible with all NFC-enabled devices",
      "Available in brown and black",
    ],
    inStock: true,
    isCustomizable: false,
  },
];

export const featuredProducts = [
  products.find((p) => p.id === "nfc-card-plain-midnight")!,
  products.find((p) => p.id === "nfc-card-premium")!,
  products.find((p) => p.id === "nfc-wristband-basic")!,
  products.find((p) => p.id === "nfc-sticker-pack")!,
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((product) => product.category === category);
};
