export interface Product {
  id: string;
  name: string;
  subName: string;
  category: "powder" | "tablet";
  flavour: string;
  price: string;
  weight: string;
  ageGroup: string;
  description: string;
  themeColor: string;
  gradient: string;
  features: string[];
  dosage: string;
  /** Path to product image (add PNG/JPG to public/) */
  imagePath: string;
  /** Scroll animation frames (if available) */
  folderPath: string;
  frameCount: number;
  framePrefix: string;
  frameExt: string;
}

export const products: Product[] = [
  {
    id: "pure-colostrum-powder",
    name: "Pure Colostrum Powder",
    subName: "100% pure. No flavour added.",
    category: "powder",
    flavour: "Unflavoured",
    price: "₹1,499",
    weight: "500g",
    ageGroup: "8+ years",
    description: "100% Pure Colostrum Powder — IgG 20% — Daily Wellness",
    themeColor: "#7B5EA7",
    gradient: "linear-gradient(135deg, #B894D8 0%, #7B5EA7 100%)",
    features: ["100% Pure", "IgG 20%", "No Flavour Added", "500g"],
    dosage:
      "Children (8–12): 1 scoop twice daily. Teens & Adults: 1–2 scoops twice daily. Mix with milk or water.",
    imagePath: "/images/pure-colostrum-powder-product.png",
    folderPath: "",
    frameCount: 0,
    framePrefix: "",
    frameExt: "",
  },
  {
    id: "vanilla-colostrum-powder",
    name: "Vanilla Colostrum Powder",
    subName: "Smooth vanilla. Daily immunity.",
    category: "powder",
    flavour: "Vanilla",
    price: "₹1,499",
    weight: "500g",
    ageGroup: "8+ years",
    description: "Flavoured Colostrum Powder — Vanilla — IgG 20%",
    themeColor: "#C8A97E",
    gradient: "linear-gradient(135deg, #F5E6D3 0%, #C8A97E 100%)",
    features: ["Vanilla Flavour", "IgG 20%", "Family Friendly", "500g"],
    dosage:
      "Children (8–12): 1 scoop twice daily. Teens & Adults: 1–2 scoops twice daily. Mix with milk or water.",
    imagePath: "/images/vanilla-colostrum-powder-product.png",
    folderPath: "",
    frameCount: 0,
    framePrefix: "",
    frameExt: "",
  },
  {
    id: "chocolate-powder",
    name: "Chocolate Colostrum Powder",
    subName: "Indulgence meets immunity.",
    category: "powder",
    flavour: "Chocolate",
    price: "₹1,499",
    weight: "500g",
    ageGroup: "8+ years",
    description: "Flavoured Colostrum Powder — Chocolate — IgG 20%",
    themeColor: "#6D4C41",
    gradient: "linear-gradient(135deg, #9C6B52 0%, #6D4C41 100%)",
    features: ["Chocolate Flavour", "IgG 20%", "Premium Taste", "500g"],
    dosage:
      "Children (8–12): ½ to 1 scoop daily. Teens & Adults: 1 scoop daily. Mix with milk or water.",
    imagePath: "/images/chocolate-powder-product.png",
    folderPath: "/images/chocolate-powder",
    frameCount: 40,
    framePrefix: "ezgif-frame-",
    frameExt: ".jpg",
  },
  {
    id: "strawberry-tablets",
    name: "Strawberry Colostrum Tablets",
    subName: "Bright taste. Smart nutrition.",
    category: "tablet",
    flavour: "Strawberry",
    price: "₹999",
    weight: "60 Tablets (500mg)",
    ageGroup: "3+ years",
    description: "Flavoured Chewable Tablets — Strawberry — IgG 20%",
    themeColor: "#E98AA9",
    gradient: "linear-gradient(135deg, #FFD3E0 0%, #E88DA8 100%)",
    features: ["Strawberry Flavour", "Chewable", "IgG 20%", "60 Tablets"],
    dosage:
      "Children (3–8): 1–2 tablets twice daily. Teens & Adults: 2 tablets twice daily.",
    imagePath: "/images/strawberry-product.png",
    folderPath: "/images/strawberry",
    frameCount: 40,
    framePrefix: "ezgif-frame-",
    frameExt: ".jpg",
  },
  {
    id: "american-ice-cream-tablets",
    name: "American Ice Cream Tablets",
    subName: "Delicious immunity support.",
    category: "tablet",
    flavour: "American Ice Cream",
    price: "₹999",
    weight: "60 Tablets (500mg)",
    ageGroup: "3+ years",
    description: "Flavoured Chewable Tablets — American Ice Cream — IgG 20%",
    themeColor: "#C490E0",
    gradient: "linear-gradient(135deg, #EDC9FA 0%, #C490E0 100%)",
    features: ["Ice Cream Flavour", "Chewable", "IgG 20%", "60 Tablets"],
    dosage:
      "Children (3–8): 1–2 tablets twice daily. Teens & Adults: 2 tablets twice daily.",
    imagePath: "/images/american-ice-cream-product.png",
    folderPath: "/images/american-ice-cream",
    frameCount: 40,
    framePrefix: "ezgif-frame-",
    frameExt: ".jpg",
  },
];

export const powderProducts = products.filter((p) => p.category === "powder");
export const tabletProducts = products.filter((p) => p.category === "tablet");
