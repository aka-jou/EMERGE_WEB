export default function FiltersSidebar() {
  return (
    <aside className="w-[256px] shrink-0 font-sans">
      <div className="bg-white border border-[#e5e5e5] rounded-[8px] p-[24px]">
        <div className="flex items-center justify-between mb-[24px]">
          <h3 className="font-normal text-[16px] text-[#171717]">Filtros</h3>
          <button className="font-normal text-[14px] text-[#525252]">
            Limpiar
          </button>
        </div>

        {/* Marca/OEM */}
        <div className="mb-[24px]">
          <label className="block font-normal text-[14px] text-[#171717] mb-[8px]">
            Marca/OEM
          </label>
          <div className="space-y-[8px]">
            {[
              { label: "Canadian Solar", count: 24 },
              { label: "JA Solar", count: 18 },
              { label: "Trina Solar", count: 12 },
            ].map((x) => (
              <label
                key={x.label}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-[8px]">
                  <input
                    type="checkbox"
                    className="size-[13px] rounded-[1px] border-[0.5px] border-black"
                  />
                  <span className="font-normal text-[14px] text-[#404040]">
                    {x.label}
                  </span>
                </div>
                <span className="font-normal text-[12px] text-[#737373]">
                  ({x.count})
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Potencia */}
        <div className="mb-[24px]">
          <label className="block font-normal text-[14px] text-[#171717] mb-[8px]">
            Potencia (W)
          </label>
          <div className="space-y-[8px]">
            {[
              { label: "300-400W", count: 15 },
              { label: "400-500W", count: 28 },
              { label: "500-600W", count: 11 },
            ].map((x) => (
              <label
                key={x.label}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-[8px]">
                  <input
                    type="checkbox"
                    className="size-[13px] rounded-[1px] border-[0.5px] border-black"
                  />
                  <span className="font-normal text-[14px] text-[#404040]">
                    {x.label}
                  </span>
                </div>
                <span className="font-normal text-[12px] text-[#737373]">
                  ({x.count})
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Voltaje */}
        <div className="mb-[24px]">
          <label className="block font-normal text-[14px] text-[#171717] mb-[8px]">
            Voltaje (V)
          </label>
          <div className="space-y-[8px]">
            {[
              { label: "12V", count: 8 },
              { label: "24V", count: 22 },
              { label: "48V", count: 34 },
            ].map((x) => (
              <label
                key={x.label}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-[8px]">
                  <input
                    type="checkbox"
                    className="size-[13px] rounded-[1px] border-[0.5px] border-black"
                  />
                  <span className="font-normal text-[14px] text-[#404040]">
                    {x.label}
                  </span>
                </div>
                <span className="font-normal text-[12px] text-[#737373]">
                  ({x.count})
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Disponibilidad */}
        <div className="mb-[24px]">
          <label className="block font-normal text-[14px] text-[#171717] mb-[8px]">
            Disponibilidad
          </label>
          <div className="space-y-[8px]">
            {[
              { label: "En stock", count: 42 },
              { label: "Bajo pedido", count: 12 },
            ].map((x) => (
              <label
                key={x.label}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-[8px]">
                  <input
                    type="checkbox"
                    className="size-[13px] rounded-[1px] border-[0.5px] border-black"
                  />
                  <span className="font-normal text-[14px] text-[#404040]">
                    {x.label}
                  </span>
                </div>
                <span className="font-normal text-[12px] text-[#737373]">
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
