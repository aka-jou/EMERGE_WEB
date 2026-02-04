import { useState } from "react";
import { products } from "../../data/store/products";
import type { CartItem, Product, QuantitiesMap } from "../../data/store/store.type.ts";

import StoreHeader from "../../components/store/StoreHeader";
import FiltersSidebar from "../../components/store/FiltersSidebar";
import ProductsGrid from "../../components/store/ProductsGrid";
import ProductDetailModal from "../../components/store/ProductDetailModal";
import CheckoutSidebar from "../../components/store/CheckoutSidebar";
import Navbar from "../../components/landing/NavBar.tsx";
import Footer from "../../components/landing/Footer.tsx";
export default function Store() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [quantities, setQuantities] = useState<QuantitiesMap>({});

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.product.id === product.id);
      if (existing) {
        return prevCart.map((i) =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + quantity } : i,
        );
      }
      return [...prevCart, { product, quantity }];
    });

    setShowCheckout(true);
    setSelectedProduct(null);
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((i) => i.product.id !== productId));
  };

  const updateCartQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((i) => (i.product.id === productId ? { ...i, quantity: newQuantity } : i)),
    );
  };

  const getTotalItems = () => cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-[#fafafa] min-h-screen w-full relative">
        <Navbar/>
      <StoreHeader
        showCheckout={showCheckout}
        totalItems={getTotalItems()}
        onToggleCheckout={() => setShowCheckout((s) => !s)}
      />

      <main className="mx-auto max-w-[1280px] px-[80px] py-[40px]">
        <div className="flex gap-[40px]">
          <FiltersSidebar />

          <ProductsGrid
            products={products}
            onAddToCart={(p) => addToCart(p)}
            onOpenDetails={(p) => setSelectedProduct(p)}
          />
        </div>
      </main>

      {selectedProduct && (
        <ProductDetailModal
          selectedProduct={selectedProduct}
          quantities={quantities}
          setQuantities={setQuantities}
          onClose={() => setSelectedProduct(null)}
          onAdd={(p, qty) => addToCart(p, qty)}
        />
      )}

      {showCheckout && (
        <CheckoutSidebar
          cart={cart}
          totalItems={getTotalItems()}
          onClose={() => setShowCheckout(false)}
          onRemove={removeFromCart}
          onUpdateQty={updateCartQuantity}
        />
      )}
      <Footer/>
    </div>
  );
}
