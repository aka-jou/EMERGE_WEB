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
        className="relative bg-white w-[480px] h-full shadow-xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-[#e5e5e5] px-[24px] py-[20px] flex items-center justify-between z-10">
          <h2 className="font-semibold text-[20px] text-[#111827]">
            Carrito de cotización
          </h2>
          <button 
            onClick={onClose}
            className="hover:bg-gray-100 rounded p-1 transition-colors"
          >
            <X className="size-[20px] text-gray-600" />
          </button>
        </div>

        <div className="p-[24px]">
          {cart.length === 0 ? (
            <div className="text-center py-[80px]">
              <p className="font-normal text-[16px] text-[#737373]">
                Tu carrito está vacío
              </p>
            </div>
          ) : (
            <div className="space-y-[24px]">
              {cart.map((item) => (
                <div
                  key={item.product.id}
                  className="border border-[#e5e5e5] rounded-[8px] p-[16px]"
                >
                  <div className="flex gap-[16px] mb-[16px]">
                    {/* Imagen del producto */}
                    <div className="w-[80px] h-[80px] bg-[#f5f5f5] rounded-[8px] overflow-hidden flex items-center justify-center">
                      <img 
                        src={item.product.image} 
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[18px] text-[#111827] mb-[4px]">
                        {item.product.name}
                      </h3>
                      <p className="font-normal text-[14px] text-[#4b5563] mb-[8px]">
                        {item.product.model}
                      </p>
                      <div className="flex items-center gap-[16px]">
                        <div className="flex items-center gap-[8px]">
                          <Truck className="size-[14px] text-[#4b5563]" />
                          <span className="font-normal text-[14px] text-[#4b5563]">
                            {item.product.delivery}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[12px]">
                      <span className="font-normal text-[14px] text-[#4b5563]">
                        Cantidad:
                      </span>

                      <div className="flex items-center border border-[#d1d5db] rounded-[6px] overflow-hidden">
                        <button
                          className="w-[38px] h-[32px] flex items-center justify-center hover:bg-gray-100 transition-colors"
                          onClick={() => onUpdateQty(item.product.id, item.quantity - 1)}
                        >
                          <Minus className="size-[14px] text-gray-600" />
                        </button>

                        <div className="w-[48px] h-[32px] bg-[#f9fafb] border-l border-r border-[#d1d5db] flex items-center justify-center">
                          <span className="font-normal text-[16px] text-black">
                            {item.quantity}
                          </span>
                        </div>

                        <button
                          className="w-[38px] h-[32px] flex items-center justify-center hover:bg-gray-100 transition-colors"
                          onClick={() => onUpdateQty(item.product.id, item.quantity + 1)}
                        >
                          <Plus className="size-[14px] text-gray-600" />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center gap-[16px]">
                      <span className="font-bold text-[20px] text-[#111827]">
                        {item.product.price || "Consultar"}
                      </span>
                      <button 
                        onClick={() => onRemove(item.product.id)}
                        className="hover:bg-red-50 p-2 rounded transition-colors"
                      >
                        <Trash2 className="size-[16px] text-red-600" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="sticky bottom-0 bg-white border-t border-[#e5e5e5] p-[24px]">
            <div className="mb-[16px]">
              <div className="flex items-center justify-between mb-[8px]">
                <span className="font-normal text-[16px] text-[#4b5563]">
                  Subtotal ({totalItems} items):
                </span>
                <span className="font-bold text-[20px] text-[#111827]">
                  Consultar
                </span>
              </div>
              <p className="font-normal text-[14px] text-[#737373]">
                Precios finales disponibles al solicitar cotización
              </p>
            </div>

            <button className="w-full h-[48px] bg-[#006400] text-white rounded-[8px] font-semibold text-[16px] mb-[12px] hover:bg-[#005900] transition-colors">
              Solicitar cotización
            </button>
            <button 
              onClick={onClose}
              className="w-full h-[48px] bg-white border border-[#d4d4d4] text-[#171717] rounded-[8px] font-medium text-[16px] hover:bg-gray-50 transition-colors"
            >
              Continuar comprando
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
