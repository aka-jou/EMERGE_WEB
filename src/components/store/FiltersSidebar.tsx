import { ChevronDown, ChevronUp, Filter, X } from 'lucide-react';
import { useState } from 'react';

export default function FiltersSidebar() {
  const [openSections, setOpenSections] = useState({
    marca: true,
    potencia: true,
    voltaje: true,
    disponibilidad: true,
  });
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const FiltersContent = () => (
    <div className="bg-white border border-[#e5e5e5] rounded-lg p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="font-normal text-sm sm:text-base text-[#171717]">Filtros</h3>
        <button className="font-normal text-xs sm:text-sm text-[#525252] hover:text-[#171717]">
          Limpiar
        </button>
      </div>

      {/* Marca/OEM */}
      <div className="mb-3 sm:mb-4 border-b border-[#e5e5e5] pb-3 sm:pb-4">
        <button
          onClick={() => toggleSection('marca')}
          className="w-full flex items-center justify-between mb-2"
        >
          <label className="font-normal text-sm text-[#171717] cursor-pointer">
            Marca/OEM
          </label>
          {openSections.marca ? (
            <ChevronUp className="size-4 text-[#525252]" />
          ) : (
            <ChevronDown className="size-4 text-[#525252]" />
          )}
        </button>
        
        {openSections.marca && (
          <div className="space-y-2 mt-2">
            {[
              { label: "Canadian Solar", count: 24 },
              { label: "JA Solar", count: 18 },
              { label: "Trina Solar", count: 12 },
            ].map((x) => (
              <label
                key={x.label}
                className="flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="size-3.5 sm:size-4 rounded border-black cursor-pointer"
                  />
                  <span className="font-normal text-xs sm:text-sm text-[#404040]">
                    {x.label}
                  </span>
                </div>
                <span className="font-normal text-xs text-[#737373]">
                  ({x.count})
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Potencia */}
      <div className="mb-3 sm:mb-4 border-b border-[#e5e5e5] pb-3 sm:pb-4">
        <button
          onClick={() => toggleSection('potencia')}
          className="w-full flex items-center justify-between mb-2"
        >
          <label className="font-normal text-sm text-[#171717] cursor-pointer">
            Potencia (W)
          </label>
          {openSections.potencia ? (
            <ChevronUp className="size-4 text-[#525252]" />
          ) : (
            <ChevronDown className="size-4 text-[#525252]" />
          )}
        </button>
        
        {openSections.potencia && (
          <div className="space-y-2 mt-2">
            {[
              { label: "300-400W", count: 15 },
              { label: "400-500W", count: 28 },
              { label: "500-600W", count: 11 },
            ].map((x) => (
              <label
                key={x.label}
                className="flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="size-3.5 sm:size-4 rounded border-black cursor-pointer"
                  />
                  <span className="font-normal text-xs sm:text-sm text-[#404040]">
                    {x.label}
                  </span>
                </div>
                <span className="font-normal text-xs text-[#737373]">
                  ({x.count})
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Voltaje */}
      <div className="mb-3 sm:mb-4 border-b border-[#e5e5e5] pb-3 sm:pb-4">
        <button
          onClick={() => toggleSection('voltaje')}
          className="w-full flex items-center justify-between mb-2"
        >
          <label className="font-normal text-sm text-[#171717] cursor-pointer">
            Voltaje (V)
          </label>
          {openSections.voltaje ? (
            <ChevronUp className="size-4 text-[#525252]" />
          ) : (
            <ChevronDown className="size-4 text-[#525252]" />
          )}
        </button>
        
        {openSections.voltaje && (
          <div className="space-y-2 mt-2">
            {[
              { label: "12V", count: 8 },
              { label: "24V", count: 22 },
              { label: "48V", count: 34 },
            ].map((x) => (
              <label
                key={x.label}
                className="flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="size-3.5 sm:size-4 rounded border-black cursor-pointer"
                  />
                  <span className="font-normal text-xs sm:text-sm text-[#404040]">
                    {x.label}
                  </span>
                </div>
                <span className="font-normal text-xs text-[#737373]">
                  ({x.count})
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Disponibilidad */}
      <div>
        <button
          onClick={() => toggleSection('disponibilidad')}
          className="w-full flex items-center justify-between mb-2"
        >
          <label className="font-normal text-sm text-[#171717] cursor-pointer">
            Disponibilidad
          </label>
          {openSections.disponibilidad ? (
            <ChevronUp className="size-4 text-[#525252]" />
          ) : (
            <ChevronDown className="size-4 text-[#525252]" />
          )}
        </button>
        
        {openSections.disponibilidad && (
          <div className="space-y-2 mt-2">
            {[
              { label: "En stock", count: 42 },
              { label: "Bajo pedido", count: 12 },
            ].map((x) => (
              <label
                key={x.label}
                className="flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="size-3.5 sm:size-4 rounded border-black cursor-pointer"
                  />
                  <span className="font-normal text-xs sm:text-sm text-[#404040]">
                    {x.label}
                  </span>
                </div>
                <span className="font-normal text-xs text-[#737373]">
                  ({x.count})
                </span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Sidebar desktop - Visible solo en lg y superior */}
      <aside className="hidden lg:block w-[256px] shrink-0 font-sans">
        <FiltersContent />
      </aside>

      {/* Botón flotante para móvil - Visible solo en móvil */}
      <button
        onClick={() => setShowMobileFilters(true)}
        className="lg:hidden fixed bottom-6 right-6 z-40 bg-[#006400] text-white pl-4 pr-5 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-[#005900] transition-colors active:scale-95"
      >
        <Filter className="size-5" />
        <span className="font-medium text-sm">Filtros</span>
      </button>

      {/* Modal de filtros para móvil */}
      {showMobileFilters && (
        <div className="lg:hidden fixed inset-0 z-50 font-sans">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowMobileFilters(false)}
          />
          
          {/* Panel de filtros */}
          <div className="absolute inset-x-0 bottom-0 bg-white rounded-t-2xl max-h-[85vh] overflow-y-auto">
            {/* Header del modal */}
            <div className="sticky top-0 bg-white border-b border-[#e5e5e5] px-4 py-4 flex items-center justify-between z-10 rounded-t-2xl">
              <h3 className="font-semibold text-lg text-[#171717]">Filtros</h3>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="size-5 text-gray-600" />
              </button>
            </div>

            {/* Contenido de filtros */}
            <div className="p-4">
              <FiltersContent />
            </div>

            {/* Footer con botones */}
            <div className="sticky bottom-0 bg-white border-t border-[#e5e5e5] px-4 py-4 flex gap-3">
              <button
                onClick={() => setShowMobileFilters(false)}
                className="flex-1 h-11 bg-white border border-[#d4d4d4] text-[#171717] rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="flex-1 h-11 bg-[#006400] text-white rounded-lg font-semibold text-sm hover:bg-[#005900] transition-colors"
              >
                Aplicar filtros
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
