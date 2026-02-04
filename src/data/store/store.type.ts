export interface Feature {
  icon: string;
  text: string;
  highlight?: string;  // 👈 Agrega esta línea (opcional con ?)
}

export interface Product {
  id: number;
  name: string;
  model: string;
  category: string;
  image: any;
  detailImage: any;
  price: string | null;
  sku: string;
  features: Feature[];  // 👈 Usa la interfaz Feature
  delivery: string;
  warranty: string;
  status: string[];
  isFavorite: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type QuantitiesMap = Record<number, number>;
