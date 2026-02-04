import type { Product } from "../../data/store/store.type";
import ProductCard from "./ProductCard";

type Props = {
  products: readonly Product[];
  onAddToCart: (product: Product) => void;
  onOpenDetails: (product: Product) => void;
};

export default function ProductsGrid({
  products,
  onAddToCart,
  onOpenDetails,
}: Props) {
  return (
    <div className="flex-1">
      <div className=""></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onAdd={() => onAddToCart(p)}
            onDetails={() => onOpenDetails(p)}
          />
        ))}
      </div>
    </div>
  );
}
