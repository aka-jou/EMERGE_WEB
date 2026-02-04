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
      <div className="mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-[80px] py-3 sm:py-4">
        {/* Input y carrito en la misma línea */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Barra de búsqueda */}
          <div className="relative flex-1">
            <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar productos..."
              className="w-full h-10 sm:h-11 pl-10 sm:pl-12 pr-3 sm:pr-4 border border-[#d4d4d4] rounded-lg font-normal text-sm sm:text-base text-black placeholder:text-[#adaebc] focus:outline-none focus:ring-2 focus:ring-[#006400] focus:border-transparent"
            />
          </div>

          {/* Botón del carrito */}
          <button
            className="relative size-10 sm:size-11 flex items-center justify-center border border-[#d4d4d4] rounded-lg hover:bg-gray-50 transition-colors flex-shrink-0"
            onClick={onToggleCheckout}
            aria-label={showCheckout ? "Cerrar carrito" : "Abrir carrito"}
          >
            <ShoppingCart className="size-5 text-[#171717]" />
            {totalItems > 0 && (
              <span className="absolute -right-1.5 -top-1.5 bg-[#006400] text-white text-[10px] font-semibold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
