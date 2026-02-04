import { X, Truck, Minus, Plus, Trash2 } from 'lucide-react';
import type { CartItem } from "../../data/store/store.type";

type Props = {
  cart: CartItem[];
  totalItems: number;
  onClose: () => void;
  onRemove: (productId: number) => void;
  onUpdateQty: (productId: number, newQty: number) => void;
};

export default function CheckoutSidebar({
  cart,
  totalItems,
  onClose,
  onRemove,
  onUpdateQty,
}: Props) {
  return (
    <div className="fixed inset-0 z-50 flex justify-end font-sans" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50" />

      <div
        className="relative bg-white w-full sm:w-[480px] h-full shadow-xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-[#e5e5e5] px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between z-10">
          <h2 className="font-semibold text-lg sm:text-xl text-[#111827]">
            Carrito de cotización
          </h2>
          <button 
            onClick={onClose}
            className="hover:bg-gray-100 rounded p-1 transition-colors"
          >
            <X className="size-5 text-gray-600" />
          </button>
        </div>

        <div className="p-4 sm:p-6">
          {cart.length === 0 ? (
            <div className="text-center py-16 sm:py-20">
              <p className="font-normal text-base text-[#737373]">
                Tu carrito está vacío
              </p>
            </div>
          ) : (
            <div className="space-y-4 sm:space-y-6">
              {cart.map((item) => (
                <div
                  key={item.product.id}
                  className="border border-[#e5e5e5] rounded-lg p-3 sm:p-4"
                >
                  <div className="flex gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#f5f5f5] rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0">
                      <img 
                        src={item.product.image} 
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-sm sm:text-base text-[#111827] mb-1 line-clamp-2">
                        {item.product.name}
                      </h3>
                      <p className="font-normal text-xs sm:text-sm text-[#4b5563] mb-2 line-clamp-1">
                        {item.product.model}
                      </p>
                      <div className="flex items-center gap-2">
                        <Truck className="size-3 sm:size-3.5 text-[#4b5563] flex-shrink-0" />
                        <span className="font-normal text-xs text-[#4b5563]">
                          {item.product.delivery}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="font-normal text-xs sm:text-sm text-[#4b5563]">
                        Cantidad:
                      </span>

                      <div className="flex items-center border border-[#d1d5db] rounded-md overflow-hidden">
                        <button
                          className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-gray-100 transition-colors active:bg-gray-200"
                          onClick={() => onUpdateQty(item.product.id, item.quantity - 1)}
                        >
                          <Minus className="size-3 sm:size-3.5 text-gray-600" />
                        </button>

                        <div className="w-10 sm:w-12 h-8 sm:h-10 bg-[#f9fafb] border-l border-r border-[#d1d5db] flex items-center justify-center">
                          <span className="font-normal text-sm sm:text-base text-black">
                            {item.quantity}
                          </span>
                        </div>

                        <button
                          className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-gray-100 transition-colors active:bg-gray-200"
                          onClick={() => onUpdateQty(item.product.id, item.quantity + 1)}
                        >
                          <Plus className="size-3 sm:size-3.5 text-gray-600" />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-4">
                      <span className="font-bold text-base sm:text-lg text-[#111827]">
                        {item.product.price || "Consultar"}
                      </span>
                      <button 
                        onClick={() => onRemove(item.product.id)}
                        className="hover:bg-red-50 p-2 rounded transition-colors active:bg-red-100"
                      >
                        <Trash2 className="size-4 text-red-600" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="sticky bottom-0 bg-white border-t border-[#e5e5e5] p-4 sm:p-6 safe-area-bottom">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-normal text-sm sm:text-base text-[#4b5563]">
                  Subtotal ({totalItems} items):
                </span>
                <span className="font-bold text-lg sm:text-xl text-[#111827]">
                  Consultar
                </span>
              </div>
              <p className="font-normal text-xs sm:text-sm text-[#737373]">
                Precios finales disponibles al solicitar cotización
              </p>
            </div>

            <button className="w-full h-11 sm:h-12 bg-[#006400] text-white rounded-lg font-semibold text-sm sm:text-base mb-3 hover:bg-[#005900] transition-colors active:bg-[#004700]">
              Solicitar cotización
            </button>
            <button 
              onClick={onClose}
              className="w-full h-11 sm:h-12 bg-white border border-[#d4d4d4] text-[#171717] rounded-lg font-medium text-sm sm:text-base hover:bg-gray-50 transition-colors active:bg-gray-100"
            >
              Continuar comprando
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
