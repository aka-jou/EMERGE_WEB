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
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-6 md:p-10 font-sans"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-[1050px] w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Notificaciones */}
        {showSuccess && (
          <div className="absolute top-2 sm:top-4 right-2 sm:right-20 left-2 sm:left-auto z-50 bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4 flex items-center gap-2 sm:gap-3 shadow-lg">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm sm:text-base text-green-900">¡Cotización enviada!</p>
              <p className="text-xs sm:text-sm text-green-700">Te contactaremos pronto</p>
            </div>
          </div>
        )}

        {showError && (
          <div className="absolute top-2 sm:top-4 right-2 sm:right-20 left-2 sm:left-auto z-50 bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4 flex items-center gap-2 sm:gap-3 shadow-lg">
            <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm sm:text-base text-red-900">Error al enviar</p>
              <p className="text-xs sm:text-sm text-red-700">Intenta nuevamente</p>
            </div>
          </div>
        )}

        <div className="relative border-b border-[#e6e6e6] px-4 sm:px-6 md:px-10 py-4 sm:py-6">
          <h2 className="font-semibold text-lg sm:text-xl md:text-2xl text-[#1a1a1a] pr-8 sm:pr-10">
            {selectedProduct.name}
          </h2>
          <p className="font-normal text-sm sm:text-base text-[#5a5a5a] mt-2">
            {selectedProduct.model}
          </p>
          <button
            className="absolute right-2 sm:right-4 top-2 sm:top-4 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
            onClick={onClose}
            disabled={isSubmitting}
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="p-4 sm:p-6 md:p-10">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-10">
            {/* Imagen */}
            <div className="flex-1">
              <div className="relative mb-4">
                <img
                  src={selectedProduct.detailImage}
                  alt=""
                  className="w-full h-56 sm:h-72 md:h-96 lg:h-[433px] object-cover rounded-lg"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className="inline-block px-3 py-1 bg-[#dcfce7] rounded-full font-medium text-xs sm:text-sm text-[#15803d]">
                    {selectedProduct.status[0]}
                  </span>
                </div>
                <button className="absolute top-3 sm:top-4 right-3 sm:right-4 flex items-center justify-center size-8 sm:size-9 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors">
                  <Heart className="size-4 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Info lateral */}
            <div className="w-full lg:w-80">
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {selectedProduct.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-[#fef9c3] rounded-lg"
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center bg-[#fef08a] rounded-full shrink-0">
                      <Zap className="size-3 sm:size-3.5 text-yellow-700" />
                    </div>
                    <span className="font-normal text-xs sm:text-sm text-[#1a1a1a]">
                      {feature.highlight && (
                        <span className="font-semibold text-[#005900]">{feature.highlight} </span>
                      )}
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-[#f9fafb] rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Truck className="size-3.5 sm:size-4 text-[#4b5563]" />
                  <span className="font-normal text-xs sm:text-sm text-[#4b5563]">
                    {selectedProduct.delivery}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="size-3.5 sm:size-4 text-[#4b5563]" />
                  <span className="font-normal text-xs sm:text-sm text-[#4b5563]">
                    {selectedProduct.warranty}
                  </span>
                </div>
              </div>

              <p className="font-normal text-[10px] sm:text-xs text-[#737373] mb-3 sm:mb-4">
                SKU: {selectedProduct.sku}
              </p>

              <a href="#" className="flex items-center gap-2 text-[#006400] hover:text-[#005900] mb-4 sm:mb-6 transition-colors">
                <FileText className="size-3.5 sm:size-4" />
                <span className="font-medium text-xs sm:text-sm">
                  Ver ficha técnica (PDF)
                </span>
                <ExternalLink className="size-3" />
              </a>

              <div className="mb-3 sm:mb-4">
                <label className="block font-normal text-xs sm:text-sm text-[#171717] mb-2">
                  Cantidad
                </label>
                <div className="flex items-center border border-[#d1d5db] rounded-md overflow-hidden w-fit">
                  <button
                    className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-50"
                    onClick={() =>
                      setQuantities((prev) => ({
                        ...prev,
                        [selectedProduct.id]: Math.max(1, (prev[selectedProduct.id] || 1) - 1),
                      }))
                    }
                    disabled={isSubmitting}
                  >
                    <Minus className="size-3.5 text-gray-600" />
                  </button>

                  <div className="w-11 sm:w-12 h-9 sm:h-10 bg-[#f9fafb] border-l border-r border-[#d1d5db] flex items-center justify-center">
                    <span className="font-normal text-sm sm:text-base text-black">
                      {qty}
                    </span>
                  </div>

                  <button
                    className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-50"
                    onClick={() =>
                      setQuantities((prev) => ({
                        ...prev,
                        [selectedProduct.id]: (prev[selectedProduct.id] || 1) + 1,
                      }))
                    }
                    disabled={isSubmitting}
                  >
                    <Plus className="size-3.5 text-gray-600" />
                  </button>
                </div>
              </div>

              <button
                className="w-full h-11 sm:h-12 bg-[#006400] text-white rounded-lg font-medium text-sm sm:text-base mb-3 sm:mb-4 hover:bg-[#005900] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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

              <div className="border-t border-[#e5e7eb] pt-4 sm:pt-6">
                <div className="flex gap-4 sm:gap-6 border-b border-[#e5e7eb] overflow-x-auto">
                  <button className="pb-2 font-normal text-xs sm:text-sm text-[#006400] border-b-2 border-[#006400] whitespace-nowrap">
                    Descripción
                  </button>
                  <button className="pb-2 font-normal text-xs sm:text-sm text-[#737373] hover:text-[#006400] transition-colors whitespace-nowrap">
                    Especificaciones
                  </button>
                  <button className="pb-2 font-normal text-xs sm:text-sm text-[#737373] hover:text-[#006400] transition-colors whitespace-nowrap">
                    Garantías
                  </button>
                </div>
                <div className="mt-3 sm:mt-4">
                  <p className="font-normal text-xs sm:text-sm text-[#525252] leading-relaxed">
                    Panel solar monocristalino de alta eficiencia diseñado para maximizar la generación de energía en
                    espacios reducidos. Ideal para instalaciones residenciales que buscan el mejor rendimiento por metro
                    cuadrado disponible.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Botones inferiores */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#e6e6e6]">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
              <button
                className="h-11 sm:h-12 px-6 sm:px-8 bg-[#006400] text-white rounded-lg font-medium text-sm sm:text-base hover:bg-[#005900] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed w-full sm:w-auto"
                onClick={() => onAdd(selectedProduct, qty)}
                disabled={isSubmitting}
              >
                Agregar al carrito
              </button>

              <button
                className="h-11 sm:h-12 px-6 sm:px-8 bg-white border border-[#d4d4d4] text-[#171717] rounded-lg font-medium text-sm sm:text-base hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                onClick={handleQuoteRequest}
                disabled={isSubmitting}
              >
                Agregar a cotización
              </button>
            </div>

            <p className="font-normal text-xs sm:text-sm text-[#737373] text-center sm:text-right">
              Descuentos por volumen disponibles
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
