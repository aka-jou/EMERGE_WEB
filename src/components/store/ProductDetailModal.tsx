import React, { useState } from "react";
import { X, Heart, Zap, Truck, Shield, FileText, Minus, Plus, ExternalLink, CheckCircle, AlertCircle } from "lucide-react";
import type { Product, QuantitiesMap } from "../../data/store/store.type";
import { sendQuoteEmail } from "../../services/emailService";

type Props = {
  selectedProduct: Product;
  quantities: QuantitiesMap;
  setQuantities: React.Dispatch<React.SetStateAction<QuantitiesMap>>;
  onClose: () => void;
  onAdd: (product: Product, quantity: number) => void;
};

export default function ProductDetailModal({
  selectedProduct,
  quantities,
  setQuantities,
  onClose,
  onAdd,
}: Props) {
  const qty = quantities[selectedProduct.id] || 1;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  // Función para enviar la cotización por email
  const handleQuoteRequest = async () => {
    setIsSubmitting(true);
    
    const quoteData = {
      productName: selectedProduct.name,
      productModel: selectedProduct.model,
      productSku: selectedProduct.sku,
      quantity: qty,
      price: selectedProduct.price,
      category: selectedProduct.category,
    };

    const success = await sendQuoteEmail(quoteData);
    
    setIsSubmitting(false);
    
    if (success) {
      setShowSuccess(true);
      // Cerrar el modal después de 3 segundos
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 3000);
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-[40px] font-sans"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[16px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] max-w-[1050px] w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Notificación de éxito */}
        {showSuccess && (
          <div className="absolute top-4 right-20 z-50 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3 shadow-lg animate-in fade-in slide-in-from-top-5 duration-300">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <div>
              <p className="font-semibold text-green-900">¡Cotización enviada!</p>
              <p className="text-sm text-green-700">Te contactaremos pronto</p>
            </div>
          </div>
        )}

        {/* Notificación de error */}
        {showError && (
          <div className="absolute top-4 right-20 z-50 bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3 shadow-lg animate-in fade-in slide-in-from-top-5 duration-300">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <div>
              <p className="font-semibold text-red-900">Error al enviar</p>
              <p className="text-sm text-red-700">Intenta nuevamente</p>
            </div>
          </div>
        )}

        <div className="relative border-b border-[#e6e6e6] px-[40px] py-[24px]">
          <h2 className="font-semibold text-[24px] text-[#1a1a1a] pr-[40px]">
            {selectedProduct.name}
          </h2>
          <p className="font-normal text-[16px] text-[#5a5a5a] mt-[8px]">
            {selectedProduct.model}
          </p>
          <button
            className="absolute right-[16px] top-[16px] w-[31px] h-[44px] flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
            onClick={onClose}
            disabled={isSubmitting}
          >
            <X className="w-[15px] h-[20px] text-gray-600" />
          </button>
        </div>

        <div className="p-[40px]">
          <div className="flex gap-[40px]">
            <div className="flex-1">
              <div className="relative mb-[16px]">
                <img
                  src={selectedProduct.detailImage}
                  alt=""
                  className="w-full h-[433px] object-cover rounded-[8px]"
                />
                <div className="absolute top-[16px] left-[16px]">
                  <span className="inline-block px-[12px] py-[4px] bg-[#dcfce7] rounded-[9999px] font-medium text-[14px] text-[#15803d]">
                    {selectedProduct.status[0]}
                  </span>
                </div>
                <button className="absolute top-[16px] right-[16px] flex items-center justify-center size-[32px] bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors">
                  <Heart className="size-[16px] text-gray-600" />
                </button>
              </div>

              <div className="flex gap-[8px]">{/* thumbnails */}</div>
            </div>

            <div className="w-[320px]">
              <div className="space-y-[12px] mb-[24px]">
                {selectedProduct.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-[12px] p-[12px] bg-[#fef9c3] rounded-[8px]"
                  >
                    <div className="w-[24px] h-[24px] flex items-center justify-center bg-[#fef08a] rounded-full shrink-0">
                      <Zap className="size-[14px] text-yellow-700" />
                    </div>
                    <span className="font-normal text-[14px] text-[#1a1a1a]">
                      {feature.highlight && (
                        <span className="font-semibold text-[#005900]">{feature.highlight} </span>
                      )}
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mb-[24px] p-[16px] bg-[#f9fafb] rounded-[8px]">
                <div className="flex items-center gap-[8px] mb-[8px]">
                  <Truck className="size-[14px] text-[#4b5563]" />
                  <span className="font-normal text-[14px] text-[#4b5563]">
                    {selectedProduct.delivery}
                  </span>
                </div>
                <div className="flex items-center gap-[8px]">
                  <Shield className="size-[14px] text-[#4b5563]" />
                  <span className="font-normal text-[14px] text-[#4b5563]">
                    {selectedProduct.warranty}
                  </span>
                </div>
              </div>

              <p className="font-normal text-[12px] text-[#737373] mb-[16px]">
                SKU: {selectedProduct.sku}
              </p>

              <a href="#" className="flex items-center gap-[8px] text-[#006400] hover:text-[#005900] mb-[24px] transition-colors">
                <FileText className="size-[14px]" />
                <span className="font-medium text-[14px]">
                  Ver ficha técnica (PDF)
                </span>
                <ExternalLink className="size-[12px]" />
              </a>

              <div className="mb-[16px]">
                <label className="block font-normal text-[14px] text-[#171717] mb-[8px]">
                  Cantidad
                </label>
                <div className="flex items-center border border-[#d1d5db] rounded-[6px] overflow-hidden w-fit">
                  <button
                    className="w-[38px] h-[32px] flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-50"
                    onClick={() =>
                      setQuantities((prev) => ({
                        ...prev,
                        [selectedProduct.id]: Math.max(1, (prev[selectedProduct.id] || 1) - 1),
                      }))
                    }
                    disabled={isSubmitting}
                  >
                    <Minus className="size-[14px] text-gray-600" />
                  </button>

                  <div className="w-[48px] h-[32px] bg-[#f9fafb] border-l border-r border-[#d1d5db] flex items-center justify-center">
                    <span className="font-normal text-[16px] text-black">
                      {qty}
                    </span>
                  </div>

                  <button
                    className="w-[38px] h-[32px] flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-50"
                    onClick={() =>
                      setQuantities((prev) => ({
                        ...prev,
                        [selectedProduct.id]: (prev[selectedProduct.id] || 1) + 1,
                      }))
                    }
                    disabled={isSubmitting}
                  >
                    <Plus className="size-[14px] text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Botón principal de cotización con email */}
              <button
                className="w-full h-[48px] bg-[#006400] text-white rounded-[8px] font-medium text-[16px] mb-[16px] hover:bg-[#005900] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                onClick={handleQuoteRequest}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  'Solicitar cotización'
                )}
              </button>

              <div className="border-t border-[#e5e7eb] pt-[24px]">
                <div className="flex gap-[24px] border-b border-[#e5e7eb]">
                  <button className="pb-[8px] font-normal text-[14px] text-[#006400] border-b-2 border-[#006400]">
                    Descripción
                  </button>
                  <button className="pb-[8px] font-normal text-[14px] text-[#737373] hover:text-[#006400] transition-colors">
                    Especificaciones
                  </button>
                  <button className="pb-[8px] font-normal text-[14px] text-[#737373] hover:text-[#006400] transition-colors">
                    Garantías
                  </button>
                </div>
                <div className="mt-[16px]">
                  <p className="font-normal text-[14px] text-[#525252] leading-[20px]">
                    Panel solar monocristalino de alta eficiencia diseñado para maximizar la generación de energía en
                    espacios reducidos. Ideal para instalaciones residenciales que buscan el mejor rendimiento por metro
                    cuadrado disponible.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Botones inferiores */}
          <div className="flex items-center justify-between mt-[32px] pt-[24px] border-t border-[#e6e6e6]">
            <div className="flex gap-[12px]">
              <button
                className="h-[48px] px-[32px] bg-[#006400] text-white rounded-[8px] font-medium text-[16px] hover:bg-[#005900] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                onClick={() => onAdd(selectedProduct, qty)}
                disabled={isSubmitting}
              >
                Agregar al carrito
              </button>

              <button
                className="h-[48px] px-[32px] bg-white border border-[#d4d4d4] text-[#171717] rounded-[8px] font-medium text-[16px] hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleQuoteRequest}
                disabled={isSubmitting}
              >
                Agregar a cotización
              </button>
            </div>

            <p className="font-normal text-[14px] text-[#737373]">
              Descuentos por volumen disponibles
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
