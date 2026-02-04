// src/data/store/products.ts
import type { Product } from "./store.type";
import x from "../../assets/x.png";
import panell from "../../assets/panell.png";
import batery from "../../assets/batery.png";

// ✅ Exporta como array
export const products: Product[] = [
  {
    id: 1,
    name: "Panel Solar Canadian Solar 450W Monocristalino",
    model: "Serie HiKu7 - CS7L-450MS",
    category: "PANELES SOLARES",
    image: x,
    detailImage: x,
    price: null,
    sku: "CS450-HK7",
    features: [
      { icon: "zap", text: "de potencia máxima", highlight: "450W" },
      { icon: "gauge", text: "de eficiencia", highlight: "21.2%" },
      { icon: "home", text: "Instalaciones residenciales" }
    ],
    delivery: "Entrega 3-5 días",
    warranty: "Garantía 25 años",
    status: ["En stock", "Nuevo"],
    isFavorite: false,
  },
  {
    id: 2,
    name: "Inversor Victron MultiPlus-II 3000VA 24V",
    model: "Serie MultiPlus-II - MP2432",
    category: "INVERSORES",
    image: panell,
    detailImage: panell,
    price: "$1,245.00",
    sku: "VIC-MP2432",
    features: [
      { icon: "zap", text: "/ 24V DC", highlight: "3000W" },
      { icon: "battery", text: "MPPT integrado" },
      { icon: "plug", text: "Sistemas off-grid" }
    ],
    delivery: "Entrega 7-10 días",
    warranty: "Garantía 60 meses",
    status: ["Bajo pedido", "Más vendido"],
    isFavorite: true,
  },
  {
    id: 3,
    name: "Batería Pylontech US3000C 3.5kWh LiFePO4",
    model: "Serie US3000C - PYL-US3000C",
    category: "BATERÍAS",
    image: batery,
    detailImage: batery,
    price: "$899.00",
    sku: "PYL-US3000C",
    features: [
      { icon: "battery", text: "/ 48V nominal", highlight: "3.5kWh" },
      { icon: "gauge", text: "ciclos LiFePO4", highlight: "6000+" },
      { icon: "cable", text: "Expandible hasta 16 unidades" }
    ],
    delivery: "Entrega 2-4 días",
    warranty: "Garantía 3 meses",
    status: ["En stock"],
    isFavorite: false,
  }
];
