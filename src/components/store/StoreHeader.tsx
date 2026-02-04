import { Search, ShoppingCart } from 'lucide-react';

type Props = {
  showCheckout: boolean;
  totalItems: number;
  onToggleCheckout: () => void;
};

export default function StoreHeader({
  showCheckout,
  totalItems,
  onToggleCheckout,
}: Props) {
  return (
    <header className="bg-white border-b border-[#e5e5e5] font-sans">
      <div className="mx-auto max-w-[1280px] px-[80px] py-[16px]">
        {/* Input y carrito en la misma línea */}
        <div className="flex items-center gap-[16px]">
          {/* Barra de búsqueda */}
          <div className="relative flex-1">
            <Search className="absolute left-[16px] top-1/2 -translate-y-1/2 size-[16px] text-gray-400" />
            <input
              type="text"
              placeholder="Busca por modelo, marca, potencia o voltaje..."
              className="w-full h-[44px] pl-[48px] pr-[16px] border border-[#d4d4d4] rounded-[8px] font-normal text-[16px] text-black placeholder:text-[#adaebc] focus:outline-none focus:ring-2 focus:ring-[#006400] focus:border-transparent"
            />
          </div>

          {/* Botón del carrito */}
          <button
            className="relative size-[44px] flex items-center justify-center border border-[#d4d4d4] rounded-[8px] hover:bg-gray-50 transition-colors flex-shrink-0"
            onClick={onToggleCheckout}
            aria-label={showCheckout ? "Cerrar carrito" : "Abrir carrito"}
          >
            <ShoppingCart className="size-[20px] text-[#171717]" />
            {totalItems > 0 && (
              <span className="absolute -right-[6px] -top-[6px] bg-[#006400] text-white text-[10px] font-semibold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-[4px]">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
