// All types defined inline — no backend dependencies

export type Category = "school" | "college";

export interface Product {
  id: string;
  name: string;
  category: Category;
  description: string;
  sizes: string[];
  colors: string[];
  price: number;
  imageUrl: string;
}

export interface InquirySubmission {
  name: string;
  email: string;
  phone: string;
  productId?: string;
  size: string;
  color: string;
  quantity: number;
  message: string;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  productId?: string;
  size: string;
  color: string;
  quantity: number;
  message: string;
  timestamp: number;
}

// Convenience type for category filter
export type CategoryFilter = "school" | "college";

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Boys School Uniform Set",
    category: "school",
    description:
      "Premium quality boys school uniform with white shirt aur navy trousers. Durable fabric, comfortable fit for all-day wear. ISI standard material.",
    sizes: ["4", "6", "8", "10", "12", "14", "16"],
    colors: ["Navy/White", "Grey/White"],
    price: 850,
    imageUrl: "/assets/generated/hero-uniforms.dim_1200x600.jpg",
  },
  {
    id: "2",
    name: "Girls School Uniform Set",
    category: "school",
    description:
      "Elegant girls school uniform with white blouse aur navy skirt or pinafore. Easy-care fabric with lasting color. Comfortable aur stylish.",
    sizes: ["4", "6", "8", "10", "12", "14", "16"],
    colors: ["Navy/White", "Maroon/White"],
    price: 900,
    imageUrl: "/assets/generated/hero-uniforms.dim_1200x600.jpg",
  },
  {
    id: "3",
    name: "School Blazer (Navy)",
    category: "school",
    description:
      "Smart school blazer with gold embroidered buttons aur school crest embroidery option. Perfect for special occasions aur daily wear.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Navy", "Black", "Dark Green"],
    price: 1400,
    imageUrl: "/assets/generated/hero-uniforms.dim_1200x600.jpg",
  },
  {
    id: "4",
    name: "PE Sports Kit",
    category: "school",
    description:
      "Breathable polyester sports uniform with moisture-wicking technology. Jersey aur shorts/track pants included. Bulk orders available.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Navy/Gold", "Red/White", "Green/White"],
    price: 650,
    imageUrl: "/assets/generated/hero-uniforms.dim_1200x600.jpg",
  },
  {
    id: "5",
    name: "College Formal Shirt",
    category: "college",
    description:
      "Crisp cotton-blend formal shirt for college students. Wrinkle-resistant, multiple colors available to match college branding.",
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    colors: ["White", "Light Blue", "Cream"],
    price: 550,
    imageUrl: "/assets/generated/hero-uniforms.dim_1200x600.jpg",
  },
  {
    id: "6",
    name: "College Blazer with Logo",
    category: "college",
    description:
      "Premium college blazer with custom logo embroidery. Poly-wool blend fabric, tailored fit, institution-specific colors available.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Navy", "Black", "Maroon", "Dark Green"],
    price: 2200,
    imageUrl: "/assets/generated/hero-uniforms.dim_1200x600.jpg",
  },
  {
    id: "7",
    name: "College Lab Coat",
    category: "college",
    description:
      "Professional white lab coat for science aur medical colleges. Anti-static, durable cotton fabric with multiple pockets.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White"],
    price: 750,
    imageUrl: "/assets/generated/hero-uniforms.dim_1200x600.jpg",
  },
  {
    id: "8",
    name: "College Track Suit",
    category: "college",
    description:
      "Full college track suit with zip-up jacket aur matching trousers. Custom college name/logo printing available.",
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    colors: ["Navy/Gold", "Black/Red", "Maroon/White"],
    price: 1100,
    imageUrl: "/assets/generated/hero-uniforms.dim_1200x600.jpg",
  },
  {
    id: "9",
    name: "School House T-Shirt",
    category: "school",
    description:
      "Soft cotton house t-shirt in various house colors. Breathable, quick-dry fabric for outdoor activities aur sports days.",
    sizes: ["4", "6", "8", "10", "12", "14", "16", "XS", "S", "M", "L"],
    colors: ["Red", "Blue", "Green", "Yellow"],
    price: 320,
    imageUrl: "/assets/generated/hero-uniforms.dim_1200x600.jpg",
  },
  {
    id: "10",
    name: "College Salwar Kameez Set",
    category: "college",
    description:
      "Elegant salwar kameez uniform set for girl students. Comfortable kurta with matching dupatta, institution color available.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Navy/Gold", "Maroon/White", "Blue/White"],
    price: 980,
    imageUrl: "/assets/generated/hero-uniforms.dim_1200x600.jpg",
  },
];
