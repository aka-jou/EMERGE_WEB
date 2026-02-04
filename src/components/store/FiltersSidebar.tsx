export default function FiltersSidebar() {
  return (
    <aside className="w-full lg:w-[256px] shrink-0 font-sans mb-6 lg:mb-0">
      <div className="bg-white border border-[#e5e5e5] rounded-lg p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h3 className="font-normal text-sm sm:text-base text-[#171717]">Filtros</h3>
          <button className="font-normal text-xs sm:text-sm text-[#525252] hover:text-[#171717]">
            Limpiar
          </button>
        </div>

        {/* Marca/OEM */}
        <div className="mb-4 sm:mb-6">
          <label className="block font-normal text-sm text-[#171717] mb-2">
            Marca/OEM
          </label>
          <div className="space-y-2">
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
        </div>

        {/* Potencia */}
        <div className="mb-4 sm:mb-6">
          <label className="block font-normal text-sm text-[#171717] mb-2">
            Potencia (W)
          </label>
          <div className="space-y-2">
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
        </div>

        {/* Voltaje */}
        <div className="mb-4 sm:mb-6">
          <label className="block font-normal text-sm text-[#171717] mb-2">
            Voltaje (V)
          </label>
          <div className="space-y-2">
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
        </div>

        {/* Disponibilidad */}
        <div>
          <label className="block font-normal text-sm text-[#171717] mb-2">
            Disponibilidad
          </label>
          <div className="space-y-2">
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
        </div>
      </div>
    </aside>
  );
}
