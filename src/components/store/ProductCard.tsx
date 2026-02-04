import { Heart, Truck, Shield, Zap, Gauge, Home, Battery, Cable, Plug } from 'lucide-react';
import type { Product } from "../../data/store/store.type";

type Props = {
  product: Product;
  onAdd: () => void;
  onDetails: () => void;
};

// Mapeo de iconos
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
    <div className="bg-white border border-[#e5e5e5] rounded-[8px] overflow-hidden font-sans">
      <div className="relative h-[305px] bg-[#f5f5f5]">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-[8px] left-[8px] flex gap-[8px]">
          {product.status.map((status, idx) => (
            <span
              key={idx}
              className="inline-block px-[8px] py-[4px] bg-[#f5f5f5] rounded-[4px] font-normal text-[12px] text-[#262626]"
            >
              {status}
            </span>
          ))}
        </div>
        <button className="absolute bottom-[8px] right-[8px] flex items-center justify-center size-[32px] bg-white rounded-full shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] hover:bg-gray-50 transition-colors">
          <Heart className="size-[16px] text-gray-600" />
        </button>
      </div>

      <div className="p-[16px]">
        <div className="flex items-center justify-between mb-[8px]">
          <span className="px-[8px] py-[4px] bg-[#f5f5f5] rounded-[4px] font-normal text-[12px] text-[#737373]">
            {product.category}
          </span>
        </div>

        <h3 className="font-normal text-[16px] text-[#171717] mb-[4px]">
          {product.name}
        </h3>
        <p className="font-normal text-[14px] text-[#525252] mb-[12px]">
          {product.model}
        </p>

        <div className="space-y-[4px] mb-[16px]">
          {product.features.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div key={idx} className="flex items-center gap-[8px]">
                {IconComponent && <IconComponent className="size-[16px] shrink-0 text-[#A3A3A3]" />}
                <span className="font-normal text-[14px] text-[#404040]">
                  {feature.highlight && (
                    <span className="font-semibold text-[#005900]">{feature.highlight} </span>
                  )}
                  {feature.text}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mb-[16px]">
          <p className="font-normal text-[18px] text-[#171717]">
            {product.price || "Solicitar precio"}
          </p>
          <p className="font-normal text-[12px] text-[#737373]">
            SKU: {product.sku}
          </p>
        </div>

        <div className="space-y-[4px] mb-[16px]">
          <div className="flex items-center gap-[8px]">
            <Truck className="size-[12px] shrink-0 text-[#525252]" />
            <span className="font-normal text-[12px] text-[#525252]">
              {product.delivery}
            </span>
          </div>
          <div className="flex items-center gap-[8px]">
            <Shield className="size-[12px] shrink-0 text-[#525252]" />
            <span className="font-normal text-[12px] text-[#525252]">
              {product.warranty}
            </span>
          </div>
        </div>

        <div className="flex gap-[8px]">
          <button
            className="flex-1 h-[40px] bg-[#006400] text-white rounded-[8px] font-normal text-[14px] hover:bg-[#005900] transition-colors"
            onClick={onAdd}
          >
            Agregar
          </button>
          <button
            className="flex-1 h-[40px] bg-transparent border border-[#d4d4d4] text-[#171717] rounded-[8px] font-normal text-[14px] hover:bg-gray-50 transition-colors"
            onClick={onDetails}
          >
            Detalles
          </button>
        </div>
      </div>
    </div>
  );
}
