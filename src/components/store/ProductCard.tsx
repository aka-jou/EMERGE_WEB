import { Heart, Truck, Shield, Zap, Gauge, Home, Battery, Cable, Plug } from 'lucide-react';
import type { Product } from "../../data/store/store.type";

type Props = {
  product: Product;
  onAdd: () => void;
  onDetails: () => void;
};

const iconMap: Record<string, any> = {
  zap: Zap,
  gauge: Gauge,
  home: Home,
  battery: Battery,
  cable: Cable,
  plug: Plug
};

export default function ProductCard({ product, onAdd, onDetails }: Props) {
  return (
    <div className="bg-white border border-[#e5e5e5] rounded-lg overflow-hidden font-sans hover:shadow-lg transition-shadow">
      <div className="relative h-48 sm:h-56 md:h-64 lg:h-[305px] bg-[#f5f5f5]">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-2 left-2 flex gap-2">
          {product.status.map((status, idx) => (
            <span
              key={idx}
              className="inline-block px-2 py-1 bg-[#f5f5f5] rounded font-normal text-[10px] sm:text-xs text-[#262626]"
            >
              {status}
            </span>
          ))}
        </div>
        <button className="absolute bottom-2 right-2 flex items-center justify-center size-8 sm:size-9 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors active:scale-95">
          <Heart className="size-4 text-gray-600" />
        </button>
      </div>

      <div className="p-3 sm:p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="px-2 py-1 bg-[#f5f5f5] rounded font-normal text-[10px] sm:text-xs text-[#737373]">
            {product.category}
          </span>
        </div>

        <h3 className="font-normal text-sm sm:text-base text-[#171717] mb-1 line-clamp-2">
          {product.name}
        </h3>
        <p className="font-normal text-xs sm:text-sm text-[#525252] mb-3 line-clamp-1">
          {product.model}
        </p>

        <div className="space-y-1 mb-3 sm:mb-4">
          {product.features.slice(0, 3).map((feature, idx) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div key={idx} className="flex items-center gap-2">
                {IconComponent && <IconComponent className="size-3.5 sm:size-4 shrink-0 text-[#A3A3A3]" />}
                <span className="font-normal text-xs sm:text-sm text-[#404040] line-clamp-1">
                  {feature.highlight && (
                    <span className="font-semibold text-[#005900]">{feature.highlight} </span>
                  )}
                  {feature.text}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mb-3 sm:mb-4">
          <p className="font-normal text-base sm:text-lg text-[#171717]">
            {product.price || "Solicitar precio"}
          </p>
          <p className="font-normal text-[10px] sm:text-xs text-[#737373]">
            SKU: {product.sku}
          </p>
        </div>

        <div className="space-y-1 mb-3 sm:mb-4">
          <div className="flex items-center gap-2">
            <Truck className="size-3 shrink-0 text-[#525252]" />
            <span className="font-normal text-[10px] sm:text-xs text-[#525252]">
              {product.delivery}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="size-3 shrink-0 text-[#525252]" />
            <span className="font-normal text-[10px] sm:text-xs text-[#525252]">
              {product.warranty}
            </span>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            className="flex-1 h-9 sm:h-10 bg-[#006400] text-white rounded-lg font-normal text-xs sm:text-sm hover:bg-[#005900] transition-colors active:bg-[#004700]"
            onClick={onAdd}
          >
            Agregar
          </button>
          <button
            className="flex-1 h-9 sm:h-10 bg-transparent border border-[#d4d4d4] text-[#171717] rounded-lg font-normal text-xs sm:text-sm hover:bg-gray-50 transition-colors active:bg-gray-100"
            onClick={onDetails}
          >
            Detalles
          </button>
        </div>
      </div>
    </div>
  );
}
