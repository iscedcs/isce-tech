// import { DeviceType } from "@prisma/client";

// export type Product = {
//   id?: string;
//   name: string;
//   description: string;
//   price: number;
//   deviceType: DeviceType;
//   images: string[];
//   features: string[];
//   stock: number;
//   isCustomizable?: boolean;
//   color?: string;
// };

// export const products: Product[] = [
//   {
//     name: "Classic Pink Digital Business Card",
//     description:
//       "Effortlessly modernize the way you network with our ISCE Contactless Card. Designed for professionals, creators, and businesses, this sleek, tap-enabled card allows you to instantly share your contact details, social media, website, and more just by tapping it on any smartphone. No apps or installations needed. Featuring a dynamic, editable digital profile and an integrated QR code for universal access, it’s the only card you'll ever need. Durable, customizable, and always up to date.",
//     price: 2500000,
//     deviceType: "CARD",
//     images: ["/products/isce_card_pink.jpg"],
//     features: [
//       "NFC Tap-to-Share",
//       "Personalized QR Code Backup",
//       "Customizable Digital Profile",
//       "Real-Time Profile Updates",
//       "Multi-Link Sharing",
//     ],
//     stock: 2000,
//     isCustomizable: false,
//   },
//   {
//     name: "Classic Black Digital Business Card",
//     description:
//       "Effortlessly modernize the way you network with our ISCE Contactless Card. Designed for professionals, creators, and businesses, this sleek, tap-enabled card allows you to instantly share your contact details, social media, website, and more just by tapping it on any smartphone. No apps or installations needed. Featuring a dynamic, editable digital profile and an integrated QR code for universal access, it’s the only card you'll ever need. Durable, customizable, and always up to date.",
//     price: 2500000,
//     deviceType: "CARD",
//     images: ["/products/isce_card_black.jpg"],
//     features: [
//       "NFC Tap-to-Share",
//       "Personalized QR Code Backup",
//       "Customizable Digital Profile",
//       "Real-Time Profile Updates",
//       "Multi-Link Sharing",
//     ],
//     stock: 2000,
//     isCustomizable: false,
//   },
//   {
//     name: "Classic Blue Digital Business Card",
//     description:
//       "Effortlessly modernize the way you network with our ISCE Contactless Card. Designed for professionals, creators, and businesses, this sleek, tap-enabled card allows you to instantly share your contact details, social media, website, and more just by tapping it on any smartphone. No apps or installations needed. Featuring a dynamic, editable digital profile and an integrated QR code for universal access, it’s the only card you'll ever need. Durable, customizable, and always up to date.",
//     price: 2500000,
//     deviceType: "CARD",
//     images: ["/products/isce_card_blue.jpg"],
//     features: [
//       "NFC Tap-to-Share",
//       "Personalized QR Code Backup",
//       "Customizable Digital Profile",
//       "Real-Time Profile Updates",
//       "Multi-Link Sharing",
//     ],
//     stock: 2000,
//     isCustomizable: true,
//     color: "Midnight Blue",
//   },
//   {
//     name: "Classic Green Digital Business Card",
//     description:
//       "Effortlessly modernize the way you network with our ISCE Contactless Card. Designed for professionals, creators, and businesses, this sleek, tap-enabled card allows you to instantly share your contact details, social media, website, and more just by tapping it on any smartphone. No apps or installations needed. Featuring a dynamic, editable digital profile and an integrated QR code for universal access, it’s the only card you'll ever need. Durable, customizable, and always up to date.",
//     price: 2500000,
//     deviceType: "CARD",
//     images: ["/products/isce_card_green.jpg"],
//     features: [
//       "NFC Tap-to-Share",
//       "Personalized QR Code Backup",
//       "Customizable Digital Profile",
//       "Real-Time Profile Updates",
//       "Multi-Link Sharing",
//     ],
//     stock: 2000,
//     isCustomizable: true,
//     color: "Emerald Green",
//   },
//   {
//     name: "Classic Purple Digital Business Card",
//     description:
//       "Effortlessly modernize the way you network with our ISCE Contactless Card. Designed for professionals, creators, and businesses, this sleek, tap-enabled card allows you to instantly share your contact details, social media, website, and more just by tapping it on any smartphone. No apps or installations needed. Featuring a dynamic, editable digital profile and an integrated QR code for universal access, it’s the only card you'll ever need. Durable, customizable, and always up to date.",
//     price: 2500000,
//     deviceType: "CARD",
//     images: ["/products/isce_card_purple.jpg"],
//     features: [
//       "NFC Tap-to-Share",
//       "Personalized QR Code Backup",
//       "Customizable Digital Profile",
//       "Real-Time Profile Updates",
//       "Multi-Link Sharing",
//     ],
//     stock: 2000,
//     isCustomizable: true,
//     color: "Purple",
//   },
//   {
//     name: "Classic Digital Business Card - Arctic White",
//     description:
//       "Effortlessly modernize the way you network with our ISCE Contactless Card. Designed for professionals, creators, and businesses, this sleek, tap-enabled card allows you to instantly share your contact details, social media, website, and more just by tapping it on any smartphone. No apps or installations needed. Featuring a dynamic, editable digital profile and an integrated QR code for universal access, it’s the only card you'll ever need. Durable, customizable, and always up to date.",
//     price: 2500000,
//     deviceType: "CARD",
//     images: ["/products/isce_card_white.jpg"],
//     features: [
//       "NFC Tap-to-Share",
//       "Personalized QR Code Backup",
//       "Customizable Digital Profile",
//       "Real-Time Profile Updates",
//       "Multi-Link Sharing",
//     ],
//     stock: 2000,
//     isCustomizable: true,
//     color: "Arctic White",
//   },
// ];

// // export const featuredProducts = [
// //   products.find((p) => p.id === "nfc-card-plain-midnight")!,
// //   products.find((p) => p.id === "nfc-card-premium")!,
// //   products.find((p) => p.id === "nfc-wristband-basic")!,
// //   products.find((p) => p.id === "nfc-sticker-pack")!,
// // ];

// export const getProductById = (id: string): Product | undefined => {
//   return products.find((product) => product.id === id);
// };

// export const getProductsByDeviceType = (deviceType: string): Product[] => {
//   return products.filter((product) => product.deviceType === deviceType);
// };
